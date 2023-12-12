import { Component, Input, EventEmitter, Output, forwardRef, ViewEncapsulation, ContentChildren, QueryList, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RadioButtonComponent } from './radiobutton.component';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
const RADIOGROUP_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioButtonGroupComponent),
    multi: true
};
let nextId = 0;
export class RadioButtonGroupComponent {
    constructor(_cdr) {
        this._cdr = _cdr;
        this.UNIQUE_ID = `ngx-radio-group-${++nextId}`;
        this.id = this.UNIQUE_ID;
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.focus = new EventEmitter();
        this._name = this.UNIQUE_ID;
        this._value = false;
        this._disabled = false;
        this._destroy$ = new Subject();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this._disabled = coerceBooleanProperty(disabled);
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            this._updateSelectedRadioFromValue();
            this._updateRadioDisabledState();
            this.onChangeCallback(this._value);
        }
    }
    get name() {
        return this._name;
    }
    set name(name) {
        if (this._name !== name) {
            this._name = name;
            this._updateRadioButtonNames();
        }
    }
    get selected() {
        return this._selected;
    }
    ngAfterContentInit() {
        this.subscribeToRadios();
        /* istanbul ignore else */
        if (this._radios) {
            this._radios.changes.subscribe(this.subscribeToRadios.bind(this));
        }
    }
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
    ngOnChanges() {
        this._updateRadioDisabledState();
    }
    subscribeToRadios() {
        this._destroy$.next();
        /* istanbul ignore else */
        if (this._radios) {
            this._radios.map(radio => {
                radio.change.pipe(takeUntil(this._destroy$)).subscribe(this.onRadioSelected.bind(this));
            });
        }
        this._cdr.markForCheck();
    }
    onRadioSelected(value) {
        if (this.value !== value) {
            setTimeout(() => {
                this.value = value;
            });
        }
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
    onChangeCallback(_) {
        // placeholder
    }
    /* istanbul ignore next */
    onTouchedCallback() {
        // placeholder
    }
    _updateRadioButtonNames() {
        if (this._radios) {
            this._radios.forEach(radio => {
                radio.name = this.name;
            });
        }
    }
    _updateSelectedRadioFromValue() {
        /* istanbul ignore else */
        if (this._radios) {
            this._radios.forEach(radio => {
                radio.checked = this.value === radio.value;
                if (radio.checked) {
                    this._selected = radio;
                }
            });
        }
    }
    _updateRadioDisabledState() {
        /* istanbul ignore else */
        if (this._radios) {
            this._radios.forEach(radio => {
                radio.groupDisabled = this.disabled;
            });
        }
    }
}
RadioButtonGroupComponent.ɵfac = function RadioButtonGroupComponent_Factory(t) { return new (t || RadioButtonGroupComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
RadioButtonGroupComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: RadioButtonGroupComponent, selectors: [["ngx-radiobutton-group"]], contentQueries: function RadioButtonGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, RadioButtonComponent, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._radios = _t);
    } }, hostAttrs: [1, "ngx-radiobutton-group"], hostVars: 2, hostBindings: function RadioButtonGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("disabled", ctx.disabled);
    } }, inputs: { id: "id", disabled: "disabled", value: "value", name: "name" }, outputs: { change: "change", blur: "blur", focus: "focus" }, exportAs: ["ngxRadiobuttonGroup"], features: [ɵngcc0.ɵɵProvidersFeature([RADIOGROUP_VALUE_ACCESSOR]), ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function RadioButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, styles: [".ngx-radiobutton{display:block}.ngx-radiobutton .radio-label{display:block;position:relative;padding-left:1.5em;margin:0 .8rem 0 0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ngx-radiobutton .radio-label--content{color:#cdd2dd}.ngx-radiobutton .radio-label input{position:absolute;opacity:0}.ngx-radiobutton .checkmark{position:absolute;top:.25em;left:0;height:1em;width:1em;background-color:transparent;border-radius:50%;border:1px solid #6f809e;opacity:1;transition:background-color .3s ease,opacity .3s ease}.ngx-radiobutton .radio-label:hover input~.checkmark{background-color:#2196f3;border:1px solid #2196f3;opacity:.3}.ngx-radiobutton .radio-label .checkmark:after,.ngx-radiobutton .radio-label:hover .checkmark:after{content:\"\";position:absolute;display:block;opacity:0;top:0;left:0;width:.25em;height:.25em;transform:translate3d(.32em,.32em,0);border-radius:50%;background:#fff;box-shadow:0 1px 0 rgba(0,0,0,.25);transition:opacity .5s ease}.ngx-radiobutton.disabled .radio-input:after,.ngx-radiobutton.disabled .radio-input:before,.ngx-radiobutton.disabled .radio-label{cursor:not-allowed}.ngx-radiobutton.disabled .radio-label:hover input~.checkmark{background-color:transparent;border:1px solid #6f809e;opacity:1}.ngx-radiobutton.disabled .radio-label:hover .checkmark:after{opacity:0}.ngx-radiobutton.disabled .radio-label input:checked~.checkmark,.ngx-radiobutton .radio-label input:checked~.checkmark{background-color:#2196f3;border:1px solid #2196f3;opacity:1}.ngx-radiobutton.disabled .radio-label input:checked~.checkmark:after,.ngx-radiobutton .radio-label:hover .checkmark:after,.ngx-radiobutton .radio-label input:checked~.checkmark:after{opacity:1}"], encapsulation: 2, changeDetection: 0 });
RadioButtonGroupComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
RadioButtonGroupComponent.propDecorators = {
    id: [{ type: Input }],
    disabled: [{ type: Input }],
    value: [{ type: Input }],
    name: [{ type: Input }],
    change: [{ type: Output }],
    blur: [{ type: Output }],
    focus: [{ type: Output }],
    _radios: [{ type: ContentChildren, args: [forwardRef(() => RadioButtonComponent), { descendants: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(RadioButtonGroupComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxRadiobuttonGroup',
                selector: 'ngx-radiobutton-group',
                providers: [RADIOGROUP_VALUE_ACCESSOR],
                template: ' <ng-content></ng-content> ',
                host: {
                    class: 'ngx-radiobutton-group',
                    '[class.disabled]': 'disabled'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-radiobutton{display:block}.ngx-radiobutton .radio-label{display:block;position:relative;padding-left:1.5em;margin:0 .8rem 0 0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ngx-radiobutton .radio-label--content{color:#cdd2dd}.ngx-radiobutton .radio-label input{position:absolute;opacity:0}.ngx-radiobutton .checkmark{position:absolute;top:.25em;left:0;height:1em;width:1em;background-color:transparent;border-radius:50%;border:1px solid #6f809e;opacity:1;transition:background-color .3s ease,opacity .3s ease}.ngx-radiobutton .radio-label:hover input~.checkmark{background-color:#2196f3;border:1px solid #2196f3;opacity:.3}.ngx-radiobutton .radio-label .checkmark:after,.ngx-radiobutton .radio-label:hover .checkmark:after{content:\"\";position:absolute;display:block;opacity:0;top:0;left:0;width:.25em;height:.25em;transform:translate3d(.32em,.32em,0);border-radius:50%;background:#fff;box-shadow:0 1px 0 rgba(0,0,0,.25);transition:opacity .5s ease}.ngx-radiobutton.disabled .radio-input:after,.ngx-radiobutton.disabled .radio-input:before,.ngx-radiobutton.disabled .radio-label{cursor:not-allowed}.ngx-radiobutton.disabled .radio-label:hover input~.checkmark{background-color:transparent;border:1px solid #6f809e;opacity:1}.ngx-radiobutton.disabled .radio-label:hover .checkmark:after{opacity:0}.ngx-radiobutton.disabled .radio-label input:checked~.checkmark,.ngx-radiobutton .radio-label input:checked~.checkmark{background-color:#2196f3;border:1px solid #2196f3;opacity:1}.ngx-radiobutton.disabled .radio-label input:checked~.checkmark:after,.ngx-radiobutton .radio-label:hover .checkmark:after,.ngx-radiobutton .radio-label input:checked~.checkmark:after{opacity:1}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { id: [{
            type: Input
        }], change: [{
            type: Output
        }], blur: [{
            type: Output
        }], focus: [{
            type: Output
        }], disabled: [{
            type: Input
        }], value: [{
            type: Input
        }], name: [{
            type: Input
        }], _radios: [{
            type: ContentChildren,
            args: [forwardRef(() => RadioButtonComponent), { descendants: true }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9idXR0b24tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL3JhZGlvYnV0dG9uL3JhZGlvYnV0dG9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxZQUFZLEVBQ1osTUFBTSxFQUNOLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLFNBQVMsRUFHVCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBRWxCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUUvRCxNQUFNLHlCQUF5QixHQUFHO0FBQ2xDLElBQUUsT0FBTyxFQUFFLGlCQUFpQjtBQUM1QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMseUJBQXlCLENBQUM7QUFDMUQsSUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiLENBQUMsQ0FBQztBQUVGLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQWVmLE1BQU0sT0FBTyx5QkFBeUI7QUFBRyxJQXNEdkMsWUFBNkIsSUFBdUI7QUFBSSxRQUEzQixTQUFJLEdBQUosSUFBSSxDQUFtQjtBQUFDLFFBckQ1QyxjQUFTLEdBQUcsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLENBQUM7QUFDckQsUUFDVyxPQUFFLEdBQVcsSUFBSSxDQUFDLFNB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Ozs7Ozs4L0JBQ2hELDZ1QkFDSTtBQUFDO0FBQW1ELFlBL0J2RCxpQkFBaUI7QUFDbEI7QUFBRztBQUVTLGlCQStCVixLQUFLO0FBQUssdUJBRVYsS0FBSztBQUNOLG9CQU9DLEtBQUs7QUFDTixtQkFZQyxLQUFLO0FBQ04scUJBVUMsTUFBTTtBQUFLLG1CQUNYLE1BQU07QUFBSyxvQkFDWCxNQUFNO0FBQUssc0JBRVgsZUFBZSxTQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtBQUM1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgZm9yd2FyZFJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPbkRlc3Ryb3ksXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25DaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUmFkaW9CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3JhZGlvYnV0dG9uLmNvbXBvbmVudCc7XG5cbmNvbnN0IFJBRElPR1JPVVBfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYWRpb0J1dHRvbkdyb3VwQ29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbmxldCBuZXh0SWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICduZ3hSYWRpb2J1dHRvbkdyb3VwJyxcbiAgc2VsZWN0b3I6ICduZ3gtcmFkaW9idXR0b24tZ3JvdXAnLFxuICBwcm92aWRlcnM6IFtSQURJT0dST1VQX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6ICcgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiAnLFxuICBzdHlsZVVybHM6IFsnLi9yYWRpb2J1dHRvbi5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICduZ3gtcmFkaW9idXR0b24tZ3JvdXAnLFxuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2Rpc2FibGVkJ1xuICB9LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbkdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0IHtcbiAgcmVhZG9ubHkgVU5JUVVFX0lEID0gYG5neC1yYWRpby1ncm91cC0keysrbmV4dElkfWA7XG5cbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9IHRoaXMuVU5JUVVFX0lEO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoZGlzYWJsZWQpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLl91cGRhdGVTZWxlY3RlZFJhZGlvRnJvbVZhbHVlKCk7XG4gICAgICB0aGlzLl91cGRhdGVSYWRpb0Rpc2FibGVkU3RhdGUoKTtcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLl92YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX25hbWUgIT09IG5hbWUpIHtcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgdGhpcy5fdXBkYXRlUmFkaW9CdXR0b25OYW1lcygpO1xuICAgIH1cbiAgfVxuXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcbiAgQE91dHB1dCgpIGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBSYWRpb0J1dHRvbkNvbXBvbmVudCksIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgcmVhZG9ubHkgX3JhZGlvczogUXVlcnlMaXN0PFJhZGlvQnV0dG9uQ29tcG9uZW50PjtcblxuICBnZXQgc2VsZWN0ZWQoKTogUmFkaW9CdXR0b25Db21wb25lbnQge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgfVxuXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZyA9IHRoaXMuVU5JUVVFX0lEO1xuICBwcml2YXRlIF92YWx1ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9zZWxlY3RlZDogUmFkaW9CdXR0b25Db21wb25lbnQ7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9jZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmliZVRvUmFkaW9zKCk7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0aGlzLl9yYWRpb3MpIHtcbiAgICAgIHRoaXMuX3JhZGlvcy5jaGFuZ2VzLnN1YnNjcmliZSh0aGlzLnN1YnNjcmliZVRvUmFkaW9zLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5fdXBkYXRlUmFkaW9EaXNhYmxlZFN0YXRlKCk7XG4gIH1cblxuICBzdWJzY3JpYmVUb1JhZGlvcygpOiB2b2lkIHtcbiAgICB0aGlzLl9kZXN0cm95JC5uZXh0KCk7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0aGlzLl9yYWRpb3MpIHtcbiAgICAgIHRoaXMuX3JhZGlvcy5tYXAocmFkaW8gPT4ge1xuICAgICAgICByYWRpby5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKS5zdWJzY3JpYmUodGhpcy5vblJhZGlvU2VsZWN0ZWQuYmluZCh0aGlzKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBvblJhZGlvU2VsZWN0ZWQodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG4gIG9uQ2hhbmdlQ2FsbGJhY2soXzogYW55KSB7XG4gICAgLy8gcGxhY2Vob2xkZXJcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIG9uVG91Y2hlZENhbGxiYWNrKCkge1xuICAgIC8vIHBsYWNlaG9sZGVyXG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVSYWRpb0J1dHRvbk5hbWVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9yYWRpb3MpIHtcbiAgICAgIHRoaXMuX3JhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHtcbiAgICAgICAgcmFkaW8ubmFtZSA9IHRoaXMubmFtZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVNlbGVjdGVkUmFkaW9Gcm9tVmFsdWUoKTogdm9pZCB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAodGhpcy5fcmFkaW9zKSB7XG4gICAgICB0aGlzLl9yYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7XG4gICAgICAgIHJhZGlvLmNoZWNrZWQgPSB0aGlzLnZhbHVlID09PSByYWRpby52YWx1ZTtcblxuICAgICAgICBpZiAocmFkaW8uY2hlY2tlZCkge1xuICAgICAgICAgIHRoaXMuX3NlbGVjdGVkID0gcmFkaW87XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVJhZGlvRGlzYWJsZWRTdGF0ZSgpOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh0aGlzLl9yYWRpb3MpIHtcbiAgICAgIHRoaXMuX3JhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHtcbiAgICAgICAgcmFkaW8uZ3JvdXBEaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==