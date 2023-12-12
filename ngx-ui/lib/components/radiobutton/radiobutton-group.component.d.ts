import { EventEmitter, QueryList, OnDestroy, AfterContentInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { RadioButtonComponent } from './radiobutton.component';
import * as ɵngcc0 from '@angular/core';
export declare class RadioButtonGroupComponent implements ControlValueAccessor, OnDestroy, OnChanges, AfterContentInit {
    private readonly _cdr;
    readonly UNIQUE_ID: string;
    id: string;
    get disabled(): boolean;
    set disabled(disabled: boolean);
    get value(): any;
    set value(value: any);
    get name(): string;
    set name(name: string);
    change: EventEmitter<boolean>;
    blur: EventEmitter<Event>;
    focus: EventEmitter<FocusEvent>;
    readonly _radios: QueryList<RadioButtonComponent>;
    get selected(): RadioButtonComponent;
    private _name;
    private _value;
    private _selected;
    private _disabled;
    private _destroy$;
    constructor(_cdr: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(): void;
    subscribeToRadios(): void;
    onRadioSelected(value: string): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onChangeCallback(_: any): void;
    onTouchedCallback(): void;
    private _updateRadioButtonNames;
    private _updateSelectedRadioFromValue;
    private _updateRadioDisabledState;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<RadioButtonGroupComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<RadioButtonGroupComponent, "ngx-radiobutton-group", ["ngxRadiobuttonGroup"], { "id": "id"; "disabled": "disabled"; "value": "value"; "name": "name"; }, { "change": "change"; "blur": "blur"; "focus": "focus"; }, ["_radios"], ["*"]>;
}

//# sourceMappingURL=radiobutton-group.component.d.ts.map