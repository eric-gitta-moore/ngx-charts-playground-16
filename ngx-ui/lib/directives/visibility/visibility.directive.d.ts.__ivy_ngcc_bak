import { EventEmitter, ElementRef, NgZone, OnInit, OnDestroy } from '@angular/core';
/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibilityObserver
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */
export declare class VisibilityDirective implements OnInit, OnDestroy {
    private readonly element;
    private readonly zone;
    isVisible: boolean;
    visible: EventEmitter<boolean>;
    timeout: any;
    constructor(element: ElementRef<HTMLElement>, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onVisibilityChange(): void;
    runCheck(): void;
}
