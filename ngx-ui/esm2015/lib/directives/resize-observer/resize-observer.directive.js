import { Directive, Output, EventEmitter, ElementRef } from '@angular/core';
import ResizeObserver from 'resize-observer-polyfill';
import * as ɵngcc0 from '@angular/core';
export class ResizeObserverDirective {
    constructor(_el) {
        this._el = _el;
        this.resize = new EventEmitter();
    }
    ngOnInit() {
        this._observer = new ResizeObserver(entries => {
            for (const entry of entries) {
                this.onResize(entry.contentRect);
            }
        });
        this._observer.observe(this._el.nativeElement);
    }
    ngOnDestroy() {
        this._observer.unobserve(this._el.nativeElement);
    }
    onResize(e) {
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = undefined;
        }
        this._timer = setTimeout(() => this.resize.emit(e), 100);
    }
}
ResizeObserverDirective.ɵfac = function ResizeObserverDirective_Factory(t) { return new (t || ResizeObserverDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ResizeObserverDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: ResizeObserverDirective, selectors: [["", "resizeObserver", ""]], outputs: { resize: "resizeObserver" }, exportAs: ["resizeObserver"] });
ResizeObserverDirective.ctorParameters = () => [
    { type: ElementRef }
];
ResizeObserverDirective.propDecorators = {
    resize: [{ type: Output, args: ['resizeObserver',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ResizeObserverDirective, [{
        type: Directive,
        args: [{
                exportAs: 'resizeObserver',
                selector: '[resizeObserver]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { resize: [{
            type: Output,
            args: ['resizeObserver']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLW9ic2VydmVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvZGlyZWN0aXZlcy9yZXNpemUtb2JzZXJ2ZXIvcmVzaXplLW9ic2VydmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQXFCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLGNBQWMsTUFBTSwwQkFBMEIsQ0FBQzs7QUFNdEQsTUFBTSxPQUFPLHVCQUF1QjtBQUFHLElBTXJDLFlBQTZCLEdBQTRCO0FBQUksUUFBaEMsUUFBRyxHQUFILEdBQUcsQ0FBeUI7QUFBQyxRQUxoQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQTRCLENBQUM7QUFDbEYsSUFJOEQsQ0FBQztBQUMvRCxJQUNFLFFBQVE7QUFBSyxRQUNYLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDbEQsWUFBTSxLQUFLLE1BQU0sS0FBSyxJQUFJLE9BQU8sRUFBRTtBQUNuQyxnQkFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN6QyxhQUFPO0FBQ1AsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLFFBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNuRCxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVc7QUFBSyxRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDckQsSUFBRSxDQUFDO0FBQ0gsSUFDRSxRQUFRLENBQUMsQ0FBMkI7QUFBSSxRQUN0QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDckIsWUFBTSxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLFlBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7QUFDOUIsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDN0QsSUFBRSxDQUFDO0FBQ0g7bURBbENDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsZ0JBQWdCLGtCQUMxQixRQUFRLEVBQUUsa0JBQWtCO0tBQzdCLGtOQUNJO0FBQUM7QUFBaUQsWUFQTSxVQUFVO0FBQUc7QUFBRztBQUNyRCxxQkFPckIsTUFBTSxTQUFDLGdCQUFnQjtBQUFNOzs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9uRGVzdHJveSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gJ3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbCc7XG5cbkBEaXJlY3RpdmUoe1xuICBleHBvcnRBczogJ3Jlc2l6ZU9ic2VydmVyJyxcbiAgc2VsZWN0b3I6ICdbcmVzaXplT2JzZXJ2ZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBSZXNpemVPYnNlcnZlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQE91dHB1dCgncmVzaXplT2JzZXJ2ZXInKSByZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPFBhcnRpYWw8RE9NUmVjdFJlYWRPbmx5Pj4oKTtcblxuICBwcml2YXRlIF9vYnNlcnZlcjogUmVzaXplT2JzZXJ2ZXI7XG4gIHByaXZhdGUgX3RpbWVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX29ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgIHRoaXMub25SZXNpemUoZW50cnkuY29udGVudFJlY3QpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX29ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIG9uUmVzaXplKGU6IFBhcnRpYWw8RE9NUmVjdFJlYWRPbmx5Pik6IHZvaWQge1xuICAgIGlmICh0aGlzLl90aW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKTtcbiAgICAgIHRoaXMuX3RpbWVyID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlc2l6ZS5lbWl0KGUpLCAxMDApO1xuICB9XG59XG4iXX0=