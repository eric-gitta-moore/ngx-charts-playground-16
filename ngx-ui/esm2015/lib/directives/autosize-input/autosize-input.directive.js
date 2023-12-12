/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable security/detect-object-injection */
import { Directive, ElementRef, HostListener, Input, Optional, Renderer2 } from '@angular/core';
import { NgModel } from '@angular/forms';
import { filter, take } from 'rxjs/operators';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/forms';
export class AutoSizeInputDirective {
    constructor(element, ngModel, renderer) {
        this.element = element;
        this.ngModel = ngModel;
        this.renderer = renderer;
        this.extraWidth = 0;
        this.includeBorders = false;
        this.includePadding = true;
        this.includePlaceholder = true;
        this.maxWidth = -1;
        this.minWidth = -1;
        this.setParentWidth = false;
    }
    get borderWidth() {
        return this.includeBorders ? 2 * this._getPropertyWidth('border') : 0;
    }
    get paddingWidth() {
        return this.includePadding ? this._getPropertyWidth('padding-left') + this._getPropertyWidth('padding-right') : 0;
    }
    ngAfterContentChecked() {
        this.updateWidth();
    }
    ngAfterViewInit() {
        if (this.ngModel) {
            this.ngModel.valueChanges
                .pipe(filter(val => !!val), take(1))
                .subscribe(() => this.updateWidth());
        }
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    onInput() {
        this.updateWidth();
    }
    setWidth(width) {
        const element = this.element.nativeElement;
        const parent = this.renderer.parentNode(element);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        this.setParentWidth
            ? this.renderer.setStyle(parent, 'width', width + 'px')
            : this.renderer.setStyle(element, 'width', width + 'px');
    }
    setWidthUsingText(text) {
        this.setWidth(this.textWidth(text) + this.extraWidth + this.borderWidth + this.paddingWidth);
    }
    textWidth(value) {
        const ctx = this.renderer.createElement('canvas').getContext('2d');
        const style = window.getComputedStyle(this.element.nativeElement, '');
        const fontStyle = style.getPropertyValue('font-style');
        const fontVariant = style.getPropertyValue('font-variant');
        const fontWeight = style.getPropertyValue('font-weight');
        const fontSize = style.getPropertyValue('font-size');
        const fontFamily = style.getPropertyValue('font-family');
        // font string format: {normal, normal, 700, 20px, Roboto, "Helvetica Neue", sans-serif}
        ctx.font = fontStyle + ' ' + fontVariant + ' ' + fontWeight + ' ' + fontSize + ' ' + fontFamily;
        return ctx.measureText(value).width;
    }
    updateWidth() {
        const inputText = this.ngModel ? this.ngModel.value : this._getProperty('value');
        const placeHolderText = this._getProperty('placeholder');
        const inputTextWidth = this.textWidth(inputText) + this.extraWidth + this.borderWidth + this.paddingWidth;
        const setMinWidth = this.minWidth > 0 && this.minWidth > inputTextWidth;
        const setPlaceHolderWidth = this.includePlaceholder &&
            placeHolderText.length > 0 &&
            this.textWidth(placeHolderText) > this.textWidth(inputText);
        const setMaxWidth = this.maxWidth > 0 && this.maxWidth < inputTextWidth;
        if (setMinWidth) {
            this.setWidth(this.minWidth);
        }
        else if (setPlaceHolderWidth) {
            this.setWidthUsingText(placeHolderText);
        }
        else if (setMaxWidth) {
            this.setWidth(this.maxWidth);
        }
        else {
            this.setWidthUsingText(inputText);
        }
    }
    _getProperty(property) {
        try {
            return this.element.nativeElement[property];
        }
        catch (error) {
            return '';
        }
    }
    _getPropertyWidth(property) {
        const width = window.getComputedStyle(this.element.nativeElement, '').getPropertyValue(property);
        return parseInt(width, 10);
    }
}
AutoSizeInputDirective.ɵfac = function AutoSizeInputDirective_Factory(t) { return new (t || AutoSizeInputDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgModel, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
AutoSizeInputDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: AutoSizeInputDirective, selectors: [["", "autoSizeInput", ""]], hostBindings: function AutoSizeInputDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("input", function AutoSizeInputDirective_input_HostBindingHandler() { return ctx.onInput(); });
    } }, inputs: { extraWidth: "extraWidth", includeBorders: "includeBorders", includePadding: "includePadding", includePlaceholder: "includePlaceholder", maxWidth: "maxWidth", minWidth: "minWidth", setParentWidth: "setParentWidth" } });
AutoSizeInputDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgModel, decorators: [{ type: Optional }] },
    { type: Renderer2 }
];
AutoSizeInputDirective.propDecorators = {
    extraWidth: [{ type: Input }],
    includeBorders: [{ type: Input }],
    includePadding: [{ type: Input }],
    includePlaceholder: [{ type: Input }],
    maxWidth: [{ type: Input }],
    minWidth: [{ type: Input }],
    setParentWidth: [{ type: Input }],
    onInput: [{ type: HostListener, args: ['input',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AutoSizeInputDirective, [{
        type: Directive,
        args: [{
                selector: '[autoSizeInput]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.NgModel, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.Renderer2 }]; }, { extraWidth: [{
            type: Input
        }], includeBorders: [{
            type: Input
        }], includePadding: [{
            type: Input
        }], includePlaceholder: [{
            type: Input
        }], maxWidth: [{
            type: Input
        }], minWidth: [{
            type: Input
        }], setParentWidth: [{
            type: Input
        }], 
    // eslint-disable-next-line @typescript-eslint/member-ordering
    onInput: [{
            type: HostListener,
            args: ['input']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3NpemUtaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9kaXJlY3RpdmVzL2F1dG9zaXplLWlucHV0L2F1dG9zaXplLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7QUFDN0QscURBQXFEO0FBQ3JELE9BQU8sRUFHTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBSzlDLE1BQU0sT0FBTyxzQkFBc0I7QUFBRyxJQVNwQyxZQUFvQixPQUFtQixFQUFzQixPQUFnQixFQUFVLFFBQW1CO0FBQUksUUFBMUYsWUFBTyxHQUFQLE9BQU8sQ0FBWTtBQUFDLFFBQXFCLFlBQU8sR0FBUCxPQUFPLENBQVM7QUFBQyxRQUFTLGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQVJsRyxlQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLFFBQVcsbUJBQWMsR0FBRyxLQUFLLENBQUM7QUFDbEMsUUFBVyxtQkFBYyxHQUFHLElBQUksQ0FBQztBQUNqQyxRQUFXLHVCQUFrQixHQUFHLElBQUksQ0FBQztBQUNyQyxRQUFXLGFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN6QixRQUFXLGFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN6QixRQUFXLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0FBQ2xDLElBQytHLENBQUM7QUFDaEgsSUFDRSxJQUFJLFdBQVc7QUFBSyxRQUNsQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJ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QUFLO0FBQUssaUNBQ1YsS0FBSztBQUFLLHVCQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUssNkJBQ1YsS0FBSztBQUFLLHNCQTRCVixZQUFZLFNBQUMsT0FBTztBQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBzZWN1cml0eS9kZXRlY3Qtb2JqZWN0LWluamVjdGlvbiAqL1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F1dG9TaXplSW5wdXRdJ1xufSlcbmV4cG9ydCBjbGFzcyBBdXRvU2l6ZUlucHV0RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGV4dHJhV2lkdGggPSAwO1xuICBASW5wdXQoKSBpbmNsdWRlQm9yZGVycyA9IGZhbHNlO1xuICBASW5wdXQoKSBpbmNsdWRlUGFkZGluZyA9IHRydWU7XG4gIEBJbnB1dCgpIGluY2x1ZGVQbGFjZWhvbGRlciA9IHRydWU7XG4gIEBJbnB1dCgpIG1heFdpZHRoID0gLTE7XG4gIEBJbnB1dCgpIG1pbldpZHRoID0gLTE7XG4gIEBJbnB1dCgpIHNldFBhcmVudFdpZHRoID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBAT3B0aW9uYWwoKSBwcml2YXRlIG5nTW9kZWw6IE5nTW9kZWwsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBnZXQgYm9yZGVyV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlQm9yZGVycyA/IDIgKiB0aGlzLl9nZXRQcm9wZXJ0eVdpZHRoKCdib3JkZXInKSA6IDA7XG4gIH1cblxuICBnZXQgcGFkZGluZ1dpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuaW5jbHVkZVBhZGRpbmcgPyB0aGlzLl9nZXRQcm9wZXJ0eVdpZHRoKCdwYWRkaW5nLWxlZnQnKSArIHRoaXMuX2dldFByb3BlcnR5V2lkdGgoJ3BhZGRpbmctcmlnaHQnKSA6IDA7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVXaWR0aCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nTW9kZWwpIHtcbiAgICAgIHRoaXMubmdNb2RlbC52YWx1ZUNoYW5nZXNcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKHZhbCA9PiAhIXZhbCksXG4gICAgICAgICAgdGFrZSgxKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVXaWR0aCgpKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZ1xuICBASG9zdExpc3RlbmVyKCdpbnB1dCcpXG4gIG9uSW5wdXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVXaWR0aCgpO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUoZWxlbWVudCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICB0aGlzLnNldFBhcmVudFdpZHRoXG4gICAgICA/IHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocGFyZW50LCAnd2lkdGgnLCB3aWR0aCArICdweCcpXG4gICAgICA6IHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWxlbWVudCwgJ3dpZHRoJywgd2lkdGggKyAncHgnKTtcbiAgfVxuXG4gIHNldFdpZHRoVXNpbmdUZXh0KHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2V0V2lkdGgodGhpcy50ZXh0V2lkdGgodGV4dCkgKyB0aGlzLmV4dHJhV2lkdGggKyB0aGlzLmJvcmRlcldpZHRoICsgdGhpcy5wYWRkaW5nV2lkdGgpO1xuICB9XG5cbiAgdGV4dFdpZHRoKHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnJyk7XG4gICAgY29uc3QgZm9udFN0eWxlID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC1zdHlsZScpO1xuICAgIGNvbnN0IGZvbnRWYXJpYW50ID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC12YXJpYW50Jyk7XG4gICAgY29uc3QgZm9udFdlaWdodCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtd2VpZ2h0Jyk7XG4gICAgY29uc3QgZm9udFNpemUgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LXNpemUnKTtcbiAgICBjb25zdCBmb250RmFtaWx5ID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC1mYW1pbHknKTtcblxuICAgIC8vIGZvbnQgc3RyaW5nIGZvcm1hdDoge25vcm1hbCwgbm9ybWFsLCA3MDAsIDIwcHgsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfVxuICAgIGN0eC5mb250ID0gZm9udFN0eWxlICsgJyAnICsgZm9udFZhcmlhbnQgKyAnICcgKyBmb250V2VpZ2h0ICsgJyAnICsgZm9udFNpemUgKyAnICcgKyBmb250RmFtaWx5O1xuXG4gICAgcmV0dXJuIGN0eCEubWVhc3VyZVRleHQodmFsdWUpLndpZHRoO1xuICB9XG5cbiAgdXBkYXRlV2lkdGgoKTogdm9pZCB7XG4gICAgY29uc3QgaW5wdXRUZXh0ID0gdGhpcy5uZ01vZGVsID8gdGhpcy5uZ01vZGVsLnZhbHVlIDogdGhpcy5fZ2V0UHJvcGVydHkoJ3ZhbHVlJyk7XG4gICAgY29uc3QgcGxhY2VIb2xkZXJUZXh0ID0gdGhpcy5fZ2V0UHJvcGVydHkoJ3BsYWNlaG9sZGVyJyk7XG4gICAgY29uc3QgaW5wdXRUZXh0V2lkdGggPSB0aGlzLnRleHRXaWR0aChpbnB1dFRleHQpICsgdGhpcy5leHRyYVdpZHRoICsgdGhpcy5ib3JkZXJXaWR0aCArIHRoaXMucGFkZGluZ1dpZHRoO1xuICAgIGNvbnN0IHNldE1pbldpZHRoID0gdGhpcy5taW5XaWR0aCA+IDAgJiYgdGhpcy5taW5XaWR0aCA+IGlucHV0VGV4dFdpZHRoO1xuICAgIGNvbnN0IHNldFBsYWNlSG9sZGVyV2lkdGggPVxuICAgICAgdGhpcy5pbmNsdWRlUGxhY2Vob2xkZXIgJiZcbiAgICAgIHBsYWNlSG9sZGVyVGV4dC5sZW5ndGggPiAwICYmXG4gICAgICB0aGlzLnRleHRXaWR0aChwbGFjZUhvbGRlclRleHQpID4gdGhpcy50ZXh0V2lkdGgoaW5wdXRUZXh0KTtcbiAgICBjb25zdCBzZXRNYXhXaWR0aCA9IHRoaXMubWF4V2lkdGggPiAwICYmIHRoaXMubWF4V2lkdGggPCBpbnB1dFRleHRXaWR0aDtcblxuICAgIGlmIChzZXRNaW5XaWR0aCkge1xuICAgICAgdGhpcy5zZXRXaWR0aCh0aGlzLm1pbldpZHRoKTtcbiAgICB9IGVsc2UgaWYgKHNldFBsYWNlSG9sZGVyV2lkdGgpIHtcbiAgICAgIHRoaXMuc2V0V2lkdGhVc2luZ1RleHQocGxhY2VIb2xkZXJUZXh0KTtcbiAgICB9IGVsc2UgaWYgKHNldE1heFdpZHRoKSB7XG4gICAgICB0aGlzLnNldFdpZHRoKHRoaXMubWF4V2lkdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFdpZHRoVXNpbmdUZXh0KGlucHV0VGV4dCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UHJvcGVydHkocHJvcGVydHk6ICd2YWx1ZScgfCAncGxhY2Vob2xkZXInKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudFtwcm9wZXJ0eV07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRQcm9wZXJ0eVdpZHRoKHByb3BlcnR5OiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICcnKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KTtcbiAgICByZXR1cm4gcGFyc2VJbnQod2lkdGgsIDEwKTtcbiAgfVxufVxuIl19