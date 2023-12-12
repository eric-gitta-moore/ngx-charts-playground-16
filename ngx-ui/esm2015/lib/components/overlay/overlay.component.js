import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
/**
 * Overlay Component for Drawer/Dialogs
 */
import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
export class OverlayComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.click = new EventEmitter();
        this._visible = false;
        this._zIndex = 990;
    }
    get visible() {
        return this._visible;
    }
    set visible(val) {
        this._visible = coerceBooleanProperty(val);
        this.cdr.markForCheck();
    }
    get zIndex() {
        return this._zIndex;
    }
    set zIndex(val) {
        this._zIndex = coerceNumberProperty(val);
        this.cdr.markForCheck();
    }
    get animationState() {
        return this.visible ? 'active' : 'inactive';
    }
}
OverlayComponent.ɵfac = function OverlayComponent_Factory(t) { return new (t || OverlayComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
OverlayComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: OverlayComponent, selectors: [["ngx-overlay"]], inputs: { visible: "visible", zIndex: "zIndex" }, outputs: { click: "click" }, exportAs: ["ngxOverlay"], ngContentSelectors: _c0, decls: 2, vars: 3, consts: [[1, "ngx-overlay", 3, "click"]], template: function OverlayComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function OverlayComponent_Template_div_click_0_listener() { return ctx.click.emit(true); });
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("z-index", ctx.zIndex);
        ɵngcc0.ɵɵproperty("@overlayTransition", ctx.animationState);
    } }, styles: [".ngx-overlay{position:fixed;top:0;left:0;bottom:0;right:0;width:100%;overflow:hidden;height:100%;background-color:#000;opacity:0;visibility:hidden;text-align:center;line-height:100vh}"], encapsulation: 2, data: { animation: [
            trigger('overlayTransition', [
                state('active', style({
                    opacity: 0.8,
                    visibility: 'visible'
                })),
                state('inactive', style({
                    visibility: 'hidden',
                    opacity: 0
                })),
                transition('* => active', [animate('100ms ease-in')]),
                transition('* => inactive', [animate('100ms ease-out')]),
                transition('* => void', [
                    style({
                        opacity: 0,
                        visibility: 'hidden',
                        'pointer-events': 'none'
                    }),
                    animate('100ms ease-out')
                ])
            ])
        ] }, changeDetection: 0 });
OverlayComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
OverlayComponent.propDecorators = {
    visible: [{ type: Input }],
    zIndex: [{ type: Input }],
    click: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(OverlayComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxOverlay',
                selector: 'ngx-overlay',
                template: "<div (click)=\"click.emit(true)\" [style.zIndex]=\"zIndex\" [@overlayTransition]=\"animationState\" class=\"ngx-overlay\">\n  <ng-content></ng-content>\n</div>\n",
                animations: [
                    trigger('overlayTransition', [
                        state('active', style({
                            opacity: 0.8,
                            visibility: 'visible'
                        })),
                        state('inactive', style({
                            visibility: 'hidden',
                            opacity: 0
                        })),
                        transition('* => active', [animate('100ms ease-in')]),
                        transition('* => inactive', [animate('100ms ease-out')]),
                        transition('* => void', [
                            style({
                                opacity: 0,
                                visibility: 'hidden',
                                'pointer-events': 'none'
                            }),
                            animate('100ms ease-out')
                        ])
                    ])
                ],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-overlay{position:fixed;top:0;left:0;bottom:0;right:0;width:100%;overflow:hidden;height:100%;background-color:#000;opacity:0;visibility:hidden;text-align:center;line-height:100vh}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { click: [{
            type: Output
        }], visible: [{
            type: Input
        }], zIndex: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvb3ZlcmxheS9vdmVybGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFcEY7QUFDQTtBQUNBLEdBQUc7Ozs7QUFxQ0gsTUFBTSxPQUFPLGdCQUFnQjtBQUM3QixJQTJCRSxZQUE2QixHQUFzQjtBQUFJLFFBQTFCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsUUFUMUMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7QUFDaEQsUUFLVSxhQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzNCLFFBQVUsWUFBTyxHQUFHLEdBQUcsQ0FBQztBQUN4QixJQUN3RCxDQUFDO0FBQ3pELElBNUJFLElBQ0ksT0FBTztBQUNiLFFBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ3pCLElBQUUsQ0FBQztBQUNILElBQUUsSUFBSSxPQUFPLENBQUMsR0FBWTtBQUMxQixRQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0MsUUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzVCLElBQUUsQ0FBQztBQUNILElBQ0UsSUFDSSxNQUFNO0FBQ1osUUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLE1BQU0sQ0FBQyxHQUFXO0FBQ3hCLFFBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3QyxRQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDNUIsSUFBRSxDQUFDO0FBQ0gsSUFHRSxJQUFJLGNBQWM7QUFBSyxRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0FBQ2hELElBQUUsQ0FBQztBQUNIOzRDQTVEQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLFlBQVksa0JBQ3RCLFFBQVEsRUFBRSxhQUFhO09BQ3ZCLDZLQUF1QyxrQkFFdkMsVUFBVSxFQUFFLHNCQUNWLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSwwQkFDM0IsS0FBSyxDQUNILFFBQVEsRUFDUixLQUFLLENBQUMsOEJBQ0osT0FBTyxFQUFFLEdBQUc7Q0FDWixVQUFVLEVBQUUsU0FBUztjQUN0QixDQUFDLENBQ0gsMEJBQ0Q7R0FBSyxDQUNILFVBQVUsRUFDVixLQUFLLENBQUMsOEJBQ0osVUFBVSxFQUFFLFFBQVEsOEJBQ3BCLE9BQU8sRUFBRSxDQUFDO1VBQ1gsQ0FBQyxDQUNIO01BQ0QsVUFBVSxDQUFDLGFBQWE7Q0FBRSxDQUFDLE9BQU8sQ0FBQztLQUFlLENBQUMsQ0FBQyxDQUFDLDBCQUNyRCxVQUFVLENBQUM7U0FBZSxFQUFFLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQywwQkFDeEQ7TUFBVSxDQUFDLFdBQVcsRUFBRSw4QkFDdEIsS0FBSyxDQUFDLGtDQUNKLE9BQU8sRUFBRSxDQUFDLGtDQUNWLFVBQVUsRUFBRSxRQUFRLGtDQUNwQixnQkFBZ0IsRUFBRSxNQUFNLDhCQUN6QixDQUFDOzRCQUNGLE9BQU8sQ0FBQztTQUFnQixDQUFDLDBCQUMxQixDQUFDO21CQUNILENBQUM7SUFDSCxrQkFDRCxhQUFhLEVBQUU7WUFBaUIsQ0FBQyxJQUFJO2NBQ3JDLGVBQWUsRUFBRTtZQUF1QixDQUFDLE1BQU07Ozs7O09BQ2hEOzs7Ozs7Ozs7bUNBQ0k7QUFBQztBQUVELFlBbERILGlCQUFpQjtBQUNsQjtBQUFHO0FBR0Ysc0JBNkNDLEtBQUs7QUFDTixxQkFRQyxLQUFLO0FBQ04sb0JBUUMsTUFBTTtBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuLyoqXG4gKiBPdmVybGF5IENvbXBvbmVudCBmb3IgRHJhd2VyL0RpYWxvZ3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnbmd4T3ZlcmxheScsXG4gIHNlbGVjdG9yOiAnbmd4LW92ZXJsYXknLFxuICB0ZW1wbGF0ZVVybDogJy4vb3ZlcmxheS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL292ZXJsYXkuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ292ZXJsYXlUcmFuc2l0aW9uJywgW1xuICAgICAgc3RhdGUoXG4gICAgICAgICdhY3RpdmUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMC44LFxuICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJ1xuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAnaW5hY3RpdmUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gYWN0aXZlJywgW2FuaW1hdGUoJzEwMG1zIGVhc2UtaW4nKV0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiBpbmFjdGl2ZScsIFthbmltYXRlKCcxMDBtcyBlYXNlLW91dCcpXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTAwbXMgZWFzZS1vdXQnKVxuICAgICAgXSlcbiAgICBdKVxuICBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBPdmVybGF5Q29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgZ2V0IHZpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH1cbiAgc2V0IHZpc2libGUodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmlzaWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWwpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHpJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fekluZGV4O1xuICB9XG4gIHNldCB6SW5kZXgodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl96SW5kZXggPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWwpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgQE91dHB1dCgpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGdldCBhbmltYXRpb25TdGF0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnZpc2libGUgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSc7XG4gIH1cblxuICBwcml2YXRlIF92aXNpYmxlID0gZmFsc2U7XG4gIHByaXZhdGUgX3pJbmRleCA9IDk5MDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG59XG4iXX0=