import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DblClickCopyModule } from './dbl-click-copy/dbl-click-copy.module';
import { VisibilityModule } from './visibility/visibility.module';
import { LongPressModule } from './long-press/long-press.module';
import { PatternValidatorModule } from './validators/pattern-validator/pattern-validator.module';
import * as ɵngcc0 from '@angular/core';
export class DirectivesModule {
}
DirectivesModule.ɵfac = function DirectivesModule_Factory(t) { return new (t || DirectivesModule)(); };
DirectivesModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: DirectivesModule });
DirectivesModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, VisibilityModule, DblClickCopyModule, LongPressModule, PatternValidatorModule], VisibilityModule, DblClickCopyModule, LongPressModule, PatternValidatorModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DirectivesModule, [{
        type: NgModule,
        args: [{
                exports: [VisibilityModule, DblClickCopyModule, LongPressModule, PatternValidatorModule],
                imports: [CommonModule, VisibilityModule, DblClickCopyModule, LongPressModule, PatternValidatorModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DirectivesModule, { imports: function () { return [CommonModule, VisibilityModule, DblClickCopyModule, LongPressModule, PatternValidatorModule]; }, exports: function () { return [VisibilityModule, DblClickCopyModule, LongPressModule, PatternValidatorModule]; } }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlcy5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2RpcmVjdGl2ZXMvZGlyZWN0aXZlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRWpFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDOztBQU1qRyxNQUFNLE9BQU8sZ0JBQWdCO0FBQUc7NENBSi9CLFFBQVEsU0FBQyxrQkFDUixPQUFPLEVBQUUsQ0FBQztDQUFnQixFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQyxrQkFDeEYsT0FBTyxFQUFFO0FBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQyxjQUN2Rzs7Ozs7Ozs7MFdBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEYmxDbGlja0NvcHlNb2R1bGUgfSBmcm9tICcuL2RibC1jbGljay1jb3B5L2RibC1jbGljay1jb3B5Lm1vZHVsZSc7XG5pbXBvcnQgeyBWaXNpYmlsaXR5TW9kdWxlIH0gZnJvbSAnLi92aXNpYmlsaXR5L3Zpc2liaWxpdHkubW9kdWxlJztcbmltcG9ydCB7IExvbmdQcmVzc01vZHVsZSB9IGZyb20gJy4vbG9uZy1wcmVzcy9sb25nLXByZXNzLm1vZHVsZSc7XG5cbmltcG9ydCB7IFBhdHRlcm5WYWxpZGF0b3JNb2R1bGUgfSBmcm9tICcuL3ZhbGlkYXRvcnMvcGF0dGVybi12YWxpZGF0b3IvcGF0dGVybi12YWxpZGF0b3IubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW1Zpc2liaWxpdHlNb2R1bGUsIERibENsaWNrQ29weU1vZHVsZSwgTG9uZ1ByZXNzTW9kdWxlLCBQYXR0ZXJuVmFsaWRhdG9yTW9kdWxlXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgVmlzaWJpbGl0eU1vZHVsZSwgRGJsQ2xpY2tDb3B5TW9kdWxlLCBMb25nUHJlc3NNb2R1bGUsIFBhdHRlcm5WYWxpZGF0b3JNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZXNNb2R1bGUge31cbiJdfQ==