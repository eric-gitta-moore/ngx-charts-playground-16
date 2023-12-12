import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class CheckboxComponent implements ControlValueAccessor {
    private readonly cdr;
    id: string;
    name?: string;
    diameter: string;
    get tabindex(): number;
    set tabindex(v: number);
    get disabled(): boolean;
    set disabled(v: boolean);
    get round(): boolean;
    set round(v: boolean);
    change: EventEmitter<Event>;
    blur: EventEmitter<FocusEvent>;
    focus: EventEmitter<FocusEvent>;
    set value(value: boolean);
    get value(): boolean;
    private _value;
    private _tabindex;
    private _disabled;
    private _round;
    constructor(cdr: ChangeDetectorRef);
    onBlur(_: any): void;
    toggle(): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(disabled: boolean): void;
    private onTouchedCallback;
    private onChangeCallback;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<CheckboxComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<CheckboxComponent, "ngx-checkbox", ["ngxCheckbox"], { "id": "id"; "diameter": "diameter"; "tabindex": "tabindex"; "disabled": "disabled"; "round": "round"; "name": "name"; }, { "change": "change"; "blur": "blur"; "focus": "focus"; }, never, ["*"]>;
}

//# sourceMappingURL=checkbox.component.d.ts.map