import { Component, Input, ChangeDetectionStrategy, ElementRef, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IconRegistryService } from '../../services/icon-registry/icon-registry.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common/http';
import * as ɵngcc2 from '../../services/icon-registry/icon-registry.service';
import * as ɵngcc3 from '@angular/common';

function IconComponent_ng_content_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngSwitchCase", ""]);
} }
function IconComponent_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 1, ["*ngSwitchCase", "0"]);
} }
function IconComponent_i_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 4);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r2.cssClasses[0]);
} }
function IconComponent_span_4_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "i", 4);
} if (rf & 2) {
    const cssClass_r5 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngClass", cssClass_r5);
} }
function IconComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 5);
    ɵngcc0.ɵɵtemplate(1, IconComponent_span_4_i_1_Template, 1, 1, "i", 6);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r3.cssClasses);
} }
const _c0 = ["*", "*"];
export class IconComponent {
    constructor(http, elementRef, iconRegisteryService) {
        this.http = http;
        this.elementRef = elementRef;
        this.iconRegisteryService = iconRegisteryService;
        this.defaultPath = 'assets/svgs';
        this.fontSet = 'ngx';
    }
    set svgSrc(val) {
        this.loadSvg(val);
    }
    ngOnChanges() {
        this.update();
    }
    ngOnInit() {
        this.update();
    }
    update() {
        if (this.fontIcon) {
            this.cssClasses = this.iconRegisteryService.get(this.fontIcon, this.fontSet);
        }
    }
    loadSvg(val) {
        const opts = { responseType: 'text' };
        this.http.get(`${this.defaultPath}/${val}.svg`, opts).subscribe(
        /* istanbul ignore next */
        (response) => {
            // get our element and clean it out
            const element = this.elementRef.nativeElement;
            element.innerHTML = '';
            // get response and build svg element
            const parser = new DOMParser();
            const svg = parser.parseFromString(response, 'image/svg+xml');
            // insert the svg result
            // eslint-disable-next-line
            element.innerHTML = svg.documentElement.outerHTML;
        }, 
        /* istanbul ignore next */
        err => {
            // eslint-disable-next-line no-console
            console.error(err);
        });
    }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.HttpClient), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.IconRegistryService)); };
IconComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: IconComponent, selectors: [["ngx-icon"]], inputs: { defaultPath: "defaultPath", fontSet: "fontSet", svgSrc: "svgSrc", fontIcon: "fontIcon", alt: "alt" }, exportAs: ["ngxIcon"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 5, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [3, "ngClass", 4, "ngSwitchCase"], ["class", "icon-fx-stacked", 4, "ngSwitchDefault"], [3, "ngClass"], [1, "icon-fx-stacked"], [3, "ngClass", 4, "ngFor", "ngForOf"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵelementContainerStart(0, 0);
        ɵngcc0.ɵɵtemplate(1, IconComponent_ng_content_1_Template, 1, 0, "ng-content", 1);
        ɵngcc0.ɵɵtemplate(2, IconComponent_ng_content_2_Template, 1, 0, "ng-content", 1);
        ɵngcc0.ɵɵtemplate(3, IconComponent_i_3_Template, 1, 1, "i", 2);
        ɵngcc0.ɵɵtemplate(4, IconComponent_span_4_Template, 2, 1, "span", 3);
        ɵngcc0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngSwitch", ctx.cssClasses == null ? null : ctx.cssClasses.length);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngSwitchCase", 0);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", 1);
    } }, directives: [ɵngcc3.NgSwitch, ɵngcc3.NgSwitchCase, ɵngcc3.NgSwitchDefault, ɵngcc3.NgClass, ɵngcc3.NgForOf], styles: ["ngx-icon svg{fill:currentColor}.icon-fx-stacked{position:relative;display:inline-block;width:1em;height:1em;line-height:1em;vertical-align:baseline}.icon-fx-stacked .ngx-icon{position:absolute;width:100%;text-align:center}"], encapsulation: 2, changeDetection: 0 });
IconComponent.ctorParameters = () => [
    { type: HttpClient },
    { type: ElementRef },
    { type: IconRegistryService }
];
IconComponent.propDecorators = {
    fontIcon: [{ type: Input }],
    alt: [{ type: Input }],
    defaultPath: [{ type: Input }],
    fontSet: [{ type: Input }],
    svgSrc: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(IconComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxIcon',
                selector: 'ngx-icon',
                template: "<ng-container [ngSwitch]=\"cssClasses?.length\">\n  <ng-content *ngSwitchCase=\"\"></ng-content>\n  <ng-content *ngSwitchCase=\"0\"></ng-content>\n  <i *ngSwitchCase=\"1\" [ngClass]=\"cssClasses[0]\"></i>\n  <span *ngSwitchDefault class=\"icon-fx-stacked\">\n    <i *ngFor=\"let cssClass of cssClasses\" [ngClass]=\"cssClass\"></i>\n  </span>\n</ng-container>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["ngx-icon svg{fill:currentColor}.icon-fx-stacked{position:relative;display:inline-block;width:1em;height:1em;line-height:1em;vertical-align:baseline}.icon-fx-stacked .ngx-icon{position:absolute;width:100%;text-align:center}"]
            }]
    }], function () { return [{ type: ɵngcc1.HttpClient }, { type: ɵngcc0.ElementRef }, { type: ɵngcc2.IconRegistryService }]; }, { defaultPath: [{
            type: Input
        }], fontSet: [{
            type: Input
        }], svgSrc: [{
            type: Input
        }], fontIcon: [{
            type: Input
        }], alt: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCx1QkFBdUIsRUFDdkIsVUFBVSxFQUdWLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVekYsTUFBTSxPQUFPLGFBQWE7QUFBRyxJQWEzQixZQUNVLElBQWdCLEVBQ2hCLFVBQXNCLEVBQ3RCLG9CQUF5QztBQUNsRCxRQUhTLFNBQUksR0FBSixJQUFJLENBQVk7QUFBQyxRQUNqQixlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFDdkIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtBQUNyRCxRQWRXLGdCQUFXLEdBQUcsYUFBYSxDQUFDO0FBQ3ZDLFFBQVcsWUFBTyxHQUFHLEtBQUssQ0FBQztBQUMzQixJQVlLLENBQUM7QUFDTixJQVpFLElBQ0ksTUFBTSxDQUFDLEdBQVc7QUFDeEIsUUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLElBQUUsQ0FBQztBQUNILElBU0UsV0FBVztBQUNiLFFBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2xCLElBQUUsQ0FBQztBQUNILElBQ0UsUUFBUTtBQUNWLFFBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2xCLElBQUUsQ0FBQztBQUNILElBQ0UsTUFBTTtBQUNSLFFBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ3ZCLFlBQU0sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25GLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLE9BQU8sQ0FBQyxHQUFXO0FBQUksUUFDckIsTUFBTSxJQUFJLEdBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLENBQUM7QUFDL0MsUUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksR0FBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsU0FBUztBQUMzRSxRQUFNLDBCQUEwQjtBQUNoQyxRQUFNLENBQUMsUUFBYSxFQUFFLEVBQUU7QUFDeEIsWUFBUSxtQ0FBbUM7QUFDM0MsWUFBUSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztBQUN0RCxZQUFRLE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQy9CLFlBQ1EscUNBQXFDO0FBQzdDLFlBQVEsTUFBTSxNQUFNLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUN2QyxZQUFRLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3RFLFlBQ1Esd0JBQXdCO0FBQ2hDLFlBQVEsMkJBQTJCO0FBQ25DLFlBQVEsT0FBTyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztBQUMxRCxRQUFNLENBQUM7QUFDTixRQUFLLDBCQUEwQjtBQUNoQyxRQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ1osWUFBUSxzQ0FBc0M7QUFDOUMsWUFBUSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLFFBQU0sQ0FBQyxDQUNGLENBQUM7QUFDTixJQUFFLENBQUM7QUFDSDt5Q0FqRUMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxTQUFTLGtCQUNuQixRQUFRLEVBQUUsVUFBVSxrQkFDcEI7Z1NBQW9DLGtCQUVwQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07OzBCQUNoRDs7Ozs7Ozs7Ozs7O3lZQUNJO0FBQUM7QUFBdUMsWUFacEMsVUFBVTtBQUFJLFlBTHJCLFVBQVU7QUFDVixZQU1PLG1CQUFtQjtBQUFHO0FBQUc7QUFBaUMsdUJBV2hFLEtBQUs7QUFBSyxrQkFDVixLQUFLO0FBQUssMEJBQ1YsS0FBSztBQUFLLHNCQUNWLEtBQUs7QUFBSyxxQkFFVixLQUFLO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEVsZW1lbnRSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IEljb25SZWdpc3RyeVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pY29uLXJlZ2lzdHJ5L2ljb24tcmVnaXN0cnkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ25neEljb24nLFxuICBzZWxlY3RvcjogJ25neC1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pY29uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZvbnRJY29uOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgQElucHV0KCkgYWx0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRlZmF1bHRQYXRoID0gJ2Fzc2V0cy9zdmdzJztcbiAgQElucHV0KCkgZm9udFNldCA9ICduZ3gnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBzdmdTcmModmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvYWRTdmcodmFsKTtcbiAgfVxuXG4gIGNzc0NsYXNzZXM6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBpY29uUmVnaXN0ZXJ5U2VydmljZTogSWNvblJlZ2lzdHJ5U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuZm9udEljb24pIHtcbiAgICAgIHRoaXMuY3NzQ2xhc3NlcyA9IHRoaXMuaWNvblJlZ2lzdGVyeVNlcnZpY2UuZ2V0KHRoaXMuZm9udEljb24sIHRoaXMuZm9udFNldCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZFN2Zyh2YWw6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IG9wdHM6IGFueSA9IHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfTtcbiAgICB0aGlzLmh0dHAuZ2V0PHN0cmluZz4oYCR7dGhpcy5kZWZhdWx0UGF0aH0vJHt2YWx9LnN2Z2AsIG9wdHMpLnN1YnNjcmliZShcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAvLyBnZXQgb3VyIGVsZW1lbnQgYW5kIGNsZWFuIGl0IG91dFxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgLy8gZ2V0IHJlc3BvbnNlIGFuZCBidWlsZCBzdmcgZWxlbWVudFxuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIGNvbnN0IHN2ZyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcocmVzcG9uc2UsICdpbWFnZS9zdmcreG1sJyk7XG5cbiAgICAgICAgLy8gaW5zZXJ0IHRoZSBzdmcgcmVzdWx0XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHN2Zy5kb2N1bWVudEVsZW1lbnQub3V0ZXJIVE1MO1xuICAgICAgfSxcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICBlcnIgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIl19