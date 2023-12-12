import { Component, ViewEncapsulation, Input, ViewChild, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ObjectNode } from '../../../../node-types/object-node.component';
import { DialogService } from '../../../../../dialog/dialog.service';
import { jsonSchemaDataTypes, createValueForSchema } from '../../../../json-editor.helper';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../../../../dialog/dialog.service';

const _c0 = ["propertyConfigTmpl"];
function ObjectNodeFlatComponent_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 17);
    ɵngcc0.ɵɵlistener("click", function ObjectNodeFlatComponent_div_1_button_3_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(); const prop_r5 = ctx_r12.$implicit; const index_r6 = ctx_r12.index; const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onPropertyConfig(prop_r5, index_r6); });
    ɵngcc0.ɵɵelement(1, "i", 18);
    ɵngcc0.ɵɵelementEnd();
} }
function ObjectNodeFlatComponent_div_1_ng_container_13_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelementStart(1, "button", 14);
    ɵngcc0.ɵɵlistener("click", function ObjectNodeFlatComponent_div_1_ng_container_13_li_1_Template_button_click_1_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r18); const type_r15 = restoredCtx.$implicit; const prop_r5 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.changePropertyType(prop_r5, type_r15); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r15 = ctx.$implicit;
    const prop_r5 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r14 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", prop_r5.$meta.currentType === type_r15);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" Change type to ", ctx_r14.dataTypeMap[type_r15].name, " ");
} }
function ObjectNodeFlatComponent_div_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, ObjectNodeFlatComponent_div_1_ng_container_13_li_1_Template, 3, 2, "li", 19);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const prop_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", prop_r5 == null ? null : prop_r5.$meta == null ? null : prop_r5.$meta.type);
} }
function ObjectNodeFlatComponent_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 20);
    ɵngcc0.ɵɵelement(1, "i", 21);
    ɵngcc0.ɵɵelementEnd();
} }
const _c1 = function (a0) { return { width: a0 }; };
function ObjectNodeFlatComponent_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 22);
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(1, _c1, "calc(100% + " + ctx_r10.level * 20 + "px)"));
} }
function ObjectNodeFlatComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵelementStart(1, "ngx-json-editor-node-flat", 6);
    ɵngcc0.ɵɵlistener("modelChange", function ObjectNodeFlatComponent_div_1_Template_ngx_json_editor_node_flat_modelChange_1_listener($event) { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r22); const prop_r5 = restoredCtx.$implicit; const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.updateProp(prop_r5.id, $event); })("schemaUpdate", function ObjectNodeFlatComponent_div_1_Template_ngx_json_editor_node_flat_schemaUpdate_1_listener() { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r23 = ɵngcc0.ɵɵnextContext(); return ctx_r23.schemaUpdate.emit(ctx_r23.schemaRef); })("updatePropertyNameEvent", function ObjectNodeFlatComponent_div_1_Template_ngx_json_editor_node_flat_updatePropertyNameEvent_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.onUpdatePropertyName($event); });
    ɵngcc0.ɵɵelementStart(2, "div", 7);
    ɵngcc0.ɵɵtemplate(3, ObjectNodeFlatComponent_div_1_button_3_Template, 2, 0, "button", 8);
    ɵngcc0.ɵɵelementStart(4, "ngx-dropdown", 9);
    ɵngcc0.ɵɵelementStart(5, "ngx-dropdown-toggle");
    ɵngcc0.ɵɵelementStart(6, "button", 10);
    ɵngcc0.ɵɵelement(7, "i", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(8, "ngx-dropdown-menu", 12);
    ɵngcc0.ɵɵelementStart(9, "ul", 13);
    ɵngcc0.ɵɵelementStart(10, "li");
    ɵngcc0.ɵɵelementStart(11, "button", 14);
    ɵngcc0.ɵɵlistener("click", function ObjectNodeFlatComponent_div_1_Template_button_click_11_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r22); const prop_r5 = restoredCtx.$implicit; const ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.deleteProperty(prop_r5.propertyName); });
    ɵngcc0.ɵɵtext(12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(13, ObjectNodeFlatComponent_div_1_ng_container_13_Template, 2, 1, "ng-container", 2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(14, ObjectNodeFlatComponent_div_1_div_14_Template, 2, 0, "div", 15);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(15, ObjectNodeFlatComponent_div_1_div_15_Template, 1, 3, "div", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const prop_r5 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("model", ctx_r0.model[prop_r5.propertyName])("schema", prop_r5)("schemaRef", ctx_r0.schemaRef && ctx_r0.schemaRef.properties ? ctx_r0.schemaRef.properties[prop_r5.propertyName] : null)("required", !!ctx_r0.requiredCache[prop_r5.propertyName])("inline", prop_r5.type !== "array" && prop_r5.type !== "object")("path", ctx_r0.path + ctx_r0.getPath(prop_r5.propertyName))("errors", ctx_r0.errors)("hideRoot", ctx_r0.hideRoot)("typeCheckOverrides", ctx_r0.typeCheckOverrides)("level", ctx_r0.level)("schemaBuilderMode", ctx_r0.schemaBuilderMode)("formats", ctx_r0.formats)("compressed", ctx_r0.compressed)("indentationArray", ctx_r0.indentationArray)("showKnownProperties", ctx_r0.showKnownProperties)("isDuplicated", ctx_r0.duplicatedFields.has(prop_r5.id));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.schemaBuilderMode);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("showCaret", true);
    ɵngcc0.ɵɵadvance(7);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.requiredCache[prop_r5.propertyName] && !ctx_r0.schemaBuilderMode);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", !ctx_r0.schema.properties[prop_r5.propertyName] ? "Delete" : "Remove", " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (prop_r5 == null ? null : prop_r5.$meta == null ? null : prop_r5.$meta.type) && !ctx_r0.schemaBuilderMode);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.schemaBuilderMode);
} }
function ObjectNodeFlatComponent_ng_container_3_ng_container_1_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 34);
} }
function ObjectNodeFlatComponent_ng_container_3_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 24);
    ɵngcc0.ɵɵtemplate(1, ObjectNodeFlatComponent_ng_container_3_ng_container_1_div_1_span_1_Template, 1, 0, "span", 25);
    ɵngcc0.ɵɵelementStart(2, "div", 26);
    ɵngcc0.ɵɵlistener("click", function ObjectNodeFlatComponent_ng_container_3_ng_container_1_div_1_Template_div_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r33); const prop_r27 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r31 = ɵngcc0.ɵɵnextContext(2); return ctx_r31.addSchemaProperty(prop_r27.key); });
    ɵngcc0.ɵɵelement(3, "div", 27);
    ɵngcc0.ɵɵelementStart(4, "div", 28);
    ɵngcc0.ɵɵelementStart(5, "div", 29);
    ɵngcc0.ɵɵelement(6, "ngx-json-editor-node-info", 30);
    ɵngcc0.ɵɵpipe(7, "titlecase");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(8, "div", 31);
    ɵngcc0.ɵɵelementStart(9, "button", 32);
    ɵngcc0.ɵɵelement(10, "i", 33);
    ɵngcc0.ɵɵelementStart(11, "span");
    ɵngcc0.ɵɵtext(12, "Include");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const prop_r27 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r28 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("compressed", ctx_r28.compressed);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r28.indentationArray);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("margin-left", ctx_r28.level === 0 ? "20px" : "0");
    ɵngcc0.ɵɵclassProp("compressed", ctx_r28.compressed);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("nameEditable", false)("propertyName", prop_r27.key)("title", prop_r27.value.title ? prop_r27.value.title : prop_r27.key)("type", ɵngcc0.ɵɵpipeBind1(7, 14, prop_r27.value.format || prop_r27.value.type) + ((prop_r27.value.enum == null ? null : prop_r27.value.enum.length) ? " + Enum" : ""))("description", prop_r27.value == null ? null : prop_r27.value.description)("examples", prop_r27.value.examples)("compressed", ctx_r28.compressed);
} }
function ObjectNodeFlatComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, ObjectNodeFlatComponent_ng_container_3_ng_container_1_div_1_Template, 13, 16, "div", 23);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const prop_r27 = ctx.$implicit;
    const ctx_r26 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r26.model[prop_r27.key] === undefined);
} }
function ObjectNodeFlatComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, ObjectNodeFlatComponent_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 19);
    ɵngcc0.ɵɵpipe(2, "keyvalue");
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind1(2, 1, ctx_r1.schema.properties));
} }
function ObjectNodeFlatComponent_div_4_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 34);
} }
function ObjectNodeFlatComponent_div_4_ul_10_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 41);
    ɵngcc0.ɵɵlistener("click", function ObjectNodeFlatComponent_div_4_ul_10_li_1_Template_li_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r42); const prop_r40 = restoredCtx.$implicit; const ctx_r41 = ɵngcc0.ɵɵnextContext(3); return ctx_r41.addSchemaProperty(prop_r40.key); });
    ɵngcc0.ɵɵelementStart(1, "button", 42);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const prop_r40 = ctx.$implicit;
    const ctx_r39 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r39.model[prop_r40.key] !== undefined);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", prop_r40.value.title ? prop_r40.value.title : prop_r40.key, " ");
} }
function ObjectNodeFlatComponent_div_4_ul_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 39);
    ɵngcc0.ɵɵtemplate(1, ObjectNodeFlatComponent_div_4_ul_10_li_1_Template, 3, 2, "li", 40);
    ɵngcc0.ɵɵpipe(2, "keyvalue");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r36 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind1(2, 1, ctx_r36.schema.properties));
} }
function ObjectNodeFlatComponent_div_4_ul_11_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r47 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 41);
    ɵngcc0.ɵɵlistener("click", function ObjectNodeFlatComponent_div_4_ul_11_li_1_Template_li_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r47); const prop_r45 = restoredCtx.$implicit; const ctx_r46 = ɵngcc0.ɵɵnextContext(3); return ctx_r46.addSchemaPatternProperty(prop_r45.key); });
    ɵngcc0.ɵɵelementStart(1, "button", 32);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const prop_r45 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(prop_r45.value.title ? prop_r45.value.title : prop_r45.key);
} }
function ObjectNodeFlatComponent_div_4_ul_11_ng_template_3_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r51 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 41);
    ɵngcc0.ɵɵlistener("click", function ObjectNodeFlatComponent_div_4_ul_11_ng_template_3_li_0_Template_li_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r51); const dataType_r49 = restoredCtx.$implicit; const ctx_r50 = ɵngcc0.ɵɵnextContext(4); return ctx_r50.addProperty(dataType_r49); });
    ɵngcc0.ɵɵelementStart(1, "button", 32);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const dataType_r49 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(dataType_r49.name);
} }
function ObjectNodeFlatComponent_div_4_ul_11_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ObjectNodeFlatComponent_div_4_ul_11_ng_template_3_li_0_Template, 3, 1, "li", 40);
} if (rf & 2) {
    const ctx_r44 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r44.dataTypes);
} }
function ObjectNodeFlatComponent_div_4_ul_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 39);
    ɵngcc0.ɵɵtemplate(1, ObjectNodeFlatComponent_div_4_ul_11_li_1_Template, 3, 1, "li", 40);
    ɵngcc0.ɵɵpipe(2, "keyvalue");
    ɵngcc0.ɵɵtemplate(3, ObjectNodeFlatComponent_div_4_ul_11_ng_template_3_Template, 1, 1, "ng-template", 43);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r37 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind1(2, 2, ctx_r37.schema.patternProperties));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r37.schema || ctx_r37.schema.additionalProperties !== false);
} }
function ObjectNodeFlatComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 35);
    ɵngcc0.ɵɵtemplate(1, ObjectNodeFlatComponent_div_4_span_1_Template, 1, 0, "span", 25);
    ɵngcc0.ɵɵelementStart(2, "div", 31);
    ɵngcc0.ɵɵelementStart(3, "ngx-dropdown", 9);
    ɵngcc0.ɵɵelementStart(4, "ngx-dropdown-toggle", 36);
    ɵngcc0.ɵɵelementStart(5, "button", 32);
    ɵngcc0.ɵɵelement(6, "i", 33);
    ɵngcc0.ɵɵelementStart(7, "span");
    ɵngcc0.ɵɵtext(8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(9, "ngx-dropdown-menu", 37);
    ɵngcc0.ɵɵtemplate(10, ObjectNodeFlatComponent_div_4_ul_10_Template, 3, 3, "ul", 38);
    ɵngcc0.ɵɵtemplate(11, ObjectNodeFlatComponent_div_4_ul_11_Template, 4, 4, "ul", 38);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("compressed", ctx_r2.compressed)("background", ctx_r2.hideRoot ? ctx_r2.level > -1 : ctx_r2.level);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.indentationArray);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("margin-left", ctx_r2.hideRoot && ctx_r2.level === 0 ? "20px" : "0");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("showCaret", true);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r2.isDuplicated);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵtextInterpolate1("Add ", ctx_r2.objectKeys(ctx_r2.propertyIndex).length ? "a" : "your first", " property");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.schema.properties && !ctx_r2.schemaBuilderMode && !ctx_r2.showKnownProperties);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.schema || ctx_r2.schema.patternProperties || ctx_r2.schema.additionalProperties !== false);
} }
function ObjectNodeFlatComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r54 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-property-config", 44);
    ɵngcc0.ɵɵlistener("updateSchema", function ObjectNodeFlatComponent_ng_template_5_Template_ngx_property_config_updateSchema_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r54); const ctx_r53 = ɵngcc0.ɵɵnextContext(); return ctx_r53.updateSchema($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const context_r52 = ctx.context;
    ɵngcc0.ɵɵproperty("property", context_r52.property)("index", context_r52.index)("schema", context_r52.schema)("formats", context_r52.formats);
} }
export class ObjectNodeFlatComponent extends ObjectNode {
    constructor(dialogService, cdr) {
        super(cdr);
        this.dialogService = dialogService;
        this.cdr = cdr;
        this.formats = [];
        this.hideRoot = false;
        this.isDuplicated = false;
        this.indentationArray = [];
        this.duplicatedFields = new Map();
        this.objectKeys = Object.keys;
    }
    ngOnInit() {
        if (this.schemaBuilderMode) {
            this.dataTypes = [...jsonSchemaDataTypes, ...this.formats];
        }
        setTimeout(() => {
            this.initSchemaProperties(this.schema);
            this.initSchemaProperties(this.schemaRef);
        });
        this.indentationArray = this.level > 0 ? Array(this.level).fill(this.level) : [];
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if ('level' in changes) {
            this.indentationArray = this.level > 0 ? Array(this.level).fill(this.level) : [];
        }
    }
    onUpdatePropertyName(options) {
        const existingSchemaProperty = this.schemaRef.properties[options.name];
        const existingPropertyValue = this.model[options.name];
        const oldName = this.propertyIndex[options.id].propertyName;
        this.duplicatedFields.delete(options.id);
        if (!existingSchemaProperty && existingPropertyValue === undefined) {
            const index = Object.keys(this.schemaRef.properties).findIndex(prop => prop === oldName);
            this.updateSchemaPropertyName(this.schemaRef, options.name, this.propertyIndex[options.id].propertyName);
            this.swapSchemaProperties(index);
            this.updatePropertyName(options.id, options.name);
            this.schemaUpdate.emit();
        }
        else if (oldName !== options.name) {
            this.duplicatedFields.set(options.id, options.name);
        }
    }
    onPropertyConfig(property, index) {
        this.dialogService.create({
            template: this.propertyConfigTmpl,
            context: {
                property,
                index,
                schema: this.schema,
                formats: this.formats
            },
            class: 'property-config-dialog'
        });
    }
    updateSchema(options) {
        const oldProperty = options.oldProperty;
        const newProperty = options.newProperty;
        const oldName = oldProperty.propertyName;
        const newName = newProperty.propertyName;
        if (newName !== oldName) {
            if (oldName in this.schema.properties) {
                this.updateSchemaPropertyName(this.schema, newName, oldName);
            }
            this.updateSchemaPropertyName(this.schemaRef, newName, oldName);
            this.updatePropertyName(options.newProperty.id, newName);
        }
        this.toggleRequiredValue(options.required, newName);
        this.schema.properties[newName] = newProperty;
        this.propertyIndex[options.newProperty.id] = newProperty;
        this.updateSchemaRefProperty(newProperty);
        if (newName !== oldName) {
            this.swapSchemaProperties(options.index);
        }
        if (oldProperty.type !== newProperty.type) {
            const value = createValueForSchema(newProperty);
            this.model[newProperty.propertyName] = value;
        }
        this.propertyIndex = Object.assign({}, this.propertyIndex);
        this.schemaUpdate.emit();
    }
    addProperty(dataType) {
        super.addProperty(dataType);
        this.updateSchemaRefProperty(this.propertyIndex[this.propertyId - 1]);
        this.schemaUpdate.emit();
    }
    deleteProperty(propName) {
        if (this.schemaBuilderMode) {
            delete this.schema.properties[propName];
            delete this.schemaRef.properties[propName];
            this.toggleRequiredValue(false, propName);
        }
        else if (!this.schema.required.includes(propName) && !(propName in this.schema.properties)) {
            delete this.schemaRef.properties[propName];
        }
        this.schemaUpdate.emit();
        super.deleteProperty(propName);
    }
    drop(event) {
        const propertyIndexValues = Object.values(this.propertyIndex);
        moveItemInArray(propertyIndexValues, event.previousIndex, event.currentIndex);
        let index = 0;
        for (const prop in this.propertyIndex) {
            this.propertyIndex[prop] = propertyIndexValues[index];
            this.propertyIndex[prop].id = parseInt(prop, 10);
            index += 1;
        }
        this.propertyIndex = Object.assign({}, this.propertyIndex);
        this.swapSchemaProperties(event.currentIndex, event.previousIndex);
    }
    swapSchemaProperties(currentIndex, previousIndex) {
        const propertiesIds = Object.keys(this.schemaRef.properties);
        if (previousIndex === undefined) {
            previousIndex = propertiesIds.length - 1;
        }
        moveItemInArray(propertiesIds, previousIndex, currentIndex);
        this.schemaRef.properties = propertiesIds.reduce((result, prop) => {
            result[prop] = this.schemaRef.properties[prop];
            return result;
        }, {});
        this.schemaUpdate.emit();
    }
    initSchemaProperties(schema) {
        if (schema) {
            schema.required = schema.required || [];
            schema.properties = schema.properties || {};
        }
    }
    updateSchemaRefProperty(prop) {
        this.schemaRef.properties[prop.propertyName] = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ type: prop.type }, (prop.format && { format: prop.format })), (prop.examples && { examples: prop.examples })), (prop.title && { title: prop.title })), (prop.items && { items: prop.items })), (prop.required && { required: prop.required })), (prop.properties && { properties: prop.properties })), (prop.enum && { enum: prop.enum })), (prop.default && { default: prop.default })), (prop.description && { description: prop.description })), (prop.nameEditable && { nameEditable: prop.nameEditable })), (prop.minimum && { minimum: prop.minimum })), (prop.maximum && { maximum: prop.maximum })), (prop.minLength && { minLength: prop.minLength })), (prop.maxLength && { maxLength: prop.maxLength })), (prop.minItems && { minItems: prop.minItems })), (prop.maxItems && { maxItems: prop.maxItems })), (prop.pattern && { pattern: prop.pattern }));
    }
    updateSchemaPropertyName(schema, newName, oldName) {
        this.updateRequiredProperties(schema, newName, oldName);
        schema.properties[newName] = schema.properties[oldName];
        delete schema.properties[oldName];
    }
    toggleRequiredValue(required, propertyName) {
        const requiredIndex = this.schema.required.indexOf(propertyName);
        if (requiredIndex >= 0 && !required) {
            this.schema.required.splice(requiredIndex, 1);
        }
        else if (requiredIndex < 0 && required) {
            this.schema.required.push(propertyName);
        }
        this.schemaRef.required = [...this.schema.required];
        this.updateRequiredCache();
    }
    updateRequiredProperties(schema, newName, oldName) {
        const requiredIndex = schema.required.indexOf(oldName);
        if (requiredIndex >= 0) {
            schema.required[requiredIndex] = newName;
        }
    }
}
ObjectNodeFlatComponent.ɵfac = function ObjectNodeFlatComponent_Factory(t) { return new (t || ObjectNodeFlatComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DialogService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
ObjectNodeFlatComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: ObjectNodeFlatComponent, selectors: [["ngx-json-object-node-flat"]], viewQuery: function ObjectNodeFlatComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.propertyConfigTmpl = _t.first);
    } }, inputs: { formats: "formats", hideRoot: "hideRoot", isDuplicated: "isDuplicated", level: "level", schemaBuilderMode: "schemaBuilderMode", compressed: "compressed" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], decls: 7, vars: 8, consts: [["cdkDropList", "", 1, "object-node-flat", 3, "hidden", "cdkDropListDisabled", "cdkDropListDropped"], ["cdkDrag", "", "cdkDragLockAxis", "y", "class", "object-node-content", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["class", "add-button", 3, "compressed", "background", 4, "ngIf"], ["propertyConfigTmpl", ""], ["cdkDrag", "", "cdkDragLockAxis", "y", 1, "object-node-content"], [3, "model", "schema", "schemaRef", "required", "inline", "path", "errors", "hideRoot", "typeCheckOverrides", "level", "schemaBuilderMode", "formats", "compressed", "indentationArray", "showKnownProperties", "isDuplicated", "modelChange", "schemaUpdate", "updatePropertyNameEvent"], ["node-options", "", 1, "node-options"], ["type", "button", "class", "node-options-btn", 3, "click", 4, "ngIf"], [3, "showCaret"], ["type", "button", 1, "node-options-btn"], [1, "ngx-icon", "ngx-dots-vert-round"], [1, "ngx-dropdown-dark-outline", "align-right"], [1, "vertical-list"], ["type", "button", 3, "disabled", "click"], ["class", "drag-drop-handle", "cdkDragHandle", "", 4, "ngIf"], ["class", "indentation-placeholder", 3, "ngStyle", 4, "cdkDragPlaceholder"], ["type", "button", 1, "node-options-btn", 3, "click"], [1, "ngx-icon", "ngx-cog"], [4, "ngFor", "ngForOf"], ["cdkDragHandle", "", 1, "drag-drop-handle"], [1, "ngx-icon", "ngx-handle"], [1, "indentation-placeholder", 3, "ngStyle"], ["class", "node-container add-button add-prop-button", 3, "compressed", 4, "ngIf"], [1, "node-container", "add-button", "add-prop-button"], ["class", "json-editor--vertical-separator", 4, "ngFor", "ngForOf"], [1, "node", 3, "click"], [1, "left-options"], [1, "node-content"], [1, "node-info"], [3, "nameEditable", "propertyName", "title", "type", "description", "examples", "compressed"], [1, "indented-content"], ["type", "button"], [1, "ngx-icon", "ngx-tree-expand"], [1, "json-editor--vertical-separator"], [1, "add-button"], [3, "disabled"], [1, "ngx-dropdown-dark-outline"], ["class", "vertical-list dropdown-column", 4, "ngIf"], [1, "vertical-list", "dropdown-column"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["type", "button", 3, "disabled"], [3, "ngIf"], [3, "property", "index", "schema", "formats", "updateSchema"]], template: function ObjectNodeFlatComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("cdkDropListDropped", function ObjectNodeFlatComponent_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        ɵngcc0.ɵɵtemplate(1, ObjectNodeFlatComponent_div_1_Template, 16, 22, "div", 1);
        ɵngcc0.ɵɵpipe(2, "objectValues");
        ɵngcc0.ɵɵtemplate(3, ObjectNodeFlatComponent_ng_container_3_Template, 3, 3, "ng-container", 2);
        ɵngcc0.ɵɵtemplate(4, ObjectNodeFlatComponent_div_4_Template, 12, 12, "div", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, ObjectNodeFlatComponent_ng_template_5_Template, 1, 4, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("hidden", !ctx.expanded)("cdkDropListDisabled", !ctx.schemaBuilderMode);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind1(2, 6, ctx.propertyIndex))("ngForTrackBy", ctx.trackBy);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showKnownProperties);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.showKnownProperties || ctx.schema.additionalProperties !== false);
    } }, styles: [".object-node-flat .object-node-content{display:flex;margin-bottom:5px;position:relative}.object-node-flat .object-node-content:last-child{margin-bottom:0}.object-node-flat .object-node-content ngx-json-editor-node-flat{flex:1}.object-node-flat .add-button{height:100px;position:relative;display:flex}.object-node-flat .add-button ngx-dropdown{padding-bottom:0}.object-node-flat .compressed.add-button{max-height:80px}.object-node-flat .background.add-button{background-color:rgba(49,56,71,.4);padding:7px 7px 7px 0;height:120px}.object-node-flat .add-button .indented-content{border:2px dotted rgba(59,68,87,.5);width:100%;display:flex;justify-content:center;align-items:center;color:#909cb4}.object-node-flat .add-button .indented-content button{display:flex}.object-node-flat .add-button .indented-content button i{font-size:18px}.object-node-flat .add-button .indented-content button span{font-size:14px;margin-left:10px}.object-node-flat .add-button .indented-content .ngx-dropdown-menu{white-space:nowrap;margin-top:10px}.object-node-flat .add-button .indented-content .ngx-dropdown-menu .dropdown-column{vertical-align:top;display:inline-block;min-width:150px}.object-node-flat .add-button .indented-content .ngx-dropdown-menu .dropdown-column:nth-child(2){border-left:1px solid #505c75}.indentation-placeholder{border-radius:2px 0 0 2px;display:flex;align-items:center;background-color:rgba(49,56,71,.4)}.json-editor--vertical-separator{background-color:#3b4457;opacity:.5;border-radius:2px;width:1px;height:calc(100% - 4px);margin-right:20px}.json-editor--vertical-separator:first-child{margin-left:20px}.object-node-flat{margin-top:5px}.object-node-flat .add-prop-button{background-color:rgba(49,56,71,.4);margin-bottom:5px;height:120px}.object-node-flat .add-prop-button:last-child{margin-bottom:0}.object-node-flat .add-prop-button .node{margin-bottom:0;justify-content:unset!important;background-color:rgba(49,56,71,.5);opacity:.2;cursor:pointer;outline:2px dotted rgba(59,68,87,.5);outline-offset:-2px}.object-node-flat .add-prop-button .node:hover{opacity:.6}.object-node-flat .add-prop-button .node .indented-content{border:unset;justify-content:start}.object-node-flat .add-prop-button .node-input{padding-top:0!important}.cdk-drag-preview .indentation{opacity:.5}.cdk-drag-preview .add-button{display:none}.cdk-drag-animating,.indentation-placeholder,.object-node-flat.cdk-drop-list-dragging .object-node-content:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.indentation-placeholder{position:relative;height:117px;margin-bottom:5px}"], encapsulation: 2, changeDetection: 0 });
ObjectNodeFlatComponent.ctorParameters = () => [
    { type: DialogService },
    { type: ChangeDetectorRef }
];
ObjectNodeFlatComponent.propDecorators = {
    propertyConfigTmpl: [{ type: ViewChild, args: ['propertyConfigTmpl', { static: false },] }],
    level: [{ type: Input }],
    schemaBuilderMode: [{ type: Input }],
    formats: [{ type: Input }],
    compressed: [{ type: Input }],
    hideRoot: [{ type: Input }],
    isDuplicated: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ObjectNodeFlatComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-json-object-node-flat',
                template: "<div\n  class=\"object-node-flat\"\n  [hidden]=\"!expanded\"\n  cdkDropList\n  [cdkDropListDisabled]=\"!schemaBuilderMode\"\n  (cdkDropListDropped)=\"drop($event)\"\n>\n  <div\n    cdkDrag\n    cdkDragLockAxis=\"y\"\n    class=\"object-node-content\"\n    *ngFor=\"let prop of propertyIndex | objectValues; let index = index; trackBy: trackBy\"\n  >\n    <ngx-json-editor-node-flat\n      [model]=\"model[prop.propertyName]\"\n      (modelChange)=\"updateProp(prop.id, $event)\"\n      [schema]=\"prop\"\n      [schemaRef]=\"schemaRef && schemaRef.properties ? schemaRef.properties[prop.propertyName] : null\"\n      [required]=\"!!requiredCache[prop.propertyName]\"\n      [inline]=\"prop.type !== 'array' && prop.type !== 'object'\"\n      [path]=\"path + getPath(prop.propertyName)\"\n      [errors]=\"errors\"\n      [hideRoot]=\"hideRoot\"\n      [typeCheckOverrides]=\"typeCheckOverrides\"\n      [level]=\"level\"\n      [schemaBuilderMode]=\"schemaBuilderMode\"\n      [formats]=\"formats\"\n      [compressed]=\"compressed\"\n      [indentationArray]=\"indentationArray\"\n      [showKnownProperties]=\"showKnownProperties\"\n      [isDuplicated]=\"duplicatedFields.has(prop.id)\"\n      (schemaUpdate)=\"schemaUpdate.emit(schemaRef)\"\n      (updatePropertyNameEvent)=\"onUpdatePropertyName($event)\"\n    >\n      <div class=\"node-options\" node-options>\n        <button\n          *ngIf=\"schemaBuilderMode\"\n          type=\"button\"\n          class=\"node-options-btn\"\n          (click)=\"onPropertyConfig(prop, index)\"\n        >\n          <i class=\"ngx-icon ngx-cog\"></i>\n        </button>\n        <ngx-dropdown [showCaret]=\"true\">\n          <ngx-dropdown-toggle>\n            <button type=\"button\" class=\"node-options-btn\">\n              <i class=\"ngx-icon ngx-dots-vert-round\"></i>\n            </button>\n          </ngx-dropdown-toggle>\n          <ngx-dropdown-menu class=\"ngx-dropdown-dark-outline align-right\">\n            <ul class=\"vertical-list\">\n              <li>\n                <button\n                  type=\"button\"\n                  (click)=\"deleteProperty(prop.propertyName)\"\n                  [disabled]=\"requiredCache[prop.propertyName] && !schemaBuilderMode\"\n                >\n                  {{ !schema.properties[prop.propertyName] ? 'Delete' : 'Remove' }}\n                </button>\n              </li>\n              <ng-container *ngIf=\"prop?.$meta?.type && !schemaBuilderMode\">\n                <li *ngFor=\"let type of prop?.$meta?.type\">\n                  <button\n                    type=\"button\"\n                    (click)=\"changePropertyType(prop, type)\"\n                    [disabled]=\"prop.$meta.currentType === type\"\n                  >\n                    Change type to {{ dataTypeMap[type].name }}\n                  </button>\n                </li>\n              </ng-container>\n            </ul>\n          </ngx-dropdown-menu>\n        </ngx-dropdown>\n      </div>\n      <div *ngIf=\"schemaBuilderMode\" class=\"drag-drop-handle\" cdkDragHandle>\n        <i class=\"ngx-icon ngx-handle\"></i>\n      </div>\n    </ngx-json-editor-node-flat>\n    <div\n      *cdkDragPlaceholder\n      class=\"indentation-placeholder\"\n      [ngStyle]=\"{ width: 'calc(100% + ' + level * 20 + 'px)' }\"\n    ></div>\n  </div>\n\n  <ng-container *ngIf=\"showKnownProperties\">\n    <ng-container *ngFor=\"let prop of schema.properties | keyvalue\">\n      <div\n        class=\"node-container add-button add-prop-button\"\n        [class.compressed]=\"compressed\"\n        *ngIf=\"model[prop.key] === undefined\"\n      >\n        <span class=\"json-editor--vertical-separator\" *ngFor=\"let separator of indentationArray\"></span>\n\n        <div\n          class=\"node\"\n          [class.compressed]=\"compressed\"\n          [style.marginLeft]=\"level === 0 ? '20px' : '0'\"\n          (click)=\"addSchemaProperty(prop.key)\"\n        >\n          <div class=\"left-options\"></div>\n\n          <div class=\"node-content\">\n            <div class=\"node-info\">\n              <ngx-json-editor-node-info\n                [nameEditable]=\"false\"\n                [propertyName]=\"prop.key\"\n                [title]=\"prop.value.title ? prop.value.title : prop.key\"\n                [type]=\"(prop.value.format || prop.value.type | titlecase) + (prop.value.enum?.length ? ' + Enum' : '')\"\n                [description]=\"prop.value?.description\"\n                [examples]=\"prop.value.examples\"\n                [compressed]=\"compressed\"\n              >\n              </ngx-json-editor-node-info>\n            </div>\n\n            <div class=\"indented-content\">\n              <button type=\"button\">\n                <i class=\"ngx-icon ngx-tree-expand\"></i>\n                <span>Include</span>\n              </button>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </ng-container>\n\n  <div\n    class=\"add-button\"\n    [class.compressed]=\"compressed\"\n    [class.background]=\"hideRoot ? level > -1 : level\"\n    *ngIf=\"!showKnownProperties || schema.additionalProperties !== false\"\n  >\n    <span class=\"json-editor--vertical-separator\" *ngFor=\"let separator of indentationArray\"></span>\n    <div class=\"indented-content\" [style.marginLeft]=\"hideRoot && level === 0 ? '20px' : '0'\">\n      <ngx-dropdown [showCaret]=\"true\">\n        <ngx-dropdown-toggle [disabled]=\"isDuplicated\">\n          <button type=\"button\">\n            <i class=\"ngx-icon ngx-tree-expand\"></i>\n            <span>Add {{ objectKeys(propertyIndex).length ? 'a' : 'your first' }} property</span>\n          </button>\n        </ngx-dropdown-toggle>\n        <ngx-dropdown-menu class=\"ngx-dropdown-dark-outline\">\n          <ul\n            class=\"vertical-list dropdown-column\"\n            *ngIf=\"schema.properties && !schemaBuilderMode && !showKnownProperties\"\n          >\n            <li *ngFor=\"let prop of schema.properties | keyvalue\" (click)=\"addSchemaProperty(prop.key)\">\n              <button [disabled]=\"model[prop.key] !== undefined\" type=\"button\">\n                {{ prop.value.title ? prop.value.title : prop.key }}\n              </button>\n            </li>\n          </ul>\n          <ul\n            class=\"vertical-list dropdown-column\"\n            *ngIf=\"!schema || schema.patternProperties || schema.additionalProperties !== false\"\n          >\n            <li *ngFor=\"let prop of schema.patternProperties | keyvalue\" (click)=\"addSchemaPatternProperty(prop.key)\">\n              <button type=\"button\">{{ prop.value.title ? prop.value.title : prop.key }}</button>\n            </li>\n            <ng-template [ngIf]=\"!schema || schema.additionalProperties !== false\">\n              <li *ngFor=\"let dataType of dataTypes\" (click)=\"addProperty(dataType)\">\n                <button type=\"button\">{{ dataType.name }}</button>\n              </li>\n            </ng-template>\n          </ul>\n        </ngx-dropdown-menu>\n      </ngx-dropdown>\n    </div>\n  </div>\n</div>\n\n<!-- Property Config Dialog -->\n<ng-template #propertyConfigTmpl let-context=\"context\">\n  <ngx-property-config\n    [property]=\"context.property\"\n    [index]=\"context.index\"\n    [schema]=\"context.schema\"\n    [formats]=\"context.formats\"\n    (updateSchema)=\"updateSchema($event)\"\n  >\n  </ngx-property-config>\n</ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".object-node-flat .object-node-content{display:flex;margin-bottom:5px;position:relative}.object-node-flat .object-node-content:last-child{margin-bottom:0}.object-node-flat .object-node-content ngx-json-editor-node-flat{flex:1}.object-node-flat .add-button{height:100px;position:relative;display:flex}.object-node-flat .add-button ngx-dropdown{padding-bottom:0}.object-node-flat .compressed.add-button{max-height:80px}.object-node-flat .background.add-button{background-color:rgba(49,56,71,.4);padding:7px 7px 7px 0;height:120px}.object-node-flat .add-button .indented-content{border:2px dotted rgba(59,68,87,.5);width:100%;display:flex;justify-content:center;align-items:center;color:#909cb4}.object-node-flat .add-button .indented-content button{display:flex}.object-node-flat .add-button .indented-content button i{font-size:18px}.object-node-flat .add-button .indented-content button span{font-size:14px;margin-left:10px}.object-node-flat .add-button .indented-content .ngx-dropdown-menu{white-space:nowrap;margin-top:10px}.object-node-flat .add-button .indented-content .ngx-dropdown-menu .dropdown-column{vertical-align:top;display:inline-block;min-width:150px}.object-node-flat .add-button .indented-content .ngx-dropdown-menu .dropdown-column:nth-child(2){border-left:1px solid #505c75}.indentation-placeholder{border-radius:2px 0 0 2px;display:flex;align-items:center;background-color:rgba(49,56,71,.4)}.json-editor--vertical-separator{background-color:#3b4457;opacity:.5;border-radius:2px;width:1px;height:calc(100% - 4px);margin-right:20px}.json-editor--vertical-separator:first-child{margin-left:20px}.object-node-flat{margin-top:5px}.object-node-flat .add-prop-button{background-color:rgba(49,56,71,.4);margin-bottom:5px;height:120px}.object-node-flat .add-prop-button:last-child{margin-bottom:0}.object-node-flat .add-prop-button .node{margin-bottom:0;justify-content:unset!important;background-color:rgba(49,56,71,.5);opacity:.2;cursor:pointer;outline:2px dotted rgba(59,68,87,.5);outline-offset:-2px}.object-node-flat .add-prop-button .node:hover{opacity:.6}.object-node-flat .add-prop-button .node .indented-content{border:unset;justify-content:start}.object-node-flat .add-prop-button .node-input{padding-top:0!important}.cdk-drag-preview .indentation{opacity:.5}.cdk-drag-preview .add-button{display:none}.cdk-drag-animating,.indentation-placeholder,.object-node-flat.cdk-drop-list-dragging .object-node-content:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.indentation-placeholder{position:relative;height:117px;margin-bottom:5px}"]
            }]
    }], function () { return [{ type: ɵngcc1.DialogService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { formats: [{
            type: Input
        }], hideRoot: [{
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
        }], compressed: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LW5vZGUtZmxhdC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvanNvbi1lZGl0b3IvanNvbi1lZGl0b3ItZmxhdC9qc29uLWVkaXRvci1ub2RlLWZsYXQvbm9kZS10eXBlcy9vYmplY3Qtbm9kZS1mbGF0L29iamVjdC1ub2RlLWZsYXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUVYLHVCQUF1QixFQUN2QixpQkFBaUIsRUFHbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEVBRUwsbUJBQW1CLEVBRW5CLG9CQUFvQixFQUNyQixNQUFNLGdDQUFnQyxDQUFDO0FBQ3hDLE9BQU8sRUFBZSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVV0RSxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsVUFBVTtBQUFHLElBcUJ4RCxZQUFvQixh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USxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUM5QyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQ3BELENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FDbEMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUMzQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQ3ZELENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsR0FDMUQsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUMzQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQzNDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsR0FDakQsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUNqRCxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQzlDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsR0FDOUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUMvQyxDQUFDO0FBQ04sSUFBRSxDQUFDO0FBQ0gsSUFDVSx3QkFBd0IsQ0FBQyxNQUF3QixFQUFFLE9BQWUsRUFBRSxPQUFlO0FBQUksUUFDN0YsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDNUQsUUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDNUQsUUFBSSxPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdEMsSUFBRSxDQUFDO0FBQ0gsSUFDVSxtQkFBbUIsQ0FBQyxRQUFpQixFQUFFLFlBQW9CO0FBQUksUUFDckUsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3JFLFFBQUksSUFBSSxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ3pDLFlBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwRCxTQUFLO0FBQUMsYUFBSyxJQUFJLGFBQWEsR0FBRyxDQUFDLElBQUksUUFBUSxFQUFFO0FBQzlDLFlBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzlDLFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3hELFFBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7QUFDL0IsSUFBRSxDQUFDO0FBQ0gsSUFDVSx3QkFBd0IsQ0FBQyxNQUF3QixFQUFFLE9BQWUsRUFBRSxPQUFlO0FBQUksUUFDN0YsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0QsUUFBSSxJQUFJLGFBQWEsSUFBSSxDQUFDLEVBQUU7QUFDNUIsWUFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLE9BQU8sQ0FBQztBQUMvQyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7bURBbE9DLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsMkJBQTJCLGtCQUNyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bWxGQUtHO0FBQUM7QUFBaUQsWUFqQjlDLGFBQWE7QUFBSSxZQUx4QixpQkFBaUI7QUFDbEI7QUFBRztBQUVjLGlDQW9CZixTQUFTLFNBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQU8sb0JBRXhELEtBQUs7QUFBSyxnQ0FFVixLQUFLO0FBQUssc0JBRVYsS0FBSztBQUFLLHlCQUVWLEtBQUs7QUFBSyx1QkFFVixLQUFLO0FBQUssMkJBRVYsS0FBSztBQUFJOztrQkFsQnNDO1dBRWhEO09BQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQztTQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxna0ZBQ2hEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFjYTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uSW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYmplY3ROb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbm9kZS10eXBlcy9vYmplY3Qtbm9kZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2RpYWxvZy9kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQge1xuICBKc29uU2NoZW1hRGF0YVR5cGUsXG4gIGpzb25TY2hlbWFEYXRhVHlwZXMsXG4gIEpTT05FZGl0b3JTY2hlbWEsXG4gIGNyZWF0ZVZhbHVlRm9yU2NoZW1hXG59IGZyb20gJy4uLy4uLy4uLy4uL2pzb24tZWRpdG9yLmhlbHBlcic7XG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQgeyBQcm9wZXJ0eUNvbmZpZ09wdGlvbnMsIFByb3BlcnR5Q29uZmlnQ29tcG9uZW50IH0gZnJvbSAnLi4vcHJvcGVydHktY29uZmlnL3Byb3BlcnR5LWNvbmZpZy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtanNvbi1vYmplY3Qtbm9kZS1mbGF0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL29iamVjdC1ub2RlLWZsYXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vYmplY3Qtbm9kZS1mbGF0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE9iamVjdE5vZGVGbGF0Q29tcG9uZW50IGV4dGVuZHMgT2JqZWN0Tm9kZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgncHJvcGVydHlDb25maWdUbXBsJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByb3BlcnR5Q29uZmlnVG1wbDogVGVtcGxhdGVSZWY8UHJvcGVydHlDb25maWdDb21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpIGxldmVsOiBudW1iZXI7XG5cbiAgQElucHV0KCkgc2NoZW1hQnVpbGRlck1vZGU6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgZm9ybWF0czogSnNvblNjaGVtYURhdGFUeXBlW10gPSBbXTtcblxuICBASW5wdXQoKSBjb21wcmVzc2VkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGhpZGVSb290ID0gZmFsc2U7XG5cbiAgQElucHV0KCkgaXNEdXBsaWNhdGVkID0gZmFsc2U7XG5cbiAgaW5kZW50YXRpb25BcnJheTogbnVtYmVyW10gPSBbXTtcblxuICBkdXBsaWNhdGVkRmllbGRzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuICBvYmplY3RLZXlzID0gT2JqZWN0LmtleXM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlLCBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGNkcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5zY2hlbWFCdWlsZGVyTW9kZSkge1xuICAgICAgdGhpcy5kYXRhVHlwZXMgPSBbLi4uanNvblNjaGVtYURhdGFUeXBlcywgLi4udGhpcy5mb3JtYXRzXTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaW5pdFNjaGVtYVByb3BlcnRpZXModGhpcy5zY2hlbWEpO1xuICAgICAgdGhpcy5pbml0U2NoZW1hUHJvcGVydGllcyh0aGlzLnNjaGVtYVJlZik7XG4gICAgfSk7XG5cbiAgICB0aGlzLmluZGVudGF0aW9uQXJyYXkgPSB0aGlzLmxldmVsID4gMCA/IEFycmF5KHRoaXMubGV2ZWwpLmZpbGwodGhpcy5sZXZlbCkgOiBbXTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcbiAgICBpZiAoJ2xldmVsJyBpbiBjaGFuZ2VzKSB7XG4gICAgICB0aGlzLmluZGVudGF0aW9uQXJyYXkgPSB0aGlzLmxldmVsID4gMCA/IEFycmF5KHRoaXMubGV2ZWwpLmZpbGwodGhpcy5sZXZlbCkgOiBbXTtcbiAgICB9XG4gIH1cblxuICBvblVwZGF0ZVByb3BlcnR5TmFtZShvcHRpb25zOiB7IGlkOiBzdHJpbmc7IG5hbWU6IHN0cmluZyB9KTogdm9pZCB7XG4gICAgY29uc3QgZXhpc3RpbmdTY2hlbWFQcm9wZXJ0eSA9IHRoaXMuc2NoZW1hUmVmLnByb3BlcnRpZXNbb3B0aW9ucy5uYW1lXTtcbiAgICBjb25zdCBleGlzdGluZ1Byb3BlcnR5VmFsdWUgPSB0aGlzLm1vZGVsW29wdGlvbnMubmFtZV07XG4gICAgY29uc3Qgb2xkTmFtZSA9IHRoaXMucHJvcGVydHlJbmRleFtvcHRpb25zLmlkXS5wcm9wZXJ0eU5hbWU7XG5cbiAgICB0aGlzLmR1cGxpY2F0ZWRGaWVsZHMuZGVsZXRlKG9wdGlvbnMuaWQpO1xuXG4gICAgaWYgKCFleGlzdGluZ1NjaGVtYVByb3BlcnR5ICYmIGV4aXN0aW5nUHJvcGVydHlWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbmRleCA9IE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hUmVmLnByb3BlcnRpZXMpLmZpbmRJbmRleChwcm9wID0+IHByb3AgPT09IG9sZE5hbWUpO1xuICAgICAgdGhpcy51cGRhdGVTY2hlbWFQcm9wZXJ0eU5hbWUodGhpcy5zY2hlbWFSZWYsIG9wdGlvbnMubmFtZSwgdGhpcy5wcm9wZXJ0eUluZGV4W29wdGlvbnMuaWRdLnByb3BlcnR5TmFtZSk7XG4gICAgICB0aGlzLnN3YXBTY2hlbWFQcm9wZXJ0aWVzKGluZGV4KTtcbiAgICAgIHRoaXMudXBkYXRlUHJvcGVydHlOYW1lKG9wdGlvbnMuaWQsIG9wdGlvbnMubmFtZSk7XG4gICAgICB0aGlzLnNjaGVtYVVwZGF0ZS5lbWl0KCk7XG4gICAgfSBlbHNlIGlmIChvbGROYW1lICE9PSBvcHRpb25zLm5hbWUpIHtcbiAgICAgIHRoaXMuZHVwbGljYXRlZEZpZWxkcy5zZXQob3B0aW9ucy5pZCwgb3B0aW9ucy5uYW1lKTtcbiAgICB9XG4gIH1cblxuICBvblByb3BlcnR5Q29uZmlnKHByb3BlcnR5OiBKU09ORWRpdG9yU2NoZW1hLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dTZXJ2aWNlLmNyZWF0ZSh7XG4gICAgICB0ZW1wbGF0ZTogdGhpcy5wcm9wZXJ0eUNvbmZpZ1RtcGwsXG4gICAgICBjb250ZXh0OiB7XG4gICAgICAgIHByb3BlcnR5LFxuICAgICAgICBpbmRleCxcbiAgICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYSxcbiAgICAgICAgZm9ybWF0czogdGhpcy5mb3JtYXRzXG4gICAgICB9LFxuICAgICAgY2xhc3M6ICdwcm9wZXJ0eS1jb25maWctZGlhbG9nJ1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlU2NoZW1hKG9wdGlvbnM6IFByb3BlcnR5Q29uZmlnT3B0aW9ucyk6IHZvaWQge1xuICAgIGNvbnN0IG9sZFByb3BlcnR5ID0gb3B0aW9ucy5vbGRQcm9wZXJ0eTtcbiAgICBjb25zdCBuZXdQcm9wZXJ0eSA9IG9wdGlvbnMubmV3UHJvcGVydHk7XG5cbiAgICBjb25zdCBvbGROYW1lID0gb2xkUHJvcGVydHkucHJvcGVydHlOYW1lO1xuICAgIGNvbnN0IG5ld05hbWUgPSBuZXdQcm9wZXJ0eS5wcm9wZXJ0eU5hbWU7XG5cbiAgICBpZiAobmV3TmFtZSAhPT0gb2xkTmFtZSkge1xuICAgICAgaWYgKG9sZE5hbWUgaW4gdGhpcy5zY2hlbWEucHJvcGVydGllcykge1xuICAgICAgICB0aGlzLnVwZGF0ZVNjaGVtYVByb3BlcnR5TmFtZSh0aGlzLnNjaGVtYSwgbmV3TmFtZSwgb2xkTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlU2NoZW1hUHJvcGVydHlOYW1lKHRoaXMuc2NoZW1hUmVmLCBuZXdOYW1lLCBvbGROYW1lKTtcbiAgICAgIHRoaXMudXBkYXRlUHJvcGVydHlOYW1lKG9wdGlvbnMubmV3UHJvcGVydHkuaWQsIG5ld05hbWUpO1xuICAgIH1cblxuICAgIHRoaXMudG9nZ2xlUmVxdWlyZWRWYWx1ZShvcHRpb25zLnJlcXVpcmVkLCBuZXdOYW1lKTtcblxuICAgIHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbbmV3TmFtZV0gPSBuZXdQcm9wZXJ0eTtcbiAgICB0aGlzLnByb3BlcnR5SW5kZXhbb3B0aW9ucy5uZXdQcm9wZXJ0eS5pZF0gPSBuZXdQcm9wZXJ0eTtcbiAgICB0aGlzLnVwZGF0ZVNjaGVtYVJlZlByb3BlcnR5KG5ld1Byb3BlcnR5KTtcblxuICAgIGlmIChuZXdOYW1lICE9PSBvbGROYW1lKSB7XG4gICAgICB0aGlzLnN3YXBTY2hlbWFQcm9wZXJ0aWVzKG9wdGlvbnMuaW5kZXgpO1xuICAgIH1cblxuICAgIGlmIChvbGRQcm9wZXJ0eS50eXBlICE9PSBuZXdQcm9wZXJ0eS50eXBlKSB7XG4gICAgICBjb25zdCB2YWx1ZTogYW55ID0gY3JlYXRlVmFsdWVGb3JTY2hlbWEobmV3UHJvcGVydHkpO1xuICAgICAgdGhpcy5tb2RlbFtuZXdQcm9wZXJ0eS5wcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wZXJ0eUluZGV4ID0geyAuLi50aGlzLnByb3BlcnR5SW5kZXggfTtcbiAgICB0aGlzLnNjaGVtYVVwZGF0ZS5lbWl0KCk7XG4gIH1cblxuICBhZGRQcm9wZXJ0eShkYXRhVHlwZTogSnNvblNjaGVtYURhdGFUeXBlKTogdm9pZCB7XG4gICAgc3VwZXIuYWRkUHJvcGVydHkoZGF0YVR5cGUpO1xuXG4gICAgdGhpcy51cGRhdGVTY2hlbWFSZWZQcm9wZXJ0eSh0aGlzLnByb3BlcnR5SW5kZXhbdGhpcy5wcm9wZXJ0eUlkIC0gMV0pO1xuICAgIHRoaXMuc2NoZW1hVXBkYXRlLmVtaXQoKTtcbiAgfVxuXG4gIGRlbGV0ZVByb3BlcnR5KHByb3BOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zY2hlbWFCdWlsZGVyTW9kZSkge1xuICAgICAgZGVsZXRlIHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcHJvcE5hbWVdO1xuICAgICAgZGVsZXRlIHRoaXMuc2NoZW1hUmVmLnByb3BlcnRpZXNbcHJvcE5hbWVdO1xuICAgICAgdGhpcy50b2dnbGVSZXF1aXJlZFZhbHVlKGZhbHNlLCBwcm9wTmFtZSk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5zY2hlbWEucmVxdWlyZWQuaW5jbHVkZXMocHJvcE5hbWUpICYmICEocHJvcE5hbWUgaW4gdGhpcy5zY2hlbWEucHJvcGVydGllcykpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLnNjaGVtYVJlZi5wcm9wZXJ0aWVzW3Byb3BOYW1lXTtcbiAgICB9XG5cbiAgICB0aGlzLnNjaGVtYVVwZGF0ZS5lbWl0KCk7XG4gICAgc3VwZXIuZGVsZXRlUHJvcGVydHkocHJvcE5hbWUpO1xuICB9XG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KTogdm9pZCB7XG4gICAgY29uc3QgcHJvcGVydHlJbmRleFZhbHVlcyA9IE9iamVjdC52YWx1ZXModGhpcy5wcm9wZXJ0eUluZGV4KTtcblxuICAgIG1vdmVJdGVtSW5BcnJheShwcm9wZXJ0eUluZGV4VmFsdWVzLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuXG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gdGhpcy5wcm9wZXJ0eUluZGV4KSB7XG4gICAgICB0aGlzLnByb3BlcnR5SW5kZXhbcHJvcF0gPSBwcm9wZXJ0eUluZGV4VmFsdWVzW2luZGV4XTtcbiAgICAgIHRoaXMucHJvcGVydHlJbmRleFtwcm9wXS5pZCA9IHBhcnNlSW50KHByb3AsIDEwKTtcbiAgICAgIGluZGV4ICs9IDE7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wZXJ0eUluZGV4ID0geyAuLi50aGlzLnByb3BlcnR5SW5kZXggfTtcblxuICAgIHRoaXMuc3dhcFNjaGVtYVByb3BlcnRpZXMoZXZlbnQuY3VycmVudEluZGV4LCBldmVudC5wcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIHByaXZhdGUgc3dhcFNjaGVtYVByb3BlcnRpZXMoY3VycmVudEluZGV4OiBudW1iZXIsIHByZXZpb3VzSW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzSWRzID0gT2JqZWN0LmtleXModGhpcy5zY2hlbWFSZWYucHJvcGVydGllcyk7XG5cbiAgICBpZiAocHJldmlvdXNJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcmV2aW91c0luZGV4ID0gcHJvcGVydGllc0lkcy5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIG1vdmVJdGVtSW5BcnJheShwcm9wZXJ0aWVzSWRzLCBwcmV2aW91c0luZGV4LCBjdXJyZW50SW5kZXgpO1xuXG4gICAgdGhpcy5zY2hlbWFSZWYucHJvcGVydGllcyA9IHByb3BlcnRpZXNJZHMucmVkdWNlKChyZXN1bHQsIHByb3ApID0+IHtcbiAgICAgIHJlc3VsdFtwcm9wXSA9IHRoaXMuc2NoZW1hUmVmLnByb3BlcnRpZXNbcHJvcF07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHt9KTtcblxuICAgIHRoaXMuc2NoZW1hVXBkYXRlLmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFNjaGVtYVByb3BlcnRpZXMoc2NoZW1hOiBKU09ORWRpdG9yU2NoZW1hKTogdm9pZCB7XG4gICAgaWYgKHNjaGVtYSkge1xuICAgICAgc2NoZW1hLnJlcXVpcmVkID0gc2NoZW1hLnJlcXVpcmVkIHx8IFtdO1xuICAgICAgc2NoZW1hLnByb3BlcnRpZXMgPSBzY2hlbWEucHJvcGVydGllcyB8fCB7fTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVNjaGVtYVJlZlByb3BlcnR5KHByb3A6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuc2NoZW1hUmVmLnByb3BlcnRpZXNbcHJvcC5wcm9wZXJ0eU5hbWVdID0ge1xuICAgICAgdHlwZTogcHJvcC50eXBlLFxuICAgICAgLi4uKHByb3AuZm9ybWF0ICYmIHsgZm9ybWF0OiBwcm9wLmZvcm1hdCB9KSxcbiAgICAgIC4uLihwcm9wLmV4YW1wbGVzICYmIHsgZXhhbXBsZXM6IHByb3AuZXhhbXBsZXMgfSksXG4gICAgICAuLi4ocHJvcC50aXRsZSAmJiB7IHRpdGxlOiBwcm9wLnRpdGxlIH0pLFxuICAgICAgLi4uKHByb3AuaXRlbXMgJiYgeyBpdGVtczogcHJvcC5pdGVtcyB9KSxcbiAgICAgIC4uLihwcm9wLnJlcXVpcmVkICYmIHsgcmVxdWlyZWQ6IHByb3AucmVxdWlyZWQgfSksXG4gICAgICAuLi4ocHJvcC5wcm9wZXJ0aWVzICYmIHsgcHJvcGVydGllczogcHJvcC5wcm9wZXJ0aWVzIH0pLFxuICAgICAgLi4uKHByb3AuZW51bSAmJiB7IGVudW06IHByb3AuZW51bSB9KSxcbiAgICAgIC4uLihwcm9wLmRlZmF1bHQgJiYgeyBkZWZhdWx0OiBwcm9wLmRlZmF1bHQgfSksXG4gICAgICAuLi4ocHJvcC5kZXNjcmlwdGlvbiAmJiB7IGRlc2NyaXB0aW9uOiBwcm9wLmRlc2NyaXB0aW9uIH0pLFxuICAgICAgLi4uKHByb3AubmFtZUVkaXRhYmxlICYmIHsgbmFtZUVkaXRhYmxlOiBwcm9wLm5hbWVFZGl0YWJsZSB9KSxcbiAgICAgIC4uLihwcm9wLm1pbmltdW0gJiYgeyBtaW5pbXVtOiBwcm9wLm1pbmltdW0gfSksXG4gICAgICAuLi4ocHJvcC5tYXhpbXVtICYmIHsgbWF4aW11bTogcHJvcC5tYXhpbXVtIH0pLFxuICAgICAgLi4uKHByb3AubWluTGVuZ3RoICYmIHsgbWluTGVuZ3RoOiBwcm9wLm1pbkxlbmd0aCB9KSxcbiAgICAgIC4uLihwcm9wLm1heExlbmd0aCAmJiB7IG1heExlbmd0aDogcHJvcC5tYXhMZW5ndGggfSksXG4gICAgICAuLi4ocHJvcC5taW5JdGVtcyAmJiB7IG1pbkl0ZW1zOiBwcm9wLm1pbkl0ZW1zIH0pLFxuICAgICAgLi4uKHByb3AubWF4SXRlbXMgJiYgeyBtYXhJdGVtczogcHJvcC5tYXhJdGVtcyB9KSxcbiAgICAgIC4uLihwcm9wLnBhdHRlcm4gJiYgeyBwYXR0ZXJuOiBwcm9wLnBhdHRlcm4gfSlcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTY2hlbWFQcm9wZXJ0eU5hbWUoc2NoZW1hOiBKU09ORWRpdG9yU2NoZW1hLCBuZXdOYW1lOiBzdHJpbmcsIG9sZE5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlUmVxdWlyZWRQcm9wZXJ0aWVzKHNjaGVtYSwgbmV3TmFtZSwgb2xkTmFtZSk7XG4gICAgc2NoZW1hLnByb3BlcnRpZXNbbmV3TmFtZV0gPSBzY2hlbWEucHJvcGVydGllc1tvbGROYW1lXTtcbiAgICBkZWxldGUgc2NoZW1hLnByb3BlcnRpZXNbb2xkTmFtZV07XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZVJlcXVpcmVkVmFsdWUocmVxdWlyZWQ6IGJvb2xlYW4sIHByb3BlcnR5TmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcmVxdWlyZWRJbmRleCA9IHRoaXMuc2NoZW1hLnJlcXVpcmVkLmluZGV4T2YocHJvcGVydHlOYW1lKTtcbiAgICBpZiAocmVxdWlyZWRJbmRleCA+PSAwICYmICFyZXF1aXJlZCkge1xuICAgICAgdGhpcy5zY2hlbWEucmVxdWlyZWQuc3BsaWNlKHJlcXVpcmVkSW5kZXgsIDEpO1xuICAgIH0gZWxzZSBpZiAocmVxdWlyZWRJbmRleCA8IDAgJiYgcmVxdWlyZWQpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnJlcXVpcmVkLnB1c2gocHJvcGVydHlOYW1lKTtcbiAgICB9XG5cbiAgICB0aGlzLnNjaGVtYVJlZi5yZXF1aXJlZCA9IFsuLi50aGlzLnNjaGVtYS5yZXF1aXJlZF07XG4gICAgdGhpcy51cGRhdGVSZXF1aXJlZENhY2hlKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVJlcXVpcmVkUHJvcGVydGllcyhzY2hlbWE6IEpTT05FZGl0b3JTY2hlbWEsIG5ld05hbWU6IHN0cmluZywgb2xkTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcmVxdWlyZWRJbmRleCA9IHNjaGVtYS5yZXF1aXJlZC5pbmRleE9mKG9sZE5hbWUpO1xuICAgIGlmIChyZXF1aXJlZEluZGV4ID49IDApIHtcbiAgICAgIHNjaGVtYS5yZXF1aXJlZFtyZXF1aXJlZEluZGV4XSA9IG5ld05hbWU7XG4gICAgfVxuICB9XG59XG4iXX0=