import { animate, state, style, transition, trigger } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { DialogComponent } from '../dialog.component';
import { AlertTypes } from './alert-types.enum';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../../input/input.component';
import * as ɵngcc3 from '@angular/forms';
import * as ɵngcc4 from '../../long-press/long-press-button.component';

const _c0 = ["dialogContent"];
function AlertComponent_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 13);
    ɵngcc0.ɵɵlistener("click", function AlertComponent_div_3_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12.hide(); });
    ɵngcc0.ɵɵelement(1, "span", 14);
    ɵngcc0.ɵɵelementEnd();
} }
function AlertComponent_div_3_button_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function AlertComponent_div_3_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 15);
    ɵngcc0.ɵɵlistener("click", function AlertComponent_div_3_button_2_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.onOkClick(); });
    ɵngcc0.ɵɵtemplate(1, AlertComponent_div_3_button_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext(2);
    const _r5 = ɵngcc0.ɵɵreference(8);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r5);
} }
function AlertComponent_div_3_h1_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "h1", 17);
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r11.title, ɵngcc0.ɵɵsanitizeHtml);
} }
function AlertComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtemplate(1, AlertComponent_div_3_button_1_Template, 2, 0, "button", 10);
    ɵngcc0.ɵɵtemplate(2, AlertComponent_div_3_button_2_Template, 2, 1, "button", 11);
    ɵngcc0.ɵɵtemplate(3, AlertComponent_div_3_h1_3_Template, 1, 1, "h1", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.closeButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.type === ctx_r1.AlertTypes.Alert);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.title);
} }
function AlertComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 18);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r2.content, ɵngcc0.ɵɵsanitizeHtml);
} }
function AlertComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 19);
    ɵngcc0.ɵɵelementStart(1, "ngx-input", 20);
    ɵngcc0.ɵɵlistener("ngModelChange", function AlertComponent_div_5_Template_ngx_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); const ctx_r17 = ɵngcc0.ɵɵnextContext(); return ctx_r17.data = $event; });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r3.data);
} }
function AlertComponent_div_6_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function AlertComponent_div_6_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function AlertComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "button", 24);
    ɵngcc0.ɵɵlistener("click", function AlertComponent_div_6_ng_container_1_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r24); const ctx_r23 = ɵngcc0.ɵɵnextContext(2); return ctx_r23.onOkClick(); });
    ɵngcc0.ɵɵtemplate(2, AlertComponent_div_6_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "button", 24);
    ɵngcc0.ɵɵlistener("click", function AlertComponent_div_6_ng_container_1_Template_button_click_3_listener() { ɵngcc0.ɵɵrestoreView(_r24); const ctx_r25 = ɵngcc0.ɵɵnextContext(2); return ctx_r25.onCancelClick(); });
    ɵngcc0.ɵɵtemplate(4, AlertComponent_div_6_ng_container_1_ng_container_4_Template, 1, 0, "ng-container", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r19 = ɵngcc0.ɵɵnextContext(2);
    const _r5 = ɵngcc0.ɵɵreference(8);
    const _r7 = ɵngcc0.ɵɵreference(10);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r19.confirmButtonClass);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r5);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r19.cancelButtonClass);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r7);
} }
function AlertComponent_div_6_ngx_long_press_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-long-press-button", 25);
    ɵngcc0.ɵɵlistener("longPress", function AlertComponent_div_6_ngx_long_press_button_2_Template_ngx_long_press_button_longPress_0_listener() { ɵngcc0.ɵɵrestoreView(_r27); const ctx_r26 = ɵngcc0.ɵɵnextContext(2); return ctx_r26.onOkClick(); });
    ɵngcc0.ɵɵelementEnd();
} }
function AlertComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 21);
    ɵngcc0.ɵɵtemplate(1, AlertComponent_div_6_ng_container_1_Template, 5, 4, "ng-container", 22);
    ɵngcc0.ɵɵtemplate(2, AlertComponent_div_6_ngx_long_press_button_2_Template, 1, 0, "ngx-long-press-button", 23);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r4.longPress);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.longPress);
} }
function AlertComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵtextInterpolate(ctx_r6.confirmButtonText || "Ok");
} }
function AlertComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵtextInterpolate(ctx_r8.cancelButtonText || "Cancel");
} }
export class AlertComponent extends DialogComponent {
    constructor() {
        super(...arguments);
        this.data = '';
        this.ok = new EventEmitter();
        this.cancel = new EventEmitter();
        this.AlertTypes = AlertTypes;
        this.defaults = {
            inputs: {
                zIndex: 991,
                closeOnBlur: false,
                closeOnEscape: false,
                closeButton: false,
                showOverlay: true,
                visible: true,
                class: ''
            }
        };
    }
    get longPress() {
        return this._longPress;
    }
    set longPress(longPress) {
        this._longPress = coerceBooleanProperty(longPress);
    }
    ngOnInit() {
        if (this.longPress) {
            this.closeButton = true;
        }
    }
    ngAfterViewInit() {
        if (this.type !== AlertTypes.Prompt) {
            this.dialogElm.nativeElement.focus();
        }
    }
    onOkClick() {
        this.ok.emit({ data: this.data });
        this.hide();
    }
    onCancelClick() {
        this.cancel.emit({ data: this.data });
        this.hide();
    }
    onKeydown() {
        if (!this.longPress) {
            this.ok.emit({ data: this.data });
            this.hide();
        }
    }
}
AlertComponent.ɵfac = /*@__PURE__*/ function () { let ɵAlertComponent_BaseFactory; return function AlertComponent_Factory(t) { return (ɵAlertComponent_BaseFactory || (ɵAlertComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(AlertComponent)))(t || AlertComponent); }; }();
AlertComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["ngx-alert-dialog"]], viewQuery: function AlertComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dialogElm = _t.first);
    } }, hostAttrs: ["tabindex", "-1"], inputs: { data: "data", longPress: "longPress", type: "type", confirmButtonText: "confirmButtonText", confirmButtonClass: "confirmButtonClass", cancelButtonText: "cancelButtonText", cancelButtonClass: "cancelButtonClass" }, outputs: { ok: "ok", cancel: "cancel" }, exportAs: ["ngxAlertDialog"], features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 11, vars: 11, consts: [[1, "ngx-dialog", "ngx-alert-dialog", 3, "ngClass"], ["tabindex", "-1", "role", "dialog", 1, "ngx-dialog-content", 3, "ngClass", "keydown.escape", "keydown.enter"], ["dialogContent", ""], ["class", "ngx-dialog-header", 4, "ngIf"], ["class", "ngx-dialog-body", 3, "innerHTML", 4, "ngIf"], ["class", "ngx-dialog-body", 4, "ngIf"], ["class", "ngx-dialog-footer", 4, "ngIf"], ["okBtnContentTmpl", ""], ["cancelBtnContentTmpl", ""], [1, "ngx-dialog-header"], ["type", "button", "class", "close", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn close-button", 3, "click", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], ["type", "button", 1, "close", 3, "click"], [1, "icon-x"], ["type", "button", 1, "btn", "close-button", 3, "click"], [4, "ngTemplateOutlet"], [3, "innerHTML"], [1, "ngx-dialog-body", 3, "innerHTML"], [1, "ngx-dialog-body"], ["type", "text", "autofocus", "true", "name", "confirm_input", 3, "ngModel", "ngModelChange"], [1, "ngx-dialog-footer"], [4, "ngIf"], ["duration", "1000", 3, "longPress", 4, "ngIf"], ["type", "button", 1, "btn", 3, "ngClass", "click"], ["duration", "1000", 3, "longPress"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1, 2);
        ɵngcc0.ɵɵlistener("keydown.escape", function AlertComponent_Template_div_keydown_escape_1_listener() { return ctx.onCancelClick(); })("keydown.enter", function AlertComponent_Template_div_keydown_enter_1_listener() { return ctx.onKeydown(); });
        ɵngcc0.ɵɵtemplate(3, AlertComponent_div_3_Template, 4, 3, "div", 3);
        ɵngcc0.ɵɵtemplate(4, AlertComponent_div_4_Template, 1, 1, "div", 4);
        ɵngcc0.ɵɵtemplate(5, AlertComponent_div_5_Template, 2, 1, "div", 5);
        ɵngcc0.ɵɵtemplate(6, AlertComponent_div_6_Template, 3, 2, "div", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(7, AlertComponent_ng_template_7_Template, 1, 1, "ng-template", null, 7, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(9, AlertComponent_ng_template_9_Template, 1, 1, "ng-template", null, 8, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("z-index", ctx.zIndex);
        ɵngcc0.ɵɵproperty("ngClass", ctx.type);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("z-index", ctx.contentzIndex);
        ɵngcc0.ɵɵproperty("ngClass", ctx.cssClass)("@visibilityTransition", ctx.visibleState);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.title || ctx.closeButton);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.content);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.type === ctx.AlertTypes.Prompt);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.type !== ctx.AlertTypes.Alert);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc2.InputComponent, ɵngcc3.NgControlStatus, ɵngcc3.NgModel, ɵngcc4.LongPressButtonComponent], styles: [".ngx-dialog{position:fixed;display:flex;align-items:center;justify-content:center;top:0;left:0;height:100vh;width:100%;pointer-events:none}.ngx-dialog .ngx-dialog-content{pointer-events:auto;border-radius:2px;box-shadow:0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12);background:#1c2029;padding:1.4rem;position:relative;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;min-width:250px;font-size:.9rem;color:#9c9c9c}.ngx-dialog .ngx-dialog-content--large{padding:0;height:calc(100% - 7.25rem);width:calc(100% - 7.5rem)}.ngx-dialog .ngx-dialog-content .close{position:absolute;font-size:20px;color:#cfcfcf;right:-25px;top:-25px}.ngx-dialog .ngx-dialog-content .ngx-dialog-header .ngx-dialog-title,.ngx-dialog .ngx-dialog-content .ngx-dialog-header h1{font-size:1.8rem;font-weight:500;margin:0 0 1.4rem;color:#cfcfcf}.ngx-dialog .ngx-dialog-content .ngx-dialog-footer{text-align:right}.ngx-dialog .ngx-dialog-content .ngx-dialog-footer .btn{margin-left:5px}.ngx-dialog.wizard .ngx-dialog-content{padding:0;background:#2b3240}.ngx-dialog.wizard .ngx-dialog-content .ngx-dialog-header{padding:1.4rem;background:#262c38}.ngx-dialog.wizard .ngx-dialog-content .ngx-dialog-header h1{margin:0}.ngx-dialog.wizard .ngx-dialog-content .ngx-dialog-footer{padding:1.4rem}.ngx-dialog.wizard .ngx-dialog-content .ngx-dialog-footer .wizard-nav{float:left}.ngx-dialog.wizard .ngx-dialog-content .ngx-dialog-footer .wizard-nav .btn{margin:0 5px 0 0}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs{margin-bottom:0}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs .ngx-tabs-list{padding:0 20px;background:#212631;border-bottom:2px solid #212631}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs .ngx-tabs-list .ngx-tab{background:#212631}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs .ngx-tabs-list .ngx-tab button{padding:.6em .75em;text-transform:uppercase}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs .ngx-tabs-list .ngx-tab.active{background:#313847}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs .ngx-tab-content{padding:1.4rem 1.4rem 0}.ngx-dialog.ngx-dialog-full-screen{width:100vw;height:100%;overflow-y:scroll;position:fixed;top:0;bottom:0;left:0;right:0}.ngx-dialog.ngx-dialog-full-screen .ngx-dialog-content{box-shadow:none;width:100%;min-height:100vh}.ngx-dialog.ngx-dialog-full-screen .ngx-dialog-content button.close{color:#afb7c8;font-size:24px;opacity:1;top:56px;right:56px;text-shadow:none}@-webkit-keyframes anim-open{0%{opacity:0;transform:scale3d(1.1,1.1,1)}to{opacity:1;transform:scaleX(1)}}@keyframes anim-open{0%{opacity:0;transform:scale3d(1.1,1.1,1)}to{opacity:1;transform:scaleX(1)}}@-webkit-keyframes anim-close{0%{opacity:1}to{opacity:0;transform:scale3d(.9,.9,1)}}@keyframes anim-close{0%{opacity:1}to{opacity:0;transform:scale3d(.9,.9,1)}}", ".ngx-alert-dialog .ngx-dialog-content{padding:0;background:#2b3240}.ngx-alert-dialog .ngx-dialog-content .ngx-dialog-header{padding:1.4rem 2rem 0}.ngx-alert-dialog .ngx-dialog-content .ngx-dialog-header h1{font-size:18px;margin:0;color:#fff;font-weight:600}.ngx-alert-dialog .ngx-dialog-content .ngx-dialog-body{padding:.5rem 2rem;color:#909cb4}.ngx-alert-dialog .ngx-dialog-content .ngx-dialog-footer{padding:1.4rem 2rem}.ngx-alert-dialog.alert .ngx-dialog-content .ngx-dialog-header{padding:1.4rem 2rem;border-left:5px solid #1483ff;background:#262c38}.ngx-alert-dialog.alert .ngx-dialog-content .ngx-dialog-header .close-button{float:right;background:#1483ff;color:#fff}.ngx-alert-dialog.alert .ngx-dialog-content .ngx-dialog-body{padding:1.4rem 2rem}.ngx-alert-dialog.alert .ngx-dialog-content.ngx-alert-danger .ngx-dialog-header{border-left-color:#ff4514}.ngx-alert-dialog.alert .ngx-dialog-content.ngx-alert-danger .ngx-dialog-header .close-button{background:#ff4514;color:#fff}.ngx-alert-dialog.alert .ngx-dialog-content.ngx-alert-warning .ngx-dialog-header{border-left-color:#ffa814}.ngx-alert-dialog.alert .ngx-dialog-content.ngx-alert-warning .ngx-dialog-header .close-button{background:#ffa814;color:#1c2029}.ngx-alert-dialog.confirm,.ngx-alert-dialog.prompt{text-align:center}.ngx-alert-dialog.confirm .ngx-dialog-footer,.ngx-alert-dialog.prompt .ngx-dialog-footer{padding:.5rem 2rem 1.4rem;text-align:center}"], encapsulation: 2, data: { animation: [
            trigger('visibilityTransition', [
                state('active', style({
                    opacity: 1,
                    transform: 'scale3d(1, 1, 1)'
                })),
                transition('void => *', [
                    style({
                        opacity: 0,
                        transform: 'scale3d(1.2, 1.2, 1.2)'
                    }),
                    animate('0.2s ease-out')
                ]),
                transition('* => inactive', [
                    style({
                        opacity: 1,
                        transform: 'scale3d(1, 1, 1)'
                    }),
                    animate('0.2s ease-out', style({
                        transform: 'scale3d(0.9, 0.9, 1)',
                        opacity: 0
                    }))
                ])
            ])
        ] }, changeDetection: 0 });
AlertComponent.propDecorators = {
    type: [{ type: Input }],
    data: [{ type: Input }],
    confirmButtonText: [{ type: Input }],
    confirmButtonClass: [{ type: Input }],
    cancelButtonText: [{ type: Input }],
    cancelButtonClass: [{ type: Input }],
    longPress: [{ type: Input }],
    ok: [{ type: Output }],
    cancel: [{ type: Output }],
    dialogElm: [{ type: ViewChild, args: ['dialogContent', { static: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AlertComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxAlertDialog',
                selector: 'ngx-alert-dialog',
                template: "<div class=\"ngx-dialog ngx-alert-dialog\" [style.zIndex]=\"zIndex\" [ngClass]=\"type\">\n  <div\n    class=\"ngx-dialog-content\"\n    [ngClass]=\"cssClass\"\n    [@visibilityTransition]=\"visibleState\"\n    [style.zIndex]=\"contentzIndex\"\n    #dialogContent\n    (keydown.escape)=\"onCancelClick()\"\n    (keydown.enter)=\"onKeydown()\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n  >\n    <div class=\"ngx-dialog-header\" *ngIf=\"title || closeButton\">\n      <button *ngIf=\"closeButton\" type=\"button\" class=\"close\" (click)=\"hide()\">\n        <span class=\"icon-x\"></span>\n      </button>\n      <button *ngIf=\"type === AlertTypes.Alert\" type=\"button\" class=\"btn close-button\" (click)=\"onOkClick()\">\n        <ng-container *ngTemplateOutlet=\"okBtnContentTmpl\"></ng-container>\n      </button>\n      <h1 *ngIf=\"title\" [innerHTML]=\"title\"></h1>\n    </div>\n    <div *ngIf=\"content\" class=\"ngx-dialog-body\" [innerHTML]=\"content\"></div>\n\n    <div class=\"ngx-dialog-body\" *ngIf=\"type === AlertTypes.Prompt\">\n      <ngx-input type=\"text\" autofocus=\"true\" name=\"confirm_input\" [(ngModel)]=\"data\"></ngx-input>\n    </div>\n\n    <div class=\"ngx-dialog-footer\" *ngIf=\"type !== AlertTypes.Alert\">\n      <ng-container *ngIf=\"!longPress\">\n        <button type=\"button\" class=\"btn\" [ngClass]=\"confirmButtonClass\" (click)=\"onOkClick()\">\n          <ng-container *ngTemplateOutlet=\"okBtnContentTmpl\"></ng-container>\n        </button>\n        <button type=\"button\" class=\"btn\" [ngClass]=\"cancelButtonClass\" (click)=\"onCancelClick()\">\n          <ng-container *ngTemplateOutlet=\"cancelBtnContentTmpl\"></ng-container>\n        </button>\n      </ng-container>\n      <ngx-long-press-button *ngIf=\"longPress\" (longPress)=\"onOkClick()\" duration=\"1000\"></ngx-long-press-button>\n    </div>\n  </div>\n</div>\n\n<ng-template #okBtnContentTmpl>{{ confirmButtonText || 'Ok' }}</ng-template>\n<ng-template #cancelBtnContentTmpl>{{ cancelButtonText || 'Cancel' }}</ng-template>\n",
                animations: [
                    trigger('visibilityTransition', [
                        state('active', style({
                            opacity: 1,
                            transform: 'scale3d(1, 1, 1)'
                        })),
                        transition('void => *', [
                            style({
                                opacity: 0,
                                transform: 'scale3d(1.2, 1.2, 1.2)'
                            }),
                            animate('0.2s ease-out')
                        ]),
                        transition('* => inactive', [
                            style({
                                opacity: 1,
                                transform: 'scale3d(1, 1, 1)'
                            }),
                            animate('0.2s ease-out', style({
                                transform: 'scale3d(0.9, 0.9, 1)',
                                opacity: 0
                            }))
                        ])
                    ])
                ],
                host: {
                    tabindex: '-1'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-dialog{position:fixed;display:flex;align-items:center;justify-content:center;top:0;left:0;height:100vh;width:100%;pointer-events:none}.ngx-dialog .ngx-dialog-content{pointer-events:auto;border-radius:2px;box-shadow:0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12);background:#1c2029;padding:1.4rem;position:relative;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;min-width:250px;font-size:.9rem;color:#9c9c9c}.ngx-dialog .ngx-dialog-content--large{padding:0;height:calc(100% - 7.25rem);width:calc(100% - 7.5rem)}.ngx-dialog .ngx-dialog-content .close{position:absolute;font-size:20px;color:#cfcfcf;right:-25px;top:-25px}.ngx-dialog .ngx-dialog-content .ngx-dialog-header .ngx-dialog-title,.ngx-dialog .ngx-dialog-content .ngx-dialog-header h1{font-size:1.8rem;font-weight:500;margin:0 0 1.4rem;color:#cfcfcf}.ngx-dialog .ngx-dialog-content .ngx-dialog-footer{text-align:right}.ngx-dialog .ngx-dialog-content .ngx-dialog-footer .btn{margin-left:5px}.ngx-dialog.wizard .ngx-dialog-content{padding:0;background:#2b3240}.ngx-dialog.wizard .ngx-dialog-content .ngx-dialog-header{padding:1.4rem;background:#262c38}.ngx-dialog.wizard .ngx-dialog-content .ngx-dialog-header h1{margin:0}.ngx-dialog.wizard .ngx-dialog-content .ngx-dialog-footer{padding:1.4rem}.ngx-dialog.wizard .ngx-dialog-content .ngx-dialog-footer .wizard-nav{float:left}.ngx-dialog.wizard .ngx-dialog-content .ngx-dialog-footer .wizard-nav .btn{margin:0 5px 0 0}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs{margin-bottom:0}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs .ngx-tabs-list{padding:0 20px;background:#212631;border-bottom:2px solid #212631}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs .ngx-tabs-list .ngx-tab{background:#212631}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs .ngx-tabs-list .ngx-tab button{padding:.6em .75em;text-transform:uppercase}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs .ngx-tabs-list .ngx-tab.active{background:#313847}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs .ngx-tab-content{padding:1.4rem 1.4rem 0}.ngx-dialog.ngx-dialog-full-screen{width:100vw;height:100%;overflow-y:scroll;position:fixed;top:0;bottom:0;left:0;right:0}.ngx-dialog.ngx-dialog-full-screen .ngx-dialog-content{box-shadow:none;width:100%;min-height:100vh}.ngx-dialog.ngx-dialog-full-screen .ngx-dialog-content button.close{color:#afb7c8;font-size:24px;opacity:1;top:56px;right:56px;text-shadow:none}@-webkit-keyframes anim-open{0%{opacity:0;transform:scale3d(1.1,1.1,1)}to{opacity:1;transform:scaleX(1)}}@keyframes anim-open{0%{opacity:0;transform:scale3d(1.1,1.1,1)}to{opacity:1;transform:scaleX(1)}}@-webkit-keyframes anim-close{0%{opacity:1}to{opacity:0;transform:scale3d(.9,.9,1)}}@keyframes anim-close{0%{opacity:1}to{opacity:0;transform:scale3d(.9,.9,1)}}", ".ngx-alert-dialog .ngx-dialog-content{padding:0;background:#2b3240}.ngx-alert-dialog .ngx-dialog-content .ngx-dialog-header{padding:1.4rem 2rem 0}.ngx-alert-dialog .ngx-dialog-content .ngx-dialog-header h1{font-size:18px;margin:0;color:#fff;font-weight:600}.ngx-alert-dialog .ngx-dialog-content .ngx-dialog-body{padding:.5rem 2rem;color:#909cb4}.ngx-alert-dialog .ngx-dialog-content .ngx-dialog-footer{padding:1.4rem 2rem}.ngx-alert-dialog.alert .ngx-dialog-content .ngx-dialog-header{padding:1.4rem 2rem;border-left:5px solid #1483ff;background:#262c38}.ngx-alert-dialog.alert .ngx-dialog-content .ngx-dialog-header .close-button{float:right;background:#1483ff;color:#fff}.ngx-alert-dialog.alert .ngx-dialog-content .ngx-dialog-body{padding:1.4rem 2rem}.ngx-alert-dialog.alert .ngx-dialog-content.ngx-alert-danger .ngx-dialog-header{border-left-color:#ff4514}.ngx-alert-dialog.alert .ngx-dialog-content.ngx-alert-danger .ngx-dialog-header .close-button{background:#ff4514;color:#fff}.ngx-alert-dialog.alert .ngx-dialog-content.ngx-alert-warning .ngx-dialog-header{border-left-color:#ffa814}.ngx-alert-dialog.alert .ngx-dialog-content.ngx-alert-warning .ngx-dialog-header .close-button{background:#ffa814;color:#1c2029}.ngx-alert-dialog.confirm,.ngx-alert-dialog.prompt{text-align:center}.ngx-alert-dialog.confirm .ngx-dialog-footer,.ngx-alert-dialog.prompt .ngx-dialog-footer{padding:.5rem 2rem 1.4rem;text-align:center}"]
            }]
    }], null, { data: [{
            type: Input
        }], ok: [{
            type: Output
        }], cancel: [{
            type: Output
        }], longPress: [{
            type: Input
        }], type: [{
            type: Input
        }], confirmButtonText: [{
            type: Input
        }], confirmButtonClass: [{
            type: Input
        }], cancelButtonText: [{
            type: Input
        }], cancelButtonClass: [{
            type: Input
        }], dialogElm: [{
            type: ViewChild,
            args: ['dialogContent', { static: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2RpYWxvZy9hbGVydC9hbGVydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNENoRCxNQUFNLE9BQU8sY0FBZSxTQUFRLGVBQWU7QUFBRyxJQTFDdEQ7QUFDRztBQUNELFFBMENTLFNBQUksR0FBUSxFQUFFLENBQUM7QUFDMUIsUUFjWSxPQUFFLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7QUFDbkQsUUFBWSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7QUFDdkQsUUFJVyxlQUFVLEdBQUcsVUFBVSxDQUFDO0FBQ25DLFFBQVcsYUFBUSxHQUFrQjtBQUNyQyxZQUFJLE1BQU0sRUFBRTtBQUNaLGdCQUFNLE1BQU0sRUFBRSxHQUFH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LGlCQUFpQixDQUFDLElBQUksa0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQztBQUFNOzs7Ozs7Ozt1MEhBQ2hEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBQ0k7QUFBQztBQUFrQyxtQkFDckMsS0FBSztBQUFLLG1CQUNWLEtBQUs7QUFBSyxnQ0FDVixLQUFLO0FBQUssaUNBQ1YsS0FBSztBQUFLLCtCQUNWLEtBQUs7QUFBSyxnQ0FDVixLQUFLO0FBQUssd0JBRVYsS0FBSztBQUNOLGlCQVFDLE1BQU07QUFBSyxxQkFDWCxNQUFNO0FBQUssd0JBRVgsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFDMUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaWFsb2dPcHRpb25zIH0gZnJvbSAnLi4vZGlhbG9nLW9wdGlvbnMuaW50ZXJmYWNlJztcblxuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbGVydFR5cGVzIH0gZnJvbSAnLi9hbGVydC10eXBlcy5lbnVtJztcblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnbmd4QWxlcnREaWFsb2cnLFxuICBzZWxlY3RvcjogJ25neC1hbGVydC1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi4vZGlhbG9nLmNvbXBvbmVudC5zY3NzJywgJy4vYWxlcnQuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3Zpc2liaWxpdHlUcmFuc2l0aW9uJywgW1xuICAgICAgc3RhdGUoXG4gICAgICAgICdhY3RpdmUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJ1xuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLjIsIDEuMiwgMS4yKSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzAuMnMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGluYWN0aXZlJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZShcbiAgICAgICAgICAnMC4ycyBlYXNlLW91dCcsXG4gICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUzZCgwLjksIDAuOSwgMSknLFxuICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSxcbiAgaG9zdDoge1xuICAgIHRhYmluZGV4OiAnLTEnXG4gIH0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGV4dGVuZHMgRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcbiAgQElucHV0KCkgdHlwZTogQWxlcnRUeXBlcztcbiAgQElucHV0KCkgZGF0YTogYW55ID0gJyc7XG4gIEBJbnB1dCgpIGNvbmZpcm1CdXR0b25UZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbmZpcm1CdXR0b25DbGFzczogc3RyaW5nIHwgc3RyaW5nW107XG4gIEBJbnB1dCgpIGNhbmNlbEJ1dHRvblRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgY2FuY2VsQnV0dG9uQ2xhc3M6IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBsb25nUHJlc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvbmdQcmVzcztcbiAgfVxuXG4gIHNldCBsb25nUHJlc3MobG9uZ1ByZXNzKSB7XG4gICAgdGhpcy5fbG9uZ1ByZXNzID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGxvbmdQcmVzcyk7XG4gIH1cblxuICBAT3V0cHV0KCkgb2sgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZGF0YTogYW55IH0+KCk7XG4gIEBPdXRwdXQoKSBjYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZGF0YTogYW55IH0+KCk7XG5cbiAgQFZpZXdDaGlsZCgnZGlhbG9nQ29udGVudCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHJlYWRvbmx5IGRpYWxvZ0VsbTogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG5cbiAgcmVhZG9ubHkgQWxlcnRUeXBlcyA9IEFsZXJ0VHlwZXM7XG4gIHJlYWRvbmx5IGRlZmF1bHRzOiBEaWFsb2dPcHRpb25zID0ge1xuICAgIGlucHV0czoge1xuICAgICAgekluZGV4OiA5OTEsXG4gICAgICBjbG9zZU9uQmx1cjogZmFsc2UsXG4gICAgICBjbG9zZU9uRXNjYXBlOiBmYWxzZSxcbiAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZSxcbiAgICAgIHNob3dPdmVybGF5OiB0cnVlLFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgIGNsYXNzOiAnJ1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIF9sb25nUHJlc3M/OiBib29sZWFuO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxvbmdQcmVzcykge1xuICAgICAgdGhpcy5jbG9zZUJ1dHRvbiA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnR5cGUgIT09IEFsZXJ0VHlwZXMuUHJvbXB0KSB7XG4gICAgICB0aGlzLmRpYWxvZ0VsbS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgb25Pa0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMub2suZW1pdCh7IGRhdGE6IHRoaXMuZGF0YSB9KTtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIG9uQ2FuY2VsQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWwuZW1pdCh7IGRhdGE6IHRoaXMuZGF0YSB9KTtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIG9uS2V5ZG93bigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubG9uZ1ByZXNzKSB7XG4gICAgICB0aGlzLm9rLmVtaXQoeyBkYXRhOiB0aGlzLmRhdGEgfSk7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==