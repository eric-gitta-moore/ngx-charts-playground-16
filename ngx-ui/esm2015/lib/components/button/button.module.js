import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from '@swimlane/ng2-file-upload';
import { FileButtonComponent } from './file-button.component';
import { ButtonComponent } from './button.component';
import * as ɵngcc0 from '@angular/core';
export class ButtonModule {
}
ButtonModule.ɵfac = function ButtonModule_Factory(t) { return new (t || ButtonModule)(); };
ButtonModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: ButtonModule });
ButtonModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, FileUploadModule], FileUploadModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ButtonModule, [{
        type: NgModule,
        args: [{
                declarations: [FileButtonComponent, ButtonComponent],
                exports: [FileButtonComponent, FileUploadModule, ButtonComponent],
                imports: [CommonModule, FileUploadModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ButtonModule, { declarations: function () { return [FileButtonComponent, ButtonComponent]; }, imports: function () { return [CommonModule, FileUploadModule]; }, exports: function () { return [FileButtonComponent, FileUploadModule, ButtonComponent]; } }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBT3JELE1BQU0sT0FBTyxZQUFZO0FBQUc7d0NBTDNCLFFBQVEsU0FBQyxrQkFDUixZQUFZLEVBQUUsQ0FBQztpQkFBbUIsRUFBRSxlQUFlLENBQUMsa0JBQ3BELE9BQU8sRUFBRSxDQUFDLG1CQUFtQjtDQUFFLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxrQkFDakUsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLGNBQzFDOzs7Ozs7Ozs7Z1dBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAnQHN3aW1sYW5lL25nMi1maWxlLXVwbG9hZCc7XG5pbXBvcnQgeyBGaWxlQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9maWxlLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRmlsZUJ1dHRvbkNvbXBvbmVudCwgQnV0dG9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0ZpbGVCdXR0b25Db21wb25lbnQsIEZpbGVVcGxvYWRNb2R1bGUsIEJ1dHRvbkNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZpbGVVcGxvYWRNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbk1vZHVsZSB7fVxuIl19