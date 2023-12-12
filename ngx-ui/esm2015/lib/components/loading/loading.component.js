import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function LoadingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵelement(1, "div", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("width", ctx_r0.progress, "%");
} }
export class LoadingComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this._visible = false;
        this._progress = 0;
    }
    get visible() {
        return this._visible;
    }
    set visible(visible) {
        this._visible = coerceBooleanProperty(visible);
        this.cdr.markForCheck();
    }
    get progress() {
        return this._progress;
    }
    set progress(progress) {
        this._progress = coerceNumberProperty(progress);
        this.cdr.markForCheck();
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
LoadingComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: LoadingComponent, selectors: [["ngx-loading-bar"]], hostAttrs: [1, "ngx-loading-bar"], inputs: { visible: "visible", progress: "progress" }, exportAs: ["ngxLoadingBar"], decls: 1, vars: 1, consts: [["class", "ngx-loading-bar--container", 4, "ngIf"], [1, "ngx-loading-bar--container"], [1, "ngx-loading-bar--bar"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, LoadingComponent_div_0_Template, 2, 2, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.visible);
    } }, directives: [ɵngcc1.NgIf], styles: [".ngx-loading-bar{display:block}.ngx-loading-bar .ngx-loading-bar--container{position:fixed;margin:0;padding:0;top:0;left:0;right:0;z-index:99999}.ngx-loading-bar .ngx-loading-bar--container .ngx-loading-bar--bar{background-color:#7ab9ff;color:#7ab9ff;opacity:1;z-index:99998;box-shadow:0 0 10px 0;height:2px;transition:all .5s ease-in-out}"], encapsulation: 2, changeDetection: 0 });
LoadingComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
LoadingComponent.propDecorators = {
    visible: [{ type: Input }],
    progress: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(LoadingComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxLoadingBar',
                selector: 'ngx-loading-bar',
                template: "<div class=\"ngx-loading-bar--container\" *ngIf=\"visible\">\n  <div class=\"ngx-loading-bar--bar\" [style.width.%]=\"progress\"></div>\n</div>\n",
                host: { class: 'ngx-loading-bar' },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-loading-bar{display:block}.ngx-loading-bar .ngx-loading-bar--container{position:fixed;margin:0;padding:0;top:0;left:0;right:0;z-index:99999}.ngx-loading-bar .ngx-loading-bar--container .ngx-loading-bar--bar{background-color:#7ab9ff;color:#7ab9ff;opacity:1;z-index:99998;box-shadow:0 0 10px 0;height:2px;transition:all .5s ease-in-out}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { visible: [{
            type: Input
        }], progress: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVdwRixNQUFNLE9BQU8sZ0JBQWdCO0FBQzdCLElBcUJFLFlBQW9CLEdBQXNCO0FBQUksUUFBMUIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7QUFBQyxRQUhuQyxhQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzNCLFFBQVUsY0FBUyxHQUFHLENBQUMsQ0FBQztBQUN4QixJQUMrQyxDQUFDO0FBQ2hELElBdEJFLElBQ0ksT0FBTztBQUNiLFFBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ3pCLElBQUUsQ0FBQztBQUNILElBQUUsSUFBSSxPQUFPLENBQUMsT0FBZ0I7QUFDOUIsUUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25ELFFBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUM1QixJQUFFLENBQUM7QUFDSCxJQUNFLElBQ0ksUUFBUTtBQUNkLFFBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQzFCLElBQUUsQ0FBQztBQUNILElBQUUsSUFBSSxRQUFRLENBQUMsUUFBZ0I7QUFDL0IsUUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3BELFFBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUM1QixJQUFFLENBQUM7QUFDSDs0Q0EzQkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxlQUFlLGtCQUN6QixRQUFRLEVBQUUsaUJBQWlCO2NBQzNCLDZKQUF1QyxrQkFFdkMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLGtCQUNsQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Ozs7MkhBQ2hELGtUQUNJO0FBQUM7QUFFRCxZQWRrRSxpQkFBaUI7QUFBRztBQUFHO0FBQzdFLHNCQVlkLEtBQUs7QUFDTix1QkFRQyxLQUFLO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSwgY29lcmNlTnVtYmVyUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICduZ3hMb2FkaW5nQmFyJyxcbiAgc2VsZWN0b3I6ICduZ3gtbG9hZGluZy1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmcuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDogeyBjbGFzczogJ25neC1sb2FkaW5nLWJhcicgfSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGdldCB2aXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICB9XG4gIHNldCB2aXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92aXNpYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZpc2libGUpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHByb2dyZXNzKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9ncmVzcztcbiAgfVxuICBzZXQgcHJvZ3Jlc3MocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgIHRoaXMuX3Byb2dyZXNzID0gY29lcmNlTnVtYmVyUHJvcGVydHkocHJvZ3Jlc3MpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmlzaWJsZSA9IGZhbHNlO1xuICBwcml2YXRlIF9wcm9ncmVzcyA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxufVxuIl19