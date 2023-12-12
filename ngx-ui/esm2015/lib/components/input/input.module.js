import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '../tooltip/tooltip.module';
import { InputComponent } from './input.component';
import { InputHintDirective } from './input-hint.directive';
import { AutosizeDirective } from './input-autosize.directive';
import { InputPrefixComponent } from './input-prefix.component';
import { InputSuffixComponent } from './input-suffix.component';
import { AutoSizeInputModule } from '../../directives/autosize-input/autosize-input.module';
import * as ɵngcc0 from '@angular/core';
export class InputModule {
}
InputModule.ɵfac = function InputModule_Factory(t) { return new (t || InputModule)(); };
InputModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: InputModule });
InputModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, FormsModule, AutoSizeInputModule, TooltipModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InputModule, [{
        type: NgModule,
        args: [{
                declarations: [InputComponent, InputHintDirective, AutosizeDirective, InputPrefixComponent, InputSuffixComponent],
                exports: [InputComponent, InputHintDirective, InputPrefixComponent, InputSuffixComponent],
                imports: [CommonModule, FormsModule, AutoSizeInputModule, TooltipModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(InputModule, { declarations: function () { return [InputComponent, InputHintDirective, AutosizeDirective, InputPrefixComponent, InputSuffixComponent]; }, imports: function () { return [CommonModule, FormsModule, AutoSizeInputModule, TooltipModule]; }, exports: function () { return [InputComponent, InputHintDirective, InputPrefixComponent, InputSuffixComponent]; } }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1REFBdUQsQ0FBQzs7QUFPNUYsTUFBTSxPQUFPLFdBQVc7QUFBRzt1Q0FMMUIsUUFBUSxTQUFDLGtCQUNSLFlBQVksRUFBRTtBQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxvQkFBb0IsRUFBRTtnQkFBb0IsQ0FBQyxrQkFDakgsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixDQUFDO0lBQ3pGLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxDQUFDLGNBQ3pFOzs7Ozs7OzttZEFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0SGludERpcmVjdGl2ZSB9IGZyb20gJy4vaW5wdXQtaGludC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQXV0b3NpemVEaXJlY3RpdmUgfSBmcm9tICcuL2lucHV0LWF1dG9zaXplLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJbnB1dFByZWZpeENvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQtcHJlZml4LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dFN1ZmZpeENvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQtc3VmZml4LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRvU2l6ZUlucHV0TW9kdWxlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9hdXRvc2l6ZS1pbnB1dC9hdXRvc2l6ZS1pbnB1dC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtJbnB1dENvbXBvbmVudCwgSW5wdXRIaW50RGlyZWN0aXZlLCBBdXRvc2l6ZURpcmVjdGl2ZSwgSW5wdXRQcmVmaXhDb21wb25lbnQsIElucHV0U3VmZml4Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0lucHV0Q29tcG9uZW50LCBJbnB1dEhpbnREaXJlY3RpdmUsIElucHV0UHJlZml4Q29tcG9uZW50LCBJbnB1dFN1ZmZpeENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBBdXRvU2l6ZUlucHV0TW9kdWxlLCBUb29sdGlwTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dE1vZHVsZSB7fVxuIl19