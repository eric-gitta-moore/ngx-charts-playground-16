import { Component, ContentChildren, QueryList, Input, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { JsonEditorNodeFlatComponent } from './json-editor-node-flat/json-editor-node-flat.component';
import { SchemaValidatorService } from '../schema-validator.service';
import { JsonEditor } from '../json-editor';
import { jsonSchemaDataFormats } from '../json-editor.helper';
import { DialogService } from '../../dialog/dialog.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../dialog/dialog.service';
import * as ɵngcc2 from '../schema-validator.service';
import * as ɵngcc3 from './json-editor-node-flat/json-editor-node-flat.component';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc5 from './json-editor-node-flat/node-types/property-config/property-config.component';

const _c0 = ["propertyConfigTmpl"];
function JsonEditorFlatComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 5);
    ɵngcc0.ɵɵlistener("click", function JsonEditorFlatComponent_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.onPropertyConfig(); });
    ɵngcc0.ɵɵelement(1, "i", 6);
    ɵngcc0.ɵɵelementEnd();
} }
function JsonEditorFlatComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-property-config", 7);
    ɵngcc0.ɵɵlistener("updateSchema", function JsonEditorFlatComponent_ng_template_4_Template_ngx_property_config_updateSchema_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.updateSchema($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r5 = ctx.context;
    ɵngcc0.ɵɵproperty("property", context_r5.property)("schema", context_r5.schema)("formats", context_r5.formats)("rootItem", true);
} }
export class JsonEditorFlatComponent extends JsonEditor {
    constructor(dialogService, schemaValidatorService, cdr) {
        super(schemaValidatorService, cdr);
        this.dialogService = dialogService;
        this.schemaValidatorService = schemaValidatorService;
        this.cdr = cdr;
        this.schemaBuilderMode = false;
        this.formats = [];
        this.compressed = false;
        this.hideRoot = false;
        this.showKnownProperties = false;
        this.customFormats = [];
    }
    ngOnInit() {
        if (this.formats.length && this.schemaBuilderMode) {
            this.buildCustomFormats();
        }
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes.schema) {
            this.schemaRef = JSON.parse(JSON.stringify(this.schema));
        }
    }
    onPropertyConfig() {
        this.dialogService.create({
            template: this.propertyConfigTmpl,
            context: {
                property: this.schema,
                schema: this.schema,
                formats: this.customFormats
            },
            class: 'property-config-dialog'
        });
    }
    updateSchema(options) {
        const editedSchema = options.newProperty;
        if (editedSchema.title) {
            this.schema.title = editedSchema.title;
            this.schemaRef.title = editedSchema.title;
        }
        else {
            delete this.schema.title;
            delete this.schemaRef.title;
        }
        if (editedSchema.description) {
            this.schema.description = editedSchema.description;
            this.schemaRef.description = editedSchema.description;
        }
        else {
            delete this.schema.description;
            delete this.schemaRef.description;
        }
        this.schema = Object.assign({}, this.schema);
        this.schemaRef = Object.assign({}, this.schemaRef);
        this.schemaUpdate.emit(this.schemaRef);
    }
    buildCustomFormats() {
        this.formats.forEach(format => {
            const found = jsonSchemaDataFormats.find((dataFormat) => {
                return dataFormat.schema.format === format;
            });
            if (found) {
                this.customFormats.push(found);
            }
            else {
                this.customFormats.push({
                    name: format.charAt(0).toUpperCase() + format.slice(1),
                    defaultValue: () => '',
                    schema: {
                        type: 'string',
                        format
                    },
                    icon: 'field-text',
                    matchType: () => {
                        return false;
                    }
                });
            }
        });
    }
}
JsonEditorFlatComponent.ɵfac = function JsonEditorFlatComponent_Factory(t) { return new (t || JsonEditorFlatComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DialogService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.SchemaValidatorService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
JsonEditorFlatComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: JsonEditorFlatComponent, selectors: [["ngx-json-editor-flat"]], contentQueries: function JsonEditorFlatComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, JsonEditorNodeFlatComponent, 4);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nodeElms = _t);
    } }, viewQuery: function JsonEditorFlatComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.propertyConfigTmpl = _t.first);
    } }, inputs: { schemaBuilderMode: "schemaBuilderMode", formats: "formats", compressed: "compressed", hideRoot: "hideRoot", showKnownProperties: "showKnownProperties", schema: "schema", model: "model", typeCheckOverrides: "typeCheckOverrides" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], decls: 6, vars: 12, consts: [[1, "ngx-json-editor-flat"], [3, "model", "schema", "hideRoot", "schemaRef", "errors", "typeCheckOverrides", "label", "compressed", "formats", "schemaBuilderMode", "showKnownProperties", "modelChange", "schemaUpdate"], ["node-options", "", 1, "node-options"], ["type", "button", "class", "node-options-btn", 3, "click", 4, "ngIf"], ["propertyConfigTmpl", ""], ["type", "button", 1, "node-options-btn", 3, "click"], [1, "ngx-icon", "ngx-cog"], [3, "property", "schema", "formats", "rootItem", "updateSchema"]], template: function JsonEditorFlatComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "ngx-json-editor-node-flat", 1);
        ɵngcc0.ɵɵlistener("modelChange", function JsonEditorFlatComponent_Template_ngx_json_editor_node_flat_modelChange_1_listener($event) { return ctx.model = $event; })("modelChange", function JsonEditorFlatComponent_Template_ngx_json_editor_node_flat_modelChange_1_listener($event) { return ctx.modelChangedCallback($event); })("schemaUpdate", function JsonEditorFlatComponent_Template_ngx_json_editor_node_flat_schemaUpdate_1_listener($event) { return ctx.schemaUpdate.emit($event); });
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, JsonEditorFlatComponent_button_3_Template, 2, 0, "button", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, JsonEditorFlatComponent_ng_template_4_Template, 1, 4, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("model", ctx.model)("schema", ctx.schema)("hideRoot", ctx.hideRoot)("schemaRef", ctx.schemaRef)("errors", ctx.errors)("typeCheckOverrides", ctx.typeCheckOverrides)("label", ctx.label)("compressed", ctx.compressed)("formats", ctx.customFormats)("schemaBuilderMode", ctx.schemaBuilderMode)("showKnownProperties", ctx.showKnownProperties);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.schemaBuilderMode);
    } }, directives: [ɵngcc3.JsonEditorNodeFlatComponent, ɵngcc4.NgIf, ɵngcc5.PropertyConfigComponent], styles: [".ngx-json-editor-flat{position:relative;width:100%}.ngx-json-editor-flat .node-options{flex:0 0 80px}.ngx-json-editor-flat .node-options .node-options-btn{color:#72819f;padding:1px 3px 2px}.ngx-json-editor-flat .node-options .ngx-dropdown{margin-left:10px}.property-config-dialog .ngx-dialog-content{padding:0!important;min-width:500px!important}"], encapsulation: 2, changeDetection: 0 });
JsonEditorFlatComponent.ctorParameters = () => [
    { type: DialogService },
    { type: SchemaValidatorService },
    { type: ChangeDetectorRef }
];
JsonEditorFlatComponent.propDecorators = {
    model: [{ type: Input }],
    schema: [{ type: Input }],
    typeCheckOverrides: [{ type: Input }],
    schemaBuilderMode: [{ type: Input }],
    formats: [{ type: Input }],
    compressed: [{ type: Input }],
    hideRoot: [{ type: Input }],
    showKnownProperties: [{ type: Input }],
    nodeElms: [{ type: ContentChildren, args: [JsonEditorNodeFlatComponent,] }],
    propertyConfigTmpl: [{ type: ViewChild, args: ['propertyConfigTmpl',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(JsonEditorFlatComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-json-editor-flat',
                template: "<div class=\"ngx-json-editor-flat\">\n  <ngx-json-editor-node-flat\n    [(model)]=\"model\"\n    [schema]=\"schema\"\n    [hideRoot]=\"hideRoot\"\n    [schemaRef]=\"schemaRef\"\n    (modelChange)=\"modelChangedCallback($event)\"\n    [errors]=\"errors\"\n    [typeCheckOverrides]=\"typeCheckOverrides\"\n    [label]=\"label\"\n    [compressed]=\"compressed\"\n    [formats]=\"customFormats\"\n    [schemaBuilderMode]=\"schemaBuilderMode\"\n    [showKnownProperties]=\"showKnownProperties\"\n    (schemaUpdate)=\"schemaUpdate.emit($event)\"\n  >\n    <div class=\"node-options\" node-options>\n      <button *ngIf=\"schemaBuilderMode\" type=\"button\" class=\"node-options-btn\" (click)=\"onPropertyConfig()\">\n        <i class=\"ngx-icon ngx-cog\"></i>\n      </button>\n    </div>\n  </ngx-json-editor-node-flat>\n</div>\n\n<!-- Property Config Dialog -->\n<ng-template #propertyConfigTmpl let-context=\"context\">\n  <ngx-property-config\n    [property]=\"context.property\"\n    [schema]=\"context.schema\"\n    [formats]=\"context.formats\"\n    [rootItem]=\"true\"\n    (updateSchema)=\"updateSchema($event)\"\n  >\n  </ngx-property-config>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".ngx-json-editor-flat{position:relative;width:100%}.ngx-json-editor-flat .node-options{flex:0 0 80px}.ngx-json-editor-flat .node-options .node-options-btn{color:#72819f;padding:1px 3px 2px}.ngx-json-editor-flat .node-options .ngx-dropdown{margin-left:10px}.property-config-dialog .ngx-dialog-content{padding:0!important;min-width:500px!important}"]
            }]
    }], function () { return [{ type: ɵngcc1.DialogService }, { type: ɵngcc2.SchemaValidatorService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { schemaBuilderMode: [{
            type: Input
        }], formats: [{
            type: Input
        }], compressed: [{
            type: Input
        }], hideRoot: [{
            type: Input
        }], showKnownProperties: [{
            type: Input
        }], schema: [{
            type: Input
        }], model: [{
            type: Input
        }], typeCheckOverrides: [{
            type: Input
        }], nodeElms: [{
            type: ContentChildren,
            args: [JsonEditorNodeFlatComponent]
        }], propertyConfigTmpl: [{
            type: ViewChild,
            args: ['propertyConfigTmpl']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1lZGl0b3ItZmxhdC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvanNvbi1lZGl0b3IvanNvbi1lZGl0b3ItZmxhdC9qc29uLWVkaXRvci1mbGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGVBQWUsRUFDZixTQUFTLEVBQ1QsS0FBSyxFQUNMLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFFWCxpQkFBaUIsRUFHbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBd0MscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhNUQsTUFBTSxPQUFPLHVCQUF3QixTQUFRLFVBQVU7QUFBRyxJQXlCeEQsWUFDVSxhQUE0QixFQUMxQixzQkFBOEMsRUFDOUMsR0FBc0I7QUFDakMsUUFDQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdkMsUUFMWSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtBQUFDLFFBQzNCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7QUFBQyxRQUMvQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUNwQyxRQXRCVyxzQkFBaUIsR0FBYSxLQUFLLENBQUM7QUFDL0MsUUFDVyxZQUFPLEdBQWMsRUFBRSxDQUFDO0FBQ25DLFFBQ1csZUFBVSxHQUFHLEtBQUssQ0FBQztBQUM5QixRQUNXLGFBQVEsR0FBRyxLQUFLLENBQUM7QUFDNUIsUUFDVyx3QkFBbUIsR0FBRyxLQUFLLENBQUM7QUFDdkMsUUFPRSxrQkFBYSxHQUF5QixFQUFFLENBQUM7QUFDM0MsSUFPRSxDQUFDO0FBQ0gsSUFDRSxRQUFRO0FBQ1YsUUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtBQUN2RCxZQUFNLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQ2hDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVcsQ0FBQyxPQUFzQjtBQUNwQyxRQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsUUFBSSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDeEIsWUFBTSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUMvRCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxnQkFBZ0I7QUFBSyxRQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztBQUM5QixZQUFNLFFBQVEsRUFBRSxJQUFJLENBQUMsa0JBQWtCO0FBQ3ZDLFlBQU0sT0FBTyxFQUFFO0FBQ2YsZ0JBQVEsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNO0FBQzdCLGdCQUFRLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtBQUMzQixnQkFBUSxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWE7QUFDbkMsYUFBTztBQUNQLFlBQU0sS0FBSyxFQUFFLHdCQUF3QjtBQUNyQyxTQUFLLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNILElBQ0UsWUFBWSxDQUFDLE9BQThCO0FBQUksUUFDN0MsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUM3QyxRQUNJLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRTtBQUM1QixZQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7QUFDN0MsWUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO0FBQ2hELFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQy9CLFlBQU0sT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztBQUNsQyxTQUFLO0FBQ0wsUUFDSSxJQUFJLFlBQVksQ0FBQyxXQUFXLEVBQUU7QUFDbEMsWUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO0FBQ3pELFlBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQztBQUM1RCxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztBQUNyQyxZQUFNLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7QUFDeEMsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLE1BQU0scUJBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDO0FBQ3JDLFFBQUksSUFBSSxDQUFDLFNBQVMscUJBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBRSxDQUFDO0FBQzNDLFFBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzNDLElBQUUsQ0FBQztBQUNILElBQ1Usa0JBQWtCO0FBQUssUUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDbEMsWUFBTSxNQUFNLEtBQUssR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUE4QixFQUFFLEVBQUU7QUFDbEYsZ0JBQVEsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUM7QUFDbkQsWUFBTSxDQUFDLENBQUMsQ0FBQztBQUNULFlBQ00sSUFBSSxLQUFLLEVBQUU7QUFDakIsZ0JBQVEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkMsYUFBTztBQUFDLGlCQUFLO0FBQ2IsZ0JBQVEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7QUFDaEMsb0JBQVUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDaEUsb0JBQVUsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7QUFDaEMsb0JBQVUsTUFBTSxFQUFFO0FBQ2xCLHdCQUFZLElBQUksRUFBRSxRQUFRO0FBQzFCLHdCQUFZLE1BQU07QUFDbEIscUJBQVc7QUFDWCxvQkFBVSxJQUFJLEVBQUUsWUFBWTtBQUM1QixvQkFBVSxTQUFTLEVBQUUsR0FBWSxFQUFFO0FBQ25DLHdCQUFZLE9BQU8sS0FBSyxDQUFDO0FBQ3pCLG9CQUFVLENBQUM7QUFDWCxpQkFBUyxDQUFDLENBQUM7QUFDWCxhQUFPO0FBQ1AsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNIO21EQWxIQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLHNCQUFzQixrQkFDaEM7Ozs7Ozs7Ozs7OzZWQUFnRCxrQkFFaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLHNZQUN0Qzs7Ozs7Ozs7Ozs7Ozs7O3dmQUNJO0FBQUM7QUFBaUQsWUFiOUMsYUFBYTtBQUFJLFlBSGpCLHNCQUFzQjtBQUFJLFlBTGpDLGlCQUFpQjtBQUNsQjtBQUFHO0FBR0gsb0JBa0JFLEtBQUs7QUFBSyxxQkFFVixLQUFLO0FBQUssaUNBRVYsS0FBSztBQUFLLGdDQUVWLEtBQUs7QUFBSyxzQkFFVixLQUFLO0FBQUsseUJBRVYsS0FBSztBQUFLLHVCQUVWLEtBQUs7QUFBSyxrQ0FFVixLQUFLO0FBQUssdUJBRVYsZUFBZSxTQUFDLDJCQUEyQjtBQUFPLGlDQUVsRCxTQUFTLFNBQUMsb0JBQW9CO0FBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBJbnB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3Q2hpbGQsXG4gIFRlbXBsYXRlUmVmLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25DaGFuZ2VzLFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBKc29uRWRpdG9yTm9kZUZsYXRDb21wb25lbnQgfSBmcm9tICcuL2pzb24tZWRpdG9yLW5vZGUtZmxhdC9qc29uLWVkaXRvci1ub2RlLWZsYXQuY29tcG9uZW50JztcbmltcG9ydCB7IFNjaGVtYVZhbGlkYXRvclNlcnZpY2UgfSBmcm9tICcuLi9zY2hlbWEtdmFsaWRhdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgSnNvbkVkaXRvciB9IGZyb20gJy4uL2pzb24tZWRpdG9yJztcbmltcG9ydCB7IEpTT05FZGl0b3JTY2hlbWEsIEpzb25TY2hlbWFEYXRhVHlwZSwganNvblNjaGVtYURhdGFGb3JtYXRzIH0gZnJvbSAnLi4vanNvbi1lZGl0b3IuaGVscGVyJztcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9kaWFsb2cvZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgUHJvcGVydHlDb25maWdDb21wb25lbnQsXG4gIFByb3BlcnR5Q29uZmlnT3B0aW9uc1xufSBmcm9tICcuL2pzb24tZWRpdG9yLW5vZGUtZmxhdC9ub2RlLXR5cGVzL3Byb3BlcnR5LWNvbmZpZy9wcm9wZXJ0eS1jb25maWcuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWpzb24tZWRpdG9yLWZsYXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vanNvbi1lZGl0b3ItZmxhdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2pzb24tZWRpdG9yLWZsYXQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkVkaXRvckZsYXRDb21wb25lbnQgZXh0ZW5kcyBKc29uRWRpdG9yIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBtb2RlbDogYW55O1xuXG4gIEBJbnB1dCgpIHNjaGVtYTogSlNPTkVkaXRvclNjaGVtYTtcblxuICBASW5wdXQoKSB0eXBlQ2hlY2tPdmVycmlkZXM/OiBhbnk7XG5cbiAgQElucHV0KCkgc2NoZW1hQnVpbGRlck1vZGU/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgZm9ybWF0cz86IHN0cmluZ1tdID0gW107XG5cbiAgQElucHV0KCkgY29tcHJlc3NlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGhpZGVSb290ID0gZmFsc2U7XG5cbiAgQElucHV0KCkgc2hvd0tub3duUHJvcGVydGllcyA9IGZhbHNlO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oSnNvbkVkaXRvck5vZGVGbGF0Q29tcG9uZW50KSBub2RlRWxtczogUXVlcnlMaXN0PEpzb25FZGl0b3JOb2RlRmxhdENvbXBvbmVudD47XG5cbiAgQFZpZXdDaGlsZCgncHJvcGVydHlDb25maWdUbXBsJykgcHJvcGVydHlDb25maWdUbXBsOiBUZW1wbGF0ZVJlZjxQcm9wZXJ0eUNvbmZpZ0NvbXBvbmVudD47XG5cbiAgc2NoZW1hUmVmOiBKU09ORWRpdG9yU2NoZW1hO1xuXG4gIGN1c3RvbUZvcm1hdHM6IEpzb25TY2hlbWFEYXRhVHlwZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzY2hlbWFWYWxpZGF0b3JTZXJ2aWNlOiBTY2hlbWFWYWxpZGF0b3JTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHN1cGVyKHNjaGVtYVZhbGlkYXRvclNlcnZpY2UsIGNkcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXRzLmxlbmd0aCAmJiB0aGlzLnNjaGVtYUJ1aWxkZXJNb2RlKSB7XG4gICAgICB0aGlzLmJ1aWxkQ3VzdG9tRm9ybWF0cygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcbiAgICBpZiAoY2hhbmdlcy5zY2hlbWEpIHtcbiAgICAgIHRoaXMuc2NoZW1hUmVmID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSkpO1xuICAgIH1cbiAgfVxuXG4gIG9uUHJvcGVydHlDb25maWcoKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dTZXJ2aWNlLmNyZWF0ZSh7XG4gICAgICB0ZW1wbGF0ZTogdGhpcy5wcm9wZXJ0eUNvbmZpZ1RtcGwsXG4gICAgICBjb250ZXh0OiB7XG4gICAgICAgIHByb3BlcnR5OiB0aGlzLnNjaGVtYSxcbiAgICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYSxcbiAgICAgICAgZm9ybWF0czogdGhpcy5jdXN0b21Gb3JtYXRzXG4gICAgICB9LFxuICAgICAgY2xhc3M6ICdwcm9wZXJ0eS1jb25maWctZGlhbG9nJ1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlU2NoZW1hKG9wdGlvbnM6IFByb3BlcnR5Q29uZmlnT3B0aW9ucyk6IHZvaWQge1xuICAgIGNvbnN0IGVkaXRlZFNjaGVtYSA9IG9wdGlvbnMubmV3UHJvcGVydHk7XG5cbiAgICBpZiAoZWRpdGVkU2NoZW1hLnRpdGxlKSB7XG4gICAgICB0aGlzLnNjaGVtYS50aXRsZSA9IGVkaXRlZFNjaGVtYS50aXRsZTtcbiAgICAgIHRoaXMuc2NoZW1hUmVmLnRpdGxlID0gZWRpdGVkU2NoZW1hLnRpdGxlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdGhpcy5zY2hlbWEudGl0bGU7XG4gICAgICBkZWxldGUgdGhpcy5zY2hlbWFSZWYudGl0bGU7XG4gICAgfVxuXG4gICAgaWYgKGVkaXRlZFNjaGVtYS5kZXNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gPSBlZGl0ZWRTY2hlbWEuZGVzY3JpcHRpb247XG4gICAgICB0aGlzLnNjaGVtYVJlZi5kZXNjcmlwdGlvbiA9IGVkaXRlZFNjaGVtYS5kZXNjcmlwdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uO1xuICAgICAgZGVsZXRlIHRoaXMuc2NoZW1hUmVmLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMuc2NoZW1hID0geyAuLi50aGlzLnNjaGVtYSB9O1xuICAgIHRoaXMuc2NoZW1hUmVmID0geyAuLi50aGlzLnNjaGVtYVJlZiB9O1xuXG4gICAgdGhpcy5zY2hlbWFVcGRhdGUuZW1pdCh0aGlzLnNjaGVtYVJlZik7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkQ3VzdG9tRm9ybWF0cygpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1hdHMuZm9yRWFjaChmb3JtYXQgPT4ge1xuICAgICAgY29uc3QgZm91bmQgPSBqc29uU2NoZW1hRGF0YUZvcm1hdHMuZmluZCgoZGF0YUZvcm1hdDogSnNvblNjaGVtYURhdGFUeXBlKSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhRm9ybWF0LnNjaGVtYS5mb3JtYXQgPT09IGZvcm1hdDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgdGhpcy5jdXN0b21Gb3JtYXRzLnB1c2goZm91bmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXN0b21Gb3JtYXRzLnB1c2goe1xuICAgICAgICAgIG5hbWU6IGZvcm1hdC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGZvcm1hdC5zbGljZSgxKSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6ICgpID0+ICcnLFxuICAgICAgICAgIHNjaGVtYToge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBmb3JtYXRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGljb246ICdmaWVsZC10ZXh0JyxcbiAgICAgICAgICBtYXRjaFR5cGU6ICgpOiBib29sZWFuID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=