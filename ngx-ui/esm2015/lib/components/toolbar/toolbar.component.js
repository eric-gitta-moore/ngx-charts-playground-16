import { Component, Input, Output, EventEmitter, ViewChild, ViewEncapsulation, Renderer2, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { ToolbarTitleDirective } from './toolbar-title.directive';
import { ToolbarContentDirective } from './toolbar-content.directive';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../dropdown/dropdown.component';
import * as ɵngcc3 from '../dropdown/dropdown-toggle.directive';
import * as ɵngcc4 from '../dropdown/dropdown-menu.directive';

function ToolbarComponent_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngIf", "!mainTitle"]);
} }
function ToolbarComponent_h2_3_small_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "small");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.subtitle);
} }
function ToolbarComponent_h2_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "h2", 6);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵtemplate(2, ToolbarComponent_h2_3_small_2_Template, 2, 1, "small", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r1.mainTitle, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.subtitle);
} }
function ToolbarComponent_ng_content_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 1, ["*ngIf", "!menu.length"]);
} }
function ToolbarComponent_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelementStart(1, "button", 9);
    ɵngcc0.ɵɵlistener("click", function ToolbarComponent_ul_6_li_1_Template_button_click_1_listener($event) { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r9); const item_r7 = restoredCtx.$implicit; const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.onMenuClicked(item_r7, $event); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", item_r7.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r7.label, " ");
} }
function ToolbarComponent_ul_6_li_2_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelementStart(1, "button", 13);
    ɵngcc0.ɵɵlistener("click", function ToolbarComponent_ul_6_li_2_li_7_Template_button_click_1_listener($event) { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r13); const item_r11 = restoredCtx.$implicit; const ctx_r12 = ɵngcc0.ɵɵnextContext(3); return ctx_r12.onMenuClicked(item_r11, $event); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r11.label, " ");
} }
function ToolbarComponent_ul_6_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelementStart(1, "ngx-dropdown");
    ɵngcc0.ɵɵelementStart(2, "ngx-dropdown-toggle");
    ɵngcc0.ɵɵelementStart(3, "button", 10);
    ɵngcc0.ɵɵtext(4, " ... ");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "ngx-dropdown-menu", 11);
    ɵngcc0.ɵɵelementStart(6, "ul", 12);
    ɵngcc0.ɵɵtemplate(7, ToolbarComponent_ul_6_li_2_li_7_Template, 3, 1, "li", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(7);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r6.dropdownItems);
} }
function ToolbarComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 7);
    ɵngcc0.ɵɵtemplate(1, ToolbarComponent_ul_6_li_1_Template, 3, 2, "li", 8);
    ɵngcc0.ɵɵtemplate(2, ToolbarComponent_ul_6_li_2_Template, 8, 1, "li", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3.toolbarItems);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.dropdownItems.length);
} }
const _c0 = [[["ngx-toolbar-title"]], [["ngx-toolbar-content"]]];
const _c1 = ["ngx-toolbar-title", "ngx-toolbar-content"];
export class ToolbarComponent {
    constructor(renderer, elRef) {
        this.renderer = renderer;
        this.elRef = elRef;
        this.menu = [];
        this.menuClick = new EventEmitter();
    }
    get toolbarItems() {
        return this.menu.filter(m => {
            return !m.dropdown;
        });
    }
    get dropdownItems() {
        return this.menu.filter(m => {
            return m.dropdown;
        });
    }
    onMenuClicked(item, $event) {
        if (item.click) {
            item.click($event);
        }
    }
    ngOnInit() {
        // backwards compatibility
        if (this.title) {
            this.mainTitle = this.title;
            this.renderer.removeAttribute(this.elRef.nativeElement, 'title');
        }
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ToolbarComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: ToolbarComponent, selectors: [["ngx-toolbar"]], viewQuery: function ToolbarComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(ToolbarTitleDirective, 5);
        ɵngcc0.ɵɵviewQuery(ToolbarContentDirective, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.toolbarTitle = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.toolbarContent = _t.first);
    } }, hostAttrs: [1, "ngx-toolbar"], inputs: { menu: "menu", mainTitle: "mainTitle", title: "title", subtitle: "subtitle" }, outputs: { menuClick: "menuClick" }, ngContentSelectors: _c1, decls: 7, vars: 4, consts: [[1, "flex-container"], [1, "ngx-toolbar-title-col"], [4, "ngIf"], ["class", "ngx-toolbar-title", 4, "ngIf"], [1, "ngx-toolbar-content-col"], ["class", "horizontal-list ngx-toolbar-menu", 4, "ngIf"], [1, "ngx-toolbar-title"], [1, "horizontal-list", "ngx-toolbar-menu"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "disabled", "click"], ["type", "button"], [1, "align-right"], [1, "vertical-list"], ["type", "button", 3, "click"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵelementStart(0, "header", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, ToolbarComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
        ɵngcc0.ɵɵtemplate(3, ToolbarComponent_h2_3_Template, 3, 2, "h2", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵtemplate(5, ToolbarComponent_ng_content_5_Template, 1, 0, "ng-content", 2);
        ɵngcc0.ɵɵtemplate(6, ToolbarComponent_ul_6_Template, 3, 2, "ul", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.mainTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.mainTitle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.menu.length);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.menu.length);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc2.DropdownComponent, ɵngcc3.DropdownToggleDirective, ɵngcc4.DropdownMenuDirective], styles: [".ngx-toolbar{display:block;height:50px;line-height:50px;color:#a0aabe;background:#1c2029;width:100%;font-size:.8rem;padding:0 20px!important}.ngx-toolbar .flex-container{flex-direction:row;box-sizing:border-box;display:flex}.ngx-toolbar .flex-container>*{flex:1 1 0%;box-sizing:border-box}.ngx-toolbar a{color:#a0aabe}.ngx-toolbar .ngx-toolbar-title-col{overflow:hidden}.ngx-toolbar .ngx-toolbar-title{margin:0;font-weight:500;text-overflow:ellipsis;overflow:hidden;width:100%;white-space:nowrap}.ngx-toolbar .ngx-toolbar-title small{color:#5a6884;font-size:.9rem;line-height:50px;vertical-align:top}.ngx-toolbar .ngx-toolbar-menu button{color:#a0aabe}.ngx-toolbar .ngx-toolbar-content-col{text-align:right}.ngx-toolbar.page-toolbar{box-shadow:0 1px 5px 0 rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}"], encapsulation: 2, changeDetection: 0 });
ToolbarComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
ToolbarComponent.propDecorators = {
    title: [{ type: Input }],
    mainTitle: [{ type: Input }],
    subtitle: [{ type: Input }],
    menu: [{ type: Input }],
    menuClick: [{ type: Output }],
    toolbarTitle: [{ type: ViewChild, args: [ToolbarTitleDirective,] }],
    toolbarContent: [{ type: ViewChild, args: [ToolbarContentDirective,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ToolbarComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-toolbar',
                template: "<header class=\"flex-container\">\n  <div class=\"ngx-toolbar-title-col\">\n    <ng-content *ngIf=\"!mainTitle\" select=\"ngx-toolbar-title\"></ng-content>\n    <h2 class=\"ngx-toolbar-title\" *ngIf=\"mainTitle\">\n      {{ mainTitle }}\n      <small *ngIf=\"subtitle\">{{ subtitle }}</small>\n    </h2>\n  </div>\n  <div class=\"ngx-toolbar-content-col\">\n    <ng-content *ngIf=\"!menu.length\" select=\"ngx-toolbar-content\"></ng-content>\n    <ul class=\"horizontal-list ngx-toolbar-menu\" *ngIf=\"menu.length\">\n      <li *ngFor=\"let item of toolbarItems\">\n        <button type=\"button\" [disabled]=\"item.disabled\" (click)=\"onMenuClicked(item, $event)\">\n          {{ item.label }}\n        </button>\n      </li>\n      <li *ngIf=\"dropdownItems.length\">\n        <ngx-dropdown>\n          <ngx-dropdown-toggle>\n            <button type=\"button\">\n              ...\n            </button>\n          </ngx-dropdown-toggle>\n          <ngx-dropdown-menu class=\"align-right\">\n            <ul class=\"vertical-list\">\n              <li *ngFor=\"let item of dropdownItems\">\n                <button type=\"button\" (click)=\"onMenuClicked(item, $event)\">\n                  {{ item.label }}\n                </button>\n              </li>\n            </ul>\n          </ngx-dropdown-menu>\n        </ngx-dropdown>\n      </li>\n    </ul>\n  </div>\n</header>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'ngx-toolbar'
                },
                styles: [".ngx-toolbar{display:block;height:50px;line-height:50px;color:#a0aabe;background:#1c2029;width:100%;font-size:.8rem;padding:0 20px!important}.ngx-toolbar .flex-container{flex-direction:row;box-sizing:border-box;display:flex}.ngx-toolbar .flex-container>*{flex:1 1 0%;box-sizing:border-box}.ngx-toolbar a{color:#a0aabe}.ngx-toolbar .ngx-toolbar-title-col{overflow:hidden}.ngx-toolbar .ngx-toolbar-title{margin:0;font-weight:500;text-overflow:ellipsis;overflow:hidden;width:100%;white-space:nowrap}.ngx-toolbar .ngx-toolbar-title small{color:#5a6884;font-size:.9rem;line-height:50px;vertical-align:top}.ngx-toolbar .ngx-toolbar-menu button{color:#a0aabe}.ngx-toolbar .ngx-toolbar-content-col{text-align:right}.ngx-toolbar.page-toolbar{box-shadow:0 1px 5px 0 rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}"]
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }]; }, { menu: [{
            type: Input
        }], menuClick: [{
            type: Output
        }], mainTitle: [{
            type: Input
        }], title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }], toolbarTitle: [{
            type: ViewChild,
            args: [ToolbarTitleDirective]
        }], toolbarContent: [{
            type: ViewChild,
            args: [ToolbarContentDirective]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVix1QkFBdUIsRUFFeEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWF0RSxNQUFNLE9BQU8sZ0JBQWdCO0FBQUcsSUF1QjlCLFlBQW9CLFFBQW1CLEVBQVUsS0FBaUI7QUFBSSxRQUFsRCxhQUFRLEdBQVIsUUFBUSxDQUFXO0FBQUMsUUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFZO0FBQUMsUUFuQjFELFNBQUksR0FBc0IsRUFBRSxDQUFDO0FBQ3hDLFFBQ1ksY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7QUFDM0MsSUFnQnVFLENBQUM7QUFDeEUsSUFiRSxJQUFJLFlBQVk7QUFBSyxRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ2hDLFlBQU0sT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7QUFDekIsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNILElBQ0UsSUFBSSxhQUFhO0FBQUssUUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUNoQyxZQUFNLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQUN4QixRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsSUFBRSxDQUFDO0FBQ0gsSUFHRSxhQUFhLENBQUMsSUFBcUIsRUFBRSxNQUFhO0FBQUksUUFDcEQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ3BCLFlBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN6QixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSxRQUFRO0FBQUssUUFDWCwwQkFBMEI7QUFDOUIsUUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDcEIsWUFBTSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDbEMsWUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN2RSxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7NENBaERDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsYUFBYSxrQkFDdkI7Ozs7Ozs7Ozs7O0VBQXVDLGtCQUN2QyxhQUFhLEVBQUU7UUFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtHQUUvQyxJQUFJLEVBQUUsc0JBQ0osS0FBSyxFQUFFLGFBQWEsa0JBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7O3lOQUNGLHV5QkFDSTtBQUFDO0FBQTBDLFlBcEI5QyxTQUFTO0FBQ1QsWUFBQSxVQUFVO0FBQ1g7QUFBRztBQUVBLG9CQWlCRCxLQUFLO0FBQUssd0JBQ1YsS0FBSztBQUFLLHVCQUNWLEtBQUs7QUFBSyxtQkFDVixLQUFLO0FBQUssd0JBRVYsTUFBTTtBQUFLLDJCQUVYLFNBQVMsU0FBQyxxQkFBcUI7QUFBTyw2QkFDdEMsU0FBUyxTQUFDLHVCQUF1QjtBQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVG9vbGJhclRpdGxlRGlyZWN0aXZlIH0gZnJvbSAnLi90b29sYmFyLXRpdGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUb29sYmFyQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4vdG9vbGJhci1jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUb29sYmFyTWVudUl0ZW0gfSBmcm9tICcuL3Rvb2xiYXItbWVudS1pdGVtLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC10b29sYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3R5bGVVcmxzOiBbJy4vdG9vbGJhci5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICduZ3gtdG9vbGJhcidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgbWFpblRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN1YnRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1lbnU6IFRvb2xiYXJNZW51SXRlbVtdID0gW107XG5cbiAgQE91dHB1dCgpIG1lbnVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKFRvb2xiYXJUaXRsZURpcmVjdGl2ZSkgdG9vbGJhclRpdGxlOiBUb29sYmFyVGl0bGVEaXJlY3RpdmU7XG4gIEBWaWV3Q2hpbGQoVG9vbGJhckNvbnRlbnREaXJlY3RpdmUpIHRvb2xiYXJDb250ZW50OiBUb29sYmFyQ29udGVudERpcmVjdGl2ZTtcblxuICBnZXQgdG9vbGJhckl0ZW1zKCk6IFRvb2xiYXJNZW51SXRlbVtdIHtcbiAgICByZXR1cm4gdGhpcy5tZW51LmZpbHRlcihtID0+IHtcbiAgICAgIHJldHVybiAhbS5kcm9wZG93bjtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBkcm9wZG93bkl0ZW1zKCk6IFRvb2xiYXJNZW51SXRlbVtdIHtcbiAgICByZXR1cm4gdGhpcy5tZW51LmZpbHRlcihtID0+IHtcbiAgICAgIHJldHVybiBtLmRyb3Bkb3duO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIG9uTWVudUNsaWNrZWQoaXRlbTogVG9vbGJhck1lbnVJdGVtLCAkZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGl0ZW0uY2xpY2spIHtcbiAgICAgIGl0ZW0uY2xpY2soJGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgIGlmICh0aGlzLnRpdGxlKSB7XG4gICAgICB0aGlzLm1haW5UaXRsZSA9IHRoaXMudGl0bGU7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICd0aXRsZScpO1xuICAgIH1cbiAgfVxufVxuIl19