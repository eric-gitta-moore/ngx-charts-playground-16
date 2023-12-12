import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './tooltip.directive';
import { TooltipContentComponent } from './tooltip.component';
import { InjectionService } from '../../services/injection/injection.service';
import * as ɵngcc0 from '@angular/core';
export class TooltipModule {
}
TooltipModule.ɵfac = function TooltipModule_Factory(t) { return new (t || TooltipModule)(); };
TooltipModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: TooltipModule });
TooltipModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ providers: [InjectionService], imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TooltipModule, [{
        type: NgModule,
        args: [{
                declarations: [TooltipContentComponent, TooltipDirective],
                providers: [InjectionService],
                exports: [TooltipContentComponent, TooltipDirective],
                imports: [CommonModule],
                entryComponents: [TooltipContentComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TooltipModule, { declarations: function () { return [TooltipContentComponent, TooltipDirective]; }, imports: function () { return [CommonModule]; }, exports: function () { return [TooltipContentComponent, TooltipDirective]; } }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvdG9vbHRpcC90b29sdGlwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7QUFTOUUsTUFBTSxPQUFPLGFBQWE7QUFBRzt5Q0FQNUIsUUFBUSxTQUFDLGtCQUNSLFlBQVksRUFBRSxDQUFDO21CQUF1QixFQUFFLGdCQUFnQixDQUFDLGtCQUN6RCxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0I7QUFBQyxrQkFDN0IsT0FBTyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsZ0JBQWdCLENBQUMsa0JBQ3BELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztPQUN2QixlQUFlLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxjQUMzQzs7Ozs7Ozs7Ozt1VUFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICcuL3Rvb2x0aXAuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRvb2x0aXBDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi90b29sdGlwLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEluamVjdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmplY3Rpb24vaW5qZWN0aW9uLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUb29sdGlwQ29udGVudENvbXBvbmVudCwgVG9vbHRpcERpcmVjdGl2ZV0sXG4gIHByb3ZpZGVyczogW0luamVjdGlvblNlcnZpY2VdLFxuICBleHBvcnRzOiBbVG9vbHRpcENvbnRlbnRDb21wb25lbnQsIFRvb2x0aXBEaXJlY3RpdmVdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbVG9vbHRpcENvbnRlbnRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBNb2R1bGUge31cbiJdfQ==