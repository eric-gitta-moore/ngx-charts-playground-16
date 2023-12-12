import { Component, ViewEncapsulation, Input, ViewChild, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { ArrayNode } from '../../../../node-types/array-node.component';
import { jsonSchemaDataTypes } from '../../../../json-editor.helper';
import { DialogService } from '../../../../../dialog/dialog.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../../../../dialog/dialog.service';

const _c0 = ["propertyConfigTmpl"];
function ArrayNodeFlatComponent_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 15);
    ɵngcc0.ɵɵlistener("click", function ArrayNodeFlatComponent_div_1_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); const i_r5 = ɵngcc0.ɵɵnextContext().index; const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onPropertyConfig(ctx_r8.schemaRef.items, i_r5); });
    ɵngcc0.ɵɵelement(1, "i", 16);
    ɵngcc0.ɵɵelementEnd();
} }
function ArrayNodeFlatComponent_div_1_ng_container_13_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelementStart(1, "button", 18);
    ɵngcc0.ɵɵlistener("click", function ArrayNodeFlatComponent_div_1_ng_container_13_li_1_Template_button_click_1_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r15); const type_r12 = restoredCtx.$implicit; const i_r5 = ɵngcc0.ɵɵnextContext(2).index; const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.changeItemType(i_r5, type_r12); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r12 = ctx.$implicit;
    const i_r5 = ɵngcc0.ɵɵnextContext(2).index;
    const ctx_r11 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r11.schemas[i_r5].currentType === type_r12);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" Change type to ", ctx_r11.dataTypeMap[type_r12].name, " ");
} }
function ArrayNodeFlatComponent_div_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, ArrayNodeFlatComponent_div_1_ng_container_13_li_1_Template, 3, 2, "li", 17);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r5 = ɵngcc0.ɵɵnextContext().index;
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r7.schemas[i_r5] == null ? null : ctx_r7.schemas[i_r5].$meta == null ? null : ctx_r7.schemas[i_r5].$meta.type);
} }
function ArrayNodeFlatComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵelementStart(1, "ngx-json-editor-node-flat", 5);
    ɵngcc0.ɵɵlistener("modelChange", function ArrayNodeFlatComponent_div_1_Template_ngx_json_editor_node_flat_modelChange_1_listener($event) { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r19); const i_r5 = restoredCtx.index; const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.updateArrayItem(i_r5, $event); });
    ɵngcc0.ɵɵelementStart(2, "div", 6);
    ɵngcc0.ɵɵtemplate(3, ArrayNodeFlatComponent_div_1_button_3_Template, 2, 0, "button", 7);
    ɵngcc0.ɵɵelementStart(4, "ngx-dropdown", 8);
    ɵngcc0.ɵɵelementStart(5, "ngx-dropdown-toggle");
    ɵngcc0.ɵɵelementStart(6, "button", 9);
    ɵngcc0.ɵɵelement(7, "i", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(8, "ngx-dropdown-menu", 11);
    ɵngcc0.ɵɵelementStart(9, "ul", 12);
    ɵngcc0.ɵɵelementStart(10, "li");
    ɵngcc0.ɵɵelementStart(11, "button", 13);
    ɵngcc0.ɵɵlistener("click", function ArrayNodeFlatComponent_div_1_Template_button_click_11_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r19); const i_r5 = restoredCtx.index; const ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.deleteArrayItem(i_r5); });
    ɵngcc0.ɵɵtext(12, "Delete");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(13, ArrayNodeFlatComponent_div_1_ng_container_13_Template, 2, 1, "ng-container", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("no-margin", ctx_r0.schemaBuilderMode);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("model", value_r4)("schema", ctx_r0.schemaBuilderMode ? ctx_r0.schemaRef.items : ctx_r0.schemas[i_r5])("path", ctx_r0.path + "[" + i_r5 + "]")("errors", ctx_r0.errors)("typeCheckOverrides", ctx_r0.typeCheckOverrides)("level", ctx_r0.level)("hideRoot", ctx_r0.hideRoot)("compressed", ctx_r0.compressed)("formats", ctx_r0.formats)("schemaRef", (ctx_r0.schemaRef == null ? null : ctx_r0.schemaRef.items) || null)("schemaBuilderMode", ctx_r0.schemaBuilderMode)("arrayItem", ctx_r0.schemaBuilderMode)("arrayName", (ctx_r0.schema.title ? ctx_r0.schema.title : ctx_r0.schema.propertyName) + "[" + (ctx_r0.schemaBuilderMode ? "" : i_r5) + "]")("indentationArray", ctx_r0.indentationArray)("showKnownProperties", ctx_r0.showKnownProperties)("isDuplicated", ctx_r0.isDuplicated);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.schemaBuilderMode);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("showCaret", true);
    ɵngcc0.ɵɵadvance(9);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.schemas[i_r5] == null ? null : ctx_r0.schemas[i_r5].$meta == null ? null : ctx_r0.schemas[i_r5].$meta.type);
} }
function ArrayNodeFlatComponent_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 26);
} }
function ArrayNodeFlatComponent_div_2_ng_template_11_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r28 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 28);
    ɵngcc0.ɵɵlistener("click", function ArrayNodeFlatComponent_div_2_ng_template_11_li_0_Template_li_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r28); const dataType_r26 = restoredCtx.$implicit; const ctx_r27 = ɵngcc0.ɵɵnextContext(3); return ctx_r27.addArrayItem(dataType_r26); });
    ɵngcc0.ɵɵelementStart(1, "button", 29);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const dataType_r26 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(dataType_r26.name);
} }
function ArrayNodeFlatComponent_div_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ArrayNodeFlatComponent_div_2_ng_template_11_li_0_Template, 3, 1, "li", 27);
} if (rf & 2) {
    const ctx_r22 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r22.dataTypes);
} }
function ArrayNodeFlatComponent_div_2_ng_container_12_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelementStart(1, "button", 13);
    ɵngcc0.ɵɵlistener("click", function ArrayNodeFlatComponent_div_2_ng_container_12_li_1_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r32); const ctx_r31 = ɵngcc0.ɵɵnextContext(3); return ctx_r31.addArrayItem(); });
    ɵngcc0.ɵɵtext(2, "Add");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function ArrayNodeFlatComponent_div_2_ng_container_12_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelementStart(1, "button", 13);
    ɵngcc0.ɵɵlistener("click", function ArrayNodeFlatComponent_div_2_ng_container_12_ng_container_2_li_1_Template_button_click_1_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r36); const type_r34 = restoredCtx.$implicit; const ctx_r35 = ɵngcc0.ɵɵnextContext(4); return ctx_r35.addArrayItem(ctx_r35.dataTypeMap[type_r34]); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r34 = ctx.$implicit;
    const ctx_r33 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" Add ", ctx_r33.dataTypeMap[type_r34].name, " ");
} }
function ArrayNodeFlatComponent_div_2_ng_container_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, ArrayNodeFlatComponent_div_2_ng_container_12_ng_container_2_li_1_Template, 3, 1, "li", 17);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r30 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r30.schema.items.type);
} }
function ArrayNodeFlatComponent_div_2_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, ArrayNodeFlatComponent_div_2_ng_container_12_li_1_Template, 3, 0, "li", 14);
    ɵngcc0.ɵɵtemplate(2, ArrayNodeFlatComponent_div_2_ng_container_12_ng_container_2_Template, 2, 1, "ng-container", 14);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r23 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r23._array.isArray(ctx_r23.schema.items.type));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r23._array.isArray(ctx_r23.schema.items.type));
} }
function ArrayNodeFlatComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 19);
    ɵngcc0.ɵɵtemplate(1, ArrayNodeFlatComponent_div_2_span_1_Template, 1, 0, "span", 20);
    ɵngcc0.ɵɵelementStart(2, "div", 21);
    ɵngcc0.ɵɵelementStart(3, "ngx-dropdown", 8);
    ɵngcc0.ɵɵelementStart(4, "ngx-dropdown-toggle");
    ɵngcc0.ɵɵelementStart(5, "button", 22);
    ɵngcc0.ɵɵelement(6, "i", 23);
    ɵngcc0.ɵɵelementStart(7, "span");
    ɵngcc0.ɵɵtext(8, "Add an item");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(9, "ngx-dropdown-menu", 24);
    ɵngcc0.ɵɵelementStart(10, "ul", 12);
    ɵngcc0.ɵɵtemplate(11, ArrayNodeFlatComponent_div_2_ng_template_11_Template, 1, 1, "ng-template", 25);
    ɵngcc0.ɵɵtemplate(12, ArrayNodeFlatComponent_div_2_ng_container_12_Template, 3, 2, "ng-container", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("compressed", ctx_r1.compressed)("background", ctx_r1.hideRoot ? ctx_r1.level > -1 : ctx_r1.level);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.indentationArray);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("margin-left", ctx_r1.hideRoot && ctx_r1.level === 0 ? "20px" : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("showCaret", true);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r1.isDuplicated);
    ɵngcc0.ɵɵadvance(6);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.schema || !ctx_r1.schema.items || !ctx_r1.schema.items.type);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.schema == null ? null : ctx_r1.schema.items == null ? null : ctx_r1.schema.items.type);
} }
function ArrayNodeFlatComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r39 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-property-config", 30);
    ɵngcc0.ɵɵlistener("updateSchema", function ArrayNodeFlatComponent_ng_template_3_Template_ngx_property_config_updateSchema_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r39); const ctx_r38 = ɵngcc0.ɵɵnextContext(); return ctx_r38.updateSchema($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r37 = ctx.context;
    ɵngcc0.ɵɵproperty("property", context_r37.property)("index", context_r37.index)("schema", context_r37.schema)("formats", context_r37.formats)("arrayItem", true);
} }
export class ArrayNodeFlatComponent extends ArrayNode {
    constructor(dialogService) {
        super();
        this.dialogService = dialogService;
        this.hideRoot = false;
        this.isDuplicated = false;
        this.indentationArray = [];
    }
    ngOnInit() {
        if (this.schemaBuilderMode) {
            this.dataTypes = [...jsonSchemaDataTypes, ...this.formats];
        }
        if (this.schemaBuilderMode && !this.model.length && this.schemaRef.items && this.schemaRef.items.type) {
            this.model.push(this.schemaRef.items);
        }
        this.indentationArray = this.level > 0 ? Array(this.level).fill(this.level) : [];
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if ('level' in changes) {
            this.indentationArray = this.level > 0 ? Array(this.level).fill(this.level) : [];
        }
    }
    onPropertyConfig(item, index) {
        this.dialogService.create({
            template: this.propertyConfigTmpl,
            context: {
                property: item,
                index,
                schema: this.schema,
                formats: this.formats
            },
            class: 'property-config-dialog'
        });
    }
    updateSchema(options) {
        this.schema.items = options.newProperty;
        this.schemaRef.items = options.newProperty;
        this.schemaUpdate.emit();
    }
    addArrayItem(dataType) {
        if (this.schemaBuilderMode && dataType) {
            this.addDefaultItemForSchemaBuilder(dataType);
        }
        else {
            super.addArrayItem(dataType);
        }
    }
    deleteArrayItem(index) {
        if (this.schemaBuilderMode) {
            this.removeDefaultItemForSchemaBuilder();
        }
        else {
            super.deleteArrayItem(index);
        }
    }
    addDefaultItemForSchemaBuilder(dataType) {
        this.schema.items = dataType.schema;
        this.schemaRef.items = dataType.schema;
        this.model.push(this.schemaRef.items.type === 'array' ? [] : this.schemaRef.items);
        this.schemaUpdate.emit();
    }
    removeDefaultItemForSchemaBuilder() {
        delete this.schema.items;
        delete this.schemaRef.items;
        this.model = [];
        this.schemaUpdate.emit();
    }
}
ArrayNodeFlatComponent.ɵfac = function ArrayNodeFlatComponent_Factory(t) { return new (t || ArrayNodeFlatComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DialogService)); };
ArrayNodeFlatComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: ArrayNodeFlatComponent, selectors: [["ngx-json-array-node-flat"]], viewQuery: function ArrayNodeFlatComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.propertyConfigTmpl = _t.first);
    } }, inputs: { hideRoot: "hideRoot", isDuplicated: "isDuplicated", level: "level", schemaBuilderMode: "schemaBuilderMode", formats: "formats", compressed: "compressed" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], decls: 5, vars: 4, consts: [[1, "array-node-flat", 3, "hidden"], ["class", "array-node-content", 3, "no-margin", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "add-button", 3, "compressed", "background", 4, "ngIf"], ["propertyConfigTmpl", ""], [1, "array-node-content"], [3, "model", "schema", "path", "errors", "typeCheckOverrides", "level", "hideRoot", "compressed", "formats", "schemaRef", "schemaBuilderMode", "arrayItem", "arrayName", "indentationArray", "showKnownProperties", "isDuplicated", "modelChange"], ["node-options", "", 1, "node-options"], ["type", "button", "class", "node-options-btn", 3, "click", 4, "ngIf"], [3, "showCaret"], ["type", "button", 1, "node-options-btn"], [1, "ngx-icon", "ngx-dots-vert-round"], [1, "ngx-dropdown-dark-outline", "align-right"], [1, "vertical-list"], ["type", "button", 3, "click"], [4, "ngIf"], ["type", "button", 1, "node-options-btn", 3, "click"], [1, "ngx-icon", "ngx-cog"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "disabled", "click"], [1, "add-button"], ["class", "json-editor--vertical-separator", 4, "ngFor", "ngForOf"], [1, "indented-content"], ["type", "button", 3, "disabled"], [1, "ngx-icon", "ngx-tree-expand"], [1, "ngx-dropdown-dark-outline"], [3, "ngIf"], [1, "json-editor--vertical-separator"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["type", "button"], [3, "property", "index", "schema", "formats", "arrayItem", "updateSchema"]], template: function ArrayNodeFlatComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, ArrayNodeFlatComponent_div_1_Template, 14, 21, "div", 1);
        ɵngcc0.ɵɵtemplate(2, ArrayNodeFlatComponent_div_2_Template, 13, 11, "div", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, ArrayNodeFlatComponent_ng_template_3_Template, 1, 5, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("hidden", !ctx.expanded);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.model)("ngForTrackBy", ctx.arrayTrackBy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.schemaBuilderMode || !ctx.model.length);
    } }, styles: [".array-node-flat .add-button .indented-content .ngx-dropdown-menu{white-space:nowrap;margin-top:10px}.array-node-flat .add-button .indented-content .ngx-dropdown-menu .dropdown-column{vertical-align:top;display:inline-block;min-width:150px}.array-node-flat .add-button .indented-content .ngx-dropdown-menu .dropdown-column:nth-child(2){border-left:1px solid #505c75}.json-editor--vertical-separator{background-color:#3b4457;opacity:.5;border-radius:2px;width:1px;height:calc(100% - 4px);margin-right:20px}.json-editor--vertical-separator:first-child{margin-left:20px}.array-node-flat .array-node-content{display:flex;margin-bottom:5px;position:relative}.array-node-flat .array-node-content:last-child{margin-bottom:0}.array-node-flat .array-node-content ngx-json-editor-node-flat{flex:1}.array-node-flat .add-button{height:100px;position:relative;display:flex}.array-node-flat .add-button ngx-dropdown{padding-bottom:0}.array-node-flat .compressed.add-button{max-height:80px}.array-node-flat .background.add-button{background-color:rgba(49,56,71,.4);padding:7px 7px 7px 0;height:120px}.array-node-flat .add-button .indented-content{border:2px dotted rgba(59,68,87,.5);width:100%;display:flex;justify-content:center;align-items:center;color:#909cb4}.array-node-flat .add-button .indented-content button{display:flex}.array-node-flat .add-button .indented-content button i{font-size:18px}.array-node-flat .add-button .indented-content button span{font-size:14px;margin-left:10px}.array-node-flat{margin-top:5px}.array-node-flat .array-node-content.no-margin{margin-bottom:0}"], encapsulation: 2, changeDetection: 0 });
ArrayNodeFlatComponent.ctorParameters = () => [
    { type: DialogService }
];
ArrayNodeFlatComponent.propDecorators = {
    propertyConfigTmpl: [{ type: ViewChild, args: ['propertyConfigTmpl', { static: false },] }],
    level: [{ type: Input }],
    schemaBuilderMode: [{ type: Input }],
    formats: [{ type: Input }],
    compressed: [{ type: Input }],
    hideRoot: [{ type: Input }],
    isDuplicated: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ArrayNodeFlatComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-json-array-node-flat',
                template: "<div class=\"array-node-flat\" [hidden]=\"!expanded\">\n  <div\n    class=\"array-node-content\"\n    [class.no-margin]=\"schemaBuilderMode\"\n    *ngFor=\"let value of model; let i = index; trackBy: arrayTrackBy\"\n  >\n    <ngx-json-editor-node-flat\n      [model]=\"value\"\n      (modelChange)=\"updateArrayItem(i, $event)\"\n      [schema]=\"schemaBuilderMode ? schemaRef.items : schemas[i]\"\n      [path]=\"path + '[' + i + ']'\"\n      [errors]=\"errors\"\n      [typeCheckOverrides]=\"typeCheckOverrides\"\n      [level]=\"level\"\n      [hideRoot]=\"hideRoot\"\n      [compressed]=\"compressed\"\n      [formats]=\"formats\"\n      [schemaRef]=\"schemaRef?.items || null\"\n      [schemaBuilderMode]=\"schemaBuilderMode\"\n      [arrayItem]=\"schemaBuilderMode\"\n      [arrayName]=\"(schema.title ? schema.title : schema.propertyName) + '[' + (schemaBuilderMode ? '' : i) + ']'\"\n      [indentationArray]=\"indentationArray\"\n      [showKnownProperties]=\"showKnownProperties\"\n      [isDuplicated]=\"isDuplicated\"\n    >\n      <div class=\"node-options\" node-options>\n        <button\n          *ngIf=\"schemaBuilderMode\"\n          type=\"button\"\n          class=\"node-options-btn\"\n          (click)=\"onPropertyConfig(schemaRef.items, i)\"\n        >\n          <i class=\"ngx-icon ngx-cog\"></i>\n        </button>\n        <ngx-dropdown [showCaret]=\"true\">\n          <ngx-dropdown-toggle>\n            <button type=\"button\" class=\"node-options-btn\">\n              <i class=\"ngx-icon ngx-dots-vert-round\"></i>\n            </button>\n          </ngx-dropdown-toggle>\n          <ngx-dropdown-menu class=\"ngx-dropdown-dark-outline align-right\">\n            <ul class=\"vertical-list\">\n              <li><button type=\"button\" (click)=\"deleteArrayItem(i)\">Delete</button></li>\n\n              <ng-container *ngIf=\"schemas[i]?.$meta?.type\">\n                <li *ngFor=\"let type of schemas[i]?.$meta?.type\">\n                  <button type=\"button\" (click)=\"changeItemType(i, type)\" [disabled]=\"schemas[i].currentType === type\">\n                    Change type to {{ dataTypeMap[type].name }}\n                  </button>\n                </li>\n              </ng-container>\n            </ul>\n          </ngx-dropdown-menu>\n        </ngx-dropdown>\n      </div>\n    </ngx-json-editor-node-flat>\n  </div>\n\n  <div\n    *ngIf=\"!schemaBuilderMode || !model.length\"\n    class=\"add-button\"\n    [class.compressed]=\"compressed\"\n    [class.background]=\"hideRoot ? level > -1 : level\"\n  >\n    <span class=\"json-editor--vertical-separator\" *ngFor=\"let separator of indentationArray\"></span>\n    <div class=\"indented-content\" [style.marginLeft]=\"hideRoot && level === 0 ? '20px' : '0'\">\n      <ngx-dropdown [showCaret]=\"true\">\n        <ngx-dropdown-toggle>\n          <button [disabled]=\"isDuplicated\" type=\"button\">\n            <i class=\"ngx-icon ngx-tree-expand\"></i>\n            <span>Add an item</span>\n          </button>\n        </ngx-dropdown-toggle>\n        <ngx-dropdown-menu class=\"ngx-dropdown-dark-outline\">\n          <ul class=\"vertical-list\">\n            <ng-template [ngIf]=\"!schema || !schema.items || !schema.items.type\">\n              <li *ngFor=\"let dataType of dataTypes\" (click)=\"addArrayItem(dataType)\">\n                <button type=\"button\">{{ dataType.name }}</button>\n              </li>\n            </ng-template>\n            <ng-container *ngIf=\"schema?.items?.type\">\n              <li *ngIf=\"!_array.isArray(schema.items.type)\">\n                <button type=\"button\" (click)=\"addArrayItem()\">Add</button>\n              </li>\n              <ng-container *ngIf=\"_array.isArray(schema.items.type)\">\n                <li *ngFor=\"let type of schema.items.type\">\n                  <button type=\"button\" (click)=\"addArrayItem(dataTypeMap[type])\">\n                    Add {{ dataTypeMap[type].name }}\n                  </button>\n                </li>\n              </ng-container>\n            </ng-container>\n          </ul>\n        </ngx-dropdown-menu>\n      </ngx-dropdown>\n    </div>\n  </div>\n</div>\n\n<!-- Property Config Dialog -->\n<ng-template #propertyConfigTmpl let-context=\"context\">\n  <ngx-property-config\n    [property]=\"context.property\"\n    [index]=\"context.index\"\n    [schema]=\"context.schema\"\n    [formats]=\"context.formats\"\n    [arrayItem]=\"true\"\n    (updateSchema)=\"updateSchema($event)\"\n  >\n  </ngx-property-config>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".array-node-flat .add-button .indented-content .ngx-dropdown-menu{white-space:nowrap;margin-top:10px}.array-node-flat .add-button .indented-content .ngx-dropdown-menu .dropdown-column{vertical-align:top;display:inline-block;min-width:150px}.array-node-flat .add-button .indented-content .ngx-dropdown-menu .dropdown-column:nth-child(2){border-left:1px solid #505c75}.json-editor--vertical-separator{background-color:#3b4457;opacity:.5;border-radius:2px;width:1px;height:calc(100% - 4px);margin-right:20px}.json-editor--vertical-separator:first-child{margin-left:20px}.array-node-flat .array-node-content{display:flex;margin-bottom:5px;position:relative}.array-node-flat .array-node-content:last-child{margin-bottom:0}.array-node-flat .array-node-content ngx-json-editor-node-flat{flex:1}.array-node-flat .add-button{height:100px;position:relative;display:flex}.array-node-flat .add-button ngx-dropdown{padding-bottom:0}.array-node-flat .compressed.add-button{max-height:80px}.array-node-flat .background.add-button{background-color:rgba(49,56,71,.4);padding:7px 7px 7px 0;height:120px}.array-node-flat .add-button .indented-content{border:2px dotted rgba(59,68,87,.5);width:100%;display:flex;justify-content:center;align-items:center;color:#909cb4}.array-node-flat .add-button .indented-content button{display:flex}.array-node-flat .add-button .indented-content button i{font-size:18px}.array-node-flat .add-button .indented-content button span{font-size:14px;margin-left:10px}.array-node-flat{margin-top:5px}.array-node-flat .array-node-content.no-margin{margin-bottom:0}"]
            }]
    }], function () { return [{ type: ɵngcc1.DialogService }]; }, { hideRoot: [{
            type: Input
        }], isDuplicated: [{
            type: Input
        }], propertyConfigTmpl: [{
            type: ViewChild,
            args: ['propertyConfigTmpl', { static: false }]
        }], level: [{
            type: Input
        }], schemaBuilderMode: [{
            type: Input
        }], formats: [{
            type: Input
        }], compressed: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktbm9kZS1mbGF0LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9qc29uLWVkaXRvci9qc29uLWVkaXRvci1mbGF0L2pzb24tZWRpdG9yLW5vZGUtZmxhdC9ub2RlLXR5cGVzL2FycmF5LW5vZGUtZmxhdC9hcnJheS1ub2RlLWZsYXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUVYLHVCQUF1QixFQUd4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDeEUsT0FBTyxFQUF3QyxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVckUsTUFBTSxPQUFPLHNCQUF1QixTQUFRLFNBQVM7QUFBRyxJQWlCdEQsWUFBb0IsYUFBNEI7QUFDbEQsUUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaLFFBRnNCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0FBQUMsUUFOeEMsYUFBUSxHQUFHLEtBQUssQ0FBQztBQUM1QixRQUNXLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0FBQ2hDLFFBQ0UscUJBQWdCLEdBQWEsRUFBRSxD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S0FBSztBQUFLLHVCQUVWLEtBQUs7QUFBSywyQkFFVixLQUFLO0FBQUk7Ozs7OzBvQ0FkWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBY2E7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIElucHV0LFxuICBWaWV3Q2hpbGQsXG4gIFRlbXBsYXRlUmVmLFxuICBPbkluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcnJheU5vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9ub2RlLXR5cGVzL2FycmF5LW5vZGUuY29tcG9uZW50JztcbmltcG9ydCB7IEpTT05FZGl0b3JTY2hlbWEsIEpzb25TY2hlbWFEYXRhVHlwZSwganNvblNjaGVtYURhdGFUeXBlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2pzb24tZWRpdG9yLmhlbHBlcic7XG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZGlhbG9nL2RpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb3BlcnR5Q29uZmlnT3B0aW9ucywgUHJvcGVydHlDb25maWdDb21wb25lbnQgfSBmcm9tICcuLi9wcm9wZXJ0eS1jb25maWcvcHJvcGVydHktY29uZmlnLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1qc29uLWFycmF5LW5vZGUtZmxhdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcnJheS1ub2RlLWZsYXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hcnJheS1ub2RlLWZsYXQuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlOb2RlRmxhdENvbXBvbmVudCBleHRlbmRzIEFycmF5Tm9kZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgncHJvcGVydHlDb25maWdUbXBsJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByb3BlcnR5Q29uZmlnVG1wbDogVGVtcGxhdGVSZWY8UHJvcGVydHlDb25maWdDb21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpIGxldmVsOiBudW1iZXI7XG5cbiAgQElucHV0KCkgc2NoZW1hQnVpbGRlck1vZGU6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgZm9ybWF0czogSnNvblNjaGVtYURhdGFUeXBlW107XG5cbiAgQElucHV0KCkgY29tcHJlc3NlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBoaWRlUm9vdCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGlzRHVwbGljYXRlZCA9IGZhbHNlO1xuXG4gIGluZGVudGF0aW9uQXJyYXk6IG51bWJlcltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnNjaGVtYUJ1aWxkZXJNb2RlKSB7XG4gICAgICB0aGlzLmRhdGFUeXBlcyA9IFsuLi5qc29uU2NoZW1hRGF0YVR5cGVzLCAuLi50aGlzLmZvcm1hdHNdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNjaGVtYUJ1aWxkZXJNb2RlICYmICF0aGlzLm1vZGVsLmxlbmd0aCAmJiB0aGlzLnNjaGVtYVJlZi5pdGVtcyAmJiB0aGlzLnNjaGVtYVJlZi5pdGVtcy50eXBlKSB7XG4gICAgICB0aGlzLm1vZGVsLnB1c2godGhpcy5zY2hlbWFSZWYuaXRlbXMpO1xuICAgIH1cblxuICAgIHRoaXMuaW5kZW50YXRpb25BcnJheSA9IHRoaXMubGV2ZWwgPiAwID8gQXJyYXkodGhpcy5sZXZlbCkuZmlsbCh0aGlzLmxldmVsKSA6IFtdO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xuICAgIGlmICgnbGV2ZWwnIGluIGNoYW5nZXMpIHtcbiAgICAgIHRoaXMuaW5kZW50YXRpb25BcnJheSA9IHRoaXMubGV2ZWwgPiAwID8gQXJyYXkodGhpcy5sZXZlbCkuZmlsbCh0aGlzLmxldmVsKSA6IFtdO1xuICAgIH1cbiAgfVxuXG4gIG9uUHJvcGVydHlDb25maWcoaXRlbTogSlNPTkVkaXRvclNjaGVtYSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nU2VydmljZS5jcmVhdGUoe1xuICAgICAgdGVtcGxhdGU6IHRoaXMucHJvcGVydHlDb25maWdUbXBsLFxuICAgICAgY29udGV4dDoge1xuICAgICAgICBwcm9wZXJ0eTogaXRlbSxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHNjaGVtYTogdGhpcy5zY2hlbWEsXG4gICAgICAgIGZvcm1hdHM6IHRoaXMuZm9ybWF0c1xuICAgICAgfSxcbiAgICAgIGNsYXNzOiAncHJvcGVydHktY29uZmlnLWRpYWxvZydcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVNjaGVtYShvcHRpb25zOiBQcm9wZXJ0eUNvbmZpZ09wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLnNjaGVtYS5pdGVtcyA9IG9wdGlvbnMubmV3UHJvcGVydHk7XG4gICAgdGhpcy5zY2hlbWFSZWYuaXRlbXMgPSBvcHRpb25zLm5ld1Byb3BlcnR5O1xuICAgIHRoaXMuc2NoZW1hVXBkYXRlLmVtaXQoKTtcbiAgfVxuXG4gIGFkZEFycmF5SXRlbShkYXRhVHlwZT86IEpzb25TY2hlbWFEYXRhVHlwZSkge1xuICAgIGlmICh0aGlzLnNjaGVtYUJ1aWxkZXJNb2RlICYmIGRhdGFUeXBlKSB7XG4gICAgICB0aGlzLmFkZERlZmF1bHRJdGVtRm9yU2NoZW1hQnVpbGRlcihkYXRhVHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1cGVyLmFkZEFycmF5SXRlbShkYXRhVHlwZSk7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlQXJyYXlJdGVtKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zY2hlbWFCdWlsZGVyTW9kZSkge1xuICAgICAgdGhpcy5yZW1vdmVEZWZhdWx0SXRlbUZvclNjaGVtYUJ1aWxkZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VwZXIuZGVsZXRlQXJyYXlJdGVtKGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBhZGREZWZhdWx0SXRlbUZvclNjaGVtYUJ1aWxkZXIoZGF0YVR5cGU6IEpzb25TY2hlbWFEYXRhVHlwZSk6IHZvaWQge1xuICAgIHRoaXMuc2NoZW1hLml0ZW1zID0gZGF0YVR5cGUuc2NoZW1hIGFzIFJlY29yZDxzdHJpbmcsIGFueT47XG4gICAgdGhpcy5zY2hlbWFSZWYuaXRlbXMgPSBkYXRhVHlwZS5zY2hlbWEgYXMgUmVjb3JkPHN0cmluZywgYW55PjtcblxuICAgIHRoaXMubW9kZWwucHVzaCh0aGlzLnNjaGVtYVJlZi5pdGVtcy50eXBlID09PSAnYXJyYXknID8gW10gOiB0aGlzLnNjaGVtYVJlZi5pdGVtcyk7XG5cbiAgICB0aGlzLnNjaGVtYVVwZGF0ZS5lbWl0KCk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZURlZmF1bHRJdGVtRm9yU2NoZW1hQnVpbGRlcigpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5zY2hlbWEuaXRlbXM7XG4gICAgZGVsZXRlIHRoaXMuc2NoZW1hUmVmLml0ZW1zO1xuXG4gICAgdGhpcy5tb2RlbCA9IFtdO1xuXG4gICAgdGhpcy5zY2hlbWFVcGRhdGUuZW1pdCgpO1xuICB9XG59XG4iXX0=