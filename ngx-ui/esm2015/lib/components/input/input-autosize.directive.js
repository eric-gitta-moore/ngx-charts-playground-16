import { ElementRef, Directive, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as ɵngcc0 from '@angular/core';
export class AutosizeDirective {
    constructor(element) {
        this.element = element;
        this._enabled = false;
    }
    get enabled() {
        return this._enabled;
    }
    set enabled(v) {
        this._enabled = coerceBooleanProperty(v);
    }
    get nodeName() {
        return this.element.nativeElement.nodeName;
    }
    onInput() {
        if (this._enabled) {
            const nativeEl = this.element.nativeElement;
            if (this.nodeName === 'TEXTAREA') {
                nativeEl.style.height = 'auto';
                if (nativeEl.clientHeight < nativeEl.scrollHeight) {
                    nativeEl.style.height = `${nativeEl.scrollHeight}px`;
                }
            }
            else {
                nativeEl.style.width = 'auto';
                if (nativeEl.clientWidth < nativeEl.scrollWidth) {
                    nativeEl.style.width = `${nativeEl.scrollWidth}px`;
                }
            }
        }
    }
}
AutosizeDirective.ɵfac = function AutosizeDirective_Factory(t) { return new (t || AutosizeDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
AutosizeDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: AutosizeDirective, selectors: [["textarea", "autosize", ""], ["input", "autosize", ""]], hostAttrs: [1, "ngx-autosize"], hostBindings: function AutosizeDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("input", function AutosizeDirective_input_HostBindingHandler() { return ctx.onInput(); });
    } }, inputs: { enabled: ["autosize", "enabled"] }, exportAs: ["ngxAutosize"] });
AutosizeDirective.ctorParameters = () => [
    { type: ElementRef }
];
AutosizeDirective.propDecorators = {
    enabled: [{ type: Input, args: ['autosize',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AutosizeDirective, [{
        type: Directive,
        args: [{
                exportAs: 'ngxAutosize',
                selector: 'textarea[autosize], input[autosize]',
                host: {
                    class: 'ngx-autosize',
                    '(input)': 'onInput()'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { enabled: [{
            type: Input,
            args: ['autosize']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtYXV0b3NpemUuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LWF1dG9zaXplLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBVTlELE1BQU0sT0FBTyxpQkFBaUI7QUFDOUIsSUFhRSxZQUFxQixPQUEyRDtBQUFJLFFBQS9ELFlBQU8sR0FBUCxPQUFPLENBQW9EO0FBQUMsUUFOekUsYUFBUSxHQUFHLEtBQUssQ0FBQztBQUMzQixJQUtxRixDQUFDO0FBQ3RGLElBZEUsSUFDSSxPQUFPO0FBQ2IsUUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDekIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLE9BQU8sQ0FBQyxDQUFVO0FBQ3hCLFFBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QyxJQUFFLENBQUM7QUFDSCxJQUVFLElBQUksUUFBUTtBQUNkLFFBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFnQyxDQUFDO0FBQ3ZFLElBQUUsQ0FBQztBQUNILElBR0UsT0FBTztBQUNULFFBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ3ZCLFlBQU0sTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDbEQsWUFDTSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssVUFBVSxFQUFFO0FBQ3hDLGdCQUFRLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUN2QyxnQkFDUSxJQUFJLFFBQVEsQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFlBQVksRUFBRTtBQUMzRCxvQkFBVSxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxZQUFZLElBQUksQ0FBQztBQUMvRCxpQkFBUztBQUNULGFBQU87QUFBQyxpQkFBSztBQUNiLGdCQUFRLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztBQUN0QyxnQkFDUSxJQUFJLFFBQVEsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRTtBQUN6RCxvQkFBVSxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLFFBQVEsQ0FBQyxXQUFXLElBQUksQ0FBQztBQUM3RCxpQkFBUztBQUNULGFBQU87QUFDUCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7NkNBM0NDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsYUFBYSxrQkFDdkIsUUFBUSxFQUFFO21CQUFxQyxrQkFDL0MsSUFBSSxFQUFFLHNCQUNKLEtBQUssRUFBRSxjQUFjLHNCQUNyQixTQUFTLEVBQUUsV0FBVyxrQkFDdkIsY0FDRjs7b0ZBQ0k7QUFBQztBQUNVLFlBWlAsVUFBVTtBQUFHO0FBQUc7QUFDekIsc0JBV0csS0FBSyxTQUFDLFVBQVU7QUFDZjs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbkBEaXJlY3RpdmUoe1xuICBleHBvcnRBczogJ25neEF1dG9zaXplJyxcbiAgc2VsZWN0b3I6ICd0ZXh0YXJlYVthdXRvc2l6ZV0sIGlucHV0W2F1dG9zaXplXScsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25neC1hdXRvc2l6ZScsXG4gICAgJyhpbnB1dCknOiAnb25JbnB1dCgpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIEF1dG9zaXplRGlyZWN0aXZlIHtcbiAgQElucHV0KCdhdXRvc2l6ZScpXG4gIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVkO1xuICB9XG4gIHNldCBlbmFibGVkKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lbmFibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIHByaXZhdGUgX2VuYWJsZWQgPSBmYWxzZTtcblxuICBnZXQgbm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50Lm5vZGVOYW1lIGFzICdURVhUQVJFQScgfCAnSU5QVVQnO1xuICB9XG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgZWxlbWVudDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudD4pIHt9XG5cbiAgb25JbnB1dCgpIHtcbiAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xuICAgICAgY29uc3QgbmF0aXZlRWwgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcblxuICAgICAgaWYgKHRoaXMubm9kZU5hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgbmF0aXZlRWwuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuXG4gICAgICAgIGlmIChuYXRpdmVFbC5jbGllbnRIZWlnaHQgPCBuYXRpdmVFbC5zY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgICBuYXRpdmVFbC5zdHlsZS5oZWlnaHQgPSBgJHtuYXRpdmVFbC5zY3JvbGxIZWlnaHR9cHhgO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYXRpdmVFbC5zdHlsZS53aWR0aCA9ICdhdXRvJztcblxuICAgICAgICBpZiAobmF0aXZlRWwuY2xpZW50V2lkdGggPCBuYXRpdmVFbC5zY3JvbGxXaWR0aCkge1xuICAgICAgICAgIG5hdGl2ZUVsLnN0eWxlLndpZHRoID0gYCR7bmF0aXZlRWwuc2Nyb2xsV2lkdGh9cHhgO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=