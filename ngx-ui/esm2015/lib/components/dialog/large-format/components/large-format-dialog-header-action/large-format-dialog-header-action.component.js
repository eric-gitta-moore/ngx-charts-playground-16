import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class LargeFormatDialogHeaderActionComponent {
    constructor() {
        this.actionTitle = 'Close';
        this.dirty = false;
        this.dirtyActionTitle = 'Cancel';
        this.closeOrCancel = new EventEmitter();
        this.hostClass = true;
    }
}
LargeFormatDialogHeaderActionComponent.ɵfac = function LargeFormatDialogHeaderActionComponent_Factory(t) { return new (t || LargeFormatDialogHeaderActionComponent)(); };
LargeFormatDialogHeaderActionComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: LargeFormatDialogHeaderActionComponent, selectors: [["ngx-large-format-dialog-header-action"]], hostVars: 2, hostBindings: function LargeFormatDialogHeaderActionComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ngx-large-format-dialog-header-action", ctx.hostClass);
    } }, inputs: { actionTitle: "actionTitle", dirty: "dirty", dirtyActionTitle: "dirtyActionTitle" }, outputs: { closeOrCancel: "closeOrCancel" }, decls: 3, vars: 1, consts: [["type", "button", 1, "ngx-large-format-dialog-header-action__button", "btn", "btn-link", 3, "click"], [1, "ngx-icon", "ngx-x"]], template: function LargeFormatDialogHeaderActionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵlistener("click", function LargeFormatDialogHeaderActionComponent_Template_button_click_0_listener() { return ctx.closeOrCancel.emit(ctx.dirty); });
        ɵngcc0.ɵɵelement(1, "i", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.dirty ? ctx.dirtyActionTitle : ctx.actionTitle, " ");
    } }, styles: [".ngx-large-format-dialog-header-action{flex:0 0 20%;max-width:50%;display:flex;align-items:center;justify-content:flex-end}.ngx-large-format-dialog-header-action__button{color:#72819f;font-size:.8125rem;line-height:1rem;padding-right:0}.ngx-large-format-dialog-header-action__button i.ngx-icon{font-size:.625rem;margin-right:.5rem}.ngx-large-format-dialog-header-action__button:hover{color:#fff}"], encapsulation: 2, changeDetection: 0 });
LargeFormatDialogHeaderActionComponent.propDecorators = {
    actionTitle: [{ type: Input }],
    dirty: [{ type: Input }],
    dirtyActionTitle: [{ type: Input }],
    closeOrCancel: [{ type: Output }],
    hostClass: [{ type: HostBinding, args: ['class.ngx-large-format-dialog-header-action',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(LargeFormatDialogHeaderActionComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-large-format-dialog-header-action',
                template: `
    <button
      type="button"
      class="ngx-large-format-dialog-header-action__button btn btn-link"
      (click)="closeOrCancel.emit(dirty)"
    >
      <i class="ngx-icon ngx-x"></i>
      {{ dirty ? dirtyActionTitle : actionTitle }}
    </button>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-large-format-dialog-header-action{flex:0 0 20%;max-width:50%;display:flex;align-items:center;justify-content:flex-end}.ngx-large-format-dialog-header-action__button{color:#72819f;font-size:.8125rem;line-height:1rem;padding-right:0}.ngx-large-format-dialog-header-action__button i.ngx-icon{font-size:.625rem;margin-right:.5rem}.ngx-large-format-dialog-header-action__button:hover{color:#fff}"]
            }]
    }], function () { return []; }, { actionTitle: [{
            type: Input
        }], dirty: [{
            type: Input
        }], dirtyActionTitle: [{
            type: Input
        }], closeOrCancel: [{
            type: Output
        }], hostClass: [{
            type: HostBinding,
            args: ['class.ngx-large-format-dialog-header-action']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFyZ2UtZm9ybWF0LWRpYWxvZy1oZWFkZXItYWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9kaWFsb2cvbGFyZ2UtZm9ybWF0L2NvbXBvbmVudHMvbGFyZ2UtZm9ybWF0LWRpYWxvZy1oZWFkZXItYWN0aW9uL2xhcmdlLWZvcm1hdC1kaWFsb2ctaGVhZGVyLWFjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7QUFrQnZCLE1BQU0sT0FBTyxzQ0FBc0M7QUFDbkQsSUFqQkE7QUFDRyxRQWdCUSxnQkFBVyxHQUFHLE9BQU8sQ0FBQztBQUNqQyxRQUFXLFVBQUssR0FBRyxLQUFLLENBQUM7QUFDekIsUUFBVyxxQkFBZ0IsR0FBRyxRQUFRLENBQUM7QUFDdkMsUUFDWSxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7QUFDeEQsUUFDOEQsY0FBUyxHQUFHLElBQUksQ0FBQztBQUMvRSxJQUFBLENBQUM7QUFDRDtrRUF6QkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSx1Q0FBdUMsa0JBQ2pEO09BQVEsRUFBRSxvUUFTVCxrQkFFRCxhQUFhO0FBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDO0dBQU07NENBQ2hEOzs7Ozs7OzswY0FDSTtBQUFDO0FBQ0ksMEJBQVAsS0FBSztBQUFLLG9CQUNWLEtBQUs7QUFBSywrQkFDVixLQUFLO0FBQUssNEJBRVYsTUFBTTtBQUFLLHdCQUVYLFdBQVcsU0FBQyw2Q0FBNkM7QUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWxhcmdlLWZvcm1hdC1kaWFsb2ctaGVhZGVyLWFjdGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzcz1cIm5neC1sYXJnZS1mb3JtYXQtZGlhbG9nLWhlYWRlci1hY3Rpb25fX2J1dHRvbiBidG4gYnRuLWxpbmtcIlxuICAgICAgKGNsaWNrKT1cImNsb3NlT3JDYW5jZWwuZW1pdChkaXJ0eSlcIlxuICAgID5cbiAgICAgIDxpIGNsYXNzPVwibmd4LWljb24gbmd4LXhcIj48L2k+XG4gICAgICB7eyBkaXJ0eSA/IGRpcnR5QWN0aW9uVGl0bGUgOiBhY3Rpb25UaXRsZSB9fVxuICAgIDwvYnV0dG9uPlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9sYXJnZS1mb3JtYXQtZGlhbG9nLWhlYWRlci1hY3Rpb24uY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTGFyZ2VGb3JtYXREaWFsb2dIZWFkZXJBY3Rpb25Db21wb25lbnQge1xuICBASW5wdXQoKSBhY3Rpb25UaXRsZSA9ICdDbG9zZSc7XG4gIEBJbnB1dCgpIGRpcnR5ID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpcnR5QWN0aW9uVGl0bGUgPSAnQ2FuY2VsJztcblxuICBAT3V0cHV0KCkgY2xvc2VPckNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5neC1sYXJnZS1mb3JtYXQtZGlhbG9nLWhlYWRlci1hY3Rpb24nKSBob3N0Q2xhc3MgPSB0cnVlO1xufVxuIl19