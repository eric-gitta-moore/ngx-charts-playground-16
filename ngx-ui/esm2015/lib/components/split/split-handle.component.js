import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation, Input, HostBinding } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { partsToStyle, basisToParts } from './utils';
import { SplitDirection } from './split-direction.enum';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["ngxSplitHandle", ""];
const DEFAULT_BASIS = '0 0 15px';
export class SplitHandleComponent {
    constructor() {
        this.ngxSplitHandle = DEFAULT_BASIS;
        this.drag = new EventEmitter();
        this.dragStart = new EventEmitter();
        this.dragEnd = new EventEmitter();
        this.dblclick = new EventEmitter();
        this.direction = SplitDirection.Row;
        this.currentFlexParts = basisToParts('0', '0', DEFAULT_BASIS);
    }
    get flex() {
        return partsToStyle(this.currentFlexParts);
    }
    get isRow() {
        return this.direction === SplitDirection.Row;
    }
    get isColumn() {
        return this.direction === SplitDirection.Column;
    }
    ngOnChanges() {
        if (!this.ngxSplitHandle) {
            this.ngxSplitHandle = DEFAULT_BASIS;
        }
        this.currentFlexParts = basisToParts('0', '0', this.ngxSplitHandle);
    }
    onMousedown(ev) {
        const mouseup$ = fromEvent(document, 'mouseup');
        this.subscription = mouseup$.subscribe(/* istanbul ignore next */ (e) => this.onMouseup(e));
        const mousemove$ = fromEvent(document, 'mousemove')
            .pipe(takeUntil(mouseup$))
            .subscribe(/* istanbul ignore next */ (e) => this.onMouseMove(e));
        this.subscription.add(mousemove$);
        this.dragStart.emit(ev);
    }
    onMouseMove(ev) {
        this.drag.emit(ev);
    }
    onMouseup(ev) {
        if (this.subscription) {
            this.dragEnd.emit(ev);
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
}
SplitHandleComponent.ɵfac = function SplitHandleComponent_Factory(t) { return new (t || SplitHandleComponent)(); };
SplitHandleComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: SplitHandleComponent, selectors: [["", "ngxSplitHandle", ""]], hostAttrs: [1, "ngx-split-handle"], hostVars: 8, hostBindings: function SplitHandleComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("box-sizing", "border-box")("flex", ctx.flex);
        ɵngcc0.ɵɵclassProp("direction-row", ctx.isRow)("direction-column", ctx.isColumn);
    } }, inputs: { ngxSplitHandle: "ngxSplitHandle" }, outputs: { drag: "drag", dragStart: "dragStart", dragEnd: "dragEnd", dblclick: "dblclick" }, exportAs: ["ngxSplitHandle"], features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 2, vars: 0, consts: [[1, "icon-split-handle", "ngx-split-button", 3, "mousedown", "dblclick"], ["splitHandle", ""]], template: function SplitHandleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "button", 0, 1);
        ɵngcc0.ɵɵlistener("mousedown", function SplitHandleComponent_Template_button_mousedown_0_listener($event) { return ctx.onMousedown($event); })("dblclick", function SplitHandleComponent_Template_button_dblclick_0_listener($event) { return ctx.dblclick.emit($event); });
        ɵngcc0.ɵɵelementEnd();
    } }, styles: [".ngx-split-handle{position:relative}.ngx-split-handle .ngx-split-button{line-height:0;font-size:32px;position:absolute;display:block;padding:0}.ngx-split-handle.direction-row .ngx-split-button{top:50%;left:50%;cursor:col-resize;transform:translate(-50%,-50%)}.ngx-split-handle.direction-column .ngx-split-button{left:50%;cursor:row-resize;top:-3px;transform:translateX(-50%) rotate(270deg)}"], encapsulation: 2, changeDetection: 0 });
SplitHandleComponent.propDecorators = {
    ngxSplitHandle: [{ type: Input }],
    drag: [{ type: Output }],
    dragStart: [{ type: Output }],
    dragEnd: [{ type: Output }],
    dblclick: [{ type: Output }],
    flex: [{ type: HostBinding, args: ['style.flex',] }],
    isRow: [{ type: HostBinding, args: ['class.direction-row',] }],
    isColumn: [{ type: HostBinding, args: ['class.direction-column',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SplitHandleComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxSplitHandle',
                // eslint-disable-next-line @angular-eslint/component-selector
                selector: '[ngxSplitHandle]',
                template: "<button\n  #splitHandle\n  class=\"icon-split-handle ngx-split-button\"\n  (mousedown)=\"onMousedown($event)\"\n  (dblclick)=\"dblclick.emit($event)\"\n></button>\n",
                host: {
                    class: 'ngx-split-handle',
                    '[class.direction-row]': 'isRow',
                    '[class.direction-column]': 'isColumn',
                    '[style.box-sizing]': '"border-box"'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-split-handle{position:relative}.ngx-split-handle .ngx-split-button{line-height:0;font-size:32px;position:absolute;display:block;padding:0}.ngx-split-handle.direction-row .ngx-split-button{top:50%;left:50%;cursor:col-resize;transform:translate(-50%,-50%)}.ngx-split-handle.direction-column .ngx-split-button{left:50%;cursor:row-resize;top:-3px;transform:translateX(-50%) rotate(270deg)}"]
            }]
    }], function () { return []; }, { ngxSplitHandle: [{
            type: Input
        }], drag: [{
            type: Output
        }], dragStart: [{
            type: Output
        }], dragEnd: [{
            type: Output
        }], dblclick: [{
            type: Output
        }], flex: [{
            type: HostBinding,
            args: ['style.flex']
        }], isRow: [{
            type: HostBinding,
            args: ['class.direction-row']
        }], isColumn: [{
            type: HostBinding,
            args: ['class.direction-column']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtaGFuZGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9zcGxpdC9zcGxpdC1oYW5kbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLEtBQUssRUFDTCxXQUFXLEVBRVosTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFnQixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBYSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUV4RCxNQUFNLGFBQWEsR0FBRyxVQUFVLENBQUM7QUFpQmpDLE1BQU0sT0FBTyxvQkFBb0I7QUFBRyxJQWZwQztBQUNHLFFBZVEsbUJBQWMsR0FBRyxhQUFhLENBQUM7QUFDMUMsUUFDWSxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQTRCLENBQUM7QUFDaEUsUUFBWSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztBQUN2RCxRQUFZLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0FBQ3JELFFBQVksYUFBUSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7QUFDdEQsUUFDRSxjQUFTLEdBQW1CLGNBQWMsQ0FBQyxHQUFHLENBQUM7QUFDakQsUUFDRSxxQkFBZ0IsR0FBYyxZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUN0RSxJQThDQSxDQUFDO0FBQ0QsSUE5Q0UsSUFDSSxJQUFJO0FBQ1YsUUFBSSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUMvQyxJQUFFLENBQUM7QUFDSCxJQUNFLElBQ0ksS0FBSztBQUNYLFFBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLGNBQWMsQ0FBQyxHQUFHLENBQUM7QUFDakQsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUNJLFFBQVE7QUFDZCxRQUFJLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDO0FBQ3BELElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVztBQUNiLFFBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7QUFDOUIsWUFBTSxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztBQUMxQyxTQUFLO0FBQ0wsUUFBSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3hFLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVyxDQUFDLEVBQWM7QUFBSSxRQUM1QixNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3BELFFBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBYSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUcsUUFDSSxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQztBQUN2RCxhQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEMsYUFBTyxTQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFhLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRixRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLFFBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDNUIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXLENBQUMsRUFBYztBQUFJLFFBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZCLElBQUUsQ0FBQztBQUNILElBQ0UsU0FBUyxDQUFDLEVBQWM7QUFBSSxRQUMxQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDM0IsWUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM1QixZQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDdEMsWUFBTSxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztBQUNwQyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7Z0RBeEVDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLDhEQUE4RCxpQkFDOUQsUUFBUSxFQUFFLGtCQUFrQixrQkFDNUI7NENBQTRDLGtCQUU1QyxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLGtCQUFrQixzQkFDekIsdUJBQXVCLEVBQUU7S0FBTyxzQkFDaEMsMEJBQTBCLEVBQUUsVUFBVSxzQkFDdEMsb0JBQW9CLEVBQUUsY0FBYyxrQkFDckMsa0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksa0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzt3TkFDaEQ7O3FjQUNJO0FBQUM7QUFBd0MsNkJBQzNDLEtBQUs7QUFBSyxtQkFFVixNQUFNO0FBQUssd0JBQ1gsTUFBTTtBQUFLLHNCQUNYLE1BQU07QUFBSyx1QkFDWCxNQUFNO0FBQUssbUJBTVgsV0FBVyxTQUFDLFlBQVk7QUFDdEIsb0JBSUYsV0FBVyxTQUFDLHFCQUFxQjtBQUMvQix1QkFJRixXQUFXLFNBQUMsd0JBQXdCO0FBQ25DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgT25DaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRmxleFBhcnRzLCBwYXJ0c1RvU3R5bGUsIGJhc2lzVG9QYXJ0cyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgU3BsaXREaXJlY3Rpb24gfSBmcm9tICcuL3NwbGl0LWRpcmVjdGlvbi5lbnVtJztcblxuY29uc3QgREVGQVVMVF9CQVNJUyA9ICcwIDAgMTVweCc7XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ25neFNwbGl0SGFuZGxlJyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbmd4U3BsaXRIYW5kbGVdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NwbGl0LWhhbmRsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NwbGl0LWhhbmRsZS5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICduZ3gtc3BsaXQtaGFuZGxlJyxcbiAgICAnW2NsYXNzLmRpcmVjdGlvbi1yb3ddJzogJ2lzUm93JyxcbiAgICAnW2NsYXNzLmRpcmVjdGlvbi1jb2x1bW5dJzogJ2lzQ29sdW1uJyxcbiAgICAnW3N0eWxlLmJveC1zaXppbmddJzogJ1wiYm9yZGVyLWJveFwiJ1xuICB9LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTcGxpdEhhbmRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG5neFNwbGl0SGFuZGxlID0gREVGQVVMVF9CQVNJUztcblxuICBAT3V0cHV0KCkgZHJhZyA9IG5ldyBFdmVudEVtaXR0ZXI8eyB4OiBudW1iZXI7IHk6IG51bWJlciB9PigpO1xuICBAT3V0cHV0KCkgZHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgZHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcbiAgQE91dHB1dCgpIGRibGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuXG4gIGRpcmVjdGlvbjogU3BsaXREaXJlY3Rpb24gPSBTcGxpdERpcmVjdGlvbi5Sb3c7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBjdXJyZW50RmxleFBhcnRzOiBGbGV4UGFydHMgPSBiYXNpc1RvUGFydHMoJzAnLCAnMCcsIERFRkFVTFRfQkFTSVMpO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuZmxleCcpXG4gIGdldCBmbGV4KCkge1xuICAgIHJldHVybiBwYXJ0c1RvU3R5bGUodGhpcy5jdXJyZW50RmxleFBhcnRzKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGlyZWN0aW9uLXJvdycpXG4gIGdldCBpc1JvdygpIHtcbiAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24gPT09IFNwbGl0RGlyZWN0aW9uLlJvdztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGlyZWN0aW9uLWNvbHVtbicpXG4gIGdldCBpc0NvbHVtbigpIHtcbiAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24gPT09IFNwbGl0RGlyZWN0aW9uLkNvbHVtbjtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICghdGhpcy5uZ3hTcGxpdEhhbmRsZSkge1xuICAgICAgdGhpcy5uZ3hTcGxpdEhhbmRsZSA9IERFRkFVTFRfQkFTSVM7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudEZsZXhQYXJ0cyA9IGJhc2lzVG9QYXJ0cygnMCcsICcwJywgdGhpcy5uZ3hTcGxpdEhhbmRsZSk7XG4gIH1cblxuICBvbk1vdXNlZG93bihldjogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IG1vdXNldXAkID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnbW91c2V1cCcpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gbW91c2V1cCQuc3Vic2NyaWJlKC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIChlOiBNb3VzZUV2ZW50KSA9PiB0aGlzLm9uTW91c2V1cChlKSk7XG5cbiAgICBjb25zdCBtb3VzZW1vdmUkID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnbW91c2Vtb3ZlJylcbiAgICAgIC5waXBlKHRha2VVbnRpbChtb3VzZXVwJCkpXG4gICAgICAuc3Vic2NyaWJlKC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIChlOiBNb3VzZUV2ZW50KSA9PiB0aGlzLm9uTW91c2VNb3ZlKGUpKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChtb3VzZW1vdmUkKTtcbiAgICB0aGlzLmRyYWdTdGFydC5lbWl0KGV2KTtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5kcmFnLmVtaXQoZXYpO1xuICB9XG5cbiAgb25Nb3VzZXVwKGV2OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmRyYWdFbmQuZW1pdChldik7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXX0=