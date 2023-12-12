import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, HostListener, Input, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { AlignmentTypes } from '../../utils/position/alignment-types.enum';
import { PlacementTypes } from '../../utils/position/placement-type.enum';
import { positionContent } from '../../utils/position/position-content/position-content.util';
import { positionCaret } from '../../utils/position/position-caret/position-caret.util';
import { determinePlacement } from '../../utils/position/determine-placement/determine-placement.util';
import { throttleable } from '../../decorators/throttleable/throttleable.decorator';
import { StyleTypes } from './style-types.enum';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["caretElm"];
function TooltipContentComponent_span_4_ng_template_1_Template(rf, ctx) { }
const _c1 = function (a0) { return { model: a0 }; };
function TooltipContentComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtemplate(1, TooltipContentComponent_span_4_ng_template_1_Template, 0, 0, "ng-template", 5);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r1.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c1, ctx_r1.context));
} }
function TooltipContentComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 6);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r2.title, ɵngcc0.ɵɵsanitizeHtml);
} }
export class TooltipContentComponent {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    get showCaret() {
        return this._showCaret;
    }
    set showCaret(val) {
        this._showCaret = coerceBooleanProperty(val);
    }
    get spacing() {
        return this._spacing;
    }
    set spacing(val) {
        this._spacing = coerceNumberProperty(val);
    }
    get cssClasses() {
        let clz = 'ngx-tooltip-content';
        clz += ` position-${this.placement}`;
        clz += ` type-${this.type}`;
        clz += ` ${this.cssClass}`;
        return clz;
    }
    ngAfterViewInit() {
        setTimeout(this.position.bind(this));
    }
    onWindowResize() {
        this.position();
    }
    position() {
        const nativeElm = this.element.nativeElement;
        const hostDim = this.host.nativeElement.getBoundingClientRect();
        // if no dims were found, never show
        if (!hostDim.height && !hostDim.width)
            return;
        const elmDim = nativeElm.getBoundingClientRect();
        this.checkFlip(hostDim, elmDim);
        this.positionContent(nativeElm, hostDim, elmDim);
        if (this.showCaret) {
            this.positionCaret(hostDim, elmDim);
        }
        // animate its entry
        setTimeout(() => this.renderer.addClass(nativeElm, 'animate'), 1);
    }
    positionContent(nativeElm, hostDim, elmDim) {
        const { top, left } = positionContent(this.placement, elmDim, hostDim, this.spacing, this.alignment);
        this.renderer.setStyle(nativeElm, 'top', `${top}px`);
        this.renderer.setStyle(nativeElm, 'left', `${left}px`);
    }
    positionCaret(hostDim, elmDim) {
        const caretElm = this.caretElm.nativeElement;
        const caretDimensions = caretElm.getBoundingClientRect();
        const { top, left } = positionCaret(this.placement, elmDim, hostDim, caretDimensions, this.alignment);
        this.renderer.setStyle(caretElm, 'top', `${top}px`);
        this.renderer.setStyle(caretElm, 'left', `${left}px`);
    }
    checkFlip(hostDim, elmDim) {
        this.placement = determinePlacement(this.placement, elmDim, hostDim, this.spacing, this.alignment);
    }
}
TooltipContentComponent.ɵfac = function TooltipContentComponent_Factory(t) { return new (t || TooltipContentComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
TooltipContentComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: TooltipContentComponent, selectors: [["ngx-tooltip-content"]], viewQuery: function TooltipContentComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.caretElm = _t.first);
    } }, hostVars: 2, hostBindings: function TooltipContentComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("resize", function TooltipContentComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, ɵngcc0.ɵɵresolveWindow);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.cssClasses);
    } }, inputs: { showCaret: "showCaret", spacing: "spacing", placement: "placement", host: "host", type: "type", alignment: "alignment", cssClass: "cssClass", title: "title", template: "template", context: "context" }, exportAs: ["ngxTooltipContent"], decls: 6, vars: 4, consts: [[1, "tooltip-caret", 3, "ngClass", "hidden"], ["caretElm", ""], [1, "tooltip-content"], [4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"]], template: function TooltipContentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelement(1, "span", 0, 1);
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵtemplate(4, TooltipContentComponent_span_4_Template, 2, 4, "span", 3);
        ɵngcc0.ɵɵtemplate(5, TooltipContentComponent_span_5_Template, 1, 1, "span", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", "position-" + ctx.placement)("hidden", !ctx.showCaret);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.title);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.title);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], styles: [".ngx-tooltip-content{position:fixed;z-index:5000;display:block;font-weight:400;opacity:0}.ngx-tooltip-content.type-popover{background:#afb7c8;color:#313847;border:1px solid transparet;box-shadow:0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12);font-size:13px;padding:10px}.ngx-tooltip-content.type-popover .tooltip-caret{position:absolute;z-index:5001;width:0;height:0}.ngx-tooltip-content.type-popover .tooltip-caret.position-left{border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #afb7c8}.ngx-tooltip-content.type-popover .tooltip-caret.position-top{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #afb7c8}.ngx-tooltip-content.type-popover .tooltip-caret.position-right{border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:7px solid #afb7c8}.ngx-tooltip-content.type-popover .tooltip-caret.position-bottom{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #afb7c8}.ngx-tooltip-content.type-tooltip{color:#313847;background:#afb7c8;font-size:12px;padding:4px;text-align:center}.ngx-tooltip-content.type-tooltip .tooltip-caret.position-left{border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #afb7c8}.ngx-tooltip-content.type-tooltip .tooltip-caret.position-top{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #afb7c8}.ngx-tooltip-content.type-tooltip .tooltip-caret.position-right{border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:7px solid #afb7c8}.ngx-tooltip-content.type-tooltip .tooltip-caret.position-bottom{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #afb7c8}.ngx-tooltip-content .tooltip-caret{position:absolute;z-index:5001;width:0;height:0}.ngx-tooltip-content.position-right{transform:translate3d(10px,0,0)}.ngx-tooltip-content.position-left{transform:translate3d(-10px,0,0)}.ngx-tooltip-content.position-top{transform:translate3d(0,-10px,0)}.ngx-tooltip-content.position-bottom{transform:translate3d(0,10px,0)}.ngx-tooltip-content.animate{opacity:1;transition:opacity .3s,transform .3s;transform:translateZ(0)}.ngx-tooltip-content.narrow{max-width:300px}"], encapsulation: 2, changeDetection: 0 });
TooltipContentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TooltipContentComponent.propDecorators = {
    caretElm: [{ type: ViewChild, args: ['caretElm', { static: true },] }],
    host: [{ type: Input }],
    type: [{ type: Input }],
    placement: [{ type: Input }],
    alignment: [{ type: Input }],
    cssClass: [{ type: Input }],
    title: [{ type: Input }],
    template: [{ type: Input }],
    context: [{ type: Input }],
    showCaret: [{ type: Input }],
    spacing: [{ type: Input }],
    cssClasses: [{ type: HostBinding, args: ['class',] }],
    onWindowResize: [{ type: HostListener, args: ['window:resize',] }]
};
__decorate([
    throttleable(100),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TooltipContentComponent.prototype, "onWindowResize", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TooltipContentComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxTooltipContent',
                selector: 'ngx-tooltip-content',
                template: "<div>\n  <span\n    #caretElm\n    class=\"tooltip-caret\"\n    [ngClass]=\"'position-' + placement\"\n    [hidden]=\"!showCaret\"\n  ></span>\n  <div class=\"tooltip-content\">\n    <span *ngIf=\"!title\">\n      <ng-template [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"{ model: context }\"> </ng-template>\n    </span>\n    <span *ngIf=\"title\" [innerHTML]=\"title\"> </span>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-tooltip-content{position:fixed;z-index:5000;display:block;font-weight:400;opacity:0}.ngx-tooltip-content.type-popover{background:#afb7c8;color:#313847;border:1px solid transparet;box-shadow:0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12);font-size:13px;padding:10px}.ngx-tooltip-content.type-popover .tooltip-caret{position:absolute;z-index:5001;width:0;height:0}.ngx-tooltip-content.type-popover .tooltip-caret.position-left{border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #afb7c8}.ngx-tooltip-content.type-popover .tooltip-caret.position-top{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #afb7c8}.ngx-tooltip-content.type-popover .tooltip-caret.position-right{border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:7px solid #afb7c8}.ngx-tooltip-content.type-popover .tooltip-caret.position-bottom{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #afb7c8}.ngx-tooltip-content.type-tooltip{color:#313847;background:#afb7c8;font-size:12px;padding:4px;text-align:center}.ngx-tooltip-content.type-tooltip .tooltip-caret.position-left{border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #afb7c8}.ngx-tooltip-content.type-tooltip .tooltip-caret.position-top{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #afb7c8}.ngx-tooltip-content.type-tooltip .tooltip-caret.position-right{border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:7px solid #afb7c8}.ngx-tooltip-content.type-tooltip .tooltip-caret.position-bottom{border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:7px solid #afb7c8}.ngx-tooltip-content .tooltip-caret{position:absolute;z-index:5001;width:0;height:0}.ngx-tooltip-content.position-right{transform:translate3d(10px,0,0)}.ngx-tooltip-content.position-left{transform:translate3d(-10px,0,0)}.ngx-tooltip-content.position-top{transform:translate3d(0,-10px,0)}.ngx-tooltip-content.position-bottom{transform:translate3d(0,10px,0)}.ngx-tooltip-content.animate{opacity:1;transition:opacity .3s,transform .3s;transform:translateZ(0)}.ngx-tooltip-content.narrow{max-width:300px}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, { showCaret: [{
            type: Input
        }], spacing: [{
            type: Input
        }], cssClasses: [{
            type: HostBinding,
            args: ['class']
        }], onWindowResize: [{
            type: HostListener,
            args: ['window:resize']
        }], placement: [{
            type: Input
        }], caretElm: [{
            type: ViewChild,
            args: ['caretElm', { static: true }]
        }], host: [{
            type: Input
        }], type: [{
            type: Input
        }], alignment: [{
            type: Input
        }], cssClass: [{
            type: Input
        }], title: [{
            type: Input
        }], template: [{
            type: Input
        }], context: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVwRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUM5RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDeEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDdkcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXBGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVoRCxNQUFNLE9BQU8sdUJBQXVCO0FBQUcsSUF5Q3JDLFlBQXFCLE9BQWdDLEVBQW1CLFFBQW1CO0FBQUksUUFBMUUsWUFBTyxHQUFQLE9BQU8sQ0FBeUI7QUFBQyxRQUFrQixhQUFRLEdBQVIsUUFBUSxDQUFXO0FBQUMsSUFBRSxDQUFDO0FBQ2pHLElBN0JFLElBQUksU0FBUztBQUFLLFFBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUMzQixJQUFFLENB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VixLQUFLO0FBQUssd0JBQ1YsS0FBSztBQUFLLHdCQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUssb0JBQ1YsS0FBSztBQUFLLHVCQUNWLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUssd0JBS1YsS0FBSztBQUNOLHNCQU9DLEtBQUs7QUFDTix5QkFPQyxXQUFXLFNBQUMsT0FBTztBQUNqQiw2QkFjRixZQUFZLFNBQUMsZUFBZTtBQUMzQjtBQUNGO0FBQWEsSUFEWixZQUFZLENBQUMsR0FBRyxDQUFDO0FBQ25CO0FBQ2M7QUFJTjtBQUNOLDZEQUpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNIO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSwgY29lcmNlTnVtYmVyUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQgeyBBbGlnbm1lbnRUeXBlcyB9IGZyb20gJy4uLy4uL3V0aWxzL3Bvc2l0aW9uL2FsaWdubWVudC10eXBlcy5lbnVtJztcbmltcG9ydCB7IFBsYWNlbWVudFR5cGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcG9zaXRpb24vcGxhY2VtZW50LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvcG9zaXRpb24vZGltZW5zaW9ucy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgcG9zaXRpb25Db250ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcG9zaXRpb24vcG9zaXRpb24tY29udGVudC9wb3NpdGlvbi1jb250ZW50LnV0aWwnO1xuaW1wb3J0IHsgcG9zaXRpb25DYXJldCB9IGZyb20gJy4uLy4uL3V0aWxzL3Bvc2l0aW9uL3Bvc2l0aW9uLWNhcmV0L3Bvc2l0aW9uLWNhcmV0LnV0aWwnO1xuaW1wb3J0IHsgZGV0ZXJtaW5lUGxhY2VtZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcG9zaXRpb24vZGV0ZXJtaW5lLXBsYWNlbWVudC9kZXRlcm1pbmUtcGxhY2VtZW50LnV0aWwnO1xuaW1wb3J0IHsgdGhyb3R0bGVhYmxlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9ycy90aHJvdHRsZWFibGUvdGhyb3R0bGVhYmxlLmRlY29yYXRvcic7XG5cbmltcG9ydCB7IFN0eWxlVHlwZXMgfSBmcm9tICcuL3N0eWxlLXR5cGVzLmVudW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICduZ3hUb29sdGlwQ29udGVudCcsXG4gIHNlbGVjdG9yOiAnbmd4LXRvb2x0aXAtY29udGVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sdGlwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9vbHRpcC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdjYXJldEVsbScsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHJlYWRvbmx5IGNhcmV0RWxtOiBFbGVtZW50UmVmPEhUTUxTcGFuRWxlbWVudD47XG5cbiAgQElucHV0KCkgaG9zdDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gIEBJbnB1dCgpIHR5cGU6IFN0eWxlVHlwZXM7XG4gIEBJbnB1dCgpIHBsYWNlbWVudDogUGxhY2VtZW50VHlwZXM7XG4gIEBJbnB1dCgpIGFsaWdubWVudDogQWxpZ25tZW50VHlwZXM7XG4gIEBJbnB1dCgpIGNzc0NsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBjb250ZXh0OiBhbnk7XG5cbiAgZ2V0IHNob3dDYXJldCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0NhcmV0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzaG93Q2FyZXQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0NhcmV0ID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbCk7XG4gIH1cblxuICBnZXQgc3BhY2luZygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zcGFjaW5nO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzcGFjaW5nKHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fc3BhY2luZyA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbCk7XG4gIH1cblxuICBwcml2YXRlIF9zcGFjaW5nOiBudW1iZXI7XG4gIHByaXZhdGUgX3Nob3dDYXJldDogYm9vbGVhbjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGNzc0NsYXNzZXMoKTogc3RyaW5nIHtcbiAgICBsZXQgY2x6ID0gJ25neC10b29sdGlwLWNvbnRlbnQnO1xuICAgIGNseiArPSBgIHBvc2l0aW9uLSR7dGhpcy5wbGFjZW1lbnR9YDtcbiAgICBjbHogKz0gYCB0eXBlLSR7dGhpcy50eXBlfWA7XG4gICAgY2x6ICs9IGAgJHt0aGlzLmNzc0NsYXNzfWA7XG4gICAgcmV0dXJuIGNsejtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQodGhpcy5wb3NpdGlvbi5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuICBAdGhyb3R0bGVhYmxlKDEwMClcbiAgb25XaW5kb3dSZXNpemUoKTogdm9pZCB7XG4gICAgdGhpcy5wb3NpdGlvbigpO1xuICB9XG5cbiAgcG9zaXRpb24oKTogdm9pZCB7XG4gICAgY29uc3QgbmF0aXZlRWxtID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgaG9zdERpbSA9IHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgLy8gaWYgbm8gZGltcyB3ZXJlIGZvdW5kLCBuZXZlciBzaG93XG4gICAgaWYgKCFob3N0RGltLmhlaWdodCAmJiAhaG9zdERpbS53aWR0aCkgcmV0dXJuO1xuXG4gICAgY29uc3QgZWxtRGltID0gbmF0aXZlRWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMuY2hlY2tGbGlwKGhvc3REaW0sIGVsbURpbSk7XG4gICAgdGhpcy5wb3NpdGlvbkNvbnRlbnQobmF0aXZlRWxtLCBob3N0RGltLCBlbG1EaW0pO1xuXG4gICAgaWYgKHRoaXMuc2hvd0NhcmV0KSB7XG4gICAgICB0aGlzLnBvc2l0aW9uQ2FyZXQoaG9zdERpbSwgZWxtRGltKTtcbiAgICB9XG5cbiAgICAvLyBhbmltYXRlIGl0cyBlbnRyeVxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhuYXRpdmVFbG0sICdhbmltYXRlJyksIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBwb3NpdGlvbkNvbnRlbnQobmF0aXZlRWxtOiBIVE1MRWxlbWVudCwgaG9zdERpbTogRGltZW5zaW9ucywgZWxtRGltOiBEaW1lbnNpb25zKTogdm9pZCB7XG4gICAgY29uc3QgeyB0b3AsIGxlZnQgfSA9IHBvc2l0aW9uQ29udGVudCh0aGlzLnBsYWNlbWVudCwgZWxtRGltLCBob3N0RGltLCB0aGlzLnNwYWNpbmcsIHRoaXMuYWxpZ25tZW50KTtcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUobmF0aXZlRWxtLCAndG9wJywgYCR7dG9wfXB4YCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShuYXRpdmVFbG0sICdsZWZ0JywgYCR7bGVmdH1weGApO1xuICB9XG5cbiAgcHJpdmF0ZSBwb3NpdGlvbkNhcmV0KGhvc3REaW06IERpbWVuc2lvbnMsIGVsbURpbTogRGltZW5zaW9ucyk6IHZvaWQge1xuICAgIGNvbnN0IGNhcmV0RWxtID0gdGhpcy5jYXJldEVsbS5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGNhcmV0RGltZW5zaW9ucyA9IGNhcmV0RWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHsgdG9wLCBsZWZ0IH0gPSBwb3NpdGlvbkNhcmV0KHRoaXMucGxhY2VtZW50LCBlbG1EaW0sIGhvc3REaW0sIGNhcmV0RGltZW5zaW9ucywgdGhpcy5hbGlnbm1lbnQpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjYXJldEVsbSwgJ3RvcCcsIGAke3RvcH1weGApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY2FyZXRFbG0sICdsZWZ0JywgYCR7bGVmdH1weGApO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0ZsaXAoaG9zdERpbTogRGltZW5zaW9ucywgZWxtRGltOiBEaW1lbnNpb25zKTogdm9pZCB7XG4gICAgdGhpcy5wbGFjZW1lbnQgPSBkZXRlcm1pbmVQbGFjZW1lbnQodGhpcy5wbGFjZW1lbnQsIGVsbURpbSwgaG9zdERpbSwgdGhpcy5zcGFjaW5nLCB0aGlzLmFsaWdubWVudCk7XG4gIH1cbn1cbiJdfQ==