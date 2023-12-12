import { Input, EventEmitter, Output, ChangeDetectorRef, Directive } from '@angular/core';
import { createValueForSchema, jsonSchemaDataTypes, jsonSchemaDataFormats, inferType, dataTypeMap, getIcon, getCurrentType } from '../json-editor.helper';
import * as ɵngcc0 from '@angular/core';
export class ObjectNode {
    constructor(cdr) {
        this.cdr = cdr;
        this.required = false;
        this.showKnownProperties = false;
        this.modelChange = new EventEmitter();
        this.schemaUpdate = new EventEmitter();
        this.requiredCache = {};
        this.initialized = false;
        this.dataTypes = [...jsonSchemaDataTypes, ...jsonSchemaDataFormats];
        this.propertyCounter = 1;
        this.propertyId = 1;
        this.propertyIndex = {};
        this.duplicatedFields = new Map();
        this.dataTypeMap = dataTypeMap;
    }
    ngOnInit() {
        this.update();
    }
    ngOnChanges(changes) {
        if (changes.model !== undefined || changes.schema !== undefined) {
            this.update();
        }
    }
    update() {
        setTimeout(() => {
            for (const prop in this.schema.properties) {
                if (Array.isArray(this.schema.properties[prop].type) && this.schema.properties[prop].type.length > 0) {
                    if (!this.schema.properties[prop].$meta) {
                        this.schema.properties[prop].$meta = {};
                    }
                    this.schema.properties[prop].$meta.type = [...this.schema.properties[prop].type];
                    if (this.model[prop] !== undefined) {
                        this.schema.properties[prop] = Object.assign(Object.assign({}, this.schema.properties[prop]), inferType(this.model[prop], this.typeCheckOverrides, this.schema.properties[prop].$meta.type));
                    }
                    else {
                        this.schema.properties[prop].type = this.schema.properties[prop].type[0];
                        this.schema.properties[prop].$meta.currentType = getCurrentType(this.schema.properties[prop]);
                    }
                }
            }
            this.updateRequiredCache();
            this.indexProperties();
            this.addRequiredProperties();
            this.updateIcons();
            this.initialized = true;
        });
    }
    /**
     * Updates a property on the model and emits the change event
     *
     * @param propName
     * @param value
     */
    updateProp(id, value) {
        const propName = this.propertyIndex[id].propertyName;
        this.model[propName] = value;
        this.modelChange.emit(this.model);
    }
    /**
     * Updates the name of a property
     *
     * @param id
     * @param name
     */
    updatePropertyName(id, name) {
        const existingPropertyValue = this.model[name];
        const oldName = this.propertyIndex[id].propertyName;
        this.duplicatedFields.delete(id);
        if (existingPropertyValue === undefined) {
            this.model[name] = this.model[oldName];
            this.propertyIndex[id].propertyName = name;
            delete this.model[oldName];
            this.propertyIndex = Object.assign({}, this.propertyIndex);
            this.modelChange.emit(this.model);
        }
        else if (oldName !== name) {
            this.duplicatedFields.set(id, name);
        }
    }
    /**
     * Adds a new property to the model
     */
    addProperty(dataType) {
        const propName = `${dataType.name} ${this.propertyCounter}`;
        this.propertyCounter++;
        const schema = JSON.parse(JSON.stringify(dataType.schema));
        this.model[propName] = createValueForSchema(dataType.schema);
        schema.nameEditable = !this.schemaBuilderMode;
        schema.propertyName = propName;
        schema.id = this.propertyId++;
        this.propertyIndex[schema.id] = schema;
        this.propertyIndex = Object.assign({}, this.propertyIndex);
        this.modelChange.emit(this.model);
        this.updateIcons();
    }
    /**
     * Adds a new property as defined in the schema
     */
    addSchemaProperty(propName) {
        if (this.model[propName] !== undefined) {
            return;
        }
        const schema = JSON.parse(JSON.stringify(this.schema.properties[propName]));
        if (!schema.type) {
            schema.type = 'object';
        }
        const value = createValueForSchema(schema);
        this.model[propName] = value;
        schema.nameEditable = false;
        schema.propertyName = propName;
        schema.id = this.propertyId++;
        this.propertyIndex[schema.id] = schema;
        this.propertyIndex = Object.assign({}, this.propertyIndex);
        if (this.initialized) {
            this.modelChange.emit(this.model);
        }
        this.updateIcons();
    }
    /**
     * Adds a new patternProperty as defined in the schema
     */
    addSchemaPatternProperty(propName) {
        const newPropName = `new ${this.schema.patternProperties[propName].title} ${this.propertyCounter}`;
        this.propertyCounter++;
        const schema = JSON.parse(JSON.stringify(this.schema.patternProperties[propName]));
        schema.isPatternProperty = true;
        if (!schema.type) {
            schema.type = 'object';
        }
        const value = createValueForSchema(schema);
        this.model[newPropName] = value;
        schema.nameEditable = true;
        schema.propertyName = newPropName;
        schema.id = this.propertyId++;
        this.propertyIndex[schema.id] = schema;
        this.propertyIndex = Object.assign({}, this.propertyIndex);
        this.modelChange.emit(this.model);
        this.updateIcons();
    }
    /**
     * Deletes a property
     */
    deleteProperty(propName) {
        delete this.model[propName];
        for (const id in this.propertyIndex) {
            if (this.propertyIndex[id].propertyName === propName) {
                delete this.propertyIndex[id];
                break;
            }
        }
        this.model = Object.assign({}, this.model);
        this.propertyIndex = Object.assign({}, this.propertyIndex);
        this.modelChange.emit(this.model);
    }
    /**
     * Returns the absolute tree path of the property
     */
    getPath(propName) {
        let propSchema;
        for (const id in this.propertyIndex) {
            if (this.propertyIndex[id].propertyName === propName) {
                propSchema = this.propertyIndex[id];
                break;
            }
        }
        if (propSchema.isPatternProperty) {
            return `['${propName}']`;
        }
        return `.${propName}`;
    }
    /**
     * Updates the required cache
     */
    updateRequiredCache() {
        this.requiredCache = {};
        if (this.schema && this.schema.required) {
            for (const prop of this.schema.required) {
                this.requiredCache[prop] = true;
            }
        }
    }
    /**
     * Creates an index out of all the properties in the model
     */
    indexProperties() {
        const props = this.schemaBuilderMode ? this.schemaRef.properties : this.model;
        for (const prop in props) {
            if (this.isIndexed(prop)) {
                continue;
            }
            let schema;
            if (this.schema.properties && this.schema.properties[prop]) {
                schema = JSON.parse(JSON.stringify(this.schema.properties[prop]));
            }
            else {
                let matchesPattern = false;
                if (this.schema.patternProperties) {
                    for (const pattern in this.schema.patternProperties) {
                        // eslint-disable-next-line
                        const patternRegex = new RegExp(pattern);
                        if (patternRegex.test(prop)) {
                            schema = JSON.parse(JSON.stringify(this.schema.patternProperties[pattern]));
                            matchesPattern = true;
                        }
                    }
                }
                if (!matchesPattern) {
                    schema = Object.assign({}, inferType(this.model[prop], this.typeCheckOverrides));
                }
            }
            schema.id = this.propertyId++;
            schema.propertyName = prop;
            this.propertyIndex[schema.id] = schema;
            this.propertyIndex = Object.assign({}, this.propertyIndex);
        }
        for (const id in this.propertyIndex) {
            const schema = this.propertyIndex[id];
            if (this.model[schema.propertyName] === undefined) {
                delete this.propertyIndex[id];
            }
            else {
                const model = this.model[schema.propertyName];
                const { type } = inferType(model);
                if (schema.type !== type) {
                    this.propertyIndex[schema.id].type = type;
                }
            }
        }
        this.propertyIndex = JSON.parse(JSON.stringify(this.propertyIndex));
        this.cdr.markForCheck();
    }
    isIndexed(propertyName) {
        return Object.values(this.propertyIndex).findIndex((s) => s.propertyName === propertyName) !== -1;
    }
    /**
     * Inits the required properties on the model
     */
    addRequiredProperties() {
        if (this.schema && this.schema.properties) {
            for (const propName in this.schema.properties) {
                if (this.model[propName] !== undefined) {
                    continue;
                }
                if (this.requiredCache[propName] || this.schemaBuilderMode) {
                    // List all properties not only required if we are in schema builder mode
                    this.addSchemaProperty(propName);
                }
            }
        }
    }
    /**
     *
     * @param property
     * @param type
     */
    changePropertyType(property, type) {
        const dataType = this.dataTypeMap[type];
        if (dataType) {
            delete property.format;
            property.type = dataType.schema.type;
            if (dataType.schema.format) {
                property.format = dataType.schema.format;
            }
            property.$meta.currentType = getCurrentType(property);
            this.schema.properties[property.propertyName] = Object.assign({}, property);
        }
        const value = createValueForSchema(property);
        this.model[property.propertyName] = value;
        this.modelChange.emit(this.model);
        this.updateIcons();
    }
    /**
     * Track By function for the array ittierator
     *
     * @param index
     * @param value
     */
    trackBy(_, value) {
        return value.id;
    }
    /**
     * Updates the icons in the schemas
     */
    updateIcons() {
        for (const id in this.propertyIndex) {
            const schema = this.propertyIndex[id];
            if (!schema.$meta) {
                schema.$meta = {};
            }
            schema.$meta.icon = getIcon(schema);
        }
    }
}
ObjectNode.ɵfac = function ObjectNode_Factory(t) { return new (t || ObjectNode)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
ObjectNode.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: ObjectNode, inputs: { required: "required", showKnownProperties: "showKnownProperties", model: "model", schema: "schema", expanded: "expanded", path: "path", errors: "errors", typeCheckOverrides: "typeCheckOverrides", schemaBuilderMode: "schemaBuilderMode", schemaRef: "schemaRef" }, outputs: { modelChange: "modelChange", schemaUpdate: "schemaUpdate" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
ObjectNode.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
ObjectNode.propDecorators = {
    schema: [{ type: Input }],
    model: [{ type: Input }],
    required: [{ type: Input }],
    expanded: [{ type: Input }],
    path: [{ type: Input }],
    errors: [{ type: Input }],
    typeCheckOverrides: [{ type: Input }],
    schemaBuilderMode: [{ type: Input }],
    schemaRef: [{ type: Input }],
    showKnownProperties: [{ type: Input }],
    modelChange: [{ type: Output }],
    schemaUpdate: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ObjectNode, [{
        type: Directive
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { required: [{
            type: Input
        }], showKnownProperties: [{
            type: Input
        }], modelChange: [{
            type: Output
        }], schemaUpdate: [{
            type: Output
        }], model: [{
            type: Input
        }], schema: [{
            type: Input
        }], expanded: [{
            type: Input
        }], path: [{
            type: Input
        }], errors: [{
            type: Input
        }], typeCheckOverrides: [{
            type: Input
        }], schemaBuilderMode: [{
            type: Input
        }], schemaRef: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LW5vZGUuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2pzb24tZWRpdG9yL25vZGUtdHlwZXMvb2JqZWN0LW5vZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxLQUFLLEVBQ0wsWUFBWSxFQUNaLE1BQU0sRUFJTixpQkFBaUIsRUFDakIsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQixTQUFTLEVBQ1QsV0FBVyxFQUNYLE9BQU8sRUFDUCxjQUFjLEVBSWYsTUFBTSx1QkFBdUIsQ0FBQzs7QUFJL0IsTUFBTSxPQUFPLFVBQVU7QUFBRyxJQXNDeEIsWUFBc0IsR0FBc0I7QUFBSSxRQUExQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBakNwQyxhQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzVCLFFBYVcsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO0FBQ3ZDLFFBQ1ksZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUNoRSxRQUNZLGlCQUFZLEdBQW1DLElBQUksWUFBWSxFQUFFLENBQUM7QUFDOUUsUUFDRSxrQkFBYSxHQUErQixFQUFFLENBQUM7QUFDakQsUUFDRSxnQkFBVyxHQUFHLEtBQUssQ0FBQztBQUN0QixRQUNFLGNBQVMsR0FBeUIsQ0FBQyxHQUFHLG1CQUFtQixFQUFFLEdBQUcscUJBQXFCLENBQUMsQ0FBQztBQUN2RixRQUFFLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLFFBQUUsZUFBVSxHQUFHLENBQUMsQ0FBQztBQUNqQixRQUFFLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztBQUNwQyxRQUNFLHFCQUFnQixHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO0FBQy9DLFFBQ0UsZ0JBQVcsR0FBRyxXQUFXLENBQUM7QUFDNUIsSUFDaUQsQ0FBQztBQUNsRCxJQUNFLFFBQVE7QUFDVixRQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNsQixJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVcsQ0FBQyxPQUFzQjtBQUNwQyxRQUFJLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7QUFDckUsWUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDcEIsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsTUFBTTtBQUFLLFFBQ1QsVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUNwQixZQUFNLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7QUFDakQsZ0JBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzlHLG9CQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUU7QUFDbkQsd0JBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNwRCxxQkFBVztBQUNYLG9CQUNVLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNGLG9CQUNVLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUU7QUFDOUMsd0JBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLG1DQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FDNUIsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FDakcsQ0FBQztBQUNkLHFCQUFXO0FBQUMseUJBQUs7QUFDakIsd0JBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQXdCLENBQUM7QUFDNUcsd0JBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMxRyxxQkFBVztBQUNYLGlCQUFTO0FBQ1QsYUFBTztBQUNQLFlBQ00sSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7QUFDakMsWUFBTSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDN0IsWUFBTSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztBQUNuQyxZQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN6QixZQUFNLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQzlCLFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFDSCxJQUNFO0FBQ0Y7QUFDRTtBQUNFO0FBQ0U7QUFFSixPQURHO0FBQ0wsSUFBRSxVQUFVLENBQUMsRUFBbUIsRUFBRSxLQUFVO0FBQUksUUFDNUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUM7QUFDekQsUUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUNqQyxRQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0QyxJQUFFLENBQUM7QUFDSCxJQUNFO0FBQ0Y7QUFDRTtBQUNFO0FBQ0U7QUFFSixPQURHO0FBQ0wsSUFBRSxrQkFBa0IsQ0FBQyxFQUFtQixFQUFFLElBQVk7QUFDdEQsUUFBSSxNQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkQsUUFBSSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQztBQUN4RCxRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBWSxDQUFDLENBQUM7QUFDL0MsUUFDSSxJQUFJLHFCQUFxQixLQUFLLFNBQVMsRUFBRTtBQUM3QyxZQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QyxZQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUNqRCxZQUFNLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNqQyxZQUFNLElBQUksQ0FBQyxhQUFhLHFCQUFRLElBQUksQ0FBQyxhQUFhLENBQUUsQ0FBQztBQUNyRCxZQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN4QyxTQUFLO0FBQUMsYUFBSyxJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDakMsWUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEVBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwRCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUsV0FBVyxDQUFDLFFBQTRCO0FBQUksUUFDMUMsTUFBTSxRQUFRLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNoRSxRQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUMzQixRQUFJLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUMvRCxRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsb0JBQW9CLENBQUMsUUFBUSxDQUFDLE1BQTBCLENBQUMsQ0FBQztBQUNyRixRQUFJLE1BQU0sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7QUFDbEQsUUFBSSxNQUFNLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztBQUNuQyxRQUNJLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ2xDLFFBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQzNDLFFBQUksSUFBSSxDQUFDLGFBQWEscUJBQVEsSUFBSSxDQUFDLGFBQWEsQ0FBRSxDQUFDO0FBQ25ELFFBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLFFBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3ZCLElBQUUsQ0FBQztBQUNILElBQ0U7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFFLGlCQUFpQixDQUFDLFFBQWdCO0FBQUksUUFDcEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtBQUM1QyxZQUFNLE9BQU87QUFDYixTQUFLO0FBQ0wsUUFDSSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hGLFFBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7QUFDdEIsWUFBTSxNQUFNLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztBQUM3QixTQUFLO0FBQ0wsUUFDSSxNQUFNLEtBQUssR0FBUSxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwRCxRQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ2pDLFFBQ0ksTUFBTSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDaEMsUUFBSSxNQUFNLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztBQUNuQyxRQUFJLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ2xDLFFBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQzNDLFFBQUksSUFBSSxDQUFDLGFBQWEscUJBQVEsSUFBSSxDQUFDLGFBQWEsQ0FBRSxDQUFDO0FBQ25ELFFBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQzFCLFlBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLFNBQUs7QUFDTCxRQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN2QixJQUFFLENBQUM7QUFDSCxJQUNFO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBRSx3QkFBd0IsQ0FBQyxRQUFnQjtBQUFJLFFBQzNDLE1BQU0sV0FBVyxHQUFHLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQ3ZHLFFBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQzNCLFFBQ0ksTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZGLFFBQUksTUFBTSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztBQUNwQyxRQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0FBQ3RCLFlBQU0sTUFBTSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7QUFDN0IsU0FBSztBQUNMLFFBQ0ksTUFBTSxLQUFLLEdBQVEsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEQsUUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUNwQyxRQUNJLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBQy9CLFFBQUksTUFBTSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7QUFDdEMsUUFBSSxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNsQyxRQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUMzQyxRQUFJLElBQUksQ0FBQyxhQUFhLHFCQUFRLElBQUksQ0FBQyxhQUFhLENBQUUsQ0FBQztBQUNuRCxRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0QyxRQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN2QixJQUFFLENBQUM7QUFDSCxJQUNFO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBRSxjQUFjLENBQUMsUUFBZ0I7QUFBSSxRQUNqQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEMsUUFBSSxLQUFLLE1BQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDekMsWUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxLQUFLLFFBQVEsRUFBRTtBQUM1RCxnQkFBUSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdEMsZ0JBQVEsTUFBTTtBQUNkLGFBQU87QUFDUCxTQUFLO0FBQ0wsUUFBSSxJQUFJLENBQUMsS0FBSyxxQkFBUSxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7QUFDbkMsUUFBSSxJQUFJLENBQUMsYUFBYSxxQkFBUSxJQUFJLENBQUMsYUFBYSxDQUFFLENBQUM7QUFDbkQsUUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEMsSUFBRSxDQUFDO0FBQ0gsSUFDRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUsT0FBTyxDQUFDLFFBQWdCO0FBQUksUUFDMUIsSUFBSSxVQUFVLENBQUM7QUFDbkIsUUFDSSxLQUFLLE1BQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDekMsWUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxLQUFLLFFBQVEsRUFBRTtBQUM1RCxnQkFBUSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM1QyxnQkFBUSxNQUFNO0FBQ2QsYUFBTztBQUNQLFNBQUs7QUFDTCxRQUNJLElBQUksVUFBVSxDQUFDLGlCQUFpQixFQUFFO0FBQ3RDLFlBQU0sT0FBTyxLQUFLLFFBQVEsSUFBSSxDQUFDO0FBQy9CLFNBQUs7QUFDTCxRQUNJLE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQUNFO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBRSxtQkFBbUI7QUFBSyxRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUM1QixRQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtBQUM3QyxZQUFNLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7QUFDL0MsZ0JBQVEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDeEMsYUFBTztBQUNQLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBRSxlQUFlO0FBQUssUUFDbEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNsRixRQUNJLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO0FBQzlCLFlBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ2hDLGdCQUFRLFNBQVM7QUFDakIsYUFBTztBQUNQLFlBQ00sSUFBSSxNQUF3QixDQUFDO0FBQ25DLFlBQ00sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNsRSxnQkFBUSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxRSxhQUFPO0FBQUMsaUJBQUs7QUFDYixnQkFBUSxJQUFJLGNBQWMsR0FBRyxLQUFLLENBQUM7QUFDbkMsZ0JBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFO0FBQzNDLG9CQUFVLEtBQUssTUFBTSxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtBQUMvRCx3QkFBWSwyQkFBMkI7QUFDdkMsd0JBQVksTUFBTSxZQUFZLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckQsd0JBQVksSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3pDLDRCQUFjLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUYsNEJBQWMsY0FBYyxHQUFHLElBQUksQ0FBQztBQUNwQyx5QkFBYTtBQUNiLHFCQUFXO0FBQ1gsaUJBQVM7QUFDVCxnQkFDUSxJQUFJLENBQUMsY0FBYyxFQUFFO0FBQzdCLG9CQUFVLE1BQU0scUJBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQ3hELENBQUM7QUFDWixpQkFBUztBQUNULGFBQU87QUFDUCxZQUNNLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3BDLFlBQU0sTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDakMsWUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7QUFDN0MsWUFBTSxJQUFJLENBQUMsYUFBYSxxQkFBUSxJQUFJLENBQUMsYUFBYSxDQUFFLENBQUM7QUFDckQsU0FBSztBQUNMLFFBQ0ksS0FBSyxNQUFNLEVBQUUsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO0FBQ3pDLFlBQU0sTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM1QyxZQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssU0FBUyxFQUFFO0FBQ3pELGdCQUFRLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN0QyxhQUFPO0FBQUMsaUJBQUs7QUFDYixnQkFBUSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN0RCxnQkFBUSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFDLGdCQUFRLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7QUFDbEMsb0JBQVUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNwRCxpQkFBUztBQUNULGFBQU87QUFDUCxTQUFLO0FBQ0wsUUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUN4RSxRQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDNUIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxTQUFTLENBQUMsWUFBb0I7QUFBSSxRQUNoQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQW1CLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLEtBQUssWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDeEgsSUFBRSxDQUFDO0FBQ0gsSUFDRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUscUJBQXFCO0FBQUssUUFDeEIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO0FBQy9DLFlBQU0sS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtBQUNyRCxnQkFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssU0FBUyxFQUFFO0FBQ2hELG9CQUFVLFNBQVM7QUFDbkIsaUJBQVM7QUFDVCxnQkFDUSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO0FBQ3BFLG9CQUFVLHlFQUF5RTtBQUNuRixvQkFBVSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDM0MsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0U7QUFDRjtBQUNFO0FBQ0U7QUFFSixPQURLO0FBQ0wsSUFBRSxrQkFBa0IsQ0FBQyxRQUEwQixFQUFFLElBQVk7QUFDN0QsUUFBSSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVDLFFBQUksSUFBSSxRQUFRLEVBQUU7QUFDbEIsWUFBTSxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDN0IsWUFBTSxRQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQzNDLFlBQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtBQUNsQyxnQkFBUSxRQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2pELGFBQU87QUFDUCxZQUFNLFFBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1RCxZQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMscUJBQVEsUUFBUSxDQUFFLENBQUM7QUFDdEUsU0FBSztBQUNMLFFBQ0ksTUFBTSxLQUFLLEdBQVEsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEQsUUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDOUMsUUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEMsUUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDdkIsSUFBRSxDQUFDO0FBQ0gsSUFDRTtBQUNGO0FBQ0U7QUFDRTtBQUNFO0FBRUosT0FERztBQUNMLElBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLO0FBQ2xCLFFBQUksT0FBTyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQ3BCLElBQUUsQ0FBQztBQUNILElBQ0U7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFZLFdBQVc7QUFBSyxRQUN4QixLQUFLLE1BQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDekMsWUFBTSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLFlBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFDekIsZ0JBQVEsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDMUIsYUFBTztBQUNQLFlBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSDtzQ0E1V0MsU0FBUzsrY0FDUjtBQUFDO0FBQW9DLFlBbkJyQyxpQkFBaUI7QUFDbEI7QUFBRztBQUNrQixxQkFrQm5CLEtBQUs7QUFBSyxvQkFFVixLQUFLO0FBQUssdUJBRVYsS0FBSztBQUFLLHVCQUVWLEtBQUs7QUFBSyxtQkFFVixLQUFLO0FBQUsscUJBRVYsS0FBSztBQUFLLGlDQUVWLEtBQUs7QUFBSyxnQ0FFVixLQUFLO0FBQUssd0JBRVYsS0FBSztBQUFLLGtDQUVWLEtBQUs7QUFBSywwQkFFVixNQUFNO0FBQUssMkJBRVgsTUFBTTtBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIElucHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEaXJlY3RpdmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIGNyZWF0ZVZhbHVlRm9yU2NoZW1hLFxuICBqc29uU2NoZW1hRGF0YVR5cGVzLFxuICBqc29uU2NoZW1hRGF0YUZvcm1hdHMsXG4gIGluZmVyVHlwZSxcbiAgZGF0YVR5cGVNYXAsXG4gIGdldEljb24sXG4gIGdldEN1cnJlbnRUeXBlLFxuICBKc29uU2NoZW1hRGF0YVR5cGUsXG4gIEpTT05FZGl0b3JTY2hlbWEsXG4gIFByb3BlcnR5SW5kZXhcbn0gZnJvbSAnLi4vanNvbi1lZGl0b3IuaGVscGVyJztcbmltcG9ydCB7IEpTT05TY2hlbWE3VHlwZU5hbWUgfSBmcm9tICdqc29uLXNjaGVtYSc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIE9iamVjdE5vZGUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHNjaGVtYTogSlNPTkVkaXRvclNjaGVtYTtcblxuICBASW5wdXQoKSBtb2RlbDogYW55O1xuXG4gIEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XG5cbiAgQElucHV0KCkgZXhwYW5kZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgcGF0aDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGVycm9yczogYW55W107XG5cbiAgQElucHV0KCkgdHlwZUNoZWNrT3ZlcnJpZGVzPzogYW55O1xuXG4gIEBJbnB1dCgpIHNjaGVtYUJ1aWxkZXJNb2RlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIHNjaGVtYVJlZjogSlNPTkVkaXRvclNjaGVtYTtcblxuICBASW5wdXQoKSBzaG93S25vd25Qcm9wZXJ0aWVzID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIG1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KCkgc2NoZW1hVXBkYXRlOiBFdmVudEVtaXR0ZXI8SlNPTkVkaXRvclNjaGVtYT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcmVxdWlyZWRDYWNoZTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcblxuICBpbml0aWFsaXplZCA9IGZhbHNlO1xuXG4gIGRhdGFUeXBlczogSnNvblNjaGVtYURhdGFUeXBlW10gPSBbLi4uanNvblNjaGVtYURhdGFUeXBlcywgLi4uanNvblNjaGVtYURhdGFGb3JtYXRzXTtcbiAgcHJvcGVydHlDb3VudGVyID0gMTtcbiAgcHJvcGVydHlJZCA9IDE7XG4gIHByb3BlcnR5SW5kZXg6IFByb3BlcnR5SW5kZXggPSB7fTtcblxuICBkdXBsaWNhdGVkRmllbGRzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuICBkYXRhVHlwZU1hcCA9IGRhdGFUeXBlTWFwO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMubW9kZWwgIT09IHVuZGVmaW5lZCB8fCBjaGFuZ2VzLnNjaGVtYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZvciAoY29uc3QgcHJvcCBpbiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0udHlwZSkgJiYgdGhpcy5zY2hlbWEucHJvcGVydGllc1twcm9wXS50eXBlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAoIXRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0uJG1ldGEpIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0uJG1ldGEgPSB7fTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLiRtZXRhLnR5cGUgPSBbLi4udGhpcy5zY2hlbWEucHJvcGVydGllc1twcm9wXS50eXBlXTtcblxuICAgICAgICAgIGlmICh0aGlzLm1vZGVsW3Byb3BdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0gPSB7XG4gICAgICAgICAgICAgIC4uLnRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcHJvcF0sXG4gICAgICAgICAgICAgIC4uLmluZmVyVHlwZSh0aGlzLm1vZGVsW3Byb3BdLCB0aGlzLnR5cGVDaGVja092ZXJyaWRlcywgdGhpcy5zY2hlbWEucHJvcGVydGllc1twcm9wXS4kbWV0YS50eXBlKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY2hlbWEucHJvcGVydGllc1twcm9wXS50eXBlID0gdGhpcy5zY2hlbWEucHJvcGVydGllc1twcm9wXS50eXBlWzBdIGFzIEpTT05TY2hlbWE3VHlwZU5hbWU7XG4gICAgICAgICAgICB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdLiRtZXRhLmN1cnJlbnRUeXBlID0gZ2V0Q3VycmVudFR5cGUodGhpcy5zY2hlbWEucHJvcGVydGllc1twcm9wXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlUmVxdWlyZWRDYWNoZSgpO1xuICAgICAgdGhpcy5pbmRleFByb3BlcnRpZXMoKTtcbiAgICAgIHRoaXMuYWRkUmVxdWlyZWRQcm9wZXJ0aWVzKCk7XG4gICAgICB0aGlzLnVwZGF0ZUljb25zKCk7XG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGEgcHJvcGVydHkgb24gdGhlIG1vZGVsIGFuZCBlbWl0cyB0aGUgY2hhbmdlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSBwcm9wTmFtZVxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIHVwZGF0ZVByb3AoaWQ6IG51bWJlciB8IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHByb3BOYW1lID0gdGhpcy5wcm9wZXJ0eUluZGV4W2lkXS5wcm9wZXJ0eU5hbWU7XG4gICAgdGhpcy5tb2RlbFtwcm9wTmFtZV0gPSB2YWx1ZTtcbiAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQodGhpcy5tb2RlbCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgbmFtZSBvZiBhIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSBpZFxuICAgKiBAcGFyYW0gbmFtZVxuICAgKi9cbiAgdXBkYXRlUHJvcGVydHlOYW1lKGlkOiBudW1iZXIgfCBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IGV4aXN0aW5nUHJvcGVydHlWYWx1ZSA9IHRoaXMubW9kZWxbbmFtZV07XG4gICAgY29uc3Qgb2xkTmFtZSA9IHRoaXMucHJvcGVydHlJbmRleFtpZF0ucHJvcGVydHlOYW1lO1xuXG4gICAgdGhpcy5kdXBsaWNhdGVkRmllbGRzLmRlbGV0ZShpZCBhcyBzdHJpbmcpO1xuXG4gICAgaWYgKGV4aXN0aW5nUHJvcGVydHlWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm1vZGVsW25hbWVdID0gdGhpcy5tb2RlbFtvbGROYW1lXTtcbiAgICAgIHRoaXMucHJvcGVydHlJbmRleFtpZF0ucHJvcGVydHlOYW1lID0gbmFtZTtcbiAgICAgIGRlbGV0ZSB0aGlzLm1vZGVsW29sZE5hbWVdO1xuICAgICAgdGhpcy5wcm9wZXJ0eUluZGV4ID0geyAuLi50aGlzLnByb3BlcnR5SW5kZXggfTtcbiAgICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdCh0aGlzLm1vZGVsKTtcbiAgICB9IGVsc2UgaWYgKG9sZE5hbWUgIT09IG5hbWUpIHtcbiAgICAgIHRoaXMuZHVwbGljYXRlZEZpZWxkcy5zZXQoaWQgYXMgc3RyaW5nLCBuYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG5ldyBwcm9wZXJ0eSB0byB0aGUgbW9kZWxcbiAgICovXG4gIGFkZFByb3BlcnR5KGRhdGFUeXBlOiBKc29uU2NoZW1hRGF0YVR5cGUpOiB2b2lkIHtcbiAgICBjb25zdCBwcm9wTmFtZSA9IGAke2RhdGFUeXBlLm5hbWV9ICR7dGhpcy5wcm9wZXJ0eUNvdW50ZXJ9YDtcbiAgICB0aGlzLnByb3BlcnR5Q291bnRlcisrO1xuICAgIGNvbnN0IHNjaGVtYSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YVR5cGUuc2NoZW1hKSk7XG5cbiAgICB0aGlzLm1vZGVsW3Byb3BOYW1lXSA9IGNyZWF0ZVZhbHVlRm9yU2NoZW1hKGRhdGFUeXBlLnNjaGVtYSBhcyBKU09ORWRpdG9yU2NoZW1hKTtcbiAgICBzY2hlbWEubmFtZUVkaXRhYmxlID0gIXRoaXMuc2NoZW1hQnVpbGRlck1vZGU7XG4gICAgc2NoZW1hLnByb3BlcnR5TmFtZSA9IHByb3BOYW1lO1xuXG4gICAgc2NoZW1hLmlkID0gdGhpcy5wcm9wZXJ0eUlkKys7XG4gICAgdGhpcy5wcm9wZXJ0eUluZGV4W3NjaGVtYS5pZF0gPSBzY2hlbWE7XG4gICAgdGhpcy5wcm9wZXJ0eUluZGV4ID0geyAuLi50aGlzLnByb3BlcnR5SW5kZXggfTtcblxuICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdCh0aGlzLm1vZGVsKTtcbiAgICB0aGlzLnVwZGF0ZUljb25zKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG5ldyBwcm9wZXJ0eSBhcyBkZWZpbmVkIGluIHRoZSBzY2hlbWFcbiAgICovXG4gIGFkZFNjaGVtYVByb3BlcnR5KHByb3BOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tb2RlbFtwcm9wTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNjaGVtYSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEucHJvcGVydGllc1twcm9wTmFtZV0pKTtcbiAgICBpZiAoIXNjaGVtYS50eXBlKSB7XG4gICAgICBzY2hlbWEudHlwZSA9ICdvYmplY3QnO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlOiBhbnkgPSBjcmVhdGVWYWx1ZUZvclNjaGVtYShzY2hlbWEpO1xuICAgIHRoaXMubW9kZWxbcHJvcE5hbWVdID0gdmFsdWU7XG5cbiAgICBzY2hlbWEubmFtZUVkaXRhYmxlID0gZmFsc2U7XG4gICAgc2NoZW1hLnByb3BlcnR5TmFtZSA9IHByb3BOYW1lO1xuICAgIHNjaGVtYS5pZCA9IHRoaXMucHJvcGVydHlJZCsrO1xuICAgIHRoaXMucHJvcGVydHlJbmRleFtzY2hlbWEuaWRdID0gc2NoZW1hO1xuICAgIHRoaXMucHJvcGVydHlJbmRleCA9IHsgLi4udGhpcy5wcm9wZXJ0eUluZGV4IH07XG5cbiAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KHRoaXMubW9kZWwpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUljb25zKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG5ldyBwYXR0ZXJuUHJvcGVydHkgYXMgZGVmaW5lZCBpbiB0aGUgc2NoZW1hXG4gICAqL1xuICBhZGRTY2hlbWFQYXR0ZXJuUHJvcGVydHkocHJvcE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IG5ld1Byb3BOYW1lID0gYG5ldyAke3RoaXMuc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzW3Byb3BOYW1lXS50aXRsZX0gJHt0aGlzLnByb3BlcnR5Q291bnRlcn1gO1xuICAgIHRoaXMucHJvcGVydHlDb3VudGVyKys7XG5cbiAgICBjb25zdCBzY2hlbWEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzW3Byb3BOYW1lXSkpO1xuICAgIHNjaGVtYS5pc1BhdHRlcm5Qcm9wZXJ0eSA9IHRydWU7XG4gICAgaWYgKCFzY2hlbWEudHlwZSkge1xuICAgICAgc2NoZW1hLnR5cGUgPSAnb2JqZWN0JztcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZTogYW55ID0gY3JlYXRlVmFsdWVGb3JTY2hlbWEoc2NoZW1hKTtcbiAgICB0aGlzLm1vZGVsW25ld1Byb3BOYW1lXSA9IHZhbHVlO1xuXG4gICAgc2NoZW1hLm5hbWVFZGl0YWJsZSA9IHRydWU7XG4gICAgc2NoZW1hLnByb3BlcnR5TmFtZSA9IG5ld1Byb3BOYW1lO1xuICAgIHNjaGVtYS5pZCA9IHRoaXMucHJvcGVydHlJZCsrO1xuICAgIHRoaXMucHJvcGVydHlJbmRleFtzY2hlbWEuaWRdID0gc2NoZW1hO1xuICAgIHRoaXMucHJvcGVydHlJbmRleCA9IHsgLi4udGhpcy5wcm9wZXJ0eUluZGV4IH07XG5cbiAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQodGhpcy5tb2RlbCk7XG4gICAgdGhpcy51cGRhdGVJY29ucygpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBwcm9wZXJ0eVxuICAgKi9cbiAgZGVsZXRlUHJvcGVydHkocHJvcE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLm1vZGVsW3Byb3BOYW1lXTtcbiAgICBmb3IgKGNvbnN0IGlkIGluIHRoaXMucHJvcGVydHlJbmRleCkge1xuICAgICAgaWYgKHRoaXMucHJvcGVydHlJbmRleFtpZF0ucHJvcGVydHlOYW1lID09PSBwcm9wTmFtZSkge1xuICAgICAgICBkZWxldGUgdGhpcy5wcm9wZXJ0eUluZGV4W2lkXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubW9kZWwgPSB7IC4uLnRoaXMubW9kZWwgfTtcbiAgICB0aGlzLnByb3BlcnR5SW5kZXggPSB7IC4uLnRoaXMucHJvcGVydHlJbmRleCB9O1xuICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdCh0aGlzLm1vZGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhYnNvbHV0ZSB0cmVlIHBhdGggb2YgdGhlIHByb3BlcnR5XG4gICAqL1xuICBnZXRQYXRoKHByb3BOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCBwcm9wU2NoZW1hO1xuXG4gICAgZm9yIChjb25zdCBpZCBpbiB0aGlzLnByb3BlcnR5SW5kZXgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BlcnR5SW5kZXhbaWRdLnByb3BlcnR5TmFtZSA9PT0gcHJvcE5hbWUpIHtcbiAgICAgICAgcHJvcFNjaGVtYSA9IHRoaXMucHJvcGVydHlJbmRleFtpZF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wU2NoZW1hLmlzUGF0dGVyblByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gYFsnJHtwcm9wTmFtZX0nXWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGAuJHtwcm9wTmFtZX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHJlcXVpcmVkIGNhY2hlXG4gICAqL1xuICB1cGRhdGVSZXF1aXJlZENhY2hlKCk6IHZvaWQge1xuICAgIHRoaXMucmVxdWlyZWRDYWNoZSA9IHt9O1xuICAgIGlmICh0aGlzLnNjaGVtYSAmJiB0aGlzLnNjaGVtYS5yZXF1aXJlZCkge1xuICAgICAgZm9yIChjb25zdCBwcm9wIG9mIHRoaXMuc2NoZW1hLnJlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZWRDYWNoZVtwcm9wXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5kZXggb3V0IG9mIGFsbCB0aGUgcHJvcGVydGllcyBpbiB0aGUgbW9kZWxcbiAgICovXG4gIGluZGV4UHJvcGVydGllcygpOiB2b2lkIHtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMuc2NoZW1hQnVpbGRlck1vZGUgPyB0aGlzLnNjaGVtYVJlZi5wcm9wZXJ0aWVzIDogdGhpcy5tb2RlbDtcblxuICAgIGZvciAoY29uc3QgcHJvcCBpbiBwcm9wcykge1xuICAgICAgaWYgKHRoaXMuaXNJbmRleGVkKHByb3ApKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgc2NoZW1hOiBKU09ORWRpdG9yU2NoZW1hO1xuXG4gICAgICBpZiAodGhpcy5zY2hlbWEucHJvcGVydGllcyAmJiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BdKSB7XG4gICAgICAgIHNjaGVtYSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEucHJvcGVydGllc1twcm9wXSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG1hdGNoZXNQYXR0ZXJuID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykge1xuICAgICAgICAgIGZvciAoY29uc3QgcGF0dGVybiBpbiB0aGlzLnNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBjb25zdCBwYXR0ZXJuUmVnZXggPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xuICAgICAgICAgICAgaWYgKHBhdHRlcm5SZWdleC50ZXN0KHByb3ApKSB7XG4gICAgICAgICAgICAgIHNjaGVtYSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zY2hlbWEucGF0dGVyblByb3BlcnRpZXNbcGF0dGVybl0pKTtcbiAgICAgICAgICAgICAgbWF0Y2hlc1BhdHRlcm4gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbWF0Y2hlc1BhdHRlcm4pIHtcbiAgICAgICAgICBzY2hlbWEgPSB7XG4gICAgICAgICAgICAuLi5pbmZlclR5cGUodGhpcy5tb2RlbFtwcm9wXSwgdGhpcy50eXBlQ2hlY2tPdmVycmlkZXMpXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzY2hlbWEuaWQgPSB0aGlzLnByb3BlcnR5SWQrKztcbiAgICAgIHNjaGVtYS5wcm9wZXJ0eU5hbWUgPSBwcm9wO1xuICAgICAgdGhpcy5wcm9wZXJ0eUluZGV4W3NjaGVtYS5pZF0gPSBzY2hlbWE7XG4gICAgICB0aGlzLnByb3BlcnR5SW5kZXggPSB7IC4uLnRoaXMucHJvcGVydHlJbmRleCB9O1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgaWQgaW4gdGhpcy5wcm9wZXJ0eUluZGV4KSB7XG4gICAgICBjb25zdCBzY2hlbWEgPSB0aGlzLnByb3BlcnR5SW5kZXhbaWRdO1xuICAgICAgaWYgKHRoaXMubW9kZWxbc2NoZW1hLnByb3BlcnR5TmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxldGUgdGhpcy5wcm9wZXJ0eUluZGV4W2lkXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gdGhpcy5tb2RlbFtzY2hlbWEucHJvcGVydHlOYW1lXTtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSBpbmZlclR5cGUobW9kZWwpO1xuICAgICAgICBpZiAoc2NoZW1hLnR5cGUgIT09IHR5cGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BlcnR5SW5kZXhbc2NoZW1hLmlkXS50eXBlID0gdHlwZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucHJvcGVydHlJbmRleCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wZXJ0eUluZGV4KSk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBpc0luZGV4ZWQocHJvcGVydHlOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BlcnR5SW5kZXgpLmZpbmRJbmRleCgoczogSlNPTkVkaXRvclNjaGVtYSkgPT4gcy5wcm9wZXJ0eU5hbWUgPT09IHByb3BlcnR5TmFtZSkgIT09IC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRzIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzIG9uIHRoZSBtb2RlbFxuICAgKi9cbiAgYWRkUmVxdWlyZWRQcm9wZXJ0aWVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNjaGVtYSAmJiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICBmb3IgKGNvbnN0IHByb3BOYW1lIGluIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpIHtcbiAgICAgICAgaWYgKHRoaXMubW9kZWxbcHJvcE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnJlcXVpcmVkQ2FjaGVbcHJvcE5hbWVdIHx8IHRoaXMuc2NoZW1hQnVpbGRlck1vZGUpIHtcbiAgICAgICAgICAvLyBMaXN0IGFsbCBwcm9wZXJ0aWVzIG5vdCBvbmx5IHJlcXVpcmVkIGlmIHdlIGFyZSBpbiBzY2hlbWEgYnVpbGRlciBtb2RlXG4gICAgICAgICAgdGhpcy5hZGRTY2hlbWFQcm9wZXJ0eShwcm9wTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHByb3BlcnR5XG4gICAqIEBwYXJhbSB0eXBlXG4gICAqL1xuICBjaGFuZ2VQcm9wZXJ0eVR5cGUocHJvcGVydHk6IEpTT05FZGl0b3JTY2hlbWEsIHR5cGU6IHN0cmluZykge1xuICAgIGNvbnN0IGRhdGFUeXBlID0gdGhpcy5kYXRhVHlwZU1hcFt0eXBlXTtcbiAgICBpZiAoZGF0YVR5cGUpIHtcbiAgICAgIGRlbGV0ZSBwcm9wZXJ0eS5mb3JtYXQ7XG4gICAgICBwcm9wZXJ0eS50eXBlID0gZGF0YVR5cGUuc2NoZW1hLnR5cGU7XG4gICAgICBpZiAoZGF0YVR5cGUuc2NoZW1hLmZvcm1hdCkge1xuICAgICAgICBwcm9wZXJ0eS5mb3JtYXQgPSBkYXRhVHlwZS5zY2hlbWEuZm9ybWF0O1xuICAgICAgfVxuICAgICAgcHJvcGVydHkuJG1ldGEuY3VycmVudFR5cGUgPSBnZXRDdXJyZW50VHlwZShwcm9wZXJ0eSk7XG4gICAgICB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5LnByb3BlcnR5TmFtZV0gPSB7IC4uLnByb3BlcnR5IH07XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWU6IGFueSA9IGNyZWF0ZVZhbHVlRm9yU2NoZW1hKHByb3BlcnR5KTtcbiAgICB0aGlzLm1vZGVsW3Byb3BlcnR5LnByb3BlcnR5TmFtZV0gPSB2YWx1ZTtcblxuICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdCh0aGlzLm1vZGVsKTtcbiAgICB0aGlzLnVwZGF0ZUljb25zKCk7XG4gIH1cblxuICAvKipcbiAgICogVHJhY2sgQnkgZnVuY3Rpb24gZm9yIHRoZSBhcnJheSBpdHRpZXJhdG9yXG4gICAqXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIHRyYWNrQnkoXywgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuaWQ7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgaWNvbnMgaW4gdGhlIHNjaGVtYXNcbiAgICovXG4gIHByb3RlY3RlZCB1cGRhdGVJY29ucygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGlkIGluIHRoaXMucHJvcGVydHlJbmRleCkge1xuICAgICAgY29uc3Qgc2NoZW1hID0gdGhpcy5wcm9wZXJ0eUluZGV4W2lkXTtcbiAgICAgIGlmICghc2NoZW1hLiRtZXRhKSB7XG4gICAgICAgIHNjaGVtYS4kbWV0YSA9IHt9O1xuICAgICAgfVxuICAgICAgc2NoZW1hLiRtZXRhLmljb24gPSBnZXRJY29uKHNjaGVtYSk7XG4gICAgfVxuICB9XG59XG4iXX0=