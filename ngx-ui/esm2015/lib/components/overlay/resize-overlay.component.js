import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { map, startWith } from 'rxjs/operators';
import { HotkeysService } from '../hotkeys/hotkeys.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/layout';
import * as ɵngcc2 from '../hotkeys/hotkeys.service';
import * as ɵngcc3 from './overlay.component';
import * as ɵngcc4 from '../icon/icon.component';
import * as ɵngcc5 from '@angular/common';

function ResizeOverlayComponent_span_17_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1, " + ");
    ɵngcc0.ɵɵelementEnd();
} }
function ResizeOverlayComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵelementStart(1, "span", 9);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, ResizeOverlayComponent_span_17_span_3_Template, 2, 0, "span", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const key_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(key_r1);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", i_r2 < ctx_r0.keys.length - 1);
} }
const _c0 = ["*"];
export class ResizeOverlayComponent {
    constructor(breakpointObserver, hotkeysService, cdr) {
        this.breakpointObserver = breakpointObserver;
        this.hotkeysService = hotkeysService;
        this.cdr = cdr;
        this.combo = 'ctrl+shift+o';
        this._disabled = localStorage.getItem('overlay-disabled') === 'true';
        this._query = '(min-width: 959px) and (min-height: 650px)';
        this._buildObservable();
    }
    get query() {
        return this._query;
    }
    set query(value) {
        this._query = value;
        this._buildObservable();
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        this.cdr.markForCheck();
        localStorage.setItem('overlay-disabled', value.toString());
    }
    get disabled() {
        return this._disabled;
    }
    get keys() {
        if (this.hotkeysService.hotkeys && this.hotkeysService.hotkeys[this.combo]) {
            return this.hotkeysService.hotkeys[this.combo][0].keys;
        }
        else {
            return [];
        }
    }
    ngOnInit() {
        this.hotkeysService.add(this.combo, {
            callback: this.toggle.bind(this),
            description: 'Toggle browser size warning',
            visible: false,
            component: this
        });
    }
    ngOnDestroy() {
        this.hotkeysService.deregister(this.combo);
    }
    onClick(ev) {
        if (ev.metaKey && ev.shiftKey) {
            this.disabled = true;
        }
    }
    toggle() {
        this.disabled = !this.disabled;
    }
    _buildObservable() {
        const query = Array.isArray(this.query) ? this.query : [this.query];
        this.visible$ = this.breakpointObserver.observe(query).pipe(map((v) => !v.matches), startWith(!this.breakpointObserver.isMatched(this.query)));
    }
}
ResizeOverlayComponent.ɵfac = function ResizeOverlayComponent_Factory(t) { return new (t || ResizeOverlayComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.BreakpointObserver), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.HotkeysService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
ResizeOverlayComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: ResizeOverlayComponent, selectors: [["ngx-resize-overlay"]], inputs: { combo: "combo", query: "query", disabled: "disabled" }, exportAs: ["ngxResizeOverlay"], ngContentSelectors: _c0, decls: 18, vars: 9, consts: [[1, "resize-overlay", 3, "visible", "zIndex", "click"], [1, "resize-overlay-content"], [1, "ngx-icon", "ngx-browser-size", "icon-fx-dbl-sized"], [1, "btn", "btn-bordered", "continue", 3, "click"], [1, "browser-size-popover--container"], ["fontIcon", "question"], [1, "browser-size-popover"], [1, "combination"], [4, "ngFor", "ngForOf"], [1, "key"], [4, "ngIf"]], template: function ResizeOverlayComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "ngx-overlay", 0);
        ɵngcc0.ɵɵlistener("click", function ResizeOverlayComponent_Template_ngx_overlay_click_0_listener($event) { return ctx.onClick($event); });
        ɵngcc0.ɵɵpipe(1, "async");
        ɵngcc0.ɵɵpipe(2, "async");
        ɵngcc0.ɵɵelementStart(3, "span", 1);
        ɵngcc0.ɵɵelementStart(4, "h1");
        ɵngcc0.ɵɵelement(5, "i", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "h3");
        ɵngcc0.ɵɵtext(7, "Your browser is too small");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(8);
        ɵngcc0.ɵɵelement(9, "br");
        ɵngcc0.ɵɵelementStart(10, "button", 3);
        ɵngcc0.ɵɵlistener("click", function ResizeOverlayComponent_Template_button_click_10_listener() { return ctx.toggle(); });
        ɵngcc0.ɵɵtext(11, "Continue Anyway");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "a", 4);
        ɵngcc0.ɵɵelement(13, "ngx-icon", 5);
        ɵngcc0.ɵɵelementStart(14, "div", 6);
        ɵngcc0.ɵɵtext(15, " Bypass this warning ");
        ɵngcc0.ɵɵelementStart(16, "span", 7);
        ɵngcc0.ɵɵtemplate(17, ResizeOverlayComponent_span_17_Template, 4, 2, "span", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("visible", !ctx.disabled && ɵngcc0.ɵɵpipeBind1(1, 5, ctx.visible$));
        ɵngcc0.ɵɵproperty("visible", !ctx.disabled && ɵngcc0.ɵɵpipeBind1(2, 7, ctx.visible$))("zIndex", 10000);
        ɵngcc0.ɵɵadvance(17);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.keys);
    } }, directives: [ɵngcc3.OverlayComponent, ɵngcc4.IconComponent, ɵngcc5.NgForOf, ɵngcc5.NgIf], pipes: [ɵngcc5.AsyncPipe], styles: [".resize-overlay .ngx-overlay{opacity:1!important;background-color:transparent;transition:background-color .5s}.resize-overlay .ngx-overlay .resize-overlay-content{display:flex;flex-direction:column;align-items:center;position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;font-size:14px;line-height:17px;max-width:250px;color:#cdd2dd}.resize-overlay .ngx-overlay .resize-overlay-content h3{font-size:18px!important;line-height:28px;color:#fff}.resize-overlay .ngx-overlay .resize-overlay-content .ngx-icon.ngx-browser-size{color:#ff4514;font-size:46px;line-height:46px}.resize-overlay .ngx-overlay .resize-overlay-content .ngx-icon.ngx-question{color:#cdd2dd;font-size:1.5rem;line-height:1.5rem;margin-top:1rem}.resize-overlay .ngx-overlay .resize-overlay-content .browser-size-popover{opacity:0;text-align:center;margin-top:1rem;line-height:1.5rem;transition:opacity .5s;background:#afb7c8;color:#060709;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);border-radius:0;font-size:13px;padding:7px}.resize-overlay .ngx-overlay .resize-overlay-content .browser-size-popover .combination{margin-left:5px}.resize-overlay .ngx-overlay .resize-overlay-content .browser-size-popover .combination .key{background-color:#d1d5e1;border-radius:3px;padding:3px;box-shadow:0 1px 5px 0 rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.resize-overlay .ngx-overlay .resize-overlay-content .browser-size-popover--container:hover .browser-size-popover{opacity:1}.resize-overlay .ngx-overlay .resize-overlay-content .continue{margin-top:20px;color:#fff;border-color:#fff}.resize-overlay.visible .ngx-overlay{background-color:rgba(0,0,0,.8)}"], encapsulation: 2, changeDetection: 0 });
ResizeOverlayComponent.ctorParameters = () => [
    { type: BreakpointObserver },
    { type: HotkeysService },
    { type: ChangeDetectorRef }
];
ResizeOverlayComponent.propDecorators = {
    combo: [{ type: Input }],
    query: [{ type: Input }],
    disabled: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ResizeOverlayComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxResizeOverlay',
                selector: 'ngx-resize-overlay',
                template: "<ngx-overlay\n  class=\"resize-overlay\"\n  [class.visible]=\"!disabled && (visible$ | async)\"\n  [visible]=\"!disabled && (visible$ | async)\"\n  [zIndex]=\"10000\"\n  (click)=\"onClick($event)\"\n>\n  <span class=\"resize-overlay-content\">\n    <h1><i class=\"ngx-icon ngx-browser-size icon-fx-dbl-sized\"></i></h1>\n    <h3>Your browser is too small</h3>\n    <ng-content></ng-content>\n    <br />\n    <button class=\"btn btn-bordered continue\" (click)=\"toggle()\">Continue Anyway</button>\n    <a class=\"browser-size-popover--container\">\n      <ngx-icon fontIcon=\"question\"></ngx-icon>\n\n      <div class=\"browser-size-popover\">\n        Bypass this warning\n        <span class=\"combination\">\n          <span *ngFor=\"let key of keys; let i = index\">\n            <span class=\"key\">{{ key }}</span> <span *ngIf=\"i < keys.length - 1\"> + </span>\n          </span>\n        </span>\n      </div>\n    </a>\n  </span>\n</ngx-overlay>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".resize-overlay .ngx-overlay{opacity:1!important;background-color:transparent;transition:background-color .5s}.resize-overlay .ngx-overlay .resize-overlay-content{display:flex;flex-direction:column;align-items:center;position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;font-size:14px;line-height:17px;max-width:250px;color:#cdd2dd}.resize-overlay .ngx-overlay .resize-overlay-content h3{font-size:18px!important;line-height:28px;color:#fff}.resize-overlay .ngx-overlay .resize-overlay-content .ngx-icon.ngx-browser-size{color:#ff4514;font-size:46px;line-height:46px}.resize-overlay .ngx-overlay .resize-overlay-content .ngx-icon.ngx-question{color:#cdd2dd;font-size:1.5rem;line-height:1.5rem;margin-top:1rem}.resize-overlay .ngx-overlay .resize-overlay-content .browser-size-popover{opacity:0;text-align:center;margin-top:1rem;line-height:1.5rem;transition:opacity .5s;background:#afb7c8;color:#060709;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);border-radius:0;font-size:13px;padding:7px}.resize-overlay .ngx-overlay .resize-overlay-content .browser-size-popover .combination{margin-left:5px}.resize-overlay .ngx-overlay .resize-overlay-content .browser-size-popover .combination .key{background-color:#d1d5e1;border-radius:3px;padding:3px;box-shadow:0 1px 5px 0 rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.resize-overlay .ngx-overlay .resize-overlay-content .browser-size-popover--container:hover .browser-size-popover{opacity:1}.resize-overlay .ngx-overlay .resize-overlay-content .continue{margin-top:20px;color:#fff;border-color:#fff}.resize-overlay.visible .ngx-overlay{background-color:rgba(0,0,0,.8)}"]
            }]
    }], function () { return [{ type: ɵngcc1.BreakpointObserver }, { type: ɵngcc2.HotkeysService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { combo: [{
            type: Input
        }], query: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLW92ZXJsYXkuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL292ZXJsYXkvcmVzaXplLW92ZXJsYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBR0wsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVNUQsTUFBTSxPQUFPLHNCQUFzQjtBQUFHLElBcUNwQyxZQUNVLGtCQUFzQyxFQUN0QyxjQUE4QixFQUM5QixHQUFzQjtBQUMvQixRQUhTLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7QUFBQyxRQUN2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7QUFBQyxRQUMvQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUNsQyxRQXhDVyxVQUFLLEdBQUcsY0FBYyxDQUFDO0FBQ2xDLFFBd0JVLGNBQVMsR0FBWSxZQUFZLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEtBQUssTUFBTSxDQUFDO0FBQ25GLFFBQVUsV0FBTSxHQUFHLDRDQUE0QyxDQUFDO0FBQ2hFLFFBY0ksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDNUIsSUFBRSxDQUFDO0FBQ0gsSUF6Q0UsSUFDSSxLQUFLO0FBQUssUUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDdkIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLEtBQUssQ0FBQyxLQUFhO0FBQ3pCLFFBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDeEIsUUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUM1QixJQUFFLENBQUM7QUFDSCxJQUNFLElBQ0ksUUFBUSxDQUFDLEtBQWM7QUFDN0IsUUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xELFFBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUM1QixRQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDL0QsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLFFBQVE7QUFBSyxRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQU1FLElBQUksSUFBSTtBQUFLLFFBQ1gsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDaEYsWUFBTSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDN0QsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLE9BQU8sRUFBRSxDQUFDO0FBQ2hCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQVNFLFFBQVE7QUFBSyxRQUNYLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDeEMsWUFBTSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3RDLFlBQU0sV0FBVyxFQUFFLDZCQUE2QjtBQUNoRCxZQUFNLE9BQU8sRUFBRSxLQUFLO0FBQ3BCLFlBQU0sU0FBUyxFQUFFLElBQUk7QUFDckIsU0FBSyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVc7QUFBSyxRQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQyxJQUFFLENBQUM7QUFDSCxJQUNFLE9BQU8sQ0FBQyxFQUFpQjtBQUFJLFFBQzNCLElBQUksRUFBRSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0FBQ25DLFlBQU0sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDM0IsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsTUFBTTtBQUFLLFFBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDbkMsSUFBRSxDQUFDO0FBQ0gsSUFDVSxnQkFBZ0I7QUFBSyxRQUMzQixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEUsUUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUN6RCxHQUFHLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUMzQixTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUMxRCxDQUFDO0FBQ04sSUFBRSxDQUFDO0FBQ0g7a0RBcEZDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsa0JBQWtCLGtCQUM1QixRQUFRLEVBQUUsb0JBQW9CLGtCQUM5Qjs7Ozs2REFBOEMsa0JBRTlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQztVQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0VUFDdEMsa2hEQUNJO0FBQUM7QUFBZ0QsWUFmN0Msa0JBQWtCO0FBQUksWUFLdEIsY0FBYztBQUFJLFlBWnpCLGlCQUFpQjtBQUNsQjtBQUFHO0FBSUgsb0JBa0JFLEtBQUs7QUFBSyxvQkFFVixLQUFLO0FBQ04sdUJBU0MsS0FBSztBQUNQOzs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcmVha3BvaW50T2JzZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSG90a2V5c1NlcnZpY2UgfSBmcm9tICcuLi9ob3RrZXlzL2hvdGtleXMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ25neFJlc2l6ZU92ZXJsYXknLFxuICBzZWxlY3RvcjogJ25neC1yZXNpemUtb3ZlcmxheScsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXNpemUtb3ZlcmxheS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jlc2l6ZS1vdmVybGF5LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFJlc2l6ZU92ZXJsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGNvbWJvID0gJ2N0cmwrc2hpZnQrbyc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHF1ZXJ5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5O1xuICB9XG5cbiAgc2V0IHF1ZXJ5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9xdWVyeSA9IHZhbHVlO1xuICAgIHRoaXMuX2J1aWxkT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvdmVybGF5LWRpc2FibGVkJywgdmFsdWUudG9TdHJpbmcoKSk7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgdmlzaWJsZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3ZlcmxheS1kaXNhYmxlZCcpID09PSAndHJ1ZSc7XG4gIHByaXZhdGUgX3F1ZXJ5ID0gJyhtaW4td2lkdGg6IDk1OXB4KSBhbmQgKG1pbi1oZWlnaHQ6IDY1MHB4KSc7XG5cbiAgZ2V0IGtleXMoKTogc3RyaW5nW10ge1xuICAgIGlmICh0aGlzLmhvdGtleXNTZXJ2aWNlLmhvdGtleXMgJiYgdGhpcy5ob3RrZXlzU2VydmljZS5ob3RrZXlzW3RoaXMuY29tYm9dKSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3RrZXlzU2VydmljZS5ob3RrZXlzW3RoaXMuY29tYm9dWzBdLmtleXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyLFxuICAgIHByaXZhdGUgaG90a2V5c1NlcnZpY2U6IEhvdGtleXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICB0aGlzLl9idWlsZE9ic2VydmFibGUoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaG90a2V5c1NlcnZpY2UuYWRkKHRoaXMuY29tYm8sIHtcbiAgICAgIGNhbGxiYWNrOiB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpLFxuICAgICAgZGVzY3JpcHRpb246ICdUb2dnbGUgYnJvd3NlciBzaXplIHdhcm5pbmcnLFxuICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICBjb21wb25lbnQ6IHRoaXNcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaG90a2V5c1NlcnZpY2UuZGVyZWdpc3Rlcih0aGlzLmNvbWJvKTtcbiAgfVxuXG4gIG9uQ2xpY2soZXY6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXYubWV0YUtleSAmJiBldi5zaGlmdEtleSkge1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSAhdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIHByaXZhdGUgX2J1aWxkT2JzZXJ2YWJsZSgpOiB2b2lkIHtcbiAgICBjb25zdCBxdWVyeSA9IEFycmF5LmlzQXJyYXkodGhpcy5xdWVyeSkgPyB0aGlzLnF1ZXJ5IDogW3RoaXMucXVlcnldO1xuXG4gICAgdGhpcy52aXNpYmxlJCA9IHRoaXMuYnJlYWtwb2ludE9ic2VydmVyLm9ic2VydmUocXVlcnkpLnBpcGUoXG4gICAgICBtYXAoKHY6IGFueSkgPT4gIXYubWF0Y2hlcyksXG4gICAgICBzdGFydFdpdGgoIXRoaXMuYnJlYWtwb2ludE9ic2VydmVyLmlzTWF0Y2hlZCh0aGlzLnF1ZXJ5KSlcbiAgICApO1xuICB9XG59XG4iXX0=