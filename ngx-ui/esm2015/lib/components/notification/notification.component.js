import { Component, Input, Output, EventEmitter, HostListener, HostBinding, ViewEncapsulation, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { NotificationStyleType } from './notification-style-type.enum';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function NotificationComponent_div_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 13);
} }
function NotificationComponent_div_3_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 14);
} }
function NotificationComponent_div_3_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 15);
} }
function NotificationComponent_div_3_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 16);
} }
function NotificationComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵtemplate(1, NotificationComponent_div_3_span_1_Template, 1, 0, "span", 9);
    ɵngcc0.ɵɵtemplate(2, NotificationComponent_div_3_span_2_Template, 1, 0, "span", 10);
    ɵngcc0.ɵɵtemplate(3, NotificationComponent_div_3_span_3_Template, 1, 0, "span", 11);
    ɵngcc0.ɵɵtemplate(4, NotificationComponent_div_3_span_4_Template, 1, 0, "span", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.styleType === ctx_r0.NotificationStyleType.info);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.styleType === ctx_r0.NotificationStyleType.warning);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.styleType === ctx_r0.NotificationStyleType.error);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.styleType === ctx_r0.NotificationStyleType.success);
} }
function NotificationComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵelement(1, "span");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap("icon " + ctx_r1.icon);
} }
function NotificationComponent_8_ng_template_0_Template(rf, ctx) { }
function NotificationComponent_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, NotificationComponent_8_ng_template_0_Template, 0, 0, "ng-template", 17);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.template);
} }
function NotificationComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 18);
    ɵngcc0.ɵɵlistener("click", function NotificationComponent_button_9_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.close.emit(); });
    ɵngcc0.ɵɵelementEnd();
} }
const _c0 = function (a0) { return { "animation-duration": a0 }; };
export class NotificationComponent {
    constructor() {
        this.cssClass = '';
        this.close = new EventEmitter();
        this.pause = new EventEmitter();
        this.resume = new EventEmitter();
        this.NotificationStyleType = NotificationStyleType;
    }
    get showClose() {
        return this._showClose;
    }
    set showClose(showClose) {
        this._showClose = coerceBooleanProperty(showClose);
    }
    get pauseOnHover() {
        return this._pauseOnHover;
    }
    set pauseOnHover(pauseOnHover) {
        this._pauseOnHover = coerceBooleanProperty(pauseOnHover);
    }
    get timestamp() {
        return this._timestamp;
    }
    set timestamp(timestamp) {
        this._timestamp = coerceNumberProperty(timestamp);
    }
    get cssClasses() {
        let cls = `ngx-notification ngx-notification-${this.styleType}`;
        if (this.cssClass)
            cls += ` ${this.cssClass}`;
        if (this.showClose)
            cls += ' notification-closeable';
        return cls;
    }
    get animationDuration() {
        if (typeof this.timeout !== 'number') {
            return '3000s';
        }
        return `${this.timeout}ms`;
    }
    onMouseEnter() {
        if (this.pauseOnHover) {
            this.pause.emit();
        }
    }
    onMouseLeave() {
        if (this.pauseOnHover) {
            this.resume.emit();
        }
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(); };
NotificationComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NotificationComponent, selectors: [["ngx-notification"]], hostVars: 2, hostBindings: function NotificationComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseenter", function NotificationComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function NotificationComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.cssClasses);
    } }, inputs: { cssClass: "cssClass", showClose: "showClose", pauseOnHover: "pauseOnHover", timestamp: "timestamp", title: "title", body: "body", template: "template", styleType: "styleType", icon: "icon", timeout: "timeout" }, outputs: { close: "close", pause: "pause", resume: "resume" }, exportAs: ["ngxNotification"], decls: 10, vars: 13, consts: [[1, "notification-bar"], [1, "bar", 3, "ngStyle"], ["class", "icon-container", 4, "ngIf"], [1, "notification-content"], [1, "ngx-notification-title", 3, "innerHTML"], [1, "ngx-notification-body", 3, "innerHTML"], [4, "ngIf"], ["type", "button", "class", "icon-x ngx-notification-close", 3, "click", 4, "ngIf"], [1, "icon-container"], ["class", "icon icon-info-fulled", 4, "ngIf"], ["class", "icon icon-warning-filled", 4, "ngIf"], ["class", "icon icon-x-filled", 4, "ngIf"], ["class", "icon icon-check-filled", 4, "ngIf"], [1, "icon", "icon-info-fulled"], [1, "icon", "icon-warning-filled"], [1, "icon", "icon-x-filled"], [1, "icon", "icon-check-filled"], [3, "ngTemplateOutlet"], ["type", "button", 1, "icon-x", "ngx-notification-close", 3, "click"]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵelement(2, "div", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, NotificationComponent_div_3_Template, 5, 4, "div", 2);
        ɵngcc0.ɵɵtemplate(4, NotificationComponent_div_4_Template, 2, 2, "div", 2);
        ɵngcc0.ɵɵelementStart(5, "div", 3);
        ɵngcc0.ɵɵelement(6, "h2", 4);
        ɵngcc0.ɵɵelement(7, "p", 5);
        ɵngcc0.ɵɵtemplate(8, NotificationComponent_8_Template, 1, 1, undefined, 6);
        ɵngcc0.ɵɵtemplate(9, NotificationComponent_button_9_Template, 1, 0, "button", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("animated", ctx.timeout);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction1(11, _c0, ctx.animationDuration));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.styleType !== ctx.NotificationStyleType.none && !ctx.icon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.styleType === ctx.NotificationStyleType.none && ctx.icon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("has-icon", ctx.styleType !== ctx.NotificationStyleType.none || ctx.icon);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("innerHTML", ctx.title, ɵngcc0.ɵɵsanitizeHtml);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("innerHTML", ctx.body, ɵngcc0.ɵɵsanitizeHtml);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.template);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showClose);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], styles: [".ngx-notification-container{position:fixed;bottom:20px;right:20px;min-width:120px;max-width:400px;z-index:9998}.ngx-notification{display:block;margin-top:.5rem;position:relative;box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12);color:#fff;text-shadow:1px 1px rgba(0,0,0,.1);background:#313847}.ngx-notification .notification-bar{background-color:rgba(69,80,102,.2)}.ngx-notification .notification-bar .bar{background-color:#455066}.ngx-notification .icon-container .icon{color:#455066}.ngx-notification .notification-bar{width:5px;height:100%;position:absolute}.ngx-notification .notification-bar .bar{width:5px;height:100%;position:absolute;bottom:0}.ngx-notification .notification-bar.animated .bar{height:0%;-webkit-animation:heightBar 1s ease-out 0s 1;animation:heightBar 1s ease-out 0s 1}@-webkit-keyframes heightBar{0%{height:100%}to{height:0%}}@keyframes heightBar{0%{height:100%}to{height:0%}}.ngx-notification .icon-container{float:left;position:absolute;top:50%;transform:translateY(-50%);padding:0 1em;height:2.5rem}.ngx-notification .icon-container .icon{font-size:2.5rem;line-height:2.5rem}.ngx-notification .notification-content{padding:1.5rem;color:#cdd2dd;overflow:auto;max-height:300px}.ngx-notification .notification-content.has-icon{margin-left:4.5rem;border-left:1px solid #3b4457}.ngx-notification.notification-closeable{padding-right:1rem}.ngx-notification.ngx-notification-info .notification-bar{background-color:rgba(20,131,255,.2)}.ngx-notification.ngx-notification-info .notification-bar .bar{background-color:#1483ff}.ngx-notification.ngx-notification-info .icon-container .icon{color:#1483ff}.ngx-notification.ngx-notification-error .notification-bar{background-color:rgba(255,69,20,.2)}.ngx-notification.ngx-notification-error .notification-bar .bar{background-color:#ff4514}.ngx-notification.ngx-notification-error .icon-container .icon{color:#ff4514}.ngx-notification.ngx-notification-warning .notification-bar{background-color:rgba(255,168,20,.2)}.ngx-notification.ngx-notification-warning .notification-bar .bar{background-color:#ffa814}.ngx-notification.ngx-notification-warning .icon-container .icon{color:#ffa814}.ngx-notification.ngx-notification-success .notification-bar{background-color:rgba(29,222,182,.2)}.ngx-notification.ngx-notification-success .notification-bar .bar{background-color:#1ddeb6}.ngx-notification.ngx-notification-success .icon-container .icon{color:#1ddeb6}.ngx-notification .ngx-notification-title{margin:0;font-size:1.2rem;color:#fff}.ngx-notification .ngx-notification-body{font-size:.9rem;margin:0;line-height:1rem}.ngx-notification .ngx-notification-close{position:absolute;right:.5rem;top:.5rem;line-height:1em;padding:0;font-size:16px;height:16px}"], encapsulation: 2, changeDetection: 0 });
NotificationComponent.propDecorators = {
    cssClass: [{ type: Input }],
    title: [{ type: Input }],
    body: [{ type: Input }],
    template: [{ type: Input }],
    styleType: [{ type: Input }],
    icon: [{ type: Input }],
    timeout: [{ type: Input }],
    showClose: [{ type: Input }],
    pauseOnHover: [{ type: Input }],
    timestamp: [{ type: Input }],
    close: [{ type: Output }],
    pause: [{ type: Output }],
    resume: [{ type: Output }],
    cssClasses: [{ type: HostBinding, args: ['class',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NotificationComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxNotification',
                selector: 'ngx-notification',
                template: "<div>\n  <div class=\"notification-bar\" [class.animated]=\"timeout\">\n    <div class=\"bar\" [ngStyle]=\"{'animation-duration': animationDuration }\"></div>\n  </div>\n\n  <div *ngIf=\"styleType !== NotificationStyleType.none && !icon\" class=\"icon-container\">\n    <span *ngIf=\"styleType === NotificationStyleType.info\" class=\"icon icon-info-fulled\"></span>\n    <span *ngIf=\"styleType === NotificationStyleType.warning\" class=\"icon icon-warning-filled\"></span>\n    <span *ngIf=\"styleType === NotificationStyleType.error\" class=\"icon icon-x-filled\"></span>\n    <span *ngIf=\"styleType === NotificationStyleType.success\" class=\"icon icon-check-filled\"></span>\n  </div>\n\n  <div *ngIf=\"styleType === NotificationStyleType.none && icon\" class=\"icon-container\"><span [class]=\"'icon ' + icon\"></span></div>\n\n  <div class=\"notification-content\" [class.has-icon]=\"styleType !== NotificationStyleType.none || icon\">\n    <h2 class=\"ngx-notification-title\" [innerHTML]=\"title\"></h2>\n    <p class=\"ngx-notification-body\" [innerHTML]=\"body\"></p>\n    <ng-template *ngIf=\"template\" [ngTemplateOutlet]=\"template\"> </ng-template>\n    <button *ngIf=\"showClose\" type=\"button\" (click)=\"close.emit()\" class=\"icon-x ngx-notification-close\"></button>\n  </div>\n</div>\n\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-notification-container{position:fixed;bottom:20px;right:20px;min-width:120px;max-width:400px;z-index:9998}.ngx-notification{display:block;margin-top:.5rem;position:relative;box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12);color:#fff;text-shadow:1px 1px rgba(0,0,0,.1);background:#313847}.ngx-notification .notification-bar{background-color:rgba(69,80,102,.2)}.ngx-notification .notification-bar .bar{background-color:#455066}.ngx-notification .icon-container .icon{color:#455066}.ngx-notification .notification-bar{width:5px;height:100%;position:absolute}.ngx-notification .notification-bar .bar{width:5px;height:100%;position:absolute;bottom:0}.ngx-notification .notification-bar.animated .bar{height:0%;-webkit-animation:heightBar 1s ease-out 0s 1;animation:heightBar 1s ease-out 0s 1}@-webkit-keyframes heightBar{0%{height:100%}to{height:0%}}@keyframes heightBar{0%{height:100%}to{height:0%}}.ngx-notification .icon-container{float:left;position:absolute;top:50%;transform:translateY(-50%);padding:0 1em;height:2.5rem}.ngx-notification .icon-container .icon{font-size:2.5rem;line-height:2.5rem}.ngx-notification .notification-content{padding:1.5rem;color:#cdd2dd;overflow:auto;max-height:300px}.ngx-notification .notification-content.has-icon{margin-left:4.5rem;border-left:1px solid #3b4457}.ngx-notification.notification-closeable{padding-right:1rem}.ngx-notification.ngx-notification-info .notification-bar{background-color:rgba(20,131,255,.2)}.ngx-notification.ngx-notification-info .notification-bar .bar{background-color:#1483ff}.ngx-notification.ngx-notification-info .icon-container .icon{color:#1483ff}.ngx-notification.ngx-notification-error .notification-bar{background-color:rgba(255,69,20,.2)}.ngx-notification.ngx-notification-error .notification-bar .bar{background-color:#ff4514}.ngx-notification.ngx-notification-error .icon-container .icon{color:#ff4514}.ngx-notification.ngx-notification-warning .notification-bar{background-color:rgba(255,168,20,.2)}.ngx-notification.ngx-notification-warning .notification-bar .bar{background-color:#ffa814}.ngx-notification.ngx-notification-warning .icon-container .icon{color:#ffa814}.ngx-notification.ngx-notification-success .notification-bar{background-color:rgba(29,222,182,.2)}.ngx-notification.ngx-notification-success .notification-bar .bar{background-color:#1ddeb6}.ngx-notification.ngx-notification-success .icon-container .icon{color:#1ddeb6}.ngx-notification .ngx-notification-title{margin:0;font-size:1.2rem;color:#fff}.ngx-notification .ngx-notification-body{font-size:.9rem;margin:0;line-height:1rem}.ngx-notification .ngx-notification-close{position:absolute;right:.5rem;top:.5rem;line-height:1em;padding:0;font-size:16px;height:16px}"]
            }]
    }], function () { return []; }, { cssClass: [{
            type: Input
        }], close: [{
            type: Output
        }], pause: [{
            type: Output
        }], resume: [{
            type: Output
        }], showClose: [{
            type: Input
        }], pauseOnHover: [{
            type: Input
        }], timestamp: [{
            type: Input
        }], cssClasses: [{
            type: HostBinding,
            args: ['class']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }], title: [{
            type: Input
        }], body: [{
            type: Input
        }], template: [{
            type: Input
        }], styleType: [{
            type: Input
        }], icon: [{
            type: Input
        }], timeout: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFlBQVksRUFDWixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLFdBQVcsRUFDWCx1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVV2RSxNQUFNLE9BQU8scUJBQXFCO0FBQ2xDLElBVEE7QUFDRyxRQVFRLGFBQVEsR0FBRyxFQUFFLENBQUM7QUFDekIsUUErQlksVUFBSyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7QUFDN0MsUUFBWSxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztBQUM3QyxRQUFZLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0FBQzlDLFFBZ0JXLDBCQUFxQixHQUFHLHFCQUFxQixDQUFDO0FBQ3pELElBbUJBLENBQUM7QUFDRCxJQWhFRSxJQUNJLFNBQVM7QUFDZixRQUFJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUMzQixJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksU0FBUyxDQUFDLFNBQVM7QUFDekIsUUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZELElBQUUsQ0FBQztBQUNILElBQ0UsSUFDSSxZQUFZO0FBQ2xCLFFBQUksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0FBQzlCLElBQUUsQ0FBQztBQUNILElBQUUsSUFBSSxZQUFZLENBQUMsWUFBWTtBQUMvQixRQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDN0QsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUNJLFNBQVM7QUFDZixRQUFJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUMzQixJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksU0FBUyxDQUFDLFNBQVM7QUFDekIsUUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3RELElBQUUsQ0FBQztBQUNILElBS0UsSUFDSSxVQUFVO0FBQUssUUFDakIsSUFBSSxHQUFHLEdBQUcscUNBQXFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNwRSxRQUFJLElBQUksSUFBSSxDQUFDLFFBQVE7QUFBRSxZQUFBLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNsRCxRQUFJLElBQUksSUFBSSxDQUFDLFNBQVM7QUFBRSxZQUFBLEdBQUcsSUFBSSx5QkFBeUIsQ0FBQztBQUN6RCxRQUFJLE9BQU8sR0FBRyxDQUFDO0FBQ2YsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLGlCQUFpQjtBQUN2QixRQUFJLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtBQUMxQyxZQUFNLE9BQU8sT0FBTyxDQUFDO0FBQ3JCLFNBQUs7QUFDTCxRQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUM7QUFDL0IsSUFBRSxDQUFDO0FBQ0gsSUFTRSxZQUFZO0FBQUssUUFDZixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDM0IsWUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3hCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUVFLFlBQVk7QUFBSyxRQUNmLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtBQUMzQixZQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekIsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIO2lEQWhGQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtXQUMzQixRQUFRLEVBQUUsa0JBQWtCLGtCQUM1Qjs7Ozt5MEJBQTRDLGtCQUU1QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2NkJBQ2hELHM2REFDSTtBQUFDO0FBQ0ksdUJBQVAsS0FBSztBQUFLLG9CQUNWLEtBQUs7QUFBSyxtQkFDVixLQUFLO0FBQUssdUJBQ1YsS0FBSztBQUFLLHdCQUNWLEtBQUs7QUFBSyxtQkFDVixLQUFLO0FBQUssc0JBQ1YsS0FBSztBQUFLLHdCQUVWLEtBQUs7QUFDTiwyQkFPQyxLQUFLO0FBQ04sd0JBT0MsS0FBSztBQUNOLG9CQU9DLE1BQU07QUFBSyxvQkFDWCxNQUFNO0FBQUsscUJBQ1gsTUFBTTtBQUFLLHlCQUVYLFdBQVcsU0FBQyxPQUFPO0FBQ2pCLDJCQXFCRixZQUFZLFNBQUMsWUFBWTtBQUN2QiwyQkFNRixZQUFZLFNBQUMsWUFBWTtBQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSG9zdEJpbmRpbmcsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU3R5bGVUeXBlIH0gZnJvbSAnLi9ub3RpZmljYXRpb24tc3R5bGUtdHlwZS5lbnVtJztcblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnbmd4Tm90aWZpY2F0aW9uJyxcbiAgc2VsZWN0b3I6ICduZ3gtbm90aWZpY2F0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25vdGlmaWNhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25Db21wb25lbnQge1xuICBASW5wdXQoKSBjc3NDbGFzcyA9ICcnO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBib2R5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBzdHlsZVR5cGU6IE5vdGlmaWNhdGlvblN0eWxlVHlwZTtcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSB0aW1lb3V0OiBmYWxzZSB8IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBnZXQgc2hvd0Nsb3NlKCkge1xuICAgIHJldHVybiB0aGlzLl9zaG93Q2xvc2U7XG4gIH1cbiAgc2V0IHNob3dDbG9zZShzaG93Q2xvc2UpIHtcbiAgICB0aGlzLl9zaG93Q2xvc2UgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoc2hvd0Nsb3NlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBwYXVzZU9uSG92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhdXNlT25Ib3ZlcjtcbiAgfVxuICBzZXQgcGF1c2VPbkhvdmVyKHBhdXNlT25Ib3Zlcikge1xuICAgIHRoaXMuX3BhdXNlT25Ib3ZlciA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShwYXVzZU9uSG92ZXIpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHRpbWVzdGFtcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZXN0YW1wO1xuICB9XG4gIHNldCB0aW1lc3RhbXAodGltZXN0YW1wKSB7XG4gICAgdGhpcy5fdGltZXN0YW1wID0gY29lcmNlTnVtYmVyUHJvcGVydHkodGltZXN0YW1wKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHBhdXNlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVzdW1lID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgY3NzQ2xhc3NlcygpOiBzdHJpbmcge1xuICAgIGxldCBjbHMgPSBgbmd4LW5vdGlmaWNhdGlvbiBuZ3gtbm90aWZpY2F0aW9uLSR7dGhpcy5zdHlsZVR5cGV9YDtcbiAgICBpZiAodGhpcy5jc3NDbGFzcykgY2xzICs9IGAgJHt0aGlzLmNzc0NsYXNzfWA7XG4gICAgaWYgKHRoaXMuc2hvd0Nsb3NlKSBjbHMgKz0gJyBub3RpZmljYXRpb24tY2xvc2VhYmxlJztcbiAgICByZXR1cm4gY2xzO1xuICB9XG5cbiAgZ2V0IGFuaW1hdGlvbkR1cmF0aW9uKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy50aW1lb3V0ICE9PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuICczMDAwcyc7XG4gICAgfVxuICAgIHJldHVybiBgJHt0aGlzLnRpbWVvdXR9bXNgO1xuICB9XG5cbiAgcmVhZG9ubHkgTm90aWZpY2F0aW9uU3R5bGVUeXBlID0gTm90aWZpY2F0aW9uU3R5bGVUeXBlO1xuICB0aW1lcjogYW55O1xuXG4gIHByaXZhdGUgX3Nob3dDbG9zZT86IGJvb2xlYW47XG4gIHByaXZhdGUgX3BhdXNlT25Ib3Zlcj86IGJvb2xlYW47XG4gIHByaXZhdGUgX3RpbWVzdGFtcD86IG51bWJlcjtcblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgb25Nb3VzZUVudGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBhdXNlT25Ib3Zlcikge1xuICAgICAgdGhpcy5wYXVzZS5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIG9uTW91c2VMZWF2ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wYXVzZU9uSG92ZXIpIHtcbiAgICAgIHRoaXMucmVzdW1lLmVtaXQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==