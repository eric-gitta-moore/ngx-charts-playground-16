import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from '../dropdown/dropdown.module';
import { ToolbarComponent } from './toolbar.component';
import { ToolbarTitleDirective } from './toolbar-title.directive';
import { ToolbarContentDirective } from './toolbar-content.directive';
import * as ɵngcc0 from '@angular/core';
export class ToolbarModule {
}
ToolbarModule.ɵfac = function ToolbarModule_Factory(t) { return new (t || ToolbarModule)(); };
ToolbarModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: ToolbarModule });
ToolbarModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, DropdownModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ToolbarModule, [{
        type: NgModule,
        args: [{
                declarations: [ToolbarComponent, ToolbarTitleDirective, ToolbarContentDirective],
                exports: [ToolbarComponent, ToolbarTitleDirective, ToolbarContentDirective],
                imports: [CommonModule, DropdownModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ToolbarModule, { declarations: function () { return [ToolbarComponent, ToolbarTitleDirective, ToolbarContentDirective]; }, imports: function () { return [CommonModule, DropdownModule]; }, exports: function () { return [ToolbarComponent, ToolbarTitleDirective, ToolbarContentDirective]; } }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBT3RFLE1BQU0sT0FBTyxhQUFhO0FBQUc7eUNBTDVCLFFBQVEsU0FBQyxrQkFDUixZQUFZLEVBQUUsQ0FBQztZQUFnQixFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixDQUFDLGtCQUNoRjtDQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsQ0FBQyxrQkFDM0UsT0FBTyxFQUFFLENBQUM7RUFBWSxFQUFFLGNBQWMsQ0FBQyxjQUN4Qzs7Ozs7Ozs7cVlBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJy4uL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZSc7XG5cbmltcG9ydCB7IFRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRvb2xiYXJUaXRsZURpcmVjdGl2ZSB9IGZyb20gJy4vdG9vbGJhci10aXRsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVG9vbGJhckNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL3Rvb2xiYXItY29udGVudC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUb29sYmFyQ29tcG9uZW50LCBUb29sYmFyVGl0bGVEaXJlY3RpdmUsIFRvb2xiYXJDb250ZW50RGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW1Rvb2xiYXJDb21wb25lbnQsIFRvb2xiYXJUaXRsZURpcmVjdGl2ZSwgVG9vbGJhckNvbnRlbnREaXJlY3RpdmVdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEcm9wZG93bk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhck1vZHVsZSB7fVxuIl19