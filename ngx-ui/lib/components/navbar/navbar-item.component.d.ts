import { ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class NavbarItemComponent {
    private readonly _cdr;
    private readonly _el;
    get active(): number;
    set active(v: number);
    get total(): number;
    set total(v: number);
    get index(): number;
    set index(v: number);
    activeChange: EventEmitter<number>;
    get width(): number;
    private _active?;
    private _total?;
    private _index?;
    constructor(_cdr: ChangeDetectorRef, _el: ElementRef<HTMLElement>);
    setActive(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NavbarItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NavbarItemComponent, "ngx-navbar-item", ["ngxNavbarItem"], { "active": "active"; "total": "total"; "index": "index"; }, { "activeChange": "activeChange"; }, never, ["*"]>;
}

//# sourceMappingURL=navbar-item.component.d.ts.map