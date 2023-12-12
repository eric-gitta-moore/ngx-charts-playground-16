import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InjectionService } from '../../services/injection/injection.service';
import { OverlayModule } from '../overlay/overlay.module';
import { DialogDrawerContentComponent } from './dialog-drawer-content/dialog-drawer-content.component';
import { DrawerContainerDirective } from './drawer-container.directive';
import { DrawerComponent } from './drawer.component';
import * as ɵngcc0 from '@angular/core';
export class DrawerModule {
}
DrawerModule.ɵfac = function DrawerModule_Factory(t) { return new (t || DrawerModule)(); };
DrawerModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: DrawerModule });
DrawerModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ providers: [InjectionService], imports: [[CommonModule, OverlayModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DrawerModule, [{
        type: NgModule,
        args: [{
                declarations: [DrawerComponent, DrawerContainerDirective, DialogDrawerContentComponent],
                exports: [DrawerComponent, DrawerContainerDirective, DialogDrawerContentComponent],
                providers: [InjectionService],
                imports: [CommonModule, OverlayModule],
                entryComponents: [DrawerComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DrawerModule, { declarations: function () { return [DrawerComponent, DrawerContainerDirective, DialogDrawerContentComponent]; }, imports: function () { return [CommonModule, OverlayModule]; }, exports: function () { return [DrawerComponent, DrawerContainerDirective, DialogDrawerContentComponent]; } }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9kcmF3ZXIvZHJhd2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUU5RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQVNyRCxNQUFNLE9BQU8sWUFBWTtBQUFHO3dDQVAzQixRQUFRLFNBQUMsa0JBQ1IsWUFBWSxFQUFFLENBQUM7YUFBZSxFQUFFLHdCQUF3QixFQUFFLDRCQUE0QixDQUFDO0tBQ3ZGLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSx3QkFBd0IsRUFBRSw0QkFBNEIsQ0FBQyxrQkFDbEYsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsa0JBQ3RDLGVBQWUsRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUNuQzs7Ozs7Ozs7O2laQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluamVjdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmplY3Rpb24vaW5qZWN0aW9uLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnLi4vb3ZlcmxheS9vdmVybGF5Lm1vZHVsZSc7XG5pbXBvcnQgeyBEaWFsb2dEcmF3ZXJDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctZHJhd2VyLWNvbnRlbnQvZGlhbG9nLWRyYXdlci1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcmF3ZXJDb250YWluZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RyYXdlci1jb250YWluZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IERyYXdlckNvbXBvbmVudCB9IGZyb20gJy4vZHJhd2VyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0RyYXdlckNvbXBvbmVudCwgRHJhd2VyQ29udGFpbmVyRGlyZWN0aXZlLCBEaWFsb2dEcmF3ZXJDb250ZW50Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0RyYXdlckNvbXBvbmVudCwgRHJhd2VyQ29udGFpbmVyRGlyZWN0aXZlLCBEaWFsb2dEcmF3ZXJDb250ZW50Q29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbSW5qZWN0aW9uU2VydmljZV0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGVdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtEcmF3ZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIERyYXdlck1vZHVsZSB7fVxuIl19