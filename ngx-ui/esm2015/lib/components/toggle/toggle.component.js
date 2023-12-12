import { Component, Input, ViewEncapsulation, forwardRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/forms';
import * as ɵngcc2 from '@angular/common';

function ToggleComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 7);
} }
function ToggleComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 8);
} }
function ToggleComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 9);
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r3.label, ɵngcc0.ɵɵsanitizeHtml);
} }
const _c0 = ["*"];
const TOGGLE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ToggleComponent),
    multi: true
};
let nextId = 0;
export class ToggleComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.id = `toggle-${++nextId}`;
        this.name = null;
        this._value = false;
        this._disabled = false;
        this._required = false;
        this._showIcons = true;
        this._tabIndex = 0;
        this.onTouchedCallback = () => {
            // placeholder
        };
        this.onChangeCallback = (_) => {
            // placeholder
        };
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this._disabled = coerceBooleanProperty(disabled);
    }
    get required() {
        return this._required;
    }
    set required(required) {
        this._required = coerceBooleanProperty(required);
    }
    get showIcons() {
        return this._showIcons;
    }
    set showIcons(showIcons) {
        this._showIcons = coerceBooleanProperty(showIcons);
    }
    get tabIndex() {
        return this._tabIndex;
    }
    set tabIndex(tabIndex) {
        this._tabIndex = coerceNumberProperty(tabIndex);
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (this.value !== value) {
            this._value = value;
            this.onChangeCallback(value);
            this.cdr.markForCheck();
        }
    }
    get getHostCssClasses() {
        return 'ngx-toggle';
    }
    get getDisabled() {
        return this.disabled ? 'disabled' : '';
    }
    toggle() {
        this.value = !this.value;
    }
    onBlur() {
        this.onTouchedCallback();
    }
    writeValue(val) {
        if (val === null || val === undefined) {
            val = false;
        }
        if (val !== this._value) {
            this.value = val;
            this.cdr.markForCheck();
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
}
ToggleComponent.ɵfac = function ToggleComponent_Factory(t) { return new (t || ToggleComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
ToggleComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: ToggleComponent, selectors: [["ngx-toggle"]], hostAttrs: [1, "ngx-toggle"], hostVars: 2, hostBindings: function ToggleComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("disabled", ctx.getDisabled);
    } }, inputs: { id: "id", name: "name", disabled: "disabled", required: "required", showIcons: "showIcons", tabIndex: "tabIndex", label: "label" }, exportAs: ["ngxToggle"], features: [ɵngcc0.ɵɵProvidersFeature([TOGGLE_VALUE_ACCESSOR])], ngContentSelectors: _c0, decls: 9, vars: 11, consts: [["type", "checkbox", 1, "ngx-toggle-input", 3, "id", "ngModel", "required", "tabIndex", "disabled", "name", "ngModelChange", "blur"], ["input", ""], [1, "ngx-toggle-label"], ["class", "ngx-icon ngx-check", 4, "ngIf"], ["class", "ngx-icon ngx-x", 4, "ngIf"], [1, "ngx-toggle-text"], [3, "innerHTML", 4, "ngIf"], [1, "ngx-icon", "ngx-check"], [1, "ngx-icon", "ngx-x"], [3, "innerHTML"]], template: function ToggleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "input", 0, 1);
        ɵngcc0.ɵɵlistener("ngModelChange", function ToggleComponent_Template_input_ngModelChange_1_listener($event) { return ctx.value = $event; })("blur", function ToggleComponent_Template_input_blur_1_listener() { return ctx.onBlur(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "label", 2);
        ɵngcc0.ɵɵtemplate(4, ToggleComponent_span_4_Template, 1, 0, "span", 3);
        ɵngcc0.ɵɵtemplate(5, ToggleComponent_span_5_Template, 1, 0, "span", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "label", 5);
        ɵngcc0.ɵɵtemplate(7, ToggleComponent_span_7_Template, 1, 1, "span", 6);
        ɵngcc0.ɵɵprojection(8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("id", ctx.id)("ngModel", ctx.value)("required", ctx.required)("tabIndex", ctx.tabIndex)("disabled", ctx.disabled)("name", ctx.name);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵattribute("for", ctx.id);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showIcons && ctx.value);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showIcons && !ctx.value);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("for", ctx.id);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.label);
    } }, directives: [ɵngcc1.CheckboxControlValueAccessor, ɵngcc1.CheckboxRequiredValidator, ɵngcc1.NgControlStatus, ɵngcc1.NgModel, ɵngcc2.NgIf], styles: [".ngx-toggle{display:block;margin-bottom:1rem;margin-top:18px}.ngx-toggle.disabled .ngx-toggle-label,.ngx-toggle.disabled .ngx-toggle-text{cursor:not-allowed}.ngx-toggle .ngx-toggle-input{display:none}.ngx-toggle .ngx-toggle-input:checked~.ngx-toggle-label{background:#0052ad}.ngx-toggle .ngx-toggle-input:checked~.ngx-toggle-label:after{left:15px;background:#1483ff}.ngx-toggle .ngx-toggle-label{position:relative;display:block;height:14px;width:34px;background:#07080b;border-radius:100px;cursor:pointer;transition:all .3s ease;display:inline-block;vertical-align:middle;margin-bottom:3px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ngx-toggle .ngx-toggle-label:after{position:absolute;left:-2px;top:-3px;display:block;height:20px;width:20px;border-radius:100px;background:#72819f;box-shadow:0 3px 3px #07080b;content:\"\";transition:all .3s ease}.ngx-toggle .ngx-toggle-label .ngx-icon{display:flex}.ngx-toggle .ngx-toggle-label .ngx-icon.ngx-check{opacity:.5;color:#fff;padding:2.5px 4px;font-size:9px}.ngx-toggle .ngx-toggle-label .ngx-icon.ngx-x{flex-direction:row-reverse;opacity:.7;color:#72819f;padding:4px 5px;font-size:7px;font-weight:900}.ngx-toggle .ngx-toggle-text{cursor:pointer;padding-left:5px;color:#cdd2dd}"], encapsulation: 2, changeDetection: 0 });
ToggleComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
ToggleComponent.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    label: [{ type: Input }],
    disabled: [{ type: Input }],
    required: [{ type: Input }],
    showIcons: [{ type: Input }],
    tabIndex: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ToggleComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-toggle',
                exportAs: 'ngxToggle',
                template: "<div>\n  <input\n    #input\n    class=\"ngx-toggle-input\"\n    type=\"checkbox\"\n    [id]=\"id\"\n    [(ngModel)]=\"value\"\n    [required]=\"required\"\n    [tabIndex]=\"tabIndex\"\n    [disabled]=\"disabled\"\n    [name]=\"name\"\n    (blur)=\"onBlur()\"\n  />\n  <label [attr.for]=\"id\" class=\"ngx-toggle-label\">\n    <span *ngIf=\"showIcons && value\" class=\"ngx-icon ngx-check\"></span>\n    <span *ngIf=\"showIcons && !value\" class=\"ngx-icon ngx-x\"></span>\n  </label>\n  <label [attr.for]=\"id\" class=\"ngx-toggle-text\">\n    <span *ngIf=\"label\" [innerHTML]=\"label\"></span>\n    <ng-content></ng-content>\n  </label>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [TOGGLE_VALUE_ACCESSOR],
                host: {
                    class: 'ngx-toggle',
                    '[class.disabled]': 'getDisabled'
                },
                styles: [".ngx-toggle{display:block;margin-bottom:1rem;margin-top:18px}.ngx-toggle.disabled .ngx-toggle-label,.ngx-toggle.disabled .ngx-toggle-text{cursor:not-allowed}.ngx-toggle .ngx-toggle-input{display:none}.ngx-toggle .ngx-toggle-input:checked~.ngx-toggle-label{background:#0052ad}.ngx-toggle .ngx-toggle-input:checked~.ngx-toggle-label:after{left:15px;background:#1483ff}.ngx-toggle .ngx-toggle-label{position:relative;display:block;height:14px;width:34px;background:#07080b;border-radius:100px;cursor:pointer;transition:all .3s ease;display:inline-block;vertical-align:middle;margin-bottom:3px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ngx-toggle .ngx-toggle-label:after{position:absolute;left:-2px;top:-3px;display:block;height:20px;width:20px;border-radius:100px;background:#72819f;box-shadow:0 3px 3px #07080b;content:\"\";transition:all .3s ease}.ngx-toggle .ngx-toggle-label .ngx-icon{display:flex}.ngx-toggle .ngx-toggle-label .ngx-icon.ngx-check{opacity:.5;color:#fff;padding:2.5px 4px;font-size:9px}.ngx-toggle .ngx-toggle-label .ngx-icon.ngx-x{flex-direction:row-reverse;opacity:.7;color:#72819f;padding:4px 5px;font-size:7px;font-weight:900}.ngx-toggle .ngx-toggle-text{cursor:pointer;padding-left:5px;color:#cdd2dd}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { id: [{
            type: Input
        }], name: [{
            type: Input
        }], disabled: [{
            type: Input
        }], required: [{
            type: Input
        }], showIcons: [{
            type: Input
        }], tabIndex: [{
            type: Input
        }], label: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy90b2dnbGUvdG9nZ2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsRUFDakIsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEYsTUFBTSxxQkFBcUIsR0FBUTtBQUNuQyxJQUFFLE9BQU8sRUFBRSxpQkFBaUI7QUFDNUIsSUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQztBQUNoRCxJQUFFLEtBQUssRUFBRSxJQUFJO0FBQ2IsQ0FBQyxDQUFDO0FBRUYsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBZWYsTUFBTSxPQUFPLGVBQWU7QUFBRyxJQWdFN0IsWUFBNkIsR0FBc0I7QUFBSSxRQUExQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBL0QzQyxPQUFFLEdBQUcsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0FBQ3JDLFFBQVcsU0FBSSxHQUFXLElBQUksQ0FBQztBQUMvQixRQXVEVSxXQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLFFBQVUsY0FBUyxHQUFHLEtBQUssQ0FBQztBQUM1QixRQUFVLGNBQVMsR0FBRyxLQUFLLENBQUM7QUFDNUIsUUFBVSxlQUFVLEdBQUcsSUFBSSxDQUFDO0FBQzVCLFFBQVUsY0FBUyxHQUFHLENBQUMsQ0FBQztBQUN4QixRQThCVSxzQkFBaUIsR0FB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QUFJLFFBQzNDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFDL0IsSUFBRSxDQUFDO0FBQ0gsSUFDRSxpQkFBaUIsQ0FBQyxFQUFjO0FBQUksUUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztBQUNoQyxJQUFFLENBQUM7QUFDSDsyQ0F6R0MsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxZQUFZLGtCQUN0QixRQUFRLEVBQUUsV0FBVztPQUNyQjs7dVhBQXNDLGtCQUV0QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDLGtCQUNsQyxJQUFJLEVBQUUsc0JBQ0osS0FBSyxFQUFFLFlBQVksc0JBQ25CLGtCQUFrQixFQUFFLGFBQWEsa0JBQ2xDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Y7Ozs7OztzNkNBQ0k7QUFBQztBQUF5QyxZQTFCN0MsaUJBQWlCO0FBQ2pCO0FBQUc7QUFDVyxpQkF5QmIsS0FBSztBQUFLLG1CQUNWLEtBQUs7QUFBSyxvQkFDVixLQUFLO0FBQUssdUJBRVYsS0FBSztBQUNOLHVCQU9DLEtBQUs7QUFDTix3QkFPQyxLQUFLO0FBQ04sdUJBUUMsS0FBSztBQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBmb3J3YXJkUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuY29uc3QgVE9HR0xFX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUb2dnbGVDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxubGV0IG5leHRJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC10b2dnbGUnLFxuICBleHBvcnRBczogJ25neFRvZ2dsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2dnbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b2dnbGUuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1RPR0dMRV9WQUxVRV9BQ0NFU1NPUl0sXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25neC10b2dnbGUnLFxuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2dldERpc2FibGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIFRvZ2dsZUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCkgaWQgPSBgdG9nZ2xlLSR7KytuZXh0SWR9YDtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gbnVsbDtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGRpc2FibGVkKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XG4gIH1cbiAgc2V0IHJlcXVpcmVkKHJlcXVpcmVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkocmVxdWlyZWQpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHNob3dJY29ucygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0ljb25zO1xuICB9XG5cbiAgc2V0IHNob3dJY29ucyhzaG93SWNvbnM6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93SWNvbnMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoc2hvd0ljb25zKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCB0YWJJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90YWJJbmRleDtcbiAgfVxuICBzZXQgdGFiSW5kZXgodGFiSW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuX3RhYkluZGV4ID0gY29lcmNlTnVtYmVyUHJvcGVydHkodGFiSW5kZXgpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh2YWx1ZSk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZ2V0SG9zdENzc0NsYXNzZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ25neC10b2dnbGUnO1xuICB9XG5cbiAgZ2V0IGdldERpc2FibGVkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJyc7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93SWNvbnMgPSB0cnVlO1xuICBwcml2YXRlIF90YWJJbmRleCA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gIXRoaXMudmFsdWU7XG4gIH1cblxuICBvbkJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWw6IHVua25vd24pOiB2b2lkIHtcbiAgICBpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodmFsICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbCBhcyBib29sZWFuO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IHVua25vd24pID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAvLyBwbGFjZWhvbGRlclxuICB9O1xuXG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjayA9IChfOiB1bmtub3duKSA9PiB7XG4gICAgLy8gcGxhY2Vob2xkZXJcbiAgfTtcbn1cbiJdfQ==