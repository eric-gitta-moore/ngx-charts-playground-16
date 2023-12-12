import { Component, ElementRef, EventEmitter, HostBinding, Input, Output, ViewChild, ViewEncapsulation, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, NgModel, Validators } from '@angular/forms';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { BehaviorSubject } from 'rxjs';
import { Appearance } from '../../mixins/appearance/appearance.enum';
import { InputTypes } from './input-types.enum';
import { INPUT_ANIMATIONS } from './input-animations.constant';
import { Size } from '../../mixins/size/size.enum';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from './input-autosize.directive';
import * as ɵngcc3 from '@angular/forms';
import * as ɵngcc4 from '../tooltip/tooltip.directive';
import * as ɵngcc5 from '../../directives/autosize-input/autosize-input.directive';

const _c0 = ["inputControl"];
const _c1 = ["inputModel"];
const _c2 = ["textareaControl"];
function InputComponent_textarea_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "textarea", 17, 18);
    ɵngcc0.ɵɵlistener("ngModelChange", function InputComponent_textarea_5_Template_textarea_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.value = $event; })("change", function InputComponent_textarea_5_Template_textarea_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onChange($event); })("keyup", function InputComponent_textarea_5_Template_textarea_keyup_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.onKeyUp($event); })("focus", function InputComponent_textarea_5_Template_textarea_focus_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.onFocus($event); })("blur", function InputComponent_textarea_5_Template_textarea_blur_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.onBlur($event); })("click", function InputComponent_textarea_5_Template_textarea_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.click.emit($event); });
    ɵngcc0.ɵɵtext(3, "        ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngModel", ctx_r0.value)("id", ctx_r0.id)("name", ctx_r0.name)("placeholder", ctx_r0.placeholder)("disabled", ctx_r0.disabled)("minlength", ctx_r0.minlength)("maxlength", ctx_r0.maxlength)("required", ctx_r0.required);
    ɵngcc0.ɵɵattribute("tabindex", ctx_r0.tabindex)("autocomplete", ctx_r0.autocomplete)("autocorrect", ctx_r0.autocorrect)("spellcheck", ctx_r0.spellcheck);
} }
function InputComponent_textarea_6_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "textarea", 19, 18);
    ɵngcc0.ɵɵlistener("ngModelChange", function InputComponent_textarea_6_Template_textarea_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.value = $event; })("change", function InputComponent_textarea_6_Template_textarea_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r23 = ɵngcc0.ɵɵnextContext(); return ctx_r23.onChange($event); })("keyup", function InputComponent_textarea_6_Template_textarea_keyup_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.onKeyUp($event); })("focus", function InputComponent_textarea_6_Template_textarea_focus_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.onFocus($event); })("blur", function InputComponent_textarea_6_Template_textarea_blur_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r26 = ɵngcc0.ɵɵnextContext(); return ctx_r26.onBlur($event); })("click", function InputComponent_textarea_6_Template_textarea_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r22); const ctx_r27 = ɵngcc0.ɵɵnextContext(); return ctx_r27.click.emit($event); });
    ɵngcc0.ɵɵtext(3, "        ");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngModel", ctx_r1.value)("id", ctx_r1.id)("name", ctx_r1.name)("placeholder", ctx_r1.placeholder)("disabled", ctx_r1.disabled)("minlength", ctx_r1.minlength)("maxlength", ctx_r1.maxlength)("required", ctx_r1.required);
    ɵngcc0.ɵɵattribute("tabindex", ctx_r1.tabindex)("autocomplete", ctx_r1.autocomplete)("autocorrect", ctx_r1.autocorrect)("spellcheck", ctx_r1.spellcheck);
} }
function InputComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function InputComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r29 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 20);
    ɵngcc0.ɵɵelementStart(1, "i", 21);
    ɵngcc0.ɵɵlistener("mousedown", function InputComponent_div_8_Template_i_mousedown_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r29); const ctx_r28 = ɵngcc0.ɵɵnextContext(); return ctx_r28.incrementValue($event); })("mouseup", function InputComponent_div_8_Template_i_mouseup_1_listener() { ɵngcc0.ɵɵrestoreView(_r29); const ctx_r30 = ɵngcc0.ɵɵnextContext(); return ctx_r30.clearSpinnerInterval(); })("mouseleave", function InputComponent_div_8_Template_i_mouseleave_1_listener() { ɵngcc0.ɵɵrestoreView(_r29); const ctx_r31 = ɵngcc0.ɵɵnextContext(); return ctx_r31.clearSpinnerInterval(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(2, "i", 22);
    ɵngcc0.ɵɵlistener("mousedown", function InputComponent_div_8_Template_i_mousedown_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r29); const ctx_r32 = ɵngcc0.ɵɵnextContext(); return ctx_r32.decrementValue($event); })("mouseup", function InputComponent_div_8_Template_i_mouseup_2_listener() { ɵngcc0.ɵɵrestoreView(_r29); const ctx_r33 = ɵngcc0.ɵɵnextContext(); return ctx_r33.clearSpinnerInterval(); })("mouseleave", function InputComponent_div_8_Template_i_mouseleave_2_listener() { ɵngcc0.ɵɵrestoreView(_r29); const ctx_r34 = ɵngcc0.ɵɵnextContext(); return ctx_r34.clearSpinnerInterval(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
function InputComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    const _r36 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 23);
    ɵngcc0.ɵɵlistener("click", function InputComponent_span_10_Template_span_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r36); const ctx_r35 = ɵngcc0.ɵɵnextContext(); return ctx_r35.togglePassword(); });
    ɵngcc0.ɵɵelementEnd();
} }
function InputComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r38 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 24);
    ɵngcc0.ɵɵlistener("click", function InputComponent_span_11_Template_span_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r38); const ctx_r37 = ɵngcc0.ɵɵnextContext(); return ctx_r37.disabled = false; });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("tooltipTitle", ctx_r5.unlockableTooltip);
} }
function InputComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 11);
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r6.requiredIndicator, ɵngcc0.ɵɵsanitizeHtml);
} }
function InputComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 11);
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r7.hint, ɵngcc0.ɵɵsanitizeHtml);
} }
function InputComponent_ng_template_22_input_0_Template(rf, ctx) { if (rf & 1) {
    const _r44 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 27, 28);
    ɵngcc0.ɵɵlistener("ngModelChange", function InputComponent_ng_template_22_input_0_Template_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r44); const ctx_r43 = ɵngcc0.ɵɵnextContext(2); return ctx_r43.value = $event; })("change", function InputComponent_ng_template_22_input_0_Template_input_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r44); const ctx_r45 = ɵngcc0.ɵɵnextContext(2); return ctx_r45.onChange($event); })("keyup", function InputComponent_ng_template_22_input_0_Template_input_keyup_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r44); const ctx_r46 = ɵngcc0.ɵɵnextContext(2); return ctx_r46.onKeyUp($event); })("focus", function InputComponent_ng_template_22_input_0_Template_input_focus_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r44); const ctx_r47 = ɵngcc0.ɵɵnextContext(2); return ctx_r47.onFocus($event); })("blur", function InputComponent_ng_template_22_input_0_Template_input_blur_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r44); const ctx_r48 = ɵngcc0.ɵɵnextContext(2); return ctx_r48.onBlur($event); })("click", function InputComponent_ng_template_22_input_0_Template_input_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r44); const ctx_r49 = ɵngcc0.ɵɵnextContext(2); return ctx_r49.click.emit($event); });
    ɵngcc0.ɵɵpipe(3, "async");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r39 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("extraWidth", ctx_r39.type === ctx_r39.inputTypes.number ? 20 : 0)("minWidth", ctx_r39.minWidth)("includePadding", true)("ngModel", ctx_r39.value)("value", ctx_r39.value)("id", ctx_r39.id)("name", ctx_r39.name)("placeholder", ctx_r39.placeholder)("disabled", ctx_r39.disabled)("type", ɵngcc0.ɵɵpipeBind1(3, 19, ctx_r39.type$))("min", ctx_r39.min)("max", ctx_r39.max)("minlength", ctx_r39.minlength)("maxlength", ctx_r39.maxlength)("required", ctx_r39.required);
    ɵngcc0.ɵɵattribute("tabindex", ctx_r39.tabindex)("autocomplete", ctx_r39.autocomplete)("autocorrect", ctx_r39.autocorrect)("spellcheck", ctx_r39.spellcheck);
} }
function InputComponent_ng_template_22_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r53 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 29, 28);
    ɵngcc0.ɵɵlistener("ngModelChange", function InputComponent_ng_template_22_input_1_Template_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r53); const ctx_r52 = ɵngcc0.ɵɵnextContext(2); return ctx_r52.value = $event; })("change", function InputComponent_ng_template_22_input_1_Template_input_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r53); const ctx_r54 = ɵngcc0.ɵɵnextContext(2); return ctx_r54.onChange($event); })("keyup", function InputComponent_ng_template_22_input_1_Template_input_keyup_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r53); const ctx_r55 = ɵngcc0.ɵɵnextContext(2); return ctx_r55.onKeyUp($event); })("focus", function InputComponent_ng_template_22_input_1_Template_input_focus_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r53); const ctx_r56 = ɵngcc0.ɵɵnextContext(2); return ctx_r56.onFocus($event); })("blur", function InputComponent_ng_template_22_input_1_Template_input_blur_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r53); const ctx_r57 = ɵngcc0.ɵɵnextContext(2); return ctx_r57.onBlur($event); })("click", function InputComponent_ng_template_22_input_1_Template_input_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r53); const ctx_r58 = ɵngcc0.ɵɵnextContext(2); return ctx_r58.click.emit($event); });
    ɵngcc0.ɵɵpipe(3, "async");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r40 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r40.value)("id", ctx_r40.id)("name", ctx_r40.name)("placeholder", ctx_r40.placeholder)("disabled", ctx_r40.disabled)("type", ɵngcc0.ɵɵpipeBind1(3, 15, ctx_r40.type$))("min", ctx_r40.min)("max", ctx_r40.max)("minlength", ctx_r40.minlength)("maxlength", ctx_r40.maxlength)("required", ctx_r40.required);
    ɵngcc0.ɵɵattribute("tabindex", ctx_r40.tabindex)("autocomplete", ctx_r40.autocomplete)("autocorrect", ctx_r40.autocorrect)("spellcheck", ctx_r40.spellcheck);
} }
function InputComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, InputComponent_ng_template_22_input_0_Template, 4, 21, "input", 25);
    ɵngcc0.ɵɵtemplate(1, InputComponent_ng_template_22_input_1_Template, 4, 17, "input", 26);
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r9.type !== ctx_r9.inputTypes.textarea && ctx_r9.autosize);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r9.type !== ctx_r9.inputTypes.textarea && !ctx_r9.autosize);
} }
const _c3 = [[["ngx-input-prefix"]], [["ngx-input-suffix"]], [["ngx-input-hint"]]];
const _c4 = ["ngx-input-prefix", "ngx-input-suffix", "ngx-input-hint"];
let nextId = 0;
const INPUT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
};
const INPUT_VALIDATORS = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => InputComponent),
    multi: true
};
const MIN_WIDTH = 60;
export class InputComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.id = `input-${++nextId}`;
        this.label = '';
        this.placeholder = '';
        this.size = Size.Small;
        this.appearance = Appearance.Legacy;
        this.withMargin = true;
        this.requiredIndicator = '*';
        this.passwordToggleEnabled = false;
        this.unlockableTooltip = 'Click to unlock';
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.focus = new EventEmitter();
        this.keyup = new EventEmitter();
        this.click = new EventEmitter();
        this.select = new EventEmitter();
        this.focused = false;
        this.type$ = new BehaviorSubject(InputTypes.text);
        this.inputTypes = InputTypes;
        this._value = '';
        this._type = InputTypes.text;
        this._passwordTextVisible = false;
        this._disabled = false;
        this._required = false;
        this._autoSelect = false;
        this._autofocus = false;
        this._autocomplete = false;
        this._autocorrect = false;
        this._spellcheck = false;
        this._autosize = false;
        this._minWidth = MIN_WIDTH;
        this._unlockable = false;
        this.onTouchedCallback = () => {
            // placeholder
        };
        this.onChangeCallback = () => {
            // placeholder
        };
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this._disabled = coerceBooleanProperty(disabled);
    }
    get minWidth() {
        return this._minWidth;
    }
    set minWidth(minWidth) {
        this._minWidth = coerceNumberProperty(minWidth);
    }
    get required() {
        return this._required;
    }
    set required(required) {
        this._required = coerceBooleanProperty(required);
    }
    get passwordTextVisible() {
        return this._passwordTextVisible;
    }
    set passwordTextVisible(p) {
        this._passwordTextVisible = coerceBooleanProperty(p);
        this.updateInputType();
    }
    get autoSelect() {
        return this._autoSelect;
    }
    set autoSelect(autoSelect) {
        this._autoSelect = coerceBooleanProperty(autoSelect);
    }
    get autofocus() {
        return this._autofocus;
    }
    set autofocus(autofocus) {
        this._autofocus = coerceBooleanProperty(autofocus);
    }
    get autocomplete() {
        return this._autocomplete;
    }
    set autocomplete(autocomplete) {
        this._autocomplete = coerceBooleanProperty(autocomplete);
    }
    get autocorrect() {
        return this._autocorrect;
    }
    set autocorrect(autocorrect) {
        this._autocorrect = coerceBooleanProperty(autocorrect);
    }
    get spellcheck() {
        return this._spellcheck;
    }
    set spellcheck(spellcheck) {
        this._spellcheck = coerceBooleanProperty(spellcheck);
    }
    get type() {
        return this._type;
    }
    set type(type) {
        this._type = type;
        this.updateInputType();
    }
    get autosize() {
        return this._autosize;
    }
    set autosize(v) {
        this._autosize = coerceBooleanProperty(v);
    }
    get unlockable() {
        return this._unlockable;
    }
    set unlockable(v) {
        this._unlockable = coerceBooleanProperty(v);
        if (this._unlockable) {
            this.disabled = true;
        }
    }
    get value() {
        return this._value;
    }
    set value(val) {
        if (val !== this._value) {
            this._value = this.type === InputTypes.number ? coerceNumberProperty(val, null) : val;
            this.onChangeCallback(this._value);
        }
    }
    get focusedOrDirty() {
        if (this.focused) {
            return true;
        }
        if (typeof this.value === 'string') {
            return this.value && this.value.length;
        }
        return typeof this.value !== 'undefined' && this.value !== null;
    }
    get isTouched() {
        return this.inputModel ? this.inputModel.touched : false;
    }
    get labelState() {
        return this.placeholder || this.focusedOrDirty || this.appearance === Appearance.Fill ? 'outside' : 'inside';
    }
    get underlineState() {
        return this.focused ? 'expanded' : 'collapsed';
    }
    get element() {
        return this.type === InputTypes.textarea ? this.textareaControl : this.inputControl;
    }
    ngAfterViewInit() {
        if (this.autofocus) {
            setTimeout(() => {
                this.element.nativeElement.focus();
                // sometimes the label doesn't update on load
                this.cdr.markForCheck();
            });
        }
    }
    ngOnDestroy() {
        this.clearSpinnerInterval();
    }
    onChange(event) {
        event.stopPropagation();
        this.change.emit(this.value);
    }
    onKeyUp(event) {
        event.stopPropagation();
        this.keyup.emit(event);
    }
    onFocus(event) {
        event.stopPropagation();
        this.focused = true;
        if (this.autoSelect) {
            setTimeout(() => this.element.nativeElement.select());
            this.select.emit(event);
        }
        this.focus.emit(event);
        this.onTouchedCallback();
    }
    onBlur(event) {
        event.stopPropagation();
        this.focused = false;
        this.blur.emit(event);
    }
    validate(c) {
        if (this.type !== InputTypes.number) {
            return null;
        }
        return Object.assign(Object.assign({}, Validators.max(this.max)(c)), Validators.min(this.min)(c));
    }
    writeValue(val) {
        if (val !== this._value) {
            this._value = val;
        }
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    togglePassword() {
        this.passwordTextVisible = !this.passwordTextVisible;
        this.element.nativeElement.focus();
    }
    setDisabledState(isDisabled) {
        this.disabled = coerceBooleanProperty(isDisabled);
    }
    incrementValue(event) {
        this.increment(event);
        if (!this._spinnerInterval) {
            this._spinnerTimeout = setTimeout(() => {
                this._spinnerInterval = setInterval(() => {
                    this.increment(event);
                }, 50);
            }, 500);
        }
    }
    decrementValue(event) {
        this.decrement(event);
        if (!this._spinnerInterval) {
            this._spinnerTimeout = setTimeout(() => {
                this._spinnerInterval = setInterval(() => {
                    this.decrement(event);
                }, 50);
            }, 500);
        }
    }
    clearSpinnerInterval() {
        clearTimeout(this._spinnerTimeout);
        this._spinnerTimeout = undefined;
        clearInterval(this._spinnerInterval);
        this._spinnerInterval = undefined;
    }
    updateInputType() {
        // eslint-disable-next-line
        this.type$.next(this.passwordTextVisible && InputTypes.password === this.type ? InputTypes.text : this.type);
    }
    increment(event) {
        event.preventDefault();
        if (!this.disabled) {
            const el = this.element.nativeElement;
            const max = +this.max;
            if ((max || max === 0) && +el.value >= max)
                return;
            el.value = el.value ? (+el.value + 1).toString() : '1';
            this.value = el.value;
            this.change.emit(this._value);
            if (document.activeElement !== this.inputControl.nativeElement) {
                this.inputControl.nativeElement.focus();
            }
        }
    }
    decrement(event) {
        event.preventDefault();
        if (!this.disabled) {
            const el = this.element.nativeElement;
            const min = +this.min;
            if (min || min === 0) {
                if (min === 0 && !el.value) {
                    el.value = '0';
                    this.value = el.value;
                    this.change.emit(this._value);
                    this.inputControl.nativeElement.focus();
                    return;
                }
                else if (+el.value <= min) {
                    return;
                }
            }
            el.value = el.value ? (+el.value - 1).toString() : '-1';
            this.value = el.value;
            this.change.emit(this._value);
            if (document.activeElement !== this.inputControl.nativeElement) {
                this.inputControl.nativeElement.focus();
            }
        }
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
InputComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: InputComponent, selectors: [["ngx-input"]], viewQuery: function InputComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 5);
        ɵngcc0.ɵɵviewQuery(_c1, 5);
        ɵngcc0.ɵɵviewQuery(_c2, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputControl = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputModel = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.textareaControl = _t.first);
    } }, hostAttrs: [1, "ngx-input"], hostVars: 22, hostBindings: function InputComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("legacy", ctx.appearance === "legacy")("fill", ctx.appearance === "fill")("sm", ctx.size === "sm")("md", ctx.size === "md")("lg", ctx.size === "lg")("focused", ctx.focused)("autosize", ctx.autosize)("marginless", !ctx.withMargin)("no-label", !ctx.label)("ng-dirty", ctx.focusedOrDirty)("ng-touched", ctx.isTouched);
    } }, inputs: { id: "id", label: "label", placeholder: "placeholder", size: "size", appearance: "appearance", withMargin: "withMargin", requiredIndicator: "requiredIndicator", passwordToggleEnabled: "passwordToggleEnabled", unlockableTooltip: "unlockableTooltip", disabled: "disabled", minWidth: "minWidth", required: "required", passwordTextVisible: "passwordTextVisible", autoSelect: "autoSelect", autofocus: "autofocus", autocomplete: "autocomplete", autocorrect: "autocorrect", spellcheck: "spellcheck", type: "type", autosize: "autosize", unlockable: "unlockable", name: "name", hint: "hint", tabindex: "tabindex", min: "min", max: "max", minlength: "minlength", maxlength: "maxlength" }, outputs: { change: "change", blur: "blur", focus: "focus", keyup: "keyup", click: "click", select: "select" }, exportAs: ["ngxInput"], features: [ɵngcc0.ɵɵProvidersFeature([INPUT_VALUE_ACCESSOR, INPUT_VALIDATORS])], ngContentSelectors: _c4, decls: 24, vars: 13, consts: [[1, "ngx-input-wrap"], [1, "ngx-input-flex-wrap"], [1, "ngx-input-flex-wrap-inner"], [1, "ngx-input-box-wrap"], ["class", "ngx-input-textarea", "rows", "1", "autosize", "", 3, "ngModel", "id", "name", "placeholder", "disabled", "minlength", "maxlength", "required", "ngModelChange", "change", "keyup", "focus", "blur", "click", 4, "ngIf"], ["class", "ngx-input-textarea", "rows", "1", 3, "ngModel", "id", "name", "placeholder", "disabled", "minlength", "maxlength", "required", "ngModelChange", "change", "keyup", "focus", "blur", "click", 4, "ngIf"], [4, "ngTemplateOutlet"], ["class", "numeric-spinner", 4, "ngIf"], ["class", "icon-eye", "title", "Toggle Text Visibility", 3, "click", 4, "ngIf"], ["class", "icon-lock", "ngx-tooltip", "", 3, "tooltipTitle", "click", 4, "ngIf"], [1, "ngx-input-label"], [3, "innerHTML"], [3, "innerHTML", 4, "ngIf"], [1, "ngx-input-underline"], [1, "underline-fill"], [1, "ngx-input-hint"], ["inputTpl", ""], ["rows", "1", "autosize", "", 1, "ngx-input-textarea", 3, "ngModel", "id", "name", "placeholder", "disabled", "minlength", "maxlength", "required", "ngModelChange", "change", "keyup", "focus", "blur", "click"], ["inputModel", "ngModel", "textareaControl", ""], ["rows", "1", 1, "ngx-input-textarea", 3, "ngModel", "id", "name", "placeholder", "disabled", "minlength", "maxlength", "required", "ngModelChange", "change", "keyup", "focus", "blur", "click"], [1, "numeric-spinner"], [1, "ngx-icon", "ngx-chevron-bold-up", 3, "mousedown", "mouseup", "mouseleave"], [1, "ngx-icon", "ngx-chevron-bold-down", 3, "mousedown", "mouseup", "mouseleave"], ["title", "Toggle Text Visibility", 1, "icon-eye", 3, "click"], ["ngx-tooltip", "", 1, "icon-lock", 3, "tooltipTitle", "click"], ["class", "ngx-input-box", "autoSizeInput", "", 3, "extraWidth", "minWidth", "includePadding", "ngModel", "value", "id", "name", "placeholder", "disabled", "type", "min", "max", "minlength", "maxlength", "required", "ngModelChange", "change", "keyup", "focus", "blur", "click", 4, "ngIf"], ["class", "ngx-input-box", 3, "ngModel", "id", "name", "placeholder", "disabled", "type", "min", "max", "minlength", "maxlength", "required", "ngModelChange", "change", "keyup", "focus", "blur", "click", 4, "ngIf"], ["autoSizeInput", "", 1, "ngx-input-box", 3, "extraWidth", "minWidth", "includePadding", "ngModel", "value", "id", "name", "placeholder", "disabled", "type", "min", "max", "minlength", "maxlength", "required", "ngModelChange", "change", "keyup", "focus", "blur", "click"], ["inputModel", "ngModel", "inputControl", ""], [1, "ngx-input-box", 3, "ngModel", "id", "name", "placeholder", "disabled", "type", "min", "max", "minlength", "maxlength", "required", "ngModelChange", "change", "keyup", "focus", "blur", "click"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c3);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵtemplate(5, InputComponent_textarea_5_Template, 4, 12, "textarea", 4);
        ɵngcc0.ɵɵtemplate(6, InputComponent_textarea_6_Template, 4, 12, "textarea", 5);
        ɵngcc0.ɵɵtemplate(7, InputComponent_ng_container_7_Template, 1, 0, "ng-container", 6);
        ɵngcc0.ɵɵtemplate(8, InputComponent_div_8_Template, 3, 0, "div", 7);
        ɵngcc0.ɵɵpipe(9, "async");
        ɵngcc0.ɵɵtemplate(10, InputComponent_span_10_Template, 1, 0, "span", 8);
        ɵngcc0.ɵɵtemplate(11, InputComponent_span_11_Template, 1, 1, "span", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "span", 10);
        ɵngcc0.ɵɵelement(13, "span", 11);
        ɵngcc0.ɵɵtext(14, "\u00A0 ");
        ɵngcc0.ɵɵtemplate(15, InputComponent_span_15_Template, 1, 1, "span", 12);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(16, 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(17, "div", 13);
        ɵngcc0.ɵɵelement(18, "div", 14);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(19, "div", 15);
        ɵngcc0.ɵɵprojection(20, 2);
        ɵngcc0.ɵɵtemplate(21, InputComponent_span_21_Template, 1, 1, "span", 12);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(22, InputComponent_ng_template_22_Template, 2, 2, "ng-template", null, 16, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r8 = ɵngcc0.ɵɵreference(23);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("ngIf", ctx.type === ctx.inputTypes.textarea && ctx.autosize);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.type === ctx.inputTypes.textarea && !ctx.autosize);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r8);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.disabled && ɵngcc0.ɵɵpipeBind1(9, 11, ctx.type$) === ctx.inputTypes.number);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.type === ctx.inputTypes.password && ctx.passwordToggleEnabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.type === ctx.inputTypes.text && ctx.unlockable && ctx.disabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("@labelState", ctx.labelState);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("innerHTML", ctx.label, ɵngcc0.ɵɵsanitizeHtml);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.required && ctx.requiredIndicator);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("@underlineState", ctx.underlineState);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hint);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.AutosizeDirective, ɵngcc3.DefaultValueAccessor, ɵngcc3.NgControlStatus, ɵngcc3.NgModel, ɵngcc3.MinLengthValidator, ɵngcc3.MaxLengthValidator, ɵngcc3.RequiredValidator, ɵngcc4.TooltipDirective, ɵngcc5.AutoSizeInputDirective], pipes: [ɵngcc1.AsyncPipe], styles: ["input[type=number],input[type=password],input[type=tel],input[type=text],textarea{display:inline-block;box-sizing:border-box;outline:none}.form-input{background:#313847;border:1px solid #455066;color:#b6b6b6;transition:box-shadow .2s;border-radius:0;font-size:13px;height:32px;line-height:32px;width:100%;padding:6px;margin-bottom:1em}.form-input::-moz-placeholder{color:#647493}.form-input::placeholder{color:#647493}.form-input:focus{box-shadow:0 1px 5px 0 rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.form-input[disabled]{cursor:not-allowed;color:#363636}textarea.form-input{min-height:120px;line-height:1.3em}.ngx-input{display:block;max-width:100%;margin-top:16px;margin-bottom:8px;padding-top:calc(.7em + 8px);padding-bottom:0}.ngx-input.marginless{margin-top:0;margin-bottom:0}.ngx-input.no-label{padding-top:0}.ngx-input.md .ngx-input-box,.ngx-input.md .ngx-input-textarea{font-size:18px!important}.ngx-input.lg .ngx-input-box,.ngx-input.lg .ngx-input-textarea{font-size:21px!important}.ngx-input.focused:not(.ng-invalid) .ngx-input-label{color:#1483ff!important}.ngx-input.invalid.ng-touched .ngx-input-underline,.ngx-input.invalid.ng-touched .ngx-input-underline .underline-fill,.ngx-input.ng-invalid.ng-dirty .ngx-input-underline,.ngx-input.ng-invalid.ng-dirty .ngx-input-underline .underline-fill,.ngx-input.ng-invalid.ng-touched .ngx-input-underline,.ngx-input.ng-invalid.ng-touched .ngx-input-underline .underline-fill{background-color:#ff4514!important}.ngx-input.invalid.ng-touched .ngx-input-hint,.ngx-input.invalid.ng-touched .ngx-input-label,.ngx-input.ng-invalid.ng-dirty .ngx-input-hint,.ngx-input.ng-invalid.ng-dirty .ngx-input-label,.ngx-input.ng-invalid.ng-touched .ngx-input-hint,.ngx-input.ng-invalid.ng-touched .ngx-input-label{color:#ff4514}.ngx-input.invalid.ng-touched .ngx-input-box,.ngx-input.invalid.ng-touched .ngx-input-textarea,.ngx-input.ng-invalid.ng-dirty .ngx-input-box,.ngx-input.ng-invalid.ng-dirty .ngx-input-textarea,.ngx-input.ng-invalid.ng-touched .ngx-input-box,.ngx-input.ng-invalid.ng-touched .ngx-input-textarea{caret-color:#ff4514!important}.ngx-input.autosize{display:inline-block}.ngx-input input:-webkit-autofill,.ngx-input input:-webkit-autofill:active,.ngx-input input:-webkit-autofill:focus,.ngx-input input:-webkit-autofill:hover{-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s;-webkit-text-fill-color:#cfcfcf!important}.ngx-input .ngx-input-flex-wrap{display:flex}.ngx-input .ngx-input-flex-wrap .ngx-input-flex-wrap-inner{display:flex;flex:1;max-width:100%}.ngx-input .ngx-input-flex-wrap ngx-input-prefix,.ngx-input .ngx-input-flex-wrap ngx-input-suffix{flex:none;white-space:nowrap;display:flex;align-items:center;justify-content:center}.ngx-input .ngx-input-flex-wrap ngx-input-prefix>*,.ngx-input .ngx-input-flex-wrap ngx-input-suffix>*{display:inline-flex}.ngx-input ngx-input-prefix{margin-right:8px}.ngx-input ngx-input-suffix{margin-left:8px}.ngx-input .ngx-input-wrap{position:relative;display:block;margin-bottom:0;width:100%}.ngx-input .ngx-input-wrap .ngx-input-box-wrap{position:relative;width:100%;display:flex}.ngx-input .ngx-input-wrap .ngx-input-box-wrap:focus{outline:none}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea{flex:auto;display:block;background:transparent;border:none;margin-bottom:0;padding-left:0;width:100%;max-width:100%;color:#cdd2dd;font-size:1em;line-height:1.25em;min-height:0;font-family:inherit;caret-color:#1483ff}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box::-moz-placeholder,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea::-moz-placeholder{color:#818fa9}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box::placeholder,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea::placeholder{color:#818fa9}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box:focus,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea:focus{box-shadow:none;outline:none}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box:disabled,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea:disabled{color:#72819f;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box{margin:3px 0}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box[type=number]::-webkit-inner-spin-button{-webkit-appearance:none}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea{resize:none}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .icon-eye,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .icon-lock{line-height:25px;top:0;bottom:0;position:absolute;right:10px;cursor:pointer;font-size:.8rem;color:#9c9c9c;transition:color .1s}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .icon-eye:hover,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .icon-lock:hover{color:#b6b6b6}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .numeric-spinner{display:flex;z-index:2;opacity:0;position:absolute;right:0;top:50%;transform:translateY(-50%);flex-direction:column;transition:all .1s ease-out}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .numeric-spinner i{font-size:.625rem;color:#909cb4;cursor:pointer}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .numeric-spinner i:hover{color:#cdd2dd}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .numeric-spinner i:active{transform:scale(1.4)}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box:focus+.numeric-spinner,.ngx-input .ngx-input-wrap .ngx-input-box-wrap:hover .numeric-spinner{opacity:1}.ngx-input .ngx-input-wrap .ngx-input-label{pointer-events:none;position:absolute;font-size:13px;font-weight:600;transition:color .2s ease-in-out;color:#818fa9;white-space:nowrap;max-width:100%;overflow:hidden;text-overflow:ellipsis}.ngx-input .ngx-input-wrap .ngx-input-underline{width:100%;height:1px;background-color:#455066}.ngx-input .ngx-input-wrap .ngx-input-underline .underline-fill{background-color:#1483ff;width:100%;height:2px;margin:0 auto}.ngx-input .ngx-input-wrap .ngx-input-hint{font-size:12px;color:#818fa9;margin-top:2px;min-height:1em;line-height:14px;transition:color .2s ease-in-out}.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap .icon-eye,.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap .icon-lock{line-height:33.33px;z-index:2}.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box,.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea{margin:0;padding:6px 10px;position:relative;z-index:1}.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box+.numeric-spinner{right:10px}.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap:after{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#0c0e12;mix-blend-mode:exclusion;content:\"\"}"], encapsulation: 2, data: { animation: INPUT_ANIMATIONS }, changeDetection: 0 });
InputComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
InputComponent.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    label: [{ type: Input }],
    hint: [{ type: Input }],
    placeholder: [{ type: Input }],
    tabindex: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    minlength: [{ type: Input }],
    maxlength: [{ type: Input }],
    size: [{ type: Input }],
    appearance: [{ type: Input }],
    withMargin: [{ type: Input }],
    disabled: [{ type: Input }],
    minWidth: [{ type: Input }],
    requiredIndicator: [{ type: Input }],
    required: [{ type: Input }],
    passwordToggleEnabled: [{ type: Input }],
    passwordTextVisible: [{ type: Input }],
    autoSelect: [{ type: Input }],
    autofocus: [{ type: Input }],
    autocomplete: [{ type: Input }],
    autocorrect: [{ type: Input }],
    spellcheck: [{ type: Input }],
    type: [{ type: Input }],
    autosize: [{ type: Input }],
    unlockable: [{ type: Input }],
    unlockableTooltip: [{ type: Input }],
    change: [{ type: Output }],
    blur: [{ type: Output }],
    focus: [{ type: Output }],
    keyup: [{ type: Output }],
    click: [{ type: Output }],
    select: [{ type: Output }],
    inputControl: [{ type: ViewChild, args: ['inputControl',] }],
    inputModel: [{ type: ViewChild, args: ['inputModel',] }],
    textareaControl: [{ type: ViewChild, args: ['textareaControl',] }],
    focusedOrDirty: [{ type: HostBinding, args: ['class.ng-dirty',] }],
    isTouched: [{ type: HostBinding, args: ['class.ng-touched',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InputComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxInput',
                selector: 'ngx-input',
                template: "<div class=\"ngx-input-wrap\">\n  <div class=\"ngx-input-flex-wrap\">\n    <ng-content select=\"ngx-input-prefix\"></ng-content>\n    <div class=\"ngx-input-flex-wrap-inner\">\n      <div class=\"ngx-input-box-wrap\">\n        <textarea\n          *ngIf=\"type === inputTypes.textarea && autosize\"\n          class=\"ngx-input-textarea\"\n          rows=\"1\"\n          autosize\n          [(ngModel)]=\"value\"\n          [id]=\"id\"\n          [name]=\"name\"\n          [placeholder]=\"placeholder\"\n          [disabled]=\"disabled\"\n          [attr.tabindex]=\"tabindex\"\n          [attr.autocomplete]=\"autocomplete\"\n          [attr.autocorrect]=\"autocorrect\"\n          [attr.spellcheck]=\"spellcheck\"\n          [minlength]=\"minlength\"\n          [maxlength]=\"maxlength\"\n          [required]=\"required\"\n          (change)=\"onChange($event)\"\n          (keyup)=\"onKeyUp($event)\"\n          (focus)=\"onFocus($event)\"\n          (blur)=\"onBlur($event)\"\n          (click)=\"click.emit($event)\"\n          #inputModel=\"ngModel\"\n          #textareaControl\n        >\n        </textarea>\n        <textarea\n          *ngIf=\"type === inputTypes.textarea && !autosize\"\n          class=\"ngx-input-textarea\"\n          rows=\"1\"\n          [(ngModel)]=\"value\"\n          [id]=\"id\"\n          [name]=\"name\"\n          [placeholder]=\"placeholder\"\n          [disabled]=\"disabled\"\n          [attr.tabindex]=\"tabindex\"\n          [attr.autocomplete]=\"autocomplete\"\n          [attr.autocorrect]=\"autocorrect\"\n          [attr.spellcheck]=\"spellcheck\"\n          [minlength]=\"minlength\"\n          [maxlength]=\"maxlength\"\n          [required]=\"required\"\n          (change)=\"onChange($event)\"\n          (keyup)=\"onKeyUp($event)\"\n          (focus)=\"onFocus($event)\"\n          (blur)=\"onBlur($event)\"\n          (click)=\"click.emit($event)\"\n          #inputModel=\"ngModel\"\n          #textareaControl\n        >\n        </textarea>\n        <ng-container *ngTemplateOutlet=\"inputTpl\"></ng-container>\n\n        <div class=\"numeric-spinner\" *ngIf=\"!disabled && (type$ | async) === inputTypes.number\">\n          <i\n            class=\"ngx-icon ngx-chevron-bold-up\"\n            (mousedown)=\"incrementValue($event)\"\n            (mouseup)=\"clearSpinnerInterval()\"\n            (mouseleave)=\"clearSpinnerInterval()\"\n          ></i>\n          <i\n            class=\"ngx-icon ngx-chevron-bold-down\"\n            (mousedown)=\"decrementValue($event)\"\n            (mouseup)=\"clearSpinnerInterval()\"\n            (mouseleave)=\"clearSpinnerInterval()\"\n          ></i>\n        </div>\n        <span\n          *ngIf=\"type === inputTypes.password && passwordToggleEnabled\"\n          class=\"icon-eye\"\n          title=\"Toggle Text Visibility\"\n          (click)=\"togglePassword()\"\n        >\n        </span>\n        <span\n          *ngIf=\"type === inputTypes.text && unlockable && disabled\"\n          class=\"icon-lock\"\n          (click)=\"disabled = false\"\n          ngx-tooltip\n          [tooltipTitle]=\"unlockableTooltip\"\n        >\n        </span>\n      </div>\n      <span class=\"ngx-input-label\" [@labelState]=\"labelState\">\n        <span [innerHTML]=\"label\"></span>&nbsp;\n        <span *ngIf=\"required && requiredIndicator\" [innerHTML]=\"requiredIndicator\"></span>\n      </span>\n    </div>\n    <ng-content select=\"ngx-input-suffix\"></ng-content>\n  </div>\n  <div class=\"ngx-input-underline\">\n    <div class=\"underline-fill\" [@underlineState]=\"underlineState\"></div>\n  </div>\n  <div class=\"ngx-input-hint\">\n    <ng-content select=\"ngx-input-hint\"></ng-content>\n    <span *ngIf=\"hint\" [innerHTML]=\"hint\"></span>\n  </div>\n</div>\n\n<ng-template #inputTpl>\n  <input\n    *ngIf=\"type !== inputTypes.textarea && autosize\"\n    class=\"ngx-input-box\"\n    autoSizeInput\n    [extraWidth]=\"type === inputTypes.number ? 20 : 0\"\n    [minWidth]=\"minWidth\"\n    [includePadding]=\"true\"\n    [(ngModel)]=\"value\"\n    [value]=\"value\"\n    [id]=\"id\"\n    [name]=\"name\"\n    [placeholder]=\"placeholder\"\n    [disabled]=\"disabled\"\n    [type]=\"type$ | async\"\n    [min]=\"min\"\n    [max]=\"max\"\n    [minlength]=\"minlength\"\n    [maxlength]=\"maxlength\"\n    [attr.tabindex]=\"tabindex\"\n    [attr.autocomplete]=\"autocomplete\"\n    [attr.autocorrect]=\"autocorrect\"\n    [attr.spellcheck]=\"spellcheck\"\n    (change)=\"onChange($event)\"\n    (keyup)=\"onKeyUp($event)\"\n    (focus)=\"onFocus($event)\"\n    (blur)=\"onBlur($event)\"\n    (click)=\"click.emit($event)\"\n    [required]=\"required\"\n    #inputModel=\"ngModel\"\n    #inputControl\n  />\n  <input\n    *ngIf=\"type !== inputTypes.textarea && !autosize\"\n    class=\"ngx-input-box\"\n    [(ngModel)]=\"value\"\n    [id]=\"id\"\n    [name]=\"name\"\n    [placeholder]=\"placeholder\"\n    [disabled]=\"disabled\"\n    [type]=\"type$ | async\"\n    [min]=\"min\"\n    [max]=\"max\"\n    [minlength]=\"minlength\"\n    [maxlength]=\"maxlength\"\n    [attr.tabindex]=\"tabindex\"\n    [attr.autocomplete]=\"autocomplete\"\n    [attr.autocorrect]=\"autocorrect\"\n    [attr.spellcheck]=\"spellcheck\"\n    (change)=\"onChange($event)\"\n    (keyup)=\"onKeyUp($event)\"\n    (focus)=\"onFocus($event)\"\n    (blur)=\"onBlur($event)\"\n    (click)=\"click.emit($event)\"\n    [required]=\"required\"\n    #inputModel=\"ngModel\"\n    #inputControl\n  />\n</ng-template>\n",
                host: {
                    class: 'ngx-input',
                    '[class.legacy]': 'appearance === "legacy"',
                    '[class.fill]': 'appearance === "fill"',
                    '[class.sm]': 'size === "sm"',
                    '[class.md]': 'size === "md"',
                    '[class.lg]': 'size === "lg"',
                    '[class.focused]': 'focused',
                    '[class.autosize]': 'autosize',
                    '[class.marginless]': '!withMargin',
                    '[class.no-label]': '!label'
                },
                animations: INPUT_ANIMATIONS,
                providers: [INPUT_VALUE_ACCESSOR, INPUT_VALIDATORS],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["input[type=number],input[type=password],input[type=tel],input[type=text],textarea{display:inline-block;box-sizing:border-box;outline:none}.form-input{background:#313847;border:1px solid #455066;color:#b6b6b6;transition:box-shadow .2s;border-radius:0;font-size:13px;height:32px;line-height:32px;width:100%;padding:6px;margin-bottom:1em}.form-input::-moz-placeholder{color:#647493}.form-input::placeholder{color:#647493}.form-input:focus{box-shadow:0 1px 5px 0 rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.form-input[disabled]{cursor:not-allowed;color:#363636}textarea.form-input{min-height:120px;line-height:1.3em}.ngx-input{display:block;max-width:100%;margin-top:16px;margin-bottom:8px;padding-top:calc(.7em + 8px);padding-bottom:0}.ngx-input.marginless{margin-top:0;margin-bottom:0}.ngx-input.no-label{padding-top:0}.ngx-input.md .ngx-input-box,.ngx-input.md .ngx-input-textarea{font-size:18px!important}.ngx-input.lg .ngx-input-box,.ngx-input.lg .ngx-input-textarea{font-size:21px!important}.ngx-input.focused:not(.ng-invalid) .ngx-input-label{color:#1483ff!important}.ngx-input.invalid.ng-touched .ngx-input-underline,.ngx-input.invalid.ng-touched .ngx-input-underline .underline-fill,.ngx-input.ng-invalid.ng-dirty .ngx-input-underline,.ngx-input.ng-invalid.ng-dirty .ngx-input-underline .underline-fill,.ngx-input.ng-invalid.ng-touched .ngx-input-underline,.ngx-input.ng-invalid.ng-touched .ngx-input-underline .underline-fill{background-color:#ff4514!important}.ngx-input.invalid.ng-touched .ngx-input-hint,.ngx-input.invalid.ng-touched .ngx-input-label,.ngx-input.ng-invalid.ng-dirty .ngx-input-hint,.ngx-input.ng-invalid.ng-dirty .ngx-input-label,.ngx-input.ng-invalid.ng-touched .ngx-input-hint,.ngx-input.ng-invalid.ng-touched .ngx-input-label{color:#ff4514}.ngx-input.invalid.ng-touched .ngx-input-box,.ngx-input.invalid.ng-touched .ngx-input-textarea,.ngx-input.ng-invalid.ng-dirty .ngx-input-box,.ngx-input.ng-invalid.ng-dirty .ngx-input-textarea,.ngx-input.ng-invalid.ng-touched .ngx-input-box,.ngx-input.ng-invalid.ng-touched .ngx-input-textarea{caret-color:#ff4514!important}.ngx-input.autosize{display:inline-block}.ngx-input input:-webkit-autofill,.ngx-input input:-webkit-autofill:active,.ngx-input input:-webkit-autofill:focus,.ngx-input input:-webkit-autofill:hover{-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s;-webkit-text-fill-color:#cfcfcf!important}.ngx-input .ngx-input-flex-wrap{display:flex}.ngx-input .ngx-input-flex-wrap .ngx-input-flex-wrap-inner{display:flex;flex:1;max-width:100%}.ngx-input .ngx-input-flex-wrap ngx-input-prefix,.ngx-input .ngx-input-flex-wrap ngx-input-suffix{flex:none;white-space:nowrap;display:flex;align-items:center;justify-content:center}.ngx-input .ngx-input-flex-wrap ngx-input-prefix>*,.ngx-input .ngx-input-flex-wrap ngx-input-suffix>*{display:inline-flex}.ngx-input ngx-input-prefix{margin-right:8px}.ngx-input ngx-input-suffix{margin-left:8px}.ngx-input .ngx-input-wrap{position:relative;display:block;margin-bottom:0;width:100%}.ngx-input .ngx-input-wrap .ngx-input-box-wrap{position:relative;width:100%;display:flex}.ngx-input .ngx-input-wrap .ngx-input-box-wrap:focus{outline:none}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea{flex:auto;display:block;background:transparent;border:none;margin-bottom:0;padding-left:0;width:100%;max-width:100%;color:#cdd2dd;font-size:1em;line-height:1.25em;min-height:0;font-family:inherit;caret-color:#1483ff}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box::-moz-placeholder,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea::-moz-placeholder{color:#818fa9}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box::placeholder,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea::placeholder{color:#818fa9}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box:focus,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea:focus{box-shadow:none;outline:none}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box:disabled,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea:disabled{color:#72819f;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box{margin:3px 0}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box[type=number]::-webkit-inner-spin-button{-webkit-appearance:none}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea{resize:none}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .icon-eye,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .icon-lock{line-height:25px;top:0;bottom:0;position:absolute;right:10px;cursor:pointer;font-size:.8rem;color:#9c9c9c;transition:color .1s}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .icon-eye:hover,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .icon-lock:hover{color:#b6b6b6}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .numeric-spinner{display:flex;z-index:2;opacity:0;position:absolute;right:0;top:50%;transform:translateY(-50%);flex-direction:column;transition:all .1s ease-out}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .numeric-spinner i{font-size:.625rem;color:#909cb4;cursor:pointer}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .numeric-spinner i:hover{color:#cdd2dd}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .numeric-spinner i:active{transform:scale(1.4)}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box:focus+.numeric-spinner,.ngx-input .ngx-input-wrap .ngx-input-box-wrap:hover .numeric-spinner{opacity:1}.ngx-input .ngx-input-wrap .ngx-input-label{pointer-events:none;position:absolute;font-size:13px;font-weight:600;transition:color .2s ease-in-out;color:#818fa9;white-space:nowrap;max-width:100%;overflow:hidden;text-overflow:ellipsis}.ngx-input .ngx-input-wrap .ngx-input-underline{width:100%;height:1px;background-color:#455066}.ngx-input .ngx-input-wrap .ngx-input-underline .underline-fill{background-color:#1483ff;width:100%;height:2px;margin:0 auto}.ngx-input .ngx-input-wrap .ngx-input-hint{font-size:12px;color:#818fa9;margin-top:2px;min-height:1em;line-height:14px;transition:color .2s ease-in-out}.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap .icon-eye,.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap .icon-lock{line-height:33.33px;z-index:2}.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box,.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea{margin:0;padding:6px 10px;position:relative;z-index:1}.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box+.numeric-spinner{right:10px}.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap:after{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#0c0e12;mix-blend-mode:exclusion;content:\"\"}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { id: [{
            type: Input
        }], label: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], size: [{
            type: Input
        }], appearance: [{
            type: Input
        }], withMargin: [{
            type: Input
        }], requiredIndicator: [{
            type: Input
        }], passwordToggleEnabled: [{
            type: Input
        }], unlockableTooltip: [{
            type: Input
        }], change: [{
            type: Output
        }], blur: [{
            type: Output
        }], focus: [{
            type: Output
        }], keyup: [{
            type: Output
        }], click: [{
            type: Output
        }], select: [{
            type: Output
        }], disabled: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], required: [{
            type: Input
        }], passwordTextVisible: [{
            type: Input
        }], autoSelect: [{
            type: Input
        }], autofocus: [{
            type: Input
        }], autocomplete: [{
            type: Input
        }], autocorrect: [{
            type: Input
        }], spellcheck: [{
            type: Input
        }], type: [{
            type: Input
        }], autosize: [{
            type: Input
        }], unlockable: [{
            type: Input
        }], focusedOrDirty: [{
            type: HostBinding,
            args: ['class.ng-dirty']
        }], isTouched: [{
            type: HostBinding,
            args: ['class.ng-touched']
        }], name: [{
            type: Input
        }], hint: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], minlength: [{
            type: Input
        }], maxlength: [{
            type: Input
        }], inputControl: [{
            type: ViewChild,
            args: ['inputControl']
        }], inputModel: [{
            type: ViewChild,
            args: ['inputModel']
        }], textareaControl: [{
            type: ViewChild,
            args: ['textareaControl']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBR0wsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixPQUFPLEVBRVAsVUFBVSxFQUNYLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBRWYsTUFBTSxvQkFBb0IsR0FBRztBQUM3QixJQUFFLE9BQU8sRUFBRSxpQkFBaUI7QUFDNUIsSUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNB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QUFLLHdCQUNWLEtBQUs7QUFBSyx3QkFDVixLQUFLO0FBQUssbUJBQ1YsS0FBSztBQUFLLHlCQUNWLEtBQUs7QUFBSyx5QkFDVixLQUFLO0FBQUssdUJBRVYsS0FBSztBQUNOLHVCQU9DLEtBQUs7QUFDTixnQ0FPQyxLQUFLO0FBQUssdUJBQ1YsS0FBSztBQUNOLG9DQU9DLEtBQUs7QUFBSyxrQ0FDVixLQUFLO0FBQ04seUJBUUMsS0FBSztBQUNOLHdCQU9DLEtBQUs7QUFDTiwyQkFPQyxLQUFLO0FBQ04sMEJBT0MsS0FBSztBQUNOLHlCQU9DLEtBQUs7QUFDTixtQkFPQyxLQUFLO0FBQ04sdUJBUUMsS0FBSztBQUNOLHlCQU9DLEtBQUs7QUFDTixnQ0FTQyxLQUFLO0FBQUsscUJBRVYsTUFBTTtBQUFLLG1CQUNYLE1BQU07QUFBSyxvQkFDWCxNQUFNO0FBQUssb0JBQ1gsTUFBTTtBQUFLLG9CQUNYLE1BQU07QUFBSyxxQkFDWCxNQUFNO0FBQUssMkJBRVgsU0FBUyxTQUFDLGNBQWM7QUFBTyx5QkFDL0IsU0FBUyxTQUFDLFlBQVk7QUFBTyw4QkFDN0IsU0FBUyxTQUFDLGlCQUFpQjtBQUFPLDZCQVlsQyxXQUFXLFNBQUMsZ0JBQWdCO0FBQzFCLHdCQVlGLFdBQVcsU0FBQyxrQkFBa0I7QUFDN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIGZvcndhcmRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBWYWxpZGF0b3IsXG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxuICBOR19WQUxJREFUT1JTLFxuICBOZ01vZGVsLFxuICBGb3JtQ29udHJvbCxcbiAgVmFsaWRhdG9yc1xufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBcHBlYXJhbmNlIH0gZnJvbSAnLi4vLi4vbWl4aW5zL2FwcGVhcmFuY2UvYXBwZWFyYW5jZS5lbnVtJztcblxuaW1wb3J0IHsgSW5wdXRUeXBlcyB9IGZyb20gJy4vaW5wdXQtdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBJTlBVVF9BTklNQVRJT05TIH0gZnJvbSAnLi9pbnB1dC1hbmltYXRpb25zLmNvbnN0YW50JztcbmltcG9ydCB7IFNpemUgfSBmcm9tICcuLi8uLi9taXhpbnMvc2l6ZS9zaXplLmVudW0nO1xuXG5sZXQgbmV4dElkID0gMDtcblxuY29uc3QgSU5QVVRfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJbnB1dENvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5jb25zdCBJTlBVVF9WQUxJREFUT1JTID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJbnB1dENvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5jb25zdCBNSU5fV0lEVEggPSA2MDtcblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnbmd4SW5wdXQnLFxuICBzZWxlY3RvcjogJ25neC1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25neC1pbnB1dCcsXG4gICAgJ1tjbGFzcy5sZWdhY3ldJzogJ2FwcGVhcmFuY2UgPT09IFwibGVnYWN5XCInLFxuICAgICdbY2xhc3MuZmlsbF0nOiAnYXBwZWFyYW5jZSA9PT0gXCJmaWxsXCInLFxuICAgICdbY2xhc3Muc21dJzogJ3NpemUgPT09IFwic21cIicsXG4gICAgJ1tjbGFzcy5tZF0nOiAnc2l6ZSA9PT0gXCJtZFwiJyxcbiAgICAnW2NsYXNzLmxnXSc6ICdzaXplID09PSBcImxnXCInLFxuICAgICdbY2xhc3MuZm9jdXNlZF0nOiAnZm9jdXNlZCcsXG4gICAgJ1tjbGFzcy5hdXRvc2l6ZV0nOiAnYXV0b3NpemUnLFxuICAgICdbY2xhc3MubWFyZ2lubGVzc10nOiAnIXdpdGhNYXJnaW4nLFxuICAgICdbY2xhc3Mubm8tbGFiZWxdJzogJyFsYWJlbCdcbiAgfSxcbiAgYW5pbWF0aW9uczogSU5QVVRfQU5JTUFUSU9OUyxcbiAgcHJvdmlkZXJzOiBbSU5QVVRfVkFMVUVfQUNDRVNTT1IsIElOUFVUX1ZBTElEQVRPUlNdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XG4gIEBJbnB1dCgpIGlkID0gYGlucHV0LSR7KytuZXh0SWR9YDtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbCA9ICcnO1xuICBASW5wdXQoKSBoaW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XG4gIEBJbnB1dCgpIHRhYmluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIG1pbjogbnVtYmVyO1xuICBASW5wdXQoKSBtYXg6IG51bWJlcjtcbiAgQElucHV0KCkgbWlubGVuZ3RoOiBudW1iZXI7XG4gIEBJbnB1dCgpIG1heGxlbmd0aDogbnVtYmVyO1xuICBASW5wdXQoKSBzaXplOiBTaXplID0gU2l6ZS5TbWFsbDtcbiAgQElucHV0KCkgYXBwZWFyYW5jZTogQXBwZWFyYW5jZSA9IEFwcGVhcmFuY2UuTGVnYWN5O1xuICBASW5wdXQoKSB3aXRoTWFyZ2luID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGRpc2FibGVkKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBtaW5XaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9taW5XaWR0aDtcbiAgfVxuICBzZXQgbWluV2lkdGgobWluV2lkdGgpIHtcbiAgICB0aGlzLl9taW5XaWR0aCA9IGNvZXJjZU51bWJlclByb3BlcnR5KG1pbldpZHRoKTtcbiAgfVxuXG4gIEBJbnB1dCgpIHJlcXVpcmVkSW5kaWNhdG9yOiBzdHJpbmcgfCBib29sZWFuID0gJyonO1xuICBASW5wdXQoKVxuICBnZXQgcmVxdWlyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xuICB9XG4gIHNldCByZXF1aXJlZChyZXF1aXJlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHJlcXVpcmVkKTtcbiAgfVxuXG4gIEBJbnB1dCgpIHBhc3N3b3JkVG9nZ2xlRW5hYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBnZXQgcGFzc3dvcmRUZXh0VmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc3dvcmRUZXh0VmlzaWJsZTtcbiAgfVxuICBzZXQgcGFzc3dvcmRUZXh0VmlzaWJsZShwOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcGFzc3dvcmRUZXh0VmlzaWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShwKTtcbiAgICB0aGlzLnVwZGF0ZUlucHV0VHlwZSgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGF1dG9TZWxlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9TZWxlY3Q7XG4gIH1cbiAgc2V0IGF1dG9TZWxlY3QoYXV0b1NlbGVjdDogYm9vbGVhbikge1xuICAgIHRoaXMuX2F1dG9TZWxlY3QgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoYXV0b1NlbGVjdCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgYXV0b2ZvY3VzKCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvZm9jdXM7XG4gIH1cbiAgc2V0IGF1dG9mb2N1cyhhdXRvZm9jdXM6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdXRvZm9jdXMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoYXV0b2ZvY3VzKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBhdXRvY29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9jb21wbGV0ZTtcbiAgfVxuICBzZXQgYXV0b2NvbXBsZXRlKGF1dG9jb21wbGV0ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2F1dG9jb21wbGV0ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShhdXRvY29tcGxldGUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGF1dG9jb3JyZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvY29ycmVjdDtcbiAgfVxuICBzZXQgYXV0b2NvcnJlY3QoYXV0b2NvcnJlY3Q6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdXRvY29ycmVjdCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShhdXRvY29ycmVjdCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgc3BlbGxjaGVjaygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlbGxjaGVjaztcbiAgfVxuICBzZXQgc3BlbGxjaGVjayhzcGVsbGNoZWNrOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3BlbGxjaGVjayA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShzcGVsbGNoZWNrKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG4gIHNldCB0eXBlKHR5cGU6IElucHV0VHlwZXMpIHtcbiAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICB0aGlzLnVwZGF0ZUlucHV0VHlwZSgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGF1dG9zaXplKCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvc2l6ZTtcbiAgfVxuICBzZXQgYXV0b3NpemUodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2F1dG9zaXplID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHVubG9ja2FibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VubG9ja2FibGU7XG4gIH1cbiAgc2V0IHVubG9ja2FibGUodjogYm9vbGVhbikge1xuICAgIHRoaXMuX3VubG9ja2FibGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gICAgaWYgKHRoaXMuX3VubG9ja2FibGUpIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSB1bmxvY2thYmxlVG9vbHRpcCA9ICdDbGljayB0byB1bmxvY2snO1xuXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuICBAT3V0cHV0KCkgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBrZXl1cCA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcbiAgQE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcblxuICBAVmlld0NoaWxkKCdpbnB1dENvbnRyb2wnKSByZWFkb25seSBpbnB1dENvbnRyb2w6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ2lucHV0TW9kZWwnKSByZWFkb25seSBpbnB1dE1vZGVsOiBOZ01vZGVsO1xuICBAVmlld0NoaWxkKCd0ZXh0YXJlYUNvbnRyb2wnKSByZWFkb25seSB0ZXh0YXJlYUNvbnRyb2w6IEVsZW1lbnRSZWY8SFRNTFRleHRBcmVhRWxlbWVudD47XG5cbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB8IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2YWw6IHN0cmluZyB8IG51bWJlcikge1xuICAgIGlmICh2YWwgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMudHlwZSA9PT0gSW5wdXRUeXBlcy5udW1iZXIgPyBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWwsIG51bGwpIDogdmFsO1xuICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuX3ZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5nLWRpcnR5JylcbiAgZ2V0IGZvY3VzZWRPckRpcnR5KCk6IGFueSB7XG4gICAgaWYgKHRoaXMuZm9jdXNlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnZhbHVlICE9PSBudWxsO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZy10b3VjaGVkJylcbiAgZ2V0IGlzVG91Y2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dE1vZGVsID8gdGhpcy5pbnB1dE1vZGVsLnRvdWNoZWQgOiBmYWxzZTtcbiAgfVxuXG4gIGdldCBsYWJlbFN0YXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXIgfHwgdGhpcy5mb2N1c2VkT3JEaXJ0eSB8fCB0aGlzLmFwcGVhcmFuY2UgPT09IEFwcGVhcmFuY2UuRmlsbCA/ICdvdXRzaWRlJyA6ICdpbnNpZGUnO1xuICB9XG5cbiAgZ2V0IHVuZGVybGluZVN0YXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNlZCA/ICdleHBhbmRlZCcgOiAnY29sbGFwc2VkJztcbiAgfVxuXG4gIGdldCBlbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IElucHV0VHlwZXMudGV4dGFyZWEgPyB0aGlzLnRleHRhcmVhQ29udHJvbCA6IHRoaXMuaW5wdXRDb250cm9sO1xuICB9XG5cbiAgZm9jdXNlZCA9IGZhbHNlO1xuICByZWFkb25seSB0eXBlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SW5wdXRUeXBlcz4oSW5wdXRUeXBlcy50ZXh0KTtcbiAgcmVhZG9ubHkgaW5wdXRUeXBlcyA9IElucHV0VHlwZXM7XG5cbiAgcHJpdmF0ZSBfdmFsdWU6IHN0cmluZyB8IG51bWJlciA9ICcnO1xuICBwcml2YXRlIF90eXBlOiBJbnB1dFR5cGVzID0gSW5wdXRUeXBlcy50ZXh0O1xuICBwcml2YXRlIF9wYXNzd29yZFRleHRWaXNpYmxlID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3JlcXVpcmVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2F1dG9TZWxlY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYXV0b2ZvY3VzID0gZmFsc2U7XG4gIHByaXZhdGUgX2F1dG9jb21wbGV0ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9hdXRvY29ycmVjdCA9IGZhbHNlO1xuICBwcml2YXRlIF9zcGVsbGNoZWNrID0gZmFsc2U7XG4gIHByaXZhdGUgX2F1dG9zaXplID0gZmFsc2U7XG4gIHByaXZhdGUgX3NwaW5uZXJJbnRlcnZhbDtcbiAgcHJpdmF0ZSBfc3Bpbm5lclRpbWVvdXQ7XG4gIHByaXZhdGUgX21pbldpZHRoOiBudW1iZXIgPSBNSU5fV0lEVEg7XG4gIHByaXZhdGUgX3VubG9ja2FibGUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF1dG9mb2N1cykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG5cbiAgICAgICAgLy8gc29tZXRpbWVzIHRoZSBsYWJlbCBkb2Vzbid0IHVwZGF0ZSBvbiBsb2FkXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhclNwaW5uZXJJbnRlcnZhbCgpO1xuICB9XG5cbiAgb25DaGFuZ2UoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMua2V5dXAuZW1pdChldmVudCk7XG4gIH1cblxuICBvbkZvY3VzKGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmF1dG9TZWxlY3QpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0KCkpO1xuICAgICAgdGhpcy5zZWxlY3QuZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5mb2N1cy5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrKCk7XG4gIH1cblxuICBvbkJsdXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gIH1cblxuICB2YWxpZGF0ZShjOiBGb3JtQ29udHJvbCkge1xuICAgIGlmICh0aGlzLnR5cGUgIT09IElucHV0VHlwZXMubnVtYmVyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uVmFsaWRhdG9ycy5tYXgodGhpcy5tYXgpKGMpLFxuICAgICAgLi4uVmFsaWRhdG9ycy5taW4odGhpcy5taW4pKGMpXG4gICAgfTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWw7XG4gICAgfVxuXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XG4gIH1cblxuICB0b2dnbGVQYXNzd29yZCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhc3N3b3JkVGV4dFZpc2libGUgPSAhdGhpcy5wYXNzd29yZFRleHRWaXNpYmxlO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGlzRGlzYWJsZWQpO1xuICB9XG5cbiAgaW5jcmVtZW50VmFsdWUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmluY3JlbWVudChldmVudCk7XG4gICAgaWYgKCF0aGlzLl9zcGlubmVySW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMuX3NwaW5uZXJUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NwaW5uZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmluY3JlbWVudChldmVudCk7XG4gICAgICAgIH0sIDUwKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICB9XG5cbiAgZGVjcmVtZW50VmFsdWUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmRlY3JlbWVudChldmVudCk7XG4gICAgaWYgKCF0aGlzLl9zcGlubmVySW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMuX3NwaW5uZXJUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NwaW5uZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRlY3JlbWVudChldmVudCk7XG4gICAgICAgIH0sIDUwKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJTcGlubmVySW50ZXJ2YWwoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3NwaW5uZXJUaW1lb3V0KTtcbiAgICB0aGlzLl9zcGlubmVyVGltZW91dCA9IHVuZGVmaW5lZDtcblxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fc3Bpbm5lckludGVydmFsKTtcbiAgICB0aGlzLl9zcGlubmVySW50ZXJ2YWwgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4ge1xuICAgIC8vIHBsYWNlaG9sZGVyXG4gIH07XG5cbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gKCkgPT4ge1xuICAgIC8vIHBsYWNlaG9sZGVyXG4gIH07XG5cbiAgcHJpdmF0ZSB1cGRhdGVJbnB1dFR5cGUoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgdGhpcy50eXBlJC5uZXh0KHRoaXMucGFzc3dvcmRUZXh0VmlzaWJsZSAmJiBJbnB1dFR5cGVzLnBhc3N3b3JkID09PSB0aGlzLnR5cGUgPyBJbnB1dFR5cGVzLnRleHQgOiB0aGlzLnR5cGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbmNyZW1lbnQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICBjb25zdCBtYXggPSArdGhpcy5tYXg7XG4gICAgICBpZiAoKG1heCB8fCBtYXggPT09IDApICYmICtlbC52YWx1ZSA+PSBtYXgpIHJldHVybjtcblxuICAgICAgZWwudmFsdWUgPSBlbC52YWx1ZSA/ICgrZWwudmFsdWUgKyAxKS50b1N0cmluZygpIDogJzEnO1xuICAgICAgdGhpcy52YWx1ZSA9IGVsLnZhbHVlO1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gdGhpcy5pbnB1dENvbnRyb2wubmF0aXZlRWxlbWVudCkge1xuICAgICAgICB0aGlzLmlucHV0Q29udHJvbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZWNyZW1lbnQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICBjb25zdCBtaW4gPSArdGhpcy5taW47XG4gICAgICBpZiAobWluIHx8IG1pbiA9PT0gMCkge1xuICAgICAgICBpZiAobWluID09PSAwICYmICFlbC52YWx1ZSkge1xuICAgICAgICAgIGVsLnZhbHVlID0gJzAnO1xuICAgICAgICAgIHRoaXMudmFsdWUgPSBlbC52YWx1ZTtcbiAgICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgICAgICAgICB0aGlzLmlucHV0Q29udHJvbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKCtlbC52YWx1ZSA8PSBtaW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZWwudmFsdWUgPSBlbC52YWx1ZSA/ICgrZWwudmFsdWUgLSAxKS50b1N0cmluZygpIDogJy0xJztcbiAgICAgIHRoaXMudmFsdWUgPSBlbC52YWx1ZTtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHRoaXMuaW5wdXRDb250cm9sLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5pbnB1dENvbnRyb2wubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19