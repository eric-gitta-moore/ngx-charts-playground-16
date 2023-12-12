import { EventEmitter, OnInit, OnDestroy, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ResizeObserverDirective implements OnInit, OnDestroy {
    private readonly _el;
    resize: EventEmitter<Partial<DOMRectReadOnly>>;
    private _observer;
    private _timer;
    constructor(_el: ElementRef<HTMLElement>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onResize(e: Partial<DOMRectReadOnly>): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ResizeObserverDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<ResizeObserverDirective, "[resizeObserver]", ["resizeObserver"], {}, { "resize": "resizeObserver"; }, never>;
}

//# sourceMappingURL=resize-observer.directive.d.ts.map