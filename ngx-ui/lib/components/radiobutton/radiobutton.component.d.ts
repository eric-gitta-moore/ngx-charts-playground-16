import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class RadioButtonComponent implements ControlValueAccessor {
    private readonly cdr;
    readonly UNIQUE_ID: string;
    id: string;
    name: string;
    get tabindex(): number;
    set tabindex(tabindex: number);
    get checked(): boolean;
    set checked(checked: boolean);
    get value(): boolean;
    set value(value: boolean);
    get disabled(): boolean;
    set disabled(disabled: boolean);
    change: EventEmitter<boolean>;
    blur: EventEmitter<Event>;
    focus: EventEmitter<FocusEvent>;
    groupDisabled: boolean;
    private _checked;
    private _value;
    private _disabled;
    private _tabindex;
    constructor(cdr: ChangeDetectorRef);
    _onInputChange(event: Event): void;
    writeValue(value: any): void;
    onFocus(e: FocusEvent): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    private onChangeCallback;
    private onTouchedCallback;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<RadioButtonComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<RadioButtonComponent, "ngx-radiobutton", ["ngxRadiobutton"], { "id": "id"; "name": "name"; "tabindex": "tabindex"; "checked": "checked"; "value": "value"; "disabled": "disabled"; }, { "change": "change"; "blur": "blur"; "focus": "focus"; }, never, ["*"]>;
}

//# sourceMappingURL=radiobutton.component.d.ts.map