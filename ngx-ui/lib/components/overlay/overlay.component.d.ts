import { ChangeDetectorRef, EventEmitter } from '@angular/core';
/**
 * Overlay Component for Drawer/Dialogs
 */
import * as ɵngcc0 from '@angular/core';
export declare class OverlayComponent {
    private readonly cdr;
    get visible(): boolean;
    set visible(val: boolean);
    get zIndex(): number;
    set zIndex(val: number);
    click: EventEmitter<boolean>;
    get animationState(): string;
    private _visible;
    private _zIndex;
    constructor(cdr: ChangeDetectorRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<OverlayComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<OverlayComponent, "ngx-overlay", ["ngxOverlay"], { "visible": "visible"; "zIndex": "zIndex"; }, { "click": "click"; }, never, ["*"]>;
}

//# sourceMappingURL=overlay.component.d.ts.map