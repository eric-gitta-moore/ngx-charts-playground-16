import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectDropdownComponent } from './select-dropdown.component';
import { SelectInputComponent } from './select-input.component';
import { SelectOptionInputTemplateDirective } from './select-option-input-template.directive';
import { SelectOptionTemplateDirective } from './select-option-template.directive';
import { SelectOptionDirective } from './select-option.directive';
import { SelectComponent } from './select.component';
import * as ɵngcc0 from '@angular/core';
export class SelectModule {
}
SelectModule.ɵfac = function SelectModule_Factory(t) { return new (t || SelectModule)(); };
SelectModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: SelectModule });
SelectModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SelectModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    SelectComponent,
                    SelectInputComponent,
                    SelectOptionDirective,
                    SelectOptionTemplateDirective,
                    SelectDropdownComponent,
                    SelectOptionInputTemplateDirective
                ],
                exports: [SelectComponent, SelectOptionDirective, SelectOptionTemplateDirective, SelectOptionInputTemplateDirective],
                imports: [CommonModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SelectModule, { declarations: function () { return [SelectComponent,
        SelectInputComponent,
        SelectOptionDirective,
        SelectOptionTemplateDirective,
        SelectDropdownComponent,
        SelectOptionInputTemplateDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [SelectComponent, SelectOptionDirective, SelectOptionTemplateDirective, SelectOptionInputTemplateDirective]; } }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBY3JELE1BQU0sT0FBTyxZQUFZO0FBQUc7d0NBWjNCLFFBQVEsU0FBQyxrQkFDUixZQUFZLEVBQUU7bUJBQ1osZUFBZSxzQkFDZixvQkFBb0I7ZUFDcEIscUJBQXFCLHNCQUNyQiw2QkFBNkI7bUJBQzdCLHVCQUF1QixzQkFDdkIsa0NBQWtDO1FBQ25DO0VBQ0QsT0FBTyxFQUFFLENBQUM7VUFBZSxFQUFFO0NBQXFCLEVBQUUsNkJBQTZCLEVBQUU7K0JBQWtDLENBQUM7UUFDcEgsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO0VBQ3hCOzs7Ozs7Ozs7Ozs7O3VQQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlbGVjdERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QtZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdE9wdGlvbklucHV0VGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3NlbGVjdC1vcHRpb24taW5wdXQtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNlbGVjdE9wdGlvblRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zZWxlY3Qtb3B0aW9uLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTZWxlY3RPcHRpb25EaXJlY3RpdmUgfSBmcm9tICcuL3NlbGVjdC1vcHRpb24uZGlyZWN0aXZlJztcblxuaW1wb3J0IHsgU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2VsZWN0Q29tcG9uZW50LFxuICAgIFNlbGVjdElucHV0Q29tcG9uZW50LFxuICAgIFNlbGVjdE9wdGlvbkRpcmVjdGl2ZSxcbiAgICBTZWxlY3RPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBTZWxlY3REcm9wZG93bkNvbXBvbmVudCxcbiAgICBTZWxlY3RPcHRpb25JbnB1dFRlbXBsYXRlRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtTZWxlY3RDb21wb25lbnQsIFNlbGVjdE9wdGlvbkRpcmVjdGl2ZSwgU2VsZWN0T3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsIFNlbGVjdE9wdGlvbklucHV0VGVtcGxhdGVEaXJlY3RpdmVdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RNb2R1bGUge31cbiJdfQ==