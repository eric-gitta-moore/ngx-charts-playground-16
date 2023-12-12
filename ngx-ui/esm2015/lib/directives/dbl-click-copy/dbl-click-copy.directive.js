import { Directive, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class DblClickCopyDirective {
    constructor(element) {
        this.element = element;
        // eslint-disable-next-line @angular-eslint/no-output-on-prefix
        this.onCopy = new EventEmitter();
    }
    onDblClick() {
        const selection = getSelection();
        const range = document.createRange();
        range.selectNodeContents(this.element.nativeElement);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        this.onCopy.emit(range);
    }
}
DblClickCopyDirective.ɵfac = function DblClickCopyDirective_Factory(t) { return new (t || DblClickCopyDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
DblClickCopyDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: DblClickCopyDirective, selectors: [["", "dbl-click-copy", ""]], hostAttrs: ["title", "Double click to copy to clipboard"], hostBindings: function DblClickCopyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("dblclick", function DblClickCopyDirective_dblclick_HostBindingHandler() { return ctx.onDblClick(); });
    } }, outputs: { onCopy: "onCopy" } });
DblClickCopyDirective.ctorParameters = () => [
    { type: ElementRef }
];
DblClickCopyDirective.propDecorators = {
    onCopy: [{ type: Output }],
    onDblClick: [{ type: HostListener, args: ['dblclick',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DblClickCopyDirective, [{
        type: Directive,
        args: [{
                selector: '[dbl-click-copy]',
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    title: 'Double click to copy to clipboard'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { onCopy: [{
            type: Output
        }], onDblClick: [{
            type: HostListener,
            args: ['dblclick']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJsLWNsaWNrLWNvcHkuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9kaXJlY3RpdmVzL2RibC1jbGljay1jb3B5L2RibC1jbGljay1jb3B5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFTMUYsTUFBTSxPQUFPLHFCQUFxQjtBQUNsQyxJQUdFLFlBQTZCLE9BQWdDO0FBQUksUUFBcEMsWUFBTyxHQUFQLE9BQU8sQ0FBeUI7QUFBQyxRQUg5RCwrREFBK0Q7QUFDakUsUUFBWSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztBQUMvQyxJQUNrRSxDQUFDO0FBQ25FLElBRUUsVUFBVTtBQUFLLFFBQ2IsTUFBTSxTQUFTLEdBQUcsWUFBWSxFQUFFLENBQUM7QUFDckMsUUFBSSxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDekMsUUFDSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN6RCxRQUFJLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNoQyxRQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUIsUUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLFFBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDNUIsSUFBRSxDQUFDO0FBQ0g7aURBekJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsa0JBQWtCLGtCQUM1QjtzQ0FBcUUsaUJBQ3JFLElBQUksRUFBRSxzQkFDSixLQUFLLEVBQUUsbUNBQW1DLGtCQUMzQyxjQUNGOzswQ0FDSTtBQUFDO0FBQ1UsWUFWd0MsVUFBVTtBQUFHO0FBQUc7QUFHaEUscUJBUUwsTUFBTTtBQUFLLHlCQUlYLFlBQVksU0FBQyxVQUFVO0FBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGJsLWNsaWNrLWNvcHldJyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1ob3N0LW1ldGFkYXRhLXByb3BlcnR5XG4gIGhvc3Q6IHtcbiAgICB0aXRsZTogJ0RvdWJsZSBjbGljayB0byBjb3B5IHRvIGNsaXBib2FyZCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBEYmxDbGlja0NvcHlEaXJlY3RpdmUge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpIG9uQ29weSA9IG5ldyBFdmVudEVtaXR0ZXI8UmFuZ2U+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge31cblxuICBASG9zdExpc3RlbmVyKCdkYmxjbGljaycpXG4gIG9uRGJsQ2xpY2soKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gZ2V0U2VsZWN0aW9uKCk7XG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuXG4gICAgdGhpcy5vbkNvcHkuZW1pdChyYW5nZSk7XG4gIH1cbn1cbiJdfQ==