import { Component, Input, ContentChild, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { SectionHeaderComponent } from './section-header.component';
import { SectionApperance } from './section-appearance.enum';
import { TogglePosition } from './section-toggle-position.enum';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../icon/icon.component';

function SectionComponent_header_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 5);
    ɵngcc0.ɵɵlistener("click", function SectionComponent_header_1_button_1_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(2); return ctx_r4.sectionCollapsible && ctx_r4.onSectionClicked(); });
    ɵngcc0.ɵɵelement(1, "ngx-icon", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("fontIcon", ctx_r2.sectionCollapsed ? "chevron-bold-right" : "chevron-bold-down");
} }
function SectionComponent_header_1_h1_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "h1", 7);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r3.sectionTitle, ɵngcc0.ɵɵsanitizeHtml);
} }
function SectionComponent_header_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "header", 2);
    ɵngcc0.ɵɵlistener("click", function SectionComponent_header_1_Template_header_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.headerToggle && ctx_r6.sectionCollapsible && ctx_r6.onSectionClicked(); });
    ɵngcc0.ɵɵtemplate(1, SectionComponent_header_1_button_1_Template, 2, 1, "button", 3);
    ɵngcc0.ɵɵprojection(2);
    ɵngcc0.ɵɵtemplate(3, SectionComponent_header_1_h1_3_Template, 1, 1, "h1", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("ngx-section-collapsible", ctx_r0.sectionCollapsible)("section-collapsed", ctx_r0.sectionCollapsed)("toggle-right", ctx_r0.togglePosition === ctx_r0.TogglePosition.Right)("header-toggle", ctx_r0.headerToggle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.sectionCollapsible && ctx_r0.togglePosition !== ctx_r0.TogglePosition.None);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.sectionTitle);
} }
function SectionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵprojection(1, 1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵstyleProp("padding", ctx_r1.padding);
} }
const _c0 = [[["ngx-section-header"]], "*"];
const _c1 = ["ngx-section-header", "*"];
export class SectionComponent {
    constructor() {
        this.sectionCollapsed = false;
        this.sectionCollapsible = true;
        this.headerToggle = false;
        this.padding = '1.8em';
        this.appearance = SectionApperance.Legacy;
        this.togglePosition = TogglePosition.Left;
        this.toggle = new EventEmitter();
        this.TogglePosition = TogglePosition;
    }
    get outline() {
        return this.appearance === SectionApperance.Outline;
    }
    onSectionClicked() {
        this.sectionCollapsed = !this.sectionCollapsed;
        this.toggle.emit(this.sectionCollapsed);
    }
}
SectionComponent.ɵfac = function SectionComponent_Factory(t) { return new (t || SectionComponent)(); };
SectionComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: SectionComponent, selectors: [["ngx-section"]], contentQueries: function SectionComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, SectionHeaderComponent, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerComp = _t.first);
    } }, hostAttrs: [1, "ngx-section"], hostVars: 2, hostBindings: function SectionComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("outline", ctx.outline);
    } }, inputs: { sectionCollapsed: "sectionCollapsed", sectionCollapsible: "sectionCollapsible", headerToggle: "headerToggle", padding: "padding", appearance: "appearance", togglePosition: "togglePosition", sectionTitle: "sectionTitle" }, outputs: { toggle: "toggle" }, exportAs: ["ngxSection"], ngContentSelectors: _c1, decls: 3, vars: 2, consts: [["class", "ngx-section-header", 3, "ngx-section-collapsible", "section-collapsed", "toggle-right", "header-toggle", "click", 4, "ngIf"], ["class", "ngx-section-content", 3, "padding", 4, "ngIf"], [1, "ngx-section-header", 3, "click"], ["class", "ngx-section-toggle", "type", "button", "title", "Toggle Content Visibility", 3, "click", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], ["type", "button", "title", "Toggle Content Visibility", 1, "ngx-section-toggle", 3, "click"], [3, "fontIcon"], [3, "innerHTML"], [1, "ngx-section-content"]], template: function SectionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵelementStart(0, "section");
        ɵngcc0.ɵɵtemplate(1, SectionComponent_header_1_Template, 4, 10, "header", 0);
        ɵngcc0.ɵɵtemplate(2, SectionComponent_div_2_Template, 2, 2, "div", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.headerComp || ctx.sectionTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.sectionCollapsed);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.IconComponent], styles: [".ngx-section{display:block;margin-bottom:2em;background:#171a21}.ngx-section .ngx-section-header{background:#212631;display:block;width:auto;height:40px;line-height:40px;padding:0 10px;color:#cdd2dd;position:relative}.ngx-section .ngx-section-header .ngx-section-toggle{font-size:8px;vertical-align:top;display:inline-block;line-height:40px;position:absolute;background:none;border:none;box-shadow:none;padding:0;left:15px}.ngx-section .ngx-section-header a{color:#cdd2dd}.ngx-section .ngx-section-header h1{font-size:1.1em;font-weight:600;line-height:40px;padding:0;margin:0}.ngx-section .ngx-section-header.ngx-section-collapsible{padding:0 20px 0 35px}.ngx-section .ngx-section-header.ngx-section-collapsible.header-toggle{cursor:pointer}.ngx-section .ngx-section-header.toggle-right.ngx-section-collapsible{padding:0 20px 0 15px}.ngx-section .ngx-section-header.toggle-right .ngx-section-toggle{left:calc(100% - 30px)}.ngx-section.shadow>section{box-shadow:0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12)}.ngx-section.outline .ngx-section-content,.ngx-section.outline .ngx-section-header{background:none;border:1px solid #455066}.ngx-section.outline .ngx-section-header{border-radius:2px 2px 0 0}.ngx-section.outline .ngx-section-header.section-collapsed{border-radius:2px}.ngx-section.outline .ngx-section-content{border-top:0;border-radius:0 0 2px 2px}"], encapsulation: 2, changeDetection: 0 });
SectionComponent.propDecorators = {
    outline: [{ type: HostBinding, args: ['class.outline',] }],
    sectionCollapsed: [{ type: Input }],
    sectionCollapsible: [{ type: Input }],
    headerToggle: [{ type: Input }],
    sectionTitle: [{ type: Input }],
    padding: [{ type: Input }],
    appearance: [{ type: Input }],
    togglePosition: [{ type: Input }],
    toggle: [{ type: Output }],
    headerComp: [{ type: ContentChild, args: [SectionHeaderComponent,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SectionComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-section',
                exportAs: 'ngxSection',
                template: "<section>\n  <header\n    *ngIf=\"headerComp || sectionTitle\"\n    [class.ngx-section-collapsible]=\"sectionCollapsible\"\n    [class.section-collapsed]=\"sectionCollapsed\"\n    [class.toggle-right]=\"togglePosition === TogglePosition.Right\"\n    [class.header-toggle]=\"headerToggle\"\n    class=\"ngx-section-header\"\n    (click)=\"headerToggle && sectionCollapsible && onSectionClicked()\"\n  >\n    <button\n      *ngIf=\"sectionCollapsible && togglePosition !== TogglePosition.None\"\n      class=\"ngx-section-toggle\"\n      type=\"button\"\n      title=\"Toggle Content Visibility\"\n      (click)=\"sectionCollapsible && onSectionClicked()\"\n    >\n      <ngx-icon \n        [fontIcon]=\"sectionCollapsed ? 'chevron-bold-right' : 'chevron-bold-down'\">\n      </ngx-icon>\n    </button>\n    <ng-content select=\"ngx-section-header\"></ng-content>\n    <h1 *ngIf=\"sectionTitle\" [innerHTML]=\"sectionTitle\"></h1>\n  </header>\n  <div class=\"ngx-section-content\" [style.padding]=\"padding\" *ngIf=\"!sectionCollapsed\">\n    <ng-content></ng-content>\n  </div>\n</section>\n",
                host: { class: 'ngx-section' },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-section{display:block;margin-bottom:2em;background:#171a21}.ngx-section .ngx-section-header{background:#212631;display:block;width:auto;height:40px;line-height:40px;padding:0 10px;color:#cdd2dd;position:relative}.ngx-section .ngx-section-header .ngx-section-toggle{font-size:8px;vertical-align:top;display:inline-block;line-height:40px;position:absolute;background:none;border:none;box-shadow:none;padding:0;left:15px}.ngx-section .ngx-section-header a{color:#cdd2dd}.ngx-section .ngx-section-header h1{font-size:1.1em;font-weight:600;line-height:40px;padding:0;margin:0}.ngx-section .ngx-section-header.ngx-section-collapsible{padding:0 20px 0 35px}.ngx-section .ngx-section-header.ngx-section-collapsible.header-toggle{cursor:pointer}.ngx-section .ngx-section-header.toggle-right.ngx-section-collapsible{padding:0 20px 0 15px}.ngx-section .ngx-section-header.toggle-right .ngx-section-toggle{left:calc(100% - 30px)}.ngx-section.shadow>section{box-shadow:0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12)}.ngx-section.outline .ngx-section-content,.ngx-section.outline .ngx-section-header{background:none;border:1px solid #455066}.ngx-section.outline .ngx-section-header{border-radius:2px 2px 0 0}.ngx-section.outline .ngx-section-header.section-collapsed{border-radius:2px}.ngx-section.outline .ngx-section-content{border-top:0;border-radius:0 0 2px 2px}"]
            }]
    }], function () { return []; }, { sectionCollapsed: [{
            type: Input
        }], sectionCollapsible: [{
            type: Input
        }], headerToggle: [{
            type: Input
        }], padding: [{
            type: Input
        }], appearance: [{
            type: Input
        }], togglePosition: [{
            type: Input
        }], toggle: [{
            type: Output
        }], outline: [{
            type: HostBinding,
            args: ['class.outline']
        }], sectionTitle: [{
            type: Input
        }], headerComp: [{
            type: ContentChild,
            args: [SectionHeaderComponent]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvc2VjdGlvbi9zZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxZQUFZLEVBQ1osTUFBTSxFQUNOLFlBQVksRUFDWixpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdoRSxNQUFNLE9BQU8sZ0JBQWdCO0FBQzdCLElBVkE7QUFDRyxRQWNRLHFCQUFnQixHQUFHLEtBQUssQ0FBQztBQUNwQyxRQUFXLHVCQUFrQixHQUFHLElBQUksQ0FBQztBQUNyQyxRQUFXLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0FBQ2hDLFFBQ1csWUFBTyxHQUFRLE9BQU8sQ0FBQztBQUNsQyxRQUFXLGVBQVUsR0FBcUIsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO0FBQ2xFLFFBQVcsbUJBQWMsR0FBbUIsY0FBYyxDQUFDLElBQUksQ0FBQztBQUNoRSxRQUNZLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ3hDLFFBR1csbUJBQWMsR0FBRyxjQUFjLENBQUM7QUFDM0MsSUFLQSxDQUFDO0FBQ0QsSUF4QkUsSUFDSSxPQUFPO0FBQ2IsUUFBSSxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssZ0JBQWdCLENBQUMsT0FBTyxDQUFDO0FBQ3hELElBQUUsQ0FBQztBQUNILElBZUUsZ0JBQWdCO0FBQUssUUFDbkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0FBQ25ELFFBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDNUMsSUFBRSxDQUFDO0FBQ0g7NENBakNDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsYUFBYTtpQkFDdkIsUUFBUSxFQUFFLFlBQVksa0JBQ3RCOzs7Ozs7OzZqQkFBdUMsa0JBQ3ZDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsa0JBQzlCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Ozs7Ozs7Ozs7b3VCQUVoRCxnd0JBQ0k7QUFBQztBQUNJLHNCQUFQLFdBQVcsU0FBQyxlQUFlO0FBQ3pCLCtCQUlGLEtBQUs7QUFBSyxpQ0FDVixLQUFLO0FBQUssMkJBQ1YsS0FBSztBQUFLLDJCQUNWLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLDZCQUNWLEtBQUs7QUFBSyxxQkFFVixNQUFNO0FBQUsseUJBRVgsWUFBWSxTQUFDLHNCQUFzQjtBQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDb250ZW50Q2hpbGQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTZWN0aW9uSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWN0aW9uLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VjdGlvbkFwcGVyYW5jZSB9IGZyb20gJy4vc2VjdGlvbi1hcHBlYXJhbmNlLmVudW0nO1xuaW1wb3J0IHsgVG9nZ2xlUG9zaXRpb24gfSBmcm9tICcuL3NlY3Rpb24tdG9nZ2xlLXBvc2l0aW9uLmVudW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtc2VjdGlvbicsXG4gIGV4cG9ydEFzOiAnbmd4U2VjdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWN0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDogeyBjbGFzczogJ25neC1zZWN0aW9uJyB9LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3R5bGVVcmxzOiBbJy4vc2VjdGlvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlY3Rpb25Db21wb25lbnQge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm91dGxpbmUnKVxuICBnZXQgb3V0bGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBlYXJhbmNlID09PSBTZWN0aW9uQXBwZXJhbmNlLk91dGxpbmU7XG4gIH1cblxuICBASW5wdXQoKSBzZWN0aW9uQ29sbGFwc2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNlY3Rpb25Db2xsYXBzaWJsZSA9IHRydWU7XG4gIEBJbnB1dCgpIGhlYWRlclRvZ2dsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWN0aW9uVGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgcGFkZGluZzogYW55ID0gJzEuOGVtJztcbiAgQElucHV0KCkgYXBwZWFyYW5jZTogU2VjdGlvbkFwcGVyYW5jZSA9IFNlY3Rpb25BcHBlcmFuY2UuTGVnYWN5O1xuICBASW5wdXQoKSB0b2dnbGVQb3NpdGlvbjogVG9nZ2xlUG9zaXRpb24gPSBUb2dnbGVQb3NpdGlvbi5MZWZ0O1xuXG4gIEBPdXRwdXQoKSB0b2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQENvbnRlbnRDaGlsZChTZWN0aW9uSGVhZGVyQ29tcG9uZW50KSBoZWFkZXJDb21wOiBTZWN0aW9uSGVhZGVyQ29tcG9uZW50O1xuXG4gIHJlYWRvbmx5IFRvZ2dsZVBvc2l0aW9uID0gVG9nZ2xlUG9zaXRpb247XG5cbiAgb25TZWN0aW9uQ2xpY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlY3Rpb25Db2xsYXBzZWQgPSAhdGhpcy5zZWN0aW9uQ29sbGFwc2VkO1xuICAgIHRoaXMudG9nZ2xlLmVtaXQodGhpcy5zZWN0aW9uQ29sbGFwc2VkKTtcbiAgfVxufVxuIl19