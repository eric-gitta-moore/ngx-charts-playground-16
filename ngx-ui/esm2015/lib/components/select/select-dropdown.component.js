import { __decorate, __metadata } from "tslib";
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { debounceable } from '../../decorators/debounceable/debounceable.decorator';
import { KeyboardKeys } from '../../enums/keyboard-keys.enum';
import { containsFilter } from './contains-filter.util';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["filterInput"];
function SelectDropdownComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵelement(1, "i", 4);
    ɵngcc0.ɵɵelementStart(2, "input", 5, 6);
    ɵngcc0.ɵɵlistener("keyup", function SelectDropdownComponent_div_1_Template_input_keyup_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.onInputKeyUp($event); })("keydown.shift.Enter", function SelectDropdownComponent_div_1_Template_input_keydown_shift_Enter_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.onShiftEnterKeyDown($event); })("change", function SelectDropdownComponent_div_1_Template_input_change_2_listener($event) { return $event.stopPropagation(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "i", 7);
    ɵngcc0.ɵɵlistener("click", function SelectDropdownComponent_div_1_Template_i_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r4); const _r2 = ɵngcc0.ɵɵreference(3); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.clearFilter(_r2); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r2 = ɵngcc0.ɵɵreference(3);
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("placeholder", ctx_r0.filterPlaceholder);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("hidden", !_r2.value);
} }
function SelectDropdownComponent_li_3_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c1 = function (a0, a1, a2, a3, a4, a5) { return { groupName: a0, index: a1, first: a2, last: a3, odd: a4, even: a5 }; };
function SelectDropdownComponent_li_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "span", 15);
    ɵngcc0.ɵɵtemplate(2, SelectDropdownComponent_li_3_ng_container_1_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r23 = ɵngcc0.ɵɵnextContext(2);
    const group_r8 = ctx_r23.$implicit;
    const i_r9 = ctx_r23.index;
    const first_r10 = ctx_r23.first;
    const last_r11 = ctx_r23.last;
    const odd_r12 = ctx_r23.odd;
    const even_r13 = ctx_r23.even;
    const ctx_r19 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r19.groupByTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction6(2, _c1, group_r8.name, i_r9, first_r10, last_r11, odd_r12, even_r13));
} }
function SelectDropdownComponent_li_3_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 17);
} if (rf & 2) {
    const group_r8 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", group_r8.name, ɵngcc0.ɵɵsanitizeHtml);
} }
function SelectDropdownComponent_li_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, SelectDropdownComponent_li_3_ng_container_1_ng_container_1_Template, 3, 9, "ng-container", 13);
    ɵngcc0.ɵɵtemplate(2, SelectDropdownComponent_li_3_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 14, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r20 = ɵngcc0.ɵɵreference(3);
    const ctx_r14 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r14.groupByTemplate)("ngIfElse", _r20);
} }
function SelectDropdownComponent_li_3_li_3_1_ng_template_0_Template(rf, ctx) { }
const _c2 = function (a0) { return { option: a0 }; };
function SelectDropdownComponent_li_3_li_3_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, SelectDropdownComponent_li_3_li_3_1_ng_template_0_Template, 0, 0, "ng-template", 21);
} if (rf & 2) {
    const kv_r25 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", kv_r25.option.optionTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c2, kv_r25.option));
} }
function SelectDropdownComponent_li_3_li_3_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 22);
} if (rf & 2) {
    const kv_r25 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("innerHTML", kv_r25.option.name, ɵngcc0.ɵɵsanitizeHtml);
} }
function SelectDropdownComponent_li_3_li_3_i_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 23);
} }
function SelectDropdownComponent_li_3_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 18);
    ɵngcc0.ɵɵlistener("click", function SelectDropdownComponent_li_3_li_3_Template_li_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r33); const kv_r25 = restoredCtx.$implicit; const ctx_r32 = ɵngcc0.ɵɵnextContext(2); return ctx_r32.selection.emit(kv_r25.option); })("keydown", function SelectDropdownComponent_li_3_li_3_Template_li_keydown_0_listener($event) { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r33); const kv_r25 = restoredCtx.$implicit; const ctx_r34 = ɵngcc0.ɵɵnextContext(2); return ctx_r34.onOptionKeyDown($event, kv_r25.option); });
    ɵngcc0.ɵɵtemplate(1, SelectDropdownComponent_li_3_li_3_1_Template, 1, 4, undefined, 9);
    ɵngcc0.ɵɵtemplate(2, SelectDropdownComponent_li_3_li_3_span_2_Template, 1, 1, "span", 19);
    ɵngcc0.ɵɵtemplate(3, SelectDropdownComponent_li_3_li_3_i_3_Template, 1, 0, "i", 20);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const kv_r25 = ctx.$implicit;
    const ctx_r15 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("disabled", kv_r25.option.disabled)("active", kv_r25.index === ctx_r15.focusIndex)("selected", ctx_r15.isSelected(kv_r25.option));
    ɵngcc0.ɵɵproperty("hidden", kv_r25.option.hidden);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", kv_r25.option.optionTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !kv_r25.option.optionTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !kv_r25.option.optionTemplate && ctx_r15.isSelected(kv_r25.option));
} }
function SelectDropdownComponent_li_3_li_4_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 22);
} if (rf & 2) {
    const ctx_r35 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r35.allowAdditionsText, ɵngcc0.ɵɵsanitizeHtml);
} }
function SelectDropdownComponent_li_3_li_4_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function SelectDropdownComponent_li_3_li_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, SelectDropdownComponent_li_3_li_4_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 28);
} if (rf & 2) {
    const ctx_r37 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r37.allowAdditionsText);
} }
function SelectDropdownComponent_li_3_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r40 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 24);
    ɵngcc0.ɵɵelementStart(1, "a", 25);
    ɵngcc0.ɵɵlistener("click", function SelectDropdownComponent_li_3_li_4_Template_a_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r40); const ctx_r39 = ɵngcc0.ɵɵnextContext(2); return ctx_r39.onAddClicked($event, ctx_r39.filterQuery); });
    ɵngcc0.ɵɵtemplate(2, SelectDropdownComponent_li_3_li_4_span_2_Template, 1, 1, "span", 26);
    ɵngcc0.ɵɵtemplate(3, SelectDropdownComponent_li_3_li_4_ng_template_3_Template, 1, 1, "ng-template", null, 27, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r36 = ɵngcc0.ɵɵreference(4);
    const ctx_r16 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r16.isNotTemplate)("ngIfElse", _r36);
} }
function SelectDropdownComponent_li_3_li_5_a_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 22);
} if (rf & 2) {
    const ctx_r42 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r42.allowAdditionsText, ɵngcc0.ɵɵsanitizeHtml);
} }
function SelectDropdownComponent_li_3_li_5_a_2_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function SelectDropdownComponent_li_3_li_5_a_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, SelectDropdownComponent_li_3_li_5_a_2_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 28);
} if (rf & 2) {
    const ctx_r44 = ɵngcc0.ɵɵnextContext(4);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r44.allowAdditionsText);
} }
function SelectDropdownComponent_li_3_li_5_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r47 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 31);
    ɵngcc0.ɵɵlistener("click", function SelectDropdownComponent_li_3_li_5_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r47); const ctx_r46 = ɵngcc0.ɵɵnextContext(3); return ctx_r46.onAddClicked($event, ctx_r46.filterQuery); });
    ɵngcc0.ɵɵtemplate(1, SelectDropdownComponent_li_3_li_5_a_2_span_1_Template, 1, 1, "span", 26);
    ɵngcc0.ɵɵtemplate(2, SelectDropdownComponent_li_3_li_5_a_2_ng_template_2_Template, 1, 1, "ng-template", null, 27, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r43 = ɵngcc0.ɵɵreference(3);
    const ctx_r41 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r41.isNotTemplate)("ngIfElse", _r43);
} }
function SelectDropdownComponent_li_3_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 24);
    ɵngcc0.ɵɵelement(1, "span", 29);
    ɵngcc0.ɵɵtemplate(2, SelectDropdownComponent_li_3_li_5_a_2_Template, 4, 2, "a", 30);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r17.filterEmptyPlaceholder, ɵngcc0.ɵɵsanitizeHtml);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r17.allowAdditions);
} }
function SelectDropdownComponent_li_3_li_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "li", 32);
} if (rf & 2) {
    const ctx_r18 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r18.emptyPlaceholder, ɵngcc0.ɵɵsanitizeHtml);
} }
function SelectDropdownComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li", 8);
    ɵngcc0.ɵɵtemplate(1, SelectDropdownComponent_li_3_ng_container_1_Template, 4, 2, "ng-container", 9);
    ɵngcc0.ɵɵelementStart(2, "ul", 1);
    ɵngcc0.ɵɵtemplate(3, SelectDropdownComponent_li_3_li_3_Template, 4, 10, "li", 10);
    ɵngcc0.ɵɵtemplate(4, SelectDropdownComponent_li_3_li_4_Template, 5, 2, "li", 11);
    ɵngcc0.ɵɵtemplate(5, SelectDropdownComponent_li_3_li_5_Template, 3, 2, "li", 11);
    ɵngcc0.ɵɵtemplate(6, SelectDropdownComponent_li_3_li_6_Template, 1, 1, "li", 12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r8 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", group_r8.name);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", group_r8.options);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.allowAdditions && ctx_r1.filterQuery && (group_r8.options == null ? null : group_r8.options.length) && !ctx_r1.filterQueryIsInOptions);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.filterQuery && ctx_r1.filterEmptyPlaceholder && !(group_r8.options == null ? null : group_r8.options.length));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.filterQuery && ctx_r1.emptyPlaceholder && !(group_r8.options == null ? null : group_r8.options.length));
} }
export class SelectDropdownComponent {
    constructor(elementRef, cdr) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.allowAdditionsText = 'Add Value';
        this.keyup = new EventEmitter();
        this.selection = new EventEmitter();
        this.close = new EventEmitter();
        this.filterQueryIsInOptions = false;
        this._filterCaseSensitive = false;
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
    get filterable() {
        return this._filterable;
    }
    set filterable(filterable) {
        this._filterable = coerceBooleanProperty(filterable);
    }
    get filterCaseSensitive() {
        return this._filterCaseSensitive;
    }
    set filterCaseSensitive(filterCaseSensitive) {
        this._filterCaseSensitive = coerceBooleanProperty(filterCaseSensitive);
    }
    get focusIndex() {
        return this._focusIndex;
    }
    set focusIndex(val) {
        this._focusIndex = coerceNumberProperty(val);
        this.focusElement(this._focusIndex);
    }
    get filterQuery() {
        return this._filterQuery;
    }
    set filterQuery(val) {
        this._filterQuery = val;
        this.groups = this.calculateGroups(this.groupBy, this.options, val);
    }
    get groupBy() {
        return this._groupBy;
    }
    set groupBy(val) {
        this._groupBy = val;
        this.groups = this.calculateGroups(val, this.options);
    }
    get options() {
        return this._options;
    }
    set options(val) {
        this.groups = this.calculateGroups(this.groupBy, val);
        this._options = val;
    }
    get element() {
        return this.elementRef.nativeElement;
    }
    get isNotTemplate() {
        return !(typeof this.allowAdditionsText === 'object' && this.allowAdditionsText instanceof TemplateRef);
    }
    ngAfterViewInit() {
        if (this.filterable && !this.tagging) {
            setTimeout(() => {
                this.filterInput.nativeElement.focus();
            }, 5);
        }
    }
    isSelected(option) {
        if (!this.selected || !this.selected.length)
            return false;
        const idx = this.selected.findIndex(o => {
            if (this.identifier)
                return o[this.identifier] === option.value[this.identifier];
            return o === option.value;
        });
        return idx > -1;
    }
    updatefilterQueryIsInOptions() {
        this.filterQueryIsInOptions = this.options.some(o => o.name.toLowerCase() === this.filterQuery.toLowerCase());
        this.cdr.markForCheck();
    }
    clearFilter(filterInput) {
        filterInput.value = '';
        this.filterQuery = '';
        this.updatefilterQueryIsInOptions();
        this.cdr.markForCheck();
    }
    onInputKeyUp(event) {
        event.preventDefault();
        event.stopPropagation();
        const key = event.key;
        const value = event.target.value;
        if (key === KeyboardKeys.ESCAPE) {
            this.close.emit(true);
        }
        else if (event.key === KeyboardKeys.ARROW_DOWN) {
            ++this.focusIndex;
        }
        if (this.filterQuery !== value) {
            this.filterQuery = value;
        }
        this.updatefilterQueryIsInOptions();
        this.keyup.emit({ event, value });
    }
    onOptionKeyDown(event, option) {
        event.preventDefault();
        event.stopPropagation();
        const key = event.key;
        if (key === KeyboardKeys.ARROW_DOWN) {
            if (this.focusIndex < this.options.length - 1)
                ++this.focusIndex;
        }
        else if (key === KeyboardKeys.ARROW_UP) {
            if (this.focusIndex > 0)
                --this.focusIndex;
        }
        else if (key === KeyboardKeys.ENTER) {
            this.selection.emit(option);
        }
    }
    onAddClicked(event, value) {
        event.preventDefault();
        event.stopPropagation();
        this.selection.emit({ value, name: value });
        event.target.value = '';
        this.close.emit();
    }
    onShiftEnterKeyDown(event) {
        if (this.allowAdditions) {
            this.onAddClicked(event, this.filterQuery);
        }
    }
    focusElement(index) {
        const elements = this.element.getElementsByClassName('ngx-select-dropdown-option');
        const element = elements[index];
        if (element) {
            setTimeout(() => element.focus(), 5);
        }
    }
    calculateGroups(groupBy, options, filter) {
        if (!options)
            return [];
        const filterOptions = { filterCaseSensitive: this.filterCaseSensitive };
        // no group by defined, skip and just return
        // empty group object...
        if (!groupBy) {
            if (filter) {
                // filter options
                options = options.filter(o => {
                    return containsFilter({ name: o.name, value: o.value }, filter, filterOptions);
                });
            }
            // need to map indexes
            options = options.map((option, index) => {
                return { option, index };
            });
            return [{ options }];
        }
        const map = new Map();
        let i = 0;
        for (const option of options) {
            // only show items in filter criteria
            if (filter && !containsFilter({ name: option.name, value: option.value }, filter, filterOptions)) {
                continue;
            }
            const group = option.value[groupBy];
            const opt = map.get(group);
            // need to map the true indexes
            const kv = { option, index: i++ };
            if (!opt) {
                map.set(group, [kv]);
            }
            else {
                opt.push(kv);
            }
        }
        const result = [];
        map.forEach((value, key) => {
            result.push({ name: key, options: value });
        });
        return result;
    }
}
SelectDropdownComponent.ɵfac = function SelectDropdownComponent_Factory(t) { return new (t || SelectDropdownComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
SelectDropdownComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: SelectDropdownComponent, selectors: [["ngx-select-dropdown"]], viewQuery: function SelectDropdownComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.filterInput = _t.first);
    } }, hostAttrs: [1, "ngx-select-dropdown"], hostVars: 2, hostBindings: function SelectDropdownComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("groupings", ctx.groupBy);
    } }, inputs: { allowAdditionsText: "allowAdditionsText", tagging: "tagging", allowAdditions: "allowAdditions", filterable: "filterable", filterCaseSensitive: "filterCaseSensitive", focusIndex: "focusIndex", filterQuery: "filterQuery", groupBy: "groupBy", options: "options", selected: "selected", identifier: "identifier", filterPlaceholder: "filterPlaceholder", filterEmptyPlaceholder: "filterEmptyPlaceholder", emptyPlaceholder: "emptyPlaceholder", groupByTemplate: "groupByTemplate" }, outputs: { keyup: "keyup", selection: "selection", close: "close" }, exportAs: ["ngxSelectDropdown"], decls: 4, vars: 2, consts: [["class", "ngx-select-filter", 4, "ngIf"], [1, "vertical-list", "ngx-select-dropdown-options"], ["class", "ngx-select-option-group", 4, "ngFor", "ngForOf"], [1, "ngx-select-filter"], [1, "ngx-icon", "ngx-search"], ["type", "search", "tabindex", "", "autocomplete", "off", "autocorrect", "off", "spellcheck", "off", 1, "ngx-select-filter-input", 3, "placeholder", "keyup", "keydown.shift.Enter", "change"], ["filterInput", ""], [1, "ngx-icon", "ngx-x", 3, "hidden", "click"], [1, "ngx-select-option-group"], [4, "ngIf"], ["class", "ngx-select-dropdown-option", "tabindex", "-1", 3, "disabled", "active", "selected", "hidden", "click", "keydown", 4, "ngFor", "ngForOf"], ["class", "ngx-select-empty-placeholder", 4, "ngIf"], ["class", "ngx-select-empty-placeholder", 3, "innerHTML", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["defaultGroupName", ""], [1, "ngx-select-option-group-name"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ngx-select-option-group-name", 3, "innerHTML"], ["tabindex", "-1", 1, "ngx-select-dropdown-option", 3, "hidden", "click", "keydown"], [3, "innerHTML", 4, "ngIf"], ["class", "ngx-icon ngx-check ngx-select-dropdown--selected-option", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [1, "ngx-icon", "ngx-check", "ngx-select-dropdown--selected-option"], [1, "ngx-select-empty-placeholder"], ["href", "#", 1, "ngx-select-add-current-value", 3, "click"], [3, "innerHTML", 4, "ngIf", "ngIfElse"], ["tpl", ""], [4, "ngTemplateOutlet"], [1, "ngx-select-empty-placeholder-text", 3, "innerHTML"], ["href", "#", "class", "ngx-select-empty-placeholder-add", 3, "click", 4, "ngIf"], ["href", "#", 1, "ngx-select-empty-placeholder-add", 3, "click"], [1, "ngx-select-empty-placeholder", 3, "innerHTML"]], template: function SelectDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtemplate(1, SelectDropdownComponent_div_1_Template, 5, 2, "div", 0);
        ɵngcc0.ɵɵelementStart(2, "ul", 1);
        ɵngcc0.ɵɵtemplate(3, SelectDropdownComponent_li_3_Template, 7, 5, "li", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.filterable && !ctx.tagging);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.groups);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
SelectDropdownComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
SelectDropdownComponent.propDecorators = {
    selected: [{ type: Input }],
    identifier: [{ type: Input }],
    filterPlaceholder: [{ type: Input }],
    filterEmptyPlaceholder: [{ type: Input }],
    emptyPlaceholder: [{ type: Input }],
    allowAdditionsText: [{ type: Input }],
    tagging: [{ type: Input }],
    allowAdditions: [{ type: Input }],
    filterable: [{ type: Input }],
    filterCaseSensitive: [{ type: Input }],
    focusIndex: [{ type: Input }],
    filterQuery: [{ type: Input }],
    groupBy: [{ type: Input }],
    groupByTemplate: [{ type: Input }],
    options: [{ type: Input }],
    keyup: [{ type: Output }],
    selection: [{ type: Output }],
    close: [{ type: Output }],
    filterInput: [{ type: ViewChild, args: ['filterInput',] }]
};
__decorate([
    debounceable(500),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SelectDropdownComponent.prototype, "updatefilterQueryIsInOptions", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SelectDropdownComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxSelectDropdown',
                selector: 'ngx-select-dropdown',
                template: "<div>\n  <div class=\"ngx-select-filter\" *ngIf=\"filterable && !tagging\">\n    <i class=\"ngx-icon ngx-search\"></i>\n    <input\n      #filterInput\n      type=\"search\"\n      tabindex=\"\"\n      autocomplete=\"off\"\n      autocorrect=\"off\"\n      spellcheck=\"off\"\n      class=\"ngx-select-filter-input\"\n      [placeholder]=\"filterPlaceholder\"\n      (keyup)=\"onInputKeyUp($event)\"\n      (keydown.shift.Enter)=\"onShiftEnterKeyDown($event)\"\n      (change)=\"$event.stopPropagation()\"\n    />\n    <i [hidden]=\"!filterInput.value\" class=\"ngx-icon ngx-x\" (click)=\"clearFilter(filterInput)\"></i>\n  </div>\n  <ul class=\"vertical-list ngx-select-dropdown-options\">\n    <li\n      *ngFor=\"let group of groups; let i = index; let first = first; let last = last; let odd = odd; let even = even\"\n      class=\"ngx-select-option-group\"\n    >\n      <ng-container *ngIf=\"group.name\">\n        <ng-container *ngIf=\"groupByTemplate; else defaultGroupName\">\n          <span class=\"ngx-select-option-group-name\">\n            <ng-container\n              *ngTemplateOutlet=\"\n                groupByTemplate;\n                context: { groupName: group.name, index: i, first: first, last: last, odd: odd, even: even }\n              \"\n            ></ng-container>\n          </span>\n        </ng-container>\n        <ng-template #defaultGroupName>\n          <span class=\"ngx-select-option-group-name\" [innerHTML]=\"group.name\"> </span>\n        </ng-template>\n      </ng-container>\n      <ul class=\"vertical-list ngx-select-dropdown-options\">\n        <li\n          *ngFor=\"let kv of group.options\"\n          class=\"ngx-select-dropdown-option\"\n          [class.disabled]=\"kv.option.disabled\"\n          [class.active]=\"kv.index === focusIndex\"\n          [class.selected]=\"isSelected(kv.option)\"\n          [hidden]=\"kv.option.hidden\"\n          tabindex=\"-1\"\n          (click)=\"selection.emit(kv.option)\"\n          (keydown)=\"onOptionKeyDown($event, kv.option)\"\n        >\n          <ng-template\n            *ngIf=\"kv.option.optionTemplate\"\n            [ngTemplateOutlet]=\"kv.option.optionTemplate\"\n            [ngTemplateOutletContext]=\"{ option: kv.option }\"\n          >\n          </ng-template>\n          <span *ngIf=\"!kv.option.optionTemplate\" [innerHTML]=\"kv.option.name\"> </span>\n          <i\n            *ngIf=\"!kv.option.optionTemplate && isSelected(kv.option)\"\n            class=\"ngx-icon ngx-check ngx-select-dropdown--selected-option\"\n          ></i>\n        </li>\n        <li\n          *ngIf=\"allowAdditions && filterQuery && group.options?.length && !filterQueryIsInOptions\"\n          class=\"ngx-select-empty-placeholder\"\n        >\n          <a href=\"#\" class=\"ngx-select-add-current-value\" (click)=\"onAddClicked($event, filterQuery)\">\n            <span *ngIf=\"isNotTemplate; else tpl\" [innerHTML]=\"allowAdditionsText\"> </span>\n            <ng-template #tpl>\n              <ng-container *ngTemplateOutlet=\"allowAdditionsText\"></ng-container>\n            </ng-template>\n          </a>\n        </li>\n\n        <li\n          *ngIf=\"filterQuery && filterEmptyPlaceholder && !group.options?.length\"\n          class=\"ngx-select-empty-placeholder\"\n        >\n          <span class=\"ngx-select-empty-placeholder-text\" [innerHTML]=\"filterEmptyPlaceholder\"> </span>\n          <a\n            *ngIf=\"allowAdditions\"\n            href=\"#\"\n            class=\"ngx-select-empty-placeholder-add\"\n            (click)=\"onAddClicked($event, filterQuery)\"\n          >\n            <span *ngIf=\"isNotTemplate; else tpl\" [innerHTML]=\"allowAdditionsText\"> </span>\n            <ng-template #tpl>\n              <ng-container *ngTemplateOutlet=\"allowAdditionsText\"></ng-container>\n            </ng-template>\n          </a>\n        </li>\n        <li\n          *ngIf=\"!filterQuery && emptyPlaceholder && !group.options?.length\"\n          class=\"ngx-select-empty-placeholder\"\n          [innerHTML]=\"emptyPlaceholder\"\n        ></li>\n      </ul>\n    </li>\n  </ul>\n</div>\n",
                host: {
                    class: 'ngx-select-dropdown',
                    '[class.groupings]': 'groupBy'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { allowAdditionsText: [{
            type: Input
        }], keyup: [{
            type: Output
        }], selection: [{
            type: Output
        }], close: [{
            type: Output
        }], tagging: [{
            type: Input
        }], allowAdditions: [{
            type: Input
        }], filterable: [{
            type: Input
        }], filterCaseSensitive: [{
            type: Input
        }], focusIndex: [{
            type: Input
        }], filterQuery: [{
            type: Input
        }], groupBy: [{
            type: Input
        }], options: [{
            type: Input
        }], selected: [{
            type: Input
        }], identifier: [{
            type: Input
        }], filterPlaceholder: [{
            type: Input
        }], filterEmptyPlaceholder: [{
            type: Input
        }], emptyPlaceholder: [{
            type: Input
        }], groupByTemplate: [{
            type: Input
        }], filterInput: [{
            type: ViewChild,
            args: ['filterInput']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEYsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUVwRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWF4RCxNQUFNLE9BQU8sdUJBQXVCO0FBQUcsSUFpSHJDLFlBQTZCLFVBQXNCLEVBQW1CLEdBQXNCO0FBQUksUUFBbkUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBQWtCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsUUEzR3BGLHVCQUFrQixHQUE4QixXQUFXLENBQUM7QUFDdkUsUUErRVksVUFBSyxHQUFHLElBQUksWUFBWSxFQUE0QyxDQUFD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QXZDZSxFQUFFLFNBQVMsa0JBQy9CLDlCQXVDRCx5QkFRQyxLQUFLO2FBOUNOLGVBQWUsRUFBRSw5QkErQ2pCLDBCQVNDLEtBQUs7aUJBeERrQyxDQUFDLE1BQU0seEJBeUQvQyxzQkFTQyxLQUFLO01BakVQLE5Ba0VDLDhCQVNDLEtBQUs7QUFBSyxzQkFFVixLQUFLO0FBQ04sb0JBU0MsTUFBTTtBQUFLLHdCQUNYLE1BQU07QUFBSyxvQkFDWCxNQUFNO0FBQUssMEJBRVgsU0FBUyxTQUFDLGFBQWE7QUFDdEI7QUE0Q0Y7QUFBYSxJQURaLFlBQVksQ0FBQyxHQUFHLENBQUM7QUFDbkI7QUFDTTtBQUF5QztBQUE0QywyRUFFekY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0g7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSwgY29lcmNlTnVtYmVyUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlYm91bmNlYWJsZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcnMvZGVib3VuY2VhYmxlL2RlYm91bmNlYWJsZS5kZWNvcmF0b3InO1xuXG5pbXBvcnQgeyBLZXlib2FyZEtleXMgfSBmcm9tICcuLi8uLi9lbnVtcy9rZXlib2FyZC1rZXlzLmVudW0nO1xuaW1wb3J0IHsgY29udGFpbnNGaWx0ZXIgfSBmcm9tICcuL2NvbnRhaW5zLWZpbHRlci51dGlsJztcbmltcG9ydCB7IFNlbGVjdERyb3Bkb3duT3B0aW9uIH0gZnJvbSAnLi9zZWxlY3QtZHJvcGRvd24tb3B0aW9uLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ25neFNlbGVjdERyb3Bkb3duJyxcbiAgc2VsZWN0b3I6ICduZ3gtc2VsZWN0LWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25neC1zZWxlY3QtZHJvcGRvd24nLFxuICAgICdbY2xhc3MuZ3JvdXBpbmdzXSc6ICdncm91cEJ5J1xuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3REcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBzZWxlY3RlZDogYW55W107XG4gIEBJbnB1dCgpIGlkZW50aWZpZXI6IGFueTtcbiAgQElucHV0KCkgZmlsdGVyUGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgZmlsdGVyRW1wdHlQbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBlbXB0eVBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFsbG93QWRkaXRpb25zVGV4dDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiA9ICdBZGQgVmFsdWUnO1xuXG4gIEBJbnB1dCgpXG4gIGdldCB0YWdnaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl90YWdnaW5nO1xuICB9XG5cbiAgc2V0IHRhZ2dpbmcodGFnZ2luZykge1xuICAgIHRoaXMuX3RhZ2dpbmcgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodGFnZ2luZyk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgYWxsb3dBZGRpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93QWRkaXRpb25zO1xuICB9XG5cbiAgc2V0IGFsbG93QWRkaXRpb25zKGFsbG93QWRkaXRpb25zKSB7XG4gICAgdGhpcy5fYWxsb3dBZGRpdGlvbnMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoYWxsb3dBZGRpdGlvbnMpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGZpbHRlcmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcmFibGU7XG4gIH1cblxuICBzZXQgZmlsdGVyYWJsZShmaWx0ZXJhYmxlKSB7XG4gICAgdGhpcy5fZmlsdGVyYWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShmaWx0ZXJhYmxlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBmaWx0ZXJDYXNlU2Vuc2l0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJDYXNlU2Vuc2l0aXZlO1xuICB9XG5cbiAgc2V0IGZpbHRlckNhc2VTZW5zaXRpdmUoZmlsdGVyQ2FzZVNlbnNpdGl2ZSkge1xuICAgIHRoaXMuX2ZpbHRlckNhc2VTZW5zaXRpdmUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoZmlsdGVyQ2FzZVNlbnNpdGl2ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZm9jdXNJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNJbmRleDtcbiAgfVxuXG4gIHNldCBmb2N1c0luZGV4KHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fZm9jdXNJbmRleCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbCk7XG4gICAgdGhpcy5mb2N1c0VsZW1lbnQodGhpcy5fZm9jdXNJbmRleCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZmlsdGVyUXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlclF1ZXJ5O1xuICB9XG5cbiAgc2V0IGZpbHRlclF1ZXJ5KHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fZmlsdGVyUXVlcnkgPSB2YWw7XG4gICAgdGhpcy5ncm91cHMgPSB0aGlzLmNhbGN1bGF0ZUdyb3Vwcyh0aGlzLmdyb3VwQnksIHRoaXMub3B0aW9ucywgdmFsKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBncm91cEJ5KCkge1xuICAgIHJldHVybiB0aGlzLl9ncm91cEJ5O1xuICB9XG5cbiAgc2V0IGdyb3VwQnkodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9ncm91cEJ5ID0gdmFsO1xuICAgIHRoaXMuZ3JvdXBzID0gdGhpcy5jYWxjdWxhdGVHcm91cHModmFsLCB0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgQElucHV0KCkgZ3JvdXBCeVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx1bmtub3duPjtcblxuICBASW5wdXQoKVxuICBnZXQgb3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuXG4gIHNldCBvcHRpb25zKHZhbCkge1xuICAgIHRoaXMuZ3JvdXBzID0gdGhpcy5jYWxjdWxhdGVHcm91cHModGhpcy5ncm91cEJ5LCB2YWwpO1xuICAgIHRoaXMuX29wdGlvbnMgPSB2YWw7XG4gIH1cblxuICBAT3V0cHV0KCkga2V5dXAgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IEtleWJvYXJkRXZlbnQ7IHZhbHVlPzogc3RyaW5nIH0+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPFNlbGVjdERyb3Bkb3duT3B0aW9uPigpO1xuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4gfCB1bmRlZmluZWQ+KCk7XG5cbiAgQFZpZXdDaGlsZCgnZmlsdGVySW5wdXQnKVxuICByZWFkb25seSBmaWx0ZXJJbnB1dD86IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgZ2V0IGlzTm90VGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuICEodHlwZW9mIHRoaXMuYWxsb3dBZGRpdGlvbnNUZXh0ID09PSAnb2JqZWN0JyAmJiB0aGlzLmFsbG93QWRkaXRpb25zVGV4dCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgfVxuXG4gIGdyb3VwczogYW55W107XG4gIGZpbHRlclF1ZXJ5SXNJbk9wdGlvbnMgPSBmYWxzZTtcblxuICBwcml2YXRlIF9vcHRpb25zOiBTZWxlY3REcm9wZG93bk9wdGlvbltdO1xuICBwcml2YXRlIF9ncm91cEJ5OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZpbHRlclF1ZXJ5OiBzdHJpbmc7XG4gIHByaXZhdGUgX2ZvY3VzSW5kZXg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfdGFnZ2luZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfYWxsb3dBZGRpdGlvbnM6IGJvb2xlYW47XG4gIHByaXZhdGUgX2ZpbHRlcmFibGU6IGJvb2xlYW47XG4gIHByaXZhdGUgX2ZpbHRlckNhc2VTZW5zaXRpdmUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVhZG9ubHkgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZmlsdGVyYWJsZSAmJiAhdGhpcy50YWdnaW5nKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5maWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9LCA1KTtcbiAgICB9XG4gIH1cblxuICBpc1NlbGVjdGVkKG9wdGlvbjogU2VsZWN0RHJvcGRvd25PcHRpb24pOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWQgfHwgIXRoaXMuc2VsZWN0ZWQubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBpZHggPSB0aGlzLnNlbGVjdGVkLmZpbmRJbmRleChvID0+IHtcbiAgICAgIGlmICh0aGlzLmlkZW50aWZpZXIpIHJldHVybiBvW3RoaXMuaWRlbnRpZmllcl0gPT09IG9wdGlvbi52YWx1ZVt0aGlzLmlkZW50aWZpZXJdO1xuICAgICAgcmV0dXJuIG8gPT09IG9wdGlvbi52YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpZHggPiAtMTtcbiAgfVxuXG4gIEBkZWJvdW5jZWFibGUoNTAwKVxuICB1cGRhdGVmaWx0ZXJRdWVyeUlzSW5PcHRpb25zKCkge1xuICAgIHRoaXMuZmlsdGVyUXVlcnlJc0luT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5zb21lKG8gPT4gby5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMuZmlsdGVyUXVlcnkudG9Mb3dlckNhc2UoKSk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBjbGVhckZpbHRlcihmaWx0ZXJJbnB1dDogSFRNTElucHV0RWxlbWVudCkge1xuICAgIGZpbHRlcklucHV0LnZhbHVlID0gJyc7XG5cbiAgICB0aGlzLmZpbHRlclF1ZXJ5ID0gJyc7XG4gICAgdGhpcy51cGRhdGVmaWx0ZXJRdWVyeUlzSW5PcHRpb25zKCk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBvbklucHV0S2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5O1xuICAgIGNvbnN0IHZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBhbnkpLnZhbHVlO1xuXG4gICAgaWYgKGtleSA9PT0gKEtleWJvYXJkS2V5cy5FU0NBUEUgYXMgYW55KSkge1xuICAgICAgdGhpcy5jbG9zZS5lbWl0KHRydWUpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAoS2V5Ym9hcmRLZXlzLkFSUk9XX0RPV04gYXMgYW55KSkge1xuICAgICAgKyt0aGlzLmZvY3VzSW5kZXg7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmlsdGVyUXVlcnkgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLmZpbHRlclF1ZXJ5ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVmaWx0ZXJRdWVyeUlzSW5PcHRpb25zKCk7XG4gICAgdGhpcy5rZXl1cC5lbWl0KHsgZXZlbnQsIHZhbHVlIH0pO1xuICB9XG5cbiAgb25PcHRpb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBvcHRpb24/OiBTZWxlY3REcm9wZG93bk9wdGlvbik6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXk7XG5cbiAgICBpZiAoa2V5ID09PSAoS2V5Ym9hcmRLZXlzLkFSUk9XX0RPV04gYXMgYW55KSkge1xuICAgICAgaWYgKHRoaXMuZm9jdXNJbmRleCA8IHRoaXMub3B0aW9ucy5sZW5ndGggLSAxKSArK3RoaXMuZm9jdXNJbmRleDtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gKEtleWJvYXJkS2V5cy5BUlJPV19VUCBhcyBhbnkpKSB7XG4gICAgICBpZiAodGhpcy5mb2N1c0luZGV4ID4gMCkgLS10aGlzLmZvY3VzSW5kZXg7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IChLZXlib2FyZEtleXMuRU5URVIgYXMgYW55KSkge1xuICAgICAgdGhpcy5zZWxlY3Rpb24uZW1pdChvcHRpb24pO1xuICAgIH1cbiAgfVxuXG4gIG9uQWRkQ2xpY2tlZChldmVudDogRXZlbnQsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy5zZWxlY3Rpb24uZW1pdCh7IHZhbHVlLCBuYW1lOiB2YWx1ZSB9KTtcbiAgICAoZXZlbnQudGFyZ2V0IGFzIGFueSkudmFsdWUgPSAnJztcblxuICAgIHRoaXMuY2xvc2UuZW1pdCgpO1xuICB9XG5cbiAgb25TaGlmdEVudGVyS2V5RG93bihldmVudCkge1xuICAgIGlmICh0aGlzLmFsbG93QWRkaXRpb25zKSB7XG4gICAgICB0aGlzLm9uQWRkQ2xpY2tlZChldmVudCwgdGhpcy5maWx0ZXJRdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmb2N1c0VsZW1lbnQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25neC1zZWxlY3QtZHJvcGRvd24tb3B0aW9uJyk7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2luZGV4XTtcblxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGVsZW1lbnQuZm9jdXMoKSwgNSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVHcm91cHMoZ3JvdXBCeTogc3RyaW5nLCBvcHRpb25zOiBhbnlbXSwgZmlsdGVyPzogc3RyaW5nKTogYW55W10ge1xuICAgIGlmICghb3B0aW9ucykgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgZmlsdGVyT3B0aW9ucyA9IHsgZmlsdGVyQ2FzZVNlbnNpdGl2ZTogdGhpcy5maWx0ZXJDYXNlU2Vuc2l0aXZlIH07XG5cbiAgICAvLyBubyBncm91cCBieSBkZWZpbmVkLCBza2lwIGFuZCBqdXN0IHJldHVyblxuICAgIC8vIGVtcHR5IGdyb3VwIG9iamVjdC4uLlxuICAgIGlmICghZ3JvdXBCeSkge1xuICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICAvLyBmaWx0ZXIgb3B0aW9uc1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucy5maWx0ZXIobyA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5zRmlsdGVyKHsgbmFtZTogby5uYW1lLCB2YWx1ZTogby52YWx1ZSB9LCBmaWx0ZXIsIGZpbHRlck9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gbmVlZCB0byBtYXAgaW5kZXhlc1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiB7IG9wdGlvbiwgaW5kZXggfTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gW3sgb3B0aW9ucyB9XTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgLy8gb25seSBzaG93IGl0ZW1zIGluIGZpbHRlciBjcml0ZXJpYVxuICAgICAgaWYgKGZpbHRlciAmJiAhY29udGFpbnNGaWx0ZXIoeyBuYW1lOiBvcHRpb24ubmFtZSwgdmFsdWU6IG9wdGlvbi52YWx1ZSB9LCBmaWx0ZXIsIGZpbHRlck9wdGlvbnMpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBncm91cCA9IG9wdGlvbi52YWx1ZVtncm91cEJ5XTtcbiAgICAgIGNvbnN0IG9wdDogYW55ID0gbWFwLmdldChncm91cCk7XG5cbiAgICAgIC8vIG5lZWQgdG8gbWFwIHRoZSB0cnVlIGluZGV4ZXNcbiAgICAgIGNvbnN0IGt2ID0geyBvcHRpb24sIGluZGV4OiBpKysgfTtcblxuICAgICAgaWYgKCFvcHQpIHtcbiAgICAgICAgbWFwLnNldChncm91cCwgW2t2XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHQucHVzaChrdik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgbWFwLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIHJlc3VsdC5wdXNoKHsgbmFtZToga2V5LCBvcHRpb25zOiB2YWx1ZSB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==