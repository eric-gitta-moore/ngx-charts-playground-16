import { Component, Input, ViewEncapsulation, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { BehaviorSubject } from 'rxjs';
import { ButtonState } from './button-state.enum';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function ButtonComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 6);
} }
function ButtonComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 7);
} }
function ButtonComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 8);
} }
const _c0 = ["*"];
export class ButtonComponent {
    constructor() {
        this.inProgress$ = new BehaviorSubject(false);
        this.active$ = new BehaviorSubject(false);
        this.success$ = new BehaviorSubject(false);
        this.fail$ = new BehaviorSubject(false);
        this._state = ButtonState.Active;
        this._disabled = false;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(v) {
        this._disabled = coerceBooleanProperty(v);
    }
    get state() {
        return this._state;
    }
    set state(v) {
        this._state = v;
        this.inProgress$.next(v === ButtonState.InProgress);
        this.active$.next(v === ButtonState.Active);
        this.success$.next(v === ButtonState.Success);
        this.fail$.next(v === ButtonState.Fail);
    }
    get timeout() {
        return this._timeout === undefined ? 3000 : this._timeout;
    }
    set timeout(v) {
        this._timeout = coerceNumberProperty(v);
    }
    ngOnInit() {
        this.updateState();
    }
    ngOnChanges() {
        this.updateState();
        this.updatePromise();
    }
    updatePromise() {
        if (this.promise) {
            this.state = ButtonState.InProgress;
            return this.promise
                .then(() => {
                this.state = ButtonState.Success;
                this.updateState();
            })
                .catch(() => {
                this.state = ButtonState.Fail;
                this.updateState();
            });
        }
    }
    updateState() {
        if (!this.state) {
            this.state = ButtonState.Active;
        }
        if (this.timeout &&
            (this.state === ButtonState.Success || this.state === ButtonState.Fail || this.state === ButtonState.InProgress)) {
            clearTimeout(this._timer);
            this._timer = setTimeout(() => {
                this.state = ButtonState.Active;
                this.updateState();
            }, this.timeout);
        }
    }
    onClick(event) {
        if (this.disabled) {
            event.stopPropagation();
            event.preventDefault();
            return false;
        }
        return true;
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["ngx-button"]], hostAttrs: [1, "ngx-button"], hostVars: 10, hostBindings: function ButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function ButtonComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("in-progress", ctx.inProgress$.value)("active", ctx.active$.value)("success", ctx.success$.value)("fail", ctx.fail$.value)("disabled-button", ctx.disabled);
    } }, inputs: { disabled: "disabled", state: "state", timeout: "timeout", promise: "promise" }, exportAs: ["ngxButton"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 10, vars: 10, consts: [[3, "disabled"], [1, "content"], [1, "state-icon"], ["class", "icon icon-loading", 4, "ngIf"], ["class", "icon icon-check", 4, "ngIf"], ["class", "icon icon-x", 4, "ngIf"], [1, "icon", "icon-loading"], [1, "icon", "icon-check"], [1, "icon", "icon-x"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵelementStart(1, "span", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "span", 2);
        ɵngcc0.ɵɵtemplate(4, ButtonComponent_span_4_Template, 1, 0, "span", 3);
        ɵngcc0.ɵɵpipe(5, "async");
        ɵngcc0.ɵɵtemplate(6, ButtonComponent_span_6_Template, 1, 0, "span", 4);
        ɵngcc0.ɵɵpipe(7, "async");
        ɵngcc0.ɵɵtemplate(8, ButtonComponent_span_8_Template, 1, 0, "span", 5);
        ɵngcc0.ɵɵpipe(9, "async");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ɵngcc0.ɵɵpipeBind1(5, 4, ctx.inProgress$));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ɵngcc0.ɵɵpipeBind1(7, 6, ctx.success$));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ɵngcc0.ɵɵpipeBind1(9, 8, ctx.fail$));
    } }, directives: [ɵngcc1.NgIf], pipes: [ɵngcc1.AsyncPipe], styles: ["button{box-sizing:border-box;color:inherit;cursor:pointer;display:inline-block;position:relative;text-align:center;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;font:inherit;background:transparent;border:none;text-shadow:1px 1px rgba(0,0,0,.07)}button:active,button:focus{outline:none}.btn{box-sizing:border-box;color:#fff;display:inline-block;padding:.35em .55em;position:relative;text-align:center;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;font:inherit;font-size:.9em;font-weight:700;outline:none;line-height:1em;background:#455066;border:1px solid transparent;border-radius:2px;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);transition:background-color .2s,box-shadow .2s}.btn .icon,.btn .ngx-icon{font-weight:400;vertical-align:middle;line-height:1em;font-size:.9em}.btn .icon:before,.btn .ngx-icon:before{font-weight:inherit}.btn .icon.has-text,.btn .icon.has-text-right,.btn .ngx-icon.has-text,.btn .ngx-icon.has-text-right{margin-right:.2em}.btn .icon.has-text-left,.btn .ngx-icon.has-text-left{margin-left:.2em}.btn::-moz-focus-inner{border:0;padding:0}.btn:focus{outline:none;box-shadow:0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12)}.btn:active:hover:focus:not(.disabled),.btn:active:hover:focus:not([disabled]){cursor:pointer;background:#313847}.btn:active:hover:focus:not(.disabled).btn-primary,.btn:active:hover:focus:not([disabled]).btn-primary{background-color:#1483ff}.btn:active:hover:focus:not(.disabled).btn-warning,.btn:active:hover:focus:not([disabled]).btn-warning{background-color:#ffa814}.btn:active:hover:focus:not(.disabled).btn-danger,.btn:active:hover:focus:not([disabled]).btn-danger{background-color:#ff4514}.btn:active:hover:focus:not(.disabled).btn-link,.btn:active:hover:focus:not([disabled]).btn-link{background-color:transparent}.btn:active:hover:focus:not(.disabled).btn-bordered,.btn:active:hover:focus:not([disabled]).btn-bordered{border-color:#94c6ff;color:#94c6ff}.btn:active,.btn:focus,.btn:hover{text-decoration:none}.btn.small{font-size:.6em}.btn.large{font-size:1.3em}.btn.btn-primary{background-color:#479eff}.btn.btn-primary.btn-primary-gradient{background:linear-gradient(125.43deg,#54cdfc 10.86%,#479eff 49.11%)}.btn.btn-warning{background-color:#ffbb47;color:#07080b}.btn.btn-danger{background-color:#ff6d47}.btn.btn-link{background-color:transparent;box-shadow:none}.btn.btn-bordered,.btn.btn-primary.btn-bordered{border:1px solid #479eff;color:#479eff;background-color:transparent;box-shadow:none}.btn.btn-bordered.disabled-button,.btn.btn-primary.btn-bordered.disabled-button{opacity:.5}.btn.btn-bordered.disabled-button .button,.btn.btn-primary.btn-bordered.disabled-button .button{opacity:1}.btn.btn-default.btn-bordered{border:1px solid #fff;color:#fff;background-color:transparent;box-shadow:none}.btn.btn-default.btn-bordered:hover{border-color:#1483ff!important;color:#1483ff!important}.btn.btn-default.btn-bordered.disabled-button{opacity:.5}.btn.btn-default.btn-bordered.disabled-button .button{opacity:1}.btn.btn-file{cursor:pointer;padding:0}.btn.btn-file label{display:block;cursor:pointer;padding:.35em .75em}.btn.btn-file[disabled] label{cursor:not-allowed}.btn.btn-file input[type=file]{pointer-events:none;position:absolute;left:-9999px}.ngx-button{transition:background-color .25s ease-out!important}.ngx-button button{padding:0;width:100%}.ngx-button.disabled-button{pointer-events:none}.ngx-button.success{background-color:#1ddeb6!important;color:#fff}.ngx-button.fail{background-color:#ff4514!important;color:#fff}.ngx-button:focus{outline:none;box-shadow:0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12)}.ngx-button.fail,.ngx-button.in-progress,.ngx-button.success{pointer-events:auto;cursor:wait!important;color:#fff;position:relative;opacity:1!important}.ngx-button.fail button,.ngx-button.in-progress button,.ngx-button.success button{opacity:1}.ngx-button.fail *,.ngx-button.fail:active,.ngx-button.in-progress *,.ngx-button.in-progress:active,.ngx-button.success *,.ngx-button.success:active{pointer-events:none}.ngx-button.fail .content,.ngx-button.in-progress .content,.ngx-button.success .content{opacity:0;transition:opacity .25s ease-out}.ngx-button.fail.active .content,.ngx-button.in-progress.active .content,.ngx-button.success.active .content{opacity:1}.ngx-button.fail .state-icon,.ngx-button.in-progress .state-icon,.ngx-button.success .state-icon{position:absolute;display:inline-block;top:50%;left:50%;transform:translate(-50%,-50%)}.ngx-button.fail .state-icon .icon,.ngx-button.in-progress .state-icon .icon,.ngx-button.success .state-icon .icon{height:1em;width:1em;font-weight:700;color:#fff;overflow:hidden;font-size:1em}"], encapsulation: 2, changeDetection: 0 });
ButtonComponent.propDecorators = {
    promise: [{ type: Input }],
    disabled: [{ type: Input }],
    state: [{ type: Input }],
    timeout: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-button',
                exportAs: 'ngxButton',
                template: "<button [disabled]=\"disabled\">\n  <span class=\"content\"><ng-content></ng-content></span>\n  <span class=\"state-icon\">\n    <span *ngIf=\"inProgress$ | async\" class=\"icon icon-loading\"></span>\n    <span *ngIf=\"success$ | async\" class=\"icon icon-check\"></span>\n    <span *ngIf=\"fail$ | async\" class=\"icon icon-x\"></span>\n  </span>\n</button>\n",
                host: {
                    class: 'ngx-button',
                    '[class.in-progress]': 'inProgress$.value',
                    '[class.active]': 'active$.value',
                    '[class.success]': 'success$.value',
                    '[class.fail]': 'fail$.value',
                    '[class.disabled-button]': 'disabled'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["button{box-sizing:border-box;color:inherit;cursor:pointer;display:inline-block;position:relative;text-align:center;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;font:inherit;background:transparent;border:none;text-shadow:1px 1px rgba(0,0,0,.07)}button:active,button:focus{outline:none}.btn{box-sizing:border-box;color:#fff;display:inline-block;padding:.35em .55em;position:relative;text-align:center;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;font:inherit;font-size:.9em;font-weight:700;outline:none;line-height:1em;background:#455066;border:1px solid transparent;border-radius:2px;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);transition:background-color .2s,box-shadow .2s}.btn .icon,.btn .ngx-icon{font-weight:400;vertical-align:middle;line-height:1em;font-size:.9em}.btn .icon:before,.btn .ngx-icon:before{font-weight:inherit}.btn .icon.has-text,.btn .icon.has-text-right,.btn .ngx-icon.has-text,.btn .ngx-icon.has-text-right{margin-right:.2em}.btn .icon.has-text-left,.btn .ngx-icon.has-text-left{margin-left:.2em}.btn::-moz-focus-inner{border:0;padding:0}.btn:focus{outline:none;box-shadow:0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12)}.btn:active:hover:focus:not(.disabled),.btn:active:hover:focus:not([disabled]){cursor:pointer;background:#313847}.btn:active:hover:focus:not(.disabled).btn-primary,.btn:active:hover:focus:not([disabled]).btn-primary{background-color:#1483ff}.btn:active:hover:focus:not(.disabled).btn-warning,.btn:active:hover:focus:not([disabled]).btn-warning{background-color:#ffa814}.btn:active:hover:focus:not(.disabled).btn-danger,.btn:active:hover:focus:not([disabled]).btn-danger{background-color:#ff4514}.btn:active:hover:focus:not(.disabled).btn-link,.btn:active:hover:focus:not([disabled]).btn-link{background-color:transparent}.btn:active:hover:focus:not(.disabled).btn-bordered,.btn:active:hover:focus:not([disabled]).btn-bordered{border-color:#94c6ff;color:#94c6ff}.btn:active,.btn:focus,.btn:hover{text-decoration:none}.btn.small{font-size:.6em}.btn.large{font-size:1.3em}.btn.btn-primary{background-color:#479eff}.btn.btn-primary.btn-primary-gradient{background:linear-gradient(125.43deg,#54cdfc 10.86%,#479eff 49.11%)}.btn.btn-warning{background-color:#ffbb47;color:#07080b}.btn.btn-danger{background-color:#ff6d47}.btn.btn-link{background-color:transparent;box-shadow:none}.btn.btn-bordered,.btn.btn-primary.btn-bordered{border:1px solid #479eff;color:#479eff;background-color:transparent;box-shadow:none}.btn.btn-bordered.disabled-button,.btn.btn-primary.btn-bordered.disabled-button{opacity:.5}.btn.btn-bordered.disabled-button .button,.btn.btn-primary.btn-bordered.disabled-button .button{opacity:1}.btn.btn-default.btn-bordered{border:1px solid #fff;color:#fff;background-color:transparent;box-shadow:none}.btn.btn-default.btn-bordered:hover{border-color:#1483ff!important;color:#1483ff!important}.btn.btn-default.btn-bordered.disabled-button{opacity:.5}.btn.btn-default.btn-bordered.disabled-button .button{opacity:1}.btn.btn-file{cursor:pointer;padding:0}.btn.btn-file label{display:block;cursor:pointer;padding:.35em .75em}.btn.btn-file[disabled] label{cursor:not-allowed}.btn.btn-file input[type=file]{pointer-events:none;position:absolute;left:-9999px}.ngx-button{transition:background-color .25s ease-out!important}.ngx-button button{padding:0;width:100%}.ngx-button.disabled-button{pointer-events:none}.ngx-button.success{background-color:#1ddeb6!important;color:#fff}.ngx-button.fail{background-color:#ff4514!important;color:#fff}.ngx-button:focus{outline:none;box-shadow:0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12)}.ngx-button.fail,.ngx-button.in-progress,.ngx-button.success{pointer-events:auto;cursor:wait!important;color:#fff;position:relative;opacity:1!important}.ngx-button.fail button,.ngx-button.in-progress button,.ngx-button.success button{opacity:1}.ngx-button.fail *,.ngx-button.fail:active,.ngx-button.in-progress *,.ngx-button.in-progress:active,.ngx-button.success *,.ngx-button.success:active{pointer-events:none}.ngx-button.fail .content,.ngx-button.in-progress .content,.ngx-button.success .content{opacity:0;transition:opacity .25s ease-out}.ngx-button.fail.active .content,.ngx-button.in-progress.active .content,.ngx-button.success.active .content{opacity:1}.ngx-button.fail .state-icon,.ngx-button.in-progress .state-icon,.ngx-button.success .state-icon{position:absolute;display:inline-block;top:50%;left:50%;transform:translate(-50%,-50%)}.ngx-button.fail .state-icon .icon,.ngx-button.in-progress .state-icon .icon,.ngx-button.success .state-icon .icon{height:1em;width:1em;font-weight:700;color:#fff;overflow:hidden;font-size:1em}"]
            }]
    }], function () { return []; }, { disabled: [{
            type: Input
        }], state: [{
            type: Input
        }], timeout: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], promise: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsRUFHakIsWUFBWSxFQUNaLHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFrQmxELE1BQU0sT0FBTyxlQUFlO0FBQUcsSUFoQi9CO0FBQ0csUUErQ1EsZ0JBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxRQUFXLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoRCxRQUFXLGFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqRCxRQUFXLFVBQUssR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QyxRQUNVLFdBQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO0FBQ3RDLFFBQVUsY0FBUyxHQUFHLEtBQUssQ0FBQztBQUM1QixJQXdEQSxDQUFDO0FBQ0QsSUE3RkUsSUFDSSxRQUFRO0FBQ2QsUUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDMUIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLFFBQVEsQ0FBQyxDQUFVO0FBQ3pCLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztB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QUMzQixZQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdkIsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBRUUsT0FBTyxDQUFDLEtBQVk7QUFDdEIsUUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDdkIsWUFBTSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDOUIsWUFBTSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDN0IsWUFDTSxPQUFPLEtBQUssQ0FBQztBQUNuQixTQUFLO0FBQ0wsUUFDSSxPQUFPLElBQUksQ0FBQztBQUNoQixJQUFFLENBQUM7QUFDSDsyQ0EvR0MsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRTtBQUFZLGtCQUN0QixRQUFRLEVBQUUsV0FBVyxrQkFDckI7Ozs4Q0FBc0Msa0JBRXRDLElBQUksRUFBRSxzQkFDSixLQUFLLEVBQUUsWUFBWSxzQkFDbkIscUJBQXFCLEVBQUUsbUJBQW1CO2FBQzFDLGdCQUFnQixFQUFFLGVBQWUsc0JBQ2pDLGlCQUFpQixFQUFFLGdCQUFnQixzQkFDbkMsY0FBYyxFQUFFLGFBQWEsc0JBQzdCLHlCQUF5QixFQUFFLFVBQVUsa0JBQ3RDLGtCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bWtIQUNoRCwwd0NBQ0k7QUFBQztBQUFtQyxzQkFDdEMsS0FBSztBQUFLLHVCQUVWLEtBQUs7QUFDTixvQkFPQyxLQUFLO0FBQ04sc0JBWUMsS0FBSztBQUNOLHNCQTJEQyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO0FBQy9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgSG9zdExpc3RlbmVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSwgY29lcmNlTnVtYmVyUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEJ1dHRvblN0YXRlIH0gZnJvbSAnLi9idXR0b24tc3RhdGUuZW51bSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1idXR0b24nLFxuICBleHBvcnRBczogJ25neEJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbmd4LWJ1dHRvbicsXG4gICAgJ1tjbGFzcy5pbi1wcm9ncmVzc10nOiAnaW5Qcm9ncmVzcyQudmFsdWUnLFxuICAgICdbY2xhc3MuYWN0aXZlXSc6ICdhY3RpdmUkLnZhbHVlJyxcbiAgICAnW2NsYXNzLnN1Y2Nlc3NdJzogJ3N1Y2Nlc3MkLnZhbHVlJyxcbiAgICAnW2NsYXNzLmZhaWxdJzogJ2ZhaWwkLnZhbHVlJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkLWJ1dHRvbl0nOiAnZGlzYWJsZWQnXG4gIH0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgcHJvbWlzZT86IFByb21pc2U8YW55PjtcblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgc3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICB9XG4gIHNldCBzdGF0ZSh2OiBCdXR0b25TdGF0ZSkge1xuICAgIHRoaXMuX3N0YXRlID0gdjtcblxuICAgIHRoaXMuaW5Qcm9ncmVzcyQubmV4dCh2ID09PSBCdXR0b25TdGF0ZS5JblByb2dyZXNzKTtcbiAgICB0aGlzLmFjdGl2ZSQubmV4dCh2ID09PSBCdXR0b25TdGF0ZS5BY3RpdmUpO1xuICAgIHRoaXMuc3VjY2VzcyQubmV4dCh2ID09PSBCdXR0b25TdGF0ZS5TdWNjZXNzKTtcbiAgICB0aGlzLmZhaWwkLm5leHQodiA9PT0gQnV0dG9uU3RhdGUuRmFpbCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgdGltZW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZW91dCA9PT0gdW5kZWZpbmVkID8gMzAwMCA6IHRoaXMuX3RpbWVvdXQ7XG4gIH1cbiAgc2V0IHRpbWVvdXQodjogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGltZW91dCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHYpO1xuICB9XG5cbiAgcmVhZG9ubHkgaW5Qcm9ncmVzcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgcmVhZG9ubHkgYWN0aXZlJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICByZWFkb25seSBzdWNjZXNzJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICByZWFkb25seSBmYWlsJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXG4gIHByaXZhdGUgX3N0YXRlID0gQnV0dG9uU3RhdGUuQWN0aXZlO1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF90aW1lcjogYW55O1xuICBwcml2YXRlIF90aW1lb3V0OiBhbnk7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIHRoaXMudXBkYXRlUHJvbWlzZSgpO1xuICB9XG5cbiAgdXBkYXRlUHJvbWlzZSgpIHtcbiAgICBpZiAodGhpcy5wcm9taXNlKSB7XG4gICAgICB0aGlzLnN0YXRlID0gQnV0dG9uU3RhdGUuSW5Qcm9ncmVzcztcblxuICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IEJ1dHRvblN0YXRlLlN1Y2Nlc3M7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3RhdGUgPSBCdXR0b25TdGF0ZS5GYWlsO1xuICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlU3RhdGUoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlKSB7XG4gICAgICB0aGlzLnN0YXRlID0gQnV0dG9uU3RhdGUuQWN0aXZlO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXMudGltZW91dCAmJlxuICAgICAgKHRoaXMuc3RhdGUgPT09IEJ1dHRvblN0YXRlLlN1Y2Nlc3MgfHwgdGhpcy5zdGF0ZSA9PT0gQnV0dG9uU3RhdGUuRmFpbCB8fCB0aGlzLnN0YXRlID09PSBCdXR0b25TdGF0ZS5JblByb2dyZXNzKVxuICAgICkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKTtcbiAgICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBCdXR0b25TdGF0ZS5BY3RpdmU7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgIH0sIHRoaXMudGltZW91dCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBvbkNsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl19