import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectionService } from '../../services/injection/injection.service';
import { NotificationComponent } from './notification.component';
import { NotificationContainerComponent } from './notification-container.component';
import * as ɵngcc0 from '@angular/core';
export class NotificationModule {
}
NotificationModule.ɵfac = function NotificationModule_Factory(t) { return new (t || NotificationModule)(); };
NotificationModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NotificationModule });
NotificationModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ providers: [InjectionService], imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NotificationModule, [{
        type: NgModule,
        args: [{
                declarations: [NotificationComponent, NotificationContainerComponent],
                exports: [NotificationComponent, NotificationContainerComponent],
                providers: [InjectionService],
                imports: [CommonModule],
                entryComponents: [NotificationComponent, NotificationContainerComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NotificationModule, { declarations: function () { return [NotificationComponent, NotificationContainerComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NotificationComponent, NotificationContainerComponent]; } }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUU5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFTcEYsTUFBTSxPQUFPLGtCQUFrQjtBQUFHOzhDQVBqQyxRQUFRLFNBQUMsa0JBQ1IsWUFBWSxFQUFFLENBQUM7T0FBcUIsRUFBRSw4QkFBOEIsQ0FBQyxrQkFDckUsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUU7MEJBQThCLENBQUMsa0JBQ2hFLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLGtCQUM3QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7TUFDdkIsZUFBZSxFQUFFLENBQUMscUJBQXFCLEVBQUUsOEJBQThCLENBQUMsY0FDekU7Ozs7Ozs7Ozs7b1dBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBJbmplY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5qZWN0aW9uL2luamVjdGlvbi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9ub3RpZmljYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtOb3RpZmljYXRpb25Db21wb25lbnQsIE5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOb3RpZmljYXRpb25Db21wb25lbnQsIE5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW0luamVjdGlvblNlcnZpY2VdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbTm90aWZpY2F0aW9uQ29tcG9uZW50LCBOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbk1vZHVsZSB7fVxuIl19