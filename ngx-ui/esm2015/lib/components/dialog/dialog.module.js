import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InjectionService } from '../../services/injection/injection.service';
import { InputModule } from '../input/input.module';
import { LongPressButtonModule } from '../long-press/long-press-button.module';
import { OverlayModule } from '../overlay/overlay.module';
import { AlertComponent } from './alert/alert.component';
import { DialogComponent } from './dialog.component';
import { LargeFormatDialogFooterComponent } from './large-format/components/large-format-dialog-footer/large-format-dialog-footer.component';
import { LargeFormatDialogHeaderActionComponent } from './large-format/components/large-format-dialog-header-action/large-format-dialog-header-action.component';
import { LargeFormatDialogHeaderTitleComponent } from './large-format/components/large-format-dialog-header-title/large-format-dialog-header-title.component';
import { LargeFormatDialogStepperDirective } from './large-format/directives/large-format-dialog-stepper/large-format-dialog-stepper.directive';
import { LargeFormatDialogSubStepperDirective } from './large-format/directives/large-format-dialog-stepper/large-format-dialog-sub-stepper.directive';
import { LargeFormatDialogSubTabsDirective } from './large-format/directives/large-format-dialog-tabs/large-format-dialog-sub-tabs.directive';
import { LargeFormatDialogTabsDirective } from './large-format/directives/large-format-dialog-tabs/large-format-dialog-tabs.directive';
import { LargeFormatDialogContentComponent } from './large-format/large-format-dialog-content.component';
import * as ɵngcc0 from '@angular/core';
export class DialogModule {
}
DialogModule.ɵfac = function DialogModule_Factory(t) { return new (t || DialogModule)(); };
DialogModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: DialogModule });
DialogModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ providers: [InjectionService], imports: [[CommonModule, OverlayModule, InputModule, FormsModule, LongPressButtonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DialogModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    DialogComponent,
                    AlertComponent,
                    LargeFormatDialogContentComponent,
                    LargeFormatDialogHeaderTitleComponent,
                    LargeFormatDialogHeaderActionComponent,
                    LargeFormatDialogFooterComponent,
                    LargeFormatDialogStepperDirective,
                    LargeFormatDialogSubStepperDirective,
                    LargeFormatDialogTabsDirective,
                    LargeFormatDialogSubTabsDirective
                ],
                exports: [
                    DialogComponent,
                    AlertComponent,
                    LargeFormatDialogContentComponent,
                    LargeFormatDialogFooterComponent,
                    LargeFormatDialogStepperDirective,
                    LargeFormatDialogSubStepperDirective,
                    LargeFormatDialogTabsDirective,
                    LargeFormatDialogSubTabsDirective
                ],
                providers: [InjectionService],
                imports: [CommonModule, OverlayModule, InputModule, FormsModule, LongPressButtonModule],
                entryComponents: [DialogComponent, AlertComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DialogModule, { declarations: function () { return [DialogComponent,
        AlertComponent,
        LargeFormatDialogContentComponent,
        LargeFormatDialogHeaderTitleComponent,
        LargeFormatDialogHeaderActionComponent,
        LargeFormatDialogFooterComponent,
        LargeFormatDialogStepperDirective,
        LargeFormatDialogSubStepperDirective,
        LargeFormatDialogTabsDirective,
        LargeFormatDialogSubTabsDirective]; }, imports: function () { return [CommonModule, OverlayModule, InputModule, FormsModule, LongPressButtonModule]; }, exports: function () { return [DialogComponent,
        AlertComponent,
        LargeFormatDialogContentComponent,
        LargeFormatDialogFooterComponent,
        LargeFormatDialogStepperDirective,
        LargeFormatDialogSubStepperDirective,
        LargeFormatDialogTabsDirective,
        LargeFormatDialogSubTabsDirective]; } }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDJGQUEyRixDQUFDO0FBQzdJLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLHlHQUF5RyxDQUFDO0FBQ2pLLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLHVHQUF1RyxDQUFDO0FBQzlKLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDZGQUE2RixDQUFDO0FBQ2hKLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLGlHQUFpRyxDQUFDO0FBQ3ZKLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDJGQUEyRixDQUFDO0FBQzlJLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHVGQUF1RixDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHNEQUFzRCxDQUFDOztBQTZCekcsTUFBTSxPQUFPLFlBQVk7QUFBRzt3Q0EzQjNCLFFBQVEsU0FBQyxrQkFDUixZQUFZLEVBQUU7bUJBQ1osZUFBZSxzQkFDZixjQUFjO1NBQ2QsaUNBQWlDLHNCQUNqQyxxQ0FBcUMsc0JBQ3JDLHNDQUFzQyxzQkFDdEM7OEJBQWdDLHNCQUNoQyxpQ0FBaUMsc0JBQ2pDOztXQUFvQztnQkFDcEM7Y0FBOEIsc0JBQzlCO2dDQUFpQztjQUNsQyxrQkFDRCxPQUFPLEVBQUU7UUFDUCxlQUFlLHNCQUNmO0FBQWMsc0JBQ2QsaUNBQWlDO2lCQUNqQyxnQ0FBZ0M7aUJBQ2hDLGlDQUFpQztpQkFDakMsb0NBQW9DO2lCQUNwQyw4QkFBOEI7aUJBQzlCLGlDQUFpQztjQUNsQzthQUNELFNBQVMsRUFBRSxDQUFDO2NBQWdCLENBQUMsa0JBQzdCO0dBQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUU7VUFBVyxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsQ0FBQztVQUN2RixlQUFlLEVBQUUsQ0FBQyxlQUFlLEVBQUU7S0FBYyxDQUFDLGNBQ25EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1REFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgSW5qZWN0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luamVjdGlvbi9pbmplY3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBJbnB1dE1vZHVsZSB9IGZyb20gJy4uL2lucHV0L2lucHV0Lm1vZHVsZSc7XG5pbXBvcnQgeyBMb25nUHJlc3NCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9sb25nLXByZXNzL2xvbmctcHJlc3MtYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnLi4vb3ZlcmxheS9vdmVybGF5Lm1vZHVsZSc7XG5cbmltcG9ydCB7IEFsZXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9hbGVydC9hbGVydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IExhcmdlRm9ybWF0RGlhbG9nRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXJnZS1mb3JtYXQvY29tcG9uZW50cy9sYXJnZS1mb3JtYXQtZGlhbG9nLWZvb3Rlci9sYXJnZS1mb3JtYXQtZGlhbG9nLWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGFyZ2VGb3JtYXREaWFsb2dIZWFkZXJBY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2xhcmdlLWZvcm1hdC9jb21wb25lbnRzL2xhcmdlLWZvcm1hdC1kaWFsb2ctaGVhZGVyLWFjdGlvbi9sYXJnZS1mb3JtYXQtZGlhbG9nLWhlYWRlci1hY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IExhcmdlRm9ybWF0RGlhbG9nSGVhZGVyVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL2xhcmdlLWZvcm1hdC9jb21wb25lbnRzL2xhcmdlLWZvcm1hdC1kaWFsb2ctaGVhZGVyLXRpdGxlL2xhcmdlLWZvcm1hdC1kaWFsb2ctaGVhZGVyLXRpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXJnZUZvcm1hdERpYWxvZ1N0ZXBwZXJEaXJlY3RpdmUgfSBmcm9tICcuL2xhcmdlLWZvcm1hdC9kaXJlY3RpdmVzL2xhcmdlLWZvcm1hdC1kaWFsb2ctc3RlcHBlci9sYXJnZS1mb3JtYXQtZGlhbG9nLXN0ZXBwZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IExhcmdlRm9ybWF0RGlhbG9nU3ViU3RlcHBlckRpcmVjdGl2ZSB9IGZyb20gJy4vbGFyZ2UtZm9ybWF0L2RpcmVjdGl2ZXMvbGFyZ2UtZm9ybWF0LWRpYWxvZy1zdGVwcGVyL2xhcmdlLWZvcm1hdC1kaWFsb2ctc3ViLXN0ZXBwZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IExhcmdlRm9ybWF0RGlhbG9nU3ViVGFic0RpcmVjdGl2ZSB9IGZyb20gJy4vbGFyZ2UtZm9ybWF0L2RpcmVjdGl2ZXMvbGFyZ2UtZm9ybWF0LWRpYWxvZy10YWJzL2xhcmdlLWZvcm1hdC1kaWFsb2ctc3ViLXRhYnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IExhcmdlRm9ybWF0RGlhbG9nVGFic0RpcmVjdGl2ZSB9IGZyb20gJy4vbGFyZ2UtZm9ybWF0L2RpcmVjdGl2ZXMvbGFyZ2UtZm9ybWF0LWRpYWxvZy10YWJzL2xhcmdlLWZvcm1hdC1kaWFsb2ctdGFicy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTGFyZ2VGb3JtYXREaWFsb2dDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9sYXJnZS1mb3JtYXQvbGFyZ2UtZm9ybWF0LWRpYWxvZy1jb250ZW50LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIERpYWxvZ0NvbXBvbmVudCxcbiAgICBBbGVydENvbXBvbmVudCxcbiAgICBMYXJnZUZvcm1hdERpYWxvZ0NvbnRlbnRDb21wb25lbnQsXG4gICAgTGFyZ2VGb3JtYXREaWFsb2dIZWFkZXJUaXRsZUNvbXBvbmVudCxcbiAgICBMYXJnZUZvcm1hdERpYWxvZ0hlYWRlckFjdGlvbkNvbXBvbmVudCxcbiAgICBMYXJnZUZvcm1hdERpYWxvZ0Zvb3RlckNvbXBvbmVudCxcbiAgICBMYXJnZUZvcm1hdERpYWxvZ1N0ZXBwZXJEaXJlY3RpdmUsXG4gICAgTGFyZ2VGb3JtYXREaWFsb2dTdWJTdGVwcGVyRGlyZWN0aXZlLFxuICAgIExhcmdlRm9ybWF0RGlhbG9nVGFic0RpcmVjdGl2ZSxcbiAgICBMYXJnZUZvcm1hdERpYWxvZ1N1YlRhYnNEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIERpYWxvZ0NvbXBvbmVudCxcbiAgICBBbGVydENvbXBvbmVudCxcbiAgICBMYXJnZUZvcm1hdERpYWxvZ0NvbnRlbnRDb21wb25lbnQsXG4gICAgTGFyZ2VGb3JtYXREaWFsb2dGb290ZXJDb21wb25lbnQsXG4gICAgTGFyZ2VGb3JtYXREaWFsb2dTdGVwcGVyRGlyZWN0aXZlLFxuICAgIExhcmdlRm9ybWF0RGlhbG9nU3ViU3RlcHBlckRpcmVjdGl2ZSxcbiAgICBMYXJnZUZvcm1hdERpYWxvZ1RhYnNEaXJlY3RpdmUsXG4gICAgTGFyZ2VGb3JtYXREaWFsb2dTdWJUYWJzRGlyZWN0aXZlXG4gIF0sXG4gIHByb3ZpZGVyczogW0luamVjdGlvblNlcnZpY2VdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBJbnB1dE1vZHVsZSwgRm9ybXNNb2R1bGUsIExvbmdQcmVzc0J1dHRvbk1vZHVsZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW0RpYWxvZ0NvbXBvbmVudCwgQWxlcnRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ01vZHVsZSB7fVxuIl19