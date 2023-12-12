import { TemplateRef, ElementRef, Renderer2, OnInit, ChangeDetectorRef, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { IfTabActiveDirective } from './if-tab-active.directive';
/**
 * TODO: Remove hidden when https://github.com/angular/angular/issues/18310 is resolved
 */
import * as ɵngcc0 from '@angular/core';
export declare class TabComponent implements OnInit, OnChanges {
    private cdr;
    private renderer;
    private elRef;
    title: string;
    label: string | TemplateRef<any>;
    active: boolean;
    disabled: boolean;
    inputChanges: EventEmitter<SimpleChanges>;
    labelStringTemplate: any;
    template: IfTabActiveDirective;
    labelTemplate: TemplateRef<any>;
    constructor(cdr: ChangeDetectorRef, renderer: Renderer2, elRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    detectChanges(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TabComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<TabComponent, "ngx-tab", never, { "title": "title"; "label": "label"; "active": "active"; "disabled": "disabled"; }, { "inputChanges": "inputChanges"; }, ["template"], ["*"]>;
}

//# sourceMappingURL=tab.component.d.ts.map