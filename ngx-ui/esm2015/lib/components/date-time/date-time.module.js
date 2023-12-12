import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';
import { CalendarModule } from '../calendar/calendar.module';
import { DialogModule } from '../dialog/dialog.module';
import { InputModule } from '../input/input.module';
import { ToggleModule } from '../toggle/toggle.module';
import { PipesModule } from '../../pipes/pipes.module';
import { DateTimeComponent } from './date-time.component';
import * as ɵngcc0 from '@angular/core';
export class DateTimeModule {
}
DateTimeModule.ɵfac = function DateTimeModule_Factory(t) { return new (t || DateTimeModule)(); };
DateTimeModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: DateTimeModule });
DateTimeModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule,
            InputModule,
            DialogModule,
            MomentModule,
            CalendarModule,
            ToggleModule,
            PipesModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DateTimeModule, [{
        type: NgModule,
        args: [{
                declarations: [DateTimeComponent],
                exports: [DateTimeComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    InputModule,
                    DialogModule,
                    MomentModule,
                    CalendarModule,
                    ToggleModule,
                    PipesModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DateTimeModule, { declarations: function () { return [DateTimeComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        InputModule,
        DialogModule,
        MomentModule,
        CalendarModule,
        ToggleModule,
        PipesModule]; }, exports: function () { return [DateTimeComponent]; } }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9kYXRlLXRpbWUvZGF0ZS10aW1lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFlBQVksQ0FBQztBQUUxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQWdCMUQsTUFBTSxPQUFPLGNBQWM7QUFBRzswQ0FkN0IsUUFBUSxTQUFDLGtCQUNSLFlBQVksRUFBRSxDQUFDO1dBQWlCLENBQUMsa0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDLGtCQUM1QixPQUFPLEVBQUU7b0JBQ1AsWUFBWSxzQkFDWixXQUFXO2FBQ1gsV0FBVztvQkFDWDtPQUFZO0lBQ1osWUFBWTtZQUNaO0FBQWMsc0JBQ2Q7TUFBWTtFQUNaLFdBQVc7T0FDWjtNQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUZBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNb21lbnRNb2R1bGUgfSBmcm9tICduZ3gtbW9tZW50JztcblxuaW1wb3J0IHsgQ2FsZW5kYXJNb2R1bGUgfSBmcm9tICcuLi9jYWxlbmRhci9jYWxlbmRhci5tb2R1bGUnO1xuaW1wb3J0IHsgRGlhbG9nTW9kdWxlIH0gZnJvbSAnLi4vZGlhbG9nL2RpYWxvZy5tb2R1bGUnO1xuaW1wb3J0IHsgSW5wdXRNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC9pbnB1dC5tb2R1bGUnO1xuaW1wb3J0IHsgVG9nZ2xlTW9kdWxlIH0gZnJvbSAnLi4vdG9nZ2xlL3RvZ2dsZS5tb2R1bGUnO1xuaW1wb3J0IHsgUGlwZXNNb2R1bGUgfSBmcm9tICcuLi8uLi9waXBlcy9waXBlcy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBEYXRlVGltZUNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS10aW1lLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0RhdGVUaW1lQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0RhdGVUaW1lQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBJbnB1dE1vZHVsZSxcbiAgICBEaWFsb2dNb2R1bGUsXG4gICAgTW9tZW50TW9kdWxlLFxuICAgIENhbGVuZGFyTW9kdWxlLFxuICAgIFRvZ2dsZU1vZHVsZSxcbiAgICBQaXBlc01vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVUaW1lTW9kdWxlIHt9XG4iXX0=