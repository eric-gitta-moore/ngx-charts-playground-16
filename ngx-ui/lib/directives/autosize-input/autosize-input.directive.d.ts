import { AfterContentChecked, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { NgModel } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class AutoSizeInputDirective implements AfterContentChecked, AfterViewInit {
    private element;
    private ngModel;
    private renderer;
    extraWidth: number;
    includeBorders: boolean;
    includePadding: boolean;
    includePlaceholder: boolean;
    maxWidth: number;
    minWidth: number;
    setParentWidth: boolean;
    constructor(element: ElementRef, ngModel: NgModel, renderer: Renderer2);
    get borderWidth(): number;
    get paddingWidth(): number;
    ngAfterContentChecked(): void;
    ngAfterViewInit(): void;
    onInput(): void;
    setWidth(width: number): void;
    setWidthUsingText(text: string): void;
    textWidth(value: string): number;
    updateWidth(): void;
    private _getProperty;
    private _getPropertyWidth;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<AutoSizeInputDirective, [null, { optional: true; }, null]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<AutoSizeInputDirective, "[autoSizeInput]", never, { "extraWidth": "extraWidth"; "includeBorders": "includeBorders"; "includePadding": "includePadding"; "includePlaceholder": "includePlaceholder"; "maxWidth": "maxWidth"; "minWidth": "minWidth"; "setParentWidth": "setParentWidth"; }, {}, never>;
}

//# sourceMappingURL=autosize-input.directive.d.ts.map