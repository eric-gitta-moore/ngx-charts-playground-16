import { Component, Input, EventEmitter, Output, forwardRef, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceNumberProperty, coerceBooleanProperty } from '@angular/cdk/coercion';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/forms';

const _c0 = ["*"];
const CHKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
};
let nextId = 0;
export class CheckboxComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.id = `checkbox-${++nextId}`;
        this.diameter = '18px';
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.focus = new EventEmitter();
        this._value = false;
        this._tabindex = 0;
        this._disabled = false;
        this._round = false;
        this.onTouchedCallback = () => {
            // placeholder
        };
        this.onChangeCallback = (_) => {
            // placeholder
        };
    }
    get tabindex() {
        return this._tabindex;
    }
    set tabindex(v) {
        this._tabindex = coerceNumberProperty(v);
        this.cdr.markForCheck();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(v) {
        this._disabled = coerceBooleanProperty(v);
        this.cdr.markForCheck();
    }
    get round() {
        return this._round;
    }
    set round(v) {
        this._round = coerceBooleanProperty(v);
        this.cdr.markForCheck();
    }
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            this.cdr.markForCheck();
            this.onChangeCallback(this._value);
        }
    }
    get value() {
        return this._value;
    }
    onBlur(_) {
        this.onTouchedCallback();
    }
    toggle() {
        this.value = !this.value;
    }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
}
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
CheckboxComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: CheckboxComponent, selectors: [["ngx-checkbox"]], hostAttrs: [1, "ngx-checkbox"], hostVars: 4, hostBindings: function CheckboxComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("blur", function CheckboxComponent_blur_HostBindingHandler($event) { return ctx.onBlur($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("disabled", ctx.disabled)("round", ctx.round);
    } }, inputs: { id: "id", diameter: "diameter", tabindex: "tabindex", disabled: "disabled", round: "round", name: "name" }, outputs: { change: "change", blur: "blur", focus: "focus" }, exportAs: ["ngxCheckbox"], features: [ɵngcc0.ɵɵProvidersFeature([CHKBOX_VALUE_ACCESSOR])], ngContentSelectors: _c0, decls: 5, vars: 15, consts: [[1, "ngx-checkbox--label"], ["type", "checkbox", 3, "id", "ngModel", "disabled", "name", "tabIndex", "ngModelChange", "focus", "blur", "change"], [1, "ngx-checkbox--box"], [1, "ngx-checkbox--content"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "label", 0);
        ɵngcc0.ɵɵelementStart(1, "input", 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function CheckboxComponent_Template_input_ngModelChange_1_listener($event) { return ctx.value = $event; })("focus", function CheckboxComponent_Template_input_focus_1_listener($event) { return ctx.focus.emit($event); })("blur", function CheckboxComponent_Template_input_blur_1_listener($event) { return ctx.blur.emit($event); })("change", function CheckboxComponent_Template_input_change_1_listener($event) { return ctx.change.emit($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "div", 3);
        ɵngcc0.ɵɵprojection(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("id", ctx.id + "-chk")("ngModel", ctx.value)("disabled", ctx.disabled)("name", ctx.name + "-chk")("tabIndex", ctx.tabindex);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleProp("width", ctx.diameter)("height", ctx.diameter)("min-width", ctx.diameter)("min-height", ctx.diameter);
        ɵngcc0.ɵɵclassProp("checked", ctx.value);
    } }, directives: [ɵngcc1.CheckboxControlValueAccessor, ɵngcc1.NgControlStatus, ɵngcc1.NgModel], styles: [".ngx-checkbox{display:flex}.ngx-checkbox.disabled *{cursor:not-allowed}.ngx-checkbox.round .ngx-checkbox--box{border-radius:100%!important}.ngx-checkbox .ngx-checkbox--label{display:flex;cursor:pointer;margin-bottom:0}.ngx-checkbox .ngx-checkbox--label input{display:none}.ngx-checkbox .ngx-checkbox--label .ngx-checkbox--box{border-radius:2px;background-color:transparent;border:2px solid #455066;transition:transform .4s cubic-bezier(.45,1.8,.5,.75);-webkit-user-select:none;-moz-user-select:none;user-select:none;margin:auto 10px auto 0}.ngx-checkbox .ngx-checkbox--label .ngx-checkbox--box:after{position:absolute;top:calc(50% - 7px);left:calc(50% - 2px);width:6px;height:12px;content:\"\";border:solid #fff;border-width:0 2px 2px 0;transform:rotate(0deg) scale(0);transition:all .4s cubic-bezier(.45,1.8,.5,.75)}.ngx-checkbox .ngx-checkbox--label .ngx-checkbox--box.checked{background-color:#479eff;border-radius:2px;opacity:1;border:2px solid #479eff;transform:rotate(0deg) scale(1)}.ngx-checkbox .ngx-checkbox--label .ngx-checkbox--box.checked:after{transform:rotate(45deg) scale(1)}.ngx-checkbox .ngx-checkbox--label .ngx-checkbox--content{margin:auto 0;color:#cdd2dd}"], encapsulation: 2, changeDetection: 0 });
CheckboxComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
CheckboxComponent.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    diameter: [{ type: Input }],
    tabindex: [{ type: Input }],
    disabled: [{ type: Input }],
    round: [{ type: Input }],
    change: [{ type: Output }],
    blur: [{ type: Output }],
    focus: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-checkbox',
                exportAs: 'ngxCheckbox',
                template: "<label class=\"ngx-checkbox--label\">\n  <input\n    type=\"checkbox\"\n    [id]=\"id + '-chk'\"\n    [(ngModel)]=\"value\"\n    [disabled]=\"disabled\"\n    [name]=\"name + '-chk'\"\n    [tabIndex]=\"tabindex\"\n    (focus)=\"focus.emit($event)\"\n    (blur)=\"blur.emit($event)\"\n    (change)=\"change.emit($event)\"\n  />\n\n  <div\n    class=\"ngx-checkbox--box\"\n    [class.checked]=\"value\"\n    [style.width]=\"diameter\"\n    [style.height]=\"diameter\"\n    [style.min-width]=\"diameter\"\n    [style.min-height]=\"diameter\"\n  ></div>\n\n  <div class=\"ngx-checkbox--content\">\n    <ng-content></ng-content>\n  </div>\n</label>\n",
                host: {
                    class: 'ngx-checkbox',
                    '[class.disabled]': 'disabled',
                    '[class.round]': 'round',
                    '(blur)': 'onBlur($event)'
                },
                providers: [CHKBOX_VALUE_ACCESSOR],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-checkbox{display:flex}.ngx-checkbox.disabled *{cursor:not-allowed}.ngx-checkbox.round .ngx-checkbox--box{border-radius:100%!important}.ngx-checkbox .ngx-checkbox--label{display:flex;cursor:pointer;margin-bottom:0}.ngx-checkbox .ngx-checkbox--label input{display:none}.ngx-checkbox .ngx-checkbox--label .ngx-checkbox--box{border-radius:2px;background-color:transparent;border:2px solid #455066;transition:transform .4s cubic-bezier(.45,1.8,.5,.75);-webkit-user-select:none;-moz-user-select:none;user-select:none;margin:auto 10px auto 0}.ngx-checkbox .ngx-checkbox--label .ngx-checkbox--box:after{position:absolute;top:calc(50% - 7px);left:calc(50% - 2px);width:6px;height:12px;content:\"\";border:solid #fff;border-width:0 2px 2px 0;transform:rotate(0deg) scale(0);transition:all .4s cubic-bezier(.45,1.8,.5,.75)}.ngx-checkbox .ngx-checkbox--label .ngx-checkbox--box.checked{background-color:#479eff;border-radius:2px;opacity:1;border:2px solid #479eff;transform:rotate(0deg) scale(1)}.ngx-checkbox .ngx-checkbox--label .ngx-checkbox--box.checked:after{transform:rotate(45deg) scale(1)}.ngx-checkbox .ngx-checkbox--label .ngx-checkbox--content{margin:auto 0;color:#cdd2dd}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { id: [{
            type: Input
        }], diameter: [{
            type: Input
        }], change: [{
            type: Output
        }], blur: [{
            type: Output
        }], focus: [{
            type: Output
        }], tabindex: [{
            type: Input
        }], disabled: [{
            type: Input
        }], round: [{
            type: Input
        }], name: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxZQUFZLEVBQ1osTUFBTSxFQUNOLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBRXBGLE1BQU0scUJBQXFCLEdBQUc7QUFDOUIsSUFBRSxPQUFPLEVBQUUsaUJBQWlCO0FBQzVCLElBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztBQUNsRCxJQUFFLEtBQUssRUFBRSxJQUFJO0FBQ2IsQ0FBQyxDQUFDO0FBRUYsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBaUJmLE1BQU0sT0FBTyxpQkFBaUI7QUFBRyxJQXFEL0IsWUFBNkIsR0FBc0I7QUFBSSxRQUExQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBcEQzQyxPQUFFLEdBQUcsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDO0FBQ3ZDLFFBQ1csYUFBUSxHQUFHLE1BQU0sQ0FBQztBQUM3QixRQTRCWSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztBQUMvQyxRQUFZLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0FBQ2xELFFBQVksVUFBSyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7QUFDbkQsUUFhVSxXQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ3pC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LGFBQWE7T0FDdkI7Ozs7cU1BQXdDLGtCQUV4QyxJQUFJLEVBQUUsc0JBQ0osS0FBSyxFQUFFLGNBQWMsc0JBQ3JCLGtCQUFrQixFQUFFLFVBQVUsc0JBQzlCLGVBQWUsRUFBRSxPQUFPLHNCQUN4QixRQUFRLEVBQUUsZ0JBQWdCLGtCQUMzQixrQkFDRCxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxrQkFDbEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUksa0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7O2lDQUNoRDtrekNBQ0k7QUFBQztBQUEyQyxZQTVCL0MsaUJBQWlCO0FBQ2pCO0FBQUc7QUFDYSxpQkEyQmYsS0FBSztBQUFLLG1CQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUssdUJBRVYsS0FBSztBQUNOLHVCQVFDLEtBQUs7QUFDTixvQkFRQyxLQUFLO0FBQ04scUJBUUMsTUFBTTtBQUFLLG1CQUNYLE1BQU07QUFBSyxvQkFDWCxNQUFNO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIGZvcndhcmRSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBjb2VyY2VOdW1iZXJQcm9wZXJ0eSwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuY29uc3QgQ0hLQk9YX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2hlY2tib3hDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxubGV0IG5leHRJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1jaGVja2JveCcsXG4gIGV4cG9ydEFzOiAnbmd4Q2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGVja2JveC5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICduZ3gtY2hlY2tib3gnLFxuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgICAnW2NsYXNzLnJvdW5kXSc6ICdyb3VuZCcsXG4gICAgJyhibHVyKSc6ICdvbkJsdXIoJGV2ZW50KSdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbQ0hLQk9YX1ZBTFVFX0FDQ0VTU09SXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpIGlkID0gYGNoZWNrYm94LSR7KytuZXh0SWR9YDtcbiAgQElucHV0KCkgbmFtZT86IHN0cmluZztcbiAgQElucHV0KCkgZGlhbWV0ZXIgPSAnMThweCc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHRhYmluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl90YWJpbmRleDtcbiAgfVxuICBzZXQgdGFiaW5kZXgodjogbnVtYmVyKSB7XG4gICAgdGhpcy5fdGFiaW5kZXggPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2KTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCByb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcm91bmQ7XG4gIH1cbiAgc2V0IHJvdW5kKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yb3VuZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuICBAT3V0cHV0KCkgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgQE91dHB1dCgpIGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuXG4gIHNldCB2YWx1ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLl92YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlID0gZmFsc2U7XG4gIHByaXZhdGUgX3RhYmluZGV4ID0gMDtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcm91bmQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgb25CbHVyKF86IGFueSkge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2soKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnZhbHVlID0gIXRoaXMudmFsdWU7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxuXG4gIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgLy8gcGxhY2Vob2xkZXJcbiAgfTtcblxuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2sgPSAoXzogYW55KSA9PiB7XG4gICAgLy8gcGxhY2Vob2xkZXJcbiAgfTtcbn1cbiJdfQ==