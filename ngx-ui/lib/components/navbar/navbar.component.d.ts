import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, QueryList } from '@angular/core';
import { NavbarItemComponent } from './navbar-item.component';
import { NavbarBarAnimationStates } from './navbar-bar-animation-states.enum';
import * as ɵngcc0 from '@angular/core';
export declare class NavbarComponent implements AfterViewInit, OnDestroy {
    private readonly _el;
    private readonly _cdr;
    get barAtTop(): boolean;
    set barAtTop(v: boolean);
    get active(): number;
    set active(v: number);
    activeChange: EventEmitter<number>;
    get navItems(): QueryList<NavbarItemComponent>;
    set navItems(v: QueryList<NavbarItemComponent>);
    get complete(): number;
    get barState(): NavbarBarAnimationStates;
    readonly BAR_SIZE = 40;
    private _active;
    private _barAtTop;
    private _navItems?;
    private _barState;
    private readonly _destroy$;
    private get _name();
    constructor(_el: ElementRef<HTMLElement>, _cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    goTo(index: number): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NavbarComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NavbarComponent, "ngx-navbar", ["ngxNavbar"], { "barAtTop": "barAtTop"; "active": "active"; }, { "activeChange": "activeChange"; }, ["navItems"], ["ngx-navbar-item"]>;
}

//# sourceMappingURL=navbar.component.d.ts.map