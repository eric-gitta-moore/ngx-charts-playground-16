import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, HostBinding, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { pluck, take } from 'rxjs/operators';
import { AlertService } from '../alert/alert.service';
import { LargeFormatDialogFooterComponent } from './components/large-format-dialog-footer/large-format-dialog-footer.component';
import { LargeFormatDialogStepperDirective } from './directives/large-format-dialog-stepper/large-format-dialog-stepper.directive';
import { LargeFormatDialogTabsDirective } from './directives/large-format-dialog-tabs/large-format-dialog-tabs.directive';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../alert/alert.service';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from './components/large-format-dialog-header-title/large-format-dialog-header-title.component';
import * as ɵngcc4 from './components/large-format-dialog-header-action/large-format-dialog-header-action.component';

function LargeFormatDialogContentComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function LargeFormatDialogContentComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "header", 4);
    ɵngcc0.ɵɵtemplate(2, LargeFormatDialogContentComponent_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "section", 6);
    ɵngcc0.ɵɵprojection(4, 1);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r3 = ɵngcc0.ɵɵreference(6);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function LargeFormatDialogContentComponent_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function LargeFormatDialogContentComponent_ng_template_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function LargeFormatDialogContentComponent_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, LargeFormatDialogContentComponent_ng_template_2_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r7.stepperTemplate);
} }
function LargeFormatDialogContentComponent_ng_template_2_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function LargeFormatDialogContentComponent_ng_template_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, LargeFormatDialogContentComponent_ng_template_2_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r8.tabsTemplate);
} }
const _c0 = function (a0, a1) { return { "dialog-container--stepper dialog-stepper": a0, "dialog-container--tabs dialog-tabs": a1 }; };
const _c1 = function (a0, a1) { return { "dialog-stepper__header": a0, "dialog-tabs__header": a1 }; };
function LargeFormatDialogContentComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "section", 7);
    ɵngcc0.ɵɵelementStart(1, "header", 8);
    ɵngcc0.ɵɵtemplate(2, LargeFormatDialogContentComponent_ng_template_2_ng_container_2_Template, 1, 0, "ng-container", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, LargeFormatDialogContentComponent_ng_template_2_ng_container_3_Template, 2, 1, "ng-container", 9);
    ɵngcc0.ɵɵtemplate(4, LargeFormatDialogContentComponent_ng_template_2_ng_container_4_Template, 2, 1, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    const _r3 = ɵngcc0.ɵɵreference(6);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(5, _c0, !!ctx_r2.stepperTemplate, !!ctx_r2.tabsTemplate));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(8, _c1, !!ctx_r2.stepperTemplate, !!ctx_r2.tabsTemplate));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.stepperTemplate);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.tabsTemplate);
} }
function LargeFormatDialogContentComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelement(0, "ngx-large-format-dialog-header-title", 10);
    ɵngcc0.ɵɵelementStart(1, "ngx-large-format-dialog-header-action", 11);
    ɵngcc0.ɵɵlistener("closeOrCancel", function LargeFormatDialogContentComponent_ng_template_5_Template_ngx_large_format_dialog_header_action_closeOrCancel_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onCloseOrCancel($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("dialogTitle", ctx_r4.dialogTitle)("dialogSubtitle", ctx_r4.dialogSubtitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("dirty", ctx_r4.dirty)("actionTitle", ctx_r4.dialogActionTitle)("dirtyActionTitle", ctx_r4.dialogDirtyActionTitle);
} }
const _c2 = [[["ngx-large-format-dialog-footer"]], "*"];
const _c3 = ["ngx-large-format-dialog-footer", "*"];
export class LargeFormatDialogContentComponent {
    constructor(elementRef, alertService) {
        this.elementRef = elementRef;
        this.alertService = alertService;
        // header-title inputs
        this.dialogTitle = '';
        // header-action inputs
        this.dialogActionTitle = 'Close';
        this.dirty = false;
        this.dialogDirtyActionTitle = 'Cancel';
        this.skipDirtyAlert = false;
        // header-action outputs
        this.closeOrCancel = new EventEmitter();
        this.hostClass = true;
    }
    onCloseOrCancel(isDirty) {
        if (isDirty && !this.skipDirtyAlert) {
            const alertRef = this.alertService.confirm(Object.assign({ title: 'You Have Unsaved Changes', content: 'Are you sure you want to discard your changes?', cancelButtonText: 'Discard', cancelButtonClass: 'btn-bordered', confirmButtonText: 'Cancel' }, (this.dirtyAlertOptions || {})));
            alertRef
                .asObservable()
                .pipe(take(1), pluck('type'))
                .subscribe((okOrCancel) => {
                /**
                 * Based on the design, Cancel button is on the "confirmButtonText" position while Discard button is on the "cancelButtonText"
                 * - When Discard is clicked, alertRef will emit {type: cancel}, it means that the consumers want to discard their changes => emit the output
                 * - When Cancel is clicked, alertRef will emit {type: ok}, it means that the consumers DO NOT want to discard their changes.
                 */
                if (okOrCancel === 'cancel') {
                    this.closeOrCancel.emit(isDirty);
                }
            });
        }
        else {
            this.closeOrCancel.emit(isDirty);
        }
    }
}
LargeFormatDialogContentComponent.ɵfac = function LargeFormatDialogContentComponent_Factory(t) { return new (t || LargeFormatDialogContentComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.AlertService)); };
LargeFormatDialogContentComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: LargeFormatDialogContentComponent, selectors: [["ngx-large-format-dialog-content"]], contentQueries: function LargeFormatDialogContentComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, LargeFormatDialogFooterComponent, 5);
        ɵngcc0.ɵɵcontentQuery(dirIndex, LargeFormatDialogStepperDirective, 5, TemplateRef);
        ɵngcc0.ɵɵcontentQuery(dirIndex, LargeFormatDialogTabsDirective, 5, TemplateRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footerComponent = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.stepperTemplate = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tabsTemplate = _t.first);
    } }, hostVars: 2, hostBindings: function LargeFormatDialogContentComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ngx-large-format-dialog-content", ctx.hostClass);
    } }, inputs: { dialogTitle: "dialogTitle", dialogActionTitle: "dialogActionTitle", dirty: "dirty", dialogDirtyActionTitle: "dialogDirtyActionTitle", skipDirtyAlert: "skipDirtyAlert", dialogSubtitle: "dialogSubtitle", dirtyAlertOptions: "dirtyAlertOptions" }, outputs: { closeOrCancel: "closeOrCancel" }, exportAs: ["ngxLargeFormatDialogContent"], ngContentSelectors: _c3, decls: 7, vars: 2, consts: [[1, "dialog-container"], [4, "ngIf", "ngIfElse"], ["custom", ""], ["header", ""], [1, "dialog-container__header"], [4, "ngTemplateOutlet"], [1, "dialog-container__body"], [3, "ngClass"], [1, "dialog-container__header", 3, "ngClass"], [4, "ngIf"], [3, "dialogTitle", "dialogSubtitle"], [3, "dirty", "actionTitle", "dirtyActionTitle", "closeOrCancel"]], template: function LargeFormatDialogContentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c2);
        ɵngcc0.ɵɵelementStart(0, "main", 0);
        ɵngcc0.ɵɵtemplate(1, LargeFormatDialogContentComponent_ng_container_1_Template, 5, 1, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(2, LargeFormatDialogContentComponent_ng_template_2_Template, 5, 11, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵprojection(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, LargeFormatDialogContentComponent_ng_template_5_Template, 2, 5, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(3);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.stepperTemplate && !ctx.tabsTemplate)("ngIfElse", _r1);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgTemplateOutlet, ɵngcc2.NgClass, ɵngcc3.LargeFormatDialogHeaderTitleComponent, ɵngcc4.LargeFormatDialogHeaderActionComponent], styles: [".ngx-large-format-dialog-content{--stepper-header-custom-offset:0px;--stepper-bar-track-offset:12px;--tabs-header-gap:1.25rem;--header-item-max-width:400px;--header-item-max-width-lg:250px;--header-item-max-width-md:150px;display:block;width:100%;height:100%;position:relative;overflow:hidden}.ngx-large-format-dialog-content .dialog-container{display:flex;flex-direction:column;height:100%;background:linear-gradient(180deg,#252a37,#212631);box-shadow:0 0 100px rgba(0,0,0,.25);border-radius:.125rem}.ngx-large-format-dialog-content .dialog-container__header{max-height:90px;height:90px;border-bottom:1px solid #313847;display:flex;align-items:center;justify-content:space-between;padding:0 2rem}.ngx-large-format-dialog-content .dialog-container__body{flex:1;overflow:auto;padding:0 2rem}.ngx-large-format-dialog-content .dialog-container .ngx-large-format-dialog-footer{max-height:4rem;flex:0 0 4rem;height:4rem;border-top:1px solid #313847}.ngx-large-format-dialog-content .dialog-container .dialog-stepper,.ngx-large-format-dialog-content .dialog-container .dialog-tabs{flex:1;position:relative;overflow:hidden}.ngx-large-format-dialog-content .dialog-container .dialog-stepper__header ngx-large-format-dialog-header-action.ngx-large-format-dialog-header-action,.ngx-large-format-dialog-content .dialog-container .dialog-stepper__header ngx-large-format-dialog-header-title.ngx-large-format-dialog-header-title,.ngx-large-format-dialog-content .dialog-container .dialog-tabs__header ngx-large-format-dialog-header-action.ngx-large-format-dialog-header-action,.ngx-large-format-dialog-content .dialog-container .dialog-tabs__header ngx-large-format-dialog-header-title.ngx-large-format-dialog-header-title{max-width:var(--header-item-max-width);min-width:var(--header-item-max-width)}.ngx-large-format-dialog-content .dialog-container .dialog-stepper__header ngx-large-format-dialog-header-action.ngx-large-format-dialog-header-action,.ngx-large-format-dialog-content .dialog-container .dialog-tabs__header ngx-large-format-dialog-header-action.ngx-large-format-dialog-header-action{position:relative;z-index:1}@media screen and (max-width:1319px){.ngx-large-format-dialog-content .dialog-container .dialog-stepper__header ngx-large-format-dialog-header-action.ngx-large-format-dialog-header-action,.ngx-large-format-dialog-content .dialog-container .dialog-stepper__header ngx-large-format-dialog-header-title.ngx-large-format-dialog-header-title,.ngx-large-format-dialog-content .dialog-container .dialog-tabs__header ngx-large-format-dialog-header-action.ngx-large-format-dialog-header-action,.ngx-large-format-dialog-content .dialog-container .dialog-tabs__header ngx-large-format-dialog-header-title.ngx-large-format-dialog-header-title{max-width:var(--header-item-max-width-lg);min-width:var(--header-item-max-width-lg)}}@media screen and (max-width:959px){.ngx-large-format-dialog-content .dialog-container .dialog-stepper__header ngx-large-format-dialog-header-action.ngx-large-format-dialog-header-action,.ngx-large-format-dialog-content .dialog-container .dialog-stepper__header ngx-large-format-dialog-header-title.ngx-large-format-dialog-header-title,.ngx-large-format-dialog-content .dialog-container .dialog-tabs__header ngx-large-format-dialog-header-action.ngx-large-format-dialog-header-action,.ngx-large-format-dialog-content .dialog-container .dialog-tabs__header ngx-large-format-dialog-header-title.ngx-large-format-dialog-header-title{max-width:var(--header-item-max-width-md);min-width:var(--header-item-max-width-md)}}.ngx-large-format-dialog-content .dialog-container .dialog-stepper ngx-stepper.ngx-stepper:not(.dialog-stepper--sub){padding:1rem 0 0;margin-top:-5.5rem;height:100%}.ngx-large-format-dialog-content .dialog-container .dialog-stepper ngx-stepper.ngx-stepper:not(.dialog-stepper--sub)>.ngx-stepper--steps{margin:auto;min-width:calc(100% - ((var(--header-item-max-width) + var(--stepper-header-custom-offset)) * 2) - 8rem)}.ngx-large-format-dialog-content .dialog-container .dialog-stepper ngx-stepper.ngx-stepper:not(.dialog-stepper--sub)>.ngx-stepper--steps ngx-step.ngx-step .ngx-step--title{padding-top:.5rem}.ngx-large-format-dialog-content .dialog-container .dialog-stepper ngx-stepper.ngx-stepper:not(.dialog-stepper--sub)>.ngx-stepper--bar-track{margin:auto;min-width:calc(100% - ((var(--header-item-max-width) + var(--stepper-header-custom-offset)) * 2) - 8rem + var(--stepper-bar-track-offset))}.ngx-large-format-dialog-content .dialog-container .dialog-stepper ngx-stepper.ngx-stepper:not(.dialog-stepper--sub)>.ngx-stepper--bar-track .ngx-stepper--bar{top:32px}.ngx-large-format-dialog-content .dialog-container .dialog-stepper ngx-stepper.ngx-stepper:not(.dialog-stepper--sub)>.ngx-stepper--content{margin-top:1.25rem;overflow:auto;padding:0 2rem}@media screen and (max-width:1319px){.ngx-large-format-dialog-content .dialog-container .dialog-stepper ngx-stepper.ngx-stepper:not(.dialog-stepper--sub)>.ngx-stepper--steps{min-width:calc(100% - ((var(--header-item-max-width-lg) + var(--stepper-header-custom-offset)) * 2) - 8rem)}.ngx-large-format-dialog-content .dialog-container .dialog-stepper ngx-stepper.ngx-stepper:not(.dialog-stepper--sub)>.ngx-stepper--bar-track{min-width:calc(100% - ((var(--header-item-max-width-lg) + var(--stepper-header-custom-offset)) * 2) - 8rem + var(--stepper-bar-track-offset))}}@media screen and (max-width:959px){.ngx-large-format-dialog-content .dialog-container .dialog-stepper ngx-stepper.ngx-stepper:not(.dialog-stepper--sub)>.ngx-stepper--steps{min-width:calc(100% - ((var(--header-item-max-width-md) + var(--stepper-header-custom-offset)) * 2) - 8rem)}.ngx-large-format-dialog-content .dialog-container .dialog-stepper ngx-stepper.ngx-stepper:not(.dialog-stepper--sub)>.ngx-stepper--bar-track{min-width:calc(100% - ((var(--header-item-max-width-md) + var(--stepper-header-custom-offset)) * 2) - 8rem + var(--stepper-bar-track-offset))}}.ngx-large-format-dialog-content .dialog-container .dialog-tabs ngx-tabs.ngx-tabs:not(.dialog-tabs--sub){height:100%;margin:0}.ngx-large-format-dialog-content .dialog-container .dialog-tabs ngx-tabs.ngx-tabs:not(.dialog-tabs--sub)>section{height:100%}.ngx-large-format-dialog-content .dialog-container .dialog-tabs ngx-tabs.ngx-tabs:not(.dialog-tabs--sub)>section>.ngx-tabs-list{display:flex;align-items:center;justify-content:center;height:5.5rem;margin:-5.5rem auto 0;border-bottom:unset;grid-gap:var(--tabs-header-gap);gap:var(--tabs-header-gap);max-width:calc(100% - (var(--header-item-max-width) * 2) - 8rem)}.ngx-large-format-dialog-content .dialog-container .dialog-tabs ngx-tabs.ngx-tabs:not(.dialog-tabs--sub)>section>.ngx-tabs-list .ngx-tab button{text-transform:uppercase;font-size:.8125rem;font-weight:700;line-height:1rem;color:#72819f}.ngx-large-format-dialog-content .dialog-container .dialog-tabs ngx-tabs.ngx-tabs:not(.dialog-tabs--sub)>section>.ngx-tabs-list .ngx-tab button:after{top:3.5rem}.ngx-large-format-dialog-content .dialog-container .dialog-tabs ngx-tabs.ngx-tabs:not(.dialog-tabs--sub)>section>.ngx-tabs-list .ngx-tab.active button{color:#fff}.ngx-large-format-dialog-content .dialog-container .dialog-tabs ngx-tabs.ngx-tabs:not(.dialog-tabs--sub)>section>.ngx-tab-content{padding:0 2rem;overflow:auto;height:calc(100% - 5.5rem)}@media screen and (max-width:1319px){.ngx-large-format-dialog-content .dialog-container .dialog-tabs ngx-tabs.ngx-tabs:not(.dialog-tabs--sub)>section>.ngx-tabs-list{max-width:calc(100% - (var(--header-item-max-width-lg) * 2) - 8rem)}}@media screen and (max-width:959px){.ngx-large-format-dialog-content .dialog-container .dialog-tabs ngx-tabs.ngx-tabs:not(.dialog-tabs--sub)>section>.ngx-tabs-list{max-width:calc(100% - (var(--header-item-max-width-md) * 2) - 8rem)}}", ".ngx-large-format-dialog-content ngx-drawer.ngx-drawer.large-format-dialog-drawer{min-height:calc(100% - 2rem);max-height:calc(100% - 2rem);margin-left:1rem;max-width:calc(100% - 2rem);background-color:#262c38;overflow:hidden}.ngx-large-format-dialog-content ngx-drawer.ngx-drawer.large-format-dialog-drawer--1\\/2{min-width:50%;max-width:50%;left:unset;right:1rem}.ngx-large-format-dialog-content ngx-drawer.ngx-drawer.large-format-dialog-drawer--1\\/3{min-width:33%;max-width:33%;left:unset;right:1rem}"], encapsulation: 2, changeDetection: 0 });
LargeFormatDialogContentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: AlertService }
];
LargeFormatDialogContentComponent.propDecorators = {
    dialogTitle: [{ type: Input }],
    dialogSubtitle: [{ type: Input }],
    dialogActionTitle: [{ type: Input }],
    dirty: [{ type: Input }],
    dialogDirtyActionTitle: [{ type: Input }],
    dirtyAlertOptions: [{ type: Input }],
    skipDirtyAlert: [{ type: Input }],
    closeOrCancel: [{ type: Output }],
    hostClass: [{ type: HostBinding, args: ['class.ngx-large-format-dialog-content',] }],
    footerComponent: [{ type: ContentChild, args: [LargeFormatDialogFooterComponent,] }],
    stepperTemplate: [{ type: ContentChild, args: [LargeFormatDialogStepperDirective, { read: TemplateRef },] }],
    tabsTemplate: [{ type: ContentChild, args: [LargeFormatDialogTabsDirective, { read: TemplateRef },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(LargeFormatDialogContentComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-large-format-dialog-content',
                exportAs: 'ngxLargeFormatDialogContent',
                template: "<main class=\"dialog-container\">\n  <ng-container *ngIf=\"!stepperTemplate && !tabsTemplate; else custom\">\n    <header class=\"dialog-container__header\">\n      <ng-container *ngTemplateOutlet=\"header\"></ng-container>\n    </header>\n    <section class=\"dialog-container__body\">\n      <ng-content></ng-content>\n    </section>\n  </ng-container>\n\n  <ng-template #custom>\n    <section\n      [ngClass]=\"{\n        'dialog-container--stepper dialog-stepper': !!stepperTemplate,\n        'dialog-container--tabs dialog-tabs': !!tabsTemplate\n      }\"\n    >\n      <header\n        class=\"dialog-container__header\"\n        [ngClass]=\"{\n          'dialog-stepper__header': !!stepperTemplate,\n          'dialog-tabs__header': !!tabsTemplate\n        }\"\n      >\n        <ng-container *ngTemplateOutlet=\"header\"></ng-container>\n      </header>\n      <ng-container *ngIf=\"stepperTemplate\">\n        <ng-container *ngTemplateOutlet=\"stepperTemplate\"></ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"tabsTemplate\">\n        <ng-container *ngTemplateOutlet=\"tabsTemplate\"></ng-container>\n      </ng-container>\n    </section>\n  </ng-template>\n\n  <ng-content select=\"ngx-large-format-dialog-footer\"></ng-content>\n</main>\n\n<ng-template #header>\n  <ngx-large-format-dialog-header-title\n    [dialogTitle]=\"dialogTitle\"\n    [dialogSubtitle]=\"dialogSubtitle\"\n  ></ngx-large-format-dialog-header-title>\n  <ngx-large-format-dialog-header-action\n    [dirty]=\"dirty\"\n    [actionTitle]=\"dialogActionTitle\"\n    [dirtyActionTitle]=\"dialogDirtyActionTitle\"\n    (closeOrCancel)=\"onCloseOrCancel($event)\"\n  ></ngx-large-format-dialog-header-action>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".ngx-large-format-dialog-content{--stepper-header-custom-offset:0px;--stepper-bar-track-offset:12px;--tabs-header-gap:1.25rem;--header-item-max-width:400px;--header-item-max-width-lg:250px;--header-item-max-width-md:150px;display:block;width:100%;height:100%;position:relative;overflow:hidden}.ngx-large-format-dialog-content .dialog-container{display:flex;flex-direction:column;height:100%;background:linear-gradient(180deg,#252a37,#212631);box-shadow:0 0 100px rgba(0,0,0,.25);border-radius:.125rem}.ngx-large-format-dialog-content .dialog-container__header{max-height:90px;height:90px;border-bottom:1px solid #313847;display:flex;align-items:center;justify-content:space-between;padding:0 2rem}.ngx-large-format-dialog-content .dialog-container__body{flex:1;overflow:auto;padding:0 2rem}.ngx-large-format-dialog-content .dialog-container .ngx-large-format-dialog-footer{max-height:4rem;flex:0 0 4rem;height:4rem;border-top:1px solid #313847}.ngx-large-format-dialog-content .dialog-container .dialog-stepper,.ngx-large-format-dialog-content .dialog-container .dialog-tabs{flex:1;position:relative;overflow:hidden}.ngx-large-format-dialog-content .dialog-container .dialog-stepper__header ngx-large-format-dialog-header-action.ngx-large-format-dialog-header-action,.ngx-large-format-dialog-content .dialog-container .dialog-stepper__header ngx-large-format-dialog-header-title.ngx-large-format-dialog-header-title,.ngx-large-format-dialog-content .dialog-container .dialog-tabs__header ngx-large-format-dialog-header-action.ngx-large-format-dialog-header-action,.ngx-large-format-dialog-content .dialog-container .dialog-tabs__header ngx-large-format-dialog-header-title.ngx-large-format-dialog-header-title{max-width:var(--header-item-max-width);min-width:var(--header-item-max-width)}.ngx-large-format-dialog-content .dialog-container .dialog-stepper__header ngx-large-format-dialog-header-action.ngx-large-format-dialog-header-action,.ngx-large-format-dialog-content .dialog-container .dialog-tabs__header ngx-large-format-dialog-header-action.ngx-large-format-dialog-header-action{position:relative;z-index:1}@media screen and (max-width:1319px){.ngx-large-format-dialog-content .dialog-container .dialog-stepper__header ngx-large-format-dialog-header-action.ngx-large-format-dialog-header-action,.ngx-large-format-dialog-content .dialog-container .dialog-stepper__header ngx-large-format-dialog-header-title.ngx-large-format-dialog-header-title,.ngx-large-format-dialog-content .dialog-container .dialog-tabs__header ngx-large-format-dialog-header-action.ngx-large-format-dialog-header-action,.ngx-large-format-dialog-content .dialog-container .dialog-tabs__header ngx-large-format-dialog-header-title.ngx-large-format-dialog-header-title{max-width:var(--header-item-max-width-lg);min-width:var(--header-item-max-width-lg)}}@media screen and (max-width:959px){.ngx-large-format-dialog-content .dialog-container .dialog-stepper__header ngx-large-format-dialog-header-action.ngx-large-format-dialog-header-action,.ngx-large-format-dialog-content .dialog-container .dialog-stepper__header ngx-large-format-dialog-header-title.ngx-large-format-dialog-header-title,.ngx-large-format-dialog-content .dialog-container .dialog-tabs__header ngx-large-format-dialog-header-action.ngx-large-format-dialog-header-action,.ngx-large-format-dialog-content .dialog-container .dialog-tabs__header ngx-large-format-dialog-header-title.ngx-large-format-dialog-header-title{max-width:var(--header-item-max-width-md);min-width:var(--header-item-max-width-md)}}.ngx-large-format-dialog-content .dialog-container .dialog-stepper ngx-stepper.ngx-stepper:not(.dialog-stepper--sub){padding:1rem 0 0;margin-top:-5.5rem;height:100%}.ngx-large-format-dialog-content .dialog-container .dialog-stepper ngx-stepper.ngx-stepper:not(.dialog-stepper--sub)>.ngx-stepper--steps{margin:auto;min-width:calc(100% - ((var(--header-item-max-width) + var(--stepper-header-custom-offset)) * 2) - 8rem)}.ngx-large-format-dialog-content .dialog-container .dialog-stepper ngx-stepper.ngx-stepper:not(.dialog-stepper--sub)>.ngx-stepper--steps ngx-step.ngx-step .ngx-step--title{padding-top:.5rem}.ngx-large-format-dialog-content .dialog-container .dialog-stepper ngx-stepper.ngx-stepper:not(.dialog-stepper--sub)>.ngx-stepper--bar-track{margin:auto;min-width:calc(100% - ((var(--header-item-max-width) + var(--stepper-header-custom-offset)) * 2) - 8rem + var(--stepper-bar-track-offset))}.ngx-large-format-dialog-content .dialog-container .dialog-stepper ngx-stepper.ngx-stepper:not(.dialog-stepper--sub)>.ngx-stepper--bar-track .ngx-stepper--bar{top:32px}.ngx-large-format-dialog-content .dialog-container .dialog-stepper ngx-stepper.ngx-stepper:not(.dialog-stepper--sub)>.ngx-stepper--content{margin-top:1.25rem;overflow:auto;padding:0 2rem}@media screen and (max-width:1319px){.ngx-large-format-dialog-content .dialog-container .dialog-stepper ngx-stepper.ngx-stepper:not(.dialog-stepper--sub)>.ngx-stepper--steps{min-width:calc(100% - ((var(--header-item-max-width-lg) + var(--stepper-header-custom-offset)) * 2) - 8rem)}.ngx-large-format-dialog-content .dialog-container .dialog-stepper ngx-stepper.ngx-stepper:not(.dialog-stepper--sub)>.ngx-stepper--bar-track{min-width:calc(100% - ((var(--header-item-max-width-lg) + var(--stepper-header-custom-offset)) * 2) - 8rem + var(--stepper-bar-track-offset))}}@media screen and (max-width:959px){.ngx-large-format-dialog-content .dialog-container .dialog-stepper ngx-stepper.ngx-stepper:not(.dialog-stepper--sub)>.ngx-stepper--steps{min-width:calc(100% - ((var(--header-item-max-width-md) + var(--stepper-header-custom-offset)) * 2) - 8rem)}.ngx-large-format-dialog-content .dialog-container .dialog-stepper ngx-stepper.ngx-stepper:not(.dialog-stepper--sub)>.ngx-stepper--bar-track{min-width:calc(100% - ((var(--header-item-max-width-md) + var(--stepper-header-custom-offset)) * 2) - 8rem + var(--stepper-bar-track-offset))}}.ngx-large-format-dialog-content .dialog-container .dialog-tabs ngx-tabs.ngx-tabs:not(.dialog-tabs--sub){height:100%;margin:0}.ngx-large-format-dialog-content .dialog-container .dialog-tabs ngx-tabs.ngx-tabs:not(.dialog-tabs--sub)>section{height:100%}.ngx-large-format-dialog-content .dialog-container .dialog-tabs ngx-tabs.ngx-tabs:not(.dialog-tabs--sub)>section>.ngx-tabs-list{display:flex;align-items:center;justify-content:center;height:5.5rem;margin:-5.5rem auto 0;border-bottom:unset;grid-gap:var(--tabs-header-gap);gap:var(--tabs-header-gap);max-width:calc(100% - (var(--header-item-max-width) * 2) - 8rem)}.ngx-large-format-dialog-content .dialog-container .dialog-tabs ngx-tabs.ngx-tabs:not(.dialog-tabs--sub)>section>.ngx-tabs-list .ngx-tab button{text-transform:uppercase;font-size:.8125rem;font-weight:700;line-height:1rem;color:#72819f}.ngx-large-format-dialog-content .dialog-container .dialog-tabs ngx-tabs.ngx-tabs:not(.dialog-tabs--sub)>section>.ngx-tabs-list .ngx-tab button:after{top:3.5rem}.ngx-large-format-dialog-content .dialog-container .dialog-tabs ngx-tabs.ngx-tabs:not(.dialog-tabs--sub)>section>.ngx-tabs-list .ngx-tab.active button{color:#fff}.ngx-large-format-dialog-content .dialog-container .dialog-tabs ngx-tabs.ngx-tabs:not(.dialog-tabs--sub)>section>.ngx-tab-content{padding:0 2rem;overflow:auto;height:calc(100% - 5.5rem)}@media screen and (max-width:1319px){.ngx-large-format-dialog-content .dialog-container .dialog-tabs ngx-tabs.ngx-tabs:not(.dialog-tabs--sub)>section>.ngx-tabs-list{max-width:calc(100% - (var(--header-item-max-width-lg) * 2) - 8rem)}}@media screen and (max-width:959px){.ngx-large-format-dialog-content .dialog-container .dialog-tabs ngx-tabs.ngx-tabs:not(.dialog-tabs--sub)>section>.ngx-tabs-list{max-width:calc(100% - (var(--header-item-max-width-md) * 2) - 8rem)}}", ".ngx-large-format-dialog-content ngx-drawer.ngx-drawer.large-format-dialog-drawer{min-height:calc(100% - 2rem);max-height:calc(100% - 2rem);margin-left:1rem;max-width:calc(100% - 2rem);background-color:#262c38;overflow:hidden}.ngx-large-format-dialog-content ngx-drawer.ngx-drawer.large-format-dialog-drawer--1\\/2{min-width:50%;max-width:50%;left:unset;right:1rem}.ngx-large-format-dialog-content ngx-drawer.ngx-drawer.large-format-dialog-drawer--1\\/3{min-width:33%;max-width:33%;left:unset;right:1rem}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.AlertService }]; }, { dialogTitle: [{
            type: Input
        }], dialogActionTitle: [{
            type: Input
        }], dirty: [{
            type: Input
        }], dialogDirtyActionTitle: [{
            type: Input
        }], skipDirtyAlert: [{
            type: Input
        }], closeOrCancel: [{
            type: Output
        }], hostClass: [{
            type: HostBinding,
            args: ['class.ngx-large-format-dialog-content']
        }], dialogSubtitle: [{
            type: Input
        }], dirtyAlertOptions: [{
            type: Input
        }], footerComponent: [{
            type: ContentChild,
            args: [LargeFormatDialogFooterComponent]
        }], stepperTemplate: [{
            type: ContentChild,
            args: [LargeFormatDialogStepperDirective, { read: TemplateRef }]
        }], tabsTemplate: [{
            type: ContentChild,
            args: [LargeFormatDialogTabsDirective, { read: TemplateRef }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFyZ2UtZm9ybWF0LWRpYWxvZy1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9kaWFsb2cvbGFyZ2UtZm9ybWF0L2xhcmdlLWZvcm1hdC1kaWFsb2ctY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUNoSSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxnRkFBZ0YsQ0FBQztBQUNuSSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVMUgsTUFBTSxPQUFPLGlDQUFpQztBQUM5QyxJQXdCRSxZQUFtQixVQUFzQixFQUFtQixZQUEwQjtBQUFJLFFBQXZFLGVBQVUsR0FBVixVQUFVLENBQVk7QUFBQyxRQUFrQixpQkFBWSxHQUFaLFlBQVksQ0FBYztBQUFDLFFBeEJ2RixzQkFBc0I7QUFDeEIsUUFBVyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztBQUM1QixRQUVFLHVCQUF1QjtBQUN6QixRQUFXLHNCQUFpQixHQUFHLE9BQU8sQ0FBQztBQUN2QyxRQUFXLFVBQUssR0FBRyxLQUFLLENBQUM7QUFDekIsUUFBVywyQkFBc0IsR0FBRyxRQUFRLENBQUM7QUFDN0MsUUFHVyxtQkFBYyxHQUFHLEtBQUssQ0FBQztBQUNsQyxRQUNFLHdCQUF3QjtBQUMxQixRQUFZLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztBQUN4RCxRQUN3RCxjQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3pFLElBTzJGLENBQUM7QUFDNUYsSUFDRSxlQUFlLENBQUMsT0FBZ0I7QUFDbEMsUUFBSSxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7QUFDekMsWUFBTSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8saUJBQ3hDLEtBQUssRUFBRSwwQkFBMEIsRUFDakMsT0FBTyxFQUFFLGdEQUFnRCxFQUN6RCxnQkFBZ0IsRUFBRSxTQUFTLEVBQzNCLGlCQUFpQixFQUFFLGNBQWMsRUFDakMsaUJBQWlCLEVBQUUsUUFBUSxJQUN4QixDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxFQUFFLENBQUMsRUFDakMsQ0FBQztBQUNULFlBQ00sUUFBUTtBQUNkLGlCQUFTLFlBQVksRUFBRTtBQUN2QixpQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNyQyxpQkFBUyxTQUFTLENBQUMsQ0FBQyxVQUEyQixFQUFFLEVBQUU7QUFDbkQsZ0JBQVU7QUFDVjtBQUNNO0FBQ007QUFFUixtQkFEUztBQUNiLGdCQUFVLElBQUksVUFBVSxLQUFLLFFBQVEsRUFBRTtBQUN2QyxvQkFBWSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QyxpQkFBVztBQUNYLFlBQVEsQ0FBQyxDQUFDLENBQUM7QUFDWCxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdkMsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIOzZEQS9EQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGlDQUFpQyxrQkFDM0MsUUFBUSxFQUFFLDZCQUE2QixrQkFDdkM7Ozs7Ozs7Ozs7Ozs4b0JBQTJELGtCQUUzRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozt3ME9BQ3RDLGsrQkFDSTtBQUFDO0FBQ1UsWUF4QmQsVUFBVTtBQUNWLFlBUU8sWUFBWTtBQUFHO0FBQUc7QUFDRiwwQkFldEIsS0FBSztBQUFLLDZCQUNWLEtBQUs7QUFBSyxnQ0FHVixLQUFLO0FBQUssb0JBQ1YsS0FBSztBQUFLLHFDQUNWLEtBQUs7QUFBSyxnQ0FHVixLQUFLO0FBQUssNkJBQ1YsS0FBSztBQUFLLDRCQUdWLE1BQU07QUFBSyx3QkFFWCxXQUFXLFNBQUMsdUNBQXVDO0FBQU8sOEJBRTFELFlBQVksU0FBQyxnQ0FBZ0M7QUFBTyw4QkFFcEQsWUFBWSxTQUFDLGlDQUFpQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtBQUFPLDJCQUU1RSxZQUFZLFNBQUMsOEJBQThCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwbHVjaywgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4uL2FsZXJ0L2FsZXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlhbG9nT3B0aW9ucyB9IGZyb20gJy4uL2RpYWxvZy1vcHRpb25zLmludGVyZmFjZSc7XG5pbXBvcnQgeyBMYXJnZUZvcm1hdERpYWxvZ0Zvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sYXJnZS1mb3JtYXQtZGlhbG9nLWZvb3Rlci9sYXJnZS1mb3JtYXQtZGlhbG9nLWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGFyZ2VGb3JtYXREaWFsb2dTdGVwcGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2xhcmdlLWZvcm1hdC1kaWFsb2ctc3RlcHBlci9sYXJnZS1mb3JtYXQtZGlhbG9nLXN0ZXBwZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IExhcmdlRm9ybWF0RGlhbG9nVGFic0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9sYXJnZS1mb3JtYXQtZGlhbG9nLXRhYnMvbGFyZ2UtZm9ybWF0LWRpYWxvZy10YWJzLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1sYXJnZS1mb3JtYXQtZGlhbG9nLWNvbnRlbnQnLFxuICBleHBvcnRBczogJ25neExhcmdlRm9ybWF0RGlhbG9nQ29udGVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sYXJnZS1mb3JtYXQtZGlhbG9nLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sYXJnZS1mb3JtYXQtZGlhbG9nLWNvbnRlbnQuY29tcG9uZW50LnNjc3MnLCAnLi9sYXJnZS1mb3JtYXQtZGlhbG9nLWNvbnRlbnQtZHJhd2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIExhcmdlRm9ybWF0RGlhbG9nQ29udGVudENvbXBvbmVudCB7XG4gIC8vIGhlYWRlci10aXRsZSBpbnB1dHNcbiAgQElucHV0KCkgZGlhbG9nVGl0bGUgPSAnJztcbiAgQElucHV0KCkgZGlhbG9nU3VidGl0bGU/OiBzdHJpbmc7XG5cbiAgLy8gaGVhZGVyLWFjdGlvbiBpbnB1dHNcbiAgQElucHV0KCkgZGlhbG9nQWN0aW9uVGl0bGUgPSAnQ2xvc2UnO1xuICBASW5wdXQoKSBkaXJ0eSA9IGZhbHNlO1xuICBASW5wdXQoKSBkaWFsb2dEaXJ0eUFjdGlvblRpdGxlID0gJ0NhbmNlbCc7XG5cbiAgLy8gZGlydHkgYWxlcnQgb3B0aW9uc1xuICBASW5wdXQoKSBkaXJ0eUFsZXJ0T3B0aW9ucz86IERpYWxvZ09wdGlvbnM7XG4gIEBJbnB1dCgpIHNraXBEaXJ0eUFsZXJ0ID0gZmFsc2U7XG5cbiAgLy8gaGVhZGVyLWFjdGlvbiBvdXRwdXRzXG4gIEBPdXRwdXQoKSBjbG9zZU9yQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3Mubmd4LWxhcmdlLWZvcm1hdC1kaWFsb2ctY29udGVudCcpIGhvc3RDbGFzcyA9IHRydWU7XG5cbiAgQENvbnRlbnRDaGlsZChMYXJnZUZvcm1hdERpYWxvZ0Zvb3RlckNvbXBvbmVudCkgZm9vdGVyQ29tcG9uZW50PzogTGFyZ2VGb3JtYXREaWFsb2dGb290ZXJDb21wb25lbnQ7XG5cbiAgQENvbnRlbnRDaGlsZChMYXJnZUZvcm1hdERpYWxvZ1N0ZXBwZXJEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgc3RlcHBlclRlbXBsYXRlPzogVGVtcGxhdGVSZWY8dW5rbm93bj47XG5cbiAgQENvbnRlbnRDaGlsZChMYXJnZUZvcm1hdERpYWxvZ1RhYnNEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgdGFic1RlbXBsYXRlPzogVGVtcGxhdGVSZWY8dW5rbm93bj47XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVhZG9ubHkgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UpIHt9XG5cbiAgb25DbG9zZU9yQ2FuY2VsKGlzRGlydHk6IGJvb2xlYW4pIHtcbiAgICBpZiAoaXNEaXJ0eSAmJiAhdGhpcy5za2lwRGlydHlBbGVydCkge1xuICAgICAgY29uc3QgYWxlcnRSZWYgPSB0aGlzLmFsZXJ0U2VydmljZS5jb25maXJtKHtcbiAgICAgICAgdGl0bGU6ICdZb3UgSGF2ZSBVbnNhdmVkIENoYW5nZXMnLFxuICAgICAgICBjb250ZW50OiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRpc2NhcmQgeW91ciBjaGFuZ2VzPycsXG4gICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdEaXNjYXJkJyxcbiAgICAgICAgY2FuY2VsQnV0dG9uQ2xhc3M6ICdidG4tYm9yZGVyZWQnLFxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gICAgICAgIC4uLih0aGlzLmRpcnR5QWxlcnRPcHRpb25zIHx8IHt9KVxuICAgICAgfSk7XG5cbiAgICAgIGFsZXJ0UmVmXG4gICAgICAgIC5hc09ic2VydmFibGUoKVxuICAgICAgICAucGlwZSh0YWtlKDEpLCBwbHVjaygndHlwZScpKVxuICAgICAgICAuc3Vic2NyaWJlKChva09yQ2FuY2VsOiAnb2snIHwgJ2NhbmNlbCcpID0+IHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBCYXNlZCBvbiB0aGUgZGVzaWduLCBDYW5jZWwgYnV0dG9uIGlzIG9uIHRoZSBcImNvbmZpcm1CdXR0b25UZXh0XCIgcG9zaXRpb24gd2hpbGUgRGlzY2FyZCBidXR0b24gaXMgb24gdGhlIFwiY2FuY2VsQnV0dG9uVGV4dFwiXG4gICAgICAgICAgICogLSBXaGVuIERpc2NhcmQgaXMgY2xpY2tlZCwgYWxlcnRSZWYgd2lsbCBlbWl0IHt0eXBlOiBjYW5jZWx9LCBpdCBtZWFucyB0aGF0IHRoZSBjb25zdW1lcnMgd2FudCB0byBkaXNjYXJkIHRoZWlyIGNoYW5nZXMgPT4gZW1pdCB0aGUgb3V0cHV0XG4gICAgICAgICAgICogLSBXaGVuIENhbmNlbCBpcyBjbGlja2VkLCBhbGVydFJlZiB3aWxsIGVtaXQge3R5cGU6IG9rfSwgaXQgbWVhbnMgdGhhdCB0aGUgY29uc3VtZXJzIERPIE5PVCB3YW50IHRvIGRpc2NhcmQgdGhlaXIgY2hhbmdlcy5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAob2tPckNhbmNlbCA9PT0gJ2NhbmNlbCcpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VPckNhbmNlbC5lbWl0KGlzRGlydHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2VPckNhbmNlbC5lbWl0KGlzRGlydHkpO1xuICAgIH1cbiAgfVxufVxuIl19