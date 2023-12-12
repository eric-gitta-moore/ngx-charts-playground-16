import { animate, state, style, transition, trigger } from '@angular/animations';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { DialogFormat } from './dialog-format.enum';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function DialogComponent_ng_container_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 7);
    ɵngcc0.ɵɵlistener("click", function DialogComponent_ng_container_2_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.hide(); });
    ɵngcc0.ɵɵelement(1, "span", 8);
    ɵngcc0.ɵɵelementEnd();
} }
function DialogComponent_ng_container_2_div_2_h2_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "h2", 11);
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r9.dialogTitle, ɵngcc0.ɵɵsanitizeHtml);
} }
function DialogComponent_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 9);
    ɵngcc0.ɵɵtemplate(1, DialogComponent_ng_container_2_div_2_h2_1_Template, 1, 1, "h2", 10);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.dialogTitle);
} }
function DialogComponent_ng_container_2_3_ng_template_0_Template(rf, ctx) { }
const _c0 = function (a0) { return { context: a0 }; };
function DialogComponent_ng_container_2_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DialogComponent_ng_container_2_3_ng_template_0_Template, 0, 0, "ng-template", 12);
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r5.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, ctx_r5.context));
} }
function DialogComponent_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 13);
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r6.content, ɵngcc0.ɵɵsanitizeHtml);
} }
function DialogComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, DialogComponent_ng_container_2_button_1_Template, 2, 0, "button", 3);
    ɵngcc0.ɵɵtemplate(2, DialogComponent_ng_container_2_div_2_Template, 2, 1, "div", 4);
    ɵngcc0.ɵɵtemplate(3, DialogComponent_ng_container_2_3_Template, 1, 4, undefined, 5);
    ɵngcc0.ɵɵtemplate(4, DialogComponent_ng_container_2_div_4_Template, 1, 1, "div", 6);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.closeButton);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.dialogTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.template);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.content);
} }
function DialogComponent_ng_template_3_0_ng_template_0_Template(rf, ctx) { }
function DialogComponent_ng_template_3_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DialogComponent_ng_template_3_0_ng_template_0_Template, 0, 0, "ng-template", 12);
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r11.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, ctx_r11.context));
} }
function DialogComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, DialogComponent_ng_template_3_0_Template, 1, 4, undefined, 5);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.template);
} }
const _c1 = ["*"];
export class DialogComponent {
    constructor(element, renderer2) {
        this.element = element;
        this.renderer2 = renderer2;
        this.format = DialogFormat.Regular;
        this.open = new EventEmitter();
        this.close = new EventEmitter();
        this.DialogFormat = DialogFormat;
    }
    get closeOnBlur() {
        return this._closeOnBlur;
    }
    set closeOnBlur(closeOnBlur) {
        this._closeOnBlur = coerceBooleanProperty(closeOnBlur);
    }
    get closeOnEscape() {
        return this._closeOnEscape;
    }
    set closeOnEscape(closeOnEscape) {
        this._closeOnEscape = coerceBooleanProperty(closeOnEscape);
    }
    get closeButton() {
        return this._closeButton;
    }
    set closeButton(closeButton) {
        this._closeButton = coerceBooleanProperty(closeButton);
    }
    get visible() {
        return this._visible;
    }
    set visible(visible) {
        this._visible = coerceBooleanProperty(visible);
    }
    get zIndex() {
        return this._zIndex;
    }
    set zIndex(zIndex) {
        this._zIndex = coerceNumberProperty(zIndex);
    }
    get contentzIndex() {
        return this.zIndex + 1;
    }
    get visibleState() {
        return this.visible ? 'active' : 'inactive';
    }
    ngOnInit() {
        if (this.visible)
            this.show();
        // backwards compatibility
        if (this.title) {
            this.dialogTitle = this.title;
            this.renderer2.removeAttribute(this.element.nativeElement, 'title');
        }
    }
    ngOnDestroy() {
        this.close.emit(true);
    }
    show() {
        this.visible = true;
        this.open.emit();
    }
    hide() {
        this.visible = false;
        this.close.emit();
    }
    containsTarget(target) {
        return this.closeOnBlur && target.classList.contains('dialog');
    }
    onEscapeKeyDown() {
        if (this.closeOnEscape)
            this.hide();
    }
    onDocumentClick(target) {
        if (this.containsTarget(target)) {
            this.hide();
        }
    }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
DialogComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: DialogComponent, selectors: [["ngx-dialog"]], hostAttrs: ["tabindex", "-1"], hostBindings: function DialogComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keydown.esc", function DialogComponent_keydown_esc_HostBindingHandler() { return ctx.onEscapeKeyDown(); })("click", function DialogComponent_click_HostBindingHandler($event) { return ctx.onDocumentClick($event.target); }, false, ɵngcc0.ɵɵresolveDocument);
    } }, inputs: { format: "format", closeOnBlur: "closeOnBlur", closeOnEscape: "closeOnEscape", closeButton: "closeButton", visible: "visible", zIndex: "zIndex", dialogTitle: "dialogTitle", id: "id", title: "title", content: "content", template: "template", cssClass: "cssClass", context: "context", class: "class" }, outputs: { open: "open", close: "close" }, exportAs: ["ngxDialog"], ngContentSelectors: _c1, decls: 6, vars: 16, consts: [["tabindex", "-1", "role", "dialog"], [4, "ngIf", "ngIfElse"], ["largeFormat", ""], ["type", "button", "class", "close", 3, "click", 4, "ngIf"], ["class", "ngx-dialog-header", 4, "ngIf"], [4, "ngIf"], [3, "innerHTML", 4, "ngIf"], ["type", "button", 1, "close", 3, "click"], [1, "icon-x"], [1, "ngx-dialog-header"], ["class", "ngx-dialog-title", 3, "innerHTML", 4, "ngIf"], [1, "ngx-dialog-title", 3, "innerHTML"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵtemplate(2, DialogComponent_ng_container_2_Template, 5, 4, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(3, DialogComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵprojection(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(4);
        ɵngcc0.ɵɵclassMap(ctx.class);
        ɵngcc0.ɵɵstyleProp("z-index", ctx.zIndex);
        ɵngcc0.ɵɵclassProp("ngx-dialog", true);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("ngx-dialog-content ", ctx.cssClass, "");
        ɵngcc0.ɵɵstyleProp("z-index", ctx.contentzIndex);
        ɵngcc0.ɵɵclassProp("ngx-dialog-content--large", ctx.format === ctx.DialogFormat.Large);
        ɵngcc0.ɵɵproperty("@visibilityTransition", ctx.visibleState);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.format === ctx.DialogFormat.Regular)("ngIfElse", _r1);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], styles: [".ngx-dialog{position:fixed;display:flex;align-items:center;justify-content:center;top:0;left:0;height:100vh;width:100%;pointer-events:none}.ngx-dialog .ngx-dialog-content{pointer-events:auto;border-radius:2px;box-shadow:0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12);background:#1c2029;padding:1.4rem;position:relative;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;min-width:250px;font-size:.9rem;color:#9c9c9c}.ngx-dialog .ngx-dialog-content--large{padding:0;height:calc(100% - 7.25rem);width:calc(100% - 7.5rem)}.ngx-dialog .ngx-dialog-content .close{position:absolute;font-size:20px;color:#cfcfcf;right:-25px;top:-25px}.ngx-dialog .ngx-dialog-content .ngx-dialog-header .ngx-dialog-title,.ngx-dialog .ngx-dialog-content .ngx-dialog-header h1{font-size:1.8rem;font-weight:500;margin:0 0 1.4rem;color:#cfcfcf}.ngx-dialog .ngx-dialog-content .ngx-dialog-footer{text-align:right}.ngx-dialog .ngx-dialog-content .ngx-dialog-footer .btn{margin-left:5px}.ngx-dialog.wizard .ngx-dialog-content{padding:0;background:#2b3240}.ngx-dialog.wizard .ngx-dialog-content .ngx-dialog-header{padding:1.4rem;background:#262c38}.ngx-dialog.wizard .ngx-dialog-content .ngx-dialog-header h1{margin:0}.ngx-dialog.wizard .ngx-dialog-content .ngx-dialog-footer{padding:1.4rem}.ngx-dialog.wizard .ngx-dialog-content .ngx-dialog-footer .wizard-nav{float:left}.ngx-dialog.wizard .ngx-dialog-content .ngx-dialog-footer .wizard-nav .btn{margin:0 5px 0 0}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs{margin-bottom:0}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs .ngx-tabs-list{padding:0 20px;background:#212631;border-bottom:2px solid #212631}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs .ngx-tabs-list .ngx-tab{background:#212631}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs .ngx-tabs-list .ngx-tab button{padding:.6em .75em;text-transform:uppercase}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs .ngx-tabs-list .ngx-tab.active{background:#313847}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs .ngx-tab-content{padding:1.4rem 1.4rem 0}.ngx-dialog.ngx-dialog-full-screen{width:100vw;height:100%;overflow-y:scroll;position:fixed;top:0;bottom:0;left:0;right:0}.ngx-dialog.ngx-dialog-full-screen .ngx-dialog-content{box-shadow:none;width:100%;min-height:100vh}.ngx-dialog.ngx-dialog-full-screen .ngx-dialog-content button.close{color:#afb7c8;font-size:24px;opacity:1;top:56px;right:56px;text-shadow:none}@-webkit-keyframes anim-open{0%{opacity:0;transform:scale3d(1.1,1.1,1)}to{opacity:1;transform:scaleX(1)}}@keyframes anim-open{0%{opacity:0;transform:scale3d(1.1,1.1,1)}to{opacity:1;transform:scaleX(1)}}@-webkit-keyframes anim-close{0%{opacity:1}to{opacity:0;transform:scale3d(.9,.9,1)}}@keyframes anim-close{0%{opacity:1}to{opacity:0;transform:scale3d(.9,.9,1)}}"], encapsulation: 2, data: { animation: [
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
DialogComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
DialogComponent.propDecorators = {
    id: [{ type: Input }],
    title: [{ type: Input }],
    dialogTitle: [{ type: Input }],
    content: [{ type: Input }],
    template: [{ type: Input }],
    cssClass: [{ type: Input }],
    context: [{ type: Input }],
    class: [{ type: Input }],
    format: [{ type: Input }],
    closeOnBlur: [{ type: Input }],
    closeOnEscape: [{ type: Input }],
    closeButton: [{ type: Input }],
    visible: [{ type: Input }],
    zIndex: [{ type: Input }],
    open: [{ type: Output }],
    close: [{ type: Output }],
    onEscapeKeyDown: [{ type: HostListener, args: ['keydown.esc',] }],
    onDocumentClick: [{ type: HostListener, args: ['document:click', ['$event.target'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DialogComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxDialog',
                selector: 'ngx-dialog',
                template: "<div [class]=\"class\" [class.ngx-dialog]=\"true\" [style.zIndex]=\"zIndex\">\n  <div\n    class=\"ngx-dialog-content {{ cssClass }}\"\n    [class.ngx-dialog-content--large]=\"format === DialogFormat.Large\"\n    [@visibilityTransition]=\"visibleState\"\n    [style.zIndex]=\"contentzIndex\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n  >\n    <ng-container *ngIf=\"format === DialogFormat.Regular; else largeFormat\">\n      <button *ngIf=\"closeButton\" type=\"button\" class=\"close\" (click)=\"hide()\">\n        <span class=\"icon-x\"></span>\n      </button>\n      <div class=\"ngx-dialog-header\" *ngIf=\"dialogTitle\">\n        <h2 *ngIf=\"dialogTitle\" class=\"ngx-dialog-title\" [innerHTML]=\"dialogTitle\"></h2>\n      </div>\n      <ng-template *ngIf=\"template\" [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"{ context: context }\">\n      </ng-template>\n      <div *ngIf=\"content\" [innerHTML]=\"content\"></div>\n    </ng-container>\n    <ng-template #largeFormat>\n      <ng-template *ngIf=\"template\" [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"{ context: context }\">\n      </ng-template>\n    </ng-template>\n    <ng-content></ng-content>\n  </div>\n</div>\n",
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
                host: { tabindex: '-1' },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-dialog{position:fixed;display:flex;align-items:center;justify-content:center;top:0;left:0;height:100vh;width:100%;pointer-events:none}.ngx-dialog .ngx-dialog-content{pointer-events:auto;border-radius:2px;box-shadow:0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12);background:#1c2029;padding:1.4rem;position:relative;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;min-width:250px;font-size:.9rem;color:#9c9c9c}.ngx-dialog .ngx-dialog-content--large{padding:0;height:calc(100% - 7.25rem);width:calc(100% - 7.5rem)}.ngx-dialog .ngx-dialog-content .close{position:absolute;font-size:20px;color:#cfcfcf;right:-25px;top:-25px}.ngx-dialog .ngx-dialog-content .ngx-dialog-header .ngx-dialog-title,.ngx-dialog .ngx-dialog-content .ngx-dialog-header h1{font-size:1.8rem;font-weight:500;margin:0 0 1.4rem;color:#cfcfcf}.ngx-dialog .ngx-dialog-content .ngx-dialog-footer{text-align:right}.ngx-dialog .ngx-dialog-content .ngx-dialog-footer .btn{margin-left:5px}.ngx-dialog.wizard .ngx-dialog-content{padding:0;background:#2b3240}.ngx-dialog.wizard .ngx-dialog-content .ngx-dialog-header{padding:1.4rem;background:#262c38}.ngx-dialog.wizard .ngx-dialog-content .ngx-dialog-header h1{margin:0}.ngx-dialog.wizard .ngx-dialog-content .ngx-dialog-footer{padding:1.4rem}.ngx-dialog.wizard .ngx-dialog-content .ngx-dialog-footer .wizard-nav{float:left}.ngx-dialog.wizard .ngx-dialog-content .ngx-dialog-footer .wizard-nav .btn{margin:0 5px 0 0}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs{margin-bottom:0}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs .ngx-tabs-list{padding:0 20px;background:#212631;border-bottom:2px solid #212631}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs .ngx-tabs-list .ngx-tab{background:#212631}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs .ngx-tabs-list .ngx-tab button{padding:.6em .75em;text-transform:uppercase}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs .ngx-tabs-list .ngx-tab.active{background:#313847}.ngx-dialog.wizard .ngx-dialog-content .ngx-tabs .ngx-tab-content{padding:1.4rem 1.4rem 0}.ngx-dialog.ngx-dialog-full-screen{width:100vw;height:100%;overflow-y:scroll;position:fixed;top:0;bottom:0;left:0;right:0}.ngx-dialog.ngx-dialog-full-screen .ngx-dialog-content{box-shadow:none;width:100%;min-height:100vh}.ngx-dialog.ngx-dialog-full-screen .ngx-dialog-content button.close{color:#afb7c8;font-size:24px;opacity:1;top:56px;right:56px;text-shadow:none}@-webkit-keyframes anim-open{0%{opacity:0;transform:scale3d(1.1,1.1,1)}to{opacity:1;transform:scaleX(1)}}@keyframes anim-open{0%{opacity:0;transform:scale3d(1.1,1.1,1)}to{opacity:1;transform:scaleX(1)}}@-webkit-keyframes anim-close{0%{opacity:1}to{opacity:0;transform:scale3d(.9,.9,1)}}@keyframes anim-close{0%{opacity:1}to{opacity:0;transform:scale3d(.9,.9,1)}}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { format: [{
            type: Input
        }], open: [{
            type: Output
        }], close: [{
            type: Output
        }], closeOnBlur: [{
            type: Input
        }], closeOnEscape: [{
            type: Input
        }], closeButton: [{
            type: Input
        }], visible: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], dialogTitle: [{
            type: Input
        }], onEscapeKeyDown: [{
            type: HostListener,
            args: ['keydown.esc']
        }], onDocumentClick: [{
            type: HostListener,
            args: ['document:click', ['$event.target']]
        }], id: [{
            type: Input
        }], title: [{
            type: Input
        }], content: [{
            type: Input
        }], template: [{
            type: Input
        }], cssClass: [{
            type: Input
        }], context: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BGLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQ3BELE1BQU0sT0FBTyxlQUFlO0FBQUcsSUEyRTdCLFlBQTZCLE9BQW1CLEVBQW1CLFNBQW9CO0FBQUksUUFBOUQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtBQUFDLFFBQWtCLGNBQVMsR0FBVCxTQUFTLENBQVc7QUFBQyxRQWxFL0UsV0FBTSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7QUFDekMsUUE4Q1ksU0FBSSxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO0FBQ3RELFFBQVksVUFBSyxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO0FBQ3ZELFFBU1csaUJBQVksR0FBRyxZQUFZLENBQUM7QUFDdkMsSUFPNEYsQ0FBQztBQUM3RixJQWpFRSxJQUNJLFdBQVc7QUFDakIsUUFBSSxPQUFPLElBQUks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Q2hEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBQ0k7QUFBQztBQUF5QyxZQXJEN0MsVUFBVTtBQUNWLFlBTUEsU0FBUztBQUNWO0FBQUc7QUFFQSxpQkE0Q0QsS0FBSztBQUFLLG9CQUNWLEtBQUs7QUFBSywwQkFDVixLQUFLO0FBQUssc0JBQ1YsS0FBSztBQUFLLHVCQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUssc0JBQ1YsS0FBSztBQUFLLG9CQUNWLEtBQUs7QUFBSyxxQkFDVixLQUFLO0FBQUssMEJBRVYsS0FBSztBQUNOLDRCQVFDLEtBQUs7QUFDTiwwQkFRQyxLQUFLO0FBQ04sc0JBUUMsS0FBSztBQUNOLHFCQVFDLEtBQUs7QUFDTixtQkFRQyxNQUFNO0FBQUssb0JBQ1gsTUFBTTtBQUFLLDhCQStDWCxZQUFZLFNBQUMsYUFBYTtBQUN4Qiw4QkFJRixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxlQUFlLENBQUM7QUFDL0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaWFsb2dGb3JtYXQgfSBmcm9tICcuL2RpYWxvZy1mb3JtYXQuZW51bSc7XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ25neERpYWxvZycsXG4gIHNlbGVjdG9yOiAnbmd4LWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2cuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3Zpc2liaWxpdHlUcmFuc2l0aW9uJywgW1xuICAgICAgc3RhdGUoXG4gICAgICAgICdhY3RpdmUnLFxuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJ1xuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLjIsIDEuMiwgMS4yKSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzAuMnMgZWFzZS1vdXQnKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IGluYWN0aXZlJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZShcbiAgICAgICAgICAnMC4ycyBlYXNlLW91dCcsXG4gICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUzZCgwLjksIDAuOSwgMSknLFxuICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSxcbiAgaG9zdDogeyB0YWJpbmRleDogJy0xJyB9LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpYWxvZ1RpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbnRlbnQ6IHN0cmluZztcbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIGNzc0NsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbnRleHQ6IGFueTtcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgZm9ybWF0ID0gRGlhbG9nRm9ybWF0LlJlZ3VsYXI7XG5cbiAgQElucHV0KClcbiAgZ2V0IGNsb3NlT25CbHVyKCkge1xuICAgIHJldHVybiB0aGlzLl9jbG9zZU9uQmx1cjtcbiAgfVxuXG4gIHNldCBjbG9zZU9uQmx1cihjbG9zZU9uQmx1cikge1xuICAgIHRoaXMuX2Nsb3NlT25CbHVyID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGNsb3NlT25CbHVyKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBjbG9zZU9uRXNjYXBlKCkge1xuICAgIHJldHVybiB0aGlzLl9jbG9zZU9uRXNjYXBlO1xuICB9XG5cbiAgc2V0IGNsb3NlT25Fc2NhcGUoY2xvc2VPbkVzY2FwZSkge1xuICAgIHRoaXMuX2Nsb3NlT25Fc2NhcGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoY2xvc2VPbkVzY2FwZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgY2xvc2VCdXR0b24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3NlQnV0dG9uO1xuICB9XG5cbiAgc2V0IGNsb3NlQnV0dG9uKGNsb3NlQnV0dG9uKSB7XG4gICAgdGhpcy5fY2xvc2VCdXR0b24gPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoY2xvc2VCdXR0b24pO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHZpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH1cblxuICBzZXQgdmlzaWJsZSh2aXNpYmxlKSB7XG4gICAgdGhpcy5fdmlzaWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2aXNpYmxlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCB6SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3pJbmRleDtcbiAgfVxuXG4gIHNldCB6SW5kZXgoekluZGV4KSB7XG4gICAgdGhpcy5fekluZGV4ID0gY29lcmNlTnVtYmVyUHJvcGVydHkoekluZGV4KTtcbiAgfVxuXG4gIEBPdXRwdXQoKSBvcGVuID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuIHwgdm9pZD4oKTtcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuIHwgdm9pZD4oKTtcblxuICBnZXQgY29udGVudHpJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnpJbmRleCArIDE7XG4gIH1cblxuICBnZXQgdmlzaWJsZVN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnZpc2libGUgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSc7XG4gIH1cblxuICByZWFkb25seSBEaWFsb2dGb3JtYXQgPSBEaWFsb2dGb3JtYXQ7XG5cbiAgcHJpdmF0ZSBfY2xvc2VPbkJsdXI/OiBib29sZWFuO1xuICBwcml2YXRlIF9jbG9zZU9uRXNjYXBlPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfY2xvc2VCdXR0b24/OiBib29sZWFuO1xuICBwcml2YXRlIF92aXNpYmxlPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfekluZGV4PzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjI6IFJlbmRlcmVyMikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52aXNpYmxlKSB0aGlzLnNob3coKTtcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgIGlmICh0aGlzLnRpdGxlKSB7XG4gICAgICB0aGlzLmRpYWxvZ1RpdGxlID0gdGhpcy50aXRsZTtcbiAgICAgIHRoaXMucmVuZGVyZXIyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RpdGxlJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jbG9zZS5lbWl0KHRydWUpO1xuICB9XG5cbiAgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgIHRoaXMub3Blbi5lbWl0KCk7XG4gIH1cblxuICBoaWRlKCk6IHZvaWQge1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2UuZW1pdCgpO1xuICB9XG5cbiAgY29udGFpbnNUYXJnZXQodGFyZ2V0OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jbG9zZU9uQmx1ciAmJiB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaWFsb2cnKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uZXNjJylcbiAgb25Fc2NhcGVLZXlEb3duKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsb3NlT25Fc2NhcGUpIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudC50YXJnZXQnXSlcbiAgb25Eb2N1bWVudENsaWNrKHRhcmdldDogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udGFpbnNUYXJnZXQodGFyZ2V0KSkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=