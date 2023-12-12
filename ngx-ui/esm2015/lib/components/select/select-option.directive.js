import { Directive, Input, TemplateRef, ContentChild } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SelectOptionTemplateDirective } from './select-option-template.directive';
import { SelectOptionInputTemplateDirective } from './select-option-input-template.directive';
import * as ɵngcc0 from '@angular/core';
export class SelectOptionDirective {
    constructor() {
        this.name = '';
        this._disabled = false;
        this._hidden = false;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this._disabled = coerceBooleanProperty(disabled);
    }
    get hidden() {
        return this._hidden;
    }
    set hidden(hidden) {
        this._hidden = coerceBooleanProperty(hidden);
    }
    get optionTemplate() {
        return this._optionTemplateInput || this._optionTemplateQuery;
    }
    get inputTemplate() {
        return this._inputTemplateInput || this._inputTemplateQuery;
    }
}
SelectOptionDirective.ɵfac = function SelectOptionDirective_Factory(t) { return new (t || SelectOptionDirective)(); };
SelectOptionDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: SelectOptionDirective, selectors: [["ngx-select-option"]], contentQueries: function SelectOptionDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, SelectOptionTemplateDirective, 7, TemplateRef);
        ɵngcc0.ɵɵcontentQuery(dirIndex, SelectOptionInputTemplateDirective, 7, TemplateRef);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._optionTemplateQuery = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._inputTemplateQuery = _t.first);
    } }, inputs: { name: "name", disabled: "disabled", hidden: "hidden", value: "value", _optionTemplateInput: ["optionTemplate", "_optionTemplateInput"], _inputTemplateInput: ["inputTemplate", "_inputTemplateInput"] }, exportAs: ["ngxSelectOption"] });
SelectOptionDirective.propDecorators = {
    name: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    hidden: [{ type: Input }],
    _optionTemplateInput: [{ type: Input, args: ['optionTemplate',] }],
    _optionTemplateQuery: [{ type: ContentChild, args: [SelectOptionTemplateDirective, { read: TemplateRef, static: true },] }],
    _inputTemplateInput: [{ type: Input, args: ['inputTemplate',] }],
    _inputTemplateQuery: [{ type: ContentChild, args: [SelectOptionInputTemplateDirective, { read: TemplateRef, static: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SelectOptionDirective, [{
        type: Directive,
        args: [{
                exportAs: 'ngxSelectOption',
                selector: 'ngx-select-option'
            }]
    }], function () { return []; }, { name: [{
            type: Input
        }], disabled: [{
            type: Input
        }], hidden: [{
            type: Input
        }], value: [{
            type: Input
        }], _optionTemplateInput: [{
            type: Input,
            args: ['optionTemplate']
        }], _optionTemplateQuery: [{
            type: ContentChild,
            args: [SelectOptionTemplateDirective, { read: TemplateRef, static: true }]
        }], _inputTemplateInput: [{
            type: Input,
            args: ['inputTemplate']
        }], _inputTemplateQuery: [{
            type: ContentChild,
            args: [SelectOptionInputTemplateDirective, { read: TemplateRef, static: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC1vcHRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFOUQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbkYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7O0FBTzlGLE1BQU0sT0FBTyxxQkFBcUI7QUFBRyxJQUpyQztBQUNHLFFBSVEsU0FBSSxHQUFHLEVBQUUsQ0FBQztBQUNyQixRQXdDVSxjQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzVCLFFBQVUsWUFBTyxHQUFHLEtBQUssQ0FBQztBQUMxQixJQUFBLENBQUM7QUFDRCxJQXpDRSxJQUNJLFFBQVE7QUFDZCxRQUFJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksUUFBUSxDQUFDLFFBQVE7QUFDdkIsUUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3JELElBQUUsQ0FBQztBQUNILElBQ0UsSUFDSSxNQUFNO0FBQ1osUUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLE1BQU0sQ0FBQyxNQUFNO0FBQ25CLFFBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNqRCxJQUFFLENBQUM7QUFDSCxJQVFFLElBQUksY0FBYztBQUFLLFFBQ3JCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztBQUNsRSxJQUFFLENBQUM7QUFDSCxJQVFFLElBQUksYUFBYTtBQUFLLFFBQ3BCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztBQUNoRSxJQUFFLENBQUM7QUFDSDtpREE3Q0MsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxpQkFBaUI7V0FDM0IsUUFBUSxFQUFFLG1CQUFtQixjQUM5Qjs7Ozs7Ozs2UEFDSTtBQUFDO0FBQXlDLG1CQUM1QyxLQUFLO0FBQUssb0JBQ1YsS0FBSztBQUFLLHVCQUVWLEtBQUs7QUFDTixxQkFPQyxLQUFLO0FBQ04sbUNBUUMsS0FBSyxTQUFDLGdCQUFnQjtBQUNwQixtQ0FFRixZQUFZLFNBQUMsNkJBQTZCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFDN0Usa0NBT0YsS0FBSyxTQUFDLGVBQWU7QUFDbkIsa0NBRUYsWUFBWSxTQUFDLGtDQUFrQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0FBQ25GOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7IFNlbGVjdE9wdGlvblRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zZWxlY3Qtb3B0aW9uLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTZWxlY3RPcHRpb25JbnB1dFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zZWxlY3Qtb3B0aW9uLWlucHV0LXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTZWxlY3REcm9wZG93bk9wdGlvbiB9IGZyb20gJy4vc2VsZWN0LWRyb3Bkb3duLW9wdGlvbi5pbnRlcmZhY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgZXhwb3J0QXM6ICduZ3hTZWxlY3RPcHRpb24nLFxuICBzZWxlY3RvcjogJ25neC1zZWxlY3Qtb3B0aW9uJ1xufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RPcHRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBTZWxlY3REcm9wZG93bk9wdGlvbiB7XG4gIEBJbnB1dCgpIG5hbWUgPSAnJztcbiAgQElucHV0KCkgdmFsdWU6IGFueTtcblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGRpc2FibGVkKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBoaWRkZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGRlbjtcbiAgfVxuICBzZXQgaGlkZGVuKGhpZGRlbikge1xuICAgIHRoaXMuX2hpZGRlbiA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShoaWRkZW4pO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCdvcHRpb25UZW1wbGF0ZScpXG4gIF9vcHRpb25UZW1wbGF0ZUlucHV0OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBDb250ZW50Q2hpbGQoU2VsZWN0T3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBfb3B0aW9uVGVtcGxhdGVRdWVyeTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBnZXQgb3B0aW9uVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvblRlbXBsYXRlSW5wdXQgfHwgdGhpcy5fb3B0aW9uVGVtcGxhdGVRdWVyeTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnaW5wdXRUZW1wbGF0ZScpXG4gIF9pbnB1dFRlbXBsYXRlSW5wdXQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQENvbnRlbnRDaGlsZChTZWxlY3RPcHRpb25JbnB1dFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgX2lucHV0VGVtcGxhdGVRdWVyeTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBnZXQgaW5wdXRUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRUZW1wbGF0ZUlucHV0IHx8IHRoaXMuX2lucHV0VGVtcGxhdGVRdWVyeTtcbiAgfVxuXG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2hpZGRlbiA9IGZhbHNlO1xufVxuIl19