import { ChangeDetectorRef, EventEmitter, OnInit, ElementRef, QueryList } from '@angular/core';
import { StepContentDirective } from './step-content.directive';
import * as ɵngcc0 from '@angular/core';
export declare class StepComponent implements OnInit {
    private readonly _cdr;
    private readonly _el;
    label?: string;
    get icon(): string;
    set icon(v: string);
    get completeIcon(): string;
    set completeIcon(v: string);
    get active(): number;
    set active(v: number);
    get step(): number;
    set step(v: number);
    get total(): number;
    set total(v: number);
    activeChange: EventEmitter<number>;
    readonly content?: QueryList<StepContentDirective>;
    get height(): number;
    get width(): number;
    get stepHeight(): number;
    get stepWidth(): number;
    private _active?;
    private _step?;
    private _total?;
    private _icon?;
    private _completeIcon?;
    constructor(_cdr: ChangeDetectorRef, _el: ElementRef<HTMLElement>);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<StepComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<StepComponent, "ngx-step", ["ngxStep"], { "icon": "icon"; "completeIcon": "completeIcon"; "active": "active"; "step": "step"; "total": "total"; "label": "label"; }, { "activeChange": "activeChange"; }, ["content"], never>;
}

//# sourceMappingURL=step.component.d.ts.map