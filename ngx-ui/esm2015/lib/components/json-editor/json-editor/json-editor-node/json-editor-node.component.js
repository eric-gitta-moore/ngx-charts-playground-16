import { Component, ViewEncapsulation, Input, ChangeDetectionStrategy } from '@angular/core';
import { JsonEditorNode } from '../../json-editor-node';
import { DialogService } from '../../../dialog/dialog.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../../dialog/dialog.service';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '../../../icon/icon.component';
import * as ɵngcc4 from '../../../tooltip/tooltip.directive';
import * as ɵngcc5 from './node-types/object-node/object-node.component';
import * as ɵngcc6 from './node-types/array-node/array-node.component';
import * as ɵngcc7 from '@angular/forms';
import * as ɵngcc8 from '../../../toggle/toggle.component';
import * as ɵngcc9 from '../../../select/select.component';
import * as ɵngcc10 from '../../../button/button.component';
import * as ɵngcc11 from '../../../select/select-option.directive';
import * as ɵngcc12 from '../../../code-editor/code-editor.component';

const _c0 = function (a0, a1) { return { "icon-tree-collapse": a0, "icon-tree-expand": a1 }; };
function JsonEditorNodeComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 6);
    ɵngcc0.ɵɵlistener("click", function JsonEditorNodeComponent_span_1_Template_span_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onExpandClick(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("invalid", !ctx_r0.childrenValid || ctx_r0.isDuplicated);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(3, _c0, ctx_r0.expanded, !ctx_r0.expanded));
} }
function JsonEditorNodeComponent_ngx_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ngx-icon", 7);
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r2 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵproperty("tooltipTemplate", _r2);
} }
function JsonEditorNodeComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r9 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(error_r9.message);
} }
function JsonEditorNodeComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, JsonEditorNodeComponent_ng_template_3_div_0_Template, 2, 1, "div", 8);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3.ownErrors);
} }
function JsonEditorNodeComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "ngx-json-object-node", 10);
    ɵngcc0.ɵɵlistener("modelChange", function JsonEditorNodeComponent_div_5_div_1_Template_ngx_json_object_node_modelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.updateModel($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("schema", ctx_r10.schema)("model", ctx_r10.model)("expanded", ctx_r10.expanded)("isDuplicated", ctx_r10.isDuplicated)("path", ctx_r10.path)("errors", ctx_r10.childrenErrors)("typeCheckOverrides", ctx_r10.typeCheckOverrides)("showKnownProperties", ctx_r10.showKnownProperties);
} }
function JsonEditorNodeComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "ngx-json-array-node", 10);
    ɵngcc0.ɵɵlistener("modelChange", function JsonEditorNodeComponent_div_5_div_2_Template_ngx_json_array_node_modelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); const ctx_r17 = ɵngcc0.ɵɵnextContext(2); return ctx_r17.updateModel($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("schema", ctx_r11.schema)("model", ctx_r11.model)("expanded", ctx_r11.expanded)("isDuplicated", ctx_r11.isDuplicated)("path", ctx_r11.path)("errors", ctx_r11.childrenErrors)("typeCheckOverrides", ctx_r11.typeCheckOverrides)("showKnownProperties", ctx_r11.showKnownProperties);
} }
function JsonEditorNodeComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "input", 11);
    ɵngcc0.ɵɵlistener("ngModelChange", function JsonEditorNodeComponent_div_5_div_3_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r19 = ɵngcc0.ɵɵnextContext(2); return ctx_r19.updateModel($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("placeholder", ctx_r12.placeholder)("disabled", ctx_r12.isDuplicated)("ngModel", ctx_r12.model)("required", ctx_r12.required);
} }
function JsonEditorNodeComponent_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "ngx-toggle", 12);
    ɵngcc0.ɵɵlistener("ngModelChange", function JsonEditorNodeComponent_div_5_div_4_Template_ngx_toggle_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r21 = ɵngcc0.ɵɵnextContext(2); return ctx_r21.updateModel($event); });
    ɵngcc0.ɵɵpipe(2, "json");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r13.isDuplicated)("ngModel", ctx_r13.model)("label", ɵngcc0.ɵɵpipeBind1(2, 3, ctx_r13.model));
} }
function JsonEditorNodeComponent_div_5_ng_container_5_div_1_textarea_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "textarea", 16);
    ɵngcc0.ɵɵlistener("ngModelChange", function JsonEditorNodeComponent_div_5_ng_container_5_div_1_textarea_1_Template_textarea_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r33); const ctx_r32 = ɵngcc0.ɵɵnextContext(4); return ctx_r32.updateModel($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r30 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("placeholder", ctx_r30.placeholder)("ngModel", ctx_r30.model)("disabled", ctx_r30.isDuplicated)("required", ctx_r30.required);
} }
function JsonEditorNodeComponent_div_5_ng_container_5_div_1_select_2_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "option", 19);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r35 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("value", option_r35);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(option_r35);
} }
function JsonEditorNodeComponent_div_5_ng_container_5_div_1_select_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "select", 17);
    ɵngcc0.ɵɵlistener("ngModelChange", function JsonEditorNodeComponent_div_5_ng_container_5_div_1_select_2_Template_select_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r37); const ctx_r36 = ɵngcc0.ɵɵnextContext(4); return ctx_r36.updateModel($event); });
    ɵngcc0.ɵɵtemplate(1, JsonEditorNodeComponent_div_5_ng_container_5_div_1_select_2_option_1_Template, 2, 2, "option", 18);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r31.model);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r31.schema.enum);
} }
function JsonEditorNodeComponent_div_5_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, JsonEditorNodeComponent_div_5_ng_container_5_div_1_textarea_1_Template, 1, 4, "textarea", 14);
    ɵngcc0.ɵɵtemplate(2, JsonEditorNodeComponent_div_5_ng_container_5_div_1_select_2_Template, 2, 2, "select", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !(ctx_r23.schema == null ? null : ctx_r23.schema.enum));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r23.schema == null ? null : ctx_r23.schema.enum);
} }
function JsonEditorNodeComponent_div_5_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r39 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "input", 20);
    ɵngcc0.ɵɵlistener("ngModelChange", function JsonEditorNodeComponent_div_5_ng_container_5_div_2_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r39); const ctx_r38 = ɵngcc0.ɵɵnextContext(3); return ctx_r38.updateModel($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("placeholder", ctx_r24.placeholder)("ngModel", ctx_r24.model)("disabled", ctx_r24.isDuplicated)("required", ctx_r24.required);
} }
function JsonEditorNodeComponent_div_5_ng_container_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r41 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "input", 21);
    ɵngcc0.ɵɵlistener("ngModelChange", function JsonEditorNodeComponent_div_5_ng_container_5_div_3_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r41); const ctx_r40 = ɵngcc0.ɵɵnextContext(3); return ctx_r40.updateModel($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("placeholder", ctx_r25.placeholder)("ngModel", ctx_r25.model)("disabled", ctx_r25.isDuplicated)("required", ctx_r25.required);
} }
function JsonEditorNodeComponent_div_5_ng_container_5_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r43 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "input", 22);
    ɵngcc0.ɵɵlistener("ngModelChange", function JsonEditorNodeComponent_div_5_ng_container_5_div_4_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r43); const ctx_r42 = ɵngcc0.ɵɵnextContext(3); return ctx_r42.updateModel($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("placeholder", ctx_r26.placeholder)("ngModel", ctx_r26.model)("disabled", ctx_r26.isDuplicated)("required", ctx_r26.required);
} }
function JsonEditorNodeComponent_div_5_ng_container_5_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r45 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "div", 23);
    ɵngcc0.ɵɵelementStart(2, "ngx-icon", 24);
    ɵngcc0.ɵɵlistener("click", function JsonEditorNodeComponent_div_5_ng_container_5_div_5_Template_ngx_icon_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r45); const ctx_r44 = ɵngcc0.ɵɵnextContext(3); return ctx_r44.openCodeEditor(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 25);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵtextInterpolate(ctx_r27.model);
} }
function JsonEditorNodeComponent_div_5_ng_container_5_ng_template_6_ngx_select_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ngx-select-option", 31);
} if (rf & 2) {
    const mode_r48 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("name", mode_r48.label)("value", mode_r48.name);
} }
function JsonEditorNodeComponent_div_5_ng_container_5_ng_template_6_ngx_codemirror_5_Template(rf, ctx) { if (rf & 1) {
    const _r50 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-codemirror", 32);
    ɵngcc0.ɵɵlistener("ngModelChange", function JsonEditorNodeComponent_div_5_ng_container_5_ng_template_6_ngx_codemirror_5_Template_ngx_codemirror_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r50); const ctx_r49 = ɵngcc0.ɵɵnextContext(4); return ctx_r49.editorModel = $event; });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r47 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r47.editorModel)("disabled", ctx_r47.isDuplicated)("config", ctx_r47.editorConfig);
} }
const _c1 = function (a0) { return [a0]; };
function JsonEditorNodeComponent_div_5_ng_container_5_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r52 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 26);
    ɵngcc0.ɵɵelementStart(1, "ngx-select", 27);
    ɵngcc0.ɵɵlistener("ngModelChange", function JsonEditorNodeComponent_div_5_ng_container_5_ng_template_6_Template_ngx_select_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r52); const ctx_r51 = ɵngcc0.ɵɵnextContext(3); return ctx_r51.selectEditorMode($event[0]); });
    ɵngcc0.ɵɵtemplate(2, JsonEditorNodeComponent_div_5_ng_container_5_ng_template_6_ngx_select_option_2_Template, 1, 2, "ngx-select-option", 28);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "ngx-button", 29);
    ɵngcc0.ɵɵlistener("click", function JsonEditorNodeComponent_div_5_ng_container_5_ng_template_6_Template_ngx_button_click_3_listener() { ɵngcc0.ɵɵrestoreView(_r52); const ctx_r53 = ɵngcc0.ɵɵnextContext(3); ctx_r53.updateModel(ctx_r53.editorModel); return ctx_r53.closeCodeEditor(); });
    ɵngcc0.ɵɵtext(4, " Save");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, JsonEditorNodeComponent_div_5_ng_container_5_ng_template_6_ngx_codemirror_5_Template, 1, 3, "ngx-codemirror", 30);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r29.isDuplicated)("ngModel", ɵngcc0.ɵɵpureFunction1(4, _c1, ctx_r29.editorConfig.mode.name));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r29.editorModes);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r29.editorVisible);
} }
function JsonEditorNodeComponent_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, JsonEditorNodeComponent_div_5_ng_container_5_div_1_Template, 3, 2, "div", 9);
    ɵngcc0.ɵɵtemplate(2, JsonEditorNodeComponent_div_5_ng_container_5_div_2_Template, 2, 4, "div", 9);
    ɵngcc0.ɵɵtemplate(3, JsonEditorNodeComponent_div_5_ng_container_5_div_3_Template, 2, 4, "div", 9);
    ɵngcc0.ɵɵtemplate(4, JsonEditorNodeComponent_div_5_ng_container_5_div_4_Template, 2, 4, "div", 9);
    ɵngcc0.ɵɵtemplate(5, JsonEditorNodeComponent_div_5_ng_container_5_div_5_Template, 5, 1, "div", 9);
    ɵngcc0.ɵɵtemplate(6, JsonEditorNodeComponent_div_5_ng_container_5_ng_template_6_Template, 6, 6, "ng-template", null, 13, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r14.schema.format);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r14.schema.format === "password");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r14.schema.format === "date");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r14.schema.format === "date-time");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r14.schema.format === "code");
} }
function JsonEditorNodeComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, JsonEditorNodeComponent_div_5_div_1_Template, 2, 8, "div", 9);
    ɵngcc0.ɵɵtemplate(2, JsonEditorNodeComponent_div_5_div_2_Template, 2, 8, "div", 9);
    ɵngcc0.ɵɵtemplate(3, JsonEditorNodeComponent_div_5_div_3_Template, 2, 4, "div", 9);
    ɵngcc0.ɵɵtemplate(4, JsonEditorNodeComponent_div_5_div_4_Template, 3, 5, "div", 9);
    ɵngcc0.ɵɵtemplate(5, JsonEditorNodeComponent_div_5_ng_container_5_Template, 8, 5, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("invalid", !ctx_r4.valid);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (ctx_r4.schema == null ? null : ctx_r4.schema.type) === "object");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (ctx_r4.schema == null ? null : ctx_r4.schema.type) === "array");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (ctx_r4.schema == null ? null : ctx_r4.schema.type) === "number" || (ctx_r4.schema == null ? null : ctx_r4.schema.type) === "integer");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (ctx_r4.schema == null ? null : ctx_r4.schema.type) === "boolean");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (ctx_r4.schema == null ? null : ctx_r4.schema.type) === "string");
} }
function JsonEditorNodeComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 33);
} }
export class JsonEditorNodeComponent extends JsonEditorNode {
    constructor(dialogMngr) {
        super(dialogMngr);
        this.dialogMngr = dialogMngr;
        this.showKnownProperties = false;
        this.isDuplicated = false;
        this.placeholder = '';
    }
    ngOnInit() {
        super.ngOnInit();
        if (this.schema.examples && Array.isArray(this.schema.examples)) {
            this.placeholder = this.schema.examples.join(', ');
        }
    }
}
JsonEditorNodeComponent.ɵfac = function JsonEditorNodeComponent_Factory(t) { return new (t || JsonEditorNodeComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DialogService)); };
JsonEditorNodeComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: JsonEditorNodeComponent, selectors: [["ngx-json-editor-node"]], inputs: { showKnownProperties: "showKnownProperties", isDuplicated: "isDuplicated", model: "model", schema: "schema", typeCheckOverrides: "typeCheckOverrides", errors: "errors" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 7, vars: 10, consts: [[1, "json-tree-node"], ["class", "ngx-expander", 3, "invalid", "ngClass", "click", 4, "ngIf"], ["fontIcon", "warning-filled", "class", "error-icon", "ngx-tooltip", "", "tooltipPlacement", "top", 3, "tooltipTemplate", 4, "ngIf"], ["errorsTemplate", ""], [3, "invalid", 4, "ngIf"], ["class", "ngx-tree-vr", 4, "ngIf"], [1, "ngx-expander", 3, "ngClass", "click"], ["fontIcon", "warning-filled", "ngx-tooltip", "", "tooltipPlacement", "top", 1, "error-icon", 3, "tooltipTemplate"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "schema", "model", "expanded", "isDuplicated", "path", "errors", "typeCheckOverrides", "showKnownProperties", "modelChange"], ["type", "number", 1, "value-input", 3, "placeholder", "disabled", "ngModel", "required", "ngModelChange"], [1, "toggle-input", 3, "disabled", "ngModel", "label", "ngModelChange"], ["codeEditorTpl", ""], ["class", "value-input", "type", "text", 3, "placeholder", "ngModel", "disabled", "required", "ngModelChange", 4, "ngIf"], ["class", "value-input select", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["type", "text", 1, "value-input", 3, "placeholder", "ngModel", "disabled", "required", "ngModelChange"], [1, "value-input", "select", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "password", 1, "value-input", 3, "placeholder", "ngModel", "disabled", "required", "ngModelChange"], ["type", "date", 1, "value-input", 3, "placeholder", "ngModel", "disabled", "required", "ngModelChange"], ["type", "datetime-local", 1, "value-input", 3, "placeholder", "ngModel", "disabled", "required", "ngModelChange"], [1, "value-input", "code"], ["fontIcon", "edit", "ngx-tooltip", "", "tooltipTitle", "Edit Code", 1, "edit-code-icon", 3, "click"], [1, "code-display"], [1, "code-editor"], ["label", "Language Mode", 1, "mode-select", 3, "disabled", "ngModel", "ngModelChange"], [3, "name", "value", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "save-code-button", 3, "click"], ["class", "code-editor", 3, "ngModel", "disabled", "config", "ngModelChange", 4, "ngIf"], [3, "name", "value"], [1, "code-editor", 3, "ngModel", "disabled", "config", "ngModelChange"], [1, "ngx-tree-vr"]], template: function JsonEditorNodeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, JsonEditorNodeComponent_span_1_Template, 1, 6, "span", 1);
        ɵngcc0.ɵɵtemplate(2, JsonEditorNodeComponent_ngx_icon_2_Template, 1, 1, "ngx-icon", 2);
        ɵngcc0.ɵɵtemplate(3, JsonEditorNodeComponent_ng_template_3_Template, 1, 1, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(5, JsonEditorNodeComponent_div_5_Template, 6, 7, "div", 4);
        ɵngcc0.ɵɵtemplate(6, JsonEditorNodeComponent_div_6_Template, 1, 0, "div", 5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("inline", (ctx.schema == null ? null : ctx.schema.type) !== "object" && (ctx.schema == null ? null : ctx.schema.type) !== "array" && (ctx.schema == null ? null : ctx.schema.type) !== "null")("invalid", !ctx.valid || ctx.isDuplicated)("children-invalid", !ctx.childrenValid || ctx.isDuplicated);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", (ctx.schema == null ? null : ctx.schema.type) === "object" || (ctx.schema == null ? null : ctx.schema.type) === "array");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.ownErrors.length > 0);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.model !== undefined);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", (ctx.schema == null ? null : ctx.schema.type) === "object" || (ctx.schema == null ? null : ctx.schema.type) === "array");
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgClass, ɵngcc3.IconComponent, ɵngcc4.TooltipDirective, ɵngcc2.NgForOf, ɵngcc5.ObjectNodeComponent, ɵngcc6.ArrayNodeComponent, ɵngcc7.NumberValueAccessor, ɵngcc7.DefaultValueAccessor, ɵngcc7.NgControlStatus, ɵngcc7.NgModel, ɵngcc7.RequiredValidator, ɵngcc8.ToggleComponent, ɵngcc7.SelectControlValueAccessor, ɵngcc7.NgSelectOption, ɵngcc7.ɵNgSelectMultipleOption, ɵngcc9.SelectComponent, ɵngcc10.ButtonComponent, ɵngcc11.SelectOptionDirective, ɵngcc12.CodeEditorComponent], pipes: [ɵngcc2.JsonPipe], styles: [".json-tree-node{padding:0;margin-left:25px;margin-bottom:0;position:relative;white-space:nowrap}.json-tree-node.inline{display:inline-block;margin-bottom:0;vertical-align:top;width:calc(100% - 290px)}.json-tree-node.inline:before{position:absolute;content:\"=\";left:-19px;font-size:20px;color:#5a6884}.json-tree-node.inline.inline .error-icon{left:auto;right:-22px;top:5px}.json-tree-node .btn{cursor:pointer}.json-tree-node .ngx-expander{font-size:.75rem;color:#afb7c8;position:absolute;top:-25px;left:-26px;z-index:1;-webkit-user-select:none;-moz-user-select:none;user-select:none}.json-tree-node .ngx-expander:not(.disabled){cursor:pointer}.json-tree-node .ngx-expander.icon-tree-collapse:before,.json-tree-node .ngx-expander.icon-tree-expand:before{background:#1c2029;border-radius:50%}.json-tree-node .ngx-expander.invalid{color:#e02f00}.json-tree-node .add-button{position:relative;left:20px;width:21px;height:21px;padding:2px 3px;background:#909cb4}.json-tree-node .add-button ngx-icon{color:#1c2029}.json-tree-node .add-button:before{content:\" \";width:15px;height:1px;border-radius:5px;background:none;border-top:1px dashed #5a6884;position:absolute;top:50%;left:-15px}.json-tree-node .ngx-tree-vr{position:absolute;top:-4px;bottom:14px;left:5px;border-left:1px dashed #5a6884;width:1px}.json-tree-node .property-def{border:1px solid rgba(148,198,255,.07);height:30px;display:inline-block;margin-left:20px;position:relative;background:rgba(148,198,255,.05)}.json-tree-node .property-def:before{content:\" \";width:15px;height:1px;border-radius:5px;background:none;border-top:1px dashed #5a6884;position:absolute;top:50%;left:-15px}.json-tree-node .property-def .type-icon{width:28px;height:28px;position:relative;background:rgba(148,198,255,.07);margin-left:0;display:inline-block}.json-tree-node .property-def .type-icon ngx-icon{color:#afb7c8;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:16px;height:16px}.json-tree-node .property-def .type-icon:hover{background:rgba(148,198,255,.17)}.json-tree-node .property-def .property-name{display:inline-block;width:170px;padding:0 5px;position:relative;transform:translateY(-50%);vertical-align:middle}.json-tree-node .property-def .property-name .title{display:inline-block;color:#72819f;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;position:relative;top:5px}.json-tree-node .property-def .property-name input{border:none;background:transparent;color:#bec5d3;width:calc(100% - 5px);line-height:20px;font-size:14px}.json-tree-node .error-icon{position:absolute;top:-28px;left:205px;color:#e02f00}.json-tree-node .value-input{border:1px solid rgba(148,198,255,.07);background:rgba(148,198,255,.05);color:#bec5d3;width:100%;height:30px;padding:5px;border-radius:0}.json-tree-node .value-input.select *{background-color:#313847}.json-tree-node .value-input.code{width:100%;overflow:hidden}.json-tree-node .value-input.code .code-display{white-space:pre-wrap;font-family:Courier New,Courier,monospace;font-size:14px}.json-tree-node .value-input.code .edit-code-icon{position:absolute;right:10px;top:4px;z-index:21;cursor:pointer;display:none}.json-tree-node .value-input.code .edit-code-icon:hover{color:#fff}.json-tree-node .value-input.code:hover{height:auto;overflow:auto;max-height:400px;min-height:30px;position:absolute;z-index:20;background:#212631}.json-tree-node .value-input.code:hover .edit-code-icon{display:inline}.json-tree-node .ngx-toggle{margin:0;line-height:30px}.json-tree-node .ngx-toggle .ngx-toggle-text{color:#bec5d3}.json-tree-node .invalid>div>.value-input{border:1px solid #e02f00}"], encapsulation: 2, changeDetection: 0 });
JsonEditorNodeComponent.ctorParameters = () => [
    { type: DialogService }
];
JsonEditorNodeComponent.propDecorators = {
    model: [{ type: Input }],
    schema: [{ type: Input }],
    typeCheckOverrides: [{ type: Input }],
    errors: [{ type: Input }],
    showKnownProperties: [{ type: Input }],
    isDuplicated: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(JsonEditorNodeComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-json-editor-node',
                template: "<div\n  class=\"json-tree-node\"\n  [class.inline]=\"schema?.type !== 'object' && schema?.type !== 'array' && schema?.type !== 'null'\"\n  [class.invalid]=\"!valid || isDuplicated\"\n  [class.children-invalid]=\"!childrenValid || isDuplicated\"\n>\n  <span\n    *ngIf=\"schema?.type === 'object' || schema?.type === 'array'\"\n    class=\"ngx-expander\"\n    (click)=\"onExpandClick()\"\n    [class.invalid]=\"!childrenValid || isDuplicated\"\n    [ngClass]=\"{\n      'icon-tree-collapse': expanded,\n      'icon-tree-expand': !expanded\n    }\"\n  >\n  </span>\n\n  <ngx-icon\n    fontIcon=\"warning-filled\"\n    *ngIf=\"ownErrors.length > 0\"\n    class=\"error-icon\"\n    ngx-tooltip\n    [tooltipTemplate]=\"errorsTemplate\"\n    tooltipPlacement=\"top\"\n  ></ngx-icon>\n  <ng-template #errorsTemplate>\n    <div *ngFor=\"let error of ownErrors\">{{ error.message }}</div>\n  </ng-template>\n\n  <div *ngIf=\"model !== undefined\" [class.invalid]=\"!valid\">\n    <!-- Object -->\n    <div *ngIf=\"schema?.type === 'object'\">\n      <ngx-json-object-node\n        [schema]=\"schema\"\n        [model]=\"model\"\n        [expanded]=\"expanded\"\n        [isDuplicated]=\"isDuplicated\"\n        (modelChange)=\"updateModel($event)\"\n        [path]=\"path\"\n        [errors]=\"childrenErrors\"\n        [typeCheckOverrides]=\"typeCheckOverrides\"\n        [showKnownProperties]=\"showKnownProperties\"\n      ></ngx-json-object-node>\n    </div>\n\n    <!-- Array -->\n    <div *ngIf=\"schema?.type === 'array'\">\n      <ngx-json-array-node\n        [schema]=\"schema\"\n        [model]=\"model\"\n        [expanded]=\"expanded\"\n        [isDuplicated]=\"isDuplicated\"\n        (modelChange)=\"updateModel($event)\"\n        [path]=\"path\"\n        [errors]=\"childrenErrors\"\n        [typeCheckOverrides]=\"typeCheckOverrides\"\n        [showKnownProperties]=\"showKnownProperties\"\n      ></ngx-json-array-node>\n    </div>\n\n    <!-- Number | Integer -->\n    <div *ngIf=\"schema?.type === 'number' || schema?.type === 'integer'\">\n      <input\n        class=\"value-input\"\n        type=\"number\"\n        [placeholder]=\"placeholder\"\n        [disabled]=\"isDuplicated\"\n        [ngModel]=\"model\"\n        (ngModelChange)=\"updateModel($event)\"\n        [required]=\"required\"\n      />\n    </div>\n\n    <!-- Boolean -->\n    <div *ngIf=\"schema?.type === 'boolean'\">\n      <ngx-toggle\n        class=\"toggle-input\"\n        [disabled]=\"isDuplicated\"\n        [ngModel]=\"model\"\n        (ngModelChange)=\"updateModel($event)\"\n        [label]=\"model | json\"\n      >\n      </ngx-toggle>\n    </div>\n\n    <!-- String -->\n    <ng-container *ngIf=\"schema?.type === 'string'\">\n      <!-- No format -->\n      <div *ngIf=\"!schema.format\">\n        <textarea\n          *ngIf=\"!schema?.enum\"\n          class=\"value-input\"\n          type=\"text\"\n          [placeholder]=\"placeholder\"\n          [ngModel]=\"model\"\n          [disabled]=\"isDuplicated\"\n          (ngModelChange)=\"updateModel($event)\"\n          [required]=\"required\"\n        ></textarea>\n        <select *ngIf=\"schema?.enum\" class=\"value-input select\" [ngModel]=\"model\" (ngModelChange)=\"updateModel($event)\">\n          <option *ngFor=\"let option of schema.enum\" [value]=\"option\">{{ option }}</option>\n        </select>\n      </div>\n\n      <!-- Password -->\n      <div *ngIf=\"schema.format === 'password'\">\n        <input\n          class=\"value-input\"\n          type=\"password\"\n          [placeholder]=\"placeholder\"\n          [ngModel]=\"model\"\n          [disabled]=\"isDuplicated\"\n          (ngModelChange)=\"updateModel($event)\"\n          [required]=\"required\"\n        />\n      </div>\n\n      <!-- Date -->\n      <div *ngIf=\"schema.format === 'date'\">\n        <input\n          class=\"value-input\"\n          type=\"date\"\n          [placeholder]=\"placeholder\"\n          [ngModel]=\"model\"\n          [disabled]=\"isDuplicated\"\n          (ngModelChange)=\"updateModel($event)\"\n          [required]=\"required\"\n        />\n      </div>\n\n      <!-- DateTime -->\n      <div *ngIf=\"schema.format === 'date-time'\">\n        <input\n          class=\"value-input\"\n          type=\"datetime-local\"\n          [placeholder]=\"placeholder\"\n          [ngModel]=\"model\"\n          [disabled]=\"isDuplicated\"\n          (ngModelChange)=\"updateModel($event)\"\n          [required]=\"required\"\n        />\n      </div>\n\n      <!-- Code -->\n      <div *ngIf=\"schema.format === 'code'\">\n        <div class=\"value-input code\">\n          <ngx-icon\n            fontIcon=\"edit\"\n            class=\"edit-code-icon\"\n            ngx-tooltip\n            tooltipTitle=\"Edit Code\"\n            (click)=\"openCodeEditor()\"\n          ></ngx-icon>\n          <div class=\"code-display\">{{ model }}</div>\n        </div>\n      </div>\n\n      <ng-template #codeEditorTpl>\n        <div class=\"code-editor\">\n          <ngx-select\n            class=\"mode-select\"\n            label=\"Language Mode\"\n            [disabled]=\"isDuplicated\"\n            [ngModel]=\"[editorConfig.mode.name]\"\n            (ngModelChange)=\"selectEditorMode($event[0])\"\n          >\n            <ngx-select-option *ngFor=\"let mode of editorModes\" [name]=\"mode.label\" [value]=\"mode.name\">\n            </ngx-select-option>\n          </ngx-select>\n\n          <ngx-button class=\"btn btn-primary save-code-button\" (click)=\"updateModel(editorModel); closeCodeEditor()\">\n            Save</ngx-button\n          >\n\n          <ngx-codemirror\n            *ngIf=\"editorVisible\"\n            [ngModel]=\"editorModel\"\n            [disabled]=\"isDuplicated\"\n            (ngModelChange)=\"editorModel = $event\"\n            [config]=\"editorConfig\"\n            class=\"code-editor\"\n          >\n          </ngx-codemirror>\n        </div>\n      </ng-template>\n    </ng-container>\n  </div>\n\n  <div class=\"ngx-tree-vr\" *ngIf=\"schema?.type === 'object' || schema?.type === 'array'\"></div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".json-tree-node{padding:0;margin-left:25px;margin-bottom:0;position:relative;white-space:nowrap}.json-tree-node.inline{display:inline-block;margin-bottom:0;vertical-align:top;width:calc(100% - 290px)}.json-tree-node.inline:before{position:absolute;content:\"=\";left:-19px;font-size:20px;color:#5a6884}.json-tree-node.inline.inline .error-icon{left:auto;right:-22px;top:5px}.json-tree-node .btn{cursor:pointer}.json-tree-node .ngx-expander{font-size:.75rem;color:#afb7c8;position:absolute;top:-25px;left:-26px;z-index:1;-webkit-user-select:none;-moz-user-select:none;user-select:none}.json-tree-node .ngx-expander:not(.disabled){cursor:pointer}.json-tree-node .ngx-expander.icon-tree-collapse:before,.json-tree-node .ngx-expander.icon-tree-expand:before{background:#1c2029;border-radius:50%}.json-tree-node .ngx-expander.invalid{color:#e02f00}.json-tree-node .add-button{position:relative;left:20px;width:21px;height:21px;padding:2px 3px;background:#909cb4}.json-tree-node .add-button ngx-icon{color:#1c2029}.json-tree-node .add-button:before{content:\" \";width:15px;height:1px;border-radius:5px;background:none;border-top:1px dashed #5a6884;position:absolute;top:50%;left:-15px}.json-tree-node .ngx-tree-vr{position:absolute;top:-4px;bottom:14px;left:5px;border-left:1px dashed #5a6884;width:1px}.json-tree-node .property-def{border:1px solid rgba(148,198,255,.07);height:30px;display:inline-block;margin-left:20px;position:relative;background:rgba(148,198,255,.05)}.json-tree-node .property-def:before{content:\" \";width:15px;height:1px;border-radius:5px;background:none;border-top:1px dashed #5a6884;position:absolute;top:50%;left:-15px}.json-tree-node .property-def .type-icon{width:28px;height:28px;position:relative;background:rgba(148,198,255,.07);margin-left:0;display:inline-block}.json-tree-node .property-def .type-icon ngx-icon{color:#afb7c8;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:16px;height:16px}.json-tree-node .property-def .type-icon:hover{background:rgba(148,198,255,.17)}.json-tree-node .property-def .property-name{display:inline-block;width:170px;padding:0 5px;position:relative;transform:translateY(-50%);vertical-align:middle}.json-tree-node .property-def .property-name .title{display:inline-block;color:#72819f;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;position:relative;top:5px}.json-tree-node .property-def .property-name input{border:none;background:transparent;color:#bec5d3;width:calc(100% - 5px);line-height:20px;font-size:14px}.json-tree-node .error-icon{position:absolute;top:-28px;left:205px;color:#e02f00}.json-tree-node .value-input{border:1px solid rgba(148,198,255,.07);background:rgba(148,198,255,.05);color:#bec5d3;width:100%;height:30px;padding:5px;border-radius:0}.json-tree-node .value-input.select *{background-color:#313847}.json-tree-node .value-input.code{width:100%;overflow:hidden}.json-tree-node .value-input.code .code-display{white-space:pre-wrap;font-family:Courier New,Courier,monospace;font-size:14px}.json-tree-node .value-input.code .edit-code-icon{position:absolute;right:10px;top:4px;z-index:21;cursor:pointer;display:none}.json-tree-node .value-input.code .edit-code-icon:hover{color:#fff}.json-tree-node .value-input.code:hover{height:auto;overflow:auto;max-height:400px;min-height:30px;position:absolute;z-index:20;background:#212631}.json-tree-node .value-input.code:hover .edit-code-icon{display:inline}.json-tree-node .ngx-toggle{margin:0;line-height:30px}.json-tree-node .ngx-toggle .ngx-toggle-text{color:#bec5d3}.json-tree-node .invalid>div>.value-input{border:1px solid #e02f00}"]
            }]
    }], function () { return [{ type: ɵngcc1.DialogService }]; }, { showKnownProperties: [{
            type: Input
        }], isDuplicated: [{
            type: Input
        }], model: [{
            type: Input
        }], schema: [{
            type: Input
        }], typeCheckOverrides: [{
            type: Input
        }], errors: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1lZGl0b3Itbm9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvanNvbi1lZGl0b3IvanNvbi1lZGl0b3IvanNvbi1lZGl0b3Itbm9kZS9qc29uLWVkaXRvci1ub2RlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVUvRCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsY0FBYztBQUFHLElBZTVELFlBQW1CLFVBQXlCO0FBQzlDLFFBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3RCLFFBRnFCLGVBQVUsR0FBVixVQUFVLENBQWU7QUFBQyxRQU5wQyx3QkFBbUIsR0FBRyxLQUFLLENBQUM7QUFDdkMsUUFDVyxpQkFBWSxHQUFHLEtBQUssQ0FBQztBQUNoQyxRQUNFLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ25CLElBR0UsQ0FBQztBQUNILElBQ0UsUUFBUTtBQUNWLFFBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3JCLFFBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDckUsWUFBTSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6RCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7bURBakNDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsc0JBQXNCLGtCQUNoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0N0RBQThDLGtCQUU5QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0seWpFQUU1QztBQUFDO0FBQWlELFlBVjlDLGFBQWE7QUFBRztBQUFHO0FBQ3JCLG9CQVVKLEtBQUs7QUFBSyxxQkFFVixLQUFLO0FBQUssaUNBRVYsS0FBSztBQUFLLHFCQUVWLEtBQUs7QUFBSyxrQ0FFVixLQUFLO0FBQUssMkJBRVYsS0FBSztBQUFJOzs7OzttK0JBWlg7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQVlhO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSnNvbkVkaXRvck5vZGUgfSBmcm9tICcuLi8uLi9qc29uLWVkaXRvci1ub2RlJztcblxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2RpYWxvZy9kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBKU09ORWRpdG9yU2NoZW1hIH0gZnJvbSAnLi4vLi4vanNvbi1lZGl0b3IuaGVscGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWpzb24tZWRpdG9yLW5vZGUnLFxuICB0ZW1wbGF0ZVVybDogJ2pzb24tZWRpdG9yLW5vZGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9qc29uLWVkaXRvci1ub2RlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEpzb25FZGl0b3JOb2RlQ29tcG9uZW50IGV4dGVuZHMgSnNvbkVkaXRvck5vZGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBtb2RlbDogYW55O1xuXG4gIEBJbnB1dCgpIHNjaGVtYTogSlNPTkVkaXRvclNjaGVtYTtcblxuICBASW5wdXQoKSB0eXBlQ2hlY2tPdmVycmlkZXM/OiBhbnk7XG5cbiAgQElucHV0KCkgZXJyb3JzOiBhbnlbXTtcblxuICBASW5wdXQoKSBzaG93S25vd25Qcm9wZXJ0aWVzID0gZmFsc2U7XG5cbiAgQElucHV0KCkgaXNEdXBsaWNhdGVkID0gZmFsc2U7XG5cbiAgcGxhY2Vob2xkZXIgPSAnJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nTW5ncjogRGlhbG9nU2VydmljZSkge1xuICAgIHN1cGVyKGRpYWxvZ01uZ3IpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgIGlmICh0aGlzLnNjaGVtYS5leGFtcGxlcyAmJiBBcnJheS5pc0FycmF5KHRoaXMuc2NoZW1hLmV4YW1wbGVzKSkge1xuICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMuc2NoZW1hLmV4YW1wbGVzLmpvaW4oJywgJyk7XG4gICAgfVxuICB9XG59XG4iXX0=