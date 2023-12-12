import { EventEmitter, TemplateRef, OnDestroy, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import moment from 'moment-timezone';
import { DialogService } from '../dialog/dialog.service';
import { Datelike } from './date-like.type';
import { InputComponent } from '../input/input.component';
import { Size } from '../../mixins/size/size.enum';
import { Appearance } from '../../mixins/appearance/appearance.enum';
import * as ɵngcc0 from '@angular/core';
export declare class DateTimeComponent implements OnDestroy, ControlValueAccessor {
    private readonly dialogService;
    private readonly cdr;
    id: string;
    name: string;
    label: string;
    hint: string;
    placeholder: string;
    size: Size;
    appearance: Appearance;
    withMargin: boolean;
    precision: moment.unitOfTime.StartOf;
    timezone: string;
    inputFormats: any[];
    get disabled(): boolean;
    set disabled(disabled: boolean);
    get minWidth(): number;
    set minWidth(minWidth: number);
    get tabindex(): number;
    set tabindex(tabindex: number);
    get autofocus(): boolean;
    set autofocus(autofocus: boolean);
    get inputType(): string;
    set inputType(val: string);
    get format(): string;
    set format(val: string);
    requiredIndicator: string | boolean;
    get required(): boolean;
    set required(required: boolean);
    get value(): Date | string;
    set value(val: Date | string);
    get displayValue(): string;
    set displayValue(value: string);
    get autosize(): boolean;
    set autosize(v: boolean);
    get minDate(): Date | string;
    set minDate(val: Date | string);
    get maxDate(): Date | string;
    set maxDate(val: Date | string);
    /**
     * this output will emit only when the input value is valid or cleared.
     * @see inputChange for always emitting the value
     */
    change: EventEmitter<string | Date>;
    blur: EventEmitter<Event>;
    dateTimeSelected: EventEmitter<string | Date>;
    /**
     * this output will emit anytime the value changes regardless of validity.
     * @see change when only emitting
     */
    inputChange: EventEmitter<string | Date>;
    readonly calendarTpl: TemplateRef<ElementRef>;
    readonly input: InputComponent;
    errorMsg: string;
    dialog: any;
    dialogModel: moment.Moment;
    hour: number;
    minute: string;
    amPmVal: string;
    modes: string[];
    private _value;
    private _displayValue;
    private _format;
    private _inputType;
    private _disabled;
    private _autofocus;
    private _tabindex;
    private _autosize;
    private _minWidth;
    private _required;
    private _maxDate;
    private _minDate;
    constructor(dialogService: DialogService, cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    writeValue(val: any): void;
    onBlur(event?: Event): void;
    open(): void;
    apply(): void;
    setDialogDate(date: Datelike): void;
    minuteChanged(newVal: number): void;
    hourChanged(newVal: number): void;
    selectCurrent(): void;
    isCurrent(): boolean;
    clear(): void;
    onAmPmChange(newVal: string): void;
    getDayDisabled(date: moment.Moment): boolean;
    isTimeDisabled(mode: moment.unitOfTime.StartOf): boolean;
    inputChanged(val: string): void;
    close(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    private roundTo;
    private validate;
    private onTouchedCallback;
    private onChangeCallback;
    private getDisplayValue;
    private parseDate;
    private createMoment;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DateTimeComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<DateTimeComponent, "ngx-date-time", ["ngxDateTime"], { "id": "id"; "placeholder": "placeholder"; "size": "size"; "appearance": "appearance"; "withMargin": "withMargin"; "inputFormats": "inputFormats"; "requiredIndicator": "requiredIndicator"; "disabled": "disabled"; "minWidth": "minWidth"; "tabindex": "tabindex"; "autofocus": "autofocus"; "inputType": "inputType"; "format": "format"; "required": "required"; "autosize": "autosize"; "minDate": "minDate"; "maxDate": "maxDate"; "name": "name"; "label": "label"; "hint": "hint"; "precision": "precision"; "timezone": "timezone"; }, { "change": "change"; "blur": "blur"; "dateTimeSelected": "dateTimeSelected"; "inputChange": "inputChange"; }, never, never>;
}

//# sourceMappingURL=date-time.component.d.ts.map