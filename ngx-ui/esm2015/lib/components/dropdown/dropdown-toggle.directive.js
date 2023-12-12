import { Directive, Input, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as ɵngcc0 from '@angular/core';
export class DropdownToggleDirective {
    constructor(el) {
        this.el = el;
        this.showEvent = "click" /* Click */;
        this.toggle = new EventEmitter();
        this._disabled = false;
        this.element = this.el.nativeElement;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this._disabled = coerceBooleanProperty(disabled);
    }
    onClick(event) {
        if (this.showEvent === "click" /* Click */ && !this.disabled) {
            event.preventDefault();
            this.toggle.emit(event);
        }
    }
    onContextmenu(event) {
        if (this.showEvent === "contextmenu" /* Contextmenu */ && !this.disabled) {
            event.preventDefault();
            this.toggle.emit(event);
        }
    }
    onDblclick(event) {
        if (this.showEvent === "dblclick" /* Dblclick */ && !this.disabled) {
            event.preventDefault();
            this.toggle.emit(event);
        }
    }
}
DropdownToggleDirective.ɵfac = function DropdownToggleDirective_Factory(t) { return new (t || DropdownToggleDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
DropdownToggleDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: DropdownToggleDirective, selectors: [["ngx-dropdown-toggle"]], hostAttrs: [1, "ngx-dropdown-toggle"], hostVars: 2, hostBindings: function DropdownToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function DropdownToggleDirective_click_HostBindingHandler($event) { return ctx.onClick($event); })("contextmenu", function DropdownToggleDirective_contextmenu_HostBindingHandler($event) { return ctx.onContextmenu($event); })("dblclick", function DropdownToggleDirective_dblclick_HostBindingHandler($event) { return ctx.onDblclick($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("disabled", ctx.disabled);
    } }, inputs: { showEvent: "showEvent", disabled: "disabled" }, outputs: { toggle: "toggle" }, exportAs: ["ngxDropdownToggle"] });
DropdownToggleDirective.ctorParameters = () => [
    { type: ElementRef }
];
DropdownToggleDirective.propDecorators = {
    showEvent: [{ type: Input }],
    disabled: [{ type: Input }],
    toggle: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onContextmenu: [{ type: HostListener, args: ['contextmenu', ['$event'],] }],
    onDblclick: [{ type: HostListener, args: ['dblclick', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DropdownToggleDirective, [{
        type: Directive,
        args: [{
                exportAs: 'ngxDropdownToggle',
                selector: 'ngx-dropdown-toggle',
                host: {
                    class: 'ngx-dropdown-toggle',
                    '[class.disabled]': 'disabled'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { showEvent: [{
            type: Input
        }], toggle: [{
            type: Output
        }], disabled: [{
            type: Input
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], onContextmenu: [{
            type: HostListener,
            args: ['contextmenu', ['$event']]
        }], onDblclick: [{
            type: HostListener,
            args: ['dblclick', ['$event']]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFZOUQsTUFBTSxPQUFPLHVCQUF1QjtBQUNwQyxJQWVFLFlBQTZCLEVBQTJCO0FBQzFELFFBRCtCLE9BQUUsR0FBRixFQUFFLENBQXlCO0FBQUMsUUFmaEQsY0FBUyx1QkFBOEM7QUFDbEUsUUFTWSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztBQUMvQyxRQUVVLGNBQVMsR0FBRyxLQUFLLENBQUM7QUFDNUIsUUFFSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO0FBQ3pDLElBQUUsQ0FBQztBQUNILElBaEJFLElBQ0ksUUFBUTtBQUFLLFFBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQzFCLElBQUUsQ0FBQztBQUNILElBQUUsSUFBSSxRQUFRLENBQUMsUUFBaUI7QUFDaEMsUUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3JELElBQUUsQ0FBQztBQUNILElBV0UsT0FBTyxDQUFDLEtBQVk7QUFBSSxRQUN0QixJQUFJLElBQUksQ0FBQyxTQUFTLHdCQUE0QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUN0RSxZQUFNLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUM3QixZQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUVFLGFBQWEsQ0FBQyxLQUFZO0FBQUksUUFDNUIsSUFBSSxJQUFJLENBQUMsU0FBUyxvQ0FBa0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDNUUsWUFBTSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDN0IsWUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFFRSxVQUFVLENBQUMsS0FBWTtBQUFJLFFBQ3pCLElBQUksSUFBSSxDQUFDLFNBQVMsOEJBQStCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ3pFLFlBQU0sS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzdCLFlBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUIsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIO21EQW5EQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLG1CQUFtQixrQkFDN0IsUUFBUSxFQUFFLHFCQUFxQjtlQUMvQixJQUFJLEVBQUUsc0JBQ0osS0FBSyxFQUFFLHFCQUFxQixzQkFDNUIsa0JBQWtCLEVBQUUsVUFBVSxrQkFDL0IsY0FDRjs7OztxSUFDSTtBQUFDO0FBQ1UsWUFkVyxVQUFVO0FBQUc7QUFBRztBQUEyQyx3QkFjbkYsS0FBSztBQUFLLHVCQUVWLEtBQUs7QUFDTixxQkFPQyxNQUFNO0FBQUssc0JBU1gsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztBQUM5Qiw0QkFPRixZQUFZLFNBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDO0FBQ3BDLHlCQU9GLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFDbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQgeyBEcm9wZG93blNob3dUeXBlcyB9IGZyb20gJy4vZHJvcGRvd24uc2hvdy10eXBlcy5lbnVtJztcblxuQERpcmVjdGl2ZSh7XG4gIGV4cG9ydEFzOiAnbmd4RHJvcGRvd25Ub2dnbGUnLFxuICBzZWxlY3RvcjogJ25neC1kcm9wZG93bi10b2dnbGUnLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICduZ3gtZHJvcGRvd24tdG9nZ2xlJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIHNob3dFdmVudDogRHJvcGRvd25TaG93VHlwZXMgPSBEcm9wZG93blNob3dUeXBlcy5DbGljaztcblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KGRpc2FibGVkKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSB0b2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuXG4gIHJlYWRvbmx5IGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBvbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3dFdmVudCA9PT0gRHJvcGRvd25TaG93VHlwZXMuQ2xpY2sgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnRvZ2dsZS5lbWl0KGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjb250ZXh0bWVudScsIFsnJGV2ZW50J10pXG4gIG9uQ29udGV4dG1lbnUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvd0V2ZW50ID09PSBEcm9wZG93blNob3dUeXBlcy5Db250ZXh0bWVudSAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMudG9nZ2xlLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RibGNsaWNrJywgWyckZXZlbnQnXSlcbiAgb25EYmxjbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG93RXZlbnQgPT09IERyb3Bkb3duU2hvd1R5cGVzLkRibGNsaWNrICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy50b2dnbGUuZW1pdChldmVudCk7XG4gICAgfVxuICB9XG59XG4iXX0=