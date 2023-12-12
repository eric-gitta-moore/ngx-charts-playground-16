import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon.module';
import { SectionComponent } from './section.component';
import { SectionHeaderComponent } from './section-header.component';
import * as ɵngcc0 from '@angular/core';
export class SectionModule {
}
SectionModule.ɵfac = function SectionModule_Factory(t) { return new (t || SectionModule)(); };
SectionModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: SectionModule });
SectionModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, IconModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SectionModule, [{
        type: NgModule,
        args: [{
                declarations: [SectionComponent, SectionHeaderComponent],
                exports: [SectionComponent, SectionHeaderComponent],
                imports: [CommonModule, IconModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SectionModule, { declarations: function () { return [SectionComponent, SectionHeaderComponent]; }, imports: function () { return [CommonModule, IconModule]; }, exports: function () { return [SectionComponent, SectionHeaderComponent]; } }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvc2VjdGlvbi9zZWN0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBT3BFLE1BQU0sT0FBTyxhQUFhO0FBQUc7eUNBTDVCLFFBQVEsU0FBQyxrQkFDUixZQUFZLEVBQUUsQ0FBQztZQUFnQixFQUFFLHNCQUFzQixDQUFDLGtCQUN4RCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtvQkFBc0IsQ0FBQyxrQkFDbkQsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxjQUNwQzs7Ozs7Ozs7O2lWQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VjdGlvbkhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbi1oZWFkZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2VjdGlvbkNvbXBvbmVudCwgU2VjdGlvbkhlYWRlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTZWN0aW9uQ29tcG9uZW50LCBTZWN0aW9uSGVhZGVyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSWNvbk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgU2VjdGlvbk1vZHVsZSB7fVxuIl19