import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function LargeFormatDialogHeaderTitleComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵelementStart(1, "h4");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.dialogSubtitle);
} }
const _c0 = "ngx-large-format-dialog-header-title__text-wrapper--title";
const _c1 = function () { return [_c0]; };
const _c2 = "ngx-large-format-dialog-header-title__text-wrapper--title-center";
const _c3 = function () { return [_c2]; };
export class LargeFormatDialogHeaderTitleComponent {
    constructor() {
        this.dialogTitle = '';
        this.hostClass = true;
    }
}
LargeFormatDialogHeaderTitleComponent.ɵfac = function LargeFormatDialogHeaderTitleComponent_Factory(t) { return new (t || LargeFormatDialogHeaderTitleComponent)(); };
LargeFormatDialogHeaderTitleComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: LargeFormatDialogHeaderTitleComponent, selectors: [["ngx-large-format-dialog-header-title"]], hostVars: 2, hostBindings: function LargeFormatDialogHeaderTitleComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ngx-large-format-dialog-header-title", ctx.hostClass);
    } }, inputs: { dialogTitle: "dialogTitle", dialogSubtitle: "dialogSubtitle" }, decls: 4, vars: 5, consts: [[1, "ngx-large-format-dialog-header-title__text-wrapper", 3, "ngClass"], ["class", "ngx-large-format-dialog-header-title__text-wrapper", 4, "ngIf"], [1, "ngx-large-format-dialog-header-title__text-wrapper"]], template: function LargeFormatDialogHeaderTitleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "h1");
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, LargeFormatDialogHeaderTitleComponent_div_3_Template, 3, 1, "div", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngClass", !!ctx.dialogSubtitle ? ɵngcc0.ɵɵpureFunction0(3, _c1) : ɵngcc0.ɵɵpureFunction0(4, _c3));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.dialogTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.dialogSubtitle);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf], styles: [".ngx-large-format-dialog-header-title{display:flex;flex-direction:column;grid-gap:.5rem;gap:.5rem;flex:0 0 20%;max-width:50%;height:100%;justify-content:center}.ngx-large-format-dialog-header-title__text-wrapper{height:100%;display:flex}.ngx-large-format-dialog-header-title__text-wrapper--title{align-items:flex-end}.ngx-large-format-dialog-header-title__text-wrapper--title-center{align-items:center}.ngx-large-format-dialog-header-title__text-wrapper h1,.ngx-large-format-dialog-header-title__text-wrapper h4{margin:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.ngx-large-format-dialog-header-title__text-wrapper h1{color:#fff;font-size:1.75rem;line-height:2rem}.ngx-large-format-dialog-header-title__text-wrapper h4{color:#a0aabe;font-size:1rem;line-height:.75rem}"], encapsulation: 2, changeDetection: 0 });
LargeFormatDialogHeaderTitleComponent.propDecorators = {
    dialogTitle: [{ type: Input }],
    dialogSubtitle: [{ type: Input }],
    hostClass: [{ type: HostBinding, args: ['class.ngx-large-format-dialog-header-title',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(LargeFormatDialogHeaderTitleComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-large-format-dialog-header-title',
                template: `
    <div
      class="ngx-large-format-dialog-header-title__text-wrapper"
      [ngClass]="
        !!dialogSubtitle
          ? ['ngx-large-format-dialog-header-title__text-wrapper--title']
          : ['ngx-large-format-dialog-header-title__text-wrapper--title-center']
      "
    >
      <h1>{{ dialogTitle }}</h1>
    </div>
    <div *ngIf="dialogSubtitle" class="ngx-large-format-dialog-header-title__text-wrapper">
      <h4>{{ dialogSubtitle }}</h4>
    </div>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-large-format-dialog-header-title{display:flex;flex-direction:column;grid-gap:.5rem;gap:.5rem;flex:0 0 20%;max-width:50%;height:100%;justify-content:center}.ngx-large-format-dialog-header-title__text-wrapper{height:100%;display:flex}.ngx-large-format-dialog-header-title__text-wrapper--title{align-items:flex-end}.ngx-large-format-dialog-header-title__text-wrapper--title-center{align-items:center}.ngx-large-format-dialog-header-title__text-wrapper h1,.ngx-large-format-dialog-header-title__text-wrapper h4{margin:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.ngx-large-format-dialog-header-title__text-wrapper h1{color:#fff;font-size:1.75rem;line-height:2rem}.ngx-large-format-dialog-header-title__text-wrapper h4{color:#a0aabe;font-size:1rem;line-height:.75rem}"]
            }]
    }], function () { return []; }, { dialogTitle: [{
            type: Input
        }], hostClass: [{
            type: HostBinding,
            args: ['class.ngx-large-format-dialog-header-title']
        }], dialogSubtitle: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFyZ2UtZm9ybWF0LWRpYWxvZy1oZWFkZXItdGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2RpYWxvZy9sYXJnZS1mb3JtYXQvY29tcG9uZW50cy9sYXJnZS1mb3JtYXQtZGlhbG9nLWhlYWRlci10aXRsZS9sYXJnZS1mb3JtYXQtZGlhbG9nLWhlYWRlci10aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUIxRyxNQUFNLE9BQU8scUNBQXFDO0FBQ2xELElBdEJBO0FBQ0csUUFxQlEsZ0JBQVcsR0FBRyxFQUFFLENBQUM7QUFDNUIsUUFFNkQsY0FBUyxHQUFHLElBQUksQ0FBQztBQUM5RSxJQUFBLENBQUM7QUFDRDtpRUEzQkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxzQ0FBc0M7QUFDaEQsUUFBUSxFQUFFOzt1R0FjVCxrQkFFRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7eURBQ2hELGcwQkFDSTtBQUFDO0FBQ0ksMEJBQVAsS0FBSztBQUFLLDZCQUNWLEtBQUs7QUFBSyx3QkFFVixXQUFXLFNBQUMsNENBQTRDO0FBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWxhcmdlLWZvcm1hdC1kaWFsb2ctaGVhZGVyLXRpdGxlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cIm5neC1sYXJnZS1mb3JtYXQtZGlhbG9nLWhlYWRlci10aXRsZV9fdGV4dC13cmFwcGVyXCJcbiAgICAgIFtuZ0NsYXNzXT1cIlxuICAgICAgICAhIWRpYWxvZ1N1YnRpdGxlXG4gICAgICAgICAgPyBbJ25neC1sYXJnZS1mb3JtYXQtZGlhbG9nLWhlYWRlci10aXRsZV9fdGV4dC13cmFwcGVyLS10aXRsZSddXG4gICAgICAgICAgOiBbJ25neC1sYXJnZS1mb3JtYXQtZGlhbG9nLWhlYWRlci10aXRsZV9fdGV4dC13cmFwcGVyLS10aXRsZS1jZW50ZXInXVxuICAgICAgXCJcbiAgICA+XG4gICAgICA8aDE+e3sgZGlhbG9nVGl0bGUgfX08L2gxPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgKm5nSWY9XCJkaWFsb2dTdWJ0aXRsZVwiIGNsYXNzPVwibmd4LWxhcmdlLWZvcm1hdC1kaWFsb2ctaGVhZGVyLXRpdGxlX190ZXh0LXdyYXBwZXJcIj5cbiAgICAgIDxoND57eyBkaWFsb2dTdWJ0aXRsZSB9fTwvaDQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2xhcmdlLWZvcm1hdC1kaWFsb2ctaGVhZGVyLXRpdGxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIExhcmdlRm9ybWF0RGlhbG9nSGVhZGVyVGl0bGVDb21wb25lbnQge1xuICBASW5wdXQoKSBkaWFsb2dUaXRsZSA9ICcnO1xuICBASW5wdXQoKSBkaWFsb2dTdWJ0aXRsZT86IHN0cmluZztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5neC1sYXJnZS1mb3JtYXQtZGlhbG9nLWhlYWRlci10aXRsZScpIGhvc3RDbGFzcyA9IHRydWU7XG59XG4iXX0=