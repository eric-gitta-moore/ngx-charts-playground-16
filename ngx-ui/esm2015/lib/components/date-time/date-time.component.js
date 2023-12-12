import { Component, Input, Output, EventEmitter, ViewEncapsulation, forwardRef, ViewChild, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import moment from 'moment-timezone';
import { DialogService } from '../dialog/dialog.service';
import { DateTimeType } from './date-time-type.enum';
import { InputComponent } from '../input/input.component';
import { Size } from '../../mixins/size/size.enum';
import { Appearance } from '../../mixins/appearance/appearance.enum';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../dialog/dialog.service';
import * as ɵngcc2 from '../input/input.component';
import * as ɵngcc3 from '@angular/forms';
import * as ɵngcc4 from '../input/input-hint.directive';
import * as ɵngcc5 from '@angular/common';
import * as ɵngcc6 from '../calendar/calendar.component';
import * as ɵngcc7 from 'ngx-moment';
import * as ɵngcc8 from '../../pipes/time-zone/time-zone.pipe';

const _c0 = ["dialogTpl"];
const _c1 = ["input"];
function DateTimeComponent_ng_template_0_span_2_small_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "small");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "amDateFormat");
    ɵngcc0.ɵɵpipe(3, "amTimeZone");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind2(2, 1, ɵngcc0.ɵɵpipeBind2(3, 4, ctx_r10.dialogModel, ctx_r10.timezone), "h:mm a"), " ");
} }
function DateTimeComponent_ng_template_0_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "amDateFormat");
    ɵngcc0.ɵɵpipe(3, "amTimeZone");
    ɵngcc0.ɵɵtemplate(4, DateTimeComponent_ng_template_0_span_2_small_4_Template, 4, 7, "small", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind2(2, 2, ɵngcc0.ɵɵpipeBind2(3, 5, ctx_r5.dialogModel, ctx_r5.timezone), "ddd, MMM D YYYY"), " ");
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.inputType === "datetime");
} }
function DateTimeComponent_ng_template_0_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "amDateFormat");
    ɵngcc0.ɵɵpipe(3, "amTimeZone");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind2(2, 1, ɵngcc0.ɵɵpipeBind2(3, 4, ctx_r6.dialogModel, ctx_r6.timezone), "h:mm a"), " ");
} }
function DateTimeComponent_ng_template_0_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1, "No value");
    ɵngcc0.ɵɵelementEnd();
} }
function DateTimeComponent_ng_template_0_ngx_calendar_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-calendar", 16);
    ɵngcc0.ɵɵlistener("change", function DateTimeComponent_ng_template_0_ngx_calendar_5_Template_ngx_calendar_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(2); return ctx_r11.setDialogDate($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("id", ctx_r8.id + "-cal")("minDate", ctx_r8.minDate)("maxDate", ctx_r8.maxDate)("ngModel", ctx_r8.dialogModel)("timezone", ctx_r8.timezone)("minView", ctx_r8.precision);
} }
function DateTimeComponent_ng_template_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 17);
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵelementStart(2, "ngx-input", 18);
    ɵngcc0.ɵɵlistener("change", function DateTimeComponent_ng_template_0_div_6_Template_ngx_input_change_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r14); const ctx_r13 = ɵngcc0.ɵɵnextContext(2); return ctx_r13.hourChanged($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div");
    ɵngcc0.ɵɵelementStart(4, "ngx-input", 19);
    ɵngcc0.ɵɵlistener("change", function DateTimeComponent_ng_template_0_div_6_Template_ngx_input_change_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r14); const ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.minuteChanged($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "div");
    ɵngcc0.ɵɵelementStart(6, "button", 20);
    ɵngcc0.ɵɵlistener("click", function DateTimeComponent_ng_template_0_div_6_Template_button_click_6_listener() { ɵngcc0.ɵɵrestoreView(_r14); const ctx_r16 = ɵngcc0.ɵɵnextContext(2); return ctx_r16.onAmPmChange("AM"); });
    ɵngcc0.ɵɵtext(7, " AM ");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(8, "button", 20);
    ɵngcc0.ɵɵlistener("click", function DateTimeComponent_ng_template_0_div_6_Template_button_click_8_listener() { ɵngcc0.ɵɵrestoreView(_r14); const ctx_r17 = ɵngcc0.ɵɵnextContext(2); return ctx_r17.onAmPmChange("PM"); });
    ɵngcc0.ɵɵtext(9, " PM ");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("id", ctx_r9.id + "-hour")("ngModel", ctx_r9.hour)("disabled", ctx_r9.isTimeDisabled("hour"));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("id", ctx_r9.id + "-minute")("ngModel", ctx_r9.minute)("disabled", ctx_r9.isTimeDisabled("minute"));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassProp("selected", ctx_r9.amPmVal === "AM");
    ɵngcc0.ɵɵproperty("disabled", ctx_r9.isTimeDisabled("hour"));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassProp("selected", ctx_r9.amPmVal === "PM");
    ɵngcc0.ɵɵproperty("disabled", ctx_r9.isTimeDisabled("hour"));
} }
function DateTimeComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵelementStart(1, "h1");
    ɵngcc0.ɵɵtemplate(2, DateTimeComponent_ng_template_0_span_2_Template, 5, 8, "span", 4);
    ɵngcc0.ɵɵtemplate(3, DateTimeComponent_ng_template_0_span_3_Template, 4, 7, "span", 4);
    ɵngcc0.ɵɵtemplate(4, DateTimeComponent_ng_template_0_span_4_Template, 2, 0, "span", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(5, DateTimeComponent_ng_template_0_ngx_calendar_5_Template, 1, 6, "ngx-calendar", 8);
    ɵngcc0.ɵɵtemplate(6, DateTimeComponent_ng_template_0_div_6_Template, 10, 12, "div", 9);
    ɵngcc0.ɵɵelementStart(7, "nav", 10);
    ɵngcc0.ɵɵelementStart(8, "div", 11);
    ɵngcc0.ɵɵelementStart(9, "button", 12);
    ɵngcc0.ɵɵlistener("click", function DateTimeComponent_ng_template_0_Template_button_click_9_listener() { ɵngcc0.ɵɵrestoreView(_r19); const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.selectCurrent(); });
    ɵngcc0.ɵɵtext(10, " Current ");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(11, "div", 13);
    ɵngcc0.ɵɵelementStart(12, "button", 14);
    ɵngcc0.ɵɵlistener("click", function DateTimeComponent_ng_template_0_Template_button_click_12_listener() { ɵngcc0.ɵɵrestoreView(_r19); const ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.clear(); });
    ɵngcc0.ɵɵtext(13, "Clear");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(14, "button", 15);
    ɵngcc0.ɵɵlistener("click", function DateTimeComponent_ng_template_0_Template_button_click_14_listener() { ɵngcc0.ɵɵrestoreView(_r19); const ctx_r21 = ɵngcc0.ɵɵnextContext(); return ctx_r21.apply(); });
    ɵngcc0.ɵɵtext(15, "Apply");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.dialogModel && (ctx_r1.inputType === "datetime" || ctx_r1.inputType === "date"));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.dialogModel && ctx_r1.inputType === "time");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r1.dialogModel);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.inputType === "date" || ctx_r1.inputType === "datetime");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.inputType === "time" || ctx_r1.inputType === "datetime");
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("hidden", ctx_r1.isCurrent());
} }
function DateTimeComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.hint);
} }
function DateTimeComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 21);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.errorMsg);
} }
const _c2 = function (a0, a1, a2) { return { "icon-calendar": a0, "icon-calendar-clock": a1, "icon-clock": a2 }; };
let nextId = 0;
const MIN_WIDTH = 60;
const DATE_TIME_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateTimeComponent),
    multi: true
};
export class DateTimeComponent {
    constructor(dialogService, cdr) {
        this.dialogService = dialogService;
        this.cdr = cdr;
        this.id = `datetime-${++nextId}`;
        this.placeholder = '';
        this.size = Size.Small;
        this.appearance = Appearance.Legacy;
        this.withMargin = true;
        this.inputFormats = ['L', 'LT', 'L LT', moment.ISO_8601];
        this.requiredIndicator = '*';
        /**
         * this output will emit only when the input value is valid or cleared.
         * @see inputChange for always emitting the value
         */
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.dateTimeSelected = new EventEmitter();
        /**
         * this output will emit anytime the value changes regardless of validity.
         * @see change when only emitting
         */
        this.inputChange = new EventEmitter();
        this.modes = ['millisecond', 'second', 'minute', 'hour', 'date', 'month', 'year'];
        this._displayValue = '';
        this._disabled = false;
        this._autofocus = false;
        this._autosize = false;
        this._minWidth = MIN_WIDTH;
        this._required = false;
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
    get tabindex() {
        return this._tabindex;
    }
    set tabindex(tabindex) {
        this._tabindex = coerceNumberProperty(tabindex);
    }
    get autofocus() {
        return this._autofocus;
    }
    set autofocus(autofocus) {
        this._autofocus = coerceBooleanProperty(autofocus);
    }
    get inputType() {
        if (!this._inputType) {
            return DateTimeType.date;
        }
        return this._inputType;
    }
    set inputType(val) {
        this._inputType = val;
        this.displayValue = this.getDisplayValue();
    }
    get format() {
        if (!this._format) {
            if (this.inputType === DateTimeType.date) {
                return 'L';
            }
            else if (this.inputType === DateTimeType.datetime) {
                return 'L LT';
            }
            else {
                return 'LT';
            }
        }
        return this._format;
    }
    set format(val) {
        this._format = val;
        this.displayValue = this.getDisplayValue();
    }
    get required() {
        return this._required;
    }
    set required(required) {
        this._required = coerceBooleanProperty(required);
    }
    get value() {
        return this._value;
    }
    set value(val) {
        let date;
        let isSame;
        if (val) {
            date = this.parseDate(val);
            let sameDiff;
            if (this.precision) {
                sameDiff = this.precision;
            }
            else {
                sameDiff = this.inputType === DateTimeType.date ? 'day' : 'second';
            }
            isSame = this._value && date.isSame(this._value, sameDiff);
        }
        else {
            // if we have a val and had no val before, ensure
            // we set the property correctly even if its same
            isSame = val === this._value;
        }
        const isValid = this.validate(date);
        this._value = date && date.isValid() ? date.toDate() : val;
        // notify of changes only when the component is cleared
        // or when the set value is valid
        if ((!val || isValid) && !isSame) {
            this.onChangeCallback(val);
            this.change.emit(val);
        }
        this.inputChange.emit(val);
    }
    get displayValue() {
        return this._displayValue;
    }
    set displayValue(value) {
        this._displayValue = value;
        this.cdr.markForCheck();
    }
    get autosize() {
        return this._autosize;
    }
    set autosize(v) {
        this._autosize = coerceBooleanProperty(v);
    }
    get minDate() {
        return this._minDate;
    }
    set minDate(val) {
        this._minDate = val;
        this.validate(this.parseDate(this._value));
    }
    get maxDate() {
        return this._maxDate;
    }
    set maxDate(val) {
        this._maxDate = val;
        this.validate(this.parseDate(this._value));
    }
    ngOnDestroy() {
        this.close();
    }
    writeValue(val) {
        this.value = val;
        this.displayValue = this.getDisplayValue();
    }
    onBlur(event) {
        this.onTouchedCallback();
        const value = this.parseDate(this.value);
        if (this.validate(value)) {
            const displayValue = this.getDisplayValue();
            if (this.input.value !== displayValue) {
                this.input.value = displayValue;
            }
        }
        this.blur.emit(event);
    }
    open() {
        const value = moment(this._value);
        const isValid = value.isValid();
        this.setDialogDate(isValid ? value : new Date());
        this.dialog = this.dialogService.create({
            cssClass: 'ngx-date-time-dialog',
            template: this.calendarTpl,
            closeButton: false
        });
    }
    apply() {
        this.value = this.dialogModel.toDate();
        this.displayValue = this.getDisplayValue();
        this.dateTimeSelected.emit(this.value);
        this.close();
    }
    setDialogDate(date) {
        this.dialogModel = this.createMoment(date);
        this.hour = +this.dialogModel.format('hh');
        this.minute = this.dialogModel.format('mm');
        this.amPmVal = this.dialogModel.format('A');
    }
    minuteChanged(newVal) {
        this.dialogModel = this.dialogModel.clone().minute(newVal);
        this.minute = this.dialogModel.format('mm');
    }
    hourChanged(newVal) {
        newVal = +newVal % 12;
        if (this.amPmVal === 'PM') {
            newVal = 12 + newVal;
        }
        this.dialogModel = this.dialogModel.clone().hour(newVal);
        this.hour = +this.dialogModel.format('hh');
    }
    selectCurrent() {
        this.setDialogDate(new Date());
    }
    isCurrent() {
        const now = this.createMoment(new Date());
        if (this.inputType === 'time') {
            return now.hour() === this.dialogModel.hour() && now.minute() === this.dialogModel.minute();
        }
        return now.isSame(this.dialogModel, 'minute');
    }
    clear() {
        this.value = undefined;
        this.displayValue = this.getDisplayValue();
        this.dateTimeSelected.emit(this.value);
        this.close();
    }
    onAmPmChange(newVal) {
        const clone = this.dialogModel.clone();
        if (newVal === 'AM' && this.amPmVal === 'PM') {
            this.dialogModel = clone.subtract(12, 'h');
        }
        else if (newVal === 'PM' && this.amPmVal === 'AM') {
            this.dialogModel = clone.add(12, 'h');
        }
        this.amPmVal = this.dialogModel.format('A');
    }
    getDayDisabled(date) {
        if (!date)
            return false;
        const isBeforeMin = this.minDate && date.isBefore(this.parseDate(this.minDate));
        const isAfterMax = this.maxDate && date.isAfter(this.parseDate(this.maxDate));
        return isBeforeMin || isAfterMax;
    }
    isTimeDisabled(mode) {
        return this.modes.indexOf(`${this.precision}`) > this.modes.indexOf(`${mode}`);
    }
    inputChanged(val) {
        const date = this.parseDate(val);
        this.value = date.isValid() ? date.toDate() : val;
        this.displayValue = val;
    }
    close() {
        if (!this.dialog)
            return;
        // tear down the dialog instance
        this.dialogService.destroy(this.dialog);
        const date = this.parseDate(this.value);
        this.validate(date);
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    roundTo(val, key) {
        /* istanbul ignore if */
        if (!key || !val) {
            return val;
        }
        val = val.clone();
        const idx = this.modes.indexOf(key);
        if (idx > 0) {
            this.modes.forEach((mode, index) => {
                if (index < idx) {
                    val = val[mode](mode === 'date' ? 1 : 0);
                }
            });
        }
        return val;
    }
    validate(date) {
        // check if date input is empty
        const dateInput = date === null || date === void 0 ? void 0 : date.creationData().input;
        const isEmpty = dateInput === '' || dateInput === null || dateInput === undefined; // 0 is a valid date input
        // date can be either valid, or an empty value if not required
        const isValid = (date === null || date === void 0 ? void 0 : date.isValid()) || (!this.required && isEmpty);
        const isInRange = !this.getDayDisabled(date);
        let errorMsg = '';
        if (this.required && isEmpty) {
            /* no datetime component specific error message */
        }
        else if (!isValid)
            errorMsg = 'Invalid Date';
        else if (!isInRange)
            errorMsg = 'Date out of range';
        this.errorMsg = errorMsg;
        return isValid && isInRange;
    }
    getDisplayValue() {
        // note same as {{ value | amTimeZone: timezone | amDateFormat: format }}
        if (!this.value) {
            return '';
        }
        const m = this.createMoment(this.value);
        return m.isValid() ? m.format(this.format) : '' + String(this.value);
    }
    parseDate(date) {
        if (date instanceof Date) {
            /* istanbul ignore next */
            date = isNaN(date.getTime()) ? date.toString() : date.toISOString();
        }
        const inputFormats = [...this.inputFormats];
        if (this.format && !inputFormats.includes(this.format)) {
            inputFormats.unshift(this.format);
        }
        let m = this.timezone ? moment.tz(date, inputFormats, this.timezone) : moment(date, inputFormats);
        m = this.precision ? this.roundTo(m, this.precision) : m;
        return m;
    }
    createMoment(date) {
        let m = moment(date).clone();
        m = this.timezone ? m.tz(this.timezone) : m;
        m = this.precision ? this.roundTo(m, this.precision) : m;
        return m;
    }
}
DateTimeComponent.ɵfac = function DateTimeComponent_Factory(t) { return new (t || DateTimeComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DialogService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
DateTimeComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: DateTimeComponent, selectors: [["ngx-date-time"]], viewQuery: function DateTimeComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 7);
        ɵngcc0.ɵɵviewQuery(_c1, 7);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.calendarTpl = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.input = _t.first);
    } }, hostAttrs: [1, "ngx-date-time"], hostVars: 16, hostBindings: function DateTimeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("legacy", ctx.appearance === "legacy")("fill", ctx.appearance === "fill")("sm", ctx.size === "sm")("md", ctx.size === "md")("lg", ctx.size === "lg")("autosize", ctx.autosize)("marginless", !ctx.withMargin)("no-label", !ctx.label);
    } }, inputs: { id: "id", placeholder: "placeholder", size: "size", appearance: "appearance", withMargin: "withMargin", inputFormats: "inputFormats", requiredIndicator: "requiredIndicator", disabled: "disabled", minWidth: "minWidth", tabindex: "tabindex", autofocus: "autofocus", inputType: "inputType", format: "format", required: "required", autosize: "autosize", minDate: "minDate", maxDate: "maxDate", name: "name", label: "label", hint: "hint", precision: "precision", timezone: "timezone" }, outputs: { change: "change", blur: "blur", dateTimeSelected: "dateTimeSelected", inputChange: "inputChange" }, exportAs: ["ngxDateTime"], features: [ɵngcc0.ɵɵProvidersFeature([DATE_TIME_VALUE_ACCESSOR])], decls: 8, vars: 25, consts: [["dialogTpl", ""], [3, "minWidth", "id", "autosize", "size", "appearance", "autocorrect", "autocomplete", "spellcheck", "disabled", "placeholder", "autofocus", "tabindex", "label", "withMargin", "ngModel", "required", "requiredIndicator", "ngModelChange", "blur"], ["input", ""], [1, "date-time-hint"], [4, "ngIf"], ["class", "input-error", 4, "ngIf"], ["title", "Show date/time selector", "type", "button", 1, "calendar-dialog-btn", 3, "disabled", "ngClass", "click"], [1, "selected-header", "text-center"], ["name", "calendar", 3, "id", "minDate", "maxDate", "ngModel", "timezone", "minView", "change", 4, "ngIf"], ["class", "time-row", 4, "ngIf"], ["role", "navigation", 1, "ngx-dialog-footer"], [1, "text-left"], ["type", "button", 1, "btn", "btn-link", "today-btn", 3, "hidden", "click"], [1, "text-right"], ["type", "button", 1, "btn", "btn-link", "clear-btn", 3, "click"], ["type", "button", 1, "btn", "btn-link", "apply-btn", 3, "click"], ["name", "calendar", 3, "id", "minDate", "maxDate", "ngModel", "timezone", "minView", "change"], [1, "time-row"], ["type", "number", "hint", "Hour", "min", "1", "max", "12", 3, "id", "ngModel", "disabled", "change"], ["type", "number", "hint", "Minute", "min", "0", "max", "59", 3, "id", "ngModel", "disabled", "change"], ["type", "button", 1, "ampm", 3, "disabled", "click"], [1, "input-error"]], template: function DateTimeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, DateTimeComponent_ng_template_0_Template, 16, 6, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementStart(2, "ngx-input", 1, 2);
        ɵngcc0.ɵɵlistener("ngModelChange", function DateTimeComponent_Template_ngx_input_ngModelChange_2_listener($event) { return ctx.inputChanged($event); })("blur", function DateTimeComponent_Template_ngx_input_blur_2_listener($event) { return ctx.onBlur($event); });
        ɵngcc0.ɵɵelementStart(4, "ngx-input-hint", 3);
        ɵngcc0.ɵɵtemplate(5, DateTimeComponent_div_5_Template, 2, 1, "div", 4);
        ɵngcc0.ɵɵtemplate(6, DateTimeComponent_div_6_Template, 2, 1, "div", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "button", 6);
        ɵngcc0.ɵɵlistener("click", function DateTimeComponent_Template_button_click_7_listener() { return ctx.open(); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("minWidth", ctx.minWidth)("id", ctx.id + "-input")("autosize", ctx.autosize)("size", ctx.size)("appearance", ctx.appearance)("autocorrect", false)("autocomplete", false)("spellcheck", false)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("autofocus", ctx.autofocus)("tabindex", ctx.tabindex)("label", ctx.label)("withMargin", ctx.withMargin)("ngModel", ctx.displayValue)("required", ctx.required)("requiredIndicator", ctx.requiredIndicator);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hint);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.errorMsg);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled)("ngClass", ɵngcc0.ɵɵpureFunction3(21, _c2, ctx.inputType === "date", ctx.inputType === "datetime", ctx.inputType === "time"));
    } }, directives: [ɵngcc2.InputComponent, ɵngcc3.NgControlStatus, ɵngcc3.NgModel, ɵngcc3.RequiredValidator, ɵngcc4.InputHintDirective, ɵngcc5.NgIf, ɵngcc5.NgClass, ɵngcc6.CalendarComponent], pipes: [ɵngcc7.DateFormatPipe, ɵngcc8.TimeZonePipe], styles: ["input[type=number],input[type=password],input[type=tel],input[type=text],textarea{display:inline-block;box-sizing:border-box;outline:none}.form-input{background:#313847;border:1px solid #455066;color:#b6b6b6;transition:box-shadow .2s;border-radius:0;font-size:13px;height:32px;line-height:32px;width:100%;padding:6px;margin-bottom:1em}.form-input::-moz-placeholder{color:#647493}.form-input::placeholder{color:#647493}.form-input:focus{box-shadow:0 1px 5px 0 rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.form-input[disabled]{cursor:not-allowed;color:#363636}textarea.form-input{min-height:120px;line-height:1.3em}.ngx-date-time{position:relative;display:block;max-width:100%}.ngx-date-time.md .ngx-input{font-size:18px!important}.ngx-date-time.lg .ngx-input{font-size:21px!important}.ngx-date-time .calendar-dialog-btn{display:inline-flex;position:absolute;padding:0;right:5px;top:50%;transform:translateY(-50%);color:#afb7c8;z-index:2}.ngx-date-time .ngx-input-box-wrap{padding-right:25px}.ngx-date-time.no-label .calendar-dialog-btn{top:.5rem;transform:translateY(0)}.ngx-date-time.fill .calendar-dialog-btn{transform:translateY(-35%);right:10px}.ngx-date-time.fill.no-label .calendar-dialog-btn{transform:translateY(0)}.ngx-date-time .date-time-hint{display:flex;justify-content:space-between}.ngx-date-time .date-time-hint .input-error{color:#ff4514;margin-left:auto;padding-left:5px}.ngx-date-time.autosize{display:inline-block}.ngx-date-time.autosize .calendar-dialog-btn{transform:translateY(-25%)}.ngx-date-time.autosize.fill .calendar-dialog-btn{transform:translateY(-15%)}.ngx-date-time.autosize.marginless .calendar-dialog-btn{transform:translateY(-35%)}.ngx-date-time.autosize.no-label .calendar-dialog-btn{transform:translateY(0)}.ngx-date-time.autosize .ngx-input-hint{position:relative}.ngx-date-time.autosize .ngx-input-hint .date-time-hint{position:absolute;left:0;top:0;width:100%;max-width:100%;white-space:nowrap}.ngx-date-time.autosize .ngx-input-hint .date-time-hint>*{overflow:hidden;text-overflow:ellipsis}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog{padding:0!important;width:auto}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog h1{font-size:1.2rem;white-space:nowrap}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog h1 small{color:#cfcfcf}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .selected-header{padding:5px 20px;background:#1483ff;color:#cfcfcf}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .time-row{background:#1c2029;border:1px solid #2d3544;padding:8px 18px;margin-top:0;flex-direction:row;box-sizing:border-box;display:flex;place-content:stretch center;align-items:baseline;justify-content:space-between}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .time-row>*{flex:0 0 calc(33% - 6px)}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .time-row .ngx-input{margin-top:0;padding-top:0}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .time-row .ngx-input .ngx-input-underline{background-color:#b6b6b6}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .time-row button.ampm{color:#5a6884}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .time-row button.ampm.selected{color:#fff}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .ngx-calendar{box-shadow:none}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .ngx-calendar .title-row{background:none}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .ngx-calendar .day-name-row{margin-top:0}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .ngx-dialog-footer{border:1px solid #2d3544;border-top:0;padding:.5rem 0;flex-direction:row;box-sizing:border-box;display:flex}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .ngx-dialog-footer>*{flex:1 1 50%}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .ngx-dialog-footer .btn{font-size:1em;color:#72819f;margin:0;padding:0}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .ngx-dialog-footer .today-btn{margin-left:15px;opacity:1;transition:opacity .2s}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .ngx-dialog-footer .today-btn[hidden]{display:inline-block!important;opacity:0}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .ngx-dialog-footer .apply-btn{margin-right:15px;color:#479eff}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .ngx-dialog-footer .clear-btn{margin-right:15px}"], encapsulation: 2, changeDetection: 0 });
DateTimeComponent.ctorParameters = () => [
    { type: DialogService },
    { type: ChangeDetectorRef }
];
DateTimeComponent.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    label: [{ type: Input }],
    hint: [{ type: Input }],
    placeholder: [{ type: Input }],
    size: [{ type: Input }],
    appearance: [{ type: Input }],
    withMargin: [{ type: Input }],
    precision: [{ type: Input }],
    timezone: [{ type: Input }],
    inputFormats: [{ type: Input }],
    disabled: [{ type: Input }],
    minWidth: [{ type: Input }],
    tabindex: [{ type: Input }],
    autofocus: [{ type: Input }],
    inputType: [{ type: Input }],
    format: [{ type: Input }],
    requiredIndicator: [{ type: Input }],
    required: [{ type: Input }],
    autosize: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    change: [{ type: Output }],
    blur: [{ type: Output }],
    dateTimeSelected: [{ type: Output }],
    inputChange: [{ type: Output }],
    calendarTpl: [{ type: ViewChild, args: ['dialogTpl', { static: true },] }],
    input: [{ type: ViewChild, args: ['input', { static: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DateTimeComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxDateTime',
                selector: 'ngx-date-time',
                template: "<ng-template #dialogTpl>\n  <div class=\"selected-header text-center\">\n    <h1>\n      <span *ngIf=\"dialogModel && (inputType === 'datetime' || inputType === 'date')\">\n        {{ dialogModel | amTimeZone: timezone | amDateFormat: 'ddd, MMM D YYYY' }}\n        <small *ngIf=\"inputType === 'datetime'\">\n          {{ dialogModel | amTimeZone: timezone | amDateFormat: 'h:mm a' }}\n        </small>\n      </span>\n      <span *ngIf=\"dialogModel && inputType === 'time'\">\n        {{ dialogModel | amTimeZone: timezone | amDateFormat: 'h:mm a' }}\n      </span>\n      <span *ngIf=\"!dialogModel\">No value</span>\n    </h1>\n  </div>\n  <ngx-calendar\n    [id]=\"id + '-cal'\"\n    *ngIf=\"inputType === 'date' || inputType === 'datetime'\"\n    (change)=\"setDialogDate($event)\"\n    [minDate]=\"minDate\"\n    [maxDate]=\"maxDate\"\n    [ngModel]=\"dialogModel\"\n    [timezone]=\"timezone\"\n    [minView]=\"precision\"\n    name=\"calendar\"\n  >\n  </ngx-calendar>\n  <div class=\"time-row\" *ngIf=\"inputType === 'time' || inputType === 'datetime'\">\n    <div>\n      <ngx-input\n        type=\"number\"\n        hint=\"Hour\"\n        [id]=\"id + '-hour'\"\n        [ngModel]=\"hour\"\n        min=\"1\"\n        max=\"12\"\n        (change)=\"hourChanged($event)\"\n        [disabled]=\"isTimeDisabled('hour')\"\n      >\n      </ngx-input>\n    </div>\n    <div>\n      <ngx-input\n        type=\"number\"\n        hint=\"Minute\"\n        [id]=\"id + '-minute'\"\n        [ngModel]=\"minute\"\n        min=\"0\"\n        max=\"59\"\n        (change)=\"minuteChanged($event)\"\n        [disabled]=\"isTimeDisabled('minute')\"\n      >\n      </ngx-input>\n    </div>\n    <div>\n      <button\n        class=\"ampm\"\n        type=\"button\"\n        [class.selected]=\"amPmVal === 'AM'\"\n        (click)=\"onAmPmChange('AM')\"\n        [disabled]=\"isTimeDisabled('hour')\"\n      >\n        AM\n      </button>\n      <button\n        class=\"ampm\"\n        type=\"button\"\n        [class.selected]=\"amPmVal === 'PM'\"\n        (click)=\"onAmPmChange('PM')\"\n        [disabled]=\"isTimeDisabled('hour')\"\n      >\n        PM\n      </button>\n    </div>\n  </div>\n  <nav role=\"navigation\" class=\"ngx-dialog-footer\">\n    <div class=\"text-left\">\n      <button type=\"button\" class=\"btn btn-link today-btn\" (click)=\"selectCurrent()\" [hidden]=\"isCurrent()\">\n        Current\n      </button>\n    </div>\n    <div class=\"text-right\">\n      <button type=\"button\" class=\"btn btn-link clear-btn\" (click)=\"clear()\">Clear</button>\n      <button type=\"button\" class=\"btn btn-link apply-btn\" (click)=\"apply()\">Apply</button>\n    </div>\n  </nav>\n</ng-template>\n<ngx-input\n  #input\n  [minWidth]=\"minWidth\"\n  [id]=\"id + '-input'\"\n  [autosize]=\"autosize\"\n  [size]=\"size\"\n  [appearance]=\"appearance\"\n  [autocorrect]=\"false\"\n  [autocomplete]=\"false\"\n  [spellcheck]=\"false\"\n  [disabled]=\"disabled\"\n  [placeholder]=\"placeholder\"\n  [autofocus]=\"autofocus\"\n  [tabindex]=\"tabindex\"\n  [label]=\"label\"\n  [withMargin]=\"withMargin\"\n  [ngModel]=\"displayValue\"\n  [required]=\"required\"\n  [requiredIndicator]=\"requiredIndicator\"\n  (ngModelChange)=\"inputChanged($event)\"\n  (blur)=\"onBlur($event)\"\n>\n  <ngx-input-hint class=\"date-time-hint\">\n    <div *ngIf=\"hint\">{{ hint }}</div>\n    <div *ngIf=\"errorMsg\" class=\"input-error\">{{ errorMsg }}</div>\n  </ngx-input-hint>\n</ngx-input>\n<button\n  title=\"Show date/time selector\"\n  type=\"button\"\n  [disabled]=\"disabled\"\n  (click)=\"open()\"\n  [ngClass]=\"{\n    'icon-calendar': inputType === 'date',\n    'icon-calendar-clock': inputType === 'datetime',\n    'icon-clock': inputType === 'time'\n  }\"\n  class=\"calendar-dialog-btn\"\n></button>\n",
                providers: [DATE_TIME_VALUE_ACCESSOR],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'ngx-date-time',
                    '[class.legacy]': 'appearance === "legacy"',
                    '[class.fill]': 'appearance === "fill"',
                    '[class.sm]': 'size === "sm"',
                    '[class.md]': 'size === "md"',
                    '[class.lg]': 'size === "lg"',
                    '[class.autosize]': 'autosize',
                    '[class.marginless]': '!withMargin',
                    '[class.no-label]': '!label'
                },
                styles: ["input[type=number],input[type=password],input[type=tel],input[type=text],textarea{display:inline-block;box-sizing:border-box;outline:none}.form-input{background:#313847;border:1px solid #455066;color:#b6b6b6;transition:box-shadow .2s;border-radius:0;font-size:13px;height:32px;line-height:32px;width:100%;padding:6px;margin-bottom:1em}.form-input::-moz-placeholder{color:#647493}.form-input::placeholder{color:#647493}.form-input:focus{box-shadow:0 1px 5px 0 rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.form-input[disabled]{cursor:not-allowed;color:#363636}textarea.form-input{min-height:120px;line-height:1.3em}.ngx-date-time{position:relative;display:block;max-width:100%}.ngx-date-time.md .ngx-input{font-size:18px!important}.ngx-date-time.lg .ngx-input{font-size:21px!important}.ngx-date-time .calendar-dialog-btn{display:inline-flex;position:absolute;padding:0;right:5px;top:50%;transform:translateY(-50%);color:#afb7c8;z-index:2}.ngx-date-time .ngx-input-box-wrap{padding-right:25px}.ngx-date-time.no-label .calendar-dialog-btn{top:.5rem;transform:translateY(0)}.ngx-date-time.fill .calendar-dialog-btn{transform:translateY(-35%);right:10px}.ngx-date-time.fill.no-label .calendar-dialog-btn{transform:translateY(0)}.ngx-date-time .date-time-hint{display:flex;justify-content:space-between}.ngx-date-time .date-time-hint .input-error{color:#ff4514;margin-left:auto;padding-left:5px}.ngx-date-time.autosize{display:inline-block}.ngx-date-time.autosize .calendar-dialog-btn{transform:translateY(-25%)}.ngx-date-time.autosize.fill .calendar-dialog-btn{transform:translateY(-15%)}.ngx-date-time.autosize.marginless .calendar-dialog-btn{transform:translateY(-35%)}.ngx-date-time.autosize.no-label .calendar-dialog-btn{transform:translateY(0)}.ngx-date-time.autosize .ngx-input-hint{position:relative}.ngx-date-time.autosize .ngx-input-hint .date-time-hint{position:absolute;left:0;top:0;width:100%;max-width:100%;white-space:nowrap}.ngx-date-time.autosize .ngx-input-hint .date-time-hint>*{overflow:hidden;text-overflow:ellipsis}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog{padding:0!important;width:auto}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog h1{font-size:1.2rem;white-space:nowrap}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog h1 small{color:#cfcfcf}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .selected-header{padding:5px 20px;background:#1483ff;color:#cfcfcf}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .time-row{background:#1c2029;border:1px solid #2d3544;padding:8px 18px;margin-top:0;flex-direction:row;box-sizing:border-box;display:flex;place-content:stretch center;align-items:baseline;justify-content:space-between}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .time-row>*{flex:0 0 calc(33% - 6px)}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .time-row .ngx-input{margin-top:0;padding-top:0}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .time-row .ngx-input .ngx-input-underline{background-color:#b6b6b6}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .time-row button.ampm{color:#5a6884}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .time-row button.ampm.selected{color:#fff}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .ngx-calendar{box-shadow:none}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .ngx-calendar .title-row{background:none}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .ngx-calendar .day-name-row{margin-top:0}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .ngx-dialog-footer{border:1px solid #2d3544;border-top:0;padding:.5rem 0;flex-direction:row;box-sizing:border-box;display:flex}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .ngx-dialog-footer>*{flex:1 1 50%}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .ngx-dialog-footer .btn{font-size:1em;color:#72819f;margin:0;padding:0}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .ngx-dialog-footer .today-btn{margin-left:15px;opacity:1;transition:opacity .2s}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .ngx-dialog-footer .today-btn[hidden]{display:inline-block!important;opacity:0}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .ngx-dialog-footer .apply-btn{margin-right:15px;color:#479eff}.ngx-dialog .ngx-dialog-content.ngx-date-time-dialog .ngx-dialog-footer .clear-btn{margin-right:15px}"]
            }]
    }], function () { return [{ type: ɵngcc1.DialogService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], size: [{
            type: Input
        }], appearance: [{
            type: Input
        }], withMargin: [{
            type: Input
        }], inputFormats: [{
            type: Input
        }], requiredIndicator: [{
            type: Input
        }], change: [{
            type: Output
        }], blur: [{
            type: Output
        }], dateTimeSelected: [{
            type: Output
        }], inputChange: [{
            type: Output
        }], disabled: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], autofocus: [{
            type: Input
        }], inputType: [{
            type: Input
        }], format: [{
            type: Input
        }], required: [{
            type: Input
        }], autosize: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], name: [{
            type: Input
        }], label: [{
            type: Input
        }], hint: [{
            type: Input
        }], precision: [{
            type: Input
        }], timezone: [{
            type: Input
        }], calendarTpl: [{
            type: ViewChild,
            args: ['dialogTpl', { static: true }]
        }], input: [{
            type: ViewChild,
            args: ['input', { static: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9kYXRlLXRpbWUvZGF0ZS10aW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsU0FBUyxFQUNULFdBQVcsRUFHWCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVwRixPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQztBQUVyQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXJELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJFLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQUVmLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUVyQixN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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIGZvcndhcmRSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uRGVzdHJveSxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5LCBjb2VyY2VOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50LXRpbWV6b25lJztcblxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gJy4uL2RpYWxvZy9kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlVGltZVR5cGUgfSBmcm9tICcuL2RhdGUtdGltZS10eXBlLmVudW0nO1xuaW1wb3J0IHsgRGF0ZWxpa2UgfSBmcm9tICcuL2RhdGUtbGlrZS50eXBlJztcbmltcG9ydCB7IElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi4vaW5wdXQvaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFNpemUgfSBmcm9tICcuLi8uLi9taXhpbnMvc2l6ZS9zaXplLmVudW0nO1xuaW1wb3J0IHsgQXBwZWFyYW5jZSB9IGZyb20gJy4uLy4uL21peGlucy9hcHBlYXJhbmNlL2FwcGVhcmFuY2UuZW51bSc7XG5cbmxldCBuZXh0SWQgPSAwO1xuXG5jb25zdCBNSU5fV0lEVEggPSA2MDtcblxuY29uc3QgREFURV9USU1FX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0ZVRpbWVDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnbmd4RGF0ZVRpbWUnLFxuICBzZWxlY3RvcjogJ25neC1kYXRlLXRpbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS10aW1lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZS10aW1lLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW0RBVEVfVElNRV9WQUxVRV9BQ0NFU1NPUl0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICduZ3gtZGF0ZS10aW1lJyxcbiAgICAnW2NsYXNzLmxlZ2FjeV0nOiAnYXBwZWFyYW5jZSA9PT0gXCJsZWdhY3lcIicsXG4gICAgJ1tjbGFzcy5maWxsXSc6ICdhcHBlYXJhbmNlID09PSBcImZpbGxcIicsXG4gICAgJ1tjbGFzcy5zbV0nOiAnc2l6ZSA9PT0gXCJzbVwiJyxcbiAgICAnW2NsYXNzLm1kXSc6ICdzaXplID09PSBcIm1kXCInLFxuICAgICdbY2xhc3MubGddJzogJ3NpemUgPT09IFwibGdcIicsXG4gICAgJ1tjbGFzcy5hdXRvc2l6ZV0nOiAnYXV0b3NpemUnLFxuICAgICdbY2xhc3MubWFyZ2lubGVzc10nOiAnIXdpdGhNYXJnaW4nLFxuICAgICdbY2xhc3Mubm8tbGFiZWxdJzogJyFsYWJlbCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVGltZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKSBpZCA9IGBkYXRldGltZS0keysrbmV4dElkfWA7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgaGludDogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xuICBASW5wdXQoKSBzaXplOiBTaXplID0gU2l6ZS5TbWFsbDtcbiAgQElucHV0KCkgYXBwZWFyYW5jZTogQXBwZWFyYW5jZSA9IEFwcGVhcmFuY2UuTGVnYWN5O1xuICBASW5wdXQoKSB3aXRoTWFyZ2luID0gdHJ1ZTtcbiAgQElucHV0KCkgcHJlY2lzaW9uOiBtb21lbnQudW5pdE9mVGltZS5TdGFydE9mO1xuICBASW5wdXQoKSB0aW1lem9uZTogc3RyaW5nO1xuICBASW5wdXQoKSBpbnB1dEZvcm1hdHM6IGFueVtdID0gWydMJywgJ0xUJywgJ0wgTFQnLCBtb21lbnQuSVNPXzg2MDFdO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoZGlzYWJsZWQpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IG1pbldpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21pbldpZHRoO1xuICB9XG4gIHNldCBtaW5XaWR0aChtaW5XaWR0aCkge1xuICAgIHRoaXMuX21pbldpZHRoID0gY29lcmNlTnVtYmVyUHJvcGVydHkobWluV2lkdGgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHRhYmluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl90YWJpbmRleDtcbiAgfVxuICBzZXQgdGFiaW5kZXgodGFiaW5kZXgpIHtcbiAgICB0aGlzLl90YWJpbmRleCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHRhYmluZGV4KTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBhdXRvZm9jdXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9mb2N1cztcbiAgfVxuICBzZXQgYXV0b2ZvY3VzKGF1dG9mb2N1cykge1xuICAgIHRoaXMuX2F1dG9mb2N1cyA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShhdXRvZm9jdXMpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGlucHV0VHlwZSgpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5faW5wdXRUeXBlKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWVUeXBlLmRhdGU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pbnB1dFR5cGU7XG4gIH1cbiAgc2V0IGlucHV0VHlwZSh2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX2lucHV0VHlwZSA9IHZhbDtcbiAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHRoaXMuZ2V0RGlzcGxheVZhbHVlKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZm9ybWF0KCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLl9mb3JtYXQpIHtcbiAgICAgIGlmICh0aGlzLmlucHV0VHlwZSA9PT0gRGF0ZVRpbWVUeXBlLmRhdGUpIHtcbiAgICAgICAgcmV0dXJuICdMJztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnB1dFR5cGUgPT09IERhdGVUaW1lVHlwZS5kYXRldGltZSkge1xuICAgICAgICByZXR1cm4gJ0wgTFQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdMVCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdDtcbiAgfVxuICBzZXQgZm9ybWF0KHZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fZm9ybWF0ID0gdmFsO1xuICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdGhpcy5nZXREaXNwbGF5VmFsdWUoKTtcbiAgfVxuXG4gIEBJbnB1dCgpIHJlcXVpcmVkSW5kaWNhdG9yOiBzdHJpbmcgfCBib29sZWFuID0gJyonO1xuICBASW5wdXQoKVxuICBnZXQgcmVxdWlyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xuICB9XG4gIHNldCByZXF1aXJlZChyZXF1aXJlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHJlcXVpcmVkKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbDogRGF0ZSB8IHN0cmluZykge1xuICAgIGxldCBkYXRlOiBtb21lbnQuTW9tZW50O1xuICAgIGxldCBpc1NhbWU6IGJvb2xlYW47XG5cbiAgICBpZiAodmFsKSB7XG4gICAgICBkYXRlID0gdGhpcy5wYXJzZURhdGUodmFsKTtcbiAgICAgIGxldCBzYW1lRGlmZjogbW9tZW50LnVuaXRPZlRpbWUuU3RhcnRPZjtcblxuICAgICAgaWYgKHRoaXMucHJlY2lzaW9uKSB7XG4gICAgICAgIHNhbWVEaWZmID0gdGhpcy5wcmVjaXNpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzYW1lRGlmZiA9IHRoaXMuaW5wdXRUeXBlID09PSBEYXRlVGltZVR5cGUuZGF0ZSA/ICdkYXknIDogJ3NlY29uZCc7XG4gICAgICB9XG5cbiAgICAgIGlzU2FtZSA9IHRoaXMuX3ZhbHVlICYmIGRhdGUuaXNTYW1lKHRoaXMuX3ZhbHVlLCBzYW1lRGlmZik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIHdlIGhhdmUgYSB2YWwgYW5kIGhhZCBubyB2YWwgYmVmb3JlLCBlbnN1cmVcbiAgICAgIC8vIHdlIHNldCB0aGUgcHJvcGVydHkgY29ycmVjdGx5IGV2ZW4gaWYgaXRzIHNhbWVcbiAgICAgIGlzU2FtZSA9IHZhbCA9PT0gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgaXNWYWxpZCA9IHRoaXMudmFsaWRhdGUoZGF0ZSk7XG4gICAgdGhpcy5fdmFsdWUgPSBkYXRlICYmIGRhdGUuaXNWYWxpZCgpID8gZGF0ZS50b0RhdGUoKSA6IHZhbDtcblxuICAgIC8vIG5vdGlmeSBvZiBjaGFuZ2VzIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGlzIGNsZWFyZWRcbiAgICAvLyBvciB3aGVuIHRoZSBzZXQgdmFsdWUgaXMgdmFsaWRcbiAgICBpZiAoKCF2YWwgfHwgaXNWYWxpZCkgJiYgIWlzU2FtZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHZhbCk7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHZhbCk7XG4gICAgfVxuICAgIHRoaXMuaW5wdXRDaGFuZ2UuZW1pdCh2YWwpO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXlWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5VmFsdWU7XG4gIH1cblxuICBzZXQgZGlzcGxheVZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXNwbGF5VmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBhdXRvc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b3NpemU7XG4gIH1cbiAgc2V0IGF1dG9zaXplKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdXRvc2l6ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBtaW5EYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9taW5EYXRlO1xuICB9XG4gIHNldCBtaW5EYXRlKHZhbDogRGF0ZSB8IHN0cmluZykge1xuICAgIHRoaXMuX21pbkRhdGUgPSB2YWw7XG4gICAgdGhpcy52YWxpZGF0ZSh0aGlzLnBhcnNlRGF0ZSh0aGlzLl92YWx1ZSkpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IG1heERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heERhdGU7XG4gIH1cbiAgc2V0IG1heERhdGUodmFsOiBEYXRlIHwgc3RyaW5nKSB7XG4gICAgdGhpcy5fbWF4RGF0ZSA9IHZhbDtcbiAgICB0aGlzLnZhbGlkYXRlKHRoaXMucGFyc2VEYXRlKHRoaXMuX3ZhbHVlKSk7XG4gIH1cblxuICAvKipcbiAgICogdGhpcyBvdXRwdXQgd2lsbCBlbWl0IG9ubHkgd2hlbiB0aGUgaW5wdXQgdmFsdWUgaXMgdmFsaWQgb3IgY2xlYXJlZC5cbiAgICogQHNlZSBpbnB1dENoYW5nZSBmb3IgYWx3YXlzIGVtaXR0aW5nIHRoZSB2YWx1ZVxuICAgKi9cbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgRGF0ZT4oKTtcbiAgQE91dHB1dCgpIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuICBAT3V0cHV0KCkgZGF0ZVRpbWVTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZSB8IHN0cmluZz4oKTtcblxuICAvKipcbiAgICogdGhpcyBvdXRwdXQgd2lsbCBlbWl0IGFueXRpbWUgdGhlIHZhbHVlIGNoYW5nZXMgcmVnYXJkbGVzcyBvZiB2YWxpZGl0eS5cbiAgICogQHNlZSBjaGFuZ2Ugd2hlbiBvbmx5IGVtaXR0aW5nXG4gICAqL1xuICBAT3V0cHV0KCkgaW5wdXRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IERhdGU+KCk7XG5cbiAgQFZpZXdDaGlsZCgnZGlhbG9nVHBsJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcmVhZG9ubHkgY2FsZW5kYXJUcGw6IFRlbXBsYXRlUmVmPEVsZW1lbnRSZWY+O1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcmVhZG9ubHkgaW5wdXQ6IElucHV0Q29tcG9uZW50O1xuXG4gIGVycm9yTXNnOiBzdHJpbmc7XG4gIGRpYWxvZzogYW55O1xuICBkaWFsb2dNb2RlbDogbW9tZW50Lk1vbWVudDtcbiAgaG91cjogbnVtYmVyO1xuICBtaW51dGU6IHN0cmluZztcbiAgYW1QbVZhbDogc3RyaW5nO1xuICBtb2RlcyA9IFsnbWlsbGlzZWNvbmQnLCAnc2Vjb25kJywgJ21pbnV0ZScsICdob3VyJywgJ2RhdGUnLCAnbW9udGgnLCAneWVhciddO1xuXG4gIHByaXZhdGUgX3ZhbHVlOiBEYXRlIHwgc3RyaW5nO1xuICBwcml2YXRlIF9kaXNwbGF5VmFsdWUgPSAnJztcbiAgcHJpdmF0ZSBfZm9ybWF0OiBzdHJpbmc7XG4gIHByaXZhdGUgX2lucHV0VHlwZTogc3RyaW5nO1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9hdXRvZm9jdXMgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdGFiaW5kZXg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfYXV0b3NpemUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbWluV2lkdGg6IG51bWJlciA9IE1JTl9XSURUSDtcbiAgcHJpdmF0ZSBfcmVxdWlyZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbWF4RGF0ZTogRGF0ZSB8IHN0cmluZztcbiAgcHJpdmF0ZSBfbWluRGF0ZTogRGF0ZSB8IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRpYWxvZ1NlcnZpY2U6IERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgcmVhZG9ubHkgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbDtcbiAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHRoaXMuZ2V0RGlzcGxheVZhbHVlKCk7XG4gIH1cblxuICBvbkJsdXIoZXZlbnQ/OiBFdmVudCkge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2soKTtcblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wYXJzZURhdGUodGhpcy52YWx1ZSk7XG4gICAgaWYgKHRoaXMudmFsaWRhdGUodmFsdWUpKSB7XG4gICAgICBjb25zdCBkaXNwbGF5VmFsdWUgPSB0aGlzLmdldERpc3BsYXlWYWx1ZSgpO1xuICAgICAgaWYgKHRoaXMuaW5wdXQudmFsdWUgIT09IGRpc3BsYXlWYWx1ZSkge1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gZGlzcGxheVZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gIH1cblxuICBvcGVuKCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gbW9tZW50KHRoaXMuX3ZhbHVlKTtcbiAgICBjb25zdCBpc1ZhbGlkID0gdmFsdWUuaXNWYWxpZCgpO1xuXG4gICAgdGhpcy5zZXREaWFsb2dEYXRlKGlzVmFsaWQgPyB2YWx1ZSA6IG5ldyBEYXRlKCkpO1xuXG4gICAgdGhpcy5kaWFsb2cgPSB0aGlzLmRpYWxvZ1NlcnZpY2UuY3JlYXRlKHtcbiAgICAgIGNzc0NsYXNzOiAnbmd4LWRhdGUtdGltZS1kaWFsb2cnLFxuICAgICAgdGVtcGxhdGU6IHRoaXMuY2FsZW5kYXJUcGwsXG4gICAgICBjbG9zZUJ1dHRvbjogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGx5KCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmRpYWxvZ01vZGVsLnRvRGF0ZSgpO1xuICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdGhpcy5nZXREaXNwbGF5VmFsdWUoKTtcbiAgICB0aGlzLmRhdGVUaW1lU2VsZWN0ZWQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBzZXREaWFsb2dEYXRlKGRhdGU6IERhdGVsaWtlKSB7XG4gICAgdGhpcy5kaWFsb2dNb2RlbCA9IHRoaXMuY3JlYXRlTW9tZW50KGRhdGUpO1xuICAgIHRoaXMuaG91ciA9ICt0aGlzLmRpYWxvZ01vZGVsLmZvcm1hdCgnaGgnKTtcbiAgICB0aGlzLm1pbnV0ZSA9IHRoaXMuZGlhbG9nTW9kZWwuZm9ybWF0KCdtbScpO1xuICAgIHRoaXMuYW1QbVZhbCA9IHRoaXMuZGlhbG9nTW9kZWwuZm9ybWF0KCdBJyk7XG4gIH1cblxuICBtaW51dGVDaGFuZ2VkKG5ld1ZhbDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dNb2RlbCA9IHRoaXMuZGlhbG9nTW9kZWwuY2xvbmUoKS5taW51dGUobmV3VmFsKTtcbiAgICB0aGlzLm1pbnV0ZSA9IHRoaXMuZGlhbG9nTW9kZWwuZm9ybWF0KCdtbScpO1xuICB9XG5cbiAgaG91ckNoYW5nZWQobmV3VmFsOiBudW1iZXIpOiB2b2lkIHtcbiAgICBuZXdWYWwgPSArbmV3VmFsICUgMTI7XG4gICAgaWYgKHRoaXMuYW1QbVZhbCA9PT0gJ1BNJykge1xuICAgICAgbmV3VmFsID0gMTIgKyBuZXdWYWw7XG4gICAgfVxuICAgIHRoaXMuZGlhbG9nTW9kZWwgPSB0aGlzLmRpYWxvZ01vZGVsLmNsb25lKCkuaG91cihuZXdWYWwpO1xuICAgIHRoaXMuaG91ciA9ICt0aGlzLmRpYWxvZ01vZGVsLmZvcm1hdCgnaGgnKTtcbiAgfVxuXG4gIHNlbGVjdEN1cnJlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXREaWFsb2dEYXRlKG5ldyBEYXRlKCkpO1xuICB9XG5cbiAgaXNDdXJyZW50KCkge1xuICAgIGNvbnN0IG5vdyA9IHRoaXMuY3JlYXRlTW9tZW50KG5ldyBEYXRlKCkpO1xuICAgIGlmICh0aGlzLmlucHV0VHlwZSA9PT0gJ3RpbWUnKSB7XG4gICAgICByZXR1cm4gbm93LmhvdXIoKSA9PT0gdGhpcy5kaWFsb2dNb2RlbC5ob3VyKCkgJiYgbm93Lm1pbnV0ZSgpID09PSB0aGlzLmRpYWxvZ01vZGVsLm1pbnV0ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gbm93LmlzU2FtZSh0aGlzLmRpYWxvZ01vZGVsLCAnbWludXRlJyk7XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdGhpcy5nZXREaXNwbGF5VmFsdWUoKTtcbiAgICB0aGlzLmRhdGVUaW1lU2VsZWN0ZWQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBvbkFtUG1DaGFuZ2UobmV3VmFsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBjbG9uZSA9IHRoaXMuZGlhbG9nTW9kZWwuY2xvbmUoKTtcbiAgICBpZiAobmV3VmFsID09PSAnQU0nICYmIHRoaXMuYW1QbVZhbCA9PT0gJ1BNJykge1xuICAgICAgdGhpcy5kaWFsb2dNb2RlbCA9IGNsb25lLnN1YnRyYWN0KDEyLCAnaCcpO1xuICAgIH0gZWxzZSBpZiAobmV3VmFsID09PSAnUE0nICYmIHRoaXMuYW1QbVZhbCA9PT0gJ0FNJykge1xuICAgICAgdGhpcy5kaWFsb2dNb2RlbCA9IGNsb25lLmFkZCgxMiwgJ2gnKTtcbiAgICB9XG4gICAgdGhpcy5hbVBtVmFsID0gdGhpcy5kaWFsb2dNb2RlbC5mb3JtYXQoJ0EnKTtcbiAgfVxuXG4gIGdldERheURpc2FibGVkKGRhdGU6IG1vbWVudC5Nb21lbnQpOiBib29sZWFuIHtcbiAgICBpZiAoIWRhdGUpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IGlzQmVmb3JlTWluID0gdGhpcy5taW5EYXRlICYmIGRhdGUuaXNCZWZvcmUodGhpcy5wYXJzZURhdGUodGhpcy5taW5EYXRlKSk7XG4gICAgY29uc3QgaXNBZnRlck1heCA9IHRoaXMubWF4RGF0ZSAmJiBkYXRlLmlzQWZ0ZXIodGhpcy5wYXJzZURhdGUodGhpcy5tYXhEYXRlKSk7XG5cbiAgICByZXR1cm4gaXNCZWZvcmVNaW4gfHwgaXNBZnRlck1heDtcbiAgfVxuXG4gIGlzVGltZURpc2FibGVkKG1vZGU6IG1vbWVudC51bml0T2ZUaW1lLlN0YXJ0T2YpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tb2Rlcy5pbmRleE9mKGAke3RoaXMucHJlY2lzaW9ufWApID4gdGhpcy5tb2Rlcy5pbmRleE9mKGAke21vZGV9YCk7XG4gIH1cblxuICBpbnB1dENoYW5nZWQodmFsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRlID0gdGhpcy5wYXJzZURhdGUodmFsKTtcbiAgICB0aGlzLnZhbHVlID0gZGF0ZS5pc1ZhbGlkKCkgPyBkYXRlLnRvRGF0ZSgpIDogdmFsO1xuICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdmFsO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpYWxvZykgcmV0dXJuO1xuXG4gICAgLy8gdGVhciBkb3duIHRoZSBkaWFsb2cgaW5zdGFuY2VcbiAgICB0aGlzLmRpYWxvZ1NlcnZpY2UuZGVzdHJveSh0aGlzLmRpYWxvZyk7XG5cbiAgICBjb25zdCBkYXRlID0gdGhpcy5wYXJzZURhdGUodGhpcy52YWx1ZSk7XG4gICAgdGhpcy52YWxpZGF0ZShkYXRlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG4gIHByaXZhdGUgcm91bmRUbyh2YWw6IG1vbWVudC5Nb21lbnQsIGtleTogc3RyaW5nKTogbW9tZW50Lk1vbWVudCB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFrZXkgfHwgIXZhbCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgdmFsID0gdmFsLmNsb25lKCk7XG5cbiAgICBjb25zdCBpZHggPSB0aGlzLm1vZGVzLmluZGV4T2Yoa2V5KTtcbiAgICBpZiAoaWR4ID4gMCkge1xuICAgICAgdGhpcy5tb2Rlcy5mb3JFYWNoKChtb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPCBpZHgpIHtcbiAgICAgICAgICB2YWwgPSB2YWxbbW9kZV0obW9kZSA9PT0gJ2RhdGUnID8gMSA6IDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGUoZGF0ZTogbW9tZW50Lk1vbWVudCB8IHVuZGVmaW5lZCkge1xuICAgIC8vIGNoZWNrIGlmIGRhdGUgaW5wdXQgaXMgZW1wdHlcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkYXRlPy5jcmVhdGlvbkRhdGEoKS5pbnB1dDtcbiAgICBjb25zdCBpc0VtcHR5ID0gZGF0ZUlucHV0ID09PSAnJyB8fCBkYXRlSW5wdXQgPT09IG51bGwgfHwgZGF0ZUlucHV0ID09PSB1bmRlZmluZWQ7IC8vIDAgaXMgYSB2YWxpZCBkYXRlIGlucHV0XG5cbiAgICAvLyBkYXRlIGNhbiBiZSBlaXRoZXIgdmFsaWQsIG9yIGFuIGVtcHR5IHZhbHVlIGlmIG5vdCByZXF1aXJlZFxuICAgIGNvbnN0IGlzVmFsaWQgPSBkYXRlPy5pc1ZhbGlkKCkgfHwgKCF0aGlzLnJlcXVpcmVkICYmIGlzRW1wdHkpO1xuICAgIGNvbnN0IGlzSW5SYW5nZSA9ICF0aGlzLmdldERheURpc2FibGVkKGRhdGUpO1xuXG4gICAgbGV0IGVycm9yTXNnID0gJyc7XG4gICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgaXNFbXB0eSkge1xuICAgICAgLyogbm8gZGF0ZXRpbWUgY29tcG9uZW50IHNwZWNpZmljIGVycm9yIG1lc3NhZ2UgKi9cbiAgICB9IGVsc2UgaWYgKCFpc1ZhbGlkKSBlcnJvck1zZyA9ICdJbnZhbGlkIERhdGUnO1xuICAgIGVsc2UgaWYgKCFpc0luUmFuZ2UpIGVycm9yTXNnID0gJ0RhdGUgb3V0IG9mIHJhbmdlJztcbiAgICB0aGlzLmVycm9yTXNnID0gZXJyb3JNc2c7XG5cbiAgICByZXR1cm4gaXNWYWxpZCAmJiBpc0luUmFuZ2U7XG4gIH1cblxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4ge1xuICAgIC8vIHBsYWNlaG9sZGVyXG4gIH07XG5cbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gKCkgPT4ge1xuICAgIC8vIHBsYWNlaG9sZGVyXG4gIH07XG5cbiAgcHJpdmF0ZSBnZXREaXNwbGF5VmFsdWUoKTogc3RyaW5nIHtcbiAgICAvLyBub3RlIHNhbWUgYXMge3sgdmFsdWUgfCBhbVRpbWVab25lOiB0aW1lem9uZSB8IGFtRGF0ZUZvcm1hdDogZm9ybWF0IH19XG4gICAgaWYgKCF0aGlzLnZhbHVlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNvbnN0IG0gPSB0aGlzLmNyZWF0ZU1vbWVudCh0aGlzLnZhbHVlKTtcbiAgICByZXR1cm4gbS5pc1ZhbGlkKCkgPyBtLmZvcm1hdCh0aGlzLmZvcm1hdCkgOiAnJyArIFN0cmluZyh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VEYXRlKGRhdGU6IHN0cmluZyB8IERhdGUpOiBtb21lbnQuTW9tZW50IHtcbiAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICBkYXRlID0gaXNOYU4oZGF0ZS5nZXRUaW1lKCkpID8gZGF0ZS50b1N0cmluZygpIDogZGF0ZS50b0lTT1N0cmluZygpO1xuICAgIH1cbiAgICBjb25zdCBpbnB1dEZvcm1hdHMgPSBbLi4udGhpcy5pbnB1dEZvcm1hdHNdO1xuICAgIGlmICh0aGlzLmZvcm1hdCAmJiAhaW5wdXRGb3JtYXRzLmluY2x1ZGVzKHRoaXMuZm9ybWF0KSkge1xuICAgICAgaW5wdXRGb3JtYXRzLnVuc2hpZnQodGhpcy5mb3JtYXQpO1xuICAgIH1cbiAgICBsZXQgbSA9IHRoaXMudGltZXpvbmUgPyBtb21lbnQudHooZGF0ZSwgaW5wdXRGb3JtYXRzLCB0aGlzLnRpbWV6b25lKSA6IG1vbWVudChkYXRlLCBpbnB1dEZvcm1hdHMpO1xuICAgIG0gPSB0aGlzLnByZWNpc2lvbiA/IHRoaXMucm91bmRUbyhtLCB0aGlzLnByZWNpc2lvbikgOiBtO1xuICAgIHJldHVybiBtO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVNb21lbnQoZGF0ZTogRGF0ZWxpa2UpOiBtb21lbnQuTW9tZW50IHtcbiAgICBsZXQgbSA9IG1vbWVudChkYXRlKS5jbG9uZSgpO1xuICAgIG0gPSB0aGlzLnRpbWV6b25lID8gbS50eih0aGlzLnRpbWV6b25lKSA6IG07XG4gICAgbSA9IHRoaXMucHJlY2lzaW9uID8gdGhpcy5yb3VuZFRvKG0sIHRoaXMucHJlY2lzaW9uKSA6IG07XG4gICAgcmV0dXJuIG07XG4gIH1cbn1cbiJdfQ==