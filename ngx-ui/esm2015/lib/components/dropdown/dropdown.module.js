import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { DropdownToggleDirective } from './dropdown-toggle.directive';
import { DropdownMenuDirective } from './dropdown-menu.directive';
import { InViewportModule } from 'ng-in-viewport';
import * as ɵngcc0 from '@angular/core';
export class DropdownModule {
}
DropdownModule.ɵfac = function DropdownModule_Factory(t) { return new (t || DropdownModule)(); };
DropdownModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: DropdownModule });
DropdownModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, InViewportModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DropdownModule, [{
        type: NgModule,
        args: [{
                declarations: [DropdownComponent, DropdownToggleDirective, DropdownMenuDirective],
                exports: [DropdownComponent, DropdownToggleDirective, DropdownMenuDirective],
                imports: [CommonModule, InViewportModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DropdownModule, { declarations: function () { return [DropdownComponent, DropdownToggleDirective, DropdownMenuDirective]; }, imports: function () { return [CommonModule, InViewportModule]; }, exports: function () { return [DropdownComponent, DropdownToggleDirective, DropdownMenuDirective]; } }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFPbEQsTUFBTSxPQUFPLGNBQWM7QUFBRzswQ0FMN0IsUUFBUSxTQUFDLGtCQUNSLFlBQVksRUFBRSxDQUFDO1dBQWlCLEVBQUUsdUJBQXVCLEVBQUUscUJBQXFCLENBQUMsa0JBQ2pGLE9BQU87QUFBRSxDQUFDLGlCQUFpQixFQUFFLHVCQUF1QixFQUFFLHFCQUFxQixDQUFDLGtCQUM1RSxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUU7ZUFBZ0IsQ0FBQyxjQUMxQzs7Ozs7Ozs7MFlBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IERyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wZG93bi10b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IERyb3Bkb3duTWVudURpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcGRvd24tbWVudS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW5WaWV3cG9ydE1vZHVsZSB9IGZyb20gJ25nLWluLXZpZXdwb3J0JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRHJvcGRvd25Db21wb25lbnQsIERyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlLCBEcm9wZG93bk1lbnVEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbRHJvcGRvd25Db21wb25lbnQsIERyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlLCBEcm9wZG93bk1lbnVEaXJlY3RpdmVdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBJblZpZXdwb3J0TW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bk1vZHVsZSB7fVxuIl19