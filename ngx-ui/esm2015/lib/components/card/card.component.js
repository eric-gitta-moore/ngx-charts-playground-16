import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation, HostBinding } from '@angular/core';
import { CardStatus } from './card-status.enum';
import { CardOrientation } from './card-orientation.enum';
import { CardAppearance } from './card-appearance.enum';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../tooltip/tooltip.directive';
import * as ɵngcc3 from '../checkbox/checkbox.component';
import * as ɵngcc4 from '@angular/forms';

function CardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 7);
} }
function CardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 8);
} }
function CardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵelementStart(1, "div", 10);
    ɵngcc0.ɵɵlistener("click", function CardComponent_div_2_Template_div_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onOutlineClick($event); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("error", ctx_r2.error);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r2.outlineText);
} }
function CardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 11);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r3.status);
} }
function CardComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 12);
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("tooltipTitle", ctx_r4.statusTooltip)("ngClass", ctx_r4.status);
} }
function CardComponent_ngx_checkbox_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-checkbox", 13);
    ɵngcc0.ɵɵlistener("ngModelChange", function CardComponent_ngx_checkbox_5_Template_ngx_checkbox_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.selected = $event; })("click", function CardComponent_ngx_checkbox_5_Template_ngx_checkbox_click_0_listener($event) { return $event.stopPropagation(); })("change", function CardComponent_ngx_checkbox_5_Template_ngx_checkbox_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onSelect($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngModel", ctx_r5.selected);
} }
function CardComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 14);
} }
const _c0 = ["*"];
export class CardComponent {
    constructor() {
        this.disabled = false;
        this.orientation = CardOrientation.Horizontal;
        this.selectable = false;
        this.selected = false;
        this.appearance = CardAppearance.Normal;
        this.hideAccent = false;
        this.select = new EventEmitter();
        this.outlineClick = new EventEmitter();
    }
    get horizontal() {
        return this.orientation === CardOrientation.Horizontal;
    }
    get vertical() {
        return this.orientation === CardOrientation.Vertical;
    }
    get flat() {
        return this.appearance === CardAppearance.Flat;
    }
    onOutlineClick($event) {
        $event.stopPropagation();
        this.outlineClick.emit();
    }
    onSelect($event) {
        $event.stopPropagation();
        this.select.emit($event.target.checked);
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: CardComponent, selectors: [["ngx-card"]], hostAttrs: [1, "ngx-card"], hostVars: 8, hostBindings: function CardComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("disabled", ctx.disabled)("ngx-card-horizontal", ctx.horizontal)("ngx-card-vertical", ctx.vertical)("flat", ctx.flat);
    } }, inputs: { disabled: "disabled", orientation: "orientation", selectable: "selectable", selected: "selected", appearance: "appearance", hideAccent: "hideAccent", status: "status", statusTooltip: "statusTooltip", error: "error", outlineText: "outlineText" }, outputs: { select: "select", outlineClick: "outlineClick" }, exportAs: ["ngxCard"], ngContentSelectors: _c0, decls: 8, vars: 7, consts: [["class", "ngx-card--outline", 4, "ngIf"], ["class", "ngx-card--outline error", 4, "ngIf"], ["class", "ngx-card--outline-text", 3, "error", 4, "ngIf"], ["class", "ngx-card--status", 3, "ngClass", 4, "ngIf"], ["class", "ngx-card--status", "ngx-tooltip", "", "tooltipType", "tooltip", 3, "tooltipTitle", "ngClass", 4, "ngIf"], ["class", "ngx-card--select", "round", "", 3, "ngModel", "ngModelChange", "click", "change", 4, "ngIf"], ["class", "ngx-card--accent", 4, "ngIf"], [1, "ngx-card--outline"], [1, "ngx-card--outline", "error"], [1, "ngx-card--outline-text"], [1, "inner-text", 3, "click"], [1, "ngx-card--status", 3, "ngClass"], ["ngx-tooltip", "", "tooltipType", "tooltip", 1, "ngx-card--status", 3, "tooltipTitle", "ngClass"], ["round", "", 1, "ngx-card--select", 3, "ngModel", "ngModelChange", "click", "change"], [1, "ngx-card--accent"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, CardComponent_div_0_Template, 1, 0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, CardComponent_div_1_Template, 1, 0, "div", 1);
        ɵngcc0.ɵɵtemplate(2, CardComponent_div_2_Template, 3, 3, "div", 2);
        ɵngcc0.ɵɵtemplate(3, CardComponent_div_3_Template, 1, 1, "div", 3);
        ɵngcc0.ɵɵtemplate(4, CardComponent_div_4_Template, 1, 2, "div", 4);
        ɵngcc0.ɵɵtemplate(5, CardComponent_ngx_checkbox_5_Template, 1, 1, "ngx-checkbox", 5);
        ɵngcc0.ɵɵprojection(6);
        ɵngcc0.ɵɵtemplate(7, CardComponent_div_7_Template, 1, 0, "div", 6);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.selected && !ctx.outlineText && !ctx.error);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.error && !ctx.outlineText);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.outlineText);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.status && !ctx.statusTooltip);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.status && ctx.statusTooltip);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.selectable);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.hideAccent);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc2.TooltipDirective, ɵngcc3.CheckboxComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: ["@-webkit-keyframes cardSlideIn{0%{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}@keyframes cardSlideIn{0%{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}.ngx-card{display:flex;background:linear-gradient(180deg,#262c38,#1c2029);box-shadow:0 0 15px rgba(0,0,0,.3);border-radius:2px}.ngx-card.disabled{cursor:default;pointer-events:none}.ngx-card.disabled:hover{filter:none}.ngx-card--status{display:block;background-color:#505c75;width:8px;height:8px;border-radius:50%;box-shadow:inset 0 -2px 2px #455066}.ngx-card--status.success{background-color:#b0e53c;box-shadow:0 0 7px #b0e53c}.ngx-card--status.error{background-color:#ff4514;box-shadow:0 0 7px #ff4514}.ngx-card--accent{display:block;background:linear-gradient(180deg,#cdd2dd,#afb7c8)}.ngx-card .dot{display:inline-block;width:3px;height:3px;border-radius:50%;background-color:#72819f;margin:3px 5px}.ngx-card .ngx-dropdown.ellipsis{padding:0}.ngx-card.flat{background:none;box-shadow:none}.ngx-card-horizontal{position:relative;width:100%;min-width:500px;min-height:80px;height:80px;transition:all .2s ease-in-out;-webkit-animation:cardSlideIn .2s ease-in-out;animation:cardSlideIn .2s ease-in-out}.ngx-card-horizontal .ngx-card--status{position:absolute;left:10px;top:10px}.ngx-card-horizontal .ngx-card--select{margin-left:25px}.ngx-card-horizontal .ngx-card--select .ngx-checkbox--label .ngx-checkbox--box{margin-right:0}.ngx-card-horizontal .ngx-card--accent{position:absolute;width:4px;min-width:4px;right:0;height:100%;border-radius:0 2px 2px 0}.ngx-card-horizontal .ngx-card-header{display:flex;align-items:center;padding:0 25px;flex-grow:1;overflow:hidden;cursor:pointer}.ngx-card-horizontal .ngx-card-header.no-click{cursor:default}.ngx-card-horizontal .ngx-card-header--title-group{margin-left:25px;display:flex;flex-direction:column;width:calc(100% - 79px)}.ngx-card-horizontal .ngx-card-header--title-group .ngx-card-subtitle,.ngx-card-horizontal .ngx-card-header--title-group .ngx-card-tag,.ngx-card-horizontal .ngx-card-header--title-group .ngx-card-title{width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.ngx-card-horizontal .ngx-card-header--title-group .ngx-card-tag{font-weight:700;font-size:10px;line-height:12px}.ngx-card-horizontal .ngx-card-header--title-group .ngx-card-title{font-weight:600;font-size:22px;color:#f0f1f6}.ngx-card-horizontal .ngx-card-header--title-group .ngx-card-subtitle{display:inline-block;font-weight:600;font-size:14px;color:#909cb4}.ngx-card-horizontal .ngx-card-header--title-group .ngx-card-subtitle>span{display:inline-block}.ngx-card-horizontal .ngx-card-section{display:flex;align-items:center;justify-content:center;height:100%;padding:0 30px;border-left:1px solid #313847}.ngx-card-horizontal .ngx-card-section--description{flex-basis:28%;padding-top:15px;padding-bottom:15px}.ngx-card-horizontal .ngx-card-section--description>p{color:#818fa9;font-size:14px;line-height:18px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;word-break:break-word}.ngx-card-horizontal .ngx-card-section--placeholder{flex-direction:column;flex-basis:20%}.ngx-card-horizontal .ngx-card-section--placeholder .ngx-card-placeholder{margin-bottom:10px;width:100%}.ngx-card-horizontal .ngx-card-section--placeholder .ngx-card-placeholder:last-child{margin-bottom:0}.ngx-card-horizontal .ngx-card-section--placeholder.large{flex-basis:50%}.ngx-card-horizontal .ngx-card-section--placeholder.medium{flex-basis:28%}.ngx-card-horizontal .ngx-card-section--placeholder.small{flex-basis:20%}.ngx-card-horizontal .ngx-card-section .view-details{display:flex;color:#479eff;font-size:15px;font-weight:600;white-space:nowrap;cursor:pointer}.ngx-card-horizontal .ngx-card-section .view-details i{margin-top:5px;margin-right:5px}.ngx-card-horizontal .ngx-card-section .ngx-dropdown.ellipsis{margin-right:12px}.ngx-card-horizontal .ngx-card--outline{pointer-events:none;position:absolute;top:-5px;right:-5px;left:-5px;bottom:-5px;border:3px solid #479eff;border-radius:5px}.ngx-card-horizontal .ngx-card--outline.error{border-color:#ff4514}.ngx-card-horizontal .ngx-card--outline-text{pointer-events:none;color:#479eff;white-space:nowrap;position:absolute;top:-5px;right:-5px;left:-5px;bottom:-5px;border:3px solid #479eff;border-bottom:0;border-radius:5px}.ngx-card-horizontal .ngx-card--outline-text .inner-text{font-size:14px;width:100%;text-align:center;position:absolute;display:flex;align-items:center;bottom:-8px;pointer-events:auto;cursor:pointer}.ngx-card-horizontal .ngx-card--outline-text .inner-text:after,.ngx-card-horizontal .ngx-card--outline-text .inner-text:before{content:\"\";height:3px;background:#479eff}.ngx-card-horizontal .ngx-card--outline-text .inner-text:before{margin-right:15px;border-radius:0 0 0 2px;flex:1}.ngx-card-horizontal .ngx-card--outline-text .inner-text:after{margin-left:15px;border-radius:0 0 2px 0;width:20px}.ngx-card-horizontal .ngx-card--outline-text.error{color:#ff4514;border-color:#ff4514}.ngx-card-horizontal .ngx-card--outline-text.error .inner-text:after,.ngx-card-horizontal .ngx-card--outline-text.error .inner-text:before{background:#ff4514}.ngx-card-vertical{position:relative;flex-direction:column;min-width:347px;max-width:850px;height:418px;color:#818fa9}.ngx-card-vertical .ngx-card--status{margin:15px auto 0}.ngx-card-vertical .ngx-card--accent{position:absolute;bottom:0;width:100%;height:4px;border-radius:0 2px 2px 0}.ngx-card-vertical .ngx-card-header{position:relative;display:flex;flex-direction:column;align-items:center;border-bottom:2px #313847}.ngx-card-vertical .ngx-card-header .ngx-card-avatar{margin:15px 0 20px}.ngx-card-vertical .ngx-card-header--label{font-weight:600;font-size:12px;border-bottom:0;white-space:nowrap;width:100%;text-align:center;position:absolute;display:flex;align-items:center;bottom:-15px;left:0}.ngx-card-vertical .ngx-card-header--label:after,.ngx-card-vertical .ngx-card-header--label:before{content:\"\";height:2px;background:#313847;width:100%}.ngx-card-vertical .ngx-card-header--label:before{margin-right:20px}.ngx-card-vertical .ngx-card-header--label:after{margin-left:20px}.ngx-card-vertical .ngx-card-body{display:flex;flex-direction:column;align-items:center;flex-grow:1;padding:20px 27px}.ngx-card-vertical .ngx-card-body .ngx-card-subtitle,.ngx-card-vertical .ngx-card-body .ngx-card-title{font-weight:600;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}.ngx-card-vertical .ngx-card-body .ngx-card-title{font-weight:600;font-size:21px;color:#f0f1f6;margin-bottom:5px}.ngx-card-vertical .ngx-card-body .ngx-card-subtitle{color:#afb7c8;font-size:13px}.ngx-card-vertical .ngx-card-footer{position:relative;border-bottom:2px #313847;height:50px;padding:20px 0;margin-bottom:4px;display:flex;align-items:center;justify-content:center}.ngx-card-vertical .ngx-card-footer--label{font-weight:600;font-size:12px;border-bottom:0;white-space:nowrap;width:100%;text-align:center;position:absolute;display:flex;align-items:center;top:-15px;left:0}.ngx-card-vertical .ngx-card-footer--label:after,.ngx-card-vertical .ngx-card-footer--label:before{content:\"\";height:2px;background:#313847;width:100%}.ngx-card-vertical .ngx-card-footer--label:before{margin-right:20px}.ngx-card-vertical .ngx-card-footer--label:after{margin-left:20px}.ngx-card-vertical .ngx-card-footer .action{cursor:pointer;margin-right:25px}"], encapsulation: 2, changeDetection: 0 });
CardComponent.propDecorators = {
    horizontal: [{ type: HostBinding, args: ['class.ngx-card-horizontal',] }],
    vertical: [{ type: HostBinding, args: ['class.ngx-card-vertical',] }],
    flat: [{ type: HostBinding, args: ['class.flat',] }],
    disabled: [{ type: HostBinding, args: ['class.disabled',] }, { type: Input }],
    orientation: [{ type: Input }],
    status: [{ type: Input }],
    statusTooltip: [{ type: Input }],
    selectable: [{ type: Input }],
    selected: [{ type: Input }],
    error: [{ type: Input }],
    outlineText: [{ type: Input }],
    appearance: [{ type: Input }],
    hideAccent: [{ type: Input }],
    select: [{ type: Output }],
    outlineClick: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CardComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxCard',
                selector: 'ngx-card',
                template: "<div class=\"ngx-card--outline\" *ngIf=\"selected && !outlineText && !error\"></div>\n<div class=\"ngx-card--outline error\" *ngIf=\"error && !outlineText\"></div>\n\n<div class=\"ngx-card--outline-text\" [class.error]=\"error\" *ngIf=\"outlineText\">\n  <div class=\"inner-text\" (click)=\"onOutlineClick($event)\">{{outlineText}}</div>\n</div>\n\n<div\n  *ngIf=\"status && !statusTooltip\"\n  class=\"ngx-card--status\" \n  [ngClass]=\"status\"\n></div>\n<div\n  *ngIf=\"status && statusTooltip\"\n  class=\"ngx-card--status\"\n  ngx-tooltip\n  tooltipType=\"tooltip\"\n  [tooltipTitle]=\"statusTooltip\"\n  [ngClass]=\"status\"\n></div>\n\n<ngx-checkbox \n  *ngIf=\"selectable\"\n  class=\"ngx-card--select\"\n  round \n  [(ngModel)]=\"selected\"\n  (click)=\"$event.stopPropagation()\"\n  (change)=\"onSelect($event)\"\n></ngx-checkbox>\n\n<ng-content></ng-content>\n<div *ngIf=\"!hideAccent\" class=\"ngx-card--accent\"></div>",
                host: { class: 'ngx-card' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["@-webkit-keyframes cardSlideIn{0%{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}@keyframes cardSlideIn{0%{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}.ngx-card{display:flex;background:linear-gradient(180deg,#262c38,#1c2029);box-shadow:0 0 15px rgba(0,0,0,.3);border-radius:2px}.ngx-card.disabled{cursor:default;pointer-events:none}.ngx-card.disabled:hover{filter:none}.ngx-card--status{display:block;background-color:#505c75;width:8px;height:8px;border-radius:50%;box-shadow:inset 0 -2px 2px #455066}.ngx-card--status.success{background-color:#b0e53c;box-shadow:0 0 7px #b0e53c}.ngx-card--status.error{background-color:#ff4514;box-shadow:0 0 7px #ff4514}.ngx-card--accent{display:block;background:linear-gradient(180deg,#cdd2dd,#afb7c8)}.ngx-card .dot{display:inline-block;width:3px;height:3px;border-radius:50%;background-color:#72819f;margin:3px 5px}.ngx-card .ngx-dropdown.ellipsis{padding:0}.ngx-card.flat{background:none;box-shadow:none}.ngx-card-horizontal{position:relative;width:100%;min-width:500px;min-height:80px;height:80px;transition:all .2s ease-in-out;-webkit-animation:cardSlideIn .2s ease-in-out;animation:cardSlideIn .2s ease-in-out}.ngx-card-horizontal .ngx-card--status{position:absolute;left:10px;top:10px}.ngx-card-horizontal .ngx-card--select{margin-left:25px}.ngx-card-horizontal .ngx-card--select .ngx-checkbox--label .ngx-checkbox--box{margin-right:0}.ngx-card-horizontal .ngx-card--accent{position:absolute;width:4px;min-width:4px;right:0;height:100%;border-radius:0 2px 2px 0}.ngx-card-horizontal .ngx-card-header{display:flex;align-items:center;padding:0 25px;flex-grow:1;overflow:hidden;cursor:pointer}.ngx-card-horizontal .ngx-card-header.no-click{cursor:default}.ngx-card-horizontal .ngx-card-header--title-group{margin-left:25px;display:flex;flex-direction:column;width:calc(100% - 79px)}.ngx-card-horizontal .ngx-card-header--title-group .ngx-card-subtitle,.ngx-card-horizontal .ngx-card-header--title-group .ngx-card-tag,.ngx-card-horizontal .ngx-card-header--title-group .ngx-card-title{width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.ngx-card-horizontal .ngx-card-header--title-group .ngx-card-tag{font-weight:700;font-size:10px;line-height:12px}.ngx-card-horizontal .ngx-card-header--title-group .ngx-card-title{font-weight:600;font-size:22px;color:#f0f1f6}.ngx-card-horizontal .ngx-card-header--title-group .ngx-card-subtitle{display:inline-block;font-weight:600;font-size:14px;color:#909cb4}.ngx-card-horizontal .ngx-card-header--title-group .ngx-card-subtitle>span{display:inline-block}.ngx-card-horizontal .ngx-card-section{display:flex;align-items:center;justify-content:center;height:100%;padding:0 30px;border-left:1px solid #313847}.ngx-card-horizontal .ngx-card-section--description{flex-basis:28%;padding-top:15px;padding-bottom:15px}.ngx-card-horizontal .ngx-card-section--description>p{color:#818fa9;font-size:14px;line-height:18px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden;word-break:break-word}.ngx-card-horizontal .ngx-card-section--placeholder{flex-direction:column;flex-basis:20%}.ngx-card-horizontal .ngx-card-section--placeholder .ngx-card-placeholder{margin-bottom:10px;width:100%}.ngx-card-horizontal .ngx-card-section--placeholder .ngx-card-placeholder:last-child{margin-bottom:0}.ngx-card-horizontal .ngx-card-section--placeholder.large{flex-basis:50%}.ngx-card-horizontal .ngx-card-section--placeholder.medium{flex-basis:28%}.ngx-card-horizontal .ngx-card-section--placeholder.small{flex-basis:20%}.ngx-card-horizontal .ngx-card-section .view-details{display:flex;color:#479eff;font-size:15px;font-weight:600;white-space:nowrap;cursor:pointer}.ngx-card-horizontal .ngx-card-section .view-details i{margin-top:5px;margin-right:5px}.ngx-card-horizontal .ngx-card-section .ngx-dropdown.ellipsis{margin-right:12px}.ngx-card-horizontal .ngx-card--outline{pointer-events:none;position:absolute;top:-5px;right:-5px;left:-5px;bottom:-5px;border:3px solid #479eff;border-radius:5px}.ngx-card-horizontal .ngx-card--outline.error{border-color:#ff4514}.ngx-card-horizontal .ngx-card--outline-text{pointer-events:none;color:#479eff;white-space:nowrap;position:absolute;top:-5px;right:-5px;left:-5px;bottom:-5px;border:3px solid #479eff;border-bottom:0;border-radius:5px}.ngx-card-horizontal .ngx-card--outline-text .inner-text{font-size:14px;width:100%;text-align:center;position:absolute;display:flex;align-items:center;bottom:-8px;pointer-events:auto;cursor:pointer}.ngx-card-horizontal .ngx-card--outline-text .inner-text:after,.ngx-card-horizontal .ngx-card--outline-text .inner-text:before{content:\"\";height:3px;background:#479eff}.ngx-card-horizontal .ngx-card--outline-text .inner-text:before{margin-right:15px;border-radius:0 0 0 2px;flex:1}.ngx-card-horizontal .ngx-card--outline-text .inner-text:after{margin-left:15px;border-radius:0 0 2px 0;width:20px}.ngx-card-horizontal .ngx-card--outline-text.error{color:#ff4514;border-color:#ff4514}.ngx-card-horizontal .ngx-card--outline-text.error .inner-text:after,.ngx-card-horizontal .ngx-card--outline-text.error .inner-text:before{background:#ff4514}.ngx-card-vertical{position:relative;flex-direction:column;min-width:347px;max-width:850px;height:418px;color:#818fa9}.ngx-card-vertical .ngx-card--status{margin:15px auto 0}.ngx-card-vertical .ngx-card--accent{position:absolute;bottom:0;width:100%;height:4px;border-radius:0 2px 2px 0}.ngx-card-vertical .ngx-card-header{position:relative;display:flex;flex-direction:column;align-items:center;border-bottom:2px #313847}.ngx-card-vertical .ngx-card-header .ngx-card-avatar{margin:15px 0 20px}.ngx-card-vertical .ngx-card-header--label{font-weight:600;font-size:12px;border-bottom:0;white-space:nowrap;width:100%;text-align:center;position:absolute;display:flex;align-items:center;bottom:-15px;left:0}.ngx-card-vertical .ngx-card-header--label:after,.ngx-card-vertical .ngx-card-header--label:before{content:\"\";height:2px;background:#313847;width:100%}.ngx-card-vertical .ngx-card-header--label:before{margin-right:20px}.ngx-card-vertical .ngx-card-header--label:after{margin-left:20px}.ngx-card-vertical .ngx-card-body{display:flex;flex-direction:column;align-items:center;flex-grow:1;padding:20px 27px}.ngx-card-vertical .ngx-card-body .ngx-card-subtitle,.ngx-card-vertical .ngx-card-body .ngx-card-title{font-weight:600;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}.ngx-card-vertical .ngx-card-body .ngx-card-title{font-weight:600;font-size:21px;color:#f0f1f6;margin-bottom:5px}.ngx-card-vertical .ngx-card-body .ngx-card-subtitle{color:#afb7c8;font-size:13px}.ngx-card-vertical .ngx-card-footer{position:relative;border-bottom:2px #313847;height:50px;padding:20px 0;margin-bottom:4px;display:flex;align-items:center;justify-content:center}.ngx-card-vertical .ngx-card-footer--label{font-weight:600;font-size:12px;border-bottom:0;white-space:nowrap;width:100%;text-align:center;position:absolute;display:flex;align-items:center;top:-15px;left:0}.ngx-card-vertical .ngx-card-footer--label:after,.ngx-card-vertical .ngx-card-footer--label:before{content:\"\";height:2px;background:#313847;width:100%}.ngx-card-vertical .ngx-card-footer--label:before{margin-right:20px}.ngx-card-vertical .ngx-card-footer--label:after{margin-left:20px}.ngx-card-vertical .ngx-card-footer .action{cursor:pointer;margin-right:25px}"]
            }]
    }], function () { return []; }, { disabled: [{
            type: HostBinding,
            args: ['class.disabled']
        }, {
            type: Input
        }], orientation: [{
            type: Input
        }], selectable: [{
            type: Input
        }], selected: [{
            type: Input
        }], appearance: [{
            type: Input
        }], hideAccent: [{
            type: Input
        }], select: [{
            type: Output
        }], outlineClick: [{
            type: Output
        }], horizontal: [{
            type: HostBinding,
            args: ['class.ngx-card-horizontal']
        }], vertical: [{
            type: HostBinding,
            args: ['class.ngx-card-vertical']
        }], flat: [{
            type: HostBinding,
            args: ['class.flat']
        }], status: [{
            type: Input
        }], statusTooltip: [{
            type: Input
        }], error: [{
            type: Input
        }], outlineText: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixpQkFBaUIsRUFDakIsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV3hELE1BQU0sT0FBTyxhQUFhO0FBQzFCLElBVkE7QUFDRyxRQTBCRCxhQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFFBQ1csZ0JBQVcsR0FBb0IsZUFBZSxDQUFDLFVBQVUsQ0FBQztBQUNyRSxRQUdXLGVBQVUsR0FBRyxLQUFLLENBQUM7QUFDOUIsUUFBVyxhQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzVCLFFBRVcsZUFBVSxHQUFtQixjQUFjLENBQUMsTUFBTSxDQUFDO0FBQzlELFFBQVcsZUFBVSxHQUFHLEtBQUssQ0FBQztBQUM5QixRQUNZLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0FBQ2pELFFBQVksaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0FBQ3BELElBVUEsQ0FBQztBQUNELElBM0NFLElBQ0ksVUFBVTtBQUNoQixRQUFJLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxlQUFlLENBQUMsVUFBVSxDQUFDO0FBQzNELElBQUUsQ0FBQztBQUNILElBQ0UsSUFDSSxRQUFRO0FBQ2QsUUFBSSxPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssZUFBZSxDQUFDLFFBQVEsQ0FBQztBQUN6RCxJQUFFLENBQUM7QUFDSCxJQUNFLElBQ0ksSUFBSTtBQUNWLFFBQUksT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUM7QUFDbkQsSUFBRSxDQUFDO0FBQ0gsSUFtQkUsY0FBYyxDQUFDLE1BQU07QUFDdkIsUUFBSSxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDN0IsUUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNILElBQ0UsUUFBUSxDQUFDLE1BQU07QUFDakIsUUFBSSxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDN0IsUUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLElBQUUsQ0FBQztBQUNIO3lDQXBEQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFO0NBQVMsa0JBQ25CLFFBQVEsRUFBRSxVQUFVLGtCQUNwQjs7b25CQUFvQyxrQkFFcEMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxrQkFDM0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NGtMQUN0Qyx3NERBQ0k7QUFBQztBQUNJLHlCQUFQLFdBQVcsU0FBQywyQkFBMkI7QUFDckMsdUJBSUYsV0FBVyxTQUFDLHlCQUF5QjtBQUNuQyxtQkFJRixXQUFXLFNBQUMsWUFBWTtBQUN0Qix1QkFJRixXQUFXLFNBQUMsZ0JBQWdCLGNBQzVCLEtBQUs7QUFDTiwwQkFFQyxLQUFLO0FBQUsscUJBRVYsS0FBSztBQUFLLDRCQUNWLEtBQUs7QUFBSyx5QkFDVixLQUFLO0FBQUssdUJBQ1YsS0FBSztBQUFLLG9CQUNWLEtBQUs7QUFBSywwQkFDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLHlCQUNWLEtBQUs7QUFBSyxxQkFFVixNQUFNO0FBQUssMkJBQ1gsTUFBTTtBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDYXJkU3RhdHVzIH0gZnJvbSAnLi9jYXJkLXN0YXR1cy5lbnVtJztcbmltcG9ydCB7IENhcmRPcmllbnRhdGlvbiB9IGZyb20gJy4vY2FyZC1vcmllbnRhdGlvbi5lbnVtJztcbmltcG9ydCB7IENhcmRBcHBlYXJhbmNlIH0gZnJvbSAnLi9jYXJkLWFwcGVhcmFuY2UuZW51bSc7XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ25neENhcmQnLFxuICBzZWxlY3RvcjogJ25neC1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLmNvbXBvbmVudC5zY3NzJ10sXG4gIGhvc3Q6IHsgY2xhc3M6ICduZ3gtY2FyZCcgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZENvbXBvbmVudCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3Mubmd4LWNhcmQtaG9yaXpvbnRhbCcpXG4gIGdldCBob3Jpem9udGFsKCkge1xuICAgIHJldHVybiB0aGlzLm9yaWVudGF0aW9uID09PSBDYXJkT3JpZW50YXRpb24uSG9yaXpvbnRhbDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Mubmd4LWNhcmQtdmVydGljYWwnKVxuICBnZXQgdmVydGljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMub3JpZW50YXRpb24gPT09IENhcmRPcmllbnRhdGlvbi5WZXJ0aWNhbDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZmxhdCcpXG4gIGdldCBmbGF0KCkge1xuICAgIHJldHVybiB0aGlzLmFwcGVhcmFuY2UgPT09IENhcmRBcHBlYXJhbmNlLkZsYXQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRpc2FibGVkJylcbiAgQElucHV0KClcbiAgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKSBvcmllbnRhdGlvbjogQ2FyZE9yaWVudGF0aW9uID0gQ2FyZE9yaWVudGF0aW9uLkhvcml6b250YWw7XG5cbiAgQElucHV0KCkgc3RhdHVzOiBDYXJkU3RhdHVzO1xuICBASW5wdXQoKSBzdGF0dXNUb29sdGlwOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNlbGVjdGFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgZXJyb3I6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG91dGxpbmVUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFwcGVhcmFuY2U6IENhcmRBcHBlYXJhbmNlID0gQ2FyZEFwcGVhcmFuY2UuTm9ybWFsO1xuICBASW5wdXQoKSBoaWRlQWNjZW50ID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIG91dGxpbmVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBvbk91dGxpbmVDbGljaygkZXZlbnQpIHtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5vdXRsaW5lQ2xpY2suZW1pdCgpO1xuICB9XG5cbiAgb25TZWxlY3QoJGV2ZW50KSB7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoJGV2ZW50LnRhcmdldC5jaGVja2VkKTtcbiAgfVxufVxuIl19