import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterModule } from './filter/filter.module';
import { DecamelizeModule } from './decamelize/decamelize.module';
import { JSONTreeModule } from './json-tree/json-tree.module';
import { TimeZoneModule } from './time-zone/time-zone.module';
import { CammelToSnakeModule } from './cammel-to-snake/cammel-to-snake.module';
import * as ɵngcc0 from '@angular/core';
export class PipesModule {
}
PipesModule.ɵfac = function PipesModule_Factory(t) { return new (t || PipesModule)(); };
PipesModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: PipesModule });
PipesModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, TimeZoneModule, DecamelizeModule, FilterModule, JSONTreeModule, CammelToSnakeModule], TimeZoneModule, DecamelizeModule, FilterModule, JSONTreeModule, CammelToSnakeModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PipesModule, [{
        type: NgModule,
        args: [{
                exports: [TimeZoneModule, DecamelizeModule, FilterModule, JSONTreeModule, CammelToSnakeModule],
                imports: [CommonModule, TimeZoneModule, DecamelizeModule, FilterModule, JSONTreeModule, CammelToSnakeModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(PipesModule, { imports: function () { return [CommonModule, TimeZoneModule, DecamelizeModule, FilterModule, JSONTreeModule, CammelToSnakeModule]; }, exports: function () { return [TimeZoneModule, DecamelizeModule, FilterModule, JSONTreeModule, CammelToSnakeModule]; } }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXMubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9waXBlcy9waXBlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7O0FBTS9FLE1BQU0sT0FBTyxXQUFXO0FBQUc7dUNBSjFCLFFBQVEsU0FBQyxrQkFDUixPQUFPLEVBQUUsQ0FBQztTQUFjLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsQ0FBQztnQkFDOUYsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixDQUFDLGNBQzdHOzs7Ozs7OztpWEFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZpbHRlck1vZHVsZSB9IGZyb20gJy4vZmlsdGVyL2ZpbHRlci5tb2R1bGUnO1xuaW1wb3J0IHsgRGVjYW1lbGl6ZU1vZHVsZSB9IGZyb20gJy4vZGVjYW1lbGl6ZS9kZWNhbWVsaXplLm1vZHVsZSc7XG5pbXBvcnQgeyBKU09OVHJlZU1vZHVsZSB9IGZyb20gJy4vanNvbi10cmVlL2pzb24tdHJlZS5tb2R1bGUnO1xuaW1wb3J0IHsgVGltZVpvbmVNb2R1bGUgfSBmcm9tICcuL3RpbWUtem9uZS90aW1lLXpvbmUubW9kdWxlJztcbmltcG9ydCB7IENhbW1lbFRvU25ha2VNb2R1bGUgfSBmcm9tICcuL2NhbW1lbC10by1zbmFrZS9jYW1tZWwtdG8tc25ha2UubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW1RpbWVab25lTW9kdWxlLCBEZWNhbWVsaXplTW9kdWxlLCBGaWx0ZXJNb2R1bGUsIEpTT05UcmVlTW9kdWxlLCBDYW1tZWxUb1NuYWtlTW9kdWxlXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgVGltZVpvbmVNb2R1bGUsIERlY2FtZWxpemVNb2R1bGUsIEZpbHRlck1vZHVsZSwgSlNPTlRyZWVNb2R1bGUsIENhbW1lbFRvU25ha2VNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFBpcGVzTW9kdWxlIHt9XG4iXX0=