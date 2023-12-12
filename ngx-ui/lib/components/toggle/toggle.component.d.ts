import { ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class ToggleComponent implements ControlValueAccessor {
    private readonly cdr;
    id: string;
    name: string;
    label: string;
    get disabled(): boolean;
    set disabled(disabled: boolean);
    get required(): boolean;
    set required(required: boolean);
    get showIcons(): boolean;
    set showIcons(showIcons: boolean);
    get tabIndex(): number;
    set tabIndex(tabIndex: number);
    get value(): boolean;
    set value(value: boolean);
    get getHostCssClasses(): string;
    get getDisabled(): string;
    private _value;
    private _disabled;
    private _required;
    private _showIcons;
    private _tabIndex;
    constructor(cdr: ChangeDetectorRef);
    toggle(): void;
    onBlur(): void;
    writeValue(val: unknown): void;
    registerOnChange(fn: (_: unknown) => void): void;
    registerOnTouched(fn: () => void): void;
    private onTouchedCallback;
    private onChangeCallback;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ToggleComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<ToggleComponent, "ngx-toggle", ["ngxToggle"], { "id": "id"; "name": "name"; "disabled": "disabled"; "required": "required"; "showIcons": "showIcons"; "tabIndex": "tabIndex"; "label": "label"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=toggle.component.d.ts.map