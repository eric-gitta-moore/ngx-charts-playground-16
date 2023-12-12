import { EventEmitter, ElementRef, Renderer2, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { PlusMenuPosition } from './plus-menu-position.enum';
import * as ɵngcc0 from '@angular/core';
export interface PlusMenuItem {
    title: string;
    subtitle?: string;
    icon: string;
    color?: string;
}
export declare class PlusMenuComponent implements OnInit, OnDestroy {
    private readonly elementRef;
    private readonly renderer;
    private readonly cdr;
    items: PlusMenuItem[];
    position: PlusMenuPosition;
    menuTitle: string;
    closeOnClickOutside: boolean;
    menuColor: string;
    clickItem: EventEmitter<any>;
    toggleMenu: EventEmitter<boolean>;
    get itemColor0(): string;
    get itemColor1(): string;
    get itemColor2(): string;
    get p(): string;
    open: boolean;
    get hasThree(): boolean;
    uid: string;
    readonly PlusMenuPosition: typeof PlusMenuPosition;
    private documentClickEvent;
    constructor(elementRef: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onClickOpenClose(): void;
    onClickItem(index: number): void;
    private openMenu;
    private closeMenu;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<PlusMenuComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<PlusMenuComponent, "ngx-plus-menu", never, { "items": "items"; "position": "position"; "menuTitle": "menuTitle"; "closeOnClickOutside": "closeOnClickOutside"; "menuColor": "menuColor"; "hasThree": "hasThree"; }, { "clickItem": "clickItem"; "toggleMenu": "toggleMenu"; }, never, never>;
}

//# sourceMappingURL=plus-menu.component.d.ts.map