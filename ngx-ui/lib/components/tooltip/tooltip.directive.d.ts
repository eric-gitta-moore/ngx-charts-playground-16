import { ElementRef, EventEmitter, NgZone, OnDestroy, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { PlacementTypes } from '../../utils/position/placement-type.enum';
import { AlignmentTypes } from '../../utils/position/alignment-types.enum';
import { ShowTypes } from './show-types.enum';
import { StyleTypes } from './style-types.enum';
import { TooltipService } from './tooltip.service';
import * as ɵngcc0 from '@angular/core';
export declare class TooltipDirective implements OnDestroy {
    private readonly ngZone;
    private readonly tooltipService;
    private readonly viewContainerRef;
    private readonly renderer;
    private readonly element;
    tooltipCssClass: string;
    tooltipTitle: string;
    tooltipPlacement: PlacementTypes;
    tooltipAlignment: AlignmentTypes;
    tooltipType: StyleTypes;
    tooltipTemplate: TemplateRef<any>;
    tooltipShowEvent: ShowTypes;
    tooltipContext: any;
    get tooltipSpacing(): number;
    set tooltipSpacing(val: number);
    get tooltipDisabled(): boolean;
    set tooltipDisabled(val: boolean);
    get tooltipShowCaret(): boolean;
    set tooltipShowCaret(val: boolean);
    get tooltipCloseOnClickOutside(): boolean;
    set tooltipCloseOnClickOutside(val: boolean);
    get tooltipCloseOnMouseLeave(): boolean;
    set tooltipCloseOnMouseLeave(val: boolean);
    get tooltipHideTimeout(): number;
    set tooltipHideTimeout(val: number);
    get tooltipShowTimeout(): number;
    set tooltipShowTimeout(val: number);
    show: EventEmitter<boolean>;
    hide: EventEmitter<boolean>;
    private _tooltipSpacing;
    private _tooltipDisabled;
    private _tooltipShowCaret;
    private _tooltipCloseOnClickOutside;
    private _tooltipCloseOnMouseLeave;
    private _tooltipHideTimeout;
    private _tooltipShowTimeout;
    private get listensForFocus();
    private get listensForHover();
    private component;
    private timeout;
    private mouseLeaveContentEvent;
    private mouseEnterContentEvent;
    private documentClickEvent;
    constructor(ngZone: NgZone, tooltipService: TooltipService, viewContainerRef: ViewContainerRef, renderer: Renderer2, element: ElementRef<HTMLElement>);
    ngOnDestroy(): void;
    onFocus(): void;
    onBlur(): void;
    onMouseEnter(): void;
    onMouseLeave(event: {
        toElement: Node;
    }): void;
    onMouseClick(): void;
    showTooltip(immediate?: boolean): void;
    hideTooltip(immediate?: boolean): void;
    addHideListeners(tooltip: HTMLElement): void;
    private createBoundOptions;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TooltipDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<TooltipDirective, "[ngx-tooltip]", ["ngxTooltip"], { "tooltipCssClass": "tooltipCssClass"; "tooltipTitle": "tooltipTitle"; "tooltipPlacement": "tooltipPlacement"; "tooltipAlignment": "tooltipAlignment"; "tooltipType": "tooltipType"; "tooltipShowEvent": "tooltipShowEvent"; "tooltipSpacing": "tooltipSpacing"; "tooltipDisabled": "tooltipDisabled"; "tooltipShowCaret": "tooltipShowCaret"; "tooltipCloseOnClickOutside": "tooltipCloseOnClickOutside"; "tooltipCloseOnMouseLeave": "tooltipCloseOnMouseLeave"; "tooltipHideTimeout": "tooltipHideTimeout"; "tooltipShowTimeout": "tooltipShowTimeout"; "tooltipTemplate": "tooltipTemplate"; "tooltipContext": "tooltipContext"; }, { "show": "show"; "hide": "hide"; }, never>;
}

//# sourceMappingURL=tooltip.directive.d.ts.map