import { AfterViewInit, ElementRef, Renderer2, TemplateRef } from '@angular/core';
import { AlignmentTypes } from '../../utils/position/alignment-types.enum';
import { PlacementTypes } from '../../utils/position/placement-type.enum';
import { StyleTypes } from './style-types.enum';
import * as ɵngcc0 from '@angular/core';
export declare class TooltipContentComponent implements AfterViewInit {
    readonly element: ElementRef<HTMLElement>;
    private readonly renderer;
    readonly caretElm: ElementRef<HTMLSpanElement>;
    host: ElementRef<HTMLElement>;
    type: StyleTypes;
    placement: PlacementTypes;
    alignment: AlignmentTypes;
    cssClass: string;
    title: string;
    template: TemplateRef<any>;
    context: any;
    get showCaret(): boolean;
    set showCaret(val: boolean);
    get spacing(): number;
    set spacing(val: number);
    private _spacing;
    private _showCaret;
    get cssClasses(): string;
    constructor(element: ElementRef<HTMLElement>, renderer: Renderer2);
    ngAfterViewInit(): void;
    onWindowResize(): void;
    position(): void;
    private positionContent;
    private positionCaret;
    private checkFlip;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TooltipContentComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<TooltipContentComponent, "ngx-tooltip-content", ["ngxTooltipContent"], { "showCaret": "showCaret"; "spacing": "spacing"; "placement": "placement"; "host": "host"; "type": "type"; "alignment": "alignment"; "cssClass": "cssClass"; "title": "title"; "template": "template"; "context": "context"; }, {}, never, never>;
}

//# sourceMappingURL=tooltip.component.d.ts.map