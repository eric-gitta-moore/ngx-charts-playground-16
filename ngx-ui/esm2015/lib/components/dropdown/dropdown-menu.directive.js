import { ElementRef, Directive, Inject, PLATFORM_ID } from '@angular/core';
import { InViewportDirective, InViewportService } from 'ng-in-viewport';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-in-viewport';
export class DropdownMenuDirective extends InViewportDirective {
    constructor(_platformIdentifier, _elementReference, _insideViewport) {
        super(_platformIdentifier, _elementReference, _insideViewport);
        this._platformIdentifier = _platformIdentifier;
        this._elementReference = _elementReference;
        this._insideViewport = _insideViewport;
        this.element = this._elementReference.nativeElement;
    }
    getCallbackFn() {
        return this.inViewportAction;
    }
}
DropdownMenuDirective.ɵfac = function DropdownMenuDirective_Factory(t) { return new (t || DropdownMenuDirective)(ɵngcc0.ɵɵdirectiveInject(PLATFORM_ID), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.InViewportService)); };
DropdownMenuDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: DropdownMenuDirective, selectors: [["ngx-dropdown-menu"]], hostAttrs: [1, "ngx-dropdown-menu"], exportAs: ["ngxDropdownMenu"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
DropdownMenuDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef },
    { type: InViewportService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DropdownMenuDirective, [{
        type: Directive,
        args: [{
                exportAs: 'ngxDropdownMenu',
                selector: 'ngx-dropdown-menu',
                host: { class: 'ngx-dropdown-menu' }
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: ɵngcc0.ElementRef }, { type: ɵngcc1.InViewportService }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24tbWVudS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU94RSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsbUJBQW1CO0FBQzlELElBRUUsWUFDZ0MsbUJBQXdCLEVBQzdDLGlCQUE2QixFQUM3QixlQUFrQztBQUM1QyxRQUNDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUNuRSxRQUxrQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQUs7QUFBQyxRQUM5QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQVk7QUFBQyxRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7QUFDL0MsUUFFSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7QUFDeEQsSUFBRSxDQUFDO0FBQ0gsSUFDRSxhQUFhO0FBQUssUUFDaEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7QUFDakMsSUFBRSxDQUFDO0FBQ0g7aURBcEJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsaUJBQWlCLGtCQUMzQixRQUFRLEVBQUUsbUJBQW1CLGtCQUM3QixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsY0FDckM7NFBBQ0k7QUFBQztBQUErQyw0Q0FJaEQsTUFBTSxTQUFDLFdBQVc7QUFBUyxZQVp2QixVQUFVO0FBQUksWUFDTyxpQkFBaUI7QUFBRzs7Ozs7Ozs7Ozs7bUdBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIERpcmVjdGl2ZSwgSW5qZWN0LCBQTEFURk9STV9JRCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJblZpZXdwb3J0RGlyZWN0aXZlLCBJblZpZXdwb3J0U2VydmljZSB9IGZyb20gJ25nLWluLXZpZXdwb3J0JztcblxuQERpcmVjdGl2ZSh7XG4gIGV4cG9ydEFzOiAnbmd4RHJvcGRvd25NZW51JyxcbiAgc2VsZWN0b3I6ICduZ3gtZHJvcGRvd24tbWVudScsXG4gIGhvc3Q6IHsgY2xhc3M6ICduZ3gtZHJvcGRvd24tbWVudScgfVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bk1lbnVEaXJlY3RpdmUgZXh0ZW5kcyBJblZpZXdwb3J0RGlyZWN0aXZlIHtcbiAgcmVhZG9ubHkgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcmVhZG9ubHkgX3BsYXRmb3JtSWRlbnRpZmllcjogYW55LFxuICAgIHJlYWRvbmx5IF9lbGVtZW50UmVmZXJlbmNlOiBFbGVtZW50UmVmLFxuICAgIHJlYWRvbmx5IF9pbnNpZGVWaWV3cG9ydDogSW5WaWV3cG9ydFNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoX3BsYXRmb3JtSWRlbnRpZmllciwgX2VsZW1lbnRSZWZlcmVuY2UsIF9pbnNpZGVWaWV3cG9ydCk7XG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZmVyZW5jZS5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgZ2V0Q2FsbGJhY2tGbigpOiBFdmVudEVtaXR0ZXI8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaW5WaWV3cG9ydEFjdGlvbjtcbiAgfVxufVxuIl19