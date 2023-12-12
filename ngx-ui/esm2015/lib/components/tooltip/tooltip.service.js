import { Injectable } from '@angular/core';
import { InjectionService } from '../../services/injection/injection.service';
import { InjectionRegistryService } from '../../services/injection-registry/injection-registry.service';
import { TooltipContentComponent } from './tooltip.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/injection/injection.service";
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../services/injection/injection.service';
export class TooltipService extends InjectionRegistryService {
    constructor(injectionService) {
        super(injectionService);
        this.type = TooltipContentComponent;
    }
}
TooltipService.ɵfac = function TooltipService_Factory(t) { return new (t || TooltipService)(ɵngcc0.ɵɵinject(ɵngcc1.InjectionService)); };
TooltipService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TooltipService_Factory() { return new TooltipService(i0.ɵɵinject(i1.InjectionService)); }, token: TooltipService, providedIn: "root" });
TooltipService.ctorParameters = () => [
    { type: InjectionService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TooltipService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc1.InjectionService }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL3Rvb2x0aXAvdG9vbHRpcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDeEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUQ7QUFHQzs7O0FBQ0QsTUFBTSxPQUFPLGNBQWUsU0FBUSx3QkFBaUQ7QUFDckYsSUFFRSxZQUFZLGdCQUFrQztBQUNoRCxRQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzVCLFFBSkUsU0FBSSxHQUFrQyx1QkFBdUIsQ0FBQztBQUNoRSxJQUdFLENBQUM7QUFDSDt5SUFBQztBQUNELHlNQVBLO0FBQUM7RUFITCxVQUFVLFNBQUMsckJBR2tDLFlBUHJDLGdCQUFnQjtBQUFHO0tBSzFCLFVBQVUsRUFBRSxNQUFNLGNBQ25COzs7OztpRkFONkI7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5qZWN0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luamVjdGlvbi9pbmplY3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBJbmplY3Rpb25SZWdpc3RyeVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmplY3Rpb24tcmVnaXN0cnkvaW5qZWN0aW9uLXJlZ2lzdHJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgVG9vbHRpcENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2x0aXAuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcFNlcnZpY2UgZXh0ZW5kcyBJbmplY3Rpb25SZWdpc3RyeVNlcnZpY2U8VG9vbHRpcENvbnRlbnRDb21wb25lbnQ+IHtcbiAgdHlwZTogVHlwZTxUb29sdGlwQ29udGVudENvbXBvbmVudD4gPSBUb29sdGlwQ29udGVudENvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihpbmplY3Rpb25TZXJ2aWNlOiBJbmplY3Rpb25TZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0aW9uU2VydmljZSk7XG4gIH1cbn1cbiJdfQ==