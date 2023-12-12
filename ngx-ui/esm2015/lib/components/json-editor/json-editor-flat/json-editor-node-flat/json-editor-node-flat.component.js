import { Component, Input, ViewEncapsulation, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { JsonEditorNode } from '../../json-editor-node';
import { DialogService } from '../../../dialog/dialog.service';
import { DomSanitizer } from '@angular/platform-browser';
import { requiredIndicatorIcon } from '../../json-editor.helper';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../../dialog/dialog.service';
import * as ɵngcc2 from '@angular/platform-browser';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from './node-types/node-info/node-info.component';
import * as ɵngcc5 from '../../../input/input.component';
import * as ɵngcc6 from '@angular/forms';
import * as ɵngcc7 from '../../../toggle/toggle.component';
import * as ɵngcc8 from '../../../select/select.component';
import * as ɵngcc9 from '../../../select/select-option.directive';
import * as ɵngcc10 from '../../../input/input-suffix.component';
import * as ɵngcc11 from '../../../icon/icon.component';
import * as ɵngcc12 from '../../../tooltip/tooltip.directive';
import * as ɵngcc13 from '../../../button/button.component';
import * as ɵngcc14 from '../../../code-editor/code-editor.component';
import * as ɵngcc15 from './node-types/object-node-flat/object-node-flat.component';
import * as ɵngcc16 from './node-types/array-node-flat/array-node-flat.component';

function JsonEditorNodeFlatComponent_div_0_div_1_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 16);
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵtemplate(1, JsonEditorNodeFlatComponent_div_0_div_1_div_1_span_1_Template, 1, 0, "span", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵstyleProp("left", -1 * ctx_r4.nextLevel * 20 + "px");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r4.indentationArray);
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 17);
} }
function JsonEditorNodeFlatComponent_div_0_div_1_ng_container_5_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 21);
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵclassProp("invalid", !ctx_r11.childrenValid && !ctx_r11.schemaBuilderMode || ctx_r11.isDuplicated);
    ɵngcc0.ɵɵproperty("innerHtml", ctx_r11.requiredIndicator, ɵngcc0.ɵɵsanitizeHtml);
} }
function JsonEditorNodeFlatComponent_div_0_div_1_ng_container_5_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 22);
} if (rf & 2) {
    const ctx_r12 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("innerHtml", ctx_r12.requiredIndicator, ɵngcc0.ɵɵsanitizeHtml);
} }
function JsonEditorNodeFlatComponent_div_0_div_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 18);
    ɵngcc0.ɵɵtemplate(2, JsonEditorNodeFlatComponent_div_0_div_1_ng_container_5_span_2_Template, 1, 3, "span", 19);
    ɵngcc0.ɵɵtemplate(3, JsonEditorNodeFlatComponent_div_0_div_1_ng_container_5_span_3_Template, 1, 1, "span", 20);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵprojection(4, 1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.required);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r6.required && ctx_r6.schemaBuilderMode);
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "ngx-input", 26);
    ɵngcc0.ɵɵlistener("ngModelChange", function JsonEditorNodeFlatComponent_div_0_div_1_div_10_div_1_Template_ngx_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); const ctx_r17 = ɵngcc0.ɵɵnextContext(4); return ctx_r17.updateModel($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r13.model)("requiredIndicator", false)("required", ctx_r13.required)("disabled", ctx_r13.isDuplicated);
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "ngx-toggle", 27);
    ɵngcc0.ɵɵlistener("ngModelChange", function JsonEditorNodeFlatComponent_div_0_div_1_div_10_div_2_Template_ngx_toggle_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r19 = ɵngcc0.ɵɵnextContext(4); return ctx_r19.updateModel($event); });
    ɵngcc0.ɵɵpipe(2, "json");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r14.model)("label", ɵngcc0.ɵɵpipeBind1(2, 3, ctx_r14.model))("disabled", ctx_r14.isDuplicated);
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_div_1_ngx_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-input", 32);
    ɵngcc0.ɵɵlistener("ngModelChange", function JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_div_1_ngx_input_1_Template_ngx_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r31); const ctx_r30 = ɵngcc0.ɵɵnextContext(6); return ctx_r30.updateModel($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = ɵngcc0.ɵɵnextContext(6);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r28.model)("requiredIndicator", false)("required", ctx_r28.required)("disabled", ctx_r28.isDuplicated)("autosize", false);
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_div_1_ngx_select_2_ngx_select_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ngx-select-option", 35);
} if (rf & 2) {
    const option_r33 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("name", option_r33)("value", option_r33);
} }
const _c0 = function (a0) { return [a0]; };
function JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_div_1_ngx_select_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-select", 33);
    ɵngcc0.ɵɵlistener("ngModelChange", function JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_div_1_ngx_select_2_Template_ngx_select_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r35); const ctx_r34 = ɵngcc0.ɵɵnextContext(6); return ctx_r34.updateModel($event[0]); });
    ɵngcc0.ɵɵtemplate(1, JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_div_1_ngx_select_2_ngx_select_option_1_Template, 1, 2, "ngx-select-option", 34);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = ɵngcc0.ɵɵnextContext(6);
    ɵngcc0.ɵɵproperty("filterable", false)("ngModel", ɵngcc0.ɵɵpureFunction1(5, _c0, ctx_r29.model))("required", ctx_r29.required)("disabled", ctx_r29.isDuplicated);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r29.schema.enum);
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtemplate(1, JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_div_1_ngx_input_1_Template, 1, 5, "ngx-input", 30);
    ɵngcc0.ɵɵtemplate(2, JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_div_1_ngx_select_2_Template, 2, 7, "ngx-select", 31);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = ɵngcc0.ɵɵnextContext(5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !(ctx_r21.schema == null ? null : ctx_r21.schema.enum));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r21.schema == null ? null : ctx_r21.schema.enum);
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "ngx-input", 36);
    ɵngcc0.ɵɵlistener("ngModelChange", function JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_div_2_Template_ngx_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r37); const ctx_r36 = ɵngcc0.ɵɵnextContext(5); return ctx_r36.updateModel($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = ɵngcc0.ɵɵnextContext(5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r22.model)("requiredIndicator", false)("required", ctx_r22.required)("disabled", ctx_r22.isDuplicated);
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r39 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "ngx-input", 37);
    ɵngcc0.ɵɵlistener("ngModelChange", function JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_div_3_Template_ngx_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r39); const ctx_r38 = ɵngcc0.ɵɵnextContext(5); return ctx_r38.updateModel($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = ɵngcc0.ɵɵnextContext(5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r23.model)("requiredIndicator", false)("required", ctx_r23.required)("disabled", ctx_r23.isDuplicated);
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r41 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "ngx-input", 38);
    ɵngcc0.ɵɵlistener("ngModelChange", function JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_div_4_Template_ngx_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r41); const ctx_r40 = ɵngcc0.ɵɵnextContext(5); return ctx_r40.updateModel($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = ɵngcc0.ɵɵnextContext(5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r24.model)("requiredIndicator", false)("required", ctx_r24.required)("disabled", ctx_r24.isDuplicated);
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r43 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 39);
    ɵngcc0.ɵɵelementStart(1, "ngx-input", 40);
    ɵngcc0.ɵɵelementStart(2, "ngx-input-suffix");
    ɵngcc0.ɵɵelementStart(3, "button", 41);
    ɵngcc0.ɵɵlistener("click", function JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_div_5_Template_button_click_3_listener() { ɵngcc0.ɵɵrestoreView(_r43); const ctx_r42 = ɵngcc0.ɵɵnextContext(5); return ctx_r42.openCodeEditor(); });
    ɵngcc0.ɵɵelement(4, "ngx-icon", 42);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = ɵngcc0.ɵɵnextContext(5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r25.model)("requiredIndicator", false)("required", ctx_r25.required)("disabled", true);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r25.isDuplicated);
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_ng_template_6_ngx_select_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ngx-select-option", 35);
} if (rf & 2) {
    const mode_r46 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("name", mode_r46.label)("value", mode_r46.name);
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_ng_template_6_ngx_codemirror_5_Template(rf, ctx) { if (rf & 1) {
    const _r48 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-codemirror", 47);
    ɵngcc0.ɵɵlistener("ngModelChange", function JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_ng_template_6_ngx_codemirror_5_Template_ngx_codemirror_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r48); const ctx_r47 = ɵngcc0.ɵɵnextContext(6); return ctx_r47.editorModel = $event; });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r45 = ɵngcc0.ɵɵnextContext(6);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r45.editorModel)("config", ctx_r45.editorConfig);
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r50 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 43);
    ɵngcc0.ɵɵelementStart(1, "ngx-select", 44);
    ɵngcc0.ɵɵlistener("ngModelChange", function JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_ng_template_6_Template_ngx_select_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r50); const ctx_r49 = ɵngcc0.ɵɵnextContext(5); return ctx_r49.selectEditorMode($event[0]); });
    ɵngcc0.ɵɵtemplate(2, JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_ng_template_6_ngx_select_option_2_Template, 1, 2, "ngx-select-option", 34);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "ngx-button", 45);
    ɵngcc0.ɵɵlistener("click", function JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_ng_template_6_Template_ngx_button_click_3_listener() { ɵngcc0.ɵɵrestoreView(_r50); const ctx_r51 = ɵngcc0.ɵɵnextContext(5); ctx_r51.updateModel(ctx_r51.editorModel); return ctx_r51.closeCodeEditor(); });
    ɵngcc0.ɵɵtext(4, " Save");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_ng_template_6_ngx_codemirror_5_Template, 1, 2, "ngx-codemirror", 46);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = ɵngcc0.ɵɵnextContext(5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngModel", ɵngcc0.ɵɵpureFunction1(3, _c0, ctx_r27.editorConfig.mode.name));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r27.editorModes);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r27.editorVisible);
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_div_1_Template, 3, 2, "div", 3);
    ɵngcc0.ɵɵtemplate(2, JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_div_2_Template, 2, 4, "div", 3);
    ɵngcc0.ɵɵtemplate(3, JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_div_3_Template, 2, 4, "div", 3);
    ɵngcc0.ɵɵtemplate(4, JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_div_4_Template, 2, 4, "div", 3);
    ɵngcc0.ɵɵtemplate(5, JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_div_5_Template, 5, 5, "div", 28);
    ɵngcc0.ɵɵtemplate(6, JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_ng_template_6_Template, 6, 5, "ng-template", null, 29, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r15.schema.format);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r15.schema.format === "password");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r15.schema.format === "date");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r15.schema.format === "date-time");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r15.schema.format === "code");
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_10_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r52 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(error_r52.message);
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 23);
    ɵngcc0.ɵɵtemplate(1, JsonEditorNodeFlatComponent_div_0_div_1_div_10_div_1_Template, 2, 4, "div", 3);
    ɵngcc0.ɵɵtemplate(2, JsonEditorNodeFlatComponent_div_0_div_1_div_10_div_2_Template, 3, 5, "div", 3);
    ɵngcc0.ɵɵtemplate(3, JsonEditorNodeFlatComponent_div_0_div_1_div_10_ng_container_3_Template, 8, 5, "ng-container", 3);
    ɵngcc0.ɵɵelementStart(4, "div", 24);
    ɵngcc0.ɵɵtemplate(5, JsonEditorNodeFlatComponent_div_0_div_1_div_10_span_5_Template, 2, 1, "span", 25);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (ctx_r7.schema == null ? null : ctx_r7.schema.type) === "number" || (ctx_r7.schema == null ? null : ctx_r7.schema.type) === "integer");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (ctx_r7.schema == null ? null : ctx_r7.schema.type) === "boolean");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (ctx_r7.schema == null ? null : ctx_r7.schema.type) === "string");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r7.ownErrors);
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 50);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r53 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("Min Items: ", ctx_r53.schema.minItems, "");
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 50);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r54 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("Max Items: ", ctx_r54.schema.maxItems, "");
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_11_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 50);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r55 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("Minimum: ", ctx_r55.schema.minimum, "");
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_11_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 50);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r56 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("Maximum: ", ctx_r56.schema.maximum, "");
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_11_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 50);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r57 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("Min Length: ", ctx_r57.schema.minLength, "");
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_11_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 50);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r58 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1("Max Length: ", ctx_r58.schema.maxLength, "");
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_11_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 50);
    ɵngcc0.ɵɵtext(1, "Pattern: Yes");
    ɵngcc0.ɵɵelementEnd();
} }
function JsonEditorNodeFlatComponent_div_0_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 48);
    ɵngcc0.ɵɵtemplate(1, JsonEditorNodeFlatComponent_div_0_div_1_div_11_div_1_Template, 2, 1, "div", 49);
    ɵngcc0.ɵɵtemplate(2, JsonEditorNodeFlatComponent_div_0_div_1_div_11_div_2_Template, 2, 1, "div", 49);
    ɵngcc0.ɵɵtemplate(3, JsonEditorNodeFlatComponent_div_0_div_1_div_11_div_3_Template, 2, 1, "div", 49);
    ɵngcc0.ɵɵtemplate(4, JsonEditorNodeFlatComponent_div_0_div_1_div_11_div_4_Template, 2, 1, "div", 49);
    ɵngcc0.ɵɵtemplate(5, JsonEditorNodeFlatComponent_div_0_div_1_div_11_div_5_Template, 2, 1, "div", 49);
    ɵngcc0.ɵɵtemplate(6, JsonEditorNodeFlatComponent_div_0_div_1_div_11_div_6_Template, 2, 1, "div", 49);
    ɵngcc0.ɵɵtemplate(7, JsonEditorNodeFlatComponent_div_0_div_1_div_11_div_7_Template, 2, 0, "div", 49);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.schema.minItems);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.schema.maxItems);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.schema.minimum);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.schema.maximum);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.schema.minLength);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.schema.maxLength);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r8.schema.pattern);
} }
function JsonEditorNodeFlatComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r61 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵtemplate(1, JsonEditorNodeFlatComponent_div_0_div_1_div_1_Template, 2, 3, "div", 5);
    ɵngcc0.ɵɵelementStart(2, "div", 6);
    ɵngcc0.ɵɵtemplate(3, JsonEditorNodeFlatComponent_div_0_div_1_div_3_Template, 1, 0, "div", 7);
    ɵngcc0.ɵɵelementStart(4, "div", 8);
    ɵngcc0.ɵɵtemplate(5, JsonEditorNodeFlatComponent_div_0_div_1_ng_container_5_Template, 5, 2, "ng-container", 3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "div", 9);
    ɵngcc0.ɵɵelementStart(7, "div", 10);
    ɵngcc0.ɵɵelementStart(8, "ngx-json-editor-node-info", 11);
    ɵngcc0.ɵɵlistener("propertyNameChange", function JsonEditorNodeFlatComponent_div_0_div_1_Template_ngx_json_editor_node_info_propertyNameChange_8_listener($event) { ɵngcc0.ɵɵrestoreView(_r61); const ctx_r60 = ɵngcc0.ɵɵnextContext(2); return ctx_r60.updatePropertyName(ctx_r60.schema.id, $event); });
    ɵngcc0.ɵɵpipe(9, "titlecase");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(10, JsonEditorNodeFlatComponent_div_0_div_1_div_10_Template, 6, 4, "div", 12);
    ɵngcc0.ɵɵtemplate(11, JsonEditorNodeFlatComponent_div_0_div_1_div_11_Template, 8, 7, "div", 13);
    ɵngcc0.ɵɵprojection(12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.nextLevel > 0);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("compressed", ctx_r1.compressed);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.valid && !ctx_r1.schemaBuilderMode || ctx_r1.isDuplicated);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.hideRoot || ctx_r1.nextLevel > 0 && !ctx_r1.arrayItem);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("extra-margin", ctx_r1.schema.nameEditable && !ctx_r1.schemaBuilderMode);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("nameEditable", ctx_r1.schema.nameEditable && !ctx_r1.schemaBuilderMode)("propertyName", ctx_r1.arrayName ? ctx_r1.arrayName : ctx_r1.schema == null ? null : ctx_r1.schema.propertyName)("title", (ctx_r1.schema == null ? null : ctx_r1.schema.title) || ctx_r1.label || (ctx_r1.arrayItem ? "Items" : ctx_r1.schema == null ? null : ctx_r1.schema.propertyName))("type", ɵngcc0.ɵɵpipeBind1(9, 16, (ctx_r1.schema == null ? null : ctx_r1.schema.format) || (ctx_r1.schema == null ? null : ctx_r1.schema.type)) + ((ctx_r1.schema == null ? null : ctx_r1.schema.enum == null ? null : ctx_r1.schema.enum.length) ? " + Enum" : ""))("description", ctx_r1.schema == null ? null : ctx_r1.schema.description)("examples", ctx_r1.schema == null ? null : ctx_r1.schema.examples)("compressed", ctx_r1.compressed);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.schemaBuilderMode);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.schemaBuilderMode);
} }
function JsonEditorNodeFlatComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r63 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "ngx-json-object-node-flat", 51);
    ɵngcc0.ɵɵlistener("modelChange", function JsonEditorNodeFlatComponent_div_0_div_2_Template_ngx_json_object_node_flat_modelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r63); const ctx_r62 = ɵngcc0.ɵɵnextContext(2); return ctx_r62.updateModel($event); })("schemaUpdate", function JsonEditorNodeFlatComponent_div_0_div_2_Template_ngx_json_object_node_flat_schemaUpdate_1_listener() { ɵngcc0.ɵɵrestoreView(_r63); const ctx_r64 = ɵngcc0.ɵɵnextContext(2); return ctx_r64.schemaUpdate.emit(ctx_r64.schemaRef); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("schema", ctx_r2.schema)("schemaRef", ctx_r2.schemaRef)("model", ctx_r2.model)("expanded", ctx_r2.expanded)("hideRoot", ctx_r2.hideRoot)("path", ctx_r2.path)("errors", ctx_r2.childrenErrors)("isDuplicated", ctx_r2.isDuplicated)("typeCheckOverrides", ctx_r2.typeCheckOverrides)("level", ctx_r2.nextLevel)("compressed", ctx_r2.compressed)("schemaBuilderMode", ctx_r2.schemaBuilderMode)("formats", ctx_r2.formats)("showKnownProperties", ctx_r2.showKnownProperties);
} }
function JsonEditorNodeFlatComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r66 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "ngx-json-array-node-flat", 52);
    ɵngcc0.ɵɵlistener("modelChange", function JsonEditorNodeFlatComponent_div_0_div_3_Template_ngx_json_array_node_flat_modelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r66); const ctx_r65 = ɵngcc0.ɵɵnextContext(2); return ctx_r65.updateModel($event); })("schemaUpdate", function JsonEditorNodeFlatComponent_div_0_div_3_Template_ngx_json_array_node_flat_schemaUpdate_1_listener() { ɵngcc0.ɵɵrestoreView(_r66); const ctx_r67 = ɵngcc0.ɵɵnextContext(2); return ctx_r67.schemaUpdate.emit(ctx_r67.schemaRef); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("schema", ctx_r3.schema)("schemaRef", ctx_r3.schemaRef)("model", ctx_r3.model)("expanded", ctx_r3.expanded)("formats", ctx_r3.formats)("hideRoot", ctx_r3.hideRoot)("path", ctx_r3.path)("compressed", ctx_r3.compressed)("errors", ctx_r3.childrenErrors)("typeCheckOverrides", ctx_r3.typeCheckOverrides)("level", ctx_r3.nextLevel)("isDuplicated", ctx_r3.isDuplicated)("schemaBuilderMode", ctx_r3.schemaBuilderMode)("showKnownProperties", ctx_r3.showKnownProperties);
} }
function JsonEditorNodeFlatComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, JsonEditorNodeFlatComponent_div_0_div_1_Template, 13, 18, "div", 2);
    ɵngcc0.ɵɵtemplate(2, JsonEditorNodeFlatComponent_div_0_div_2_Template, 2, 14, "div", 3);
    ɵngcc0.ɵɵtemplate(3, JsonEditorNodeFlatComponent_div_0_div_3_Template, 2, 14, "div", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !(ctx_r0.nextLevel === -1 && ctx_r0.hideRoot));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (ctx_r0.schema == null ? null : ctx_r0.schema.type) === "object");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (ctx_r0.schema == null ? null : ctx_r0.schema.type) === "array");
} }
const _c1 = [[["", "node-options", ""]], [["", "cdkDragHandle", ""]]];
const _c2 = ["[node-options]", "[cdkDragHandle]"];
export class JsonEditorNodeFlatComponent extends JsonEditorNode {
    constructor(dialogMngr, domSanitizer) {
        super(dialogMngr);
        this.dialogMngr = dialogMngr;
        this.domSanitizer = domSanitizer;
        this.arrayItem = false;
        this.hideRoot = false;
        this.arrayName = '';
        this.showKnownProperties = false;
        this.isDuplicated = false;
        this.updatePropertyNameEvent = new EventEmitter();
        this.nextLevel = 0;
        this.requiredIndicator = this.domSanitizer.bypassSecurityTrustHtml(requiredIndicatorIcon);
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if ('level' in changes || 'hideRoot' in changes) {
            this.nextLevel = this.level === undefined ? (this.hideRoot ? -1 : 0) : this.level + 1;
        }
    }
    updatePropertyName(id, name) {
        this.updatePropertyNameEvent.emit({ id, name });
    }
}
JsonEditorNodeFlatComponent.ɵfac = function JsonEditorNodeFlatComponent_Factory(t) { return new (t || JsonEditorNodeFlatComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DialogService), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DomSanitizer)); };
JsonEditorNodeFlatComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: JsonEditorNodeFlatComponent, selectors: [["ngx-json-editor-node-flat"]], inputs: { arrayItem: "arrayItem", hideRoot: "hideRoot", arrayName: "arrayName", showKnownProperties: "showKnownProperties", isDuplicated: "isDuplicated", model: "model", schema: "schema", typeCheckOverrides: "typeCheckOverrides", errors: "errors", label: "label", level: "level", schemaBuilderMode: "schemaBuilderMode", schemaRef: "schemaRef", formats: "formats", compressed: "compressed", indentationArray: "indentationArray" }, outputs: { updatePropertyNameEvent: "updatePropertyNameEvent" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 1, vars: 1, consts: [["class", "json-tree-node-flat", 4, "ngIf"], [1, "json-tree-node-flat"], ["class", "node-container", 4, "ngIf"], [4, "ngIf"], [1, "node-container"], ["class", "indentation", 3, "left", 4, "ngIf"], [1, "node"], ["class", "error-box", 4, "ngIf"], [1, "left-options"], [1, "node-content"], [1, "node-info"], [3, "nameEditable", "propertyName", "title", "type", "description", "examples", "compressed", "propertyNameChange"], ["class", "node-input", 4, "ngIf"], ["class", "node-constrains", 4, "ngIf"], [1, "indentation"], ["class", "json-editor--vertical-separator", 4, "ngFor", "ngForOf"], [1, "json-editor--vertical-separator"], [1, "error-box"], [1, "required-indicator"], [3, "invalid", "innerHtml", 4, "ngIf"], ["class", "not-required", 3, "innerHtml", 4, "ngIf"], [3, "innerHtml"], [1, "not-required", 3, "innerHtml"], [1, "node-input"], [1, "input-error"], [4, "ngFor", "ngForOf"], ["type", "number", 3, "ngModel", "requiredIndicator", "required", "disabled", "ngModelChange"], [1, "toggle-input", 3, "ngModel", "label", "disabled", "ngModelChange"], ["class", "code", 4, "ngIf"], ["codeEditorTpl", ""], ["type", "textarea", 3, "ngModel", "requiredIndicator", "required", "disabled", "autosize", "ngModelChange", 4, "ngIf"], [3, "filterable", "ngModel", "required", "disabled", "ngModelChange", 4, "ngIf"], ["type", "textarea", 3, "ngModel", "requiredIndicator", "required", "disabled", "autosize", "ngModelChange"], [3, "filterable", "ngModel", "required", "disabled", "ngModelChange"], [3, "name", "value", 4, "ngFor", "ngForOf"], [3, "name", "value"], ["type", "password", 3, "ngModel", "requiredIndicator", "required", "disabled", "ngModelChange"], ["type", "date", 3, "ngModel", "requiredIndicator", "required", "disabled", "ngModelChange"], ["type", "datetime-local", 3, "ngModel", "requiredIndicator", "required", "disabled", "ngModelChange"], [1, "code"], ["type", "text", 3, "ngModel", "requiredIndicator", "required", "disabled"], [3, "disabled", "click"], ["fontIcon", "edit", "ngx-tooltip", "", "tooltipTitle", "Edit Code", 1, "edit-code-icon"], [1, "code-editor"], ["label", "Language Mode", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "save-code-button", 3, "click"], ["class", "code-editor", 3, "ngModel", "config", "ngModelChange", 4, "ngIf"], [1, "code-editor", 3, "ngModel", "config", "ngModelChange"], [1, "node-constrains"], ["class", "tag", 4, "ngIf"], [1, "tag"], [3, "schema", "schemaRef", "model", "expanded", "hideRoot", "path", "errors", "isDuplicated", "typeCheckOverrides", "level", "compressed", "schemaBuilderMode", "formats", "showKnownProperties", "modelChange", "schemaUpdate"], [3, "schema", "schemaRef", "model", "expanded", "formats", "hideRoot", "path", "compressed", "errors", "typeCheckOverrides", "level", "isDuplicated", "schemaBuilderMode", "showKnownProperties", "modelChange", "schemaUpdate"]], template: function JsonEditorNodeFlatComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c1);
        ɵngcc0.ɵɵtemplate(0, JsonEditorNodeFlatComponent_div_0_Template, 4, 3, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.model !== undefined);
    } }, directives: [ɵngcc3.NgIf, ɵngcc4.JsonEditorNodeInfoComponent, ɵngcc3.NgForOf, ɵngcc5.InputComponent, ɵngcc6.NgControlStatus, ɵngcc6.NgModel, ɵngcc6.RequiredValidator, ɵngcc7.ToggleComponent, ɵngcc8.SelectComponent, ɵngcc9.SelectOptionDirective, ɵngcc10.InputSuffixComponent, ɵngcc11.IconComponent, ɵngcc12.TooltipDirective, ɵngcc13.ButtonComponent, ɵngcc14.CodeEditorComponent, ɵngcc15.ObjectNodeFlatComponent, ɵngcc16.ArrayNodeFlatComponent], pipes: [ɵngcc3.TitleCasePipe, ɵngcc3.JsonPipe], styles: [".json-tree-node-flat .indentation{border-radius:2px 0 0 2px;display:flex;align-items:center;background-color:rgba(49,56,71,.4)}.json-editor--vertical-separator{background-color:#3b4457;opacity:.5;border-radius:2px;width:1px;height:calc(100% - 4px);margin-right:20px}.json-editor--vertical-separator:first-child{margin-left:20px}.json-editor--popover-template{font-weight:600;font-size:12px;line-height:13px;max-width:300px;color:#1c2029}.json-editor--popover-template .label{color:#505c75;font-size:10px;font-weight:700;text-transform:uppercase}.json-editor--popover-template .separator{height:8px;background:transparent}ngx-json-editor-node-flat{max-width:100%}.json-tree-node-flat .indentation{flex:1 0 20px}.json-tree-node-flat .node-container{display:flex}.json-tree-node-flat .node{background-color:#313847;box-shadow:0 2px 7px rgba(0,0,0,.2);border-radius:2px;display:flex;padding:25px 10px;position:relative;flex:0 1 100%;height:120px;min-width:0}.json-tree-node-flat .node.compressed{height:80px}.json-tree-node-flat .node .error-box{position:absolute;width:100%;height:100%;border-radius:2px;top:0;left:0;border:2px solid #ff4514}.json-tree-node-flat .node .left-options{display:flex;flex-direction:column;justify-content:center;margin-right:10px;color:#72819f;flex:0 0 15px}.json-tree-node-flat .node .left-options .required-indicator{position:absolute;top:12px;left:12px}.json-tree-node-flat .node .left-options .required-indicator span{display:flex}.json-tree-node-flat .node .left-options .required-indicator span svg path{fill:#72819f;stroke:#72819f}.json-tree-node-flat .node .left-options .required-indicator span.not-required svg path{fill:transparent}.json-tree-node-flat .node .left-options .required-indicator span.invalid svg path{fill:#ff4514;stroke:#ff4514}.json-tree-node-flat .node .left-options .drag-drop-handle{cursor:-webkit-grab;cursor:grab}.json-tree-node-flat .node .node-content{display:flex;justify-content:space-between;flex:0 0 100%;align-items:center;min-width:0}.json-tree-node-flat .node .node-content.extra-margin{margin-top:-15px}.json-tree-node-flat .node .node-content .node-info{flex:0 0 40%;padding-right:25px;overflow:hidden}.json-tree-node-flat .node .node-content .node-input{flex:0 1 60%;padding-top:1em}.json-tree-node-flat .node .node-content .node-input ngx-input{padding:0;margin:0}.json-tree-node-flat .node .node-content .node-input ngx-input .ngx-input-hint{min-height:0}.json-tree-node-flat .node .node-content .node-input .code:hover button{display:inline}.json-tree-node-flat .node .node-content .node-input .code input{color:#cdd2dd}.json-tree-node-flat .node .node-content .node-input .code button{display:none;color:#72819f}.json-tree-node-flat .node .node-content .node-input .input-error{color:#ff4514;min-height:1.2em}"], encapsulation: 2, changeDetection: 0 });
JsonEditorNodeFlatComponent.ctorParameters = () => [
    { type: DialogService },
    { type: DomSanitizer }
];
JsonEditorNodeFlatComponent.propDecorators = {
    model: [{ type: Input }],
    schema: [{ type: Input }],
    typeCheckOverrides: [{ type: Input }],
    errors: [{ type: Input }],
    label: [{ type: Input }],
    level: [{ type: Input }],
    schemaBuilderMode: [{ type: Input }],
    schemaRef: [{ type: Input }],
    formats: [{ type: Input }],
    arrayItem: [{ type: Input }],
    hideRoot: [{ type: Input }],
    arrayName: [{ type: Input }],
    compressed: [{ type: Input }],
    indentationArray: [{ type: Input }],
    showKnownProperties: [{ type: Input }],
    isDuplicated: [{ type: Input }],
    updatePropertyNameEvent: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(JsonEditorNodeFlatComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-json-editor-node-flat',
                template: "<div *ngIf=\"model !== undefined\" class=\"json-tree-node-flat\">\n  <div class=\"node-container\" *ngIf=\"!(nextLevel === -1 && hideRoot)\">\n    <div class=\"indentation\" *ngIf=\"nextLevel > 0\" [style.left]=\"-1 * (nextLevel * 20) + 'px'\">\n      <span class=\"json-editor--vertical-separator\" *ngFor=\"let separator of indentationArray\"></span>\n    </div>\n    <div class=\"node\" [class.compressed]=\"compressed\">\n      <div class=\"error-box\" *ngIf=\"(!valid && !schemaBuilderMode) || isDuplicated\"></div>\n\n      <div class=\"left-options\">\n        <ng-container *ngIf=\"hideRoot || (nextLevel > 0 && !arrayItem)\">\n          <div class=\"required-indicator\">\n            <span\n              *ngIf=\"required\"\n              [class.invalid]=\"(!childrenValid && !schemaBuilderMode) || isDuplicated\"\n              [innerHtml]=\"requiredIndicator\"\n            ></span>\n            <span *ngIf=\"!required && schemaBuilderMode\" class=\"not-required\" [innerHtml]=\"requiredIndicator\"></span>\n          </div>\n          <ng-content select=\"[cdkDragHandle]\"></ng-content>\n        </ng-container>\n      </div>\n\n      <div class=\"node-content\" [class.extra-margin]=\"schema.nameEditable && !schemaBuilderMode\">\n        <div class=\"node-info\">\n          <ngx-json-editor-node-info\n            [nameEditable]=\"schema.nameEditable && !schemaBuilderMode\"\n            [propertyName]=\"arrayName ? arrayName : schema?.propertyName\"\n            (propertyNameChange)=\"updatePropertyName(schema.id, $event)\"\n            [title]=\"schema?.title || label || (arrayItem ? 'Items' : schema?.propertyName)\"\n            [type]=\"(schema?.format || schema?.type | titlecase) + (schema?.enum?.length ? ' + Enum' : '')\"\n            [description]=\"schema?.description\"\n            [examples]=\"schema?.examples\"\n            [compressed]=\"compressed\"\n          >\n          </ngx-json-editor-node-info>\n        </div>\n\n        <div *ngIf=\"!schemaBuilderMode\" class=\"node-input\">\n          <!-- Number | Integer -->\n          <div *ngIf=\"schema?.type === 'number' || schema?.type === 'integer'\">\n            <ngx-input\n              type=\"number\"\n              [ngModel]=\"model\"\n              (ngModelChange)=\"updateModel($event)\"\n              [requiredIndicator]=\"false\"\n              [required]=\"required\"\n              [disabled]=\"isDuplicated\"\n            ></ngx-input>\n          </div>\n\n          <!-- Boolean -->\n          <div *ngIf=\"schema?.type === 'boolean'\">\n            <ngx-toggle\n              class=\"toggle-input\"\n              [ngModel]=\"model\"\n              (ngModelChange)=\"updateModel($event)\"\n              [label]=\"model | json\"\n              [disabled]=\"isDuplicated\"\n            >\n            </ngx-toggle>\n          </div>\n\n          <!-- String -->\n          <ng-container *ngIf=\"schema?.type === 'string'\">\n            <!-- No format -->\n            <div *ngIf=\"!schema.format\">\n              <ngx-input\n                *ngIf=\"!schema?.enum\"\n                type=\"textarea\"\n                [ngModel]=\"model\"\n                (ngModelChange)=\"updateModel($event)\"\n                [requiredIndicator]=\"false\"\n                [required]=\"required\"\n                [disabled]=\"isDuplicated\"\n                [autosize]=\"false\"\n              >\n              </ngx-input>\n\n              <ngx-select\n                [filterable]=\"false\"\n                *ngIf=\"schema?.enum\"\n                [ngModel]=\"[model]\"\n                (ngModelChange)=\"updateModel($event[0])\"\n                [required]=\"required\"\n                [disabled]=\"isDuplicated\"\n              >\n                <ngx-select-option *ngFor=\"let option of schema.enum\" [name]=\"option\" [value]=\"option\">\n                </ngx-select-option>\n              </ngx-select>\n            </div>\n\n            <!-- Password -->\n            <div *ngIf=\"schema.format === 'password'\">\n              <ngx-input\n                type=\"password\"\n                [ngModel]=\"model\"\n                (ngModelChange)=\"updateModel($event)\"\n                [requiredIndicator]=\"false\"\n                [required]=\"required\"\n                [disabled]=\"isDuplicated\"\n              ></ngx-input>\n            </div>\n\n            <!-- Date -->\n            <div *ngIf=\"schema.format === 'date'\">\n              <ngx-input\n                type=\"date\"\n                [ngModel]=\"model\"\n                (ngModelChange)=\"updateModel($event)\"\n                [requiredIndicator]=\"false\"\n                [required]=\"required\"\n                [disabled]=\"isDuplicated\"\n              ></ngx-input>\n            </div>\n\n            <!-- DateTime -->\n            <div *ngIf=\"schema.format === 'date-time'\">\n              <ngx-input\n                type=\"datetime-local\"\n                [ngModel]=\"model\"\n                (ngModelChange)=\"updateModel($event)\"\n                [requiredIndicator]=\"false\"\n                [required]=\"required\"\n                [disabled]=\"isDuplicated\"\n              ></ngx-input>\n            </div>\n\n            <!-- Code -->\n            <div *ngIf=\"schema.format === 'code'\" class=\"code\">\n              <ngx-input\n                type=\"text\"\n                [ngModel]=\"model\"\n                [requiredIndicator]=\"false\"\n                [required]=\"required\"\n                [disabled]=\"true\"\n              >\n                <ngx-input-suffix>\n                  <button [disabled]=\"isDuplicated\" (click)=\"openCodeEditor()\">\n                    <ngx-icon fontIcon=\"edit\" class=\"edit-code-icon\" ngx-tooltip tooltipTitle=\"Edit Code\"> </ngx-icon>\n                  </button>\n                </ngx-input-suffix>\n              </ngx-input>\n            </div>\n\n            <ng-template #codeEditorTpl>\n              <div class=\"code-editor\">\n                <ngx-select\n                  label=\"Language Mode\"\n                  [ngModel]=\"[editorConfig.mode.name]\"\n                  (ngModelChange)=\"selectEditorMode($event[0])\"\n                >\n                  <ngx-select-option *ngFor=\"let mode of editorModes\" [name]=\"mode.label\" [value]=\"mode.name\">\n                  </ngx-select-option>\n                </ngx-select>\n\n                <ngx-button\n                  class=\"btn btn-primary save-code-button\"\n                  (click)=\"updateModel(editorModel); closeCodeEditor()\"\n                >\n                  Save</ngx-button\n                >\n\n                <ngx-codemirror\n                  *ngIf=\"editorVisible\"\n                  [ngModel]=\"editorModel\"\n                  (ngModelChange)=\"editorModel = $event\"\n                  [config]=\"editorConfig\"\n                  class=\"code-editor\"\n                >\n                </ngx-codemirror>\n              </div>\n            </ng-template>\n          </ng-container>\n\n          <div class=\"input-error\">\n            <span *ngFor=\"let error of ownErrors\">{{ error.message }}</span>\n          </div>\n        </div>\n\n        <div *ngIf=\"schemaBuilderMode\" class=\"node-constrains\">\n          <div class=\"tag\" *ngIf=\"schema.minItems\">Min Items: {{ schema.minItems }}</div>\n          <div class=\"tag\" *ngIf=\"schema.maxItems\">Max Items: {{ schema.maxItems }}</div>\n          <div class=\"tag\" *ngIf=\"schema.minimum\">Minimum: {{ schema.minimum }}</div>\n          <div class=\"tag\" *ngIf=\"schema.maximum\">Maximum: {{ schema.maximum }}</div>\n          <div class=\"tag\" *ngIf=\"schema.minLength\">Min Length: {{ schema.minLength }}</div>\n          <div class=\"tag\" *ngIf=\"schema.maxLength\">Max Length: {{ schema.maxLength }}</div>\n          <div class=\"tag\" *ngIf=\"schema.pattern\">Pattern: Yes</div>\n        </div>\n        <ng-content select=\"[node-options]\"></ng-content>\n      </div>\n    </div>\n  </div>\n\n  <!-- Object -->\n  <div *ngIf=\"schema?.type === 'object'\">\n    <ngx-json-object-node-flat\n      [schema]=\"schema\"\n      [schemaRef]=\"schemaRef\"\n      [model]=\"model\"\n      [expanded]=\"expanded\"\n      [hideRoot]=\"hideRoot\"\n      (modelChange)=\"updateModel($event)\"\n      [path]=\"path\"\n      [errors]=\"childrenErrors\"\n      [isDuplicated]=\"isDuplicated\"\n      [typeCheckOverrides]=\"typeCheckOverrides\"\n      [level]=\"nextLevel\"\n      [compressed]=\"compressed\"\n      [schemaBuilderMode]=\"schemaBuilderMode\"\n      [formats]=\"formats\"\n      [showKnownProperties]=\"showKnownProperties\"\n      (schemaUpdate)=\"schemaUpdate.emit(schemaRef)\"\n    >\n    </ngx-json-object-node-flat>\n  </div>\n\n  <!-- Array -->\n  <div *ngIf=\"schema?.type === 'array'\">\n    <ngx-json-array-node-flat\n      [schema]=\"schema\"\n      [schemaRef]=\"schemaRef\"\n      [model]=\"model\"\n      [expanded]=\"expanded\"\n      [formats]=\"formats\"\n      [hideRoot]=\"hideRoot\"\n      (modelChange)=\"updateModel($event)\"\n      [path]=\"path\"\n      [compressed]=\"compressed\"\n      [errors]=\"childrenErrors\"\n      [typeCheckOverrides]=\"typeCheckOverrides\"\n      [level]=\"nextLevel\"\n      [isDuplicated]=\"isDuplicated\"\n      [schemaBuilderMode]=\"schemaBuilderMode\"\n      [showKnownProperties]=\"showKnownProperties\"\n      (schemaUpdate)=\"schemaUpdate.emit(schemaRef)\"\n    >\n    </ngx-json-array-node-flat>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".json-tree-node-flat .indentation{border-radius:2px 0 0 2px;display:flex;align-items:center;background-color:rgba(49,56,71,.4)}.json-editor--vertical-separator{background-color:#3b4457;opacity:.5;border-radius:2px;width:1px;height:calc(100% - 4px);margin-right:20px}.json-editor--vertical-separator:first-child{margin-left:20px}.json-editor--popover-template{font-weight:600;font-size:12px;line-height:13px;max-width:300px;color:#1c2029}.json-editor--popover-template .label{color:#505c75;font-size:10px;font-weight:700;text-transform:uppercase}.json-editor--popover-template .separator{height:8px;background:transparent}ngx-json-editor-node-flat{max-width:100%}.json-tree-node-flat .indentation{flex:1 0 20px}.json-tree-node-flat .node-container{display:flex}.json-tree-node-flat .node{background-color:#313847;box-shadow:0 2px 7px rgba(0,0,0,.2);border-radius:2px;display:flex;padding:25px 10px;position:relative;flex:0 1 100%;height:120px;min-width:0}.json-tree-node-flat .node.compressed{height:80px}.json-tree-node-flat .node .error-box{position:absolute;width:100%;height:100%;border-radius:2px;top:0;left:0;border:2px solid #ff4514}.json-tree-node-flat .node .left-options{display:flex;flex-direction:column;justify-content:center;margin-right:10px;color:#72819f;flex:0 0 15px}.json-tree-node-flat .node .left-options .required-indicator{position:absolute;top:12px;left:12px}.json-tree-node-flat .node .left-options .required-indicator span{display:flex}.json-tree-node-flat .node .left-options .required-indicator span svg path{fill:#72819f;stroke:#72819f}.json-tree-node-flat .node .left-options .required-indicator span.not-required svg path{fill:transparent}.json-tree-node-flat .node .left-options .required-indicator span.invalid svg path{fill:#ff4514;stroke:#ff4514}.json-tree-node-flat .node .left-options .drag-drop-handle{cursor:-webkit-grab;cursor:grab}.json-tree-node-flat .node .node-content{display:flex;justify-content:space-between;flex:0 0 100%;align-items:center;min-width:0}.json-tree-node-flat .node .node-content.extra-margin{margin-top:-15px}.json-tree-node-flat .node .node-content .node-info{flex:0 0 40%;padding-right:25px;overflow:hidden}.json-tree-node-flat .node .node-content .node-input{flex:0 1 60%;padding-top:1em}.json-tree-node-flat .node .node-content .node-input ngx-input{padding:0;margin:0}.json-tree-node-flat .node .node-content .node-input ngx-input .ngx-input-hint{min-height:0}.json-tree-node-flat .node .node-content .node-input .code:hover button{display:inline}.json-tree-node-flat .node .node-content .node-input .code input{color:#cdd2dd}.json-tree-node-flat .node .node-content .node-input .code button{display:none;color:#72819f}.json-tree-node-flat .node .node-content .node-input .input-error{color:#ff4514;min-height:1.2em}"]
            }]
    }], function () { return [{ type: ɵngcc1.DialogService }, { type: ɵngcc2.DomSanitizer }]; }, { arrayItem: [{
            type: Input
        }], hideRoot: [{
            type: Input
        }], arrayName: [{
            type: Input
        }], showKnownProperties: [{
            type: Input
        }], isDuplicated: [{
            type: Input
        }], updatePropertyNameEvent: [{
            type: Output
        }], model: [{
            type: Input
        }], schema: [{
            type: Input
        }], typeCheckOverrides: [{
            type: Input
        }], errors: [{
            type: Input
        }], label: [{
            type: Input
        }], level: [{
            type: Input
        }], schemaBuilderMode: [{
            type: Input
        }], schemaRef: [{
            type: Input
        }], formats: [{
            type: Input
        }], compressed: [{
            type: Input
        }], indentationArray: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1lZGl0b3Itbm9kZS1mbGF0LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9qc29uLWVkaXRvci9qc29uLWVkaXRvci1mbGF0L2pzb24tZWRpdG9yLW5vZGUtZmxhdC9qc29uLWVkaXRvci1ub2RlLWZsYXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osTUFBTSxFQUNOLHVCQUF1QixFQUd4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUscUJBQXFCLEVBQXdDLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTdkcsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGNBQWM7QUFBRyxJQXVDaEUsWUFBbUIsVUFBeUIsRUFBVSxZQUEwQjtBQUNsRixRQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN0QixRQUZxQixlQUFVLEdBQVYsVUFBVSxDQUFlO0FBQUMsUUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBYztBQUFDLFFBcEJ4RSxjQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzdCLFFBQ1csYUFBUSxHQUFHLEtBQUssQ0FBQztBQUM1QixRQUNXLGNBQVMsR0FBRyxFQUFFLENBQUM7QUFDMUIsUUFLVyx3QkFBbUIsR0FBRyxLQUFLLENBQUM7QUFDdkMsUUFDVyxpQkFBWSxHQUFHLEtBQUssQ0FBQztBQUNoQyxRQUNZLDRCQUF1QixHQUFHLElBQUksWUFBWSxFQUF5QyxDQUFDO0FBQ2hHLFFBR0UsY0FBUyxHQUFHLENBQUMsQ0FBQztBQUNoQixRQUdJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDOUYsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXLENBQUMsT0FBc0I7QUFDcEMsUUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLFFBQUksSUFBSSxPQUFPLElBQUksT0FBTyxJQUFJLFVBQVUsSUFBSSxPQUFPLEVBQUU7QUFDckQsWUFBTSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDNUYsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0Usa0JBQWtCLENBQUMsRUFBbUIsRUFBRSxJQUFZO0FBQUksUUFDdEQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3BELElBQUUsQ0FBQztBQUNIO3VEQTdEQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLDJCQUEyQixrQkFDckM7Ozs7Ozswd0dBS0c7QUFBQztBQUFxRCxZQVhsRCxhQUFhO0FBQUksWUFDakIsWUFBWTtBQUFHO0FBQUc7QUFDckIsb0JBVUgsS0FBSztBQUFLLHFCQUVWLEtBQUs7QUFBSyxpQ0FFVixLQUFLO0FBQUsscUJBRVYsS0FBSztBQUFLLG9CQUVWLEtBQUs7QUFBSyxvQkFFVixLQUFLO0FBQUssZ0NBRVYsS0FBSztBQUFLLHdCQUVWLEtBQUs7QUFBSyxzQkFFVixLQUFLO0FBQUssd0JBRVYsS0FBSztBQUFLLHVCQUVWLEtBQUs7QUFBSyx3QkFFVixLQUFLO0FBQUsseUJBRVYsS0FBSztBQUFLLCtCQUVWLEtBQUs7QUFBSyxrQ0FFVixLQUFLO0FBQUssMkJBRVYsS0FBSztBQUFLLHNDQUVWLE1BQU07QUFBSTs7Ozs7eXBDQXRDMEMsa0JBRXJELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSwyd0ZBQ2hEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBa0NjO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEpzb25FZGl0b3JOb2RlIH0gZnJvbSAnLi4vLi4vanNvbi1lZGl0b3Itbm9kZSc7XG5cbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9kaWFsb2cvZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgcmVxdWlyZWRJbmRpY2F0b3JJY29uLCBKU09ORWRpdG9yU2NoZW1hLCBKc29uU2NoZW1hRGF0YVR5cGUgfSBmcm9tICcuLi8uLi9qc29uLWVkaXRvci5oZWxwZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtanNvbi1lZGl0b3Itbm9kZS1mbGF0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2pzb24tZWRpdG9yLW5vZGUtZmxhdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2pzb24tZWRpdG9yLW5vZGUtZmxhdC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBKc29uRWRpdG9yTm9kZUZsYXRDb21wb25lbnQgZXh0ZW5kcyBKc29uRWRpdG9yTm9kZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbW9kZWw6IGFueTtcblxuICBASW5wdXQoKSBzY2hlbWE6IEpTT05FZGl0b3JTY2hlbWE7XG5cbiAgQElucHV0KCkgdHlwZUNoZWNrT3ZlcnJpZGVzPzogYW55O1xuXG4gIEBJbnB1dCgpIGVycm9yczogYW55W107XG5cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICBASW5wdXQoKSBsZXZlbDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIHNjaGVtYUJ1aWxkZXJNb2RlPzogYm9vbGVhbjtcblxuICBASW5wdXQoKSBzY2hlbWFSZWY/OiBKU09ORWRpdG9yU2NoZW1hO1xuXG4gIEBJbnB1dCgpIGZvcm1hdHM6IEpzb25TY2hlbWFEYXRhVHlwZVtdO1xuXG4gIEBJbnB1dCgpIGFycmF5SXRlbSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGhpZGVSb290ID0gZmFsc2U7XG5cbiAgQElucHV0KCkgYXJyYXlOYW1lID0gJyc7XG5cbiAgQElucHV0KCkgY29tcHJlc3NlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBpbmRlbnRhdGlvbkFycmF5OiBudW1iZXJbXTtcblxuICBASW5wdXQoKSBzaG93S25vd25Qcm9wZXJ0aWVzID0gZmFsc2U7XG5cbiAgQElucHV0KCkgaXNEdXBsaWNhdGVkID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHVwZGF0ZVByb3BlcnR5TmFtZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGlkOiBzdHJpbmcgfCBudW1iZXI7IG5hbWU6IHN0cmluZyB9PigpO1xuXG4gIHJlcXVpcmVkSW5kaWNhdG9yOiBTYWZlSHRtbDtcblxuICBuZXh0TGV2ZWwgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dNbmdyOiBEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIGRvbVNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XG4gICAgc3VwZXIoZGlhbG9nTW5ncik7XG4gICAgdGhpcy5yZXF1aXJlZEluZGljYXRvciA9IHRoaXMuZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHJlcXVpcmVkSW5kaWNhdG9ySWNvbik7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG4gICAgaWYgKCdsZXZlbCcgaW4gY2hhbmdlcyB8fCAnaGlkZVJvb3QnIGluIGNoYW5nZXMpIHtcbiAgICAgIHRoaXMubmV4dExldmVsID0gdGhpcy5sZXZlbCA9PT0gdW5kZWZpbmVkID8gKHRoaXMuaGlkZVJvb3QgPyAtMSA6IDApIDogdGhpcy5sZXZlbCArIDE7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUHJvcGVydHlOYW1lKGlkOiBzdHJpbmcgfCBudW1iZXIsIG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlUHJvcGVydHlOYW1lRXZlbnQuZW1pdCh7IGlkLCBuYW1lIH0pO1xuICB9XG59XG4iXX0=