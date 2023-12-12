import { Component, Input, EventEmitter, Output, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from '../../../../../dialog/dialog.service';
import { propTypes } from '../../../../json-editor.helper';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../../../../dialog/dialog.service';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '../../../../../tabs/tabs.component';
import * as ɵngcc4 from '../../../../../tabs/tab.component';
import * as ɵngcc5 from '../../../orderable-inputs-list/orderable-inputs-list.component';
import * as ɵngcc6 from '../../../../../input/input.component';
import * as ɵngcc7 from '@angular/forms';
import * as ɵngcc8 from '../../../../../select/select.component';
import * as ɵngcc9 from '../../../../../select/select-option.directive';
import * as ɵngcc10 from '../../../../../input/input-suffix.component';
import * as ɵngcc11 from '../../../../../checkbox/checkbox.component';

function PropertyConfigComponent_ngx_tabs_7_ngx_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-input", 11);
    ɵngcc0.ɵɵlistener("ngModelChange", function PropertyConfigComponent_ngx_tabs_7_ngx_input_2_Template_ngx_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.editableProperty.propertyName = $event; });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r1.editableProperty.propertyName)("label", "PROPERTY NAME")("required", true)("hint", "Must only contain A-Z, a-z, 0-9 or _");
} }
function PropertyConfigComponent_ngx_tabs_7_ngx_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-input", 12);
    ɵngcc0.ɵɵlistener("ngModelChange", function PropertyConfigComponent_ngx_tabs_7_ngx_input_3_Template_ngx_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.editableProperty.title = $event; });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r2.editableProperty.title)("label", "PROPERTY TITLE")("hint", "A human-readable name for this property");
} }
function PropertyConfigComponent_ngx_tabs_7_ngx_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-input", 12);
    ɵngcc0.ɵɵlistener("ngModelChange", function PropertyConfigComponent_ngx_tabs_7_ngx_input_4_Template_ngx_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r9 = ɵngcc0.ɵɵnextContext(2); return ctx_r9.editableProperty.description = $event; });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r3.editableProperty.description)("label", "PROPERTY DESCRIPTION")("hint", "A description for the property");
} }
function PropertyConfigComponent_ngx_tabs_7_ng_container_5_ngx_select_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ngx-select-option", 20);
} if (rf & 2) {
    const propType_r20 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("name", propType_r20)("value", propType_r20);
} }
function PropertyConfigComponent_ngx_tabs_7_ng_container_5_ngx_select_3_ngx_select_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ngx-select-option", 20);
} if (rf & 2) {
    const propFormat_r22 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("name", propFormat_r22.name)("value", propFormat_r22.schema.format);
} }
const _c0 = function (a0) { return [a0]; };
function PropertyConfigComponent_ngx_tabs_7_ng_container_5_ngx_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-select", 21);
    ɵngcc0.ɵɵlistener("ngModelChange", function PropertyConfigComponent_ngx_tabs_7_ng_container_5_ngx_select_3_Template_ngx_select_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r24); const ctx_r23 = ɵngcc0.ɵɵnextContext(3); return ctx_r23.updateFormat($event[0]); });
    ɵngcc0.ɵɵtemplate(1, PropertyConfigComponent_ngx_tabs_7_ng_container_5_ngx_select_3_ngx_select_option_1_Template, 1, 2, "ngx-select-option", 14);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("filterable", false)("ngModel", ɵngcc0.ɵɵpureFunction1(4, _c0, ctx_r12.editableProperty.format))("label", "FORMAT");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r12.formats);
} }
function PropertyConfigComponent_ngx_tabs_7_ng_container_5_ngx_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-input", 22);
    ɵngcc0.ɵɵlistener("ngModelChange", function PropertyConfigComponent_ngx_tabs_7_ng_container_5_ngx_input_4_Template_ngx_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r25 = ɵngcc0.ɵɵnextContext(3); return ctx_r25.newEnumValue = $event; });
    ɵngcc0.ɵɵelementStart(1, "ngx-input-suffix");
    ɵngcc0.ɵɵelementStart(2, "button", 23);
    ɵngcc0.ɵɵlistener("click", function PropertyConfigComponent_ngx_tabs_7_ng_container_5_ngx_input_4_Template_button_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r27 = ɵngcc0.ɵɵnextContext(3); return ctx_r27.addEnumValue(); });
    ɵngcc0.ɵɵelement(3, "i", 24);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r13.newEnumValue)("label", "ADD ENUM VALUE");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", !ctx_r13.newEnumValue.length);
} }
function PropertyConfigComponent_ngx_tabs_7_ng_container_5_ng_container_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 29);
    ɵngcc0.ɵɵelementStart(1, "span");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "button", 30);
    ɵngcc0.ɵɵlistener("click", function PropertyConfigComponent_ngx_tabs_7_ng_container_5_ng_container_5_div_1_div_1_Template_button_click_3_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r33); const value_r31 = restoredCtx.$implicit; const ctx_r32 = ɵngcc0.ɵɵnextContext(5); return ctx_r32.removeEnumValue(value_r31); });
    ɵngcc0.ɵɵelement(4, "i", 31);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r31 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(value_r31);
} }
function PropertyConfigComponent_ngx_tabs_7_ng_container_5_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 27);
    ɵngcc0.ɵɵtemplate(1, PropertyConfigComponent_ngx_tabs_7_ng_container_5_ng_container_5_div_1_div_1_Template, 5, 1, "div", 28);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r28.editableProperty.enum);
} }
function PropertyConfigComponent_ngx_tabs_7_ng_container_5_ng_container_5_ngx_select_option_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ngx-select-option", 20);
} if (rf & 2) {
    const value_r34 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("name", value_r34)("value", value_r34);
} }
function PropertyConfigComponent_ngx_tabs_7_ng_container_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r36 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, PropertyConfigComponent_ngx_tabs_7_ng_container_5_ng_container_5_div_1_Template, 2, 1, "div", 25);
    ɵngcc0.ɵɵelementStart(2, "ngx-select", 26);
    ɵngcc0.ɵɵlistener("ngModelChange", function PropertyConfigComponent_ngx_tabs_7_ng_container_5_ng_container_5_Template_ngx_select_ngModelChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r36); const ctx_r35 = ɵngcc0.ɵɵnextContext(3); return ctx_r35.updateDefault($event[0]); });
    ɵngcc0.ɵɵtemplate(3, PropertyConfigComponent_ngx_tabs_7_ng_container_5_ng_container_5_ngx_select_option_3_Template, 1, 2, "ngx-select-option", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r14.editableProperty.enum == null ? null : ctx_r14.editableProperty.enum.length);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("filterable", false)("ngModel", ɵngcc0.ɵɵpureFunction1(5, _c0, ctx_r14.editableProperty.default))("label", "DEFAULT");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r14.editableProperty.enum);
} }
function PropertyConfigComponent_ngx_tabs_7_ng_container_5_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r38 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 32);
    ɵngcc0.ɵɵelementStart(1, "ngx-input", 33);
    ɵngcc0.ɵɵlistener("ngModelChange", function PropertyConfigComponent_ngx_tabs_7_ng_container_5_div_6_Template_ngx_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r38); const ctx_r37 = ɵngcc0.ɵɵnextContext(3); return ctx_r37.editableProperty.minimum = $event; });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "ngx-input", 33);
    ɵngcc0.ɵɵlistener("ngModelChange", function PropertyConfigComponent_ngx_tabs_7_ng_container_5_div_6_Template_ngx_input_ngModelChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r38); const ctx_r39 = ɵngcc0.ɵɵnextContext(3); return ctx_r39.editableProperty.maximum = $event; });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r15.editableProperty.minimum)("label", "MINIMUM");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r15.editableProperty.maximum)("label", "MAXIMUM");
} }
function PropertyConfigComponent_ngx_tabs_7_ng_container_5_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r41 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 32);
    ɵngcc0.ɵɵelementStart(1, "ngx-input", 33);
    ɵngcc0.ɵɵlistener("ngModelChange", function PropertyConfigComponent_ngx_tabs_7_ng_container_5_div_7_Template_ngx_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r41); const ctx_r40 = ɵngcc0.ɵɵnextContext(3); return ctx_r40.editableProperty.minLength = $event; });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "ngx-input", 33);
    ɵngcc0.ɵɵlistener("ngModelChange", function PropertyConfigComponent_ngx_tabs_7_ng_container_5_div_7_Template_ngx_input_ngModelChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r41); const ctx_r42 = ɵngcc0.ɵɵnextContext(3); return ctx_r42.editableProperty.maxLength = $event; });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r16.editableProperty.minLength)("label", "MINIMUM LENGTH");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r16.editableProperty.maxLength)("label", "MAXIMUM LENGTH");
} }
function PropertyConfigComponent_ngx_tabs_7_ng_container_5_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r44 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 32);
    ɵngcc0.ɵɵelementStart(1, "ngx-input", 33);
    ɵngcc0.ɵɵlistener("ngModelChange", function PropertyConfigComponent_ngx_tabs_7_ng_container_5_div_8_Template_ngx_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r44); const ctx_r43 = ɵngcc0.ɵɵnextContext(3); return ctx_r43.editableProperty.minItems = $event; });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "ngx-input", 33);
    ɵngcc0.ɵɵlistener("ngModelChange", function PropertyConfigComponent_ngx_tabs_7_ng_container_5_div_8_Template_ngx_input_ngModelChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r44); const ctx_r45 = ɵngcc0.ɵɵnextContext(3); return ctx_r45.editableProperty.maxItems = $event; });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r17.editableProperty.minItems)("label", "MIN ITEMS");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r17.editableProperty.maxItems)("label", "MAX ITEMS");
} }
function PropertyConfigComponent_ngx_tabs_7_ng_container_5_ngx_input_9_Template(rf, ctx) { if (rf & 1) {
    const _r47 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-input", 34);
    ɵngcc0.ɵɵlistener("ngModelChange", function PropertyConfigComponent_ngx_tabs_7_ng_container_5_ngx_input_9_Template_ngx_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r47); const ctx_r46 = ɵngcc0.ɵɵnextContext(3); return ctx_r46.editableProperty.pattern = $event; });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r18.editableProperty.pattern)("label", "PATTERN TO MATCH");
} }
function PropertyConfigComponent_ngx_tabs_7_ng_container_5_ngx_checkbox_10_Template(rf, ctx) { if (rf & 1) {
    const _r49 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-checkbox", 35);
    ɵngcc0.ɵɵlistener("ngModelChange", function PropertyConfigComponent_ngx_tabs_7_ng_container_5_ngx_checkbox_10_Template_ngx_checkbox_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r49); const ctx_r48 = ɵngcc0.ɵɵnextContext(3); return ctx_r48.required = $event; });
    ɵngcc0.ɵɵtext(1, " Required ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r19.required);
} }
const _c1 = function () { return ["string", "number", "integer"]; };
function PropertyConfigComponent_ngx_tabs_7_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r51 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "ngx-select", 13);
    ɵngcc0.ɵɵlistener("ngModelChange", function PropertyConfigComponent_ngx_tabs_7_ng_container_5_Template_ngx_select_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r51); const ctx_r50 = ɵngcc0.ɵɵnextContext(2); return ctx_r50.updateType($event[0]); });
    ɵngcc0.ɵɵtemplate(2, PropertyConfigComponent_ngx_tabs_7_ng_container_5_ngx_select_option_2_Template, 1, 2, "ngx-select-option", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, PropertyConfigComponent_ngx_tabs_7_ng_container_5_ngx_select_3_Template, 2, 6, "ngx-select", 15);
    ɵngcc0.ɵɵtemplate(4, PropertyConfigComponent_ngx_tabs_7_ng_container_5_ngx_input_4_Template, 4, 3, "ngx-input", 16);
    ɵngcc0.ɵɵtemplate(5, PropertyConfigComponent_ngx_tabs_7_ng_container_5_ng_container_5_Template, 4, 7, "ng-container", 4);
    ɵngcc0.ɵɵtemplate(6, PropertyConfigComponent_ngx_tabs_7_ng_container_5_div_6_Template, 3, 4, "div", 17);
    ɵngcc0.ɵɵtemplate(7, PropertyConfigComponent_ngx_tabs_7_ng_container_5_div_7_Template, 3, 4, "div", 17);
    ɵngcc0.ɵɵtemplate(8, PropertyConfigComponent_ngx_tabs_7_ng_container_5_div_8_Template, 3, 4, "div", 17);
    ɵngcc0.ɵɵtemplate(9, PropertyConfigComponent_ngx_tabs_7_ng_container_5_ngx_input_9_Template, 1, 2, "ngx-input", 18);
    ɵngcc0.ɵɵtemplate(10, PropertyConfigComponent_ngx_tabs_7_ng_container_5_ngx_checkbox_10_Template, 2, 1, "ngx-checkbox", 19);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("filterable", false)("ngModel", ɵngcc0.ɵɵpureFunction1(13, _c0, ctx_r4.editableProperty.type))("required", true)("label", "TYPE");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r4.propTypes);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.editableProperty.type === "string" && (ctx_r4.formats == null ? null : ctx_r4.formats.length) && !(ctx_r4.editableProperty.enum == null ? null : ctx_r4.editableProperty.enum.length));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.editableProperty.type === "string" && !ctx_r4.editableProperty.format);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.editableProperty.enum == null ? null : ctx_r4.editableProperty.enum.length);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.editableProperty.type === "number" || ctx_r4.editableProperty.type === "integer");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.editableProperty.type === "string");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.editableProperty.type === "array");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ɵngcc0.ɵɵpureFunction0(15, _c1).includes(ctx_r4.editableProperty.type));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r4.arrayItem);
} }
function PropertyConfigComponent_ngx_tabs_7_Template(rf, ctx) { if (rf & 1) {
    const _r53 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-tabs");
    ɵngcc0.ɵɵelementStart(1, "ngx-tab", 5);
    ɵngcc0.ɵɵtemplate(2, PropertyConfigComponent_ngx_tabs_7_ngx_input_2_Template, 1, 4, "ngx-input", 6);
    ɵngcc0.ɵɵtemplate(3, PropertyConfigComponent_ngx_tabs_7_ngx_input_3_Template, 1, 3, "ngx-input", 7);
    ɵngcc0.ɵɵtemplate(4, PropertyConfigComponent_ngx_tabs_7_ngx_input_4_Template, 1, 3, "ngx-input", 7);
    ɵngcc0.ɵɵtemplate(5, PropertyConfigComponent_ngx_tabs_7_ng_container_5_Template, 11, 16, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "ngx-tab", 8);
    ɵngcc0.ɵɵelementStart(7, "div", 9);
    ɵngcc0.ɵɵelementStart(8, "ngx-orderable-inputs-list", 10);
    ɵngcc0.ɵɵlistener("onUpdate", function PropertyConfigComponent_ngx_tabs_7_Template_ngx_orderable_inputs_list_onUpdate_8_listener($event) { ɵngcc0.ɵɵrestoreView(_r53); const ctx_r52 = ɵngcc0.ɵɵnextContext(); return ctx_r52.updateExamples($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.arrayItem && !ctx_r0.rootItem);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.arrayItem);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.arrayItem);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.rootItem);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("data", ctx_r0.editableProperty.examples);
} }
export class PropertyConfigComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
        this.formats = [];
        this.arrayItem = false;
        this.rootItem = false;
        this.updateSchema = new EventEmitter();
        this.propTypes = propTypes;
        this.required = false;
        this.newEnumValue = '';
    }
    ngOnInit() {
        this.editableProperty = JSON.parse(JSON.stringify(this.property));
        if (!this.arrayItem) {
            this.setRequired();
        }
    }
    applyChanges() {
        this.dialogService.destroyAll();
        this.updateSchema.emit({
            required: this.required,
            index: this.index,
            newProperty: this.editableProperty,
            oldProperty: this.property
        });
    }
    updateType(type) {
        if (this.editableProperty.type !== type) {
            this.editableProperty.type = type;
            delete this.editableProperty.format;
            this.cleanUpPropertyConstrains();
        }
    }
    updateExamples(examples) {
        if (examples && examples.length) {
            this.editableProperty.examples = examples;
        }
        else {
            delete this.editableProperty.examples;
        }
    }
    updateFormat(format) {
        if (this.editableProperty.format !== format) {
            this.editableProperty.type = 'string';
            this.editableProperty.format = format;
            this.cleanUpPropertyConstrains();
        }
    }
    addEnumValue() {
        const enumValues = (this.editableProperty.enum = this.editableProperty.enum || []);
        if (!enumValues.includes(this.newEnumValue)) {
            enumValues.push(this.newEnumValue);
            this.newEnumValue = '';
            delete this.editableProperty.format;
        }
    }
    updateDefault(enumValue) {
        if (!enumValue) {
            delete this.editableProperty.default;
        }
        else {
            this.editableProperty.default = enumValue;
        }
    }
    removeEnumValue(val) {
        const enumValues = this.editableProperty.enum;
        const index = enumValues.indexOf(val);
        if (index > -1) {
            enumValues.splice(index, 1);
        }
        if (!enumValues.length) {
            // Remove enum property if empty
            delete this.editableProperty.enum;
        }
    }
    cleanUpPropertyConstrains() {
        delete this.editableProperty.enum;
        delete this.editableProperty.properties;
        delete this.editableProperty.required;
        delete this.editableProperty.items;
        delete this.editableProperty.minimum;
        delete this.editableProperty.maximum;
        delete this.editableProperty.default;
        delete this.editableProperty.minLength;
        delete this.editableProperty.maxLength;
        delete this.editableProperty.minItems;
        delete this.editableProperty.maxItems;
    }
    setRequired() {
        this.required = this.schema.required.includes(this.property.propertyName);
    }
}
PropertyConfigComponent.ɵfac = function PropertyConfigComponent_Factory(t) { return new (t || PropertyConfigComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DialogService)); };
PropertyConfigComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: PropertyConfigComponent, selectors: [["ngx-property-config"]], inputs: { formats: "formats", arrayItem: "arrayItem", rootItem: "rootItem", property: "property", index: "index", schema: "schema" }, outputs: { updateSchema: "updateSchema" }, decls: 8, vars: 1, consts: [[1, "property-config"], [1, "header"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "ngx-icon", "ngx-check", "has-text"], [4, "ngIf"], ["label", "GENERAL"], ["type", "text", "name", "propertyName", 3, "ngModel", "label", "required", "hint", "ngModelChange", 4, "ngIf"], ["type", "text", 3, "ngModel", "label", "hint", "ngModelChange", 4, "ngIf"], ["label", "EXAMPLE VALUES"], [1, "examples-container"], [3, "data", "onUpdate"], ["type", "text", "name", "propertyName", 3, "ngModel", "label", "required", "hint", "ngModelChange"], ["type", "text", 3, "ngModel", "label", "hint", "ngModelChange"], [1, "prop-types-formats", 3, "filterable", "ngModel", "required", "label", "ngModelChange"], [3, "name", "value", 4, "ngFor", "ngForOf"], ["class", "prop-types-formats", 3, "filterable", "ngModel", "label", "ngModelChange", 4, "ngIf"], ["type", " text", "class", "new-enum-input", 3, "ngModel", "label", "ngModelChange", 4, "ngIf"], ["class", "constrain-row", 4, "ngIf"], ["type", "text", 3, "ngModel", "label", "ngModelChange", 4, "ngIf"], [3, "ngModel", "ngModelChange", 4, "ngIf"], [3, "name", "value"], [1, "prop-types-formats", 3, "filterable", "ngModel", "label", "ngModelChange"], ["type", " text", 1, "new-enum-input", 3, "ngModel", "label", "ngModelChange"], [3, "disabled", "click"], [1, "ngx-icon", "ngx-ngx-icon", "ngx-check"], ["class", "enum-edit", 4, "ngIf"], [3, "filterable", "ngModel", "label", "ngModelChange"], [1, "enum-edit"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "tag"], ["type", "button", 3, "click"], [1, "ngx-icon", "ngx-x"], [1, "constrain-row"], ["type", "number", 3, "ngModel", "label", "ngModelChange"], ["type", "text", 3, "ngModel", "label", "ngModelChange"], [3, "ngModel", "ngModelChange"]], template: function PropertyConfigComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "span");
        ɵngcc0.ɵɵtext(3, "Property Configuration");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "button", 2);
        ɵngcc0.ɵɵlistener("click", function PropertyConfigComponent_Template_button_click_4_listener() { return ctx.applyChanges(); });
        ɵngcc0.ɵɵelement(5, "i", 3);
        ɵngcc0.ɵɵtext(6, " Apply ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, PropertyConfigComponent_ngx_tabs_7_Template, 9, 5, "ngx-tabs", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵproperty("ngIf", ctx.property);
    } }, directives: [ɵngcc2.NgIf, ɵngcc3.TabsComponent, ɵngcc4.TabComponent, ɵngcc5.OrderableInputsListComponent, ɵngcc6.InputComponent, ɵngcc7.NgControlStatus, ɵngcc7.NgModel, ɵngcc7.RequiredValidator, ɵngcc8.SelectComponent, ɵngcc2.NgForOf, ɵngcc9.SelectOptionDirective, ɵngcc10.InputSuffixComponent, ɵngcc11.CheckboxComponent], styles: [".property-config .header{background:linear-gradient(180deg,#3b4457,#262c38);height:75px;display:flex;align-items:center;justify-content:space-between;padding:0 35px}.property-config .header span{font-size:19px;color:#fff}.property-config .header button{font-size:14px;line-height:18px}.property-config .ngx-tab-content{max-height:65vh;overflow:auto}.property-config .new-enum-input button{color:#696969}.property-config .new-enum-input .ngx-input-hint{display:none}.property-config .enum-edit button{font-size:9px;padding-right:0}.property-config .constrain-row{display:flex}.property-config .constrain-row ngx-input{flex-basis:50%}.property-config .constrain-row ngx-input:first-child{margin-right:30px}.property-config ngx-checkbox label{display:flex;align-items:center;margin:1.2rem 1.2rem 1.2rem 0!important}.property-config .prop-types-formats .ngx-select-dropdown-option,.property-config .prop-types-formats .ngx-select-input-name{text-transform:capitalize}.property-config .examples-container{border:1px solid #505c75;padding:14px}"], encapsulation: 2, changeDetection: 0 });
PropertyConfigComponent.ctorParameters = () => [
    { type: DialogService }
];
PropertyConfigComponent.propDecorators = {
    property: [{ type: Input }],
    index: [{ type: Input }],
    schema: [{ type: Input }],
    formats: [{ type: Input }],
    arrayItem: [{ type: Input }],
    rootItem: [{ type: Input }],
    updateSchema: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PropertyConfigComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-property-config',
                template: "<div class=\"property-config\">\n  <div class=\"header\">\n    <span>Property Configuration</span>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"applyChanges()\">\n      <i class=\"ngx-icon ngx-check has-text\"></i> Apply\n    </button>\n  </div>\n  <ngx-tabs *ngIf=\"property\">\n    <ngx-tab label=\"GENERAL\">\n      <!-- PROPERTY NAME -->\n      <ngx-input\n        *ngIf=\"!arrayItem && !rootItem\"\n        type=\"text\"\n        name=\"propertyName\"\n        [(ngModel)]=\"editableProperty.propertyName\"\n        [label]=\"'PROPERTY NAME'\"\n        [required]=\"true\"\n        [hint]=\"'Must only contain A-Z, a-z, 0-9 or _'\"\n      >\n      </ngx-input>\n\n      <!-- TITLE -->\n      <ngx-input\n        *ngIf=\"!arrayItem\"\n        type=\"text\"\n        [(ngModel)]=\"editableProperty.title\"\n        [label]=\"'PROPERTY TITLE'\"\n        [hint]=\"'A human-readable name for this property'\"\n      >\n      </ngx-input>\n\n      <!-- DESCRIPTION -->\n      <ngx-input\n        *ngIf=\"!arrayItem\"\n        type=\"text\"\n        [(ngModel)]=\"editableProperty.description\"\n        [label]=\"'PROPERTY DESCRIPTION'\"\n        [hint]=\"'A description for the property'\"\n      >\n      </ngx-input>\n\n      <ng-container *ngIf=\"!rootItem\">\n        <!-- TYPE -->\n        <ngx-select\n          class=\"prop-types-formats\"\n          [filterable]=\"false\"\n          [ngModel]=\"[editableProperty.type]\"\n          (ngModelChange)=\"updateType($event[0])\"\n          [required]=\"true\"\n          [label]=\"'TYPE'\"\n        >\n          <ngx-select-option *ngFor=\"let propType of propTypes\" [name]=\"propType\" [value]=\"propType\">\n          </ngx-select-option>\n        </ngx-select>\n\n        <!-- FORMAT -->\n        <ngx-select\n          class=\"prop-types-formats\"\n          *ngIf=\"editableProperty.type === 'string' && formats?.length && !editableProperty.enum?.length\"\n          [filterable]=\"false\"\n          [ngModel]=\"[editableProperty.format]\"\n          (ngModelChange)=\"updateFormat($event[0])\"\n          [label]=\"'FORMAT'\"\n        >\n          <ngx-select-option\n            *ngFor=\"let propFormat of formats\"\n            [name]=\"propFormat.name\"\n            [value]=\"propFormat.schema.format\"\n          >\n          </ngx-select-option>\n        </ngx-select>\n\n        <!-- ENUM -->\n        <ngx-input\n          *ngIf=\"editableProperty.type === 'string' && !editableProperty.format\"\n          type=\" text\"\n          class=\"new-enum-input\"\n          [(ngModel)]=\"newEnumValue\"\n          [label]=\"'ADD ENUM VALUE'\"\n        >\n          <ngx-input-suffix>\n            <button (click)=\"addEnumValue()\" [disabled]=\"!newEnumValue.length\">\n              <i class=\"ngx-icon ngx-ngx-icon ngx-check\"></i>\n            </button>\n          </ngx-input-suffix>\n        </ngx-input>\n\n        <ng-container *ngIf=\"editableProperty.enum?.length\">\n          <div *ngIf=\"editableProperty.enum?.length\" class=\"enum-edit\">\n            <div class=\"tag\" *ngFor=\"let value of editableProperty.enum\">\n              <span>{{ value }}</span>\n              <button type=\"button\" (click)=\"removeEnumValue(value)\">\n                <i class=\"ngx-icon ngx-x\"></i>\n              </button>\n            </div>\n          </div>\n\n          <ngx-select\n            [filterable]=\"false\"\n            [ngModel]=\"[editableProperty.default]\"\n            (ngModelChange)=\"updateDefault($event[0])\"\n            [label]=\"'DEFAULT'\"\n          >\n            <ngx-select-option *ngFor=\"let value of editableProperty.enum\" [name]=\"value\" [value]=\"value\">\n            </ngx-select-option>\n          </ngx-select>\n        </ng-container>\n\n        <!-- CONSTRAINS -->\n        <div class=\"constrain-row\" *ngIf=\"editableProperty.type === 'number' || editableProperty.type === 'integer'\">\n          <ngx-input type=\"number\" [(ngModel)]=\"editableProperty.minimum\" [label]=\"'MINIMUM'\"></ngx-input>\n\n          <ngx-input type=\"number\" [(ngModel)]=\"editableProperty.maximum\" [label]=\"'MAXIMUM'\"></ngx-input>\n        </div>\n\n        <div class=\"constrain-row\" *ngIf=\"editableProperty.type === 'string'\">\n          <ngx-input type=\"number\" [(ngModel)]=\"editableProperty.minLength\" [label]=\"'MINIMUM LENGTH'\"></ngx-input>\n\n          <ngx-input type=\"number\" [(ngModel)]=\"editableProperty.maxLength\" [label]=\"'MAXIMUM LENGTH'\"></ngx-input>\n        </div>\n\n        <div class=\"constrain-row\" *ngIf=\"editableProperty.type === 'array'\">\n          <ngx-input type=\"number\" [(ngModel)]=\"editableProperty.minItems\" [label]=\"'MIN ITEMS'\"></ngx-input>\n          <ngx-input type=\"number\" [(ngModel)]=\"editableProperty.maxItems\" [label]=\"'MAX ITEMS'\"></ngx-input>\n        </div>\n\n        <!-- PATTERN -->\n        <ngx-input\n          type=\"text\"\n          *ngIf=\"['string', 'number', 'integer'].includes($any(editableProperty.type))\"\n          [(ngModel)]=\"editableProperty.pattern\"\n          [label]=\"'PATTERN TO MATCH'\"\n        >\n        </ngx-input>\n\n        <!-- REQUIRED -->\n        <ngx-checkbox *ngIf=\"!arrayItem\" [(ngModel)]=\"required\">\n          Required\n        </ngx-checkbox>\n      </ng-container>\n    </ngx-tab>\n    <ngx-tab label=\"EXAMPLE VALUES\">\n      <div class=\"examples-container\">\n        <ngx-orderable-inputs-list\n          [data]=\"editableProperty.examples\"\n          (onUpdate)=\"updateExamples($event)\"\n        ></ngx-orderable-inputs-list>\n      </div>\n    </ngx-tab>\n  </ngx-tabs>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".property-config .header{background:linear-gradient(180deg,#3b4457,#262c38);height:75px;display:flex;align-items:center;justify-content:space-between;padding:0 35px}.property-config .header span{font-size:19px;color:#fff}.property-config .header button{font-size:14px;line-height:18px}.property-config .ngx-tab-content{max-height:65vh;overflow:auto}.property-config .new-enum-input button{color:#696969}.property-config .new-enum-input .ngx-input-hint{display:none}.property-config .enum-edit button{font-size:9px;padding-right:0}.property-config .constrain-row{display:flex}.property-config .constrain-row ngx-input{flex-basis:50%}.property-config .constrain-row ngx-input:first-child{margin-right:30px}.property-config ngx-checkbox label{display:flex;align-items:center;margin:1.2rem 1.2rem 1.2rem 0!important}.property-config .prop-types-formats .ngx-select-dropdown-option,.property-config .prop-types-formats .ngx-select-input-name{text-transform:capitalize}.property-config .examples-container{border:1px solid #505c75;padding:14px}"]
            }]
    }], function () { return [{ type: ɵngcc1.DialogService }]; }, { formats: [{
            type: Input
        }], arrayItem: [{
            type: Input
        }], rootItem: [{
            type: Input
        }], updateSchema: [{
            type: Output
        }], property: [{
            type: Input
        }], index: [{
            type: Input
        }], schema: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktY29uZmlnLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9qc29uLWVkaXRvci9qc29uLWVkaXRvci1mbGF0L2pzb24tZWRpdG9yLW5vZGUtZmxhdC9ub2RlLXR5cGVzL3Byb3BlcnR5LWNvbmZpZy9wcm9wZXJ0eS1jb25maWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLFlBQVksRUFDWixNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFvQixTQUFTLEVBQXNCLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJqRyxNQUFNLE9BQU8sdUJBQXVCO0FBQUcsSUF1QnJDLFlBQW9CLGFBQTRCO0FBQUksUUFBaEMsa0JBQWEsR0FBYixhQUFhLENBQWU7QUFBQyxRQWhCeEMsWUFBTyxHQUF5QixFQUFFLENBQUM7QUFDOUMsUUFDVyxjQUFTLEdBQUksS0FBSyxDQUFDO0FBQzlCLFFBQ1csYUFBUSxHQUFJLEtBQUssQ0FB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QUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO0FBQzNDLFFBQUksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO0FBQzNDLFFBQUksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO0FBQzFDLFFBQUksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO0FBQzFDLElBQUUsQ0FBQztBQUNILElBQ1UsV0FBVztBQUFLLFFBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDOUUsSUFBRSxDQUFDO0FBQ0g7bURBNUhDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUscUJBQXFCLGtCQUMvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2c1Q0FLRztBQUFDO0FBQWlELFlBbEI5QyxhQUFhO0FBQUc7QUFBRztBQUMzQix1QkFrQkUsS0FBSztBQUFLLG9CQUVWLEtBQUs7QUFBSyxxQkFFVixLQUFLO0FBQUssc0JBRVYsS0FBSztBQUFLLHdCQUVWLEtBQUs7QUFBSyx1QkFFVixLQUFLO0FBQUssMkJBRVYsTUFBTTtBQUFJOzs7OzttckJBbEJvQyxrQkFFL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksa0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLDBqQ0FDaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBY2M7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9kaWFsb2cvZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSlNPTkVkaXRvclNjaGVtYSwgcHJvcFR5cGVzLCBKc29uU2NoZW1hRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9qc29uLWVkaXRvci5oZWxwZXInO1xuaW1wb3J0IHsgSlNPTlNjaGVtYTdUeXBlTmFtZSB9IGZyb20gJ2pzb24tc2NoZW1hJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eUNvbmZpZ09wdGlvbnMge1xuICByZXF1aXJlZDogYm9vbGVhbjtcbiAgaW5kZXg6IG51bWJlcjtcbiAgbmV3UHJvcGVydHk6IEpTT05FZGl0b3JTY2hlbWE7XG4gIG9sZFByb3BlcnR5OiBKU09ORWRpdG9yU2NoZW1hO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtcHJvcGVydHktY29uZmlnJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb3BlcnR5LWNvbmZpZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb3BlcnR5LWNvbmZpZy5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eUNvbmZpZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHByb3BlcnR5OiBKU09ORWRpdG9yU2NoZW1hO1xuXG4gIEBJbnB1dCgpIGluZGV4PzogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIHNjaGVtYTogSlNPTkVkaXRvclNjaGVtYTtcblxuICBASW5wdXQoKSBmb3JtYXRzOiBKc29uU2NoZW1hRGF0YVR5cGVbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIGFycmF5SXRlbT8gPSBmYWxzZTtcblxuICBASW5wdXQoKSByb290SXRlbT8gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgdXBkYXRlU2NoZW1hID0gbmV3IEV2ZW50RW1pdHRlcjxQcm9wZXJ0eUNvbmZpZ09wdGlvbnM+KCk7XG5cbiAgcHJvcFR5cGVzOiBzdHJpbmdbXSA9IHByb3BUeXBlcztcblxuICBlZGl0YWJsZVByb3BlcnR5OiBKU09ORWRpdG9yU2NoZW1hO1xuXG4gIHJlcXVpcmVkID0gZmFsc2U7XG5cbiAgbmV3RW51bVZhbHVlID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZWRpdGFibGVQcm9wZXJ0eSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wZXJ0eSkpO1xuXG4gICAgaWYgKCF0aGlzLmFycmF5SXRlbSkge1xuICAgICAgdGhpcy5zZXRSZXF1aXJlZCgpO1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5Q2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1NlcnZpY2UuZGVzdHJveUFsbCgpO1xuICAgIHRoaXMudXBkYXRlU2NoZW1hLmVtaXQoe1xuICAgICAgcmVxdWlyZWQ6IHRoaXMucmVxdWlyZWQsXG4gICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgIG5ld1Byb3BlcnR5OiB0aGlzLmVkaXRhYmxlUHJvcGVydHksXG4gICAgICBvbGRQcm9wZXJ0eTogdGhpcy5wcm9wZXJ0eVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlVHlwZSh0eXBlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lZGl0YWJsZVByb3BlcnR5LnR5cGUgIT09IHR5cGUpIHtcbiAgICAgIHRoaXMuZWRpdGFibGVQcm9wZXJ0eS50eXBlID0gdHlwZSBhcyBKU09OU2NoZW1hN1R5cGVOYW1lO1xuICAgICAgZGVsZXRlIHRoaXMuZWRpdGFibGVQcm9wZXJ0eS5mb3JtYXQ7XG5cbiAgICAgIHRoaXMuY2xlYW5VcFByb3BlcnR5Q29uc3RyYWlucygpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUV4YW1wbGVzKGV4YW1wbGVzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGlmIChleGFtcGxlcyAmJiBleGFtcGxlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZWRpdGFibGVQcm9wZXJ0eS5leGFtcGxlcyA9IGV4YW1wbGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdGhpcy5lZGl0YWJsZVByb3BlcnR5LmV4YW1wbGVzO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUZvcm1hdChmb3JtYXQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVkaXRhYmxlUHJvcGVydHkuZm9ybWF0ICE9PSBmb3JtYXQpIHtcbiAgICAgIHRoaXMuZWRpdGFibGVQcm9wZXJ0eS50eXBlID0gJ3N0cmluZyc7XG4gICAgICB0aGlzLmVkaXRhYmxlUHJvcGVydHkuZm9ybWF0ID0gZm9ybWF0O1xuICAgICAgdGhpcy5jbGVhblVwUHJvcGVydHlDb25zdHJhaW5zKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkRW51bVZhbHVlKCk6IHZvaWQge1xuICAgIGNvbnN0IGVudW1WYWx1ZXMgPSAodGhpcy5lZGl0YWJsZVByb3BlcnR5LmVudW0gPSB0aGlzLmVkaXRhYmxlUHJvcGVydHkuZW51bSB8fCBbXSk7XG5cbiAgICBpZiAoIWVudW1WYWx1ZXMuaW5jbHVkZXModGhpcy5uZXdFbnVtVmFsdWUpKSB7XG4gICAgICBlbnVtVmFsdWVzLnB1c2godGhpcy5uZXdFbnVtVmFsdWUpO1xuICAgICAgdGhpcy5uZXdFbnVtVmFsdWUgPSAnJztcbiAgICAgIGRlbGV0ZSB0aGlzLmVkaXRhYmxlUHJvcGVydHkuZm9ybWF0O1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZURlZmF1bHQoZW51bVZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIWVudW1WYWx1ZSkge1xuICAgICAgZGVsZXRlIHRoaXMuZWRpdGFibGVQcm9wZXJ0eS5kZWZhdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVkaXRhYmxlUHJvcGVydHkuZGVmYXVsdCA9IGVudW1WYWx1ZTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVFbnVtVmFsdWUodmFsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBlbnVtVmFsdWVzID0gdGhpcy5lZGl0YWJsZVByb3BlcnR5LmVudW07XG4gICAgY29uc3QgaW5kZXggPSBlbnVtVmFsdWVzLmluZGV4T2YodmFsKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBlbnVtVmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgaWYgKCFlbnVtVmFsdWVzLmxlbmd0aCkge1xuICAgICAgLy8gUmVtb3ZlIGVudW0gcHJvcGVydHkgaWYgZW1wdHlcbiAgICAgIGRlbGV0ZSB0aGlzLmVkaXRhYmxlUHJvcGVydHkuZW51bTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFuVXBQcm9wZXJ0eUNvbnN0cmFpbnMoKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuZWRpdGFibGVQcm9wZXJ0eS5lbnVtO1xuICAgIGRlbGV0ZSB0aGlzLmVkaXRhYmxlUHJvcGVydHkucHJvcGVydGllcztcbiAgICBkZWxldGUgdGhpcy5lZGl0YWJsZVByb3BlcnR5LnJlcXVpcmVkO1xuICAgIGRlbGV0ZSB0aGlzLmVkaXRhYmxlUHJvcGVydHkuaXRlbXM7XG4gICAgZGVsZXRlIHRoaXMuZWRpdGFibGVQcm9wZXJ0eS5taW5pbXVtO1xuICAgIGRlbGV0ZSB0aGlzLmVkaXRhYmxlUHJvcGVydHkubWF4aW11bTtcbiAgICBkZWxldGUgdGhpcy5lZGl0YWJsZVByb3BlcnR5LmRlZmF1bHQ7XG4gICAgZGVsZXRlIHRoaXMuZWRpdGFibGVQcm9wZXJ0eS5taW5MZW5ndGg7XG4gICAgZGVsZXRlIHRoaXMuZWRpdGFibGVQcm9wZXJ0eS5tYXhMZW5ndGg7XG4gICAgZGVsZXRlIHRoaXMuZWRpdGFibGVQcm9wZXJ0eS5taW5JdGVtcztcbiAgICBkZWxldGUgdGhpcy5lZGl0YWJsZVByb3BlcnR5Lm1heEl0ZW1zO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRSZXF1aXJlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlcXVpcmVkID0gdGhpcy5zY2hlbWEucmVxdWlyZWQuaW5jbHVkZXModGhpcy5wcm9wZXJ0eS5wcm9wZXJ0eU5hbWUpO1xuICB9XG59XG4iXX0=