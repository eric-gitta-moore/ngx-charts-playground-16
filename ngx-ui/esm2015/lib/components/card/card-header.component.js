import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function CardHeaderComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.label);
} }
const _c0 = [[["ngx-card-avatar"]], "*", [["ngx-card-tag"]], [["ngx-card-title"]], [["ngx-card-subtitle"]]];
const _c1 = ["ngx-card-avatar", "*", "ngx-card-tag", "ngx-card-title", "ngx-card-subtitle"];
export class CardHeaderComponent {
}
CardHeaderComponent.ɵfac = function CardHeaderComponent_Factory(t) { return new (t || CardHeaderComponent)(); };
CardHeaderComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: CardHeaderComponent, selectors: [["ngx-card-header"]], hostAttrs: [1, "ngx-card-header"], inputs: { label: "label" }, exportAs: ["ngxCardHeader"], ngContentSelectors: _c1, decls: 7, vars: 1, consts: [[1, "ngx-card-header--title-group"], ["class", "ngx-card-header--label", 4, "ngIf"], [1, "ngx-card-header--label"]], template: function CardHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵprojection(2, 1);
        ɵngcc0.ɵɵprojection(3, 2);
        ɵngcc0.ɵɵprojection(4, 3);
        ɵngcc0.ɵɵprojection(5, 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, CardHeaderComponent_div_6_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵproperty("ngIf", ctx.label);
    } }, directives: [ɵngcc1.NgIf], encapsulation: 2, changeDetection: 0 });
CardHeaderComponent.propDecorators = {
    label: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CardHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-card-header',
                exportAs: 'ngxCardHeader',
                template: "<ng-content select=\"ngx-card-avatar\"></ng-content>\n\n<div class=\"ngx-card-header--title-group\">\n  <ng-content></ng-content>\n  <ng-content select=\"ngx-card-tag\"></ng-content>\n  <ng-content select=\"ngx-card-title\"></ng-content>\n  <ng-content select=\"ngx-card-subtitle\"></ng-content>\n</div>\n\n<div *ngIf=\"label\" class=\"ngx-card-header--label\">{{label}}</div>\n\n",
                host: {
                    class: 'ngx-card-header'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], null, { label: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2NhcmQvY2FyZC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFZN0YsTUFBTSxPQUFPLG1CQUFtQjtBQUNoQzsrQ0FYQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtlQUMzQixRQUFRLEVBQUUsZUFBZSxrQkFDekIsd1lBQTJDO0lBQzNDLElBQUksRUFBRSxzQkFDSjtBQUFLLEVBQUUsaUJBQWlCO0tBQ3pCLGtCQUNELGVBQWUsRUFBRTttQkFBdUIsQ0FBQyxNQUFNO1NBQy9DLGFBQWEsRUFBRTtNQUFpQixDQUFDLElBQUksY0FDdEM7Ozs7Ozs7NEVBQ0k7QUFBQztBQUNJLG9CQUFQLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWNhcmQtaGVhZGVyJyxcbiAgZXhwb3J0QXM6ICduZ3hDYXJkSGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbmd4LWNhcmQtaGVhZGVyJ1xuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkSGVhZGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZzsgLy8gdXNlZCBmb3IgdmVydGljYWwgY2FyZFxufVxuIl19