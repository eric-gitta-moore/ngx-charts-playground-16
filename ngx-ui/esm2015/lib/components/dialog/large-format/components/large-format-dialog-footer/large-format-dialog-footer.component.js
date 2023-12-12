import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
export class LargeFormatDialogFooterComponent {
    constructor() {
        this.hostClass = true;
    }
    get footerStyle() {
        if (this.styleClass) {
            return this.styleClass;
        }
        return 'ngx-large-format-dialog-footer--default';
    }
}
LargeFormatDialogFooterComponent.ɵfac = function LargeFormatDialogFooterComponent_Factory(t) { return new (t || LargeFormatDialogFooterComponent)(); };
LargeFormatDialogFooterComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: LargeFormatDialogFooterComponent, selectors: [["ngx-large-format-dialog-footer"]], hostVars: 4, hostBindings: function LargeFormatDialogFooterComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.footerStyle);
        ɵngcc0.ɵɵclassProp("ngx-large-format-dialog-footer", ctx.hostClass);
    } }, inputs: { styleClass: "styleClass" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function LargeFormatDialogFooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, styles: [".ngx-large-format-dialog-footer{--item-gap:0.5rem}.ngx-large-format-dialog-footer--default{display:flex;justify-content:center;align-items:center;grid-gap:var(--item-gap);gap:var(--item-gap)}"], encapsulation: 2, changeDetection: 0 });
LargeFormatDialogFooterComponent.propDecorators = {
    styleClass: [{ type: Input }],
    footerStyle: [{ type: HostBinding, args: ['class',] }],
    hostClass: [{ type: HostBinding, args: ['class.ngx-large-format-dialog-footer',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(LargeFormatDialogFooterComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-large-format-dialog-footer',
                template: ' <ng-content></ng-content>',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-large-format-dialog-footer{--item-gap:0.5rem}.ngx-large-format-dialog-footer--default{display:flex;justify-content:center;align-items:center;grid-gap:var(--item-gap);gap:var(--item-gap)}"]
            }]
    }], function () { return []; }, { hostClass: [{
            type: HostBinding,
            args: ['class.ngx-large-format-dialog-footer']
        }], footerStyle: [{
            type: HostBinding,
            args: ['class']
        }], styleClass: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFyZ2UtZm9ybWF0LWRpYWxvZy1mb290ZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2RpYWxvZy9sYXJnZS1mb3JtYXQvY29tcG9uZW50cy9sYXJnZS1mb3JtYXQtZGlhbG9nLWZvb3Rlci9sYXJnZS1mb3JtYXQtZGlhbG9nLWZvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUzFHLE1BQU0sT0FBTyxnQ0FBZ0M7QUFDN0MsSUFSQTtBQUNHLFFBZ0JvRCxjQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3hFLElBQUEsQ0FBQztBQUNELElBVEUsSUFBMEIsV0FBVztBQUN2QyxRQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUN6QixZQUFNLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUM3QixTQUFLO0FBQ0wsUUFBSSxPQUFPLHlDQUF5QyxDQUFDO0FBQ3JELElBQUUsQ0FBQztBQUNIOzREQWhCQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztJQUMxQyxRQUFRLEVBQUUsNEJBQTRCLGtCQUV0QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07OzRFQUNoRDs7Ozs4UEFDSTtBQUFDO0FBQ0kseUJBQVAsS0FBSztBQUFLLDBCQUVWLFdBQVcsU0FBQyxPQUFPO0FBQU8sd0JBTzFCLFdBQVcsU0FBQyxzQ0FBc0M7QUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1sYXJnZS1mb3JtYXQtZGlhbG9nLWZvb3RlcicsXG4gIHRlbXBsYXRlOiAnIDxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBzdHlsZVVybHM6IFsnLi9sYXJnZS1mb3JtYXQtZGlhbG9nLWZvb3Rlci5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMYXJnZUZvcm1hdERpYWxvZ0Zvb3RlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHN0eWxlQ2xhc3M/OiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGdldCBmb290ZXJTdHlsZSgpIHtcbiAgICBpZiAodGhpcy5zdHlsZUNsYXNzKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHlsZUNsYXNzO1xuICAgIH1cbiAgICByZXR1cm4gJ25neC1sYXJnZS1mb3JtYXQtZGlhbG9nLWZvb3Rlci0tZGVmYXVsdCc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5neC1sYXJnZS1mb3JtYXQtZGlhbG9nLWZvb3RlcicpIGhvc3RDbGFzcyA9IHRydWU7XG59XG4iXX0=