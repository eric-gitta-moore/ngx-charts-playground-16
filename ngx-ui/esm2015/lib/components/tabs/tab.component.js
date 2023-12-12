import { Component, Input, ContentChild, ElementRef, Renderer2, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { IfTabActiveDirective } from './if-tab-active.directive';
/**
 * TODO: Remove hidden when https://github.com/angular/angular/issues/18310 is resolved
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["labelIsStringTmpl"];
function TabComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div");
} }
function TabComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementContainer(1, 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.template.templateRef);
} }
function TabComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TabComponent_ng_template_1_div_0_Template, 2, 1, "div", 4);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.active);
} }
function TabComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("hidden", !ctx_r4.active);
} }
function TabComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵtextInterpolate(ctx_r6.label);
} }
const _c1 = ["*"];
export class TabComponent {
    constructor(cdr, renderer, elRef) {
        this.cdr = cdr;
        this.renderer = renderer;
        this.elRef = elRef;
        this.title = '';
        this.label = '';
        this.active = false;
        this.disabled = false;
        this.inputChanges = new EventEmitter();
    }
    ngOnInit() {
        // backwards compatibility
        if (this.title) {
            this.label = this.title;
            this.renderer.removeAttribute(this.elRef.nativeElement, 'title');
        }
        this.labelTemplate = typeof this.label === 'string' ? this.labelStringTemplate : this.label;
    }
    ngOnChanges(changes) {
        this.inputChanges.emit(changes);
    }
    detectChanges() {
        this.cdr.detectChanges();
    }
}
TabComponent.ɵfac = function TabComponent_Factory(t) { return new (t || TabComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
TabComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: TabComponent, selectors: [["ngx-tab"]], contentQueries: function TabComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, IfTabActiveDirective, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, viewQuery: function TabComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.labelStringTemplate = _t.first);
    } }, hostAttrs: [1, "ngx-tab"], inputs: { title: "title", label: "label", active: "active", disabled: "disabled" }, outputs: { inputChanges: "inputChanges" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 7, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["template_container", ""], ["content_container", ""], ["labelIsStringTmpl", ""], [4, "ngIf"], [3, "ngTemplateOutlet"], [3, "hidden"]], template: function TabComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, TabComponent_div_0_Template, 1, 0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, TabComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(3, TabComponent_ng_template_3_Template, 2, 1, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(5, TabComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(2);
        const _r3 = ɵngcc0.ɵɵreference(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx.template)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
TabComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef }
];
TabComponent.propDecorators = {
    title: [{ type: Input }],
    label: [{ type: Input }],
    active: [{ type: Input }],
    disabled: [{ type: Input }],
    inputChanges: [{ type: Output }],
    labelStringTemplate: [{ type: ViewChild, args: ['labelIsStringTmpl', { static: true },] }],
    template: [{ type: ContentChild, args: [IfTabActiveDirective,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TabComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-tab',
                template: "<div *ngIf=\"template; then template_container; else content_container\"></div>\n<ng-template #template_container>\n  <div *ngIf=\"active\">\n    <ng-container [ngTemplateOutlet]=\"template.templateRef\"></ng-container>\n  </div>\n</ng-template>\n<ng-template #content_container>\n  <div [hidden]=\"!active\">\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n<ng-template #labelIsStringTmpl>{{ label }}</ng-template>\n",
                host: {
                    class: 'ngx-tab'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }]; }, { title: [{
            type: Input
        }], label: [{
            type: Input
        }], active: [{
            type: Input
        }], disabled: [{
            type: Input
        }], inputChanges: [{
            type: Output
        }], labelStringTemplate: [{
            type: ViewChild,
            args: ['labelIsStringTmpl', { static: true }]
        }], template: [{
            type: ContentChild,
            args: [IfTabActiveDirective]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy90YWJzL3RhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEVBRVQsU0FBUyxFQUNULHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsWUFBWSxFQUNaLE1BQU0sRUFHUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVqRTtBQUNBO0FBQ0EsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTSCxNQUFNLE9BQU8sWUFBWTtBQUFHLElBWTFCLFlBQW9CLEdBQXNCLEVBQVUsUUFBbUIsRUFBVSxLQUFpQjtBQUFJLFFBQWxGLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsUUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFXO0FBQUMsUUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFZO0FBQUMsUUFYMUYsVUFBSyxHQUFHLEVBQUUsQ0FBQztBQUN0QixRQUFXLFVBQUssR0FBOEIsRUFBRSxDQUFDO0FBQ2pELFFBQVcsV0FBTSxHQUFHLEtBQUssQ0FBQztBQUMxQixRQUFXLGFBQVEsR0FBRyxLQUFLLENBQUM7QUFDNUIsUUFDWSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO0FBQzdELElBS3VHLENBQUM7QUFDeEcsSUFDRSxRQUFRO0FBQUssUUFDWCwwQkFBMEI7QUFDOUIsUUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDcEIsWUFBTSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDOUIsWUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN2RSxTQUFLO0FBQ0wsUUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNoRyxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVcsQ0FBQyxPQUFzQjtBQUFJLFFBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BDLElBQUUsQ0FBQztBQUNILElBQ0UsYUFBYTtBQUFLLFFBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDN0IsSUFBRSxDQUFDO0FBQ0g7d0NBdkNDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsU0FBUyxrQkFDbkI7Ozs7O3dCQUFtQyxrQkFDbkMsSUFBSSxFQUFFLHNCQUNKLEtBQUssRUFBRSxTQUFTO2lCQUNqQixrQkFDRCxlQUFlLEVBQUU7RUFBdUIsQ0FBQyxNQUFNLGNBQ2hEOzs7Ozs7Ozs7Ozs7OztxR0FDSTtBQUFDO0FBQXNDLFlBbkIxQyxpQkFBaUI7QUFDakIsWUFMQSxTQUFTO0FBQ1QsWUFGQSxVQUFVO0FBQ1g7QUFBRztBQUdKLG9CQXFCRyxLQUFLO0FBQUssb0JBQ1YsS0FBSztBQUFLLHFCQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUssMkJBRVYsTUFBTTtBQUFLLGtDQUVYLFNBQVMsU0FBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFBTyx1QkFDdEQsWUFBWSxTQUFDLG9CQUFvQjtBQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElmVGFiQWN0aXZlRGlyZWN0aXZlIH0gZnJvbSAnLi9pZi10YWItYWN0aXZlLmRpcmVjdGl2ZSc7XG5cbi8qKlxuICogVE9ETzogUmVtb3ZlIGhpZGRlbiB3aGVuIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE4MzEwIGlzIHJlc29sdmVkXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC10YWInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbmd4LXRhYidcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiA9ICcnO1xuICBASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgaW5wdXRDaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcjxTaW1wbGVDaGFuZ2VzPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2xhYmVsSXNTdHJpbmdUbXBsJywgeyBzdGF0aWM6IHRydWUgfSkgbGFiZWxTdHJpbmdUZW1wbGF0ZTtcbiAgQENvbnRlbnRDaGlsZChJZlRhYkFjdGl2ZURpcmVjdGl2ZSkgdGVtcGxhdGU6IElmVGFiQWN0aXZlRGlyZWN0aXZlO1xuICBsYWJlbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgaWYgKHRoaXMudGl0bGUpIHtcbiAgICAgIHRoaXMubGFiZWwgPSB0aGlzLnRpdGxlO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAndGl0bGUnKTtcbiAgICB9XG5cbiAgICB0aGlzLmxhYmVsVGVtcGxhdGUgPSB0eXBlb2YgdGhpcy5sYWJlbCA9PT0gJ3N0cmluZycgPyB0aGlzLmxhYmVsU3RyaW5nVGVtcGxhdGUgOiB0aGlzLmxhYmVsO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRDaGFuZ2VzLmVtaXQoY2hhbmdlcyk7XG4gIH1cblxuICBkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIl19