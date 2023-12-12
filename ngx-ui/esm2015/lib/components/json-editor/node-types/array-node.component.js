import { Input, EventEmitter, Output, Directive } from '@angular/core';
import { createValueForSchema, jsonSchemaDataTypes, dataTypeMap, inferType, getIcon, getCurrentType, jsonSchemaDataFormats } from '../json-editor.helper';
import * as ɵngcc0 from '@angular/core';
export class ArrayNode {
    constructor() {
        this.required = false;
        this.showKnownProperties = false;
        this.modelChange = new EventEmitter();
        this.schemaUpdate = new EventEmitter();
        this.requiredCache = {};
        this.schemas = [];
        this.dataTypes = [...jsonSchemaDataTypes, ...jsonSchemaDataFormats];
        this.dataTypeMap = dataTypeMap;
        this._array = Array;
    }
    ngOnChanges(changes) {
        if (changes.schema) {
            if (this.schema && this.schema.required) {
                for (const prop of this.schema.required) {
                    this.requiredCache[prop] = true;
                }
            }
        }
        this.initSchemasTypeByModelValue();
        this.updateIcons();
    }
    /**
     * Updates an array item of the model and emits the change event
     *
     * @param index
     * @param value
     */
    updateArrayItem(index, value) {
        this.model[index] = value;
        this.modelChange.emit(this.model);
    }
    /**
     * Adds a new item to the model
     */
    addArrayItem(dataType) {
        let schema;
        if (dataType) {
            schema = JSON.parse(JSON.stringify(Object.assign(Object.assign({}, this.schema.items), dataType.schema)));
        }
        else {
            schema = JSON.parse(JSON.stringify(this.schema.items));
        }
        if (!schema.type) {
            schema.type = 'object';
        }
        if (!schema.$meta) {
            schema.$meta = {};
        }
        if (Array.isArray(schema.type)) {
            schema.$meta.type = [...schema.type];
            schema.type = schema.type[0];
            schema.$meta.currentType = getCurrentType(schema);
        }
        const value = createValueForSchema(schema);
        if (value !== undefined) {
            this.model.push(value);
            this.schemas.push(schema);
        }
        this.modelChange.emit(this.model);
        this.updateIcons();
    }
    /**
     * Deletes an item from the array
     *
     * @param index
     */
    deleteArrayItem(index) {
        this.model.splice(index, 1);
        this.schemas.splice(index, 1);
        this.model = [...this.model];
        this.schemas = [...this.schemas];
        this.modelChange.emit(this.model);
    }
    /**
     * Track By function for the array ittierator
     *
     * @param index
     * @param value
     */
    arrayTrackBy(index) {
        return index;
    }
    /**
     *
     * @param property
     * @param type
     */
    changeItemType(index, type) {
        const schema = this.schemas[index];
        const dataType = this.dataTypeMap[type];
        if (dataType) {
            delete schema.format;
            schema.type = dataType.schema.type;
            if (dataType.schema.format) {
                schema.format = dataType.schema.format;
            }
            schema.$meta.currentType = getCurrentType(schema);
        }
        const value = createValueForSchema(schema);
        this.model[index] = value;
        this.modelChange.emit(this.model);
        this.updateIcons();
    }
    /**
     * Infers the schema type for each item in the array
     */
    initSchemasTypeByModelValue() {
        this.schemas = [];
        if (Array.isArray(this.model)) {
            this.model.forEach(value => {
                let schema = inferType(value, this.typeCheckOverrides);
                if (this.schema.items) {
                    schema = JSON.parse(JSON.stringify(Object.assign(Object.assign({}, this.schema.items), schema)));
                }
                this.schemas.push(schema);
            });
        }
    }
    /**
     * Updates the icons in the schemas
     */
    updateIcons() {
        for (const schema of this.schemas) {
            if (!schema.$meta) {
                schema.$meta = {};
            }
            schema.$meta.icon = getIcon(schema);
        }
    }
}
ArrayNode.ɵfac = function ArrayNode_Factory(t) { return new (t || ArrayNode)(); };
ArrayNode.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: ArrayNode, inputs: { required: "required", showKnownProperties: "showKnownProperties", model: "model", schema: "schema", expanded: "expanded", path: "path", errors: "errors", typeCheckOverrides: "typeCheckOverrides", schemaRef: "schemaRef" }, outputs: { modelChange: "modelChange", schemaUpdate: "schemaUpdate" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
ArrayNode.propDecorators = {
    schema: [{ type: Input }],
    model: [{ type: Input }],
    required: [{ type: Input }],
    expanded: [{ type: Input }],
    path: [{ type: Input }],
    errors: [{ type: Input }],
    typeCheckOverrides: [{ type: Input }],
    schemaRef: [{ type: Input }],
    showKnownProperties: [{ type: Input }],
    modelChange: [{ type: Output }],
    schemaUpdate: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ArrayNode, [{
        type: Directive
    }], function () { return []; }, { required: [{
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
        }], schemaRef: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktbm9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvanNvbi1lZGl0b3Ivbm9kZS10eXBlcy9hcnJheS1ub2RlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQTRCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRyxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNuQixXQUFXLEVBQ1gsU0FBUyxFQUNULE9BQU8sRUFDUCxjQUFjLEVBR2QscUJBQXFCLEVBQ3RCLE1BQU0sdUJBQXVCLENBQUM7O0FBRy9CLE1BQU0sT0FBTyxTQUFTO0FBQUcsSUFEekI7QUFDRyxRQU1RLGFBQVEsR0FBRyxLQUFLLENBQUM7QUFDNUIsUUFXVyx3QkFBbUIsR0FBRyxLQUFLLENBQUM7QUFDdkMsUUFDWSxnQkFBVyxHQUF3QixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ2xFLFFBQ1ksaUJBQVksR0FBbUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM5RSxRQUNFLGtCQUFhLEdBQVEsRUFBRSxDQUFDO0FBQzFCLFFBQUUsWUFBTyxHQUF1QixFQUFFLENBQUM7QUFDbkMsUUFBRSxjQUFTLEdBQXlCLENBQUMsR0FBRyxtQkFBbUIsRUFBRSxHQUFHLHFCQUFxQixDQUFDLENBQUM7QUFDdkYsUUFBRSxnQkFBVyxHQUFHLFdBQVcsQ0FBQztBQUM1QixRQUNFLFdBQU0sR0FBRyxLQUFLLENBQUM7QUFDakIsSUF5SUEsQ0FBQztBQUNELElBeklFLFdBQVcsQ0FBQyxPQUFzQjtBQUNwQyxRQUFJLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUN4QixZQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFB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QUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDMUMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIO3FDQXhLQyxTQUFTO3FhQUNSO0FBQUM7QUFBNkIscUJBQzdCLEtBQUs7QUFDTixvQkFFQyxLQUFLO0FBQUssdUJBRVYsS0FBSztBQUFLLHVCQUVWLEtBQUs7QUFBSyxtQkFFVixLQUFLO0FBQUsscUJBRVYsS0FBSztBQUFLLGlDQUVWLEtBQUs7QUFBSyx3QkFFVixLQUFLO0FBQUssa0NBRVYsS0FBSztBQUFLLDBCQUVWLE1BQU07QUFBSywyQkFFWCxNQUFNO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgY3JlYXRlVmFsdWVGb3JTY2hlbWEsXG4gIGpzb25TY2hlbWFEYXRhVHlwZXMsXG4gIGRhdGFUeXBlTWFwLFxuICBpbmZlclR5cGUsXG4gIGdldEljb24sXG4gIGdldEN1cnJlbnRUeXBlLFxuICBKc29uU2NoZW1hRGF0YVR5cGUsXG4gIEpTT05FZGl0b3JTY2hlbWEsXG4gIGpzb25TY2hlbWFEYXRhRm9ybWF0c1xufSBmcm9tICcuLi9qc29uLWVkaXRvci5oZWxwZXInO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBjbGFzcyBBcnJheU5vZGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICBzY2hlbWE6IEpTT05FZGl0b3JTY2hlbWE7XG5cbiAgQElucHV0KCkgbW9kZWw6IGFueVtdO1xuXG4gIEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XG5cbiAgQElucHV0KCkgZXhwYW5kZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgcGF0aDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGVycm9yczogYW55W107XG5cbiAgQElucHV0KCkgdHlwZUNoZWNrT3ZlcnJpZGVzPzogYW55O1xuXG4gIEBJbnB1dCgpIHNjaGVtYVJlZjogSlNPTkVkaXRvclNjaGVtYTtcblxuICBASW5wdXQoKSBzaG93S25vd25Qcm9wZXJ0aWVzID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIG1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55W10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSBzY2hlbWFVcGRhdGU6IEV2ZW50RW1pdHRlcjxKU09ORWRpdG9yU2NoZW1hPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICByZXF1aXJlZENhY2hlOiBhbnkgPSB7fTtcbiAgc2NoZW1hczogSlNPTkVkaXRvclNjaGVtYVtdID0gW107XG4gIGRhdGFUeXBlczogSnNvblNjaGVtYURhdGFUeXBlW10gPSBbLi4uanNvblNjaGVtYURhdGFUeXBlcywgLi4uanNvblNjaGVtYURhdGFGb3JtYXRzXTtcbiAgZGF0YVR5cGVNYXAgPSBkYXRhVHlwZU1hcDtcblxuICBfYXJyYXkgPSBBcnJheTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuc2NoZW1hKSB7XG4gICAgICBpZiAodGhpcy5zY2hlbWEgJiYgdGhpcy5zY2hlbWEucmVxdWlyZWQpIHtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIG9mIHRoaXMuc2NoZW1hLnJlcXVpcmVkKSB7XG4gICAgICAgICAgdGhpcy5yZXF1aXJlZENhY2hlW3Byb3BdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaW5pdFNjaGVtYXNUeXBlQnlNb2RlbFZhbHVlKCk7XG4gICAgdGhpcy51cGRhdGVJY29ucygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgYW4gYXJyYXkgaXRlbSBvZiB0aGUgbW9kZWwgYW5kIGVtaXRzIHRoZSBjaGFuZ2UgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIGluZGV4XG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKi9cbiAgdXBkYXRlQXJyYXlJdGVtKGluZGV4OiBudW1iZXIsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsW2luZGV4XSA9IHZhbHVlO1xuICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdCh0aGlzLm1vZGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbmV3IGl0ZW0gdG8gdGhlIG1vZGVsXG4gICAqL1xuICBhZGRBcnJheUl0ZW0oZGF0YVR5cGU/OiBKc29uU2NoZW1hRGF0YVR5cGUpOiB2b2lkIHtcbiAgICBsZXQgc2NoZW1hO1xuICAgIGlmIChkYXRhVHlwZSkge1xuICAgICAgc2NoZW1hID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7IC4uLih0aGlzLnNjaGVtYS5pdGVtcyBhcyBhbnkpLCAuLi5kYXRhVHlwZS5zY2hlbWEgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY2hlbWEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2NoZW1hLml0ZW1zKSk7XG4gICAgfVxuXG4gICAgaWYgKCFzY2hlbWEudHlwZSkge1xuICAgICAgc2NoZW1hLnR5cGUgPSAnb2JqZWN0JztcbiAgICB9XG5cbiAgICBpZiAoIXNjaGVtYS4kbWV0YSkge1xuICAgICAgc2NoZW1hLiRtZXRhID0ge307XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc2NoZW1hLnR5cGUpKSB7XG4gICAgICBzY2hlbWEuJG1ldGEudHlwZSA9IFsuLi5zY2hlbWEudHlwZV07XG4gICAgICBzY2hlbWEudHlwZSA9IHNjaGVtYS50eXBlWzBdO1xuICAgICAgc2NoZW1hLiRtZXRhLmN1cnJlbnRUeXBlID0gZ2V0Q3VycmVudFR5cGUoc2NoZW1hKTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZTogYW55ID0gY3JlYXRlVmFsdWVGb3JTY2hlbWEoc2NoZW1hKTtcblxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm1vZGVsLnB1c2godmFsdWUpO1xuICAgICAgdGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hKTtcbiAgICB9XG5cbiAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQodGhpcy5tb2RlbCk7XG4gICAgdGhpcy51cGRhdGVJY29ucygpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYW4gaXRlbSBmcm9tIHRoZSBhcnJheVxuICAgKlxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICovXG4gIGRlbGV0ZUFycmF5SXRlbShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMuc2NoZW1hcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMubW9kZWwgPSBbLi4udGhpcy5tb2RlbF07XG4gICAgdGhpcy5zY2hlbWFzID0gWy4uLnRoaXMuc2NoZW1hc107XG4gICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KHRoaXMubW9kZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrIEJ5IGZ1bmN0aW9uIGZvciB0aGUgYXJyYXkgaXR0aWVyYXRvclxuICAgKlxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICBhcnJheVRyYWNrQnkoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBwcm9wZXJ0eVxuICAgKiBAcGFyYW0gdHlwZVxuICAgKi9cbiAgY2hhbmdlSXRlbVR5cGUoaW5kZXg6IG51bWJlciwgdHlwZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2NoZW1hID0gdGhpcy5zY2hlbWFzW2luZGV4XTtcbiAgICBjb25zdCBkYXRhVHlwZSA9IHRoaXMuZGF0YVR5cGVNYXBbdHlwZV07XG4gICAgaWYgKGRhdGFUeXBlKSB7XG4gICAgICBkZWxldGUgc2NoZW1hLmZvcm1hdDtcbiAgICAgIHNjaGVtYS50eXBlID0gZGF0YVR5cGUuc2NoZW1hLnR5cGU7XG4gICAgICBpZiAoZGF0YVR5cGUuc2NoZW1hLmZvcm1hdCkge1xuICAgICAgICBzY2hlbWEuZm9ybWF0ID0gZGF0YVR5cGUuc2NoZW1hLmZvcm1hdDtcbiAgICAgIH1cbiAgICAgIHNjaGVtYS4kbWV0YS5jdXJyZW50VHlwZSA9IGdldEN1cnJlbnRUeXBlKHNjaGVtYSk7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWU6IGFueSA9IGNyZWF0ZVZhbHVlRm9yU2NoZW1hKHNjaGVtYSk7XG4gICAgdGhpcy5tb2RlbFtpbmRleF0gPSB2YWx1ZTtcblxuICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdCh0aGlzLm1vZGVsKTtcbiAgICB0aGlzLnVwZGF0ZUljb25zKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5mZXJzIHRoZSBzY2hlbWEgdHlwZSBmb3IgZWFjaCBpdGVtIGluIHRoZSBhcnJheVxuICAgKi9cbiAgcHJpdmF0ZSBpbml0U2NoZW1hc1R5cGVCeU1vZGVsVmFsdWUoKTogdm9pZCB7XG4gICAgdGhpcy5zY2hlbWFzID0gW107XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5tb2RlbCkpIHtcbiAgICAgIHRoaXMubW9kZWwuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgIGxldCBzY2hlbWEgPSBpbmZlclR5cGUodmFsdWUsIHRoaXMudHlwZUNoZWNrT3ZlcnJpZGVzKTtcblxuICAgICAgICBpZiAodGhpcy5zY2hlbWEuaXRlbXMpIHtcbiAgICAgICAgICBzY2hlbWEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHsgLi4uKHRoaXMuc2NoZW1hLml0ZW1zIGFzIGFueSksIC4uLnNjaGVtYSB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjaGVtYXMucHVzaChzY2hlbWEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGljb25zIGluIHRoZSBzY2hlbWFzXG4gICAqL1xuICBwcml2YXRlIHVwZGF0ZUljb25zKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgc2NoZW1hIG9mIHRoaXMuc2NoZW1hcykge1xuICAgICAgaWYgKCFzY2hlbWEuJG1ldGEpIHtcbiAgICAgICAgc2NoZW1hLiRtZXRhID0ge307XG4gICAgICB9XG4gICAgICBzY2hlbWEuJG1ldGEuaWNvbiA9IGdldEljb24oc2NoZW1hKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==