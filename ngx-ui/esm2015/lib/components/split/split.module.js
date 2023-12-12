import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitDirective } from './split.directive';
import { SplitAreaDirective } from './split-area.directive';
import { SplitHandleComponent } from './split-handle.component';
import * as ɵngcc0 from '@angular/core';
export class SplitModule {
}
SplitModule.ɵfac = function SplitModule_Factory(t) { return new (t || SplitModule)(); };
SplitModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: SplitModule });
SplitModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SplitModule, [{
        type: NgModule,
        args: [{
                declarations: [SplitDirective, SplitAreaDirective, SplitHandleComponent],
                exports: [SplitDirective, SplitAreaDirective, SplitHandleComponent],
                imports: [CommonModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SplitModule, { declarations: function () { return [SplitDirective, SplitAreaDirective, SplitHandleComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [SplitDirective, SplitAreaDirective, SplitHandleComponent]; } }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL3NwbGl0L3NwbGl0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBT2hFLE1BQU0sT0FBTyxXQUFXO0FBQUc7dUNBTDFCLFFBQVEsU0FBQyxrQkFDUixZQUFZLEVBQUU7QUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUMsa0JBQ3hFO0NBQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQyxrQkFDbkUsT0FBTyxFQUFFO0FBQUMsWUFBWSxDQUFDLGNBQ3hCOzs7Ozs7OzttV0FDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFNwbGl0RGlyZWN0aXZlIH0gZnJvbSAnLi9zcGxpdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3BsaXRBcmVhRGlyZWN0aXZlIH0gZnJvbSAnLi9zcGxpdC1hcmVhLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTcGxpdEhhbmRsZUNvbXBvbmVudCB9IGZyb20gJy4vc3BsaXQtaGFuZGxlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1NwbGl0RGlyZWN0aXZlLCBTcGxpdEFyZWFEaXJlY3RpdmUsIFNwbGl0SGFuZGxlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NwbGl0RGlyZWN0aXZlLCBTcGxpdEFyZWFEaXJlY3RpdmUsIFNwbGl0SGFuZGxlQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgU3BsaXRNb2R1bGUge31cbiJdfQ==