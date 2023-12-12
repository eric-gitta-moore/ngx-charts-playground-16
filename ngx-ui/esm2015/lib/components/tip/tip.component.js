import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { TipStatus } from './tip-status.enum';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../icon/icon.component';
import * as ɵngcc2 from '@angular/common';

function TipComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵlistener("click", function TipComponent_div_6_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.onClose(); });
    ɵngcc0.ɵɵelement(1, "ngx-icon", 7);
    ɵngcc0.ɵɵelementEnd();
} }
const _c0 = ["*"];
const ICONS = {
    [TipStatus.Error]: 'warning-filled-sm',
    [TipStatus.Warning]: 'alert',
    default: 'info-filled-small'
};
function getIcon(status) {
    return ICONS[status] || ICONS['default'];
}
export class TipComponent {
    constructor() {
        this.isCloseable = false;
        this.close = new EventEmitter();
        this.TipStatus = TipStatus;
    }
    ngOnChanges() {
        if (!this.icon) {
            this.icon = getIcon(this.status);
        }
    }
    ngOnDestroy() {
        this.close.emit();
    }
    onClose() {
        this.close.emit();
    }
}
TipComponent.ɵfac = function TipComponent_Factory(t) { return new (t || TipComponent)(); };
TipComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: TipComponent, selectors: [["ngx-tip"]], hostAttrs: [1, "ngx-tip"], hostVars: 8, hostBindings: function TipComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ngx-tip--success", ctx.status === ctx.TipStatus.Success)("ngx-tip--error", ctx.status === ctx.TipStatus.Error)("ngx-tip--notice", ctx.status === ctx.TipStatus.Notice)("ngx-tip--warning", ctx.status === ctx.TipStatus.Warning);
    } }, inputs: { isCloseable: "isCloseable", icon: "icon", status: "status" }, outputs: { close: "close" }, exportAs: ["ngxTip"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 7, vars: 2, consts: [[1, "tip-container"], [1, "tip-content"], [1, "tip-content--icon"], [3, "fontIcon"], [1, "tip-content--template"], ["class", "tip-container--close", 3, "click", 4, "ngIf"], [1, "tip-container--close", 3, "click"], ["fontIcon", "x"]], template: function TipComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelement(3, "ngx-icon", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵprojection(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(6, TipComponent_div_6_Template, 2, 0, "div", 5);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("fontIcon", ctx.icon);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isCloseable);
    } }, directives: [ɵngcc1.IconComponent, ɵngcc2.NgIf], styles: [".ngx-tip .tip-container{border:2px solid #3b4457;box-sizing:border-box;border-radius:2px;display:flex;justify-content:space-between;padding:10px;position:relative}.ngx-tip .tip-container:before{content:\"\";position:absolute;top:-2px;bottom:-2px;background:#818fa9;border-top-left-radius:2px;border-bottom-left-radius:2px;width:2px;left:-2px}.ngx-tip .tip-container .tip-content{display:flex;height:100%}.ngx-tip .tip-container .tip-content--icon{color:#818fa9;font-size:14px;padding-top:3px}.ngx-tip .tip-container .tip-content--template{font-size:14px;line-height:18px;margin:0 10px;color:#a0aabe}.ngx-tip .tip-container--close{margin-top:-2px;cursor:pointer}.ngx-tip .tip-container--close .ngx-icon{color:#72819f;font-size:10px}.ngx-tip.ngx-tip--success .tip-container:before{background:#1ddeb6}.ngx-tip.ngx-tip--success .tip-container .tip-content--icon .ngx-icon{color:#1ddeb6}.ngx-tip.ngx-tip--error .tip-container:before{background:#ff4514}.ngx-tip.ngx-tip--error .tip-container .tip-content--icon .ngx-icon{color:#ff4514}.ngx-tip.ngx-tip--warning .tip-container:before{background:#ffbb47}.ngx-tip.ngx-tip--warning .tip-container .tip-content--icon .ngx-icon{color:#ffbb47}"], encapsulation: 2, changeDetection: 0 });
TipComponent.propDecorators = {
    status: [{ type: Input }],
    isCloseable: [{ type: Input }],
    icon: [{ type: Input }],
    close: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TipComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-tip',
                exportAs: 'ngxTip',
                template: "<div class=\"tip-container\">\n  <div class=\"tip-content\">\n    <div class=\"tip-content--icon\">\n      <ngx-icon [fontIcon]=\"icon\"></ngx-icon>\n    </div>\n    <div class=\"tip-content--template\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div *ngIf=\"isCloseable\" class=\"tip-container--close\" (click)=\"onClose()\">\n    <ngx-icon fontIcon=\"x\"></ngx-icon>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'ngx-tip',
                    '[class.ngx-tip--success]': 'status === TipStatus.Success',
                    '[class.ngx-tip--error]': 'status === TipStatus.Error',
                    '[class.ngx-tip--notice]': 'status === TipStatus.Notice',
                    '[class.ngx-tip--warning]': 'status === TipStatus.Warning'
                },
                styles: [".ngx-tip .tip-container{border:2px solid #3b4457;box-sizing:border-box;border-radius:2px;display:flex;justify-content:space-between;padding:10px;position:relative}.ngx-tip .tip-container:before{content:\"\";position:absolute;top:-2px;bottom:-2px;background:#818fa9;border-top-left-radius:2px;border-bottom-left-radius:2px;width:2px;left:-2px}.ngx-tip .tip-container .tip-content{display:flex;height:100%}.ngx-tip .tip-container .tip-content--icon{color:#818fa9;font-size:14px;padding-top:3px}.ngx-tip .tip-container .tip-content--template{font-size:14px;line-height:18px;margin:0 10px;color:#a0aabe}.ngx-tip .tip-container--close{margin-top:-2px;cursor:pointer}.ngx-tip .tip-container--close .ngx-icon{color:#72819f;font-size:10px}.ngx-tip.ngx-tip--success .tip-container:before{background:#1ddeb6}.ngx-tip.ngx-tip--success .tip-container .tip-content--icon .ngx-icon{color:#1ddeb6}.ngx-tip.ngx-tip--error .tip-container:before{background:#ff4514}.ngx-tip.ngx-tip--error .tip-container .tip-content--icon .ngx-icon{color:#ff4514}.ngx-tip.ngx-tip--warning .tip-container:before{background:#ffbb47}.ngx-tip.ngx-tip--warning .tip-container .tip-content--icon .ngx-icon{color:#ffbb47}"]
            }]
    }], function () { return []; }, { isCloseable: [{
            type: Input
        }], close: [{
            type: Output
        }], icon: [{
            type: Input
        }], status: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlwLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy90aXAvdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLGlCQUFpQixFQUNqQix1QkFBdUIsRUFHeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBRTlDLE1BQU0sS0FBSyxHQUFHO0FBQ2QsSUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxtQkFBbUI7QUFDeEMsSUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPO0FBQzlCLElBQUUsT0FBTyxFQUFFLG1CQUFtQjtBQUM5QixDQUFDLENBQUM7QUFFRixTQUFTLE9BQU8sQ0FBQyxNQUFpQjtBQUFJLElBQ3BDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBaUJELE1BQU0sT0FBTyxZQUFZO0FBQUcsSUFmNUI7QUFDRyxRQWdCUSxnQkFBVyxHQUFHLEtBQUssQ0FBQztBQUMvQixRQUVZLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ3ZDLFFBQ1csY0FBUyxHQUFHLFNBQVMsQ0FBQztBQUNqQyxJQWNBLENBQUM7QUFDRCxJQWRFLFdBQVc7QUFBSyxRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ3BCLFlBQU0sSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVc7QUFBSyxRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDdEIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxPQUFPO0FBQUssUUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3RCLElBQUUsQ0FBQztBQUNIO3dDQXJDQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFO0dBQVMsa0JBQ25CLFFBQVEsRUFBRSxRQUFRLGtCQUNsQjs0UEFBbUM7Z0JBRW5DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsSUFBSSxFQUFFLHNCQUNKLEtBQUssRUFBRSxTQUFTLHNCQUNoQiwwQkFBMEIsRUFBRSw4QkFBOEIsc0JBQzFELHdCQUF3QixFQUFFLDRCQUE0QixzQkFDdEQseUJBQXlCLEVBQUUsNkJBQTZCLHNCQUN4RCwwQkFBMEIsRUFBRSw4QkFBOEIsa0JBQzNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a2lCQUNGLDB1QkFDSTtBQUFDO0FBQWdDLHFCQUNuQyxLQUFLO0FBQUssMEJBQ1YsS0FBSztBQUFLLG1CQUNWLEtBQUs7QUFBSyxvQkFFVixNQUFNO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpcFN0YXR1cyB9IGZyb20gJy4vdGlwLXN0YXR1cy5lbnVtJztcblxuY29uc3QgSUNPTlMgPSB7XG4gIFtUaXBTdGF0dXMuRXJyb3JdOiAnd2FybmluZy1maWxsZWQtc20nLFxuICBbVGlwU3RhdHVzLldhcm5pbmddOiAnYWxlcnQnLFxuICBkZWZhdWx0OiAnaW5mby1maWxsZWQtc21hbGwnXG59O1xuXG5mdW5jdGlvbiBnZXRJY29uKHN0YXR1czogVGlwU3RhdHVzKTogc3RyaW5nIHtcbiAgcmV0dXJuIElDT05TW3N0YXR1c10gfHwgSUNPTlNbJ2RlZmF1bHQnXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXRpcCcsXG4gIGV4cG9ydEFzOiAnbmd4VGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RpcC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbmd4LXRpcCcsXG4gICAgJ1tjbGFzcy5uZ3gtdGlwLS1zdWNjZXNzXSc6ICdzdGF0dXMgPT09IFRpcFN0YXR1cy5TdWNjZXNzJyxcbiAgICAnW2NsYXNzLm5neC10aXAtLWVycm9yXSc6ICdzdGF0dXMgPT09IFRpcFN0YXR1cy5FcnJvcicsXG4gICAgJ1tjbGFzcy5uZ3gtdGlwLS1ub3RpY2VdJzogJ3N0YXR1cyA9PT0gVGlwU3RhdHVzLk5vdGljZScsXG4gICAgJ1tjbGFzcy5uZ3gtdGlwLS13YXJuaW5nXSc6ICdzdGF0dXMgPT09IFRpcFN0YXR1cy5XYXJuaW5nJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIFRpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgc3RhdHVzOiBUaXBTdGF0dXM7XG4gIEBJbnB1dCgpIGlzQ2xvc2VhYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcblxuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcmVhZG9ubHkgVGlwU3RhdHVzID0gVGlwU3RhdHVzO1xuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pY29uKSB7XG4gICAgICB0aGlzLmljb24gPSBnZXRJY29uKHRoaXMuc3RhdHVzKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlLmVtaXQoKTtcbiAgfVxuXG4gIG9uQ2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZS5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==