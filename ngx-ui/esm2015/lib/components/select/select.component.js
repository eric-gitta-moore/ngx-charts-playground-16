import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, forwardRef, Input, Output, QueryList, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { KeyboardKeys } from '../../enums/keyboard-keys.enum';
import { appearanceMixin } from '../../mixins/appearance/appearance.mixin';
import { sizeMixin } from '../../mixins/size/size.mixin';
import { SelectInputComponent } from './select-input.component';
import { SelectOptionDirective } from './select-option.directive';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './select-input.component';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from './select-dropdown.component';

function SelectComponent_ngx_select_dropdown_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-select-dropdown", 5);
    ɵngcc0.ɵɵlistener("keyup", function SelectComponent_ngx_select_dropdown_4_Template_ngx_select_dropdown_keyup_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.keyup.emit($event); })("close", function SelectComponent_ngx_select_dropdown_4_Template_ngx_select_dropdown_close_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.onClose(); })("selection", function SelectComponent_ngx_select_dropdown_4_Template_ngx_select_dropdown_selection_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onDropdownSelection($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("focusIndex", ctx_r0.focusIndex)("filterQuery", ctx_r0.filterQuery)("filterPlaceholder", ctx_r0.filterPlaceholder)("filterCaseSensitive", ctx_r0.filterCaseSensitive)("allowAdditions", ctx_r0.allowAdditions)("allowAdditionsText", ctx_r0.allowAdditionsText)("selected", ctx_r0.value)("groupBy", ctx_r0.groupBy)("groupByTemplate", ctx_r0.groupByTemplate)("emptyPlaceholder", ctx_r0.emptyPlaceholder)("tagging", ctx_r0.tagging)("filterEmptyPlaceholder", ctx_r0.filterEmptyPlaceholder)("filterable", ctx_r0.filterable)("identifier", ctx_r0.identifier)("options", ctx_r0.options);
} }
let nextId = 0;
const SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
};
class InputBase {
}
const _InputMixinBase = appearanceMixin(sizeMixin(InputBase));
export class SelectComponent extends _InputMixinBase {
    constructor(_element, _renderer, _cdr) {
        super();
        this._element = _element;
        this._renderer = _renderer;
        this._cdr = _cdr;
        this.id = `select-${++nextId}`;
        this.placeholder = '';
        this.emptyPlaceholder = 'No options available';
        this.filterEmptyPlaceholder = 'No matches...';
        this.filterPlaceholder = 'Filter options...';
        this.allowAdditionsText = 'Add Value';
        this.requiredIndicator = '*';
        this.options = [];
        this.change = new EventEmitter();
        this.keyup = new EventEmitter();
        this.toggle = new EventEmitter();
        this.focusIndex = -1;
        this.dropdownActive = false;
        this.touched = false;
        this._value = [];
        this._autofocus = false;
        this._autosize = false;
        this._allowClear = true;
        this._allowAdditions = false;
        this._disableDropdown = false;
        this._closeOnBodyClick = true;
        this._filterable = true;
        this._filterCaseSensitive = false;
        this._tagging = false;
        this._multiple = false;
        this._disabled = false;
        this._autosizeMinWidth = '60px';
    }
    get minSelections() {
        return this._minSelections;
    }
    set minSelections(minSelections) {
        this._minSelections = coerceNumberProperty(minSelections, undefined);
    }
    get autosizeMinWidth() {
        return this._autosizeMinWidth;
    }
    set autosizeMinWidth(autosizeMinWidth) {
        if (!isNaN(+autosizeMinWidth)) {
            this._autosizeMinWidth = `${autosizeMinWidth}px`;
        }
        else if (typeof autosizeMinWidth === 'string') {
            this._autosizeMinWidth = autosizeMinWidth;
        }
    }
    get maxSelections() {
        return this._maxSelections;
    }
    set maxSelections(maxSelections) {
        this._maxSelections = coerceNumberProperty(maxSelections, undefined);
    }
    get autofocus() {
        return this._autofocus;
    }
    set autofocus(autofocus) {
        this._autofocus = coerceBooleanProperty(autofocus);
    }
    get autosize() {
        return this._autosize;
    }
    set autosize(autosize) {
        this._autosize = coerceBooleanProperty(autosize);
    }
    get allowClear() {
        return this._allowClear;
    }
    set allowClear(allowClear) {
        this._allowClear = coerceBooleanProperty(allowClear);
    }
    get allowAdditions() {
        return this._allowAdditions;
    }
    set allowAdditions(allowAdditions) {
        this._allowAdditions = coerceBooleanProperty(allowAdditions);
    }
    get disableDropdown() {
        return this._disableDropdown;
    }
    set disableDropdown(disableDropdown) {
        this._disableDropdown = coerceBooleanProperty(disableDropdown);
    }
    get closeOnSelect() {
        return this._closeOnSelect;
    }
    set closeOnSelect(closeOnSelect) {
        this._closeOnSelect = coerceBooleanProperty(closeOnSelect);
    }
    get closeOnBodyClick() {
        return this._closeOnBodyClick;
    }
    set closeOnBodyClick(closeOnBodyClick) {
        this._closeOnBodyClick = coerceBooleanProperty(closeOnBodyClick);
    }
    get filterable() {
        return this._filterable;
    }
    set filterable(filterable) {
        this._filterable = coerceBooleanProperty(filterable);
    }
    get required() {
        return this._required;
    }
    set required(required) {
        this._required = coerceBooleanProperty(required);
    }
    get filterCaseSensitive() {
        return this._filterCaseSensitive;
    }
    set filterCaseSensitive(filterCaseSensitive) {
        this._filterCaseSensitive = coerceBooleanProperty(filterCaseSensitive);
    }
    get tagging() {
        return this._tagging;
    }
    set tagging(tagging) {
        this._tagging = coerceBooleanProperty(tagging);
    }
    get multiple() {
        return this._multiple;
    }
    set multiple(multiple) {
        this._multiple = coerceBooleanProperty(multiple);
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this._disabled = coerceBooleanProperty(disabled);
    }
    get optionTemplates() {
        return this._optionTemplates;
    }
    set optionTemplates(val) {
        this._optionTemplates = val;
        if (val) {
            const arr = val.toArray();
            if (arr.length) {
                this.options = arr;
            }
        }
        this._cdr.markForCheck();
    }
    get invalid() {
        if (this.required && this.checkInvalidValue(this.value))
            return true;
        if (this.maxSelections !== undefined && this.value && this.value.length > this.maxSelections)
            return true;
        if (this.minSelections !== undefined && (!this.value || this.value.length < this.minSelections))
            return true;
        return false;
    }
    get requiredIndicatorView() {
        const required = this.required || (this.minSelections !== undefined && this.minSelections > 0);
        if (!this.requiredIndicator || !required) {
            return '';
        }
        return this.requiredIndicator;
    }
    get isSingleSelect() {
        return !this.multiple && !this.tagging;
    }
    get hasSelections() {
        return this.value && this.value.length > 0 && typeof this.value[0] !== 'undefined';
    }
    get hasPlaceholder() {
        return this.placeholder && this.placeholder.length > 0;
    }
    get value() {
        return this._value;
    }
    set value(val) {
        if (val !== this._value) {
            this._value = val;
            this.onChangeCallback(this._value);
            this.change.emit(this._value);
            this._cdr.markForCheck();
        }
    }
    get dropdownVisible() {
        if (this.disableDropdown)
            return false;
        if (this.tagging && (!this.options || !this.options.length))
            return false;
        return this.dropdownActive;
    }
    ngOnDestroy() {
        this.toggleDropdown(false);
    }
    onDropdownSelection(selection) {
        if (selection.disabled)
            return;
        if (this.value.length === this.maxSelections)
            return;
        const idx = this.value.findIndex(o => {
            if (this.identifier) {
                return o[this.identifier] === selection.value[this.identifier];
            }
            return o === selection.value;
        });
        if (idx === -1) {
            this.value = this.multiple || this.tagging ? [...this.value, selection.value] : [selection.value];
        }
        // if tagging, we need to clear current text
        if (this.tagging) {
            this.inputComponent.inputElement.nativeElement.value = '';
        }
        const shouldClose = this.closeOnSelect || !this.multiple;
        if (shouldClose) {
            this.toggleDropdown(false);
        }
    }
    onInputSelection(selections) {
        this.value = selections;
    }
    onFocus() {
        if (this.disabled)
            return;
        this.toggleDropdown(!this.dropdownActive);
        this.onTouchedCallback();
    }
    onClear() {
        this.value = [];
    }
    onBodyClick(event) {
        if (this.dropdownActive) {
            const contains = this._element.nativeElement.contains(event.target);
            /* istanbul ignore else */
            if (!contains) {
                this.toggleDropdown(false);
            }
        }
    }
    onClose() {
        this.toggleDropdown(false);
    }
    onToggle() {
        if (this.disabled)
            return;
        this.toggleDropdown(!this.dropdownActive);
        this.onTouchedCallback();
    }
    toggleDropdown(state) {
        if (this.dropdownActive === state)
            return;
        this.dropdownActive = state;
        if (this.toggleListener)
            this.toggleListener();
        this.toggle.emit(this.dropdownActive);
        if (state && this.closeOnBodyClick) {
            this.toggleListener = this._renderer.listen(document.body, 'click', this.onBodyClick.bind(this));
        }
        this._cdr.markForCheck();
    }
    onKeyUp({ event, value }) {
        if (event && event.key === KeyboardKeys.ARROW_DOWN && this.focusIndex < this.options.length) {
            ++this.focusIndex;
        }
        else {
            this.filterQuery = value;
        }
        this.keyup.emit({ event, value });
    }
    writeValue(val) {
        /* istanbul ignore else */
        if (val !== this._value) {
            this._value = val;
            this._cdr.markForCheck();
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = () => {
            this.touched = true;
            fn();
        };
    }
    checkInvalidValue(value) {
        if (Array.isArray(value)) {
            return !this.value.length || this.checkInvalidValue(value[0]);
        }
        return value === undefined;
    }
    /* istanbul ignore next */
    onChangeCallback(_) {
        // placeholder
    }
    /* istanbul ignore next */
    onTouchedCallback() {
        this.touched = true;
    }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
SelectComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: SelectComponent, selectors: [["ngx-select"]], contentQueries: function SelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, SelectOptionDirective, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.optionTemplates = _t);
    } }, viewQuery: function SelectComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(SelectInputComponent, 7);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputComponent = _t.first);
    } }, hostAttrs: [1, "ngx-select"], hostVars: 32, hostBindings: function SelectComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("id", ctx.id);
        ɵngcc0.ɵɵattribute("name", ctx.name);
        ɵngcc0.ɵɵstyleProp("min-width", ctx.autosize ? ctx.autosizeMinWidth : undefined);
        ɵngcc0.ɵɵclassProp("legacy", ctx.appearance === "legacy")("fill", ctx.appearance === "fill")("sm", ctx.size === "sm")("md", ctx.size === "md")("lg", ctx.size === "lg")("invalid", ctx.invalid && ctx.touched)("tagging-selection", ctx.tagging)("multi-selection", ctx.multiple)("single-selection", ctx.isSingleSelect)("disabled", ctx.disabled)("active", ctx.dropdownActive)("active-selections", ctx.hasSelections)("has-placeholder", ctx.hasPlaceholder)("autosize", ctx.autosize);
    } }, inputs: { id: "id", placeholder: "placeholder", emptyPlaceholder: "emptyPlaceholder", filterEmptyPlaceholder: "filterEmptyPlaceholder", filterPlaceholder: "filterPlaceholder", allowAdditionsText: "allowAdditionsText", requiredIndicator: "requiredIndicator", options: "options", minSelections: "minSelections", autosizeMinWidth: "autosizeMinWidth", maxSelections: "maxSelections", autofocus: "autofocus", autosize: "autosize", allowClear: "allowClear", allowAdditions: "allowAdditions", disableDropdown: "disableDropdown", closeOnSelect: "closeOnSelect", closeOnBodyClick: "closeOnBodyClick", filterable: "filterable", required: "required", filterCaseSensitive: "filterCaseSensitive", tagging: "tagging", multiple: "multiple", disabled: "disabled", name: "name", label: "label", hint: "hint", groupBy: "groupBy", selectCaret: "selectCaret", identifier: "identifier", groupByTemplate: "groupByTemplate" }, outputs: { change: "change", keyup: "keyup", toggle: "toggle" }, exportAs: ["ngxSelect"], features: [ɵngcc0.ɵɵProvidersFeature([SELECT_VALUE_ACCESSOR]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 5, vars: 17, consts: [[1, "ngx-select-wrap"], [1, "ngx-select-flex-wrap"], [1, "ngx-select-flex-wrap-inner"], [3, "autofocus", "options", "allowClear", "label", "requiredIndicator", "placeholder", "multiple", "identifier", "tagging", "allowAdditions", "selectCaret", "selected", "hint", "disableDropdown", "keyup", "toggle", "activate", "selection"], [3, "focusIndex", "filterQuery", "filterPlaceholder", "filterCaseSensitive", "allowAdditions", "allowAdditionsText", "selected", "groupBy", "groupByTemplate", "emptyPlaceholder", "tagging", "filterEmptyPlaceholder", "filterable", "identifier", "options", "keyup", "close", "selection", 4, "ngIf"], [3, "focusIndex", "filterQuery", "filterPlaceholder", "filterCaseSensitive", "allowAdditions", "allowAdditionsText", "selected", "groupBy", "groupByTemplate", "emptyPlaceholder", "tagging", "filterEmptyPlaceholder", "filterable", "identifier", "options", "keyup", "close", "selection"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "ngx-select-input", 3);
        ɵngcc0.ɵɵlistener("keyup", function SelectComponent_Template_ngx_select_input_keyup_3_listener($event) { return ctx.onKeyUp($event); })("toggle", function SelectComponent_Template_ngx_select_input_toggle_3_listener() { return ctx.onToggle(); })("activate", function SelectComponent_Template_ngx_select_input_activate_3_listener() { return ctx.onFocus(); })("selection", function SelectComponent_Template_ngx_select_input_selection_3_listener($event) { return ctx.onInputSelection($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, SelectComponent_ngx_select_dropdown_4_Template, 1, 15, "ngx-select-dropdown", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("min-width", ctx.autosize ? ctx.autosizeMinWidth : undefined);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("autofocus", ctx.autofocus)("options", ctx.options)("allowClear", ctx.allowClear)("label", ctx.label)("requiredIndicator", ctx.requiredIndicatorView)("placeholder", ctx.placeholder)("multiple", ctx.multiple)("identifier", ctx.identifier)("tagging", ctx.tagging)("allowAdditions", ctx.allowAdditions)("selectCaret", ctx.selectCaret)("selected", ctx.value)("hint", ctx.hint)("disableDropdown", ctx.disableDropdown);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.dropdownVisible);
    } }, directives: [ɵngcc1.SelectInputComponent, ɵngcc2.NgIf, ɵngcc3.SelectDropdownComponent], styles: ["input[type=number],input[type=password],input[type=tel],input[type=text],textarea{display:inline-block;box-sizing:border-box;outline:none}.form-input{background:#313847;border:1px solid #455066;color:#b6b6b6;transition:box-shadow .2s;border-radius:0;font-size:13px;height:32px;line-height:32px;width:100%;padding:6px;margin-bottom:1em}.form-input::-moz-placeholder{color:#647493}.form-input::placeholder{color:#647493}.form-input:focus{box-shadow:0 1px 5px 0 rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.form-input[disabled]{cursor:not-allowed;color:#363636}textarea.form-input{min-height:120px;line-height:1.3em}.ngx-input{display:block;max-width:100%;margin-top:16px;margin-bottom:8px;padding-top:calc(.7em + 8px);padding-bottom:0}.ngx-input.marginless{margin-top:0;margin-bottom:0}.ngx-input.no-label{padding-top:0}.ngx-input.md .ngx-input-box,.ngx-input.md .ngx-input-textarea{font-size:18px!important}.ngx-input.lg .ngx-input-box,.ngx-input.lg .ngx-input-textarea{font-size:21px!important}.ngx-input.focused:not(.ng-invalid) .ngx-input-label{color:#1483ff!important}.ngx-input.invalid.ng-touched .ngx-input-underline,.ngx-input.invalid.ng-touched .ngx-input-underline .underline-fill,.ngx-input.ng-invalid.ng-dirty .ngx-input-underline,.ngx-input.ng-invalid.ng-dirty .ngx-input-underline .underline-fill,.ngx-input.ng-invalid.ng-touched .ngx-input-underline,.ngx-input.ng-invalid.ng-touched .ngx-input-underline .underline-fill{background-color:#ff4514!important}.ngx-input.invalid.ng-touched .ngx-input-hint,.ngx-input.invalid.ng-touched .ngx-input-label,.ngx-input.ng-invalid.ng-dirty .ngx-input-hint,.ngx-input.ng-invalid.ng-dirty .ngx-input-label,.ngx-input.ng-invalid.ng-touched .ngx-input-hint,.ngx-input.ng-invalid.ng-touched .ngx-input-label{color:#ff4514}.ngx-input.invalid.ng-touched .ngx-input-box,.ngx-input.invalid.ng-touched .ngx-input-textarea,.ngx-input.ng-invalid.ng-dirty .ngx-input-box,.ngx-input.ng-invalid.ng-dirty .ngx-input-textarea,.ngx-input.ng-invalid.ng-touched .ngx-input-box,.ngx-input.ng-invalid.ng-touched .ngx-input-textarea{caret-color:#ff4514!important}.ngx-input.autosize{display:inline-block}.ngx-input input:-webkit-autofill,.ngx-input input:-webkit-autofill:active,.ngx-input input:-webkit-autofill:focus,.ngx-input input:-webkit-autofill:hover{-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s;-webkit-text-fill-color:#cfcfcf!important}.ngx-input .ngx-input-flex-wrap{display:flex}.ngx-input .ngx-input-flex-wrap .ngx-input-flex-wrap-inner{display:flex;flex:1;max-width:100%}.ngx-input .ngx-input-flex-wrap ngx-input-prefix,.ngx-input .ngx-input-flex-wrap ngx-input-suffix{flex:none;white-space:nowrap;display:flex;align-items:center;justify-content:center}.ngx-input .ngx-input-flex-wrap ngx-input-prefix>*,.ngx-input .ngx-input-flex-wrap ngx-input-suffix>*{display:inline-flex}.ngx-input ngx-input-prefix{margin-right:8px}.ngx-input ngx-input-suffix{margin-left:8px}.ngx-input .ngx-input-wrap{position:relative;display:block;margin-bottom:0;width:100%}.ngx-input .ngx-input-wrap .ngx-input-box-wrap{position:relative;width:100%;display:flex}.ngx-input .ngx-input-wrap .ngx-input-box-wrap:focus{outline:none}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea{flex:auto;display:block;background:transparent;border:none;margin-bottom:0;padding-left:0;width:100%;max-width:100%;color:#cdd2dd;font-size:1em;line-height:1.25em;min-height:0;font-family:inherit;caret-color:#1483ff}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box::-moz-placeholder,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea::-moz-placeholder{color:#818fa9}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box::placeholder,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea::placeholder{color:#818fa9}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box:focus,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea:focus{box-shadow:none;outline:none}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box:disabled,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea:disabled{color:#72819f;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box{margin:3px 0}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box[type=number]::-webkit-inner-spin-button{-webkit-appearance:none}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea{resize:none}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .icon-eye,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .icon-lock{line-height:25px;top:0;bottom:0;position:absolute;right:10px;cursor:pointer;font-size:.8rem;color:#9c9c9c;transition:color .1s}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .icon-eye:hover,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .icon-lock:hover{color:#b6b6b6}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .numeric-spinner{display:flex;z-index:2;opacity:0;position:absolute;right:0;top:50%;transform:translateY(-50%);flex-direction:column;transition:all .1s ease-out}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .numeric-spinner i{font-size:.625rem;color:#909cb4;cursor:pointer}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .numeric-spinner i:hover{color:#cdd2dd}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .numeric-spinner i:active{transform:scale(1.4)}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box:focus+.numeric-spinner,.ngx-input .ngx-input-wrap .ngx-input-box-wrap:hover .numeric-spinner{opacity:1}.ngx-input .ngx-input-wrap .ngx-input-label{pointer-events:none;position:absolute;font-size:13px;font-weight:600;transition:color .2s ease-in-out;color:#818fa9;white-space:nowrap;max-width:100%;overflow:hidden;text-overflow:ellipsis}.ngx-input .ngx-input-wrap .ngx-input-underline{width:100%;height:1px;background-color:#455066}.ngx-input .ngx-input-wrap .ngx-input-underline .underline-fill{background-color:#1483ff;width:100%;height:2px;margin:0 auto}.ngx-input .ngx-input-wrap .ngx-input-hint{font-size:12px;color:#818fa9;margin-top:2px;min-height:1em;line-height:14px;transition:color .2s ease-in-out}.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap .icon-eye,.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap .icon-lock{line-height:33.33px;z-index:2}.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box,.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea{margin:0;padding:6px 10px;position:relative;z-index:1}.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box+.numeric-spinner{right:10px}.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap:after{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#0c0e12;mix-blend-mode:exclusion;content:\"\"}.ngx-select{position:relative;display:block;min-width:300px;line-height:1.4em;margin-top:16px;margin-bottom:8px;padding-top:calc(.7em + 8px);padding-bottom:0}.ngx-select.autosize .ngx-select-dropdown{min-width:190px}.ngx-select.autosize .ngx-select-dropdown,.ngx-select.autosize .ngx-select-flex-wrap{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;max-width:100%}.ngx-select .ngx-select-flex-wrap{flex-direction:row;display:flex}.ngx-select .ngx-select-flex-wrap .ngx-select-flex-wrap-inner{display:flex;flex:100%;width:100%}.ngx-select .ngx-select-wrap{position:relative;display:block;margin-bottom:0;width:100%}.ngx-select .ngx-select-wrap .ngx-select-hint{font-size:12px;color:#818fa9;margin-top:2px;line-height:1.4em;min-height:1em}.ngx-select.active .ngx-select-input .ngx-select-input-underline .underline-fill{width:100%}.ngx-select.active .ngx-select-input .ngx-select-caret{transition:transform .2s ease-in-out,margin .2s ease-in-out;transform:rotate(180deg) translateY(50%)}.ngx-select.active .ngx-select-dropdown{display:block;opacity:1;-webkit-animation:openAnimation .25s;animation:openAnimation .25s}.ngx-select.disabled .ngx-select-input .ngx-select-input-box{cursor:not-allowed}.ngx-select.multi-selection .ngx-select-input-option,.ngx-select.tagging-selection .ngx-select-input-option{background:#455066;color:#fff;border-radius:2px;margin:2px 5px 2px 0;line-height:1.8;white-space:nowrap;overflow:visible;text-overflow:ellipsis;cursor:text;transition:background .1s ease-in;position:relative;top:0;padding:0 .5em;font-size:1em}.ngx-select.multi-selection .ngx-select-input-option .ngx-select-input-name,.ngx-select.tagging-selection .ngx-select-input-option .ngx-select-input-name{text-shadow:2px 4px 2px rgba(0,0,0,.1);max-width:300px;overflow:hidden;display:inline-block;white-space:nowrap;text-overflow:ellipsis;vertical-align:top}.ngx-select.multi-selection .ngx-select-input-option .ngx-select-clear,.ngx-select.tagging-selection .ngx-select-input-option .ngx-select-clear{display:inline;vertical-align:middle;font-size:.8em;color:#909cb4;transition:color .1s ease-in;cursor:pointer;line-height:1.4em}.ngx-select.multi-selection .ngx-select-input-option .ngx-select-clear:hover,.ngx-select.tagging-selection .ngx-select-input-option .ngx-select-clear:hover{color:#479eff}.ngx-select.multi-selection .ngx-select-input-option.disabled,.ngx-select.tagging-selection .ngx-select-input-option.disabled{padding-right:10px}.ngx-select.tagging-selection .ngx-select-input .ngx-select-input-box{cursor:text}.ngx-select.tagging-selection .ngx-select-input .ngx-select-input-box-wrapper{position:relative}.ngx-select.tagging-selection .ngx-select-input .ngx-select-input-box-wrapper .ngx-select-text-box{background-color:transparent;border:none;outline:none;-webkit-appearance:none;color:#cdd2dd;line-height:20px;display:inline-block;font-size:1rem;vertical-align:bottom}.ngx-select.tagging-selection .ngx-select-input .ngx-select-input-box-wrapper .ngx-select-text-box::-webkit-search-cancel-button,.ngx-select.tagging-selection .ngx-select-input .ngx-select-input-box-wrapper .ngx-select-text-box::-webkit-search-decoration,.ngx-select.tagging-selection .ngx-select-input .ngx-select-input-box-wrapper .ngx-select-text-box::-webkit-search-results-button,.ngx-select.tagging-selection .ngx-select-input .ngx-select-input-box-wrapper .ngx-select-text-box::-webkit-search-results-decoration{-webkit-appearance:none!important}.ngx-select.tagging-selection .ngx-select-input .ngx-select-input-box-wrapper .ngx-select-text-box:focus{outline:none}.ngx-select.tagging-selection .ngx-select-input .ngx-select-input-box-wrapper i.ngx-x{font-size:9px;top:50%;margin-top:-4.5px;right:10px;color:#909cb4;z-index:500;cursor:pointer}.ngx-select.tagging-selection .ngx-select-input .ngx-select-input-box-wrapper i.ngx-x:hover{color:#479eff}.ngx-select.single-selection .ngx-select-input .ngx-select-input-list .ngx-select-input-option{width:100%;white-space:nowrap;text-overflow:ellipsis;display:block;color:#cdd2dd;overflow-x:hidden;overflow-y:visible}.ngx-select.single-selection .ngx-select-input .ngx-select-clear{position:absolute;top:1em;right:20px;transform:translateY(-50%);cursor:pointer;color:#818fa9;font-size:12px;height:auto;line-height:normal}.ngx-select.single-selection .ngx-select-input .ngx-select-clear:hover{color:#cfcfcf}.ngx-select .ngx-select-input{display:block;position:relative;margin-bottom:0;width:100%}.ngx-select .ngx-select-input .ngx-select-input-box{background:transparent;outline:none;margin-bottom:0;padding-left:0;width:100%;min-height:1em;min-width:60px;cursor:pointer;display:inline-block;vertical-align:bottom}.ngx-select .ngx-select-input .ngx-select-input-underline{width:100%;height:1px;margin-top:2px;background-color:#455066}.ngx-select .ngx-select-input .ngx-select-input-underline .underline-fill{background-color:#1483ff;transition:width .25s ease-out;width:0;height:2px;margin:0 auto}.ngx-select .ngx-select-input .ngx-select-input-box:focus+.ngx-select-input-underline .underline-fill{width:100%}.ngx-select .ngx-select-input .ngx-select-input-list{padding:0 40px 0 0;color:#b6b6b6;min-height:1.4em;max-width:100%}.ngx-select .ngx-select-input .ngx-select-label{pointer-events:none;position:absolute;top:0;transition:.15s ease-out}.ngx-select .ngx-select-input .ngx-select-caret{position:absolute;top:1em;right:5px;transition:transform .2s ease-in-out,margin .2s ease-in-out;transform:translateY(-50%);cursor:pointer;color:#818fa9;font-size:.7em}.ngx-select .ngx-select-input .ngx-select-placeholder{display:block;cursor:pointer;color:#818fa9;padding:0 25px 0 0;overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:100%}.ngx-select .ngx-select-dropdown{position:absolute;clear:left;top:100%;left:0;z-index:1000;width:100%;background:#313847;border:1px solid #3b4457;box-shadow:0 4px 4px rgba(0,0,0,.25);margin-top:10px;opacity:0;display:none;transition:visibility 0s,opacity .25s ease-out}.ngx-select .ngx-select-dropdown li{max-width:100%;white-space:nowrap;position:relative}.ngx-select .ngx-select-dropdown li:not(:last-child){border-bottom:1px solid #3b4457}.ngx-select .ngx-select-dropdown li .ngx-check{color:#479eff;position:absolute;right:15px;top:50%;margin-top:-7.5px}.ngx-select .ngx-select-dropdown .ngx-select-dropdown-options{max-height:300px;overflow-y:auto}.ngx-select .ngx-select-dropdown .ngx-select-dropdown-options .ngx-select-dropdown-option{padding:7px 35px 7px 15px;font-size:15px;overflow-x:hidden;overflow-y:visible;text-overflow:ellipsis}.ngx-select .ngx-select-dropdown .ngx-select-dropdown-options .ngx-select-dropdown-option.disabled{color:#647493;opacity:1}.ngx-select .ngx-select-dropdown .ngx-select-dropdown-options .ngx-select-dropdown-option:not(.disabled){cursor:pointer}.ngx-select .ngx-select-dropdown .ngx-select-dropdown-options .ngx-select-dropdown-option:not(.disabled):not(.selected).active,.ngx-select .ngx-select-dropdown .ngx-select-dropdown-options .ngx-select-dropdown-option:not(.disabled):not(.selected):hover{background:#2b3240}.ngx-select .ngx-select-dropdown .ngx-select-dropdown-options .ngx-select-dropdown-option.selected{background:#262c38}.ngx-select .ngx-select-dropdown .ngx-select-dropdown-options .ngx-select-dropdown-option.selected:not(.disabled).active,.ngx-select .ngx-select-dropdown .ngx-select-dropdown-options .ngx-select-dropdown-option.selected:not(.disabled):hover{background:#2b3240}.ngx-select .ngx-select-dropdown.groupings .ngx-select-option-group .ngx-select-option-group-name{padding:7px 15px;font-size:1rem;display:block;font-weight:600;line-height:20px;color:#909cb4;overflow-x:hidden;text-overflow:ellipsis}.ngx-select .ngx-select-dropdown.groupings .ngx-select-dropdown-options .ngx-select-dropdown-option{padding:7px 35px 7px 25px}.ngx-select .ngx-select-dropdown .ngx-select-filter{padding:10px;background:#455066;position:relative}.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-search,.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-x{position:absolute;top:50%;color:#818fa9}.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-search{left:10px;font-size:.75rem;margin-top:-6px}.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-x{right:11px;font-size:.5625rem;margin-top:-4.5px;cursor:pointer}.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-x:hover{color:#909cb4}.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-select-filter-input{color:#ebedf2;background:transparent;border:none;outline:none;display:block;font-size:15px;width:100%;padding-left:19px}.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-select-filter-input::-webkit-search-cancel-button,.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-select-filter-input::-webkit-search-decoration,.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-select-filter-input::-webkit-search-results-button,.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-select-filter-input::-webkit-search-results-decoration{-webkit-appearance:none}.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-select-filter-input::-moz-placeholder{color:#818fa9}.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-select-filter-input::placeholder{color:#818fa9}.ngx-select .ngx-select-dropdown .ngx-select-empty-placeholder{color:#bec5d3;padding:7px 15px;font-size:15px;font-style:italic}.ngx-select .ngx-select-dropdown .ngx-select-empty-placeholder .ngx-select-empty-placeholder-add{font-style:normal;float:right}.ngx-select .ngx-select-dropdown .ngx-select-empty-placeholder .ngx-select-add-current-value{font-style:normal}.ngx-select .ngx-select-dropdown .ngx-select-empty-placeholder .ngx-select-add-current-value span{text-align:right;display:block}.ngx-select.active-selections .ngx-select-input .ngx-select-label,.ngx-select.active .ngx-select-input .ngx-select-label,.ngx-select.has-placeholder .ngx-select-input .ngx-select-label{position:absolute;font-size:.8125em;top:-1.563em;left:0;line-height:1.875em}.ngx-select.invalid .ngx-select-label{font-weight:600;color:#ff4514}.ngx-select.invalid .ngx-select-caret,.ngx-select.invalid .ngx-select-hint{color:#ff4514}.ngx-select.invalid .ngx-select-input-underline{background-color:#ff4514}.ngx-select.autosize .ngx-select-label,.ngx-select.fill .ngx-select-label{white-space:nowrap;max-width:100%;overflow-x:hidden;text-overflow:ellipsis;padding-right:25px;position:static}.ngx-select.fill{padding:0;margin:0}.ngx-select.fill .ngx-select-input-box{margin:0;padding:3px 0;min-height:1.75rem;position:relative;z-index:1;color:#ebedf2}.ngx-select.fill .ngx-select-input-list{padding-left:10px}.ngx-select.fill .ngx-select-wrap{position:static}.ngx-select.fill .ngx-select-flex-wrap{position:relative}.ngx-select.fill .ngx-select-flex-wrap .ngx-select-input-box:after{position:absolute;top:0;right:0;bottom:-2px;left:0;z-index:-1;opacity:.25;background-color:#3b4457;mix-blend-mode:exclusion;border-radius:1px 1px 0 0;content:\"\"}.ngx-select.fill .ngx-select-caret,.ngx-select.fill.single-selection .ngx-select-input .ngx-select-clear{top:50%;z-index:500}.ngx-select.fill .ngx-select-label{padding-left:10px;line-height:0}.ngx-select.fill .ngx-select-placeholder{padding-left:10px}.ngx-select.fill.active-selections .ngx-select-label,.ngx-select.fill.active .ngx-select-label,.ngx-select.fill.has-placeholder .ngx-select-label{padding:0;line-height:1.875em}.ngx-select.fill.tagging-selection:not(.active) .ngx-select-input-list.no-selections{position:absolute;bottom:0}.ngx-select.active:not(.ng-invalid) .ngx-select-caret,.ngx-select.active:not(.ng-invalid) .ngx-select-label,.ngx-select.active:not(.ng-invalid).single-selection .ngx-select-clear{color:#1483ff}.ngx-select.active:not(.ng-invalid) .ngx-select-caret:hover,.ngx-select.active:not(.ng-invalid) .ngx-select-label:hover,.ngx-select.active:not(.ng-invalid).single-selection .ngx-select-clear:hover{color:#479eff}@-webkit-keyframes openAnimation{0%{transform:translateY(-25px)}to{transform:translateY(0)}}@keyframes openAnimation{0%{transform:translateY(-25px)}to{transform:translateY(0)}}"], encapsulation: 2, changeDetection: 0 });
SelectComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
SelectComponent.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    label: [{ type: Input }],
    hint: [{ type: Input }],
    placeholder: [{ type: Input }],
    emptyPlaceholder: [{ type: Input }],
    filterEmptyPlaceholder: [{ type: Input }],
    filterPlaceholder: [{ type: Input }],
    allowAdditionsText: [{ type: Input }],
    groupBy: [{ type: Input }],
    selectCaret: [{ type: Input }],
    requiredIndicator: [{ type: Input }],
    options: [{ type: Input }],
    identifier: [{ type: Input }],
    minSelections: [{ type: Input }],
    autosizeMinWidth: [{ type: Input }],
    maxSelections: [{ type: Input }],
    autofocus: [{ type: Input }],
    autosize: [{ type: Input }],
    allowClear: [{ type: Input }],
    allowAdditions: [{ type: Input }],
    disableDropdown: [{ type: Input }],
    closeOnSelect: [{ type: Input }],
    closeOnBodyClick: [{ type: Input }],
    filterable: [{ type: Input }],
    required: [{ type: Input }],
    filterCaseSensitive: [{ type: Input }],
    tagging: [{ type: Input }],
    multiple: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    keyup: [{ type: Output }],
    toggle: [{ type: Output }],
    inputComponent: [{ type: ViewChild, args: [SelectInputComponent, { static: true },] }],
    groupByTemplate: [{ type: Input }],
    optionTemplates: [{ type: ContentChildren, args: [SelectOptionDirective, { descendants: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SelectComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxSelect',
                selector: 'ngx-select',
                template: "<div class=\"ngx-select-wrap\">\n  <div class=\"ngx-select-flex-wrap\" [style.min-width]=\"autosize ? autosizeMinWidth : undefined\">\n    <div class=\"ngx-select-flex-wrap-inner\">\n      <ngx-select-input\n        [autofocus]=\"autofocus\"\n        [options]=\"options\"\n        [allowClear]=\"allowClear\"\n        [label]=\"label\"\n        [requiredIndicator]=\"requiredIndicatorView\"\n        [placeholder]=\"placeholder\"\n        [multiple]=\"multiple\"\n        [identifier]=\"identifier\"\n        [tagging]=\"tagging\"\n        [allowAdditions]=\"allowAdditions\"\n        [selectCaret]=\"selectCaret\"\n        [selected]=\"value\"\n        [hint]=\"hint\"\n        [disableDropdown]=\"disableDropdown\"\n        (keyup)=\"onKeyUp($event)\"\n        (toggle)=\"onToggle()\"\n        (activate)=\"onFocus()\"\n        (selection)=\"onInputSelection($event)\"\n      >\n      </ngx-select-input>\n    </div>\n  </div>\n  <ngx-select-dropdown\n    *ngIf=\"dropdownVisible\"\n    [focusIndex]=\"focusIndex\"\n    [filterQuery]=\"filterQuery\"\n    [filterPlaceholder]=\"filterPlaceholder\"\n    [filterCaseSensitive]=\"filterCaseSensitive\"\n    [allowAdditions]=\"allowAdditions\"\n    [allowAdditionsText]=\"allowAdditionsText\"\n    [selected]=\"value\"\n    [groupBy]=\"groupBy\"\n    [groupByTemplate]=\"groupByTemplate\"\n    [emptyPlaceholder]=\"emptyPlaceholder\"\n    [tagging]=\"tagging\"\n    [filterEmptyPlaceholder]=\"filterEmptyPlaceholder\"\n    [filterable]=\"filterable\"\n    [identifier]=\"identifier\"\n    [options]=\"options\"\n    (keyup)=\"keyup.emit($event)\"\n    (close)=\"onClose()\"\n    (selection)=\"onDropdownSelection($event)\"\n  >\n  </ngx-select-dropdown>\n</div>\n",
                host: {
                    class: 'ngx-select',
                    '[id]': 'id',
                    '[attr.name]': 'name',
                    '[class.legacy]': 'appearance === "legacy"',
                    '[class.fill]': 'appearance === "fill"',
                    '[class.sm]': 'size === "sm"',
                    '[class.md]': 'size === "md"',
                    '[class.lg]': 'size === "lg"',
                    '[class.invalid]': 'invalid && touched',
                    '[class.tagging-selection]': 'tagging',
                    '[class.multi-selection]': 'multiple',
                    '[class.single-selection]': 'isSingleSelect',
                    '[class.disabled]': 'disabled',
                    '[class.active]': 'dropdownActive',
                    '[class.active-selections]': 'hasSelections',
                    '[class.has-placeholder]': 'hasPlaceholder',
                    '[class.autosize]': 'autosize',
                    '[style.min-width]': 'autosize ? autosizeMinWidth : undefined'
                },
                providers: [SELECT_VALUE_ACCESSOR],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["input[type=number],input[type=password],input[type=tel],input[type=text],textarea{display:inline-block;box-sizing:border-box;outline:none}.form-input{background:#313847;border:1px solid #455066;color:#b6b6b6;transition:box-shadow .2s;border-radius:0;font-size:13px;height:32px;line-height:32px;width:100%;padding:6px;margin-bottom:1em}.form-input::-moz-placeholder{color:#647493}.form-input::placeholder{color:#647493}.form-input:focus{box-shadow:0 1px 5px 0 rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.form-input[disabled]{cursor:not-allowed;color:#363636}textarea.form-input{min-height:120px;line-height:1.3em}.ngx-input{display:block;max-width:100%;margin-top:16px;margin-bottom:8px;padding-top:calc(.7em + 8px);padding-bottom:0}.ngx-input.marginless{margin-top:0;margin-bottom:0}.ngx-input.no-label{padding-top:0}.ngx-input.md .ngx-input-box,.ngx-input.md .ngx-input-textarea{font-size:18px!important}.ngx-input.lg .ngx-input-box,.ngx-input.lg .ngx-input-textarea{font-size:21px!important}.ngx-input.focused:not(.ng-invalid) .ngx-input-label{color:#1483ff!important}.ngx-input.invalid.ng-touched .ngx-input-underline,.ngx-input.invalid.ng-touched .ngx-input-underline .underline-fill,.ngx-input.ng-invalid.ng-dirty .ngx-input-underline,.ngx-input.ng-invalid.ng-dirty .ngx-input-underline .underline-fill,.ngx-input.ng-invalid.ng-touched .ngx-input-underline,.ngx-input.ng-invalid.ng-touched .ngx-input-underline .underline-fill{background-color:#ff4514!important}.ngx-input.invalid.ng-touched .ngx-input-hint,.ngx-input.invalid.ng-touched .ngx-input-label,.ngx-input.ng-invalid.ng-dirty .ngx-input-hint,.ngx-input.ng-invalid.ng-dirty .ngx-input-label,.ngx-input.ng-invalid.ng-touched .ngx-input-hint,.ngx-input.ng-invalid.ng-touched .ngx-input-label{color:#ff4514}.ngx-input.invalid.ng-touched .ngx-input-box,.ngx-input.invalid.ng-touched .ngx-input-textarea,.ngx-input.ng-invalid.ng-dirty .ngx-input-box,.ngx-input.ng-invalid.ng-dirty .ngx-input-textarea,.ngx-input.ng-invalid.ng-touched .ngx-input-box,.ngx-input.ng-invalid.ng-touched .ngx-input-textarea{caret-color:#ff4514!important}.ngx-input.autosize{display:inline-block}.ngx-input input:-webkit-autofill,.ngx-input input:-webkit-autofill:active,.ngx-input input:-webkit-autofill:focus,.ngx-input input:-webkit-autofill:hover{-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s;-webkit-text-fill-color:#cfcfcf!important}.ngx-input .ngx-input-flex-wrap{display:flex}.ngx-input .ngx-input-flex-wrap .ngx-input-flex-wrap-inner{display:flex;flex:1;max-width:100%}.ngx-input .ngx-input-flex-wrap ngx-input-prefix,.ngx-input .ngx-input-flex-wrap ngx-input-suffix{flex:none;white-space:nowrap;display:flex;align-items:center;justify-content:center}.ngx-input .ngx-input-flex-wrap ngx-input-prefix>*,.ngx-input .ngx-input-flex-wrap ngx-input-suffix>*{display:inline-flex}.ngx-input ngx-input-prefix{margin-right:8px}.ngx-input ngx-input-suffix{margin-left:8px}.ngx-input .ngx-input-wrap{position:relative;display:block;margin-bottom:0;width:100%}.ngx-input .ngx-input-wrap .ngx-input-box-wrap{position:relative;width:100%;display:flex}.ngx-input .ngx-input-wrap .ngx-input-box-wrap:focus{outline:none}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea{flex:auto;display:block;background:transparent;border:none;margin-bottom:0;padding-left:0;width:100%;max-width:100%;color:#cdd2dd;font-size:1em;line-height:1.25em;min-height:0;font-family:inherit;caret-color:#1483ff}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box::-moz-placeholder,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea::-moz-placeholder{color:#818fa9}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box::placeholder,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea::placeholder{color:#818fa9}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box:focus,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea:focus{box-shadow:none;outline:none}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box:disabled,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea:disabled{color:#72819f;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box{margin:3px 0}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box[type=number]::-webkit-inner-spin-button{-webkit-appearance:none}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea{resize:none}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .icon-eye,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .icon-lock{line-height:25px;top:0;bottom:0;position:absolute;right:10px;cursor:pointer;font-size:.8rem;color:#9c9c9c;transition:color .1s}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .icon-eye:hover,.ngx-input .ngx-input-wrap .ngx-input-box-wrap .icon-lock:hover{color:#b6b6b6}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .numeric-spinner{display:flex;z-index:2;opacity:0;position:absolute;right:0;top:50%;transform:translateY(-50%);flex-direction:column;transition:all .1s ease-out}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .numeric-spinner i{font-size:.625rem;color:#909cb4;cursor:pointer}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .numeric-spinner i:hover{color:#cdd2dd}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .numeric-spinner i:active{transform:scale(1.4)}.ngx-input .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box:focus+.numeric-spinner,.ngx-input .ngx-input-wrap .ngx-input-box-wrap:hover .numeric-spinner{opacity:1}.ngx-input .ngx-input-wrap .ngx-input-label{pointer-events:none;position:absolute;font-size:13px;font-weight:600;transition:color .2s ease-in-out;color:#818fa9;white-space:nowrap;max-width:100%;overflow:hidden;text-overflow:ellipsis}.ngx-input .ngx-input-wrap .ngx-input-underline{width:100%;height:1px;background-color:#455066}.ngx-input .ngx-input-wrap .ngx-input-underline .underline-fill{background-color:#1483ff;width:100%;height:2px;margin:0 auto}.ngx-input .ngx-input-wrap .ngx-input-hint{font-size:12px;color:#818fa9;margin-top:2px;min-height:1em;line-height:14px;transition:color .2s ease-in-out}.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap .icon-eye,.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap .icon-lock{line-height:33.33px;z-index:2}.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box,.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap .ngx-input-textarea{margin:0;padding:6px 10px;position:relative;z-index:1}.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap .ngx-input-box+.numeric-spinner{right:10px}.ngx-input.fill .ngx-input-wrap .ngx-input-box-wrap:after{position:absolute;top:0;right:0;bottom:0;left:0;background-color:#0c0e12;mix-blend-mode:exclusion;content:\"\"}.ngx-select{position:relative;display:block;min-width:300px;line-height:1.4em;margin-top:16px;margin-bottom:8px;padding-top:calc(.7em + 8px);padding-bottom:0}.ngx-select.autosize .ngx-select-dropdown{min-width:190px}.ngx-select.autosize .ngx-select-dropdown,.ngx-select.autosize .ngx-select-flex-wrap{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;max-width:100%}.ngx-select .ngx-select-flex-wrap{flex-direction:row;display:flex}.ngx-select .ngx-select-flex-wrap .ngx-select-flex-wrap-inner{display:flex;flex:100%;width:100%}.ngx-select .ngx-select-wrap{position:relative;display:block;margin-bottom:0;width:100%}.ngx-select .ngx-select-wrap .ngx-select-hint{font-size:12px;color:#818fa9;margin-top:2px;line-height:1.4em;min-height:1em}.ngx-select.active .ngx-select-input .ngx-select-input-underline .underline-fill{width:100%}.ngx-select.active .ngx-select-input .ngx-select-caret{transition:transform .2s ease-in-out,margin .2s ease-in-out;transform:rotate(180deg) translateY(50%)}.ngx-select.active .ngx-select-dropdown{display:block;opacity:1;-webkit-animation:openAnimation .25s;animation:openAnimation .25s}.ngx-select.disabled .ngx-select-input .ngx-select-input-box{cursor:not-allowed}.ngx-select.multi-selection .ngx-select-input-option,.ngx-select.tagging-selection .ngx-select-input-option{background:#455066;color:#fff;border-radius:2px;margin:2px 5px 2px 0;line-height:1.8;white-space:nowrap;overflow:visible;text-overflow:ellipsis;cursor:text;transition:background .1s ease-in;position:relative;top:0;padding:0 .5em;font-size:1em}.ngx-select.multi-selection .ngx-select-input-option .ngx-select-input-name,.ngx-select.tagging-selection .ngx-select-input-option .ngx-select-input-name{text-shadow:2px 4px 2px rgba(0,0,0,.1);max-width:300px;overflow:hidden;display:inline-block;white-space:nowrap;text-overflow:ellipsis;vertical-align:top}.ngx-select.multi-selection .ngx-select-input-option .ngx-select-clear,.ngx-select.tagging-selection .ngx-select-input-option .ngx-select-clear{display:inline;vertical-align:middle;font-size:.8em;color:#909cb4;transition:color .1s ease-in;cursor:pointer;line-height:1.4em}.ngx-select.multi-selection .ngx-select-input-option .ngx-select-clear:hover,.ngx-select.tagging-selection .ngx-select-input-option .ngx-select-clear:hover{color:#479eff}.ngx-select.multi-selection .ngx-select-input-option.disabled,.ngx-select.tagging-selection .ngx-select-input-option.disabled{padding-right:10px}.ngx-select.tagging-selection .ngx-select-input .ngx-select-input-box{cursor:text}.ngx-select.tagging-selection .ngx-select-input .ngx-select-input-box-wrapper{position:relative}.ngx-select.tagging-selection .ngx-select-input .ngx-select-input-box-wrapper .ngx-select-text-box{background-color:transparent;border:none;outline:none;-webkit-appearance:none;color:#cdd2dd;line-height:20px;display:inline-block;font-size:1rem;vertical-align:bottom}.ngx-select.tagging-selection .ngx-select-input .ngx-select-input-box-wrapper .ngx-select-text-box::-webkit-search-cancel-button,.ngx-select.tagging-selection .ngx-select-input .ngx-select-input-box-wrapper .ngx-select-text-box::-webkit-search-decoration,.ngx-select.tagging-selection .ngx-select-input .ngx-select-input-box-wrapper .ngx-select-text-box::-webkit-search-results-button,.ngx-select.tagging-selection .ngx-select-input .ngx-select-input-box-wrapper .ngx-select-text-box::-webkit-search-results-decoration{-webkit-appearance:none!important}.ngx-select.tagging-selection .ngx-select-input .ngx-select-input-box-wrapper .ngx-select-text-box:focus{outline:none}.ngx-select.tagging-selection .ngx-select-input .ngx-select-input-box-wrapper i.ngx-x{font-size:9px;top:50%;margin-top:-4.5px;right:10px;color:#909cb4;z-index:500;cursor:pointer}.ngx-select.tagging-selection .ngx-select-input .ngx-select-input-box-wrapper i.ngx-x:hover{color:#479eff}.ngx-select.single-selection .ngx-select-input .ngx-select-input-list .ngx-select-input-option{width:100%;white-space:nowrap;text-overflow:ellipsis;display:block;color:#cdd2dd;overflow-x:hidden;overflow-y:visible}.ngx-select.single-selection .ngx-select-input .ngx-select-clear{position:absolute;top:1em;right:20px;transform:translateY(-50%);cursor:pointer;color:#818fa9;font-size:12px;height:auto;line-height:normal}.ngx-select.single-selection .ngx-select-input .ngx-select-clear:hover{color:#cfcfcf}.ngx-select .ngx-select-input{display:block;position:relative;margin-bottom:0;width:100%}.ngx-select .ngx-select-input .ngx-select-input-box{background:transparent;outline:none;margin-bottom:0;padding-left:0;width:100%;min-height:1em;min-width:60px;cursor:pointer;display:inline-block;vertical-align:bottom}.ngx-select .ngx-select-input .ngx-select-input-underline{width:100%;height:1px;margin-top:2px;background-color:#455066}.ngx-select .ngx-select-input .ngx-select-input-underline .underline-fill{background-color:#1483ff;transition:width .25s ease-out;width:0;height:2px;margin:0 auto}.ngx-select .ngx-select-input .ngx-select-input-box:focus+.ngx-select-input-underline .underline-fill{width:100%}.ngx-select .ngx-select-input .ngx-select-input-list{padding:0 40px 0 0;color:#b6b6b6;min-height:1.4em;max-width:100%}.ngx-select .ngx-select-input .ngx-select-label{pointer-events:none;position:absolute;top:0;transition:.15s ease-out}.ngx-select .ngx-select-input .ngx-select-caret{position:absolute;top:1em;right:5px;transition:transform .2s ease-in-out,margin .2s ease-in-out;transform:translateY(-50%);cursor:pointer;color:#818fa9;font-size:.7em}.ngx-select .ngx-select-input .ngx-select-placeholder{display:block;cursor:pointer;color:#818fa9;padding:0 25px 0 0;overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:100%}.ngx-select .ngx-select-dropdown{position:absolute;clear:left;top:100%;left:0;z-index:1000;width:100%;background:#313847;border:1px solid #3b4457;box-shadow:0 4px 4px rgba(0,0,0,.25);margin-top:10px;opacity:0;display:none;transition:visibility 0s,opacity .25s ease-out}.ngx-select .ngx-select-dropdown li{max-width:100%;white-space:nowrap;position:relative}.ngx-select .ngx-select-dropdown li:not(:last-child){border-bottom:1px solid #3b4457}.ngx-select .ngx-select-dropdown li .ngx-check{color:#479eff;position:absolute;right:15px;top:50%;margin-top:-7.5px}.ngx-select .ngx-select-dropdown .ngx-select-dropdown-options{max-height:300px;overflow-y:auto}.ngx-select .ngx-select-dropdown .ngx-select-dropdown-options .ngx-select-dropdown-option{padding:7px 35px 7px 15px;font-size:15px;overflow-x:hidden;overflow-y:visible;text-overflow:ellipsis}.ngx-select .ngx-select-dropdown .ngx-select-dropdown-options .ngx-select-dropdown-option.disabled{color:#647493;opacity:1}.ngx-select .ngx-select-dropdown .ngx-select-dropdown-options .ngx-select-dropdown-option:not(.disabled){cursor:pointer}.ngx-select .ngx-select-dropdown .ngx-select-dropdown-options .ngx-select-dropdown-option:not(.disabled):not(.selected).active,.ngx-select .ngx-select-dropdown .ngx-select-dropdown-options .ngx-select-dropdown-option:not(.disabled):not(.selected):hover{background:#2b3240}.ngx-select .ngx-select-dropdown .ngx-select-dropdown-options .ngx-select-dropdown-option.selected{background:#262c38}.ngx-select .ngx-select-dropdown .ngx-select-dropdown-options .ngx-select-dropdown-option.selected:not(.disabled).active,.ngx-select .ngx-select-dropdown .ngx-select-dropdown-options .ngx-select-dropdown-option.selected:not(.disabled):hover{background:#2b3240}.ngx-select .ngx-select-dropdown.groupings .ngx-select-option-group .ngx-select-option-group-name{padding:7px 15px;font-size:1rem;display:block;font-weight:600;line-height:20px;color:#909cb4;overflow-x:hidden;text-overflow:ellipsis}.ngx-select .ngx-select-dropdown.groupings .ngx-select-dropdown-options .ngx-select-dropdown-option{padding:7px 35px 7px 25px}.ngx-select .ngx-select-dropdown .ngx-select-filter{padding:10px;background:#455066;position:relative}.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-search,.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-x{position:absolute;top:50%;color:#818fa9}.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-search{left:10px;font-size:.75rem;margin-top:-6px}.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-x{right:11px;font-size:.5625rem;margin-top:-4.5px;cursor:pointer}.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-x:hover{color:#909cb4}.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-select-filter-input{color:#ebedf2;background:transparent;border:none;outline:none;display:block;font-size:15px;width:100%;padding-left:19px}.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-select-filter-input::-webkit-search-cancel-button,.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-select-filter-input::-webkit-search-decoration,.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-select-filter-input::-webkit-search-results-button,.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-select-filter-input::-webkit-search-results-decoration{-webkit-appearance:none}.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-select-filter-input::-moz-placeholder{color:#818fa9}.ngx-select .ngx-select-dropdown .ngx-select-filter .ngx-select-filter-input::placeholder{color:#818fa9}.ngx-select .ngx-select-dropdown .ngx-select-empty-placeholder{color:#bec5d3;padding:7px 15px;font-size:15px;font-style:italic}.ngx-select .ngx-select-dropdown .ngx-select-empty-placeholder .ngx-select-empty-placeholder-add{font-style:normal;float:right}.ngx-select .ngx-select-dropdown .ngx-select-empty-placeholder .ngx-select-add-current-value{font-style:normal}.ngx-select .ngx-select-dropdown .ngx-select-empty-placeholder .ngx-select-add-current-value span{text-align:right;display:block}.ngx-select.active-selections .ngx-select-input .ngx-select-label,.ngx-select.active .ngx-select-input .ngx-select-label,.ngx-select.has-placeholder .ngx-select-input .ngx-select-label{position:absolute;font-size:.8125em;top:-1.563em;left:0;line-height:1.875em}.ngx-select.invalid .ngx-select-label{font-weight:600;color:#ff4514}.ngx-select.invalid .ngx-select-caret,.ngx-select.invalid .ngx-select-hint{color:#ff4514}.ngx-select.invalid .ngx-select-input-underline{background-color:#ff4514}.ngx-select.autosize .ngx-select-label,.ngx-select.fill .ngx-select-label{white-space:nowrap;max-width:100%;overflow-x:hidden;text-overflow:ellipsis;padding-right:25px;position:static}.ngx-select.fill{padding:0;margin:0}.ngx-select.fill .ngx-select-input-box{margin:0;padding:3px 0;min-height:1.75rem;position:relative;z-index:1;color:#ebedf2}.ngx-select.fill .ngx-select-input-list{padding-left:10px}.ngx-select.fill .ngx-select-wrap{position:static}.ngx-select.fill .ngx-select-flex-wrap{position:relative}.ngx-select.fill .ngx-select-flex-wrap .ngx-select-input-box:after{position:absolute;top:0;right:0;bottom:-2px;left:0;z-index:-1;opacity:.25;background-color:#3b4457;mix-blend-mode:exclusion;border-radius:1px 1px 0 0;content:\"\"}.ngx-select.fill .ngx-select-caret,.ngx-select.fill.single-selection .ngx-select-input .ngx-select-clear{top:50%;z-index:500}.ngx-select.fill .ngx-select-label{padding-left:10px;line-height:0}.ngx-select.fill .ngx-select-placeholder{padding-left:10px}.ngx-select.fill.active-selections .ngx-select-label,.ngx-select.fill.active .ngx-select-label,.ngx-select.fill.has-placeholder .ngx-select-label{padding:0;line-height:1.875em}.ngx-select.fill.tagging-selection:not(.active) .ngx-select-input-list.no-selections{position:absolute;bottom:0}.ngx-select.active:not(.ng-invalid) .ngx-select-caret,.ngx-select.active:not(.ng-invalid) .ngx-select-label,.ngx-select.active:not(.ng-invalid).single-selection .ngx-select-clear{color:#1483ff}.ngx-select.active:not(.ng-invalid) .ngx-select-caret:hover,.ngx-select.active:not(.ng-invalid) .ngx-select-label:hover,.ngx-select.active:not(.ng-invalid).single-selection .ngx-select-clear:hover{color:#479eff}@-webkit-keyframes openAnimation{0%{transform:translateY(-25px)}to{transform:translateY(0)}}@keyframes openAnimation{0%{transform:translateY(-25px)}to{transform:translateY(0)}}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], emptyPlaceholder: [{
            type: Input
        }], filterEmptyPlaceholder: [{
            type: Input
        }], filterPlaceholder: [{
            type: Input
        }], allowAdditionsText: [{
            type: Input
        }], requiredIndicator: [{
            type: Input
        }], options: [{
            type: Input
        }], change: [{
            type: Output
        }], keyup: [{
            type: Output
        }], toggle: [{
            type: Output
        }], minSelections: [{
            type: Input
        }], autosizeMinWidth: [{
            type: Input
        }], maxSelections: [{
            type: Input
        }], autofocus: [{
            type: Input
        }], autosize: [{
            type: Input
        }], allowClear: [{
            type: Input
        }], allowAdditions: [{
            type: Input
        }], disableDropdown: [{
            type: Input
        }], closeOnSelect: [{
            type: Input
        }], closeOnBodyClick: [{
            type: Input
        }], filterable: [{
            type: Input
        }], required: [{
            type: Input
        }], filterCaseSensitive: [{
            type: Input
        }], tagging: [{
            type: Input
        }], multiple: [{
            type: Input
        }], disabled: [{
            type: Input
        }], optionTemplates: [{
            type: ContentChildren,
            args: [SelectOptionDirective, { descendants: true }]
        }], name: [{
            type: Input
        }], label: [{
            type: Input
        }], hint: [{
            type: Input
        }], groupBy: [{
            type: Input
        }], selectCaret: [{
            type: Input
        }], identifier: [{
            type: Input
        }], inputComponent: [{
            type: ViewChild,
            args: [SelectInputComponent, { static: true }]
        }], groupByTemplate: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQUVsRSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFFZixNQUFNLHFCQUFxQixHQUFHO0FBQzlCLElBQUUsT0FBTyxFQUFFLGlCQUFpQjtBQUM1QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDO0FBQ2hELElBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixDQUFDLENBQUM7QUFFRixNQUFNLFNBQVM7QUFBRyxDQUFBO0FBRWxCLE1BQU0sZUFBZSxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQStCOUQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsZUFBZTtBQUFHLElBb1JyRCxZQUNtQixRQUFvQixFQUNwQixTQUFvQixFQUNwQixJQUF1QjtBQUN6QyxRQUNDLEtBQUssRUFBRSxDQUFDO0FBQ1osUUFMcUIsYUFBUSxHQUFSLFFBQVEsQ0FBWTtBQUFDLFFBQ3JCLGNBQVMsR0FBVCxTQUFTLENBQVc7QUFBQyxRQUNyQixTQUFJLEdBQUosSUFBSSxDQUFtQjtBQUM1QyxRQXZSVyxPQUFFLEdBQUcsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0FBQ3JDLFFBR1csZ0JBQVcsR0FBRyxFQUFFLENBQUM7QUFDNUIsUUFBVyxxQkFBZ0IsR0FBRyxzQkFBc0IsQ0FBQztBQUNyRCxRQUFXLDJCQUFzQixHQUFHLGVBQWUsQ0FBQztBQUNwRCxRQUFXLHNCQUFpQixHQUFHLG1CQUFtQixDQUFDO0FBQ25ELFFBQVcsdUJBQWtCLEdBQUcsV0FBVyxDQUFDO0FBQzVDLFFBRVcsc0JBQWlCLEdBQXFCLEdBQUcsQ0FBQztBQUNyRCxRQUNXLFlBQU8sR0FBMkIsRUFBRSxDQUFDO0FBQ2hELFFBc0pZLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0FBQy9DLFFBQVksVUFBSyxHQUFHLElBQUksWUFBWSxFQUE0QyxDQUFDO0FBQ2pGLFFBQVksV0FBTSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7QUFDakQsUUFtRkUsZUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLFFBQUUsbUJBQWMsR0FBRyxLQUFLLENBQUM7QUFDekIsUUFBRSxZQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ2xCLFFBRVUsV0FBTSxHQUFVLEVBQUUsQ0FBQztBQUM3QixRQUlVLGVBQVUsR0FBRyxLQUFLLENBQUM7QUFDN0IsUUFBVSxjQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzVCLFFBQVUsZ0JBQVcsR0FBRyxJQUFJLENBQUM7QUFDN0IsUUFBVSxvQkFBZSxHQUFHLEtBQUssQ0FBQztBQUNsQyxRQUFVLHFCQUFnQixHQUFHLEtBQUssQ0FBQztBQUNuQyxRQUNVLHNCQUFpQixHQUFHLElBQUksQ0FBQztBQUNuQyxRQUFVLGdCQUFXLEdBQUcsSUFBSSxDQUFDO0FBQzdCLFFBQ1UseUJBQW9CLEdBQUcsS0FBSyxDQUFDO0FBQ3ZDLFFBQVUsYUFBUSxHQUFHLEtBQUssQ0FBQztBQUMzQixRQUFVLGNBQVMsR0FBRyxLQUFLLENBQUM7QUFDNUIsUUFBVSxjQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzVCLFFBQVUsc0JBQWlCLEdBQUcsTUFBTSxDQUFDO0FBQ3JDLElBT0UsQ0FBQztBQUNILElBMVFFLElBQ0ksYUFBYTtBQUNuQixRQUFJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztBQUMvQixJQUFFLENBQUM7QUFDSCxJQUNFLElBQUksYUFBYSxDQUFDLGFBQWE7QUFDakMsUUFBSSxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN6RSxJQUFFLENBQUM7QUFDSCxJQUNFLElBQ0ksZ0JBQWdCO0FBQUssUUFDdkIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7QUFDbEMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLGdCQUFnQixDQUFDLGdCQUFnQjtBQUN2QyxRQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO0FBQ25DLFlBQU0sSUFBSSxDQUFDLGlCQUFpQixHQUFHLEdBQUcsZ0JBQWdCLElBQUksQ0FBQztBQUN2RCxTQUFLO0FBQUMsYUFBSyxJQUFJLE9BQU8sZ0JBQWdCLEtBQUssUUFBUSxFQUFFO0FBQ3JELFlBQU0sSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDO0FBQ2hELFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLElBQ0ksYUFBYTtBQUNuQixRQUFJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztBQUMvQixJQUFFLENBQUM7QUFDSCxJQUNFLElBQUksYUFBYSxDQUFDLGFBQWE7QUFDakMsUUFBSSxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN6RSxJQUFFLENBQUM7QUFDSCxJQUNFLElBQ0ksU0FBUztBQUNmLFFBQUksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQzNCLElBQUUsQ0FBQztBQUNILElBQ0UsSUFBSSxTQUFTLENBQUMsU0FBUztBQUN6QixRQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdkQsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUNJLFFBQVE7QUFDZCxRQUFJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQUNFLElBQUksUUFBUSxDQUFDLFFBQVE7QUFDdkIsUUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3JELElBQUUsQ0FBQztBQUNILElBQ0UsSUFDSSxVQUFVO0FBQ2hCLFFBQUksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQzVCLElBQUUsQ0FBQztBQUNILElBQ0UsSUFBSSxVQUFVLENBQUMsVUFBVTtBQUMzQixRQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDekQsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUNJLGNBQWM7QUFDcEIsUUFBSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7QUFDaEMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLGNBQWMsQ0FBQyxjQUFjO0FBQ25DLFFBQUksSUFBSSxDQUFDLGVBQWUsR0FBRyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNqRSxJQUFFLENBQUM7QUFDSCxJQUNFLElBQ0ksZUFBZTtBQUNyQixRQUFJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0FBQ2pDLElBQUUsQ0FBQztBQUNILElBQ0UsSUFBSSxlQUFlLENBQUMsZUFBZTtBQUNyQyxRQUFJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNuRSxJQUFFLENBQUM7QUFDSCxJQUNFLElBQ0ksYUFBYTtBQUNuQixRQUFJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztBQUMvQixJQUFFLENBQUM7QUFDSCxJQUNFLElBQUksYUFBYSxDQUFDLGFBQWE7QUFDakMsUUFBSSxJQUFJLENBQUMsY0FBYyxHQUFHLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQy9ELElBQUUsQ0FBQztBQUNILElBQ0UsSUFDSSxnQkFBZ0I7QUFDdEIsUUFBSSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztBQUNsQyxJQUFFLENBQUM7QUFDSCxJQUNFLElBQUksZ0JBQWdCLENBQUMsZ0JBQWdCO0FBQ3ZDLFFBQUksSUFBSSxDQUFDLGlCQUFpQixHQUFHLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDckUsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUNJLFVBQVU7QUFDaEIsUUFBSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDNUIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLFVBQVUsQ0FBQyxVQUFVO0FBQzNCLFFBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN6RCxJQUFFLENBQUM7QUFDSCxJQUNFLElBQ0ksUUFBUTtBQUNkLFFBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQzFCLElBQUUsQ0FBQztBQUNILElBQ0UsSUFBSSxRQUFRLENBQUMsUUFBUTtBQUN2QixRQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDckQsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUNJLG1CQUFtQjtBQUN6QixRQUFJLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0FBQ3JDLElBQUUsQ0FBQztBQUNILElBQ0UsSUFBSSxtQkFBbUIsQ0FBQyxtQkFBbUI7QUFDN0MsUUFBSSxJQUFJLENBQUMsb0JBQW9CLEdBQUcscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUMzRSxJQUFFLENBQUM7QUFDSCxJQUNFLElBQ0ksT0FBTztBQUNiLFFBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ3pCLElBQUUsQ0FBQztBQUNILElBQ0UsSUFBSSxPQUFPLENBQUMsT0FBTztBQUNyQixRQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbkQsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUNJLFFBQVE7QUFDZCxRQUFJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQUNFLElBQUksUUFBUSxDQUFDLFFBQVE7QUFDdkIsUUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3JELElBQUUsQ0FBQztBQUNILElBQ0UsSUFDSSxRQUFRO0FBQ2QsUUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDMUIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLFFBQVEsQ0FBQyxRQUFRO0FBQ3ZCLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyRCxJQUFFLENBQUM7QUFDSCxJQWtCRSxJQUNJLGVBQWU7QUFDckIsUUFBSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztBQUNqQyxJQUFFLENBQUM7QUFDSCxJQUNFLElBQUksZUFBZSxDQUFDLEdBQXFDO0FBQzNELFFBQUksSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztBQUNoQyxRQUNJLElBQUksR0FBRyxFQUFFO0FBQ2IsWUFBTSxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDaEMsWUFDTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7QUFDdEIsZ0JBQVEsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7QUFDM0IsYUFBTztBQUNQLFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDN0IsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLE9BQU87QUFDYixRQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUFFLFlBQUEsT0FBTyxJQUFJLENBQUM7QUFDekUsUUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWE7QUFBRSxZQUFBLE9BQU8sSUFBSSxDQUFDO0FBQzlHLFFBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0FBQUUsWUFBQSxPQUFPLElBQUksQ0FBQztBQUNqSCxRQUFJLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLElBQUUsQ0FBQztBQUNILElBQ0UsSUFBSSxxQkFBcUI7QUFDM0IsUUFBSSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNuRyxRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDOUMsWUFBTSxPQUFPLEVBQUUsQ0FBQztBQUNoQixTQUFLO0FBQ0wsUUFDSSxPQUFPLElBQUksQ0FBQyxpQkFBMkIsQ0FBQztBQUM1QyxJQUFFLENBQUM7QUFDSCxJQUNFLElBQUksY0FBYztBQUNwQixRQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUMzQyxJQUFFLENBQUM7QUFDSCxJQUNFLElBQUksYUFBYTtBQUNuQixRQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVcsQ0FBQztBQUN2RixJQUFFLENBQUM7QUFDSCxJQUNFLElBQUksY0FBYztBQUNwQixRQUFJLE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDM0QsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLEtBQUs7QUFDWCxRQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUN2QixJQUFFLENBQUM7QUFDSCxJQUNFLElBQUksS0FBSyxDQUFDLEdBQVU7QUFDdEIsUUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQzdCLFlBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFDeEIsWUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3pDLFlBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BDLFlBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUMvQixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLGVBQWU7QUFDckIsUUFBSSxJQUFJLElBQUksQ0FBQyxlQUFlO0FBQUUsWUFBQSxPQUFPLEtBQUssQ0FBQztBQUMzQyxRQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQUUsWUFBQSxPQUFPLEtBQUssQ0FBQztBQUM5RSxRQUFJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztBQUMvQixJQUFFLENBQUM7QUFDSCxJQW9DRSxXQUFXO0FBQUssUUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLElBQUUsQ0FBQztBQUNILElBQ0UsbUJBQW1CLENBQUMsU0FBK0I7QUFBSSxRQUNyRCxJQUFJLFNBQVMsQ0FBQyxRQUFRO0FBQUUsWUFBQSxPQUFPO0FBQ25DLFFBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsYUFBYTtBQUFFLFlBQUEsT0FBTztBQUN6RCxRQUNJLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ3pDLFlBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQzNCLGdCQUFRLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN2RSxhQUFPO0FBQ1AsWUFDTSxPQUFPLENBQUMsS0FBSyxTQUFTLENBQUMsS0FBSyxDQUFDO0FBQ25DLFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxRQUNJLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFO0FBQ3BCLFlBQU0sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEcsU0FBSztBQUNMLFFBQ0ksNENBQTRDO0FBQ2hELFFBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ3RCLFlBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDaEUsU0FBSztBQUNMLFFBQ0ksTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDN0QsUUFDSSxJQUFJLFdBQVcsRUFBRTtBQUNyQixZQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsZ0JBQWdCLENBQUMsVUFBaUI7QUFBSSxRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztBQUM1QixJQUFFLENBQUM7QUFDSCxJQUNFLE9BQU87QUFBSyxRQUNWLElBQUksSUFBSSxDQUFDLFFBQVE7QUFBRSxZQUFBLE9BQU87QUFDOUIsUUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzlDLFFBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7QUFDN0IsSUFBRSxDQUFDO0FBQ0gsSUFDRSxPQUFPO0FBQUssUUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNwQixJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVcsQ0FBQyxLQUFZO0FBQUksUUFDMUIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO0FBQzdCLFlBQU0sTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMxRSxZQUNNLDBCQUEwQjtBQUNoQyxZQUFNLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDckIsZ0JBQVEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQyxhQUFPO0FBQ1AsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsT0FBTztBQUFLLFFBQ1YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixJQUFFLENBQUM7QUFDSCxJQUNFLFFBQVE7QUFBSyxRQUNYLElBQUksSUFBSSxDQUFDLFFBQVE7QUFBRSxZQUFBLE9BQU87QUFDOUIsUUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzlDLFFBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7QUFDN0IsSUFBRSxDQUFDO0FBQ0gsSUFDRSxjQUFjLENBQUMsS0FBYztBQUFJLFFBQy9CLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxLQUFLO0FBQUUsWUFBQSxPQUFPO0FBQzlDLFFBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7QUFDaEMsUUFDSSxJQUFJLElBQUksQ0FBQyxjQUFjO0FBQUUsWUFBQSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkQsUUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDMUMsUUFDSSxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7QUFDeEMsWUFBTSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDdkcsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUM3QixJQUFFLENBQUM7QUFDSCxJQUNFLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQTRDO0FBQUksUUFDcEUsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBTSxZQUFZLENBQUMsVUFBa0IsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO0FBQzFHLFlBQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQ3hCLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztBQUMvQixTQUFLO0FBQ0wsUUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3RDLElBQUUsQ0FBQztBQUNILElBQ0UsVUFBVSxDQUFDLEdBQVU7QUFBSSxRQUN2QiwwQkFBMEI7QUFDOUIsUUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQzdCLFlBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFDeEIsWUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQy9CLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLGdCQUFnQixDQUFDLEVBQU87QUFBSSxRQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0FBQy9CLElBQUUsQ0FBQztBQUNILElBQ0UsaUJBQWlCLENBQUMsRUFBTztBQUFJLFFBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7QUFDbEMsWUFBTSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUMxQixZQUFNLEVBQUUsRUFBRSxDQUFDO0FBQ1gsUUFBSSxDQUFDLENBQUM7QUFDTixJQUFFLENBQUM7QUFDSCxJQUNVLGlCQUFpQixDQUFDLEtBQVU7QUFBSSxRQUN0QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDOUIsWUFBTSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BFLFNBQUs7QUFDTCxRQUNJLE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQztBQUMvQixJQUFFLENBQUM7QUFDSCxJQUNFLDBCQUEwQjtBQUM1QixJQUFVLGdCQUFnQixDQUFDLENBQU07QUFBSSxRQUNqQyxjQUFjO0FBQ2xCLElBQUUsQ0FBQztBQUNILElBQ0UsMEJBQTBCO0FBQzVCLElBQVUsaUJBQWlCO0FBQUssUUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDeEIsSUFBRSxDQUFDO0FBQ0g7MkNBM2JDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsV0FBVyxrQkFDckIsUUFBUSxFQUFFLFlBQVksa0JBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7OzhMQUFzQyxrQkFFdEMsSUFBSSxFQUFFLHNCQUNKLEtBQUssRUFBRSxZQUFZLHNCQUNuQixNQUFNLEVBQUUsSUFBSSxzQkFDWixhQUFhLEVBQUUsTUFBTSxzQkFDckIsZ0JBQWdCLEVBQUUseUJBQXlCLHNCQUMzQyxjQUFjLEVBQUUsdUJBQXVCLHNCQUN2QyxZQUFZLEVBQUUsZUFBZSxzQkFDN0IsWUFBWSxFQUFFLGVBQWUsc0JBQzdCLFlBQVksRUFBRSxlQUFlLHNCQUM3QixpQkFBaUIsRUFBRSxvQkFBb0Isc0JBQ3ZDLDJCQUEyQixFQUFFLFNBQVMsc0JBQ3RDLHlCQUF5QixFQUFFLFVBQVUsc0JBQ3JDLDBCQUEwQixFQUFFLGdCQUFnQixzQkFDNUMsa0JBQWtCLEVBQUUsVUFBVSxzQkFDOUIsZ0JBQWdCLEVBQUUsZ0JBQWdCLHNCQUNsQywyQkFBMkIsRUFBRSxlQUFlLHNCQUM1Qyx5QkFBeUIsRUFBRSxnQkFBZ0Isc0JBQzNDLGtCQUFrQixFQUFFLFVBQVUsc0JBQzlCLG1CQUFtQixFQUFFLHlDQUF5QyxrQkFDL0Qsa0JBQ0QsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUMsa0JBQ2xDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZ5Z0JBQ2hELGszRUFDSTtBQUFDO0FBQXlDLFlBOUQ3QyxVQUFVO0FBQ1YsWUFNQSxTQUFTO0FBQ1QsWUFYQSxpQkFBaUI7QUFDbEI7QUFBRztBQUVHLGlCQStESixLQUFLO0FBQUssbUJBQ1YsS0FBSztBQUFLLG9CQUNWLEtBQUs7QUFBSyxtQkFDVixLQUFLO0FBQUssMEJBQ1YsS0FBSztBQUFLLCtCQUNWLEtBQUs7QUFBSyxxQ0FDVixLQUFLO0FBQUssZ0NBQ1YsS0FBSztBQUFLLGlDQUNWLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUssMEJBQ1YsS0FBSztBQUFLLGdDQUNWLEtBQUs7QUFBSyxzQkFFVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLDRCQUVWLEtBQUs7QUFDTiwrQkFRQyxLQUFLO0FBQ04sNEJBWUMsS0FBSztBQUNOLHdCQVFDLEtBQUs7QUFDTix1QkFRQyxLQUFLO0FBQ04seUJBUUMsS0FBSztBQUNOLDZCQVFDLEtBQUs7QUFDTiw4QkFRQyxLQUFLO0FBQ04sNEJBUUMsS0FBSztBQUNOLCtCQVFDLEtBQUs7QUFDTix5QkFRQyxLQUFLO0FBQ04sdUJBUUMsS0FBSztBQUNOLGtDQVFDLEtBQUs7QUFDTixzQkFRQyxLQUFLO0FBQ04sdUJBUUMsS0FBSztBQUNOLHVCQVFDLEtBQUs7QUFDTixxQkFRQyxNQUFNO0FBQUssb0JBQ1gsTUFBTTtBQUFLLHFCQUNYLE1BQU07QUFBSyw2QkFFWCxTQUFTLFNBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0FBQzlDLDhCQVVGLEtBQUs7QUFBSyw4QkFFVixlQUFlLFNBQUMscUJBQXFCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO0FBQzNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBLZXlib2FyZEtleXMgfSBmcm9tICcuLi8uLi9lbnVtcy9rZXlib2FyZC1rZXlzLmVudW0nO1xuaW1wb3J0IHsgYXBwZWFyYW5jZU1peGluIH0gZnJvbSAnLi4vLi4vbWl4aW5zL2FwcGVhcmFuY2UvYXBwZWFyYW5jZS5taXhpbic7XG5pbXBvcnQgeyBzaXplTWl4aW4gfSBmcm9tICcuLi8uLi9taXhpbnMvc2l6ZS9zaXplLm1peGluJztcbmltcG9ydCB7IFNlbGVjdERyb3Bkb3duT3B0aW9uIH0gZnJvbSAnLi9zZWxlY3QtZHJvcGRvd24tb3B0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTZWxlY3RJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LWlucHV0LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFNlbGVjdE9wdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vc2VsZWN0LW9wdGlvbi5kaXJlY3RpdmUnO1xuXG5sZXQgbmV4dElkID0gMDtcblxuY29uc3QgU0VMRUNUX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2VsZWN0Q29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbmNsYXNzIElucHV0QmFzZSB7fVxuXG5jb25zdCBfSW5wdXRNaXhpbkJhc2UgPSBhcHBlYXJhbmNlTWl4aW4oc2l6ZU1peGluKElucHV0QmFzZSkpO1xuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICduZ3hTZWxlY3QnLFxuICBzZWxlY3RvcjogJ25neC1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25neC1zZWxlY3QnLFxuICAgICdbaWRdJzogJ2lkJyxcbiAgICAnW2F0dHIubmFtZV0nOiAnbmFtZScsXG4gICAgJ1tjbGFzcy5sZWdhY3ldJzogJ2FwcGVhcmFuY2UgPT09IFwibGVnYWN5XCInLFxuICAgICdbY2xhc3MuZmlsbF0nOiAnYXBwZWFyYW5jZSA9PT0gXCJmaWxsXCInLFxuICAgICdbY2xhc3Muc21dJzogJ3NpemUgPT09IFwic21cIicsXG4gICAgJ1tjbGFzcy5tZF0nOiAnc2l6ZSA9PT0gXCJtZFwiJyxcbiAgICAnW2NsYXNzLmxnXSc6ICdzaXplID09PSBcImxnXCInLFxuICAgICdbY2xhc3MuaW52YWxpZF0nOiAnaW52YWxpZCAmJiB0b3VjaGVkJyxcbiAgICAnW2NsYXNzLnRhZ2dpbmctc2VsZWN0aW9uXSc6ICd0YWdnaW5nJyxcbiAgICAnW2NsYXNzLm11bHRpLXNlbGVjdGlvbl0nOiAnbXVsdGlwbGUnLFxuICAgICdbY2xhc3Muc2luZ2xlLXNlbGVjdGlvbl0nOiAnaXNTaW5nbGVTZWxlY3QnLFxuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFjdGl2ZV0nOiAnZHJvcGRvd25BY3RpdmUnLFxuICAgICdbY2xhc3MuYWN0aXZlLXNlbGVjdGlvbnNdJzogJ2hhc1NlbGVjdGlvbnMnLFxuICAgICdbY2xhc3MuaGFzLXBsYWNlaG9sZGVyXSc6ICdoYXNQbGFjZWhvbGRlcicsXG4gICAgJ1tjbGFzcy5hdXRvc2l6ZV0nOiAnYXV0b3NpemUnLFxuICAgICdbc3R5bGUubWluLXdpZHRoXSc6ICdhdXRvc2l6ZSA/IGF1dG9zaXplTWluV2lkdGggOiB1bmRlZmluZWQnXG4gIH0sXG4gIHByb3ZpZGVyczogW1NFTEVDVF9WQUxVRV9BQ0NFU1NPUl0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCBleHRlbmRzIF9JbnB1dE1peGluQmFzZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBpZCA9IGBzZWxlY3QtJHsrK25leHRJZH1gO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhpbnQ6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcbiAgQElucHV0KCkgZW1wdHlQbGFjZWhvbGRlciA9ICdObyBvcHRpb25zIGF2YWlsYWJsZSc7XG4gIEBJbnB1dCgpIGZpbHRlckVtcHR5UGxhY2Vob2xkZXIgPSAnTm8gbWF0Y2hlcy4uLic7XG4gIEBJbnB1dCgpIGZpbHRlclBsYWNlaG9sZGVyID0gJ0ZpbHRlciBvcHRpb25zLi4uJztcbiAgQElucHV0KCkgYWxsb3dBZGRpdGlvbnNUZXh0ID0gJ0FkZCBWYWx1ZSc7XG4gIEBJbnB1dCgpIGdyb3VwQnk6IHN0cmluZztcbiAgQElucHV0KCkgc2VsZWN0Q2FyZXQ6IHN0cmluZztcbiAgQElucHV0KCkgcmVxdWlyZWRJbmRpY2F0b3I6IHN0cmluZyB8IGJvb2xlYW4gPSAnKic7XG5cbiAgQElucHV0KCkgb3B0aW9uczogU2VsZWN0RHJvcGRvd25PcHRpb25bXSA9IFtdO1xuICBASW5wdXQoKSBpZGVudGlmaWVyOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IG1pblNlbGVjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21pblNlbGVjdGlvbnM7XG4gIH1cblxuICBzZXQgbWluU2VsZWN0aW9ucyhtaW5TZWxlY3Rpb25zKSB7XG4gICAgdGhpcy5fbWluU2VsZWN0aW9ucyA9IGNvZXJjZU51bWJlclByb3BlcnR5KG1pblNlbGVjdGlvbnMsIHVuZGVmaW5lZCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgYXV0b3NpemVNaW5XaWR0aCgpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9hdXRvc2l6ZU1pbldpZHRoO1xuICB9XG5cbiAgc2V0IGF1dG9zaXplTWluV2lkdGgoYXV0b3NpemVNaW5XaWR0aCkge1xuICAgIGlmICghaXNOYU4oK2F1dG9zaXplTWluV2lkdGgpKSB7XG4gICAgICB0aGlzLl9hdXRvc2l6ZU1pbldpZHRoID0gYCR7YXV0b3NpemVNaW5XaWR0aH1weGA7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYXV0b3NpemVNaW5XaWR0aCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2F1dG9zaXplTWluV2lkdGggPSBhdXRvc2l6ZU1pbldpZHRoO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBtYXhTZWxlY3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhTZWxlY3Rpb25zO1xuICB9XG5cbiAgc2V0IG1heFNlbGVjdGlvbnMobWF4U2VsZWN0aW9ucykge1xuICAgIHRoaXMuX21heFNlbGVjdGlvbnMgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eShtYXhTZWxlY3Rpb25zLCB1bmRlZmluZWQpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGF1dG9mb2N1cygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b2ZvY3VzO1xuICB9XG5cbiAgc2V0IGF1dG9mb2N1cyhhdXRvZm9jdXMpIHtcbiAgICB0aGlzLl9hdXRvZm9jdXMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoYXV0b2ZvY3VzKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBhdXRvc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b3NpemU7XG4gIH1cblxuICBzZXQgYXV0b3NpemUoYXV0b3NpemUpIHtcbiAgICB0aGlzLl9hdXRvc2l6ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShhdXRvc2l6ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgYWxsb3dDbGVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dDbGVhcjtcbiAgfVxuXG4gIHNldCBhbGxvd0NsZWFyKGFsbG93Q2xlYXIpIHtcbiAgICB0aGlzLl9hbGxvd0NsZWFyID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGFsbG93Q2xlYXIpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGFsbG93QWRkaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd0FkZGl0aW9ucztcbiAgfVxuXG4gIHNldCBhbGxvd0FkZGl0aW9ucyhhbGxvd0FkZGl0aW9ucykge1xuICAgIHRoaXMuX2FsbG93QWRkaXRpb25zID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGFsbG93QWRkaXRpb25zKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlRHJvcGRvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVEcm9wZG93bjtcbiAgfVxuXG4gIHNldCBkaXNhYmxlRHJvcGRvd24oZGlzYWJsZURyb3Bkb3duKSB7XG4gICAgdGhpcy5fZGlzYWJsZURyb3Bkb3duID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGRpc2FibGVEcm9wZG93bik7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgY2xvc2VPblNlbGVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvc2VPblNlbGVjdDtcbiAgfVxuXG4gIHNldCBjbG9zZU9uU2VsZWN0KGNsb3NlT25TZWxlY3QpIHtcbiAgICB0aGlzLl9jbG9zZU9uU2VsZWN0ID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGNsb3NlT25TZWxlY3QpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGNsb3NlT25Cb2R5Q2xpY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3NlT25Cb2R5Q2xpY2s7XG4gIH1cblxuICBzZXQgY2xvc2VPbkJvZHlDbGljayhjbG9zZU9uQm9keUNsaWNrKSB7XG4gICAgdGhpcy5fY2xvc2VPbkJvZHlDbGljayA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShjbG9zZU9uQm9keUNsaWNrKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBmaWx0ZXJhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJhYmxlO1xuICB9XG5cbiAgc2V0IGZpbHRlcmFibGUoZmlsdGVyYWJsZSkge1xuICAgIHRoaXMuX2ZpbHRlcmFibGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoZmlsdGVyYWJsZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgcmVxdWlyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xuICB9XG5cbiAgc2V0IHJlcXVpcmVkKHJlcXVpcmVkKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkocmVxdWlyZWQpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGZpbHRlckNhc2VTZW5zaXRpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlckNhc2VTZW5zaXRpdmU7XG4gIH1cblxuICBzZXQgZmlsdGVyQ2FzZVNlbnNpdGl2ZShmaWx0ZXJDYXNlU2Vuc2l0aXZlKSB7XG4gICAgdGhpcy5fZmlsdGVyQ2FzZVNlbnNpdGl2ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShmaWx0ZXJDYXNlU2Vuc2l0aXZlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCB0YWdnaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl90YWdnaW5nO1xuICB9XG5cbiAgc2V0IHRhZ2dpbmcodGFnZ2luZykge1xuICAgIHRoaXMuX3RhZ2dpbmcgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodGFnZ2luZyk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgbXVsdGlwbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xuICB9XG5cbiAgc2V0IG11bHRpcGxlKG11bHRpcGxlKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkobXVsdGlwbGUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIHNldCBkaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGRpc2FibGVkKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xuICBAT3V0cHV0KCkga2V5dXAgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IEtleWJvYXJkRXZlbnQ7IHZhbHVlPzogc3RyaW5nIH0+KCk7XG4gIEBPdXRwdXQoKSB0b2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQFZpZXdDaGlsZChTZWxlY3RJbnB1dENvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSlcbiAgcmVhZG9ubHkgaW5wdXRDb21wb25lbnQ6IFNlbGVjdElucHV0Q29tcG9uZW50O1xuXG4gIC8qKlxuICAgKiBDdXN0b20gVGVtcGxhdGUgZm9yIGdyb3VwQnlcbiAgICogT25seSB3b3JrcyB3aXRoIGdyb3VwQnkgb25cbiAgICpcbiAgICogVGVtcGxhdGVDb250ZXh0OlxuICAgKiAtIGdyb3VwTmFtZTogdGhlIG5hbWUgb2YgdGhlIGdyb3VwIChgb3B0aW9uLnZhbHVlW3RoaXMuZ3JvdXBCeV1gIGlzIHRoZSB2YWx1ZSlcbiAgICogLSBpbmRleCwgZmlyc3QsIGxhc3QsIG9kZCwgZXZlbiAobmdGb3IgcHJvcGVydGllcylcbiAgICovXG4gIEBJbnB1dCgpIGdyb3VwQnlUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dW5rbm93bj47XG5cbiAgQENvbnRlbnRDaGlsZHJlbihTZWxlY3RPcHRpb25EaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgZ2V0IG9wdGlvblRlbXBsYXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9uVGVtcGxhdGVzO1xuICB9XG5cbiAgc2V0IG9wdGlvblRlbXBsYXRlcyh2YWw6IFF1ZXJ5TGlzdDxTZWxlY3RPcHRpb25EaXJlY3RpdmU+KSB7XG4gICAgdGhpcy5fb3B0aW9uVGVtcGxhdGVzID0gdmFsO1xuXG4gICAgaWYgKHZhbCkge1xuICAgICAgY29uc3QgYXJyID0gdmFsLnRvQXJyYXkoKTtcblxuICAgICAgaWYgKGFyci5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gYXJyO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldCBpbnZhbGlkKCkge1xuICAgIGlmICh0aGlzLnJlcXVpcmVkICYmIHRoaXMuY2hlY2tJbnZhbGlkVmFsdWUodGhpcy52YWx1ZSkpIHJldHVybiB0cnVlO1xuICAgIGlmICh0aGlzLm1heFNlbGVjdGlvbnMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUubGVuZ3RoID4gdGhpcy5tYXhTZWxlY3Rpb25zKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAodGhpcy5taW5TZWxlY3Rpb25zICE9PSB1bmRlZmluZWQgJiYgKCF0aGlzLnZhbHVlIHx8IHRoaXMudmFsdWUubGVuZ3RoIDwgdGhpcy5taW5TZWxlY3Rpb25zKSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0IHJlcXVpcmVkSW5kaWNhdG9yVmlldygpIHtcbiAgICBjb25zdCByZXF1aXJlZCA9IHRoaXMucmVxdWlyZWQgfHwgKHRoaXMubWluU2VsZWN0aW9ucyAhPT0gdW5kZWZpbmVkICYmIHRoaXMubWluU2VsZWN0aW9ucyA+IDApO1xuXG4gICAgaWYgKCF0aGlzLnJlcXVpcmVkSW5kaWNhdG9yIHx8ICFyZXF1aXJlZCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlcXVpcmVkSW5kaWNhdG9yIGFzIHN0cmluZztcbiAgfVxuXG4gIGdldCBpc1NpbmdsZVNlbGVjdCgpIHtcbiAgICByZXR1cm4gIXRoaXMubXVsdGlwbGUgJiYgIXRoaXMudGFnZ2luZztcbiAgfVxuXG4gIGdldCBoYXNTZWxlY3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUubGVuZ3RoID4gMCAmJiB0eXBlb2YgdGhpcy52YWx1ZVswXSAhPT0gJ3VuZGVmaW5lZCc7XG4gIH1cblxuICBnZXQgaGFzUGxhY2Vob2xkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGxhY2Vob2xkZXIgJiYgdGhpcy5wbGFjZWhvbGRlci5sZW5ndGggPiAwO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWw6IGFueVtdKSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsO1xuICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuX3ZhbHVlKTtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkcm9wZG93blZpc2libGUoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZURyb3Bkb3duKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHRoaXMudGFnZ2luZyAmJiAoIXRoaXMub3B0aW9ucyB8fCAhdGhpcy5vcHRpb25zLmxlbmd0aCkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5kcm9wZG93bkFjdGl2ZTtcbiAgfVxuXG4gIHRvZ2dsZUxpc3RlbmVyPzogKCkgPT4gdm9pZDtcbiAgZmlsdGVyUXVlcnk6IHN0cmluZztcbiAgZm9jdXNJbmRleCA9IC0xO1xuICBkcm9wZG93bkFjdGl2ZSA9IGZhbHNlO1xuICB0b3VjaGVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfb3B0aW9uVGVtcGxhdGVzOiBRdWVyeUxpc3Q8U2VsZWN0T3B0aW9uRGlyZWN0aXZlPjtcbiAgcHJpdmF0ZSBfdmFsdWU6IGFueVtdID0gW107XG5cbiAgcHJpdmF0ZSBfbWluU2VsZWN0aW9ucz86IG51bWJlcjtcbiAgcHJpdmF0ZSBfbWF4U2VsZWN0aW9ucz86IG51bWJlcjtcblxuICBwcml2YXRlIF9hdXRvZm9jdXMgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYXV0b3NpemUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYWxsb3dDbGVhciA9IHRydWU7XG4gIHByaXZhdGUgX2FsbG93QWRkaXRpb25zID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc2FibGVEcm9wZG93biA9IGZhbHNlO1xuICBwcml2YXRlIF9jbG9zZU9uU2VsZWN0OiBib29sZWFuO1xuICBwcml2YXRlIF9jbG9zZU9uQm9keUNsaWNrID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfZmlsdGVyYWJsZSA9IHRydWU7XG4gIHByaXZhdGUgX3JlcXVpcmVkOiBib29sZWFuO1xuICBwcml2YXRlIF9maWx0ZXJDYXNlU2Vuc2l0aXZlID0gZmFsc2U7XG4gIHByaXZhdGUgX3RhZ2dpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbXVsdGlwbGUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYXV0b3NpemVNaW5XaWR0aCA9ICc2MHB4JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9lbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGVEcm9wZG93bihmYWxzZSk7XG4gIH1cblxuICBvbkRyb3Bkb3duU2VsZWN0aW9uKHNlbGVjdGlvbjogU2VsZWN0RHJvcGRvd25PcHRpb24pOiB2b2lkIHtcbiAgICBpZiAoc2VsZWN0aW9uLmRpc2FibGVkKSByZXR1cm47XG4gICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoID09PSB0aGlzLm1heFNlbGVjdGlvbnMpIHJldHVybjtcblxuICAgIGNvbnN0IGlkeCA9IHRoaXMudmFsdWUuZmluZEluZGV4KG8gPT4ge1xuICAgICAgaWYgKHRoaXMuaWRlbnRpZmllcikge1xuICAgICAgICByZXR1cm4gb1t0aGlzLmlkZW50aWZpZXJdID09PSBzZWxlY3Rpb24udmFsdWVbdGhpcy5pZGVudGlmaWVyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG8gPT09IHNlbGVjdGlvbi52YWx1ZTtcbiAgICB9KTtcblxuICAgIGlmIChpZHggPT09IC0xKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5tdWx0aXBsZSB8fCB0aGlzLnRhZ2dpbmcgPyBbLi4udGhpcy52YWx1ZSwgc2VsZWN0aW9uLnZhbHVlXSA6IFtzZWxlY3Rpb24udmFsdWVdO1xuICAgIH1cblxuICAgIC8vIGlmIHRhZ2dpbmcsIHdlIG5lZWQgdG8gY2xlYXIgY3VycmVudCB0ZXh0XG4gICAgaWYgKHRoaXMudGFnZ2luZykge1xuICAgICAgdGhpcy5pbnB1dENvbXBvbmVudC5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3VsZENsb3NlID0gdGhpcy5jbG9zZU9uU2VsZWN0IHx8ICF0aGlzLm11bHRpcGxlO1xuXG4gICAgaWYgKHNob3VsZENsb3NlKSB7XG4gICAgICB0aGlzLnRvZ2dsZURyb3Bkb3duKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBvbklucHV0U2VsZWN0aW9uKHNlbGVjdGlvbnM6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHNlbGVjdGlvbnM7XG4gIH1cblxuICBvbkZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm47XG5cbiAgICB0aGlzLnRvZ2dsZURyb3Bkb3duKCF0aGlzLmRyb3Bkb3duQWN0aXZlKTtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrKCk7XG4gIH1cblxuICBvbkNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgfVxuXG4gIG9uQm9keUNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRyb3Bkb3duQWN0aXZlKSB7XG4gICAgICBjb25zdCBjb250YWlucyA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpO1xuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKCFjb250YWlucykge1xuICAgICAgICB0aGlzLnRvZ2dsZURyb3Bkb3duKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlRHJvcGRvd24oZmFsc2UpO1xuICB9XG5cbiAgb25Ub2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHJldHVybjtcblxuICAgIHRoaXMudG9nZ2xlRHJvcGRvd24oIXRoaXMuZHJvcGRvd25BY3RpdmUpO1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHRvZ2dsZURyb3Bkb3duKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHJvcGRvd25BY3RpdmUgPT09IHN0YXRlKSByZXR1cm47XG5cbiAgICB0aGlzLmRyb3Bkb3duQWN0aXZlID0gc3RhdGU7XG5cbiAgICBpZiAodGhpcy50b2dnbGVMaXN0ZW5lcikgdGhpcy50b2dnbGVMaXN0ZW5lcigpO1xuICAgIHRoaXMudG9nZ2xlLmVtaXQodGhpcy5kcm9wZG93bkFjdGl2ZSk7XG5cbiAgICBpZiAoc3RhdGUgJiYgdGhpcy5jbG9zZU9uQm9keUNsaWNrKSB7XG4gICAgICB0aGlzLnRvZ2dsZUxpc3RlbmVyID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKGRvY3VtZW50LmJvZHksICdjbGljaycsIHRoaXMub25Cb2R5Q2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgb25LZXlVcCh7IGV2ZW50LCB2YWx1ZSB9OiB7IGV2ZW50OiBLZXlib2FyZEV2ZW50OyB2YWx1ZT86IHN0cmluZyB9KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LmtleSA9PT0gKEtleWJvYXJkS2V5cy5BUlJPV19ET1dOIGFzIGFueSkgJiYgdGhpcy5mb2N1c0luZGV4IDwgdGhpcy5vcHRpb25zLmxlbmd0aCkge1xuICAgICAgKyt0aGlzLmZvY3VzSW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyUXVlcnkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmtleXVwLmVtaXQoeyBldmVudCwgdmFsdWUgfSk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbDogYW55W10pOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh2YWwgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy50b3VjaGVkID0gdHJ1ZTtcbiAgICAgIGZuKCk7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tJbnZhbGlkVmFsdWUodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICF0aGlzLnZhbHVlLmxlbmd0aCB8fCB0aGlzLmNoZWNrSW52YWxpZFZhbHVlKHZhbHVlWzBdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjayhfOiBhbnkpOiB2b2lkIHtcbiAgICAvLyBwbGFjZWhvbGRlclxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLnRvdWNoZWQgPSB0cnVlO1xuICB9XG59XG4iXX0=