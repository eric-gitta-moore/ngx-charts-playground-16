import { ChangeDetectorRef, TemplateRef } from '@angular/core';
import { ProgressSpinnerMode } from './progress-spinner-mode.enum';
import * as ɵngcc0 from '@angular/core';
export declare enum SpinnerAppearance {
    Default = "default",
    Icon = "icon"
}
export interface SpinnerLabel {
    inProgressLabel: string;
    completeLabel: string;
    failLabel: string;
}
export declare class ProgressSpinnerComponent {
    private readonly _cdr;
    mode: ProgressSpinnerMode;
    color: string;
    failStatusColor: string;
    appearance: SpinnerAppearance;
    inProgressIcon?: TemplateRef<any>;
    completeIcon?: TemplateRef<any>;
    failIcon?: TemplateRef<any>;
    isFailure: boolean;
    spinnerLabel?: SpinnerLabel;
    get value(): number;
    set value(v: number);
    get total(): number;
    set total(t: number);
    get diameter(): number;
    set diameter(d: number);
    get strokeWidth(): number;
    set strokeWidth(s: number);
    get radius(): number;
    get strokeDasharray(): string;
    get strokeDashoffset(): number;
    get percentage(): number;
    get isComplete(): boolean;
    get indeterminateClass(): boolean;
    get spinnerColor(): string;
    get showIcon(): boolean;
    readonly uid: string;
    readonly ProgressSpinnerMode: typeof ProgressSpinnerMode;
    private _value;
    private _total;
    private _diameter;
    private _strokeWidth;
    private readonly _indeterminate;
    private get _circumference();
    private get _modeValue();
    private get _modeTotal();
    constructor(_cdr: ChangeDetectorRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ProgressSpinnerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<ProgressSpinnerComponent, "ngx-progress-spinner", ["ngxProgressSpinner"], { "mode": "mode"; "color": "color"; "failStatusColor": "failStatusColor"; "appearance": "appearance"; "value": "value"; "total": "total"; "diameter": "diameter"; "strokeWidth": "strokeWidth"; "spinnerColor": "spinnerColor"; "inProgressIcon": "inProgressIcon"; "completeIcon": "completeIcon"; "failIcon": "failIcon"; "isFailure": "isFailure"; "spinnerLabel": "spinnerLabel"; }, {}, never, never>;
}

//# sourceMappingURL=progress-spinner.component.d.ts.map