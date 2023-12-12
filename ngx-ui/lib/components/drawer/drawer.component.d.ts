import { EventEmitter, OnDestroy, TemplateRef, OnInit } from '@angular/core';
import { DrawerDirection } from './drawer-direction.enum';
import { DrawerPosition } from './drawer-position.enum';
import * as ɵngcc0 from '@angular/core';
export declare class DrawerComponent implements OnInit, OnDestroy {
    cssClass: string;
    direction: DrawerDirection;
    template: TemplateRef<any>;
    context: any;
    isRoot: boolean;
    get size(): number;
    set size(val: number);
    get zIndex(): number;
    set zIndex(val: number);
    get closeOnOutsideClick(): boolean;
    set closeOnOutsideClick(val: boolean);
    close: EventEmitter<boolean>;
    get cssClasses(): string;
    widthSize: string | number;
    heightSize: string | number;
    position: DrawerPosition;
    private get isLeft();
    private get isBottom();
    private _size;
    private _zIndex;
    private _closeOnOutsideClick;
    ngOnInit(): void;
    ngOnDestroy(): void;
    setDimensions(size: number): void;
    onEscapeKey(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DrawerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<DrawerComponent, "ngx-drawer", ["ngxDrawer"], { "cssClass": "cssClass"; "isRoot": "isRoot"; "size": "size"; "zIndex": "zIndex"; "closeOnOutsideClick": "closeOnOutsideClick"; "direction": "direction"; "template": "template"; "context": "context"; }, { "close": "close"; }, never, never>;
}

//# sourceMappingURL=drawer.component.d.ts.map