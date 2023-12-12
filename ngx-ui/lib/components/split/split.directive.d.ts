import { AfterContentInit, QueryList, ElementRef, OnChanges, OnDestroy } from '@angular/core';
import { SplitAreaDirective } from './split-area.directive';
import { SplitHandleComponent } from './split-handle.component';
import { SplitDirection } from './split-direction.enum';
import * as ɵngcc0 from '@angular/core';
export declare class SplitDirective implements AfterContentInit, OnChanges, OnDestroy {
    private readonly elementRef;
    direction: SplitDirection;
    get rowCss(): boolean;
    get columnCss(): boolean;
    readonly handles: QueryList<SplitHandleComponent>;
    readonly areas: QueryList<SplitAreaDirective>;
    private subscriptions;
    constructor(elementRef: ElementRef);
    ngAfterContentInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    resize(delta: number): void;
    private updateHandles;
    private onDblClick;
    private onDrag;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<SplitDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<SplitDirective, "[ngxSplit]", ["ngxSplit"], { "direction": "ngxSplit"; }, {}, ["handles", "areas"]>;
}

//# sourceMappingURL=split.directive.d.ts.map