import { Component, EventEmitter, Input, Output, ViewEncapsulation, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
const RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioButtonComponent),
    multi: true
};
let nextId = 0;
export class RadioButtonComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.UNIQUE_ID = `ngx-radio-${++nextId}`;
        this.id = this.UNIQUE_ID;
        this.name = this.UNIQUE_ID;
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.focus = new EventEmitter();
        this.groupDisabled = false;
        this._checked = false;
        this._value = false;
        this._disabled = false;
        this._tabindex = 0;
    }
    get tabindex() {
        return this._tabindex;
    }
    set tabindex(tabindex) {
        this._tabindex = coerceNumberProperty(tabindex);
    }
    get checked() {
        return this._checked;
    }
    set checked(checked) {
        checked = coerceBooleanProperty(checked);
        if (this._checked !== checked) {
            this._checked = checked;
            this.onChangeCallback(this._value);
        }
        this.cdr.markForCheck();
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            this.onChangeCallback(this._value);
        }
    }
    get disabled() {
        return this._disabled || this.groupDisabled;
    }
    set disabled(disabled) {
        this._disabled = coerceBooleanProperty(disabled);
    }
    _onInputChange(event) {
        event.stopPropagation();
        this.checked = true;
    }
    writeValue(value) {
        this.value = value;
    }
    onFocus(e) {
        this.focus.emit(e);
        this.onTouchedCallback();
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    onChangeCallback(value) {
        if (this.checked) {
            this.change.emit(value);
        }
    }
    onTouchedCallback() {
        // placeholder
    }
}
RadioButtonComponent.ɵfac = function RadioButtonComponent_Factory(t) { return new (t || RadioButtonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
RadioButtonComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: RadioButtonComponent, selectors: [["ngx-radiobutton"]], hostAttrs: [1, "ngx-radiobutton"], hostVars: 2, hostBindings: function RadioButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("disabled", ctx.disabled);
    } }, inputs: { id: "id", name: "name", tabindex: "tabindex", checked: "checked", value: "value", disabled: "disabled" }, outputs: { change: "change", blur: "blur", focus: "focus" }, exportAs: ["ngxRadiobutton"], features: [ɵngcc0.ɵɵProvidersFeature([RADIO_VALUE_ACCESSOR])], ngContentSelectors: _c0, decls: 5, vars: 5, consts: [[1, "radio-label"], ["type", "radio", 1, "radio-input", 3, "id", "checked", "disabled", "name", "tabIndex", "focus", "blur", "change"], [1, "checkmark"], [1, "radio-label--content"]], template: function RadioButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "label", 0);
        ɵngcc0.ɵɵelementStart(1, "input", 1);
        ɵngcc0.ɵɵlistener("focus", function RadioButtonComponent_Template_input_focus_1_listener($event) { return ctx.onFocus($event); })("blur", function RadioButtonComponent_Template_input_blur_1_listener($event) { return ctx.blur.emit($event); })("change", function RadioButtonComponent_Template_input_change_1_listener($event) { return ctx._onInputChange($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(2, "span", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵprojection(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("id", ctx.id)("checked", ctx.checked)("disabled", ctx.disabled)("name", ctx.name)("tabIndex", ctx.tabindex);
    } }, styles: [".ngx-radiobutton{display:block}.ngx-radiobutton .radio-label{display:block;position:relative;padding-left:1.5em;margin:0 .8rem 0 0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ngx-radiobutton .radio-label--content{color:#cdd2dd}.ngx-radiobutton .radio-label input{position:absolute;opacity:0}.ngx-radiobutton .checkmark{position:absolute;top:.25em;left:0;height:1em;width:1em;background-color:transparent;border-radius:50%;border:1px solid #6f809e;opacity:1;transition:background-color .3s ease,opacity .3s ease}.ngx-radiobutton .radio-label:hover input~.checkmark{background-color:#2196f3;border:1px solid #2196f3;opacity:.3}.ngx-radiobutton .radio-label .checkmark:after,.ngx-radiobutton .radio-label:hover .checkmark:after{content:\"\";position:absolute;display:block;opacity:0;top:0;left:0;width:.25em;height:.25em;transform:translate3d(.32em,.32em,0);border-radius:50%;background:#fff;box-shadow:0 1px 0 rgba(0,0,0,.25);transition:opacity .5s ease}.ngx-radiobutton.disabled .radio-input:after,.ngx-radiobutton.disabled .radio-input:before,.ngx-radiobutton.disabled .radio-label{cursor:not-allowed}.ngx-radiobutton.disabled .radio-label:hover input~.checkmark{background-color:transparent;border:1px solid #6f809e;opacity:1}.ngx-radiobutton.disabled .radio-label:hover .checkmark:after{opacity:0}.ngx-radiobutton.disabled .radio-label input:checked~.checkmark,.ngx-radiobutton .radio-label input:checked~.checkmark{background-color:#2196f3;border:1px solid #2196f3;opacity:1}.ngx-radiobutton.disabled .radio-label input:checked~.checkmark:after,.ngx-radiobutton .radio-label:hover .checkmark:after,.ngx-radiobutton .radio-label input:checked~.checkmark:after{opacity:1}"], encapsulation: 2, changeDetection: 0 });
RadioButtonComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
RadioButtonComponent.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    tabindex: [{ type: Input }],
    checked: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    blur: [{ type: Output }],
    focus: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(RadioButtonComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxRadiobutton',
                selector: 'ngx-radiobutton',
                template: "<label class=\"radio-label\">\n  <input\n    type=\"radio\"\n    class=\"radio-input\"\n    [id]=\"id\"\n    [checked]=\"checked\"\n    [disabled]=\"disabled\"\n    [name]=\"name\"\n    [tabIndex]=\"tabindex\"\n    (focus)=\"onFocus($event)\"\n    (blur)=\"blur.emit($event)\"\n    (change)=\"_onInputChange($event)\"\n  />\n  <span class=\"checkmark\"></span>\n  <div class=\"radio-label--content\">\n    <ng-content></ng-content>\n  </div>\n</label>\n",
                host: {
                    class: 'ngx-radiobutton',
                    '[class.disabled]': 'disabled'
                },
                providers: [RADIO_VALUE_ACCESSOR],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-radiobutton{display:block}.ngx-radiobutton .radio-label{display:block;position:relative;padding-left:1.5em;margin:0 .8rem 0 0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ngx-radiobutton .radio-label--content{color:#cdd2dd}.ngx-radiobutton .radio-label input{position:absolute;opacity:0}.ngx-radiobutton .checkmark{position:absolute;top:.25em;left:0;height:1em;width:1em;background-color:transparent;border-radius:50%;border:1px solid #6f809e;opacity:1;transition:background-color .3s ease,opacity .3s ease}.ngx-radiobutton .radio-label:hover input~.checkmark{background-color:#2196f3;border:1px solid #2196f3;opacity:.3}.ngx-radiobutton .radio-label .checkmark:after,.ngx-radiobutton .radio-label:hover .checkmark:after{content:\"\";position:absolute;display:block;opacity:0;top:0;left:0;width:.25em;height:.25em;transform:translate3d(.32em,.32em,0);border-radius:50%;background:#fff;box-shadow:0 1px 0 rgba(0,0,0,.25);transition:opacity .5s ease}.ngx-radiobutton.disabled .radio-input:after,.ngx-radiobutton.disabled .radio-input:before,.ngx-radiobutton.disabled .radio-label{cursor:not-allowed}.ngx-radiobutton.disabled .radio-label:hover input~.checkmark{background-color:transparent;border:1px solid #6f809e;opacity:1}.ngx-radiobutton.disabled .radio-label:hover .checkmark:after{opacity:0}.ngx-radiobutton.disabled .radio-label input:checked~.checkmark,.ngx-radiobutton .radio-label input:checked~.checkmark{background-color:#2196f3;border:1px solid #2196f3;opacity:1}.ngx-radiobutton.disabled .radio-label input:checked~.checkmark:after,.ngx-radiobutton .radio-label:hover .checkmark:after,.ngx-radiobutton .radio-label input:checked~.checkmark:after{opacity:1}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { id: [{
            type: Input
        }], name: [{
            type: Input
        }], change: [{
            type: Output
        }], blur: [{
            type: Output
        }], focus: [{
            type: Output
        }], tabindex: [{
            type: Input
        }], checked: [{
            type: Input
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL3JhZGlvYnV0dG9uL3JhZGlvYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFFcEYsTUFBTSxvQkFBb0IsR0FBRztBQUM3QixJQUFFLE9BQU8sRUFBRSxpQkFBaUI7QUFDNUIsSUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixDQUFDO0FBQ3JELElBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixDQUFDLENBQUM7QUFFRixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFlZixNQUFNLE9BQU8sb0JBQW9CO0FBQUcsSUEyRGxDLFlBQTZCLEdBQXNCO0FBQUksUUFBMUIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7QUFBQyxRQTFEM0MsY0FBUyxHQUFHLGFBQWEsRUFBRSxNQUFNLEVBQUUsQ0FBQztBQUMvQyxRQUNXLE9BQUUsR0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQ3ZDLFFBQVcsU0FBSSxHQUFXLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDekMsUUEyQ1ksV0FBTSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7QUFDakQsUUFBWSxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztBQUM3QyxRQUFZLFVBQUssR0FB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QUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNVLGlCQUFpQjtBQUMzQixRQUFJLGNBQWM7QUFDbEIsSUFBRSxDQUFDO0FBQ0g7Z0RBekdDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsZ0JBQWdCLGtCQUMxQixRQUFRLEVBQUUsaUJBQWlCO09BQzNCOzs2SkFBMkMsa0JBRTNDLElBQUksRUFBRSxzQkFDSixLQUFLLEVBQUUsaUJBQWlCLHNCQUN4QixrQkFBa0IsRUFBRSxVQUFVLGtCQUMvQixrQkFDRCxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxrQkFDakMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksa0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzs7Ozs7Ozs7Ozs7OzttdUJBQ2hELHdnQ0FDSTtBQUFDO0FBQThDLFlBMUJsRCxpQkFBaUI7QUFDakI7QUFBRztBQUNnQixpQkEyQmxCLEtBQUs7QUFBSyxtQkFDVixLQUFLO0FBQUssdUJBRVYsS0FBSztBQUNOLHNCQU9DLEtBQUs7QUFDTixvQkFjQyxLQUFLO0FBQ04sdUJBVUMsS0FBSztBQUNOLHFCQU9DLE1BQU07QUFBSyxtQkFDWCxNQUFNO0FBQUssb0JBQ1gsTUFBTTtBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIGZvcndhcmRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSwgY29lcmNlTnVtYmVyUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5jb25zdCBSQURJT19WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhZGlvQnV0dG9uQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbmxldCBuZXh0SWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICduZ3hSYWRpb2J1dHRvbicsXG4gIHNlbGVjdG9yOiAnbmd4LXJhZGlvYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGlvYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmFkaW9idXR0b24uY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbmd4LXJhZGlvYnV0dG9uJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbUkFESU9fVkFMVUVfQUNDRVNTT1JdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcmVhZG9ubHkgVU5JUVVFX0lEID0gYG5neC1yYWRpby0keysrbmV4dElkfWA7XG5cbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9IHRoaXMuVU5JUVVFX0lEO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSB0aGlzLlVOSVFVRV9JRDtcblxuICBASW5wdXQoKVxuICBnZXQgdGFiaW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYmluZGV4O1xuICB9XG4gIHNldCB0YWJpbmRleCh0YWJpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGFiaW5kZXggPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh0YWJpbmRleCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgY2hlY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tlZDtcbiAgfVxuICBzZXQgY2hlY2tlZChjaGVja2VkOiBib29sZWFuKSB7XG4gICAgY2hlY2tlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShjaGVja2VkKTtcblxuICAgIGlmICh0aGlzLl9jaGVja2VkICE9PSBjaGVja2VkKSB7XG4gICAgICB0aGlzLl9jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLl92YWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5fdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQgfHwgdGhpcy5ncm91cERpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGRpc2FibGVkKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcbiAgQE91dHB1dCgpIGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuXG4gIHB1YmxpYyBncm91cERpc2FibGVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfY2hlY2tlZCA9IGZhbHNlO1xuICBwcml2YXRlIF92YWx1ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF90YWJpbmRleCA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIF9vbklucHV0Q2hhbmdlKGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuY2hlY2tlZCA9IHRydWU7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBvbkZvY3VzKGU6IEZvY3VzRXZlbnQpIHtcbiAgICB0aGlzLmZvY3VzLmVtaXQoZSk7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjaygpIHtcbiAgICAvLyBwbGFjZWhvbGRlclxuICB9XG59XG4iXX0=