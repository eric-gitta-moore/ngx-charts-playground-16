import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { OverlayComponent } from './overlay.component';
import { InjectionService } from '../../services/injection/injection.service';
import { ResizeOverlayComponent } from './resize-overlay.component';
import { IconModule } from '../icon/icon.module';
import * as ɵngcc0 from '@angular/core';
export class OverlayModule {
}
OverlayModule.ɵfac = function OverlayModule_Factory(t) { return new (t || OverlayModule)(); };
OverlayModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: OverlayModule });
OverlayModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ providers: [InjectionService], imports: [[CommonModule, IconModule, LayoutModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(OverlayModule, [{
        type: NgModule,
        args: [{
                declarations: [OverlayComponent, ResizeOverlayComponent],
                providers: [InjectionService],
                exports: [OverlayComponent, ResizeOverlayComponent],
                imports: [CommonModule, IconModule, LayoutModule],
                entryComponents: [OverlayComponent, ResizeOverlayComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(OverlayModule, { declarations: function () { return [OverlayComponent, ResizeOverlayComponent]; }, imports: function () { return [CommonModule, IconModule, LayoutModule]; }, exports: function () { return [OverlayComponent, ResizeOverlayComponent]; } }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvb3ZlcmxheS9vdmVybGF5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQVNqRCxNQUFNLE9BQU8sYUFBYTtBQUFHO3lDQVA1QixRQUFRLFNBQUMsa0JBQ1IsWUFBWSxFQUFFLENBQUM7WUFBZ0IsRUFBRSxzQkFBc0IsQ0FBQyxrQkFDeEQsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQzdCLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLHNCQUFzQixDQUFDLGtCQUNuRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLFlBQVksQ0FBQztLQUNqRCxlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxzQkFBc0IsQ0FBQyxjQUM1RDs7Ozs7Ozs7OzsrVkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcblxuaW1wb3J0IHsgT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vb3ZlcmxheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5qZWN0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luamVjdGlvbi9pbmplY3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBSZXNpemVPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9yZXNpemUtb3ZlcmxheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtPdmVybGF5Q29tcG9uZW50LCBSZXNpemVPdmVybGF5Q29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbSW5qZWN0aW9uU2VydmljZV0sXG4gIGV4cG9ydHM6IFtPdmVybGF5Q29tcG9uZW50LCBSZXNpemVPdmVybGF5Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSWNvbk1vZHVsZSwgTGF5b3V0TW9kdWxlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbT3ZlcmxheUNvbXBvbmVudCwgUmVzaXplT3ZlcmxheUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgT3ZlcmxheU1vZHVsZSB7fVxuIl19