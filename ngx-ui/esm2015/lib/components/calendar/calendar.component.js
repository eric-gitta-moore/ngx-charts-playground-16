import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import moment from 'moment-timezone';
import { getMonth } from './utils/get-month/get-month.util';
import { getDecadeStartYear } from './utils/get-decade-start-year/get-decade-start-year.util';
import { CalendarView } from './calendar-view.enum';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ngx-moment';
import * as ɵngcc3 from '../../pipes/time-zone/time-zone.pipe';

function CalendarComponent_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r5 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", d_r5, " ");
} }
function CalendarComponent_div_2_div_13_div_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 18);
    ɵngcc0.ɵɵlistener("click", function CalendarComponent_div_2_div_13_div_1_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const day_r8 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r10 = ɵngcc0.ɵɵnextContext(3); return ctx_r10.onDayClick(day_r8); });
    ɵngcc0.ɵɵpipe(1, "amDateFormat");
    ɵngcc0.ɵɵpipe(2, "amTimeZone");
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r8 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r9 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵclassProp("active", ctx_r9.isDayActive(day_r8.date));
    ɵngcc0.ɵɵproperty("title", ɵngcc0.ɵɵpipeBind2(1, 6, ɵngcc0.ɵɵpipeBind2(2, 9, day_r8.date, ctx_r9.timezone), "LL"))("ngClass", day_r8.classes)("disabled", ctx_r9.isDisabled(day_r8.date, "day"));
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate1(" ", day_r8.num, " ");
} }
function CalendarComponent_div_2_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵtemplate(1, CalendarComponent_div_2_div_13_div_1_button_1_Template, 4, 12, "button", 17);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r8 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", day_r8.num);
} }
function CalendarComponent_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵtemplate(1, CalendarComponent_div_2_div_13_div_1_Template, 2, 1, "div", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const week_r6 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", week_r6);
} }
function CalendarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "div", 3);
    ɵngcc0.ɵɵelementStart(2, "button", 4);
    ɵngcc0.ɵɵlistener("click", function CalendarComponent_div_2_Template_button_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.prevMonth(); });
    ɵngcc0.ɵɵelement(3, "span", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "span", 6);
    ɵngcc0.ɵɵlistener("click", function CalendarComponent_div_2_Template_span_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.changeViews(); });
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵpipe(6, "amDateFormat");
    ɵngcc0.ɵɵpipe(7, "amTimeZone");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(8, "button", 7);
    ɵngcc0.ɵɵlistener("click", function CalendarComponent_div_2_Template_button_click_8_listener() { ɵngcc0.ɵɵrestoreView(_r15); const ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.nextMonth(); });
    ɵngcc0.ɵɵelement(9, "span", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(10, "div", 9);
    ɵngcc0.ɵɵtemplate(11, CalendarComponent_div_2_div_11_Template, 2, 1, "div", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(12, "div", 11);
    ɵngcc0.ɵɵtemplate(13, CalendarComponent_div_2_div_13_Template, 2, 1, "div", 12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.disabled);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind2(6, 5, ɵngcc0.ɵɵpipeBind2(7, 8, ctx_r0.activeDate, ctx_r0.timezone), "MMMM YYYY"), " ");
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.disabled);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.daysOfWeek);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.weeks);
} }
function CalendarComponent_div_3_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 24);
    ɵngcc0.ɵɵlistener("click", function CalendarComponent_div_3_button_12_Template_button_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r21); const month_r19 = restoredCtx.$implicit; const ctx_r20 = ɵngcc0.ɵɵnextContext(2); return ctx_r20.onMonthClick(month_r19); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r19 = ctx.$implicit;
    const ctx_r18 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("active", ctx_r18.isMonthActive(month_r19))("current", ctx_r18.isCurrentMonth(month_r19));
    ɵngcc0.ɵɵproperty("disabled", ctx_r18.isDisabled(month_r19, "month"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", month_r19, " ");
} }
function CalendarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "div", 3);
    ɵngcc0.ɵɵelementStart(2, "button", 19);
    ɵngcc0.ɵɵlistener("click", function CalendarComponent_div_3_Template_button_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.prevYear(); });
    ɵngcc0.ɵɵelement(3, "span", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "span", 6);
    ɵngcc0.ɵɵlistener("click", function CalendarComponent_div_3_Template_span_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r24 = ɵngcc0.ɵɵnextContext(); return ctx_r24.changeViews(); });
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵpipe(6, "amDateFormat");
    ɵngcc0.ɵɵpipe(7, "amTimeZone");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(8, "button", 20);
    ɵngcc0.ɵɵlistener("click", function CalendarComponent_div_3_Template_button_click_8_listener() { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r25 = ɵngcc0.ɵɵnextContext(); return ctx_r25.nextYear(); });
    ɵngcc0.ɵɵelement(9, "span", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(10, "div", 21);
    ɵngcc0.ɵɵelementStart(11, "div", 22);
    ɵngcc0.ɵɵtemplate(12, CalendarComponent_div_3_button_12_Template, 2, 6, "button", 23);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r1.disabled);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind2(6, 4, ɵngcc0.ɵɵpipeBind2(7, 7, ctx_r1.activeDate, ctx_r1.timezone), "YYYY"), " ");
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("disabled", ctx_r1.disabled);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.monthsList);
} }
function CalendarComponent_div_4_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r30 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 30);
    ɵngcc0.ɵɵlistener("click", function CalendarComponent_div_4_button_10_Template_button_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r30); const x_r28 = restoredCtx.index; const ctx_r29 = ɵngcc0.ɵɵnextContext(2); return ctx_r29.onYearClick(x_r28 + ctx_r29.startYear); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const x_r28 = ctx.index;
    const ctx_r26 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵclassProp("active", ctx_r26.isYearActive(x_r28 + ctx_r26.startYear))("current", ctx_r26.isCurrentYear(x_r28 + ctx_r26.startYear));
    ɵngcc0.ɵɵproperty("disabled", ctx_r26.isDisabled(x_r28 + ctx_r26.startYear, "year"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", x_r28 + ctx_r26.startYear, " ");
} }
function CalendarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r32 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "div", 3);
    ɵngcc0.ɵɵelementStart(2, "button", 25);
    ɵngcc0.ɵɵlistener("click", function CalendarComponent_div_4_Template_button_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r32); const ctx_r31 = ɵngcc0.ɵɵnextContext(); return ctx_r31.prevTwoDecades(); });
    ɵngcc0.ɵɵelement(3, "span", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "span", 6);
    ɵngcc0.ɵɵlistener("click", function CalendarComponent_div_4_Template_span_click_4_listener() { ɵngcc0.ɵɵrestoreView(_r32); const ctx_r33 = ɵngcc0.ɵɵnextContext(); return ctx_r33.changeViews(); });
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "button", 26);
    ɵngcc0.ɵɵlistener("click", function CalendarComponent_div_4_Template_button_click_6_listener() { ɵngcc0.ɵɵrestoreView(_r32); const ctx_r34 = ɵngcc0.ɵɵnextContext(); return ctx_r34.nextTwoDecades(); });
    ɵngcc0.ɵɵelement(7, "span", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(8, "div", 27);
    ɵngcc0.ɵɵelementStart(9, "div", 28);
    ɵngcc0.ɵɵtemplate(10, CalendarComponent_div_4_button_10_Template, 2, 6, "button", 29);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r2.disabled);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate2(" ", ctx_r2.startYear, " - ", ctx_r2.startYear + 20, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r2.disabled);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("ngForOf", " ".repeat(20).split(""));
} }
const CALENDAR_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CalendarComponent),
    multi: true
};
export class CalendarComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        this.inputFormats = ['L', 'LT', 'L LT', moment.ISO_8601];
        this.change = new EventEmitter();
        this.monthsList = moment.monthsShort();
        this.onTouchedCallback = () => {
            // placeholder
        };
        this.onChangeCallback = () => {
            // placeholder
        };
    }
    get minView() {
        return this._minView ? this._minView : CalendarView.Date;
    }
    set minView(val) {
        this._minView = val;
        this.validateView();
    }
    get defaultView() {
        return this._defaultView ? this._defaultView : this.minView;
    }
    set defaultView(val) {
        this._defaultView = val;
        this.validateView();
    }
    get value() {
        return this._value;
    }
    set value(val) {
        const date = this.createMoment(val);
        if (date.isValid()) {
            if (!date.isSame(this._value, 'day')) {
                this._value = val;
                this.onChangeCallback(this._value);
            }
            this.change.emit(this._value);
        }
    }
    get current() {
        return this._current;
    }
    ngOnInit() {
        this.activeDate = this.createMoment(this.value);
        this.weeks = getMonth(this.activeDate);
        this.monthsList = moment.monthsShort();
        this._current = this.activeDate;
        this.startYear = getDecadeStartYear(this._current.year());
        this.validateView();
    }
    ngAfterViewInit() {
        this.cdr.markForCheck();
    }
    changeViews() {
        if (this.currentView === CalendarView.Date) {
            this.currentView = CalendarView.Month;
        }
        else if (this.currentView === CalendarView.Month) {
            this.currentView = CalendarView.Year;
        }
        else {
            this.currentView = this.minView;
        }
        this.weeks = getMonth(this.activeDate);
    }
    validateView() {
        const viewsList = [CalendarView.Date, CalendarView.Month, CalendarView.Year];
        // date time picker precision validation
        if (!viewsList.includes(this.minView)) {
            this.minView = CalendarView.Date;
        }
        // defaultView cannot be below minView
        if (viewsList.indexOf(this.minView) > viewsList.indexOf(this.defaultView)) {
            this.defaultView = this.minView;
        }
        this.currentView = this.defaultView;
    }
    /**
     * Checks if `date` matches selected value
     */
    isDayActive(date) {
        return date.isSame(this.value, 'day');
    }
    /**
     * Checks if `month` matches selected value, in the viewed year
     */
    isMonthActive(month) {
        const date = this.createMoment(this.value).month(month);
        return date.isSame(this.value, 'month') && date.isSame(this.activeDate, 'year');
    }
    /**
     * Checks if `month` and year matches current
     */
    isCurrentMonth(month) {
        const date = this.activeDate.clone().month(month);
        return date.isSame(this._current, 'month') && date.isSame(this._current, 'year');
    }
    /**
     * Checks if `year` matches selected year
     */
    isYearActive(year) {
        const date = this.createMoment(this.value).year(year);
        return date.isSame(this.value, 'year');
    }
    /**
     * Checks if year matches current year
     */
    isCurrentYear(year) {
        const date = this.createMoment(this.value).year(year);
        return date.isSame(this._current, 'year');
    }
    isDisabled(value, type) {
        if (this.disabled)
            return true;
        if (!value)
            return false;
        let date;
        switch (type) {
            case 'day':
                date = value;
                break;
            case 'month':
                date = this.activeDate.clone().month(value);
                break;
            case 'year':
                date = this.activeDate.clone().year(value);
                break;
            default:
                return false;
        }
        const isBeforeMin = this.minDate && date.isBefore(this.parseDate(this.minDate), type);
        const isAfterMax = this.maxDate && date.isAfter(this.parseDate(this.maxDate), type);
        return isBeforeMin || isAfterMax;
    }
    onDayClick(day) {
        this.activeDate = day.date.clone();
        this.value = this.activeDate.toDate();
        if (day.prevMonth || day.nextMonth) {
            this.weeks = getMonth(this.activeDate);
        }
    }
    onMonthClick(month) {
        this.activeDate.month(month);
        this.value = this.activeDate.toDate();
        if (this.minView !== CalendarView.Month) {
            this.currentView = CalendarView.Date;
            this.weeks = getMonth(this.activeDate);
        }
    }
    onYearClick(year) {
        this.activeDate.year(year);
        this.value = this.activeDate.toDate();
        if (this.minView !== CalendarView.Year) {
            this.currentView = CalendarView.Month;
            this.weeks = getMonth(this.activeDate);
        }
    }
    prevMonth() {
        const date = this.activeDate.clone();
        this.activeDate = date.subtract(1, 'month');
        this.weeks = getMonth(this.activeDate);
    }
    nextMonth() {
        const date = this.activeDate.clone();
        this.activeDate = date.add(1, 'month');
        this.weeks = getMonth(this.activeDate);
    }
    prevYear() {
        const date = this.activeDate.clone();
        this.activeDate = date.subtract(1, 'year');
    }
    nextYear() {
        const date = this.activeDate.clone();
        this.activeDate = date.add(1, 'year');
    }
    prevTwoDecades() {
        this.startYear = this.startYear - 20;
    }
    nextTwoDecades() {
        this.startYear = this.startYear + 20;
    }
    writeValue(val) {
        const activeDate = this.createMoment(val);
        if (activeDate.isValid() && !activeDate.isSame(this.value, 'day')) {
            this.activeDate = activeDate;
            this.weeks = getMonth(this.activeDate);
            this._value = val;
            this.startYear = getDecadeStartYear(this.activeDate.year());
        }
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    parseDate(date) {
        date = date instanceof Date ? date.toISOString() : date;
        return this.timezone ? moment.tz(date, this.inputFormats, this.timezone) : moment(date, this.inputFormats);
    }
    createMoment(date) {
        const m = moment(date).clone();
        return this.timezone ? m.tz(this.timezone) : m;
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
CalendarComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: CalendarComponent, selectors: [["ngx-calendar"]], hostAttrs: ["tabindex", "1", 1, "ngx-calendar"], hostBindings: function CalendarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("blur", function CalendarComponent_blur_HostBindingHandler() { return ctx.onTouchedCallback(); });
    } }, inputs: { daysOfWeek: "daysOfWeek", inputFormats: "inputFormats", minView: "minView", defaultView: "defaultView", minDate: "minDate", disabled: "disabled", maxDate: "maxDate", timezone: "timezone" }, outputs: { change: "change" }, exportAs: ["ngxCalendar"], features: [ɵngcc0.ɵɵProvidersFeature([CALENDAR_VALUE_ACCESSOR])], decls: 5, vars: 4, consts: [[1, "ngx-calendar-wrap"], [1, "text-center", 3, "ngSwitch"], [4, "ngSwitchCase"], [1, "title-row"], ["type", "button", "title", "Previous Month", 1, "prev-month", 3, "disabled", "click"], [1, "icon-arrow-left"], [1, "title", 3, "click"], ["type", "button", "title", "Next Month", 1, "next-month", 3, "disabled", "click"], [1, "icon-arrow-right"], [1, "day-name-row"], ["class", "day-name text-center", 4, "ngFor", "ngForOf"], [1, "day-container"], ["class", "day-row", 4, "ngFor", "ngForOf"], [1, "day-name", "text-center"], [1, "day-row"], ["class", "day-cell text-center", 4, "ngFor", "ngForOf"], [1, "day-cell", "text-center"], ["class", "day", "type", "button", 3, "title", "active", "ngClass", "disabled", "click", 4, "ngIf"], ["type", "button", 1, "day", 3, "title", "ngClass", "disabled", "click"], ["type", "button", "title", "Previous Year", 1, "prev-month", 3, "disabled", "click"], ["type", "button", "title", "Next Year", 1, "next-month", 3, "disabled", "click"], [1, "months-container"], [1, "months-row"], ["class", "month", "type", "button", 3, "active", "current", "disabled", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "month", 3, "disabled", "click"], ["type", "button", "title", "Previous Two Decades", 1, "prev-month", 3, "disabled", "click"], ["type", "button", "title", "Next Two Decades", 1, "next-month", 3, "disabled", "click"], [1, "years-container"], [1, "years-row"], ["class", "year", "type", "button", 3, "active", "current", "disabled", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "year", 3, "disabled", "click"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, CalendarComponent_div_2_Template, 14, 11, "div", 2);
        ɵngcc0.ɵɵtemplate(3, CalendarComponent_div_3_Template, 13, 10, "div", 2);
        ɵngcc0.ɵɵtemplate(4, CalendarComponent_div_4_Template, 11, 5, "div", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitch", ctx.currentView);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "date");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "month");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "year");
    } }, directives: [ɵngcc1.NgSwitch, ɵngcc1.NgSwitchCase, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc1.NgClass], pipes: [ɵngcc2.DateFormatPipe, ɵngcc3.TimeZonePipe], styles: [".ngx-calendar{position:relative;font-size:.9rem;box-shadow:0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12);background:#1c2029;display:inline-block;border:1px solid #313847;width:270px;padding:.5rem;height:270px}.ngx-calendar .ngx-calendar-wrap{flex:1 1 100%}.ngx-calendar:focus{outline:none}.ngx-calendar .title-row{background:#1c2029;color:#e9e9e9;padding:.69rem 0;font-weight:600;line-height:0}.ngx-calendar .title-row .title{color:#479eff;min-width:100px;cursor:pointer}.ngx-calendar .title-row button{color:#818fa9;font-size:.6rem}.ngx-calendar .day-name-row{color:#818fa9;font-weight:600;display:flex}.ngx-calendar .day-name-row .day-name{flex:0 0 30px}.ngx-calendar .day-cell,.ngx-calendar .day-name{margin:.1rem .2rem;line-height:1.8rem;text-align:center;width:1.8rem;height:1.8rem}.ngx-calendar .day-container{margin-top:0}.ngx-calendar .day-container .day-row{display:flex}.ngx-calendar .day-container .day-row .day-cell{flex:0 0 30px}.ngx-calendar .day-container .day{color:#e9e9e9;height:100%;width:100%;max-height:30px;max-width:30px;line-height:100%;border-radius:50%;text-align:center;transition:background .2s;padding:0}.ngx-calendar .day-container .day.next-month,.ngx-calendar .day-container .day.prev-month{color:#818fa9;opacity:.2}.ngx-calendar .day-container .day.today{background:#262c38}.ngx-calendar .day-container .day.active{background:#479eff;color:#e9e9e9}.ngx-calendar .day-container .day:hover:not(.active):hover:not([disabled]){background:#479eff;color:#e9e9e9;opacity:1}.ngx-calendar .months-container,.ngx-calendar .years-container{margin:.5rem;border:1px solid #313847;border-bottom:0;color:#e9e9e9}.ngx-calendar .months-container .months-row,.ngx-calendar .months-container .years-row,.ngx-calendar .years-container .months-row,.ngx-calendar .years-container .years-row{display:grid}.ngx-calendar .months-container .month,.ngx-calendar .months-container .year,.ngx-calendar .years-container .month,.ngx-calendar .years-container .year{border-right:1px solid #313847;border-bottom:1px solid #313847;grid-auto-rows:auto;text-transform:uppercase;text-align:center;font-size:14px}.ngx-calendar .months-container .month.active,.ngx-calendar .months-container .year.active,.ngx-calendar .years-container .month.active,.ngx-calendar .years-container .year.active{background-color:#479eff}.ngx-calendar .months-container .month.current:not(.active),.ngx-calendar .months-container .year.current:not(.active),.ngx-calendar .years-container .month.current:not(.active),.ngx-calendar .years-container .year.current:not(.active){background-color:#262c38}.ngx-calendar .months-container .month:hover:not(.active):hover:not([disabled]),.ngx-calendar .months-container .year:hover:not(.active):hover:not([disabled]),.ngx-calendar .years-container .month:hover:not(.active):hover:not([disabled]),.ngx-calendar .years-container .year:hover:not(.active):hover:not([disabled]){background:#479eff;color:#e9e9e9;opacity:1}.ngx-calendar .months-container .months-row{grid-template-columns:repeat(3,1fr)}.ngx-calendar .months-container .month{padding:.75rem}.ngx-calendar .months-container .month:nth-child(3n){border-right:0}.ngx-calendar .years-container .years-row{grid-template-columns:repeat(4,1fr)}.ngx-calendar .years-container .year{padding:.475rem}.ngx-calendar .years-container .year:nth-child(4n){border-right:0}"], encapsulation: 2, changeDetection: 0 });
CalendarComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
CalendarComponent.propDecorators = {
    minDate: [{ type: Input }],
    disabled: [{ type: Input }],
    maxDate: [{ type: Input }],
    daysOfWeek: [{ type: Input }],
    timezone: [{ type: Input }],
    inputFormats: [{ type: Input }],
    minView: [{ type: Input, args: ['minView',] }],
    defaultView: [{ type: Input, args: ['defaultView',] }],
    change: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CalendarComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-calendar',
                exportAs: 'ngxCalendar',
                template: "<div class=\"ngx-calendar-wrap\">\n  <div class=\"text-center\" [ngSwitch]=\"currentView\">\n    <div *ngSwitchCase=\"'date'\">\n      <div class=\"title-row\">\n        <button type=\"button\" class=\"prev-month\" [disabled]=\"disabled\" title=\"Previous Month\" (click)=\"prevMonth()\">\n          <span class=\"icon-arrow-left\"></span>\n        </button>\n        <span class=\"title\" (click)=\"changeViews()\">\n          {{ activeDate | amTimeZone: timezone | amDateFormat: 'MMMM YYYY' }}\n        </span>\n        <button type=\"button\" class=\"next-month\" title=\"Next Month\" [disabled]=\"disabled\" (click)=\"nextMonth()\">\n          <span class=\"icon-arrow-right\"></span>\n        </button>\n      </div>\n      <div class=\"day-name-row\">\n        <div class=\"day-name text-center\" *ngFor=\"let d of daysOfWeek\">\n          {{ d }}\n        </div>\n      </div>\n      <div class=\"day-container\">\n        <div *ngFor=\"let week of weeks\" class=\"day-row\">\n          <div *ngFor=\"let day of week\" class=\"day-cell text-center\">\n            <button\n              *ngIf=\"day.num\"\n              class=\"day\"\n              type=\"button\"\n              [title]=\"day.date | amTimeZone: timezone | amDateFormat: 'LL'\"\n              [class.active]=\"isDayActive(day.date)\"\n              [ngClass]=\"day.classes\"\n              [disabled]=\"isDisabled(day.date, 'day')\"\n              (click)=\"onDayClick(day)\"\n            >\n              {{ day.num }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'month'\">\n      <div class=\"title-row\">\n        <button type=\"button\" class=\"prev-month\" [disabled]=\"disabled\" title=\"Previous Year\" (click)=\"prevYear()\">\n          <span class=\"icon-arrow-left\"></span>\n        </button>\n        <span class=\"title\" (click)=\"changeViews()\">\n          {{ activeDate | amTimeZone: timezone | amDateFormat: 'YYYY' }}\n        </span>\n        <button type=\"button\" class=\"next-month\" title=\"Next Year\" [disabled]=\"disabled\" (click)=\"nextYear()\">\n          <span class=\"icon-arrow-right\"></span>\n        </button>\n      </div>\n      <div class=\"months-container\">\n        <div class=\"months-row\">\n          <button\n            class=\"month\"\n            type=\"button\"\n            [class.active]=\"isMonthActive(month)\"\n            [class.current]=\"isCurrentMonth(month)\"\n            *ngFor=\"let month of monthsList\"\n            (click)=\"onMonthClick(month)\"\n            [disabled]=\"isDisabled(month, 'month')\"\n          >\n            {{ month }}\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'year'\">\n      <div class=\"title-row\">\n        <button\n          type=\"button\"\n          class=\"prev-month\"\n          [disabled]=\"disabled\"\n          title=\"Previous Two Decades\"\n          (click)=\"prevTwoDecades()\"\n        >\n          <span class=\"icon-arrow-left\"></span>\n        </button>\n        <span class=\"title\" (click)=\"changeViews()\"> {{ startYear }} - {{ startYear + 20 }} </span>\n        <button\n          type=\"button\"\n          class=\"next-month\"\n          title=\"Next Two Decades\"\n          [disabled]=\"disabled\"\n          (click)=\"nextTwoDecades()\"\n        >\n          <span class=\"icon-arrow-right\"></span>\n        </button>\n      </div>\n      <div class=\"years-container\">\n        <div class=\"years-row\">\n          <button\n            class=\"year\"\n            type=\"button\"\n            *ngFor=\"let dummy of ' '.repeat(20).split(''); let x = index\"\n            [class.active]=\"isYearActive(x + startYear)\"\n            [class.current]=\"isCurrentYear(x + startYear)\"\n            (click)=\"onYearClick(x + startYear)\"\n            [disabled]=\"isDisabled(x + startYear, 'year')\"\n          >\n            {{ x + startYear }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                host: {
                    class: 'ngx-calendar',
                    tabindex: '1',
                    '(blur)': 'onTouchedCallback()'
                },
                providers: [CALENDAR_VALUE_ACCESSOR],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-calendar{position:relative;font-size:.9rem;box-shadow:0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12);background:#1c2029;display:inline-block;border:1px solid #313847;width:270px;padding:.5rem;height:270px}.ngx-calendar .ngx-calendar-wrap{flex:1 1 100%}.ngx-calendar:focus{outline:none}.ngx-calendar .title-row{background:#1c2029;color:#e9e9e9;padding:.69rem 0;font-weight:600;line-height:0}.ngx-calendar .title-row .title{color:#479eff;min-width:100px;cursor:pointer}.ngx-calendar .title-row button{color:#818fa9;font-size:.6rem}.ngx-calendar .day-name-row{color:#818fa9;font-weight:600;display:flex}.ngx-calendar .day-name-row .day-name{flex:0 0 30px}.ngx-calendar .day-cell,.ngx-calendar .day-name{margin:.1rem .2rem;line-height:1.8rem;text-align:center;width:1.8rem;height:1.8rem}.ngx-calendar .day-container{margin-top:0}.ngx-calendar .day-container .day-row{display:flex}.ngx-calendar .day-container .day-row .day-cell{flex:0 0 30px}.ngx-calendar .day-container .day{color:#e9e9e9;height:100%;width:100%;max-height:30px;max-width:30px;line-height:100%;border-radius:50%;text-align:center;transition:background .2s;padding:0}.ngx-calendar .day-container .day.next-month,.ngx-calendar .day-container .day.prev-month{color:#818fa9;opacity:.2}.ngx-calendar .day-container .day.today{background:#262c38}.ngx-calendar .day-container .day.active{background:#479eff;color:#e9e9e9}.ngx-calendar .day-container .day:hover:not(.active):hover:not([disabled]){background:#479eff;color:#e9e9e9;opacity:1}.ngx-calendar .months-container,.ngx-calendar .years-container{margin:.5rem;border:1px solid #313847;border-bottom:0;color:#e9e9e9}.ngx-calendar .months-container .months-row,.ngx-calendar .months-container .years-row,.ngx-calendar .years-container .months-row,.ngx-calendar .years-container .years-row{display:grid}.ngx-calendar .months-container .month,.ngx-calendar .months-container .year,.ngx-calendar .years-container .month,.ngx-calendar .years-container .year{border-right:1px solid #313847;border-bottom:1px solid #313847;grid-auto-rows:auto;text-transform:uppercase;text-align:center;font-size:14px}.ngx-calendar .months-container .month.active,.ngx-calendar .months-container .year.active,.ngx-calendar .years-container .month.active,.ngx-calendar .years-container .year.active{background-color:#479eff}.ngx-calendar .months-container .month.current:not(.active),.ngx-calendar .months-container .year.current:not(.active),.ngx-calendar .years-container .month.current:not(.active),.ngx-calendar .years-container .year.current:not(.active){background-color:#262c38}.ngx-calendar .months-container .month:hover:not(.active):hover:not([disabled]),.ngx-calendar .months-container .year:hover:not(.active):hover:not([disabled]),.ngx-calendar .years-container .month:hover:not(.active):hover:not([disabled]),.ngx-calendar .years-container .year:hover:not(.active):hover:not([disabled]){background:#479eff;color:#e9e9e9;opacity:1}.ngx-calendar .months-container .months-row{grid-template-columns:repeat(3,1fr)}.ngx-calendar .months-container .month{padding:.75rem}.ngx-calendar .months-container .month:nth-child(3n){border-right:0}.ngx-calendar .years-container .years-row{grid-template-columns:repeat(4,1fr)}.ngx-calendar .years-container .year{padding:.475rem}.ngx-calendar .years-container .year:nth-child(4n){border-right:0}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { daysOfWeek: [{
            type: Input
        }], inputFormats: [{
            type: Input
        }], change: [{
            type: Output
        }], minView: [{
            type: Input,
            args: ['minView']
        }], defaultView: [{
            type: Input,
            args: ['defaultView']
        }], minDate: [{
            type: Input
        }], disabled: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], timezone: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFFVixpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUVsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFFckMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBRzlGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELE1BQU0sdUJBQXVCLEdBQUc7QUFDaEMsSUFBRSxPQUFPLEVBQUUsaUJBQWlCO0FBQzVCLElBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztBQUNsRCxJQUFFLEtBQUssRUFBRSxJQUFJO0FBQ2IsQ0FBQyxDQUFDO0FBZ0JGLE1BQU0sT0FBTyxpQkFBaUI7QUFBRyxJQTJEL0IsWUFBNkIsR0FBc0I7QUFBSSxRQUExQixR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O0FBQ0g7NkNBdFJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsY0FBYyxrQkFDeEIsUUFBUSxFQUFFLGFBQWE7T0FDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MjZCQUF3QyxrQkFFeEMsSUFBSSxFQUFFLHNCQUNKLEtBQUssRUFBRSxjQUFjLHNCQUNyQixRQUFRLEVBQUUsR0FBRyxzQkFDYixRQUFRLEVBQUUscUJBQXFCLGtCQUNoQyxrQkFDRCxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxrQkFDcEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksa0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLDJ2RUFFNUM7QUFBQztBQUEyQyxZQWhDL0MsaUJBQWlCO0FBQ2xCO0FBQUc7QUFFSCxzQkE4QkUsS0FBSztBQUFLLHVCQUNWLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLHVCQUNWLEtBQUs7QUFBSywyQkFDVixLQUFLO0FBQUssc0JBRVYsS0FBSyxTQUFDLFNBQVM7QUFDYiwwQkFRRixLQUFLLFNBQUMsYUFBYTtBQUNqQixxQkFRRixNQUFNO0FBQUk7Ozs7OzsrWkEzQlo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBMkJjO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQtdGltZXpvbmUnO1xuXG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJy4vdXRpbHMvZ2V0LW1vbnRoL2dldC1tb250aC51dGlsJztcbmltcG9ydCB7IGdldERlY2FkZVN0YXJ0WWVhciB9IGZyb20gJy4vdXRpbHMvZ2V0LWRlY2FkZS1zdGFydC15ZWFyL2dldC1kZWNhZGUtc3RhcnQteWVhci51dGlsJztcbmltcG9ydCB7IENhbGVuZGFyRGF5IH0gZnJvbSAnLi9jYWxlbmRhci1kYXkuaW50ZXJmYWNlJztcbmltcG9ydCB7IENhbGVuZGFyTW9udGggfSBmcm9tICcuL2NhbGVuZGFyLW1vbnRoLnR5cGUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3IH0gZnJvbSAnLi9jYWxlbmRhci12aWV3LmVudW0nO1xuXG5jb25zdCBDQUxFTkRBUl9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENhbGVuZGFyQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1jYWxlbmRhcicsXG4gIGV4cG9ydEFzOiAnbmd4Q2FsZW5kYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICduZ3gtY2FsZW5kYXInLFxuICAgIHRhYmluZGV4OiAnMScsXG4gICAgJyhibHVyKSc6ICdvblRvdWNoZWRDYWxsYmFjaygpJ1xuICB9LFxuICBwcm92aWRlcnM6IFtDQUxFTkRBUl9WQUxVRV9BQ0NFU1NPUl0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGUgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlIHwgc3RyaW5nO1xuICBASW5wdXQoKSBkYXlzT2ZXZWVrOiBzdHJpbmdbXSA9IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddO1xuICBASW5wdXQoKSB0aW1lem9uZTogc3RyaW5nO1xuICBASW5wdXQoKSBpbnB1dEZvcm1hdHM6IEFycmF5PHN0cmluZyB8IG1vbWVudC5Nb21lbnRCdWlsdGluRm9ybWF0PiA9IFsnTCcsICdMVCcsICdMIExUJywgbW9tZW50LklTT184NjAxXTtcblxuICBASW5wdXQoJ21pblZpZXcnKVxuICBnZXQgbWluVmlldygpIHtcbiAgICByZXR1cm4gdGhpcy5fbWluVmlldyA/IHRoaXMuX21pblZpZXcgOiBDYWxlbmRhclZpZXcuRGF0ZTtcbiAgfVxuICBzZXQgbWluVmlldyh2YWw6IENhbGVuZGFyVmlldykge1xuICAgIHRoaXMuX21pblZpZXcgPSB2YWw7XG4gICAgdGhpcy52YWxpZGF0ZVZpZXcoKTtcbiAgfVxuXG4gIEBJbnB1dCgnZGVmYXVsdFZpZXcnKVxuICBnZXQgZGVmYXVsdFZpZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRWaWV3ID8gdGhpcy5fZGVmYXVsdFZpZXcgOiB0aGlzLm1pblZpZXc7XG4gIH1cbiAgc2V0IGRlZmF1bHRWaWV3KHZhbDogQ2FsZW5kYXJWaWV3KSB7XG4gICAgdGhpcy5fZGVmYXVsdFZpZXcgPSB2YWw7XG4gICAgdGhpcy52YWxpZGF0ZVZpZXcoKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodmFsOiBEYXRlKSB7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuY3JlYXRlTW9tZW50KHZhbCk7XG5cbiAgICBpZiAoZGF0ZS5pc1ZhbGlkKCkpIHtcbiAgICAgIGlmICghZGF0ZS5pc1NhbWUodGhpcy5fdmFsdWUsICdkYXknKSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuX3ZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGN1cnJlbnQoKTogbW9tZW50Lk1vbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnQ7XG4gIH1cblxuICBhY3RpdmVEYXRlOiBtb21lbnQuTW9tZW50O1xuICB3ZWVrczogQ2FsZW5kYXJNb250aDtcbiAgY3VycmVudFZpZXc6IENhbGVuZGFyVmlldztcbiAgbW9udGhzTGlzdCA9IG1vbWVudC5tb250aHNTaG9ydCgpO1xuICBzdGFydFllYXI6IG51bWJlcjtcblxuICBwcml2YXRlIF92YWx1ZTogRGF0ZTtcbiAgcHJpdmF0ZSBfY3VycmVudDogbW9tZW50Lk1vbWVudDtcbiAgcHJpdmF0ZSBfbWluVmlldzogQ2FsZW5kYXJWaWV3O1xuICBwcml2YXRlIF9kZWZhdWx0VmlldzogQ2FsZW5kYXJWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLmNyZWF0ZU1vbWVudCh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLndlZWtzID0gZ2V0TW9udGgodGhpcy5hY3RpdmVEYXRlKTtcbiAgICB0aGlzLm1vbnRoc0xpc3QgPSBtb21lbnQubW9udGhzU2hvcnQoKTtcbiAgICB0aGlzLl9jdXJyZW50ID0gdGhpcy5hY3RpdmVEYXRlO1xuICAgIHRoaXMuc3RhcnRZZWFyID0gZ2V0RGVjYWRlU3RhcnRZZWFyKHRoaXMuX2N1cnJlbnQueWVhcigpKTtcbiAgICB0aGlzLnZhbGlkYXRlVmlldygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY2hhbmdlVmlld3MoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFZpZXcgPT09IENhbGVuZGFyVmlldy5EYXRlKSB7XG4gICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gQ2FsZW5kYXJWaWV3Lk1vbnRoO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50VmlldyA9PT0gQ2FsZW5kYXJWaWV3Lk1vbnRoKSB7XG4gICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gQ2FsZW5kYXJWaWV3LlllYXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudFZpZXcgPSB0aGlzLm1pblZpZXc7XG4gICAgfVxuXG4gICAgdGhpcy53ZWVrcyA9IGdldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSk7XG4gIH1cblxuICB2YWxpZGF0ZVZpZXcoKSB7XG4gICAgY29uc3Qgdmlld3NMaXN0ID0gW0NhbGVuZGFyVmlldy5EYXRlLCBDYWxlbmRhclZpZXcuTW9udGgsIENhbGVuZGFyVmlldy5ZZWFyXTtcblxuICAgIC8vIGRhdGUgdGltZSBwaWNrZXIgcHJlY2lzaW9uIHZhbGlkYXRpb25cbiAgICBpZiAoIXZpZXdzTGlzdC5pbmNsdWRlcyh0aGlzLm1pblZpZXcpKSB7XG4gICAgICB0aGlzLm1pblZpZXcgPSBDYWxlbmRhclZpZXcuRGF0ZTtcbiAgICB9XG5cbiAgICAvLyBkZWZhdWx0VmlldyBjYW5ub3QgYmUgYmVsb3cgbWluVmlld1xuICAgIGlmICh2aWV3c0xpc3QuaW5kZXhPZih0aGlzLm1pblZpZXcpID4gdmlld3NMaXN0LmluZGV4T2YodGhpcy5kZWZhdWx0VmlldykpIHtcbiAgICAgIHRoaXMuZGVmYXVsdFZpZXcgPSB0aGlzLm1pblZpZXc7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50VmlldyA9IHRoaXMuZGVmYXVsdFZpZXc7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGBkYXRlYCBtYXRjaGVzIHNlbGVjdGVkIHZhbHVlXG4gICAqL1xuICBpc0RheUFjdGl2ZShkYXRlOiBtb21lbnQuTW9tZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGRhdGUuaXNTYW1lKHRoaXMudmFsdWUsICdkYXknKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYG1vbnRoYCBtYXRjaGVzIHNlbGVjdGVkIHZhbHVlLCBpbiB0aGUgdmlld2VkIHllYXJcbiAgICovXG4gIGlzTW9udGhBY3RpdmUobW9udGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmNyZWF0ZU1vbWVudCh0aGlzLnZhbHVlKS5tb250aChtb250aCk7XG4gICAgcmV0dXJuIGRhdGUuaXNTYW1lKHRoaXMudmFsdWUsICdtb250aCcpICYmIGRhdGUuaXNTYW1lKHRoaXMuYWN0aXZlRGF0ZSwgJ3llYXInKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYG1vbnRoYCBhbmQgeWVhciBtYXRjaGVzIGN1cnJlbnRcbiAgICovXG4gIGlzQ3VycmVudE1vbnRoKG1vbnRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBkYXRlID0gdGhpcy5hY3RpdmVEYXRlLmNsb25lKCkubW9udGgobW9udGgpO1xuICAgIHJldHVybiBkYXRlLmlzU2FtZSh0aGlzLl9jdXJyZW50LCAnbW9udGgnKSAmJiBkYXRlLmlzU2FtZSh0aGlzLl9jdXJyZW50LCAneWVhcicpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBgeWVhcmAgbWF0Y2hlcyBzZWxlY3RlZCB5ZWFyXG4gICAqL1xuICBpc1llYXJBY3RpdmUoeWVhcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuY3JlYXRlTW9tZW50KHRoaXMudmFsdWUpLnllYXIoeWVhcik7XG4gICAgcmV0dXJuIGRhdGUuaXNTYW1lKHRoaXMudmFsdWUsICd5ZWFyJyk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHllYXIgbWF0Y2hlcyBjdXJyZW50IHllYXJcbiAgICovXG4gIGlzQ3VycmVudFllYXIoeWVhcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuY3JlYXRlTW9tZW50KHRoaXMudmFsdWUpLnllYXIoeWVhcik7XG4gICAgcmV0dXJuIGRhdGUuaXNTYW1lKHRoaXMuX2N1cnJlbnQsICd5ZWFyJyk7XG4gIH1cblxuICBpc0Rpc2FibGVkKHZhbHVlOiBhbnksIHR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgZGF0ZTogbW9tZW50Lk1vbWVudDtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgZGF0ZSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgZGF0ZSA9IHRoaXMuYWN0aXZlRGF0ZS5jbG9uZSgpLm1vbnRoKHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgZGF0ZSA9IHRoaXMuYWN0aXZlRGF0ZS5jbG9uZSgpLnllYXIodmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBpc0JlZm9yZU1pbiA9IHRoaXMubWluRGF0ZSAmJiBkYXRlLmlzQmVmb3JlKHRoaXMucGFyc2VEYXRlKHRoaXMubWluRGF0ZSksIHR5cGUpO1xuICAgIGNvbnN0IGlzQWZ0ZXJNYXggPSB0aGlzLm1heERhdGUgJiYgZGF0ZS5pc0FmdGVyKHRoaXMucGFyc2VEYXRlKHRoaXMubWF4RGF0ZSksIHR5cGUpO1xuXG4gICAgcmV0dXJuIGlzQmVmb3JlTWluIHx8IGlzQWZ0ZXJNYXg7XG4gIH1cblxuICBvbkRheUNsaWNrKGRheTogQ2FsZW5kYXJEYXkpIHtcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSBkYXkuZGF0ZS5jbG9uZSgpO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmFjdGl2ZURhdGUudG9EYXRlKCk7XG5cbiAgICBpZiAoZGF5LnByZXZNb250aCB8fCBkYXkubmV4dE1vbnRoKSB7XG4gICAgICB0aGlzLndlZWtzID0gZ2V0TW9udGgodGhpcy5hY3RpdmVEYXRlKTtcbiAgICB9XG4gIH1cblxuICBvbk1vbnRoQ2xpY2sobW9udGg6IHN0cmluZykge1xuICAgIHRoaXMuYWN0aXZlRGF0ZS5tb250aChtb250aCk7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuYWN0aXZlRGF0ZS50b0RhdGUoKTtcblxuICAgIGlmICh0aGlzLm1pblZpZXcgIT09IENhbGVuZGFyVmlldy5Nb250aCkge1xuICAgICAgdGhpcy5jdXJyZW50VmlldyA9IENhbGVuZGFyVmlldy5EYXRlO1xuICAgICAgdGhpcy53ZWVrcyA9IGdldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgb25ZZWFyQ2xpY2soeWVhcjogbnVtYmVyKSB7XG4gICAgdGhpcy5hY3RpdmVEYXRlLnllYXIoeWVhcik7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuYWN0aXZlRGF0ZS50b0RhdGUoKTtcblxuICAgIGlmICh0aGlzLm1pblZpZXcgIT09IENhbGVuZGFyVmlldy5ZZWFyKSB7XG4gICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gQ2FsZW5kYXJWaWV3Lk1vbnRoO1xuICAgICAgdGhpcy53ZWVrcyA9IGdldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJldk1vbnRoKCkge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmFjdGl2ZURhdGUuY2xvbmUoKTtcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSBkYXRlLnN1YnRyYWN0KDEsICdtb250aCcpO1xuICAgIHRoaXMud2Vla3MgPSBnZXRNb250aCh0aGlzLmFjdGl2ZURhdGUpO1xuICB9XG5cbiAgbmV4dE1vbnRoKCkge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmFjdGl2ZURhdGUuY2xvbmUoKTtcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSBkYXRlLmFkZCgxLCAnbW9udGgnKTtcbiAgICB0aGlzLndlZWtzID0gZ2V0TW9udGgodGhpcy5hY3RpdmVEYXRlKTtcbiAgfVxuXG4gIHByZXZZZWFyKCkge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmFjdGl2ZURhdGUuY2xvbmUoKTtcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSBkYXRlLnN1YnRyYWN0KDEsICd5ZWFyJyk7XG4gIH1cblxuICBuZXh0WWVhcigpIHtcbiAgICBjb25zdCBkYXRlID0gdGhpcy5hY3RpdmVEYXRlLmNsb25lKCk7XG4gICAgdGhpcy5hY3RpdmVEYXRlID0gZGF0ZS5hZGQoMSwgJ3llYXInKTtcbiAgfVxuXG4gIHByZXZUd29EZWNhZGVzKCkge1xuICAgIHRoaXMuc3RhcnRZZWFyID0gdGhpcy5zdGFydFllYXIgLSAyMDtcbiAgfVxuXG4gIG5leHRUd29EZWNhZGVzKCkge1xuICAgIHRoaXMuc3RhcnRZZWFyID0gdGhpcy5zdGFydFllYXIgKyAyMDtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsOiBhbnkpIHtcbiAgICBjb25zdCBhY3RpdmVEYXRlID0gdGhpcy5jcmVhdGVNb21lbnQodmFsKTtcblxuICAgIGlmIChhY3RpdmVEYXRlLmlzVmFsaWQoKSAmJiAhYWN0aXZlRGF0ZS5pc1NhbWUodGhpcy52YWx1ZSwgJ2RheScpKSB7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBhY3RpdmVEYXRlO1xuICAgICAgdGhpcy53ZWVrcyA9IGdldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICAgIHRoaXMuc3RhcnRZZWFyID0gZ2V0RGVjYWRlU3RhcnRZZWFyKHRoaXMuYWN0aXZlRGF0ZS55ZWFyKCkpO1xuICAgIH1cblxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7XG4gICAgLy8gcGxhY2Vob2xkZXJcbiAgfTtcblxuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7XG4gICAgLy8gcGxhY2Vob2xkZXJcbiAgfTtcblxuICBwcml2YXRlIHBhcnNlRGF0ZShkYXRlOiBzdHJpbmcgfCBEYXRlKTogbW9tZW50Lk1vbWVudCB7XG4gICAgZGF0ZSA9IGRhdGUgaW5zdGFuY2VvZiBEYXRlID8gZGF0ZS50b0lTT1N0cmluZygpIDogZGF0ZTtcbiAgICByZXR1cm4gdGhpcy50aW1lem9uZSA/IG1vbWVudC50eihkYXRlLCB0aGlzLmlucHV0Rm9ybWF0cywgdGhpcy50aW1lem9uZSkgOiBtb21lbnQoZGF0ZSwgdGhpcy5pbnB1dEZvcm1hdHMpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVNb21lbnQoZGF0ZTogc3RyaW5nIHwgRGF0ZSB8IG1vbWVudC5Nb21lbnQpOiBtb21lbnQuTW9tZW50IHtcbiAgICBjb25zdCBtID0gbW9tZW50KGRhdGUpLmNsb25lKCk7XG4gICAgcmV0dXJuIHRoaXMudGltZXpvbmUgPyBtLnR6KHRoaXMudGltZXpvbmUpIDogbTtcbiAgfVxufVxuIl19