import { EventEmitter, OnInit, OnDestroy, ElementRef } from '@angular/core';
export declare class ResizeObserverDirective implements OnInit, OnDestroy {
    private readonly _el;
    resize: EventEmitter<Partial<DOMRectReadOnly>>;
    private _observer;
    private _timer;
    constructor(_el: ElementRef<HTMLElement>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onResize(e: Partial<DOMRectReadOnly>): void;
}
