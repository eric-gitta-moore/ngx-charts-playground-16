import { EventEmitter, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import moment from 'moment-timezone';
import { CalendarDay } from './calendar-day.interface';
import { CalendarMonth } from './calendar-month.type';
import { CalendarView } from './calendar-view.enum';
import * as ɵngcc0 from '@angular/core';
export declare class CalendarComponent implements OnInit, AfterViewInit, ControlValueAccessor {
    private readonly cdr;
    minDate: Date | string;
    disabled: boolean;
    maxDate: Date | string;
    daysOfWeek: string[];
    timezone: string;
    inputFormats: Array<string | moment.MomentBuiltinFormat>;
    get minView(): CalendarView;
    set minView(val: CalendarView);
    get defaultView(): CalendarView;
    set defaultView(val: CalendarView);
    change: EventEmitter<Date>;
    get value(): Date;
    set value(val: Date);
    get current(): moment.Moment;
    activeDate: moment.Moment;
    weeks: CalendarMonth;
    currentView: CalendarView;
    monthsList: string[];
    startYear: number;
    private _value;
    private _current;
    private _minView;
    private _defaultView;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    changeViews(): void;
    validateView(): void;
    /**
     * Checks if `date` matches selected value
     */
    isDayActive(date: moment.Moment): boolean;
    /**
     * Checks if `month` matches selected value, in the viewed year
     */
    isMonthActive(month: string): boolean;
    /**
     * Checks if `month` and year matches current
     */
    isCurrentMonth(month: string): boolean;
    /**
     * Checks if `year` matches selected year
     */
    isYearActive(year: number): boolean;
    /**
     * Checks if year matches current year
     */
    isCurrentYear(year: number): boolean;
    isDisabled(value: any, type: string): boolean;
    onDayClick(day: CalendarDay): void;
    onMonthClick(month: string): void;
    onYearClick(year: number): void;
    prevMonth(): void;
    nextMonth(): void;
    prevYear(): void;
    nextYear(): void;
    prevTwoDecades(): void;
    nextTwoDecades(): void;
    writeValue(val: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onTouchedCallback: () => void;
    private onChangeCallback;
    private parseDate;
    private createMoment;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<CalendarComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<CalendarComponent, "ngx-calendar", ["ngxCalendar"], { "daysOfWeek": "daysOfWeek"; "inputFormats": "inputFormats"; "minView": "minView"; "defaultView": "defaultView"; "minDate": "minDate"; "disabled": "disabled"; "maxDate": "maxDate"; "timezone": "timezone"; }, { "change": "change"; }, never, never>;
}

//# sourceMappingURL=calendar.component.d.ts.map