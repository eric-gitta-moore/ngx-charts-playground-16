import { ElementRef, EventEmitter } from '@angular/core';
import { InViewportDirective, InViewportService } from 'ng-in-viewport';
import * as ɵngcc0 from '@angular/core';
export declare class DropdownMenuDirective extends InViewportDirective {
    readonly _platformIdentifier: any;
    readonly _elementReference: ElementRef;
    readonly _insideViewport: InViewportService;
    readonly element: HTMLElement;
    constructor(_platformIdentifier: any, _elementReference: ElementRef, _insideViewport: InViewportService);
    getCallbackFn(): EventEmitter<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DropdownMenuDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<DropdownMenuDirective, "ngx-dropdown-menu", ["ngxDropdownMenu"], {}, {}, never>;
}

//# sourceMappingURL=dropdown-menu.directive.d.ts.map