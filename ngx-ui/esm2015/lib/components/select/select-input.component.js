import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { KeyboardKeys } from '../../enums/keyboard-keys.enum';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["tagInput"];
function SelectInputComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 10);
    ɵngcc0.ɵɵelement(1, "span", 11);
    ɵngcc0.ɵɵelement(2, "span", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r0.label, ɵngcc0.ɵɵsanitizeHtml);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r0.requiredIndicator, ɵngcc0.ɵɵsanitizeHtml);
} }
function SelectInputComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 12);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r1.placeholder, ɵngcc0.ɵɵsanitizeHtml);
} }
function SelectInputComponent_ul_3_li_1_1_ng_template_0_Template(rf, ctx) { }
const _c1 = function (a0) { return { option: a0 }; };
function SelectInputComponent_ul_3_li_1_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, SelectInputComponent_ul_3_li_1_1_ng_template_0_Template, 0, 0, "ng-template", 20);
} if (rf & 2) {
    const option_r8 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", option_r8.inputTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c1, option_r8));
} }
function SelectInputComponent_ul_3_li_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 21);
} if (rf & 2) {
    const option_r8 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", option_r8.name || option_r8.value, ɵngcc0.ɵɵsanitizeHtml);
} }
function SelectInputComponent_ul_3_li_1_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 22);
    ɵngcc0.ɵɵlistener("click", function SelectInputComponent_ul_3_li_1_span_3_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const option_r8 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.onOptionRemove($event, option_r8); });
    ɵngcc0.ɵɵelementEnd();
} }
function SelectInputComponent_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 16);
    ɵngcc0.ɵɵtemplate(1, SelectInputComponent_ul_3_li_1_1_Template, 1, 4, undefined, 17);
    ɵngcc0.ɵɵtemplate(2, SelectInputComponent_ul_3_li_1_span_2_Template, 1, 1, "span", 18);
    ɵngcc0.ɵɵtemplate(3, SelectInputComponent_ul_3_li_1_span_3_Template, 1, 0, "span", 19);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("disabled", ctx_r6.multiple && ctx_r6.selectedOptions.length > 1 && option_r8.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", option_r8.inputTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !option_r8.inputTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.allowClear && (ctx_r6.multiple || ctx_r6.tagging) && !option_r8.disabled);
} }
function SelectInputComponent_ul_3_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 23);
    ɵngcc0.ɵɵelementStart(1, "input", 24, 25);
    ɵngcc0.ɵɵlistener("keyup", function SelectInputComponent_ul_3_li_2_Template_input_keyup_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r19 = ɵngcc0.ɵɵnextContext(2); return ctx_r19.onKeyUp($event); })("change", function SelectInputComponent_ul_3_li_2_Template_input_change_1_listener($event) { return $event.stopPropagation(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "i", 26);
    ɵngcc0.ɵɵlistener("click", function SelectInputComponent_ul_3_li_2_Template_i_click_3_listener() { ɵngcc0.ɵɵrestoreView(_r20); const _r18 = ɵngcc0.ɵɵreference(2); return _r18.value = ""; });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r18 = ɵngcc0.ɵɵreference(2);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("hidden", !_r18.value);
} }
function SelectInputComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 13);
    ɵngcc0.ɵɵtemplate(1, SelectInputComponent_ul_3_li_1_Template, 4, 5, "li", 14);
    ɵngcc0.ɵɵtemplate(2, SelectInputComponent_ul_3_li_2_Template, 4, 1, "li", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("no-selections", !(ctx_r2.selected == null ? null : ctx_r2.selected.length));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.selectedOptions);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.tagging);
} }
function SelectInputComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 27);
    ɵngcc0.ɵɵlistener("click", function SelectInputComponent_span_4_Template_span_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r24); const ctx_r23 = ɵngcc0.ɵɵnextContext(); return ctx_r23.selection.emit([]); });
    ɵngcc0.ɵɵelementEnd();
} }
function SelectInputComponent_span_5_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 11);
} if (rf & 2) {
    const ctx_r25 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r25.selectCaret, ɵngcc0.ɵɵsanitizeHtml);
} }
function SelectInputComponent_span_5_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function SelectInputComponent_span_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, SelectInputComponent_span_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 31);
} if (rf & 2) {
    const ctx_r27 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r27.selectCaret);
} }
function SelectInputComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r30 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 28);
    ɵngcc0.ɵɵlistener("click", function SelectInputComponent_span_5_Template_span_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r30); const ctx_r29 = ɵngcc0.ɵɵnextContext(); return ctx_r29.onToggle(); });
    ɵngcc0.ɵɵtemplate(1, SelectInputComponent_span_5_span_1_Template, 1, 1, "span", 29);
    ɵngcc0.ɵɵtemplate(2, SelectInputComponent_span_5_ng_template_2_Template, 1, 1, "ng-template", null, 30, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r26 = ɵngcc0.ɵɵreference(3);
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("icon-arrow-down", !ctx_r4.selectCaret);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.isNotTemplate)("ngIfElse", _r26);
} }
function SelectInputComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 11);
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r5.hint, ɵngcc0.ɵɵsanitizeHtml);
} }
const _c2 = [[["ngx-input-hint"]]];
const _c3 = ["ngx-input-hint"];
export class SelectInputComponent {
    constructor() {
        this.toggle = new EventEmitter();
        this.selection = new EventEmitter();
        this.activate = new EventEmitter();
        this.keyup = new EventEmitter();
        this.selectedOptions = [];
    }
    get autofocus() {
        return this._autofocus;
    }
    set autofocus(autofocus) {
        this._autofocus = coerceBooleanProperty(autofocus);
    }
    get allowClear() {
        return this._allowClear;
    }
    set allowClear(allowClear) {
        this._allowClear = coerceBooleanProperty(allowClear);
    }
    get multiple() {
        return this._multiple;
    }
    set multiple(multiple) {
        this._multiple = coerceBooleanProperty(multiple);
    }
    get tagging() {
        return this._tagging;
    }
    set tagging(tagging) {
        this._tagging = coerceBooleanProperty(tagging);
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
    get selected() {
        return this._selected;
    }
    set selected(val) {
        this._selected = val;
        this.selectedOptions = this.calcSelectedOptions(val);
    }
    get caretVisible() {
        if (this.disableDropdown)
            return false;
        return !(this.tagging && (!this.options || !this.options.length));
    }
    get isNotTemplate() {
        return !(typeof this.selectCaret === 'object' && this.selectCaret instanceof TemplateRef);
    }
    ngOnChanges(changes) {
        if ('options' in changes && !changes.options.firstChange) {
            this.selectedOptions = this.calcSelectedOptions(this.selected);
        }
    }
    ngAfterViewInit() {
        if (this.tagging && this.autofocus) {
            setTimeout(() => {
                this.inputElement.nativeElement.focus();
            }, 5);
        }
    }
    onKeyUp(event) {
        event.stopPropagation();
        const key = event.key;
        const value = event.target.value;
        if (key === KeyboardKeys.ENTER) {
            if (value !== '') {
                const hasSelection = this.selected.find(selection => {
                    return value === selection;
                });
                if (!hasSelection) {
                    const newSelections = [...this.selected, value];
                    this.selection.emit(newSelections);
                    event.target.value = '';
                }
            }
            event.preventDefault();
        }
        else if (key === KeyboardKeys.ESCAPE) {
            this.toggle.emit();
        }
        this.keyup.emit({ event, value });
    }
    onGlobalKeyUp(event) {
        event.stopPropagation();
        const key = event.key;
        if (key === KeyboardKeys.ARROW_DOWN) {
            this.activate.emit(event);
        }
    }
    onKeyDown(event) {
        if (this.disableDropdown)
            return;
        event.stopPropagation();
        if (!this.tagging) {
            this.keyup.emit({ event });
        }
    }
    onClick(event) {
        if (this.disableDropdown)
            return;
        this.activate.emit(event);
        if (this.tagging) {
            setTimeout(() => {
                this.inputElement.nativeElement.focus();
            }, 5);
        }
    }
    onToggle() {
        this.toggle.emit();
    }
    onOptionRemove(event, option) {
        event.stopPropagation();
        const newSelections = this.selected.filter(selection => {
            if (this.identifier !== undefined) {
                return option.value[this.identifier] !== selection[this.identifier];
            }
            return option.value !== selection;
        });
        this.selection.emit(newSelections);
    }
    calcSelectedOptions(selected) {
        const results = [];
        // result out if nothing here
        if (!selected)
            return results;
        for (const selection of selected) {
            let match;
            if (this.options) {
                match = this.options.find(option => {
                    if (this.identifier) {
                        return selection[this.identifier] === option.value[this.identifier];
                    }
                    return selection === option.value;
                });
            }
            if ((this.tagging || this.allowAdditions) && !match) {
                match = { value: selection, name: selection };
            }
            if (match)
                results.push(match);
        }
        return results;
    }
}
SelectInputComponent.ɵfac = function SelectInputComponent_Factory(t) { return new (t || SelectInputComponent)(); };
SelectInputComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: SelectInputComponent, selectors: [["ngx-select-input"]], viewQuery: function SelectInputComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, hostAttrs: [1, "ngx-select-input"], inputs: { autofocus: "autofocus", allowClear: "allowClear", multiple: "multiple", tagging: "tagging", allowAdditions: "allowAdditions", disableDropdown: "disableDropdown", selected: "selected", placeholder: "placeholder", identifier: "identifier", options: "options", label: "label", hint: "hint", selectCaret: "selectCaret", requiredIndicator: "requiredIndicator", tabindex: "tabindex" }, outputs: { toggle: "toggle", selection: "selection", activate: "activate", keyup: "keyup" }, exportAs: ["ngxSelectInput"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 11, vars: 7, consts: [[1, "ngx-select-input-box", 3, "tabindex", "keydown", "keyup", "click"], ["class", "ngx-select-label", 4, "ngIf"], ["class", "ngx-select-placeholder", 3, "innerHTML", 4, "ngIf"], ["class", "horizontal-list ngx-select-input-list", 3, "no-selections", 4, "ngIf"], ["title", "Clear Selections", "class", "ngx-select-clear icon-x", 3, "click", 4, "ngIf"], ["class", "ngx-select-caret icon-arrow-down", 3, "icon-arrow-down", "click", 4, "ngIf"], [1, "ngx-select-input-underline"], [1, "underline-fill"], [1, "ngx-select-hint"], [3, "innerHTML", 4, "ngIf"], [1, "ngx-select-label"], [3, "innerHTML"], [1, "ngx-select-placeholder", 3, "innerHTML"], [1, "horizontal-list", "ngx-select-input-list"], ["class", "ngx-select-input-option", 3, "disabled", 4, "ngFor", "ngForOf"], ["class", "ngx-select-input-box-wrapper", 4, "ngIf"], [1, "ngx-select-input-option"], [4, "ngIf"], ["class", "ngx-select-input-name", 3, "innerHTML", 4, "ngIf"], ["title", "Remove Selection", "class", "ngx-select-clear icon-x", 3, "click", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ngx-select-input-name", 3, "innerHTML"], ["title", "Remove Selection", 1, "ngx-select-clear", "icon-x", 3, "click"], [1, "ngx-select-input-box-wrapper"], ["type", "search", "autocomplete", "off", "autocorrect", "off", "spellcheck", "off", 1, "ngx-select-text-box", 3, "keyup", "change"], ["tagInput", ""], [1, "ngx-icon", "ngx-x", 3, "hidden", "click"], ["title", "Clear Selections", 1, "ngx-select-clear", "icon-x", 3, "click"], [1, "ngx-select-caret", "icon-arrow-down", 3, "click"], [3, "innerHTML", 4, "ngIf", "ngIfElse"], ["tpl", ""], [4, "ngTemplateOutlet"]], template: function SelectInputComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c2);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("keydown", function SelectInputComponent_Template_div_keydown_0_listener($event) { return ctx.onKeyDown($event); })("keyup", function SelectInputComponent_Template_div_keyup_0_listener($event) { return ctx.onGlobalKeyUp($event); })("click", function SelectInputComponent_Template_div_click_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵtemplate(1, SelectInputComponent_span_1_Template, 3, 2, "span", 1);
        ɵngcc0.ɵɵtemplate(2, SelectInputComponent_span_2_Template, 1, 1, "span", 2);
        ɵngcc0.ɵɵtemplate(3, SelectInputComponent_ul_3_Template, 3, 4, "ul", 3);
        ɵngcc0.ɵɵtemplate(4, SelectInputComponent_span_4_Template, 1, 0, "span", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, SelectInputComponent_span_5_Template, 4, 4, "span", 5);
        ɵngcc0.ɵɵelementStart(6, "div", 6);
        ɵngcc0.ɵɵelement(7, "div", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "div", 8);
        ɵngcc0.ɵɵtemplate(9, SelectInputComponent_span_9_Template, 1, 1, "span", 9);
        ɵngcc0.ɵɵprojection(10);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("tabindex", ctx.tabindex);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.label);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !(ctx.selected == null ? null : ctx.selected.length) && ctx.placeholder);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.tagging || (ctx.selectedOptions == null ? null : ctx.selectedOptions.length));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.allowClear && !ctx.multiple && !ctx.tagging && (ctx.selectedOptions == null ? null : ctx.selectedOptions.length));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.caretVisible);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hint);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
SelectInputComponent.propDecorators = {
    placeholder: [{ type: Input }],
    identifier: [{ type: Input }],
    options: [{ type: Input }],
    label: [{ type: Input }],
    hint: [{ type: Input }],
    selectCaret: [{ type: Input }],
    requiredIndicator: [{ type: Input }],
    tabindex: [{ type: Input }],
    autofocus: [{ type: Input }],
    allowClear: [{ type: Input }],
    multiple: [{ type: Input }],
    tagging: [{ type: Input }],
    allowAdditions: [{ type: Input }],
    disableDropdown: [{ type: Input }],
    selected: [{ type: Input }],
    toggle: [{ type: Output }],
    selection: [{ type: Output }],
    activate: [{ type: Output }],
    keyup: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['tagInput',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SelectInputComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxSelectInput',
                selector: 'ngx-select-input',
                template: "<div\n  [tabindex]=\"tabindex\"\n  (keydown)=\"onKeyDown($event)\"\n  (keyup)=\"onGlobalKeyUp($event)\"\n  class=\"ngx-select-input-box\"\n  (click)=\"onClick($event)\"\n>\n  <span *ngIf=\"label\" class=\"ngx-select-label\">\n    <span [innerHTML]=\"label\"></span>\n    <span [innerHTML]=\"requiredIndicator\"></span>\n  </span>\n  <span *ngIf=\"!selected?.length && placeholder\" class=\"ngx-select-placeholder\" [innerHTML]=\"placeholder\"> </span>\n  <ul\n    *ngIf=\"tagging || selectedOptions?.length\"\n    class=\"horizontal-list ngx-select-input-list\"\n    [class.no-selections]=\"!selected?.length\"\n  >\n    <li\n      *ngFor=\"let option of selectedOptions\"\n      class=\"ngx-select-input-option\"\n      [class.disabled]=\"multiple && selectedOptions.length > 1 && option.disabled\"\n    >\n      <ng-template\n        *ngIf=\"option.inputTemplate\"\n        [ngTemplateOutlet]=\"option.inputTemplate\"\n        [ngTemplateOutletContext]=\"{ option: option }\"\n      >\n      </ng-template>\n      <span *ngIf=\"!option.inputTemplate\" class=\"ngx-select-input-name\" [innerHTML]=\"option.name || option.value\">\n      </span>\n      <span\n        *ngIf=\"allowClear && (multiple || tagging) && !option.disabled\"\n        title=\"Remove Selection\"\n        class=\"ngx-select-clear icon-x\"\n        (click)=\"onOptionRemove($event, option)\"\n      >\n      </span>\n    </li>\n    <li *ngIf=\"tagging\" class=\"ngx-select-input-box-wrapper\">\n      <input\n        #tagInput\n        type=\"search\"\n        class=\"ngx-select-text-box\"\n        autocomplete=\"off\"\n        autocorrect=\"off\"\n        spellcheck=\"off\"\n        (keyup)=\"onKeyUp($event)\"\n        (change)=\"$event.stopPropagation()\"\n      />\n      <i [hidden]=\"!tagInput.value\" class=\"ngx-icon ngx-x\" (click)=\"tagInput.value = ''\"></i>\n    </li>\n  </ul>\n  <span\n    *ngIf=\"allowClear && !multiple && !tagging && selectedOptions?.length\"\n    title=\"Clear Selections\"\n    class=\"ngx-select-clear icon-x\"\n    (click)=\"selection.emit([])\"\n  >\n  </span>\n</div>\n<span\n  *ngIf=\"caretVisible\"\n  class=\"ngx-select-caret icon-arrow-down\"\n  [class.icon-arrow-down]=\"!selectCaret\"\n  (click)=\"onToggle()\"\n>\n  <span *ngIf=\"isNotTemplate; else tpl\" [innerHTML]=\"selectCaret\"> </span>\n  <ng-template #tpl>\n    <ng-container *ngTemplateOutlet=\"selectCaret\"></ng-container>\n  </ng-template>\n</span>\n<div class=\"ngx-select-input-underline\">\n  <div class=\"underline-fill\"></div>\n</div>\n<div class=\"ngx-select-hint\">\n  <span *ngIf=\"hint\" [innerHTML]=\"hint\"></span>\n  <ng-content select=\"ngx-input-hint\"></ng-content>\n</div>\n",
                host: { class: 'ngx-select-input' },
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { toggle: [{
            type: Output
        }], selection: [{
            type: Output
        }], activate: [{
            type: Output
        }], keyup: [{
            type: Output
        }], autofocus: [{
            type: Input
        }], allowClear: [{
            type: Input
        }], multiple: [{
            type: Input
        }], tagging: [{
            type: Input
        }], allowAdditions: [{
            type: Input
        }], disableDropdown: [{
            type: Input
        }], selected: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], identifier: [{
            type: Input
        }], options: [{
            type: Input
        }], label: [{
            type: Input
        }], hint: [{
            type: Input
        }], selectCaret: [{
            type: Input
        }], requiredIndicator: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: ['tagInput']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4sV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTlELE1BQU0sT0FBTyxvQkFBb0I7QUFBRyxJQVBwQztBQUNHLFFBZ0ZTLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0FBQzlDLFFBQVksY0FBUyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7QUFDbEQsUUFBWSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztBQUNqRCxRQUFZLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBNEMsQ0FBQztBQUNqRixRQWFFLG9CQUFlLEdBQTJCLEVBQUUsQ0FBQztBQUMvQyxJQTZIQSxDQUFDO0FBQ0QsSUFoTkUsSUFDSSxTQUFTO0FBQ2YsUUFBSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDM0IsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLFNBQVMsQ0FBQyxTQUFTO0FBQ3pCLFFBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxxQkFB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QUFLLDJCQUVYLFNBQVMsU0FBQyxVQUFVO0FBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuaW1wb3J0IHsgS2V5Ym9hcmRLZXlzIH0gZnJvbSAnLi4vLi4vZW51bXMva2V5Ym9hcmQta2V5cy5lbnVtJztcbmltcG9ydCB7IFNlbGVjdERyb3Bkb3duT3B0aW9uIH0gZnJvbSAnLi9zZWxlY3QtZHJvcGRvd24tb3B0aW9uLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ25neFNlbGVjdElucHV0JyxcbiAgc2VsZWN0b3I6ICduZ3gtc2VsZWN0LWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHsgY2xhc3M6ICduZ3gtc2VsZWN0LWlucHV0JyB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlkZW50aWZpZXI6IHN0cmluZztcbiAgQElucHV0KCkgb3B0aW9uczogU2VsZWN0RHJvcGRvd25PcHRpb25bXTtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgaGludDogc3RyaW5nO1xuICBASW5wdXQoKSBzZWxlY3RDYXJldDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgcmVxdWlyZWRJbmRpY2F0b3I6IHN0cmluZyB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRhYmluZGV4OiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZ2V0IGF1dG9mb2N1cygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b2ZvY3VzO1xuICB9XG5cbiAgc2V0IGF1dG9mb2N1cyhhdXRvZm9jdXMpIHtcbiAgICB0aGlzLl9hdXRvZm9jdXMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoYXV0b2ZvY3VzKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBhbGxvd0NsZWFyKCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd0NsZWFyO1xuICB9XG5cbiAgc2V0IGFsbG93Q2xlYXIoYWxsb3dDbGVhcikge1xuICAgIHRoaXMuX2FsbG93Q2xlYXIgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoYWxsb3dDbGVhcik7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgbXVsdGlwbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xuICB9XG5cbiAgc2V0IG11bHRpcGxlKG11bHRpcGxlKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkobXVsdGlwbGUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHRhZ2dpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhZ2dpbmc7XG4gIH1cblxuICBzZXQgdGFnZ2luZyh0YWdnaW5nKSB7XG4gICAgdGhpcy5fdGFnZ2luZyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh0YWdnaW5nKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBhbGxvd0FkZGl0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dBZGRpdGlvbnM7XG4gIH1cblxuICBzZXQgYWxsb3dBZGRpdGlvbnMoYWxsb3dBZGRpdGlvbnMpIHtcbiAgICB0aGlzLl9hbGxvd0FkZGl0aW9ucyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShhbGxvd0FkZGl0aW9ucyk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZURyb3Bkb3duKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlRHJvcGRvd247XG4gIH1cblxuICBzZXQgZGlzYWJsZURyb3Bkb3duKGRpc2FibGVEcm9wZG93bikge1xuICAgIHRoaXMuX2Rpc2FibGVEcm9wZG93biA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShkaXNhYmxlRHJvcGRvd24pO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHNlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgfVxuXG4gIHNldCBzZWxlY3RlZCh2YWw6IGFueVtdKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSB2YWw7XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSB0aGlzLmNhbGNTZWxlY3RlZE9wdGlvbnModmFsKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSB0b2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xuICBAT3V0cHV0KCkgYWN0aXZhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuICBAT3V0cHV0KCkga2V5dXAgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IEtleWJvYXJkRXZlbnQ7IHZhbHVlPzogc3RyaW5nIH0+KCk7XG5cbiAgQFZpZXdDaGlsZCgndGFnSW5wdXQnKVxuICByZWFkb25seSBpbnB1dEVsZW1lbnQ/OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIGdldCBjYXJldFZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZURyb3Bkb3duKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuICEodGhpcy50YWdnaW5nICYmICghdGhpcy5vcHRpb25zIHx8ICF0aGlzLm9wdGlvbnMubGVuZ3RoKSk7XG4gIH1cblxuICBnZXQgaXNOb3RUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gISh0eXBlb2YgdGhpcy5zZWxlY3RDYXJldCA9PT0gJ29iamVjdCcgJiYgdGhpcy5zZWxlY3RDYXJldCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgfVxuXG4gIHNlbGVjdGVkT3B0aW9uczogU2VsZWN0RHJvcGRvd25PcHRpb25bXSA9IFtdO1xuXG4gIHByaXZhdGUgX3NlbGVjdGVkOiBhbnlbXTtcbiAgcHJpdmF0ZSBfYXV0b2ZvY3VzOiBib29sZWFuO1xuICBwcml2YXRlIF9hbGxvd0NsZWFyOiBib29sZWFuO1xuICBwcml2YXRlIF9tdWx0aXBsZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfdGFnZ2luZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfYWxsb3dBZGRpdGlvbnM6IGJvb2xlYW47XG4gIHByaXZhdGUgX2Rpc2FibGVEcm9wZG93bjogYm9vbGVhbjtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCdvcHRpb25zJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzLm9wdGlvbnMuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5jYWxjU2VsZWN0ZWRPcHRpb25zKHRoaXMuc2VsZWN0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50YWdnaW5nICYmIHRoaXMuYXV0b2ZvY3VzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfSwgNSk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xuICAgIGNvbnN0IHZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBhbnkpLnZhbHVlO1xuXG4gICAgaWYgKGtleSA9PT0gKEtleWJvYXJkS2V5cy5FTlRFUiBhcyBhbnkpKSB7XG4gICAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICAgIGNvbnN0IGhhc1NlbGVjdGlvbiA9IHRoaXMuc2VsZWN0ZWQuZmluZChzZWxlY3Rpb24gPT4ge1xuICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gc2VsZWN0aW9uO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWhhc1NlbGVjdGlvbikge1xuICAgICAgICAgIGNvbnN0IG5ld1NlbGVjdGlvbnMgPSBbLi4udGhpcy5zZWxlY3RlZCwgdmFsdWVdO1xuICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmVtaXQobmV3U2VsZWN0aW9ucyk7XG4gICAgICAgICAgKGV2ZW50LnRhcmdldCBhcyBhbnkpLnZhbHVlID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gKEtleWJvYXJkS2V5cy5FU0NBUEUgYXMgYW55KSkge1xuICAgICAgdGhpcy50b2dnbGUuZW1pdCgpO1xuICAgIH1cblxuICAgIHRoaXMua2V5dXAuZW1pdCh7IGV2ZW50LCB2YWx1ZSB9KTtcbiAgfVxuXG4gIG9uR2xvYmFsS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXk7XG5cbiAgICBpZiAoa2V5ID09PSBLZXlib2FyZEtleXMuQVJST1dfRE9XTikge1xuICAgICAgdGhpcy5hY3RpdmF0ZS5lbWl0KGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlRHJvcGRvd24pIHJldHVybjtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICghdGhpcy50YWdnaW5nKSB7XG4gICAgICB0aGlzLmtleXVwLmVtaXQoeyBldmVudCB9KTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVEcm9wZG93bikgcmV0dXJuO1xuICAgIHRoaXMuYWN0aXZhdGUuZW1pdChldmVudCk7XG5cbiAgICBpZiAodGhpcy50YWdnaW5nKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfSwgNSk7XG4gICAgfVxuICB9XG5cbiAgb25Ub2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGUuZW1pdCgpO1xuICB9XG5cbiAgb25PcHRpb25SZW1vdmUoZXZlbnQ6IEV2ZW50LCBvcHRpb246IFNlbGVjdERyb3Bkb3duT3B0aW9uKTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBjb25zdCBuZXdTZWxlY3Rpb25zID0gdGhpcy5zZWxlY3RlZC5maWx0ZXIoc2VsZWN0aW9uID0+IHtcbiAgICAgIGlmICh0aGlzLmlkZW50aWZpZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gb3B0aW9uLnZhbHVlW3RoaXMuaWRlbnRpZmllcl0gIT09IHNlbGVjdGlvblt0aGlzLmlkZW50aWZpZXJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3B0aW9uLnZhbHVlICE9PSBzZWxlY3Rpb247XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlbGVjdGlvbi5lbWl0KG5ld1NlbGVjdGlvbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjU2VsZWN0ZWRPcHRpb25zKHNlbGVjdGVkOiBhbnlbXSkge1xuICAgIGNvbnN0IHJlc3VsdHM6IFNlbGVjdERyb3Bkb3duT3B0aW9uW10gPSBbXTtcblxuICAgIC8vIHJlc3VsdCBvdXQgaWYgbm90aGluZyBoZXJlXG4gICAgaWYgKCFzZWxlY3RlZCkgcmV0dXJuIHJlc3VsdHM7XG5cbiAgICBmb3IgKGNvbnN0IHNlbGVjdGlvbiBvZiBzZWxlY3RlZCkge1xuICAgICAgbGV0IG1hdGNoOiBTZWxlY3REcm9wZG93bk9wdGlvbjtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgICBtYXRjaCA9IHRoaXMub3B0aW9ucy5maW5kKG9wdGlvbiA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuaWRlbnRpZmllcikge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGlvblt0aGlzLmlkZW50aWZpZXJdID09PSBvcHRpb24udmFsdWVbdGhpcy5pZGVudGlmaWVyXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc2VsZWN0aW9uID09PSBvcHRpb24udmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoKHRoaXMudGFnZ2luZyB8fCB0aGlzLmFsbG93QWRkaXRpb25zKSAmJiAhbWF0Y2gpIHtcbiAgICAgICAgbWF0Y2ggPSB7IHZhbHVlOiBzZWxlY3Rpb24sIG5hbWU6IHNlbGVjdGlvbiB9O1xuICAgICAgfVxuXG4gICAgICBpZiAobWF0Y2gpIHJlc3VsdHMucHVzaChtYXRjaCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cbn1cbiJdfQ==