import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { coerceNumberProperty, coerceBooleanProperty } from '@angular/cdk/coercion';
import * as ɵngcc0 from '@angular/core';
export class LongPressDirective {
    constructor() {
        this.longPressStart = new EventEmitter();
        this.longPressFinish = new EventEmitter();
        this.longPressCancel = new EventEmitter();
        this._duration = 3000;
        this._disabled = false;
        this._pressed = false;
    }
    get duration() {
        return this._duration;
    }
    set duration(duration) {
        this._duration = coerceNumberProperty(duration, 3000);
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this._disabled = coerceBooleanProperty(disabled);
    }
    onPress(event) {
        if (this.disabled) {
            event.stopPropagation();
            event.preventDefault();
            return;
        }
        this._pressed = true;
        this.longPressStart.emit(true);
        this._pressTimeout = setTimeout(() => {
            /* istanbul ignore else */
            if (this._pressed) {
                this._pressed = false;
                this.longPressFinish.emit(true);
            }
        }, this.duration);
    }
    onRelease() {
        this._pressed = false;
        clearTimeout(this._pressTimeout);
        this.longPressCancel.emit(true);
    }
}
LongPressDirective.ɵfac = function LongPressDirective_Factory(t) { return new (t || LongPressDirective)(); };
LongPressDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: LongPressDirective, selectors: [["", "long-press", ""]], hostBindings: function LongPressDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mousedown", function LongPressDirective_mousedown_HostBindingHandler($event) { return ctx.onPress($event); })("mouseout", function LongPressDirective_mouseout_HostBindingHandler() { return ctx.onRelease(); })("mouseup", function LongPressDirective_mouseup_HostBindingHandler() { return ctx.onRelease(); });
    } }, inputs: { duration: "duration", disabled: "disabled" }, outputs: { longPressStart: "longPressStart", longPressFinish: "longPressFinish", longPressCancel: "longPressCancel" } });
LongPressDirective.propDecorators = {
    duration: [{ type: Input }],
    disabled: [{ type: Input }],
    longPressStart: [{ type: Output }],
    longPressFinish: [{ type: Output }],
    longPressCancel: [{ type: Output }],
    onPress: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
    onRelease: [{ type: HostListener, args: ['mouseout',] }, { type: HostListener, args: ['mouseup',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(LongPressDirective, [{
        type: Directive,
        args: [{
                selector: '[long-press]'
            }]
    }], function () { return []; }, { longPressStart: [{
            type: Output
        }], longPressFinish: [{
            type: Output
        }], longPressCancel: [{
            type: Output
        }], duration: [{
            type: Input
        }], disabled: [{
            type: Input
        }], onPress: [{
            type: HostListener,
            args: ['mousedown', ['$event']]
        }], onRelease: [{
            type: HostListener,
            args: ['mouseout']
        }, {
            type: HostListener,
            args: ['mouseup']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9uZy1wcmVzcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2RpcmVjdGl2ZXMvbG9uZy1wcmVzcy9sb25nLXByZXNzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFLcEYsTUFBTSxPQUFPLGtCQUFrQjtBQUMvQixJQUpBO0FBQ0csUUFtQlMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0FBQ3pELFFBQVksb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0FBQzFELFFBQVksb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0FBQzFELFFBQ1UsY0FBUyxHQUFHLElBQUksQ0FBQztBQUMzQixRQUFVLGNBQVMsR0FBRyxLQUFLLENBQUM7QUFDNUIsUUFBVSxhQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzNCLElBNEJBLENBQUM7QUFDRCxJQXBERSxJQUNJLFFBQVE7QUFBSyxRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksUUFBUSxDQUFDLFFBQWdCO0FBQy9CLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDMUQsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUNJLFFBQVE7QUFBSyxRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksUUFBUSxDQUFDLFFBQWlCO0FBQ2hDLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyRCxJQUFFLENBQUM7QUFDSCxJQVdFLE9BQU8sQ0FBQyxLQUFpQjtBQUFJLFFBQzNCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUN2QixZQUFNLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUM5QixZQUFNLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUM3QixZQUFNLE9BQU87QUFDYixTQUFLO0FBQ0wsUUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUN6QixRQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25DLFFBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO0FBQ3pDLFlBQU0sMEJBQTBCO0FBQ2hDLFlBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ3pCLGdCQUFRLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzlCLGdCQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hDLGFBQU87QUFDUCxRQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEIsSUFBRSxDQUFDO0FBQ0gsSUFHRSxTQUFTO0FBQUssUUFDWixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUMxQixRQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDckMsUUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQyxJQUFFLENBQUM7QUFDSDs4Q0F2REMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxjQUFjO1VBQ3pCOzswTEFDSTtBQUFDO0FBQ0ksdUJBQVAsS0FBSztBQUNOLHVCQU9DLEtBQUs7QUFDTiw2QkFPQyxNQUFNO0FBQUssOEJBQ1gsTUFBTTtBQUFLLDhCQUNYLE1BQU07QUFBSyxzQkFPWCxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO0FBQ2xDLHdCQWtCRixZQUFZLFNBQUMsVUFBVSxjQUN2QixZQUFZLFNBQUMsU0FBUztBQUNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlTnVtYmVyUHJvcGVydHksIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tsb25nLXByZXNzXSdcbn0pXG5leHBvcnQgY2xhc3MgTG9uZ1ByZXNzRGlyZWN0aXZlIHtcbiAgQElucHV0KClcbiAgZ2V0IGR1cmF0aW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2R1cmF0aW9uO1xuICB9XG4gIHNldCBkdXJhdGlvbihkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgdGhpcy5fZHVyYXRpb24gPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eShkdXJhdGlvbiwgMzAwMCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGRpc2FibGVkKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSBsb25nUHJlc3NTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIGxvbmdQcmVzc0ZpbmlzaCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIGxvbmdQcmVzc0NhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBwcml2YXRlIF9kdXJhdGlvbiA9IDMwMDA7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3ByZXNzZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcHJlc3NUaW1lb3V0OiBhbnk7XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcbiAgb25QcmVzcyhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcHJlc3NlZCA9IHRydWU7XG4gICAgdGhpcy5sb25nUHJlc3NTdGFydC5lbWl0KHRydWUpO1xuICAgIHRoaXMuX3ByZXNzVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmICh0aGlzLl9wcmVzc2VkKSB7XG4gICAgICAgIHRoaXMuX3ByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sb25nUHJlc3NGaW5pc2guZW1pdCh0cnVlKTtcbiAgICAgIH1cbiAgICB9LCB0aGlzLmR1cmF0aW9uKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlb3V0JylcbiAgQEhvc3RMaXN0ZW5lcignbW91c2V1cCcpXG4gIG9uUmVsZWFzZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9wcmVzc2VkID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3ByZXNzVGltZW91dCk7XG4gICAgdGhpcy5sb25nUHJlc3NDYW5jZWwuZW1pdCh0cnVlKTtcbiAgfVxufVxuIl19