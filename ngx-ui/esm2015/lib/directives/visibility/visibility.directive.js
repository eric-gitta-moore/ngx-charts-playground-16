import { Directive, Output, EventEmitter, ElementRef, HostBinding, NgZone } from '@angular/core';
/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibilityObserver
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */
import * as ɵngcc0 from '@angular/core';
export class VisibilityDirective {
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
        this.isVisible = false;
        this.visible = new EventEmitter();
    }
    ngOnInit() {
        this.runCheck();
    }
    ngOnDestroy() {
        clearTimeout(this.timeout);
    }
    onVisibilityChange() {
        // trigger zone recalc for columns
        this.zone.run(() => {
            this.isVisible = true;
            this.visible.emit(true);
        });
    }
    runCheck() {
        const check = () => {
            // https://davidwalsh.name/offsetheight-visibility
            const { offsetHeight, offsetWidth } = this.element.nativeElement;
            if (offsetHeight && offsetWidth) {
                clearTimeout(this.timeout);
                this.onVisibilityChange();
            }
            else {
                clearTimeout(this.timeout);
                this.zone.runOutsideAngular(() => {
                    this.timeout = setTimeout(() => check(), 50);
                });
            }
        };
        setTimeout(() => check());
    }
}
VisibilityDirective.ɵfac = function VisibilityDirective_Factory(t) { return new (t || VisibilityDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
VisibilityDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: VisibilityDirective, selectors: [["", "visibilityObserver", ""]], hostVars: 2, hostBindings: function VisibilityDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("visible", ctx.isVisible);
    } }, outputs: { visible: "visible" } });
VisibilityDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
VisibilityDirective.propDecorators = {
    isVisible: [{ type: HostBinding, args: ['class.visible',] }],
    visible: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(VisibilityDirective, [{
        type: Directive,
        args: [{
                selector: '[visibilityObserver]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { isVisible: [{
            type: HostBinding,
            args: ['class.visible']
        }], visible: [{
            type: Output
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaWJpbGl0eS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2RpcmVjdGl2ZXMvdmlzaWJpbGl0eS92aXNpYmlsaXR5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRXBIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFLSCxNQUFNLE9BQU8sbUJBQW1CO0FBQUcsSUFPakMsWUFBNkIsT0FBZ0MsRUFBbUIsSUFBWTtBQUFJLFFBQW5FLFlBQU8sR0FBUCxPQUFPLENBQXlCO0FBQUMsUUFBa0IsU0FBSSxHQUFKLElBQUksQ0FBUTtBQUFDLFFBTi9ELGNBQVMsR0FBRyxLQUFLLENBQUM7QUFDbEQsUUFDWSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztBQUNsRCxJQUdpRyxDQUFDO0FBQ2xHLElBQ0UsUUFBUTtBQUFLLFFBQ1gsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3BCLElBQUUsQ0FBQztBQUNILElBQ0UsV0FBVztBQUFLLFFBQ2QsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixJQUFFLENBQUM7QUFDSCxJQUNFLGtCQUFrQjtBQUFLLFFBQ3JCLGtDQUFrQztBQUN0QyxRQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtBQUN2QixZQUFNLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQzVCLFlBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNILElBQ0UsUUFBUTtBQUFLLFFBQ1gsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFO0FBQ3ZCLFlBQU0sa0RBQWtEO0FBQ3hELFlBQU0sTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUN2RSxZQUNNLElBQUksWUFBWSxJQUFJLFdBQVcsRUFBRTtBQUN2QyxnQkFBUSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25DLGdCQUFRLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQ2xDLGFBQU87QUFBQyxpQkFBSztBQUNiLGdCQUFRLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbkMsZ0JBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7QUFDekMsb0JBQVUsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdkQsZ0JBQVEsQ0FBQyxDQUFDLENBQUM7QUFDWCxhQUFPO0FBQ1AsUUFBSSxDQUFDLENBQUM7QUFDTixRQUNJLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQzlCLElBQUUsQ0FBQztBQUNIOytDQTlDQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLHNCQUFzQixjQUNqQzs7OzRDQUNJO0FBQUM7QUFBNkMsWUFqQlQsVUFBVTtBQUFJLFlBQVcsTUFBTTtBQUFHO0FBQUc7QUFFL0Usd0JBZ0JHLFdBQVcsU0FBQyxlQUFlO0FBQU8sc0JBRWxDLE1BQU07QUFBSTs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBOZ1pvbmUsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVmlzaWJpbGl0eSBPYnNlcnZlciBEaXJlY3RpdmVcbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiBcdFx0PGRpdlxuICogXHRcdFx0dmlzaWJpbGl0eU9ic2VydmVyXG4gKiBcdFx0XHQodmlzaWJsZSk9XCJvblZpc2libGUoJGV2ZW50KVwiPlxuICogXHRcdDwvZGl2PlxuICpcbiAqL1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdmlzaWJpbGl0eU9ic2VydmVyXSdcbn0pXG5leHBvcnQgY2xhc3MgVmlzaWJpbGl0eURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy52aXNpYmxlJykgaXNWaXNpYmxlID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHZpc2libGUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgdGltZW91dDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIHByaXZhdGUgcmVhZG9ubHkgem9uZTogTmdab25lKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucnVuQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICB9XG5cbiAgb25WaXNpYmlsaXR5Q2hhbmdlKCk6IHZvaWQge1xuICAgIC8vIHRyaWdnZXIgem9uZSByZWNhbGMgZm9yIGNvbHVtbnNcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMudmlzaWJsZS5lbWl0KHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgcnVuQ2hlY2soKTogdm9pZCB7XG4gICAgY29uc3QgY2hlY2sgPSAoKSA9PiB7XG4gICAgICAvLyBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9vZmZzZXRoZWlnaHQtdmlzaWJpbGl0eVxuICAgICAgY29uc3QgeyBvZmZzZXRIZWlnaHQsIG9mZnNldFdpZHRoIH0gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcblxuICAgICAgaWYgKG9mZnNldEhlaWdodCAmJiBvZmZzZXRXaWR0aCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgICAgdGhpcy5vblZpc2liaWxpdHlDaGFuZ2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gY2hlY2soKSwgNTApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiBjaGVjaygpKTtcbiAgfVxufVxuIl19