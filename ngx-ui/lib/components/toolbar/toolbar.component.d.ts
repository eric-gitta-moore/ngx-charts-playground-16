import { EventEmitter, Renderer2, ElementRef, OnInit } from '@angular/core';
import { ToolbarTitleDirective } from './toolbar-title.directive';
import { ToolbarContentDirective } from './toolbar-content.directive';
import { ToolbarMenuItem } from './toolbar-menu-item.interface';
import * as ɵngcc0 from '@angular/core';
export declare class ToolbarComponent implements OnInit {
    private renderer;
    private elRef;
    title: string;
    mainTitle: string;
    subtitle: string;
    menu: ToolbarMenuItem[];
    menuClick: EventEmitter<any>;
    toolbarTitle: ToolbarTitleDirective;
    toolbarContent: ToolbarContentDirective;
    get toolbarItems(): ToolbarMenuItem[];
    get dropdownItems(): ToolbarMenuItem[];
    constructor(renderer: Renderer2, elRef: ElementRef);
    onMenuClicked(item: ToolbarMenuItem, $event: Event): void;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ToolbarComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<ToolbarComponent, "ngx-toolbar", never, { "menu": "menu"; "mainTitle": "mainTitle"; "title": "title"; "subtitle": "subtitle"; }, { "menuClick": "menuClick"; }, never, ["ngx-toolbar-title", "ngx-toolbar-content"]>;
}

//# sourceMappingURL=toolbar.component.d.ts.map