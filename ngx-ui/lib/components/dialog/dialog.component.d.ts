import { ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { DialogFormat } from './dialog-format.enum';
import * as ɵngcc0 from '@angular/core';
export declare class DialogComponent implements OnInit, OnDestroy {
    private readonly element;
    private readonly renderer2;
    id: string;
    title: string;
    dialogTitle: string;
    content: string;
    template: TemplateRef<any>;
    cssClass: string;
    context: any;
    class: string;
    format: DialogFormat;
    get closeOnBlur(): boolean;
    set closeOnBlur(closeOnBlur: boolean);
    get closeOnEscape(): boolean;
    set closeOnEscape(closeOnEscape: boolean);
    get closeButton(): boolean;
    set closeButton(closeButton: boolean);
    get visible(): boolean;
    set visible(visible: boolean);
    get zIndex(): number;
    set zIndex(zIndex: number);
    open: EventEmitter<boolean | void>;
    close: EventEmitter<boolean | void>;
    get contentzIndex(): number;
    get visibleState(): "active" | "inactive";
    readonly DialogFormat: typeof DialogFormat;
    private _closeOnBlur?;
    private _closeOnEscape?;
    private _closeButton?;
    private _visible?;
    private _zIndex?;
    constructor(element: ElementRef, renderer2: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    show(): void;
    hide(): void;
    containsTarget(target: any): boolean;
    onEscapeKeyDown(): void;
    onDocumentClick(target: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DialogComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<DialogComponent, "ngx-dialog", ["ngxDialog"], { "format": "format"; "closeOnBlur": "closeOnBlur"; "closeOnEscape": "closeOnEscape"; "closeButton": "closeButton"; "visible": "visible"; "zIndex": "zIndex"; "dialogTitle": "dialogTitle"; "id": "id"; "title": "title"; "content": "content"; "template": "template"; "cssClass": "cssClass"; "context": "context"; "class": "class"; }, { "open": "open"; "close": "close"; }, never, ["*"]>;
}

//# sourceMappingURL=dialog.component.d.ts.map