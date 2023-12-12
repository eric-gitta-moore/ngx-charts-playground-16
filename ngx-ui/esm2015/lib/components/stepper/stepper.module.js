import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizeObserverModule } from '../../directives/resize-observer/resize-observer.module';
import { StepperComponent } from './stepper.component';
import { StepComponent } from './step.component';
import { StepContentDirective } from './step-content.directive';
import * as ɵngcc0 from '@angular/core';
export class StepperModule {
}
StepperModule.ɵfac = function StepperModule_Factory(t) { return new (t || StepperModule)(); };
StepperModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: StepperModule });
StepperModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, ResizeObserverModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(StepperModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ResizeObserverModule],
                declarations: [StepperComponent, StepComponent, StepContentDirective],
                exports: [StepperComponent, StepComponent, StepContentDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(StepperModule, { declarations: function () { return [StepperComponent, StepComponent, StepContentDirective]; }, imports: function () { return [CommonModule, ResizeObserverModule]; }, exports: function () { return [StepperComponent, StepComponent, StepContentDirective]; } }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvc3RlcHBlci9zdGVwcGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUUvRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBT2hFLE1BQU0sT0FBTyxhQUFhO0FBQUc7eUNBTDVCLFFBQVEsU0FBQyxrQkFDUixPQUFPLEVBQUUsQ0FBQztHQUFZLEVBQUUsb0JBQW9CLENBQUMsa0JBQzdDLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFO0tBQWEsRUFBRSxvQkFBb0IsQ0FBQyxrQkFDckUsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLG9CQUFvQixDQUFDO1dBQ2pFOzs7Ozs7OztxWEFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFJlc2l6ZU9ic2VydmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yZXNpemUtb2JzZXJ2ZXIvcmVzaXplLW9ic2VydmVyLm1vZHVsZSc7XG5cbmltcG9ydCB7IFN0ZXBwZXJDb21wb25lbnQgfSBmcm9tICcuL3N0ZXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0ZXBDb21wb25lbnQgfSBmcm9tICcuL3N0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7IFN0ZXBDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9zdGVwLWNvbnRlbnQuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUmVzaXplT2JzZXJ2ZXJNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtTdGVwcGVyQ29tcG9uZW50LCBTdGVwQ29tcG9uZW50LCBTdGVwQ29udGVudERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtTdGVwcGVyQ29tcG9uZW50LCBTdGVwQ29tcG9uZW50LCBTdGVwQ29udGVudERpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlck1vZHVsZSB7fVxuIl19