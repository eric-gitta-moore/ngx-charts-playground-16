import { Directive, ElementRef, EventEmitter, HostListener, Input, NgZone, Output, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { PlacementTypes } from '../../utils/position/placement-type.enum';
import { AlignmentTypes } from '../../utils/position/alignment-types.enum';
import { ShowTypes } from './show-types.enum';
import { StyleTypes } from './style-types.enum';
import { TooltipService } from './tooltip.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './tooltip.service';
export class TooltipDirective {
    constructor(ngZone, tooltipService, viewContainerRef, renderer, element) {
        this.ngZone = ngZone;
        this.tooltipService = tooltipService;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this.element = element;
        this.tooltipCssClass = '';
        this.tooltipTitle = '';
        this.tooltipPlacement = PlacementTypes.top;
        this.tooltipAlignment = AlignmentTypes.center;
        this.tooltipType = StyleTypes.popover;
        this.tooltipShowEvent = ShowTypes.all;
        // eslint-disable-next-line @angular-eslint/no-output-native
        this.show = new EventEmitter();
        this.hide = new EventEmitter();
        this._tooltipSpacing = 10;
        this._tooltipDisabled = false;
        this._tooltipShowCaret = true;
        this._tooltipCloseOnClickOutside = true;
        this._tooltipCloseOnMouseLeave = true;
        this._tooltipHideTimeout = 300;
        this._tooltipShowTimeout = 100;
    }
    get tooltipSpacing() {
        return this._tooltipSpacing;
    }
    set tooltipSpacing(val) {
        this._tooltipSpacing = coerceNumberProperty(val);
    }
    get tooltipDisabled() {
        return this._tooltipDisabled;
    }
    set tooltipDisabled(val) {
        this._tooltipDisabled = coerceBooleanProperty(val);
    }
    get tooltipShowCaret() {
        return this._tooltipShowCaret;
    }
    set tooltipShowCaret(val) {
        this._tooltipShowCaret = coerceBooleanProperty(val);
    }
    get tooltipCloseOnClickOutside() {
        return this._tooltipCloseOnClickOutside;
    }
    set tooltipCloseOnClickOutside(val) {
        this._tooltipCloseOnClickOutside = coerceBooleanProperty(val);
    }
    get tooltipCloseOnMouseLeave() {
        return this._tooltipCloseOnMouseLeave;
    }
    set tooltipCloseOnMouseLeave(val) {
        this._tooltipCloseOnMouseLeave = coerceBooleanProperty(val);
    }
    get tooltipHideTimeout() {
        return this._tooltipHideTimeout;
    }
    set tooltipHideTimeout(val) {
        this._tooltipHideTimeout = coerceNumberProperty(val, 300);
    }
    get tooltipShowTimeout() {
        return this._tooltipShowTimeout;
    }
    set tooltipShowTimeout(val) {
        this._tooltipShowTimeout = coerceNumberProperty(val, 100);
    }
    get listensForFocus() {
        return this.tooltipShowEvent === ShowTypes.all || this.tooltipShowEvent === ShowTypes.focus;
    }
    get listensForHover() {
        return this.tooltipShowEvent === ShowTypes.all || this.tooltipShowEvent === ShowTypes.mouseover;
    }
    ngOnDestroy() {
        this.hideTooltip(true);
    }
    onFocus() {
        if (this.listensForFocus) {
            this.showTooltip();
        }
    }
    onBlur() {
        if (this.listensForFocus) {
            this.hideTooltip(true);
        }
    }
    onMouseEnter() {
        if (this.listensForHover) {
            this.showTooltip();
        }
    }
    onMouseLeave(event) {
        if (this.listensForHover && this.tooltipCloseOnMouseLeave) {
            clearTimeout(this.timeout);
            /* istanbul ignore if */
            if (this.component) {
                const contentDom = this.component.instance.element.nativeElement;
                const contains = contentDom.contains(event.toElement);
                if (contains)
                    return;
            }
            this.hideTooltip();
        }
    }
    onMouseClick() {
        if (this.tooltipShowEvent === ShowTypes.mouseover) {
            this.hideTooltip(true);
        }
    }
    showTooltip(immediate) {
        if (this.component || this.tooltipDisabled)
            return;
        const time = immediate ? 0 : this.tooltipShowTimeout;
        // ngUpgrade bug
        // https://github.com/angular/angular/issues/12318
        this.ngZone.run(() => {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.tooltipService.destroyAll();
                const options = this.createBoundOptions();
                this.component = this.tooltipService.create(options);
                // add a tiny timeout to avoid event re-triggers
                setTimeout(() => {
                    if (this.component && this.component.instance && this.component.instance.element) {
                        this.addHideListeners(this.component.instance.element.nativeElement);
                    }
                }, 10);
                this.show.emit(true);
            }, time);
        });
    }
    hideTooltip(immediate) {
        if (!this.component)
            return;
        const destroyFn = () => {
            // remove events
            if (this.mouseLeaveContentEvent)
                this.mouseLeaveContentEvent();
            if (this.mouseEnterContentEvent)
                this.mouseEnterContentEvent();
            if (this.documentClickEvent)
                this.documentClickEvent();
            // emit events
            this.hide.emit(true);
            // destroy component
            this.tooltipService.destroy(this.component);
            this.component = undefined;
        };
        clearTimeout(this.timeout);
        if (!immediate) {
            this.timeout = setTimeout(destroyFn, this.tooltipHideTimeout);
        }
        else {
            destroyFn();
        }
    }
    addHideListeners(tooltip) {
        // on mouse enter, cancel the hide triggered by the leave
        this.mouseEnterContentEvent = this.renderer.listen(tooltip, 'mouseenter', 
        /* istanbul ignore next */ () => {
            clearTimeout(this.timeout);
        });
        // content mouse leave listener
        if (this.tooltipCloseOnMouseLeave) {
            this.mouseLeaveContentEvent = this.renderer.listen(tooltip, 'mouseleave', 
            /* istanbul ignore next */ (event) => {
                const contentDom = this.element.nativeElement;
                const contains = contentDom.contains(event.toElement);
                if (contains)
                    return;
                this.hideTooltip();
            });
        }
        // content close on click outside
        if (this.tooltipCloseOnClickOutside) {
            this.documentClickEvent = this.renderer.listen(document, 'click', 
            /* istanbul ignore next */ event => {
                const tooltipContains = tooltip.contains(event.target);
                const parentContains = this.element.nativeElement.contains(event.target);
                if (!tooltipContains && !parentContains) {
                    this.hideTooltip();
                }
            });
        }
    }
    createBoundOptions() {
        return {
            title: this.tooltipTitle,
            template: this.tooltipTemplate,
            host: this.viewContainerRef.element,
            placement: this.tooltipPlacement,
            alignment: this.tooltipAlignment,
            type: this.tooltipType,
            showCaret: this.tooltipShowCaret,
            cssClass: this.tooltipCssClass,
            spacing: this.tooltipSpacing,
            context: this.tooltipContext
        };
    }
}
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.TooltipService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
TooltipDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: TooltipDirective, selectors: [["", "ngx-tooltip", ""]], hostBindings: function TooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("focusin", function TooltipDirective_focusin_HostBindingHandler() { return ctx.onFocus(); })("blur", function TooltipDirective_blur_HostBindingHandler() { return ctx.onBlur(); })("mouseenter", function TooltipDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function TooltipDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave($event); })("click", function TooltipDirective_click_HostBindingHandler() { return ctx.onMouseClick(); });
    } }, inputs: { tooltipCssClass: "tooltipCssClass", tooltipTitle: "tooltipTitle", tooltipPlacement: "tooltipPlacement", tooltipAlignment: "tooltipAlignment", tooltipType: "tooltipType", tooltipShowEvent: "tooltipShowEvent", tooltipSpacing: "tooltipSpacing", tooltipDisabled: "tooltipDisabled", tooltipShowCaret: "tooltipShowCaret", tooltipCloseOnClickOutside: "tooltipCloseOnClickOutside", tooltipCloseOnMouseLeave: "tooltipCloseOnMouseLeave", tooltipHideTimeout: "tooltipHideTimeout", tooltipShowTimeout: "tooltipShowTimeout", tooltipTemplate: "tooltipTemplate", tooltipContext: "tooltipContext" }, outputs: { show: "show", hide: "hide" }, exportAs: ["ngxTooltip"] });
TooltipDirective.ctorParameters = () => [
    { type: NgZone },
    { type: TooltipService },
    { type: ViewContainerRef },
    { type: Renderer2 },
    { type: ElementRef }
];
TooltipDirective.propDecorators = {
    tooltipCssClass: [{ type: Input }],
    tooltipTitle: [{ type: Input }],
    tooltipPlacement: [{ type: Input }],
    tooltipAlignment: [{ type: Input }],
    tooltipType: [{ type: Input }],
    tooltipTemplate: [{ type: Input }],
    tooltipShowEvent: [{ type: Input }],
    tooltipContext: [{ type: Input }],
    tooltipSpacing: [{ type: Input }],
    tooltipDisabled: [{ type: Input }],
    tooltipShowCaret: [{ type: Input }],
    tooltipCloseOnClickOutside: [{ type: Input }],
    tooltipCloseOnMouseLeave: [{ type: Input }],
    tooltipHideTimeout: [{ type: Input }],
    tooltipShowTimeout: [{ type: Input }],
    show: [{ type: Output }],
    hide: [{ type: Output }],
    onFocus: [{ type: HostListener, args: ['focusin',] }],
    onBlur: [{ type: HostListener, args: ['blur',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }],
    onMouseClick: [{ type: HostListener, args: ['click',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[ngx-tooltip]',
                exportAs: 'ngxTooltip'
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }, { type: ɵngcc1.TooltipService }, { type: ɵngcc0.ViewContainerRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }]; }, { tooltipCssClass: [{
            type: Input
        }], tooltipTitle: [{
            type: Input
        }], tooltipPlacement: [{
            type: Input
        }], tooltipAlignment: [{
            type: Input
        }], tooltipType: [{
            type: Input
        }], tooltipShowEvent: [{
            type: Input
        }], show: [{
            type: Output
        }], hide: [{
            type: Output
        }], tooltipSpacing: [{
            type: Input
        }], tooltipDisabled: [{
            type: Input
        }], tooltipShowCaret: [{
            type: Input
        }], tooltipCloseOnClickOutside: [{
            type: Input
        }], tooltipCloseOnMouseLeave: [{
            type: Input
        }], tooltipHideTimeout: [{
            type: Input
        }], tooltipShowTimeout: [{
            type: Input
        }], onFocus: [{
            type: HostListener,
            args: ['focusin']
        }], onBlur: [{
            type: HostListener,
            args: ['blur']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave', ['$event']]
        }], onMouseClick: [{
            type: HostListener,
            args: ['click']
        }], tooltipTemplate: [{
            type: Input
        }], tooltipContext: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvdG9vbHRpcC90b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4sTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsZ0JBQWdCLEVBRWpCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFM0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7OztBQU9uRCxNQUFNLE9BQU8sZ0JBQWdCO0FBQUcsSUE0RjlCLFlBQ21CLE1BQWMsRUFDZCxjQUE4QixFQUM5QixnQkFBa0MsRUFDbEMsUUFBbUIsRUFDbkIsT0FBZ0M7QUFDbEQsUUFMa0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtBQUFDLFFBQ2YsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0FBQUMsUUFDL0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtBQUFDLFFBQ25DLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQUNwQixZQUFPLEdBQVAsT0FBTyxDQUF5QjtBQUNyRCxRQWpHVyxvQkFBZSxHQUFHLEVBQUUsQ0FBQztBQUNoQyxRQUFXLGlCQUFZLEdBQUcsRUFBRSxD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LFFBQVEsRUFBRSxJQUFJLENBQUMsZUFBZTtBQUNwQyxZQUFNLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYztBQUNsQyxZQUFNLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYztBQUNsQyxTQUFLLENBQUM7QUFDTixJQUFFLENBQUM7QUFDSDs0Q0FuUUMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxlQUFlLGtCQUN6QixRQUFRLEVBQUUsWUFBWSxjQUN2Qjs7O2dxQkFDSTtBQUFDO0FBQTBDLFlBdEI5QyxNQUFNO0FBQ04sWUFjTyxjQUFjO0FBQUksWUFWekIsZ0JBQWdCO0FBQ2hCLFlBSEEsU0FBUztBQUNULFlBUkEsVUFBVTtBQUNYO0FBQUc7QUFFSSw4QkF3QkwsS0FBSztBQUFLLDJCQUNWLEtBQUs7QUFBSywrQkFDVixLQUFLO0FBQUssK0JBQ1YsS0FBSztBQUFLLDBCQUNWLEtBQUs7QUFBSyw4QkFDVixLQUFLO0FBQUssK0JBQ1YsS0FBSztBQUFLLDZCQUNWLEtBQUs7QUFBSyw2QkFLVixLQUFLO0FBQ04sOEJBT0MsS0FBSztBQUNOLCtCQU9DLEtBQUs7QUFDTix5Q0FPQyxLQUFLO0FBQ04sdUNBT0MsS0FBSztBQUNOLGlDQU9DLEtBQUs7QUFDTixpQ0FPQyxLQUFLO0FBQ04sbUJBS0MsTUFBTTtBQUFLLG1CQUNYLE1BQU07QUFBSyxzQkFvQ1gsWUFBWSxTQUFDLFNBQVM7QUFDcEIscUJBTUYsWUFBWSxTQUFDLE1BQU07QUFDakIsMkJBTUYsWUFBWSxTQUFDLFlBQVk7QUFDdkIsMkJBTUYsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQztBQUNuQywyQkFlRixZQUFZLFNBQUMsT0FBTztBQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb21wb25lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuaW1wb3J0IHsgUGxhY2VtZW50VHlwZXMgfSBmcm9tICcuLi8uLi91dGlscy9wb3NpdGlvbi9wbGFjZW1lbnQtdHlwZS5lbnVtJztcbmltcG9ydCB7IEFsaWdubWVudFR5cGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcG9zaXRpb24vYWxpZ25tZW50LXR5cGVzLmVudW0nO1xuXG5pbXBvcnQgeyBTaG93VHlwZXMgfSBmcm9tICcuL3Nob3ctdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBTdHlsZVR5cGVzIH0gZnJvbSAnLi9zdHlsZS10eXBlcy5lbnVtJztcbmltcG9ydCB7IFRvb2x0aXBTZXJ2aWNlIH0gZnJvbSAnLi90b29sdGlwLnNlcnZpY2UnO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2x0aXAuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neC10b29sdGlwXScsXG4gIGV4cG9ydEFzOiAnbmd4VG9vbHRpcCdcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHRvb2x0aXBDc3NDbGFzcyA9ICcnO1xuICBASW5wdXQoKSB0b29sdGlwVGl0bGUgPSAnJztcbiAgQElucHV0KCkgdG9vbHRpcFBsYWNlbWVudDogUGxhY2VtZW50VHlwZXMgPSBQbGFjZW1lbnRUeXBlcy50b3A7XG4gIEBJbnB1dCgpIHRvb2x0aXBBbGlnbm1lbnQ6IEFsaWdubWVudFR5cGVzID0gQWxpZ25tZW50VHlwZXMuY2VudGVyO1xuICBASW5wdXQoKSB0b29sdGlwVHlwZTogU3R5bGVUeXBlcyA9IFN0eWxlVHlwZXMucG9wb3ZlcjtcbiAgQElucHV0KCkgdG9vbHRpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSB0b29sdGlwU2hvd0V2ZW50OiBTaG93VHlwZXMgPSBTaG93VHlwZXMuYWxsO1xuICBASW5wdXQoKSB0b29sdGlwQ29udGV4dDogYW55O1xuXG4gIGdldCB0b29sdGlwU3BhY2luZygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwU3BhY2luZztcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdG9vbHRpcFNwYWNpbmcodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl90b29sdGlwU3BhY2luZyA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbCk7XG4gIH1cblxuICBnZXQgdG9vbHRpcERpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwRGlzYWJsZWQ7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHRvb2x0aXBEaXNhYmxlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl90b29sdGlwRGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsKTtcbiAgfVxuXG4gIGdldCB0b29sdGlwU2hvd0NhcmV0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwU2hvd0NhcmV0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB0b29sdGlwU2hvd0NhcmV0KHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX3Rvb2x0aXBTaG93Q2FyZXQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsKTtcbiAgfVxuXG4gIGdldCB0b29sdGlwQ2xvc2VPbkNsaWNrT3V0c2lkZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcENsb3NlT25DbGlja091dHNpZGU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHRvb2x0aXBDbG9zZU9uQ2xpY2tPdXRzaWRlKHZhbDogYm9vbGVhbikge1xuICAgIHRoaXMuX3Rvb2x0aXBDbG9zZU9uQ2xpY2tPdXRzaWRlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbCk7XG4gIH1cblxuICBnZXQgdG9vbHRpcENsb3NlT25Nb3VzZUxlYXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwQ2xvc2VPbk1vdXNlTGVhdmU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHRvb2x0aXBDbG9zZU9uTW91c2VMZWF2ZSh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl90b29sdGlwQ2xvc2VPbk1vdXNlTGVhdmUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsKTtcbiAgfVxuXG4gIGdldCB0b29sdGlwSGlkZVRpbWVvdXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcEhpZGVUaW1lb3V0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB0b29sdGlwSGlkZVRpbWVvdXQodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl90b29sdGlwSGlkZVRpbWVvdXQgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWwsIDMwMCk7XG4gIH1cblxuICBnZXQgdG9vbHRpcFNob3dUaW1lb3V0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXBTaG93VGltZW91dDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdG9vbHRpcFNob3dUaW1lb3V0KHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fdG9vbHRpcFNob3dUaW1lb3V0ID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsLCAxMDApO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1vdXRwdXQtbmF0aXZlXG4gIEBPdXRwdXQoKSBzaG93ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgaGlkZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBwcml2YXRlIF90b29sdGlwU3BhY2luZyA9IDEwO1xuICBwcml2YXRlIF90b29sdGlwRGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdG9vbHRpcFNob3dDYXJldCA9IHRydWU7XG4gIHByaXZhdGUgX3Rvb2x0aXBDbG9zZU9uQ2xpY2tPdXRzaWRlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfdG9vbHRpcENsb3NlT25Nb3VzZUxlYXZlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfdG9vbHRpcEhpZGVUaW1lb3V0ID0gMzAwO1xuICBwcml2YXRlIF90b29sdGlwU2hvd1RpbWVvdXQgPSAxMDA7XG5cbiAgcHJpdmF0ZSBnZXQgbGlzdGVuc0ZvckZvY3VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRvb2x0aXBTaG93RXZlbnQgPT09IFNob3dUeXBlcy5hbGwgfHwgdGhpcy50b29sdGlwU2hvd0V2ZW50ID09PSBTaG93VHlwZXMuZm9jdXM7XG4gIH1cblxuICBwcml2YXRlIGdldCBsaXN0ZW5zRm9ySG92ZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudG9vbHRpcFNob3dFdmVudCA9PT0gU2hvd1R5cGVzLmFsbCB8fCB0aGlzLnRvb2x0aXBTaG93RXZlbnQgPT09IFNob3dUeXBlcy5tb3VzZW92ZXI7XG4gIH1cblxuICBwcml2YXRlIGNvbXBvbmVudDogQ29tcG9uZW50UmVmPFRvb2x0aXBDb250ZW50Q29tcG9uZW50PjtcbiAgcHJpdmF0ZSB0aW1lb3V0OiBhbnk7XG4gIHByaXZhdGUgbW91c2VMZWF2ZUNvbnRlbnRFdmVudDogKCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBtb3VzZUVudGVyQ29udGVudEV2ZW50OiAoKSA9PiB2b2lkO1xuICBwcml2YXRlIGRvY3VtZW50Q2xpY2tFdmVudDogKCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdG9vbHRpcFNlcnZpY2U6IFRvb2x0aXBTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PlxuICApIHt9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5oaWRlVG9vbHRpcCh0cnVlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzaW4nKVxuICBvbkZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxpc3RlbnNGb3JGb2N1cykge1xuICAgICAgdGhpcy5zaG93VG9vbHRpcCgpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBvbkJsdXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGlzdGVuc0ZvckZvY3VzKSB7XG4gICAgICB0aGlzLmhpZGVUb29sdGlwKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICBvbk1vdXNlRW50ZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGlzdGVuc0ZvckhvdmVyKSB7XG4gICAgICB0aGlzLnNob3dUb29sdGlwKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScsIFsnJGV2ZW50J10pXG4gIG9uTW91c2VMZWF2ZShldmVudDogeyB0b0VsZW1lbnQ6IE5vZGUgfSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxpc3RlbnNGb3JIb3ZlciAmJiB0aGlzLnRvb2x0aXBDbG9zZU9uTW91c2VMZWF2ZSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKHRoaXMuY29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnREb20gPSB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5zID0gY29udGVudERvbS5jb250YWlucyhldmVudC50b0VsZW1lbnQpO1xuICAgICAgICBpZiAoY29udGFpbnMpIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5oaWRlVG9vbHRpcCgpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25Nb3VzZUNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRvb2x0aXBTaG93RXZlbnQgPT09IFNob3dUeXBlcy5tb3VzZW92ZXIpIHtcbiAgICAgIHRoaXMuaGlkZVRvb2x0aXAodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2hvd1Rvb2x0aXAoaW1tZWRpYXRlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudCB8fCB0aGlzLnRvb2x0aXBEaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgdGltZSA9IGltbWVkaWF0ZSA/IDAgOiB0aGlzLnRvb2x0aXBTaG93VGltZW91dDtcblxuICAgIC8vIG5nVXBncmFkZSBidWdcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMjMxOFxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnRvb2x0aXBTZXJ2aWNlLmRlc3Ryb3lBbGwoKTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5jcmVhdGVCb3VuZE9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSB0aGlzLnRvb2x0aXBTZXJ2aWNlLmNyZWF0ZShvcHRpb25zKTtcblxuICAgICAgICAvLyBhZGQgYSB0aW55IHRpbWVvdXQgdG8gYXZvaWQgZXZlbnQgcmUtdHJpZ2dlcnNcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50ICYmIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlICYmIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkSGlkZUxpc3RlbmVycyh0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMTApO1xuXG4gICAgICAgIHRoaXMuc2hvdy5lbWl0KHRydWUpO1xuICAgICAgfSwgdGltZSk7XG4gICAgfSk7XG4gIH1cblxuICBoaWRlVG9vbHRpcChpbW1lZGlhdGU/OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNvbXBvbmVudCkgcmV0dXJuO1xuXG4gICAgY29uc3QgZGVzdHJveUZuID0gKCkgPT4ge1xuICAgICAgLy8gcmVtb3ZlIGV2ZW50c1xuICAgICAgaWYgKHRoaXMubW91c2VMZWF2ZUNvbnRlbnRFdmVudCkgdGhpcy5tb3VzZUxlYXZlQ29udGVudEV2ZW50KCk7XG4gICAgICBpZiAodGhpcy5tb3VzZUVudGVyQ29udGVudEV2ZW50KSB0aGlzLm1vdXNlRW50ZXJDb250ZW50RXZlbnQoKTtcbiAgICAgIGlmICh0aGlzLmRvY3VtZW50Q2xpY2tFdmVudCkgdGhpcy5kb2N1bWVudENsaWNrRXZlbnQoKTtcblxuICAgICAgLy8gZW1pdCBldmVudHNcbiAgICAgIHRoaXMuaGlkZS5lbWl0KHRydWUpO1xuXG4gICAgICAvLyBkZXN0cm95IGNvbXBvbmVudFxuICAgICAgdGhpcy50b29sdGlwU2VydmljZS5kZXN0cm95KHRoaXMuY29tcG9uZW50KTtcbiAgICAgIHRoaXMuY29tcG9uZW50ID0gdW5kZWZpbmVkO1xuICAgIH07XG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChkZXN0cm95Rm4sIHRoaXMudG9vbHRpcEhpZGVUaW1lb3V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzdHJveUZuKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkSGlkZUxpc3RlbmVycyh0b29sdGlwOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIC8vIG9uIG1vdXNlIGVudGVyLCBjYW5jZWwgdGhlIGhpZGUgdHJpZ2dlcmVkIGJ5IHRoZSBsZWF2ZVxuICAgIHRoaXMubW91c2VFbnRlckNvbnRlbnRFdmVudCA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgdG9vbHRpcCxcbiAgICAgICdtb3VzZWVudGVyJyxcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovICgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIGNvbnRlbnQgbW91c2UgbGVhdmUgbGlzdGVuZXJcbiAgICBpZiAodGhpcy50b29sdGlwQ2xvc2VPbk1vdXNlTGVhdmUpIHtcbiAgICAgIHRoaXMubW91c2VMZWF2ZUNvbnRlbnRFdmVudCA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICB0b29sdGlwLFxuICAgICAgICAnbW91c2VsZWF2ZScsXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGVudERvbSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5zID0gY29udGVudERvbS5jb250YWlucyhldmVudC50b0VsZW1lbnQpO1xuICAgICAgICAgIGlmIChjb250YWlucykgcmV0dXJuO1xuXG4gICAgICAgICAgdGhpcy5oaWRlVG9vbHRpcCgpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIGNvbnRlbnQgY2xvc2Ugb24gY2xpY2sgb3V0c2lkZVxuICAgIGlmICh0aGlzLnRvb2x0aXBDbG9zZU9uQ2xpY2tPdXRzaWRlKSB7XG4gICAgICB0aGlzLmRvY3VtZW50Q2xpY2tFdmVudCA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICBkb2N1bWVudCxcbiAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IHRvb2x0aXBDb250YWlucyA9IHRvb2x0aXAuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICBjb25zdCBwYXJlbnRDb250YWlucyA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgaWYgKCF0b29sdGlwQ29udGFpbnMgJiYgIXBhcmVudENvbnRhaW5zKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVUb29sdGlwKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQm91bmRPcHRpb25zKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiB0aGlzLnRvb2x0aXBUaXRsZSxcbiAgICAgIHRlbXBsYXRlOiB0aGlzLnRvb2x0aXBUZW1wbGF0ZSxcbiAgICAgIGhvc3Q6IHRoaXMudmlld0NvbnRhaW5lclJlZi5lbGVtZW50LFxuICAgICAgcGxhY2VtZW50OiB0aGlzLnRvb2x0aXBQbGFjZW1lbnQsXG4gICAgICBhbGlnbm1lbnQ6IHRoaXMudG9vbHRpcEFsaWdubWVudCxcbiAgICAgIHR5cGU6IHRoaXMudG9vbHRpcFR5cGUsXG4gICAgICBzaG93Q2FyZXQ6IHRoaXMudG9vbHRpcFNob3dDYXJldCxcbiAgICAgIGNzc0NsYXNzOiB0aGlzLnRvb2x0aXBDc3NDbGFzcyxcbiAgICAgIHNwYWNpbmc6IHRoaXMudG9vbHRpcFNwYWNpbmcsXG4gICAgICBjb250ZXh0OiB0aGlzLnRvb2x0aXBDb250ZXh0XG4gICAgfTtcbiAgfVxufVxuIl19