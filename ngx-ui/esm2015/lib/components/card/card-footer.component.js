import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function CardFooterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.label);
} }
const _c0 = ["*"];
export class CardFooterComponent {
}
CardFooterComponent.ɵfac = function CardFooterComponent_Factory(t) { return new (t || CardFooterComponent)(); };
CardFooterComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: CardFooterComponent, selectors: [["ngx-card-footer"]], hostAttrs: [1, "ngx-card-footer"], inputs: { label: "label" }, exportAs: ["ngxCardFooter"], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["class", "ngx-card-footer--label", 4, "ngIf"], [1, "ngx-card-footer--label"]], template: function CardFooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, CardFooterComponent_div_0_Template, 2, 1, "div", 0);
        ɵngcc0.ɵɵprojection(1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.label);
    } }, directives: [ɵngcc1.NgIf], encapsulation: 2, changeDetection: 0 });
CardFooterComponent.propDecorators = {
    label: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CardFooterComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-card-footer',
                exportAs: 'ngxCardFooter',
                template: "<div *ngIf=\"label\" class=\"ngx-card-footer--label\">{{label}}</div>\n<ng-content></ng-content>",
                host: {
                    class: 'ngx-card-footer'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], null, { label: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1mb290ZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2NhcmQvY2FyZC1mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQVk3RixNQUFNLE9BQU8sbUJBQW1CO0FBQ2hDOytDQVhDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2VBQzNCLFFBQVEsRUFBRSxlQUFlLGtCQUN6Qiw0R0FBMkMsa0JBQzNDLElBQUksRUFBRSxzQkFDSixLQUFLLEVBQUUsaUJBQWlCLGtCQUN6QixrQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksY0FDdEM7Ozs7Ozs0RUFDSTtBQUFDO0FBQ0ksb0JBQVAsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtY2FyZC1mb290ZXInLFxuICBleHBvcnRBczogJ25neENhcmRGb290ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC1mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICduZ3gtY2FyZC1mb290ZXInXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENhcmRGb290ZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nOyAvLyB1c2VkIGZvciB2ZXJ0aWNhbCBjYXJkXG59XG4iXX0=