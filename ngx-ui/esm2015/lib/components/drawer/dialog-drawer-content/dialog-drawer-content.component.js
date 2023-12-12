import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
export class DialogDrawerContentComponent {
    constructor() {
        this.drawerTitle = '';
        this.dismissBtnText = 'Dismiss';
        this.dismiss = new EventEmitter();
        this.hostClass = true;
    }
}
DialogDrawerContentComponent.ɵfac = function DialogDrawerContentComponent_Factory(t) { return new (t || DialogDrawerContentComponent)(); };
DialogDrawerContentComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: DialogDrawerContentComponent, selectors: [["ngx-dialog-drawer-content"]], hostVars: 2, hostBindings: function DialogDrawerContentComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("ngx-dialog-drawer-content", ctx.hostClass);
    } }, inputs: { drawerTitle: "drawerTitle", dismissBtnText: "dismissBtnText" }, outputs: { dismiss: "dismiss" }, ngContentSelectors: _c0, decls: 8, vars: 2, consts: [[1, "ngx-dialog-drawer-content__header", "shadow-1", 3, "click"], [1, "ngx-dialog-drawer-content__header-title"], ["type", "button", 1, "ngx-dialog-drawer-content__dismiss-btn", "btn", "btn-link"], [1, "ngx-icon", "ngx-arrow-bold-down"], [1, "ngx-dialog-drawer-content__content"]], template: function DialogDrawerContentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "header", 0);
        ɵngcc0.ɵɵlistener("click", function DialogDrawerContentComponent_Template_header_click_0_listener() { return ctx.dismiss.emit(); });
        ɵngcc0.ɵɵelementStart(1, "h2", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "button", 2);
        ɵngcc0.ɵɵelement(4, "i", 3);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "section", 4);
        ɵngcc0.ɵɵprojection(7);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.drawerTitle);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.dismissBtnText, " ");
    } }, styles: [".ngx-dialog-drawer-content{display:flex;flex-direction:column;overflow:hidden;height:100%}.ngx-dialog-drawer-content__header{background-color:#313847;display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;cursor:pointer}.ngx-dialog-drawer-content__header-title{color:#818fa9;margin:0;font-size:1.125rem}.ngx-dialog-drawer-content__dismiss-btn{color:#818fa9;font-size:.875rem;padding-right:0}.ngx-dialog-drawer-content__dismiss-btn:hover{color:#fff}.ngx-dialog-drawer-content__content{height:100%;padding:0 2rem;overflow:auto}.ngx-dialog-drawer-content~ngx-drawer.ngx-drawer.large-format-dialog-drawer{margin-left:0;max-width:100%;min-height:calc(100% - 3.5rem - 4px);max-height:calc(100% - 3.5rem - 4px)}"], encapsulation: 2, changeDetection: 0 });
DialogDrawerContentComponent.propDecorators = {
    drawerTitle: [{ type: Input }],
    dismissBtnText: [{ type: Input }],
    dismiss: [{ type: Output }],
    hostClass: [{ type: HostBinding, args: ['class.ngx-dialog-drawer-content',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DialogDrawerContentComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-dialog-drawer-content',
                template: `
    <header class="ngx-dialog-drawer-content__header shadow-1" (click)="dismiss.emit()">
      <h2 class="ngx-dialog-drawer-content__header-title">{{ drawerTitle }}</h2>
      <button type="button" class="ngx-dialog-drawer-content__dismiss-btn btn btn-link">
        <i class="ngx-icon ngx-arrow-bold-down"></i>
        {{ dismissBtnText }}
      </button>
    </header>
    <section class="ngx-dialog-drawer-content__content">
      <ng-content></ng-content>
    </section>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".ngx-dialog-drawer-content{display:flex;flex-direction:column;overflow:hidden;height:100%}.ngx-dialog-drawer-content__header{background-color:#313847;display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;cursor:pointer}.ngx-dialog-drawer-content__header-title{color:#818fa9;margin:0;font-size:1.125rem}.ngx-dialog-drawer-content__dismiss-btn{color:#818fa9;font-size:.875rem;padding-right:0}.ngx-dialog-drawer-content__dismiss-btn:hover{color:#fff}.ngx-dialog-drawer-content__content{height:100%;padding:0 2rem;overflow:auto}.ngx-dialog-drawer-content~ngx-drawer.ngx-drawer.large-format-dialog-drawer{margin-left:0;max-width:100%;min-height:calc(100% - 3.5rem - 4px);max-height:calc(100% - 3.5rem - 4px)}"]
            }]
    }], function () { return []; }, { drawerTitle: [{
            type: Input
        }], dismissBtnText: [{
            type: Input
        }], dismiss: [{
            type: Output
        }], hostClass: [{
            type: HostBinding,
            args: ['class.ngx-dialog-drawer-content']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWRyYXdlci1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9kcmF3ZXIvZGlhbG9nLWRyYXdlci1jb250ZW50L2RpYWxvZy1kcmF3ZXItY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7OztBQW9CdkIsTUFBTSxPQUFPLDRCQUE0QjtBQUN6QyxJQW5CQTtBQUNHLFFBa0JRLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0FBQzVCLFFBQVcsbUJBQWMsR0FBRyxTQUFTLENBQUM7QUFDdEMsUUFBWSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUN6QyxRQUNrRCxjQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ25FLElBQUEsQ0FBQztBQUNEO3dEQXpCQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtPQUNyQyxRQUFRLEVBQUU7O3FLQVdULGtCQUVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7OytCQUN0Qzs7Ozs7Ozs7d3hCQUNJO0FBQUM7QUFDSSwwQkFBUCxLQUFLO0FBQUssNkJBQ1YsS0FBSztBQUFLLHNCQUNWLE1BQU07QUFBSyx3QkFFWCxXQUFXLFNBQUMsaUNBQWlDO0FBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1kaWFsb2ctZHJhd2VyLWNvbnRlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoZWFkZXIgY2xhc3M9XCJuZ3gtZGlhbG9nLWRyYXdlci1jb250ZW50X19oZWFkZXIgc2hhZG93LTFcIiAoY2xpY2spPVwiZGlzbWlzcy5lbWl0KClcIj5cbiAgICAgIDxoMiBjbGFzcz1cIm5neC1kaWFsb2ctZHJhd2VyLWNvbnRlbnRfX2hlYWRlci10aXRsZVwiPnt7IGRyYXdlclRpdGxlIH19PC9oMj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibmd4LWRpYWxvZy1kcmF3ZXItY29udGVudF9fZGlzbWlzcy1idG4gYnRuIGJ0bi1saW5rXCI+XG4gICAgICAgIDxpIGNsYXNzPVwibmd4LWljb24gbmd4LWFycm93LWJvbGQtZG93blwiPjwvaT5cbiAgICAgICAge3sgZGlzbWlzc0J0blRleHQgfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvaGVhZGVyPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwibmd4LWRpYWxvZy1kcmF3ZXItY29udGVudF9fY29udGVudFwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvc2VjdGlvbj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vZGlhbG9nLWRyYXdlci1jb250ZW50LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0RyYXdlckNvbnRlbnRDb21wb25lbnQge1xuICBASW5wdXQoKSBkcmF3ZXJUaXRsZSA9ICcnO1xuICBASW5wdXQoKSBkaXNtaXNzQnRuVGV4dCA9ICdEaXNtaXNzJztcbiAgQE91dHB1dCgpIGRpc21pc3MgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZ3gtZGlhbG9nLWRyYXdlci1jb250ZW50JykgaG9zdENsYXNzID0gdHJ1ZTtcbn1cbiJdfQ==