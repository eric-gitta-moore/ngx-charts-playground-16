import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { LongPressButtonState } from './long-press-button-state.enum';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../directives/long-press/long-press.directive';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '../icon/icon.component';

const _c0 = function (a0) { return { duration: a0 }; };
const _c1 = function (a0, a1) { return { value: a0, params: a1 }; };
function LongPressButtonComponent__svg_circle_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "circle", 9);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("@circleAnimation", ɵngcc0.ɵɵpureFunction2(3, _c1, ctx_r0.pressed ? "active" : "inactive", ɵngcc0.ɵɵpureFunction1(1, _c0, ctx_r0.duration)));
} }
function LongPressButtonComponent__svg_circle_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelement(0, "circle", 10);
} }
function LongPressButtonComponent_ngx_icon_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ngx-icon", 11);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("fontIcon", ctx_r2.icon);
} }
function LongPressButtonComponent_ngx_icon_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ngx-icon", 12);
} }
export class LongPressButtonComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.state = LongPressButtonState.Active;
        this.icon = 'mouse-hold';
        this.longPress = new EventEmitter();
        this.LongPressButtonState = LongPressButtonState;
        this.pressed = false;
        this._duration = 3000;
        this._disabled = false;
    }
    get duration() {
        return this._duration;
    }
    set duration(duration) {
        this._duration = coerceNumberProperty(duration);
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this._disabled = coerceBooleanProperty(disabled);
    }
    ngOnInit() {
        this.updateState();
    }
    ngOnChanges() {
        this.updateState();
    }
    updateState() {
        if (!this.state) {
            this.state = LongPressButtonState.Active;
        }
        if (this.state === LongPressButtonState.Submitted) {
            this.disabled = true;
            clearTimeout(this._lastTimeout);
            this._lastTimeout = setTimeout(() => {
                this.state = LongPressButtonState.Active;
                this.disabled = false;
                this.updateState();
            }, 3000);
        }
        this.cdr.markForCheck();
    }
    onLongPressStart() {
        if (!this.disabled) {
            this.pressed = true;
        }
    }
    onLongPressFinish(e) {
        if (!this.disabled) {
            this.pressed = false;
            this.state = LongPressButtonState.Submitted;
            this.longPress.emit(e);
            this.updateState();
        }
    }
    onLongPressCancel() {
        this.pressed = false;
    }
}
LongPressButtonComponent.ɵfac = function LongPressButtonComponent_Factory(t) { return new (t || LongPressButtonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
LongPressButtonComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: LongPressButtonComponent, selectors: [["ngx-long-press-button"]], hostAttrs: [1, "ngx-long-press"], hostVars: 6, hostBindings: function LongPressButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("disabled-button", ctx.disabled)("active", ctx.state === ctx.LongPressButtonState.Active)("submitted", ctx.state === ctx.LongPressButtonState.Submitted);
    } }, inputs: { state: "state", icon: "icon", duration: "duration", disabled: "disabled" }, outputs: { longPress: "longPress" }, exportAs: ["ngxLongPressButton"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 9, vars: 7, consts: [["long-press", "", 3, "duration", "disabled", "longPressStart", "longPressFinish", "longPressCancel"], [1, "inner-background"], ["viewBox", "-170 -170 340 340"], ["transform", "rotate(-90)"], ["class", "loading-circle", "r", "160", 4, "ngIf"], ["class", "full-circle", "r", "160", 4, "ngIf"], [3, "disabled"], ["class", "icon", 3, "fontIcon", 4, "ngIf"], ["class", "icon", "fontIcon", "check", 4, "ngIf"], ["r", "160", 1, "loading-circle"], ["r", "160", 1, "full-circle"], [1, "icon", 3, "fontIcon"], ["fontIcon", "check", 1, "icon"]], template: function LongPressButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("longPressStart", function LongPressButtonComponent_Template_div_longPressStart_0_listener() { return ctx.onLongPressStart(); })("longPressFinish", function LongPressButtonComponent_Template_div_longPressFinish_0_listener($event) { return ctx.onLongPressFinish($event); })("longPressCancel", function LongPressButtonComponent_Template_div_longPressCancel_0_listener() { return ctx.onLongPressCancel(); });
        ɵngcc0.ɵɵelement(1, "span", 1);
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(2, "svg", 2);
        ɵngcc0.ɵɵelementStart(3, "g", 3);
        ɵngcc0.ɵɵtemplate(4, LongPressButtonComponent__svg_circle_4_Template, 1, 6, "circle", 4);
        ɵngcc0.ɵɵtemplate(5, LongPressButtonComponent__svg_circle_5_Template, 1, 0, "circle", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵnamespaceHTML();
        ɵngcc0.ɵɵelementStart(6, "button", 6);
        ɵngcc0.ɵɵtemplate(7, LongPressButtonComponent_ngx_icon_7_Template, 1, 1, "ngx-icon", 7);
        ɵngcc0.ɵɵtemplate(8, LongPressButtonComponent_ngx_icon_8_Template, 1, 0, "ngx-icon", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("duration", ctx.duration)("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx.state !== ctx.LongPressButtonState.Submitted);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.state === ctx.LongPressButtonState.Submitted);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.state === ctx.LongPressButtonState.Active);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.state === ctx.LongPressButtonState.Submitted);
    } }, directives: [ɵngcc1.LongPressDirective, ɵngcc2.NgIf, ɵngcc3.IconComponent], styles: [".ngx-long-press{border-radius:50%;border:3px solid #12141a;padding:0;width:60px;height:60px;overflow:hidden;display:inline-block;text-align:center;position:relative;cursor:pointer}.ngx-long-press button{padding:0;position:absolute;top:50%;left:50%}.ngx-long-press .inner-background{border-radius:50%;background:#12141a;width:46px;height:46px;position:absolute;top:4px;left:4px}.ngx-long-press .ngx-icon{font-size:23px;height:60px;vertical-align:middle;line-height:60px;position:absolute;left:50%;transform:translate(-50%,-50%)}.ngx-long-press .ngx-icon :before{line-height:60px}.ngx-long-press svg{width:100%;height:100%}.ngx-long-press circle{fill:none;stroke:#0dee72;stroke-width:16}.ngx-long-press circle.loading-circle{stroke-dashoffset:0;stroke-dasharray:122 1000}"], encapsulation: 2, data: { animation: [
            trigger('circleAnimation', [
                state('active', style({
                    strokeDasharray: '1000 1000'
                })),
                state('inactive', style({
                    strokeDasharray: '0 1000'
                })),
                transition('inactive => active', animate('{{ duration }}ms ease-out'), { params: { duration: 1000 } })
            ])
        ] }, changeDetection: 0 });
LongPressButtonComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
LongPressButtonComponent.propDecorators = {
    state: [{ type: Input }],
    icon: [{ type: Input }],
    duration: [{ type: Input }],
    disabled: [{ type: Input }],
    longPress: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(LongPressButtonComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxLongPressButton',
                selector: 'ngx-long-press-button',
                template: "<div\n  long-press\n  [duration]=\"duration\"\n  [disabled]=\"disabled\"\n  (longPressStart)=\"onLongPressStart()\"\n  (longPressFinish)=\"onLongPressFinish($event)\"\n  (longPressCancel)=\"onLongPressCancel()\"\n  >\n  <span class=\"inner-background\"></span>\n  <svg viewBox=\"-170 -170 340 340\">\n    <g transform=\"rotate(-90)\">\n      <circle\n        class=\"loading-circle\"\n        *ngIf=\"state !== LongPressButtonState.Submitted\"\n        r=\"160\"\n        [@circleAnimation]=\"{ value: pressed ? 'active' : 'inactive', params: { duration: duration } }\"\n      />\n      <circle class=\"full-circle\" *ngIf=\"state === LongPressButtonState.Submitted\" r=\"160\" />\n    </g>\n  </svg>\n  <button [disabled]=\"disabled\">\n    <ngx-icon *ngIf=\"state === LongPressButtonState.Active\" class=\"icon\" [fontIcon]=\"icon\"></ngx-icon>\n    <ngx-icon *ngIf=\"state === LongPressButtonState.Submitted\" class=\"icon\" fontIcon=\"check\"></ngx-icon>\n  </button>\n</div>\n",
                host: {
                    class: 'ngx-long-press',
                    '[class.disabled-button]': 'disabled',
                    '[class.active]': 'state === LongPressButtonState.Active',
                    '[class.submitted]': 'state === LongPressButtonState.Submitted'
                },
                animations: [
                    trigger('circleAnimation', [
                        state('active', style({
                            strokeDasharray: '1000 1000'
                        })),
                        state('inactive', style({
                            strokeDasharray: '0 1000'
                        })),
                        transition('inactive => active', animate('{{ duration }}ms ease-out'), { params: { duration: 1000 } })
                    ])
                ],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-long-press{border-radius:50%;border:3px solid #12141a;padding:0;width:60px;height:60px;overflow:hidden;display:inline-block;text-align:center;position:relative;cursor:pointer}.ngx-long-press button{padding:0;position:absolute;top:50%;left:50%}.ngx-long-press .inner-background{border-radius:50%;background:#12141a;width:46px;height:46px;position:absolute;top:4px;left:4px}.ngx-long-press .ngx-icon{font-size:23px;height:60px;vertical-align:middle;line-height:60px;position:absolute;left:50%;transform:translate(-50%,-50%)}.ngx-long-press .ngx-icon :before{line-height:60px}.ngx-long-press svg{width:100%;height:100%}.ngx-long-press circle{fill:none;stroke:#0dee72;stroke-width:16}.ngx-long-press circle.loading-circle{stroke-dashoffset:0;stroke-dasharray:122 1000}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { state: [{
            type: Input
        }], icon: [{
            type: Input
        }], longPress: [{
            type: Output
        }], duration: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9uZy1wcmVzcy1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2xvbmctcHJlc3MvbG9uZy1wcmVzcy1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osaUJBQWlCLEVBR2pCLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVwRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDdEUsTUFBTSxPQUFPLHdCQUF3QjtBQUFHLElBNkJ0QyxZQUE2QixHQUFzQjtBQUFJLFFBQTFCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsUUE1QjNDLFVBQUssR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQUM7QUFDL0MsUUFBVyxTQUFJLEdBQUcsWUFBWSxDQUFDO0FBQy9CLFFBaUJZLGNBQVMsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztBQUMzRSxRQUNXLHlCQUFvQixHQUFHLG9CQUFvQixDQUFDO0FBQ3ZELFFBQUUsWUFBTyxHQUFHLEtBQUssQ0FBQztBQUNsQixRQUVVLGNBQVMsR0FBRyxJQUFJLENBQUM7QUFDM0IsUUFBVSxjQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzVCLElBQ3dELENBQUM7QUFDekQsSUExQkUsSUFDSSxRQUFRO0FBQ2QsUUFBSSxPQUFPLElB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QUNILDBCQUNELEtBQUssQ0FDSCxVQUFVLEVBQ1YsS0FBSyxDQUFDLDhCQUNKLGVBQWUsRUFBRSxRQUFRLDBCQUMxQixDQUFDLENBQ0gsMEJBQ0QsVUFBVSxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtDQUFFLENBQUMsc0JBQ3ZHLENBQUM7R0FDSCxrQkFDRDtDQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckM7Y0FBZSxFQUFFLHVCQUF1QixDQUFDO0lBQU07Ozs7Ozs7Ozs7Ozs7O1NBQ2hEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBQ0k7QUFBQztBQUFrRCxZQXRDdEQsaUJBQWlCO0FBQ2pCO0FBQUc7QUFDb0Isb0JBcUN0QixLQUFLO0FBQUssbUJBQ1YsS0FBSztBQUFLLHVCQUVWLEtBQUs7QUFDTix1QkFPQyxLQUFLO0FBQ04sd0JBT0MsTUFBTTtBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuaW1wb3J0IHsgTG9uZ1ByZXNzQnV0dG9uU3RhdGUgfSBmcm9tICcuL2xvbmctcHJlc3MtYnV0dG9uLXN0YXRlLmVudW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICduZ3hMb25nUHJlc3NCdXR0b24nLFxuICBzZWxlY3RvcjogJ25neC1sb25nLXByZXNzLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb25nLXByZXNzLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvbmctcHJlc3MtYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25neC1sb25nLXByZXNzJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkLWJ1dHRvbl0nOiAnZGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYWN0aXZlXSc6ICdzdGF0ZSA9PT0gTG9uZ1ByZXNzQnV0dG9uU3RhdGUuQWN0aXZlJyxcbiAgICAnW2NsYXNzLnN1Ym1pdHRlZF0nOiAnc3RhdGUgPT09IExvbmdQcmVzc0J1dHRvblN0YXRlLlN1Ym1pdHRlZCdcbiAgfSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2NpcmNsZUFuaW1hdGlvbicsIFtcbiAgICAgIHN0YXRlKFxuICAgICAgICAnYWN0aXZlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHN0cm9rZURhc2hhcnJheTogJzEwMDAgMTAwMCdcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBzdGF0ZShcbiAgICAgICAgJ2luYWN0aXZlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHN0cm9rZURhc2hhcnJheTogJzAgMTAwMCdcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBhbmltYXRlKCd7eyBkdXJhdGlvbiB9fW1zIGVhc2Utb3V0JyksIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiAxMDAwIH0gfSlcbiAgICBdKVxuICBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMb25nUHJlc3NCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHN0YXRlID0gTG9uZ1ByZXNzQnV0dG9uU3RhdGUuQWN0aXZlO1xuICBASW5wdXQoKSBpY29uID0gJ21vdXNlLWhvbGQnO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBkdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZHVyYXRpb247XG4gIH1cbiAgc2V0IGR1cmF0aW9uKGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICB0aGlzLl9kdXJhdGlvbiA9IGNvZXJjZU51bWJlclByb3BlcnR5KGR1cmF0aW9uKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoZGlzYWJsZWQpO1xuICB9XG5cbiAgQE91dHB1dCgpIGxvbmdQcmVzczogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHJlYWRvbmx5IExvbmdQcmVzc0J1dHRvblN0YXRlID0gTG9uZ1ByZXNzQnV0dG9uU3RhdGU7XG4gIHByZXNzZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIF9sYXN0VGltZW91dDogYW55O1xuICBwcml2YXRlIF9kdXJhdGlvbiA9IDMwMDA7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IExvbmdQcmVzc0J1dHRvblN0YXRlLkFjdGl2ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gTG9uZ1ByZXNzQnV0dG9uU3RhdGUuU3VibWl0dGVkKSB7XG4gICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9sYXN0VGltZW91dCk7XG5cbiAgICAgIHRoaXMuX2xhc3RUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBMb25nUHJlc3NCdXR0b25TdGF0ZS5BY3RpdmU7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBvbkxvbmdQcmVzc1N0YXJ0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5wcmVzc2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBvbkxvbmdQcmVzc0ZpbmlzaChlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnByZXNzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RhdGUgPSBMb25nUHJlc3NCdXR0b25TdGF0ZS5TdWJtaXR0ZWQ7XG4gICAgICB0aGlzLmxvbmdQcmVzcy5lbWl0KGUpO1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTG9uZ1ByZXNzQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMucHJlc3NlZCA9IGZhbHNlO1xuICB9XG59XG4iXX0=