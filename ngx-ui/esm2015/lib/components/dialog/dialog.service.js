import { Injectable } from '@angular/core';
import { InjectionRegistryService } from '../../services/injection-registry/injection-registry.service';
import { InjectionService } from '../../services/injection/injection.service';
import { OverlayService } from '../overlay/overlay.service';
import { DialogFormat } from './dialog-format.enum';
import { DialogComponent } from './dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/injection/injection.service";
import * as i2 from "../overlay/overlay.service";
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../services/injection/injection.service';
import * as ɵngcc2 from '../overlay/overlay.service';
export class DialogService extends InjectionRegistryService {
    constructor(injectionService, overlayService) {
        super(injectionService);
        this.injectionService = injectionService;
        this.overlayService = overlayService;
        this.defaults = {
            format: DialogFormat.Regular,
            inputs: {
                zIndex: 991,
                closeOnBlur: true,
                closeOnEscape: true,
                closeButton: true,
                showOverlay: true,
                visible: true
            }
        };
        this.type = DialogComponent;
        this.zIndex = 995;
    }
    create(options) {
        const component = super.create(options);
        this.createSubscriptions(component);
        return component;
    }
    destroy(component) {
        const hasOverlay = component.instance.showOverlay;
        this.zIndex = this.zIndex - 2;
        if (hasOverlay) {
            this.overlayService.removeTriggerComponent(component);
        }
        setTimeout(() => {
            super.destroy(component);
        });
    }
    createSubscriptions(triggerComponent) {
        // eslint-disable-next-line prefer-const
        let closeSub;
        let overlaySub;
        const kill = (c) => {
            /* istanbul ignore if */
            if (c !== triggerComponent) {
                return;
            }
            closeSub.unsubscribe();
            if (overlaySub)
                overlaySub.unsubscribe();
            this.destroy(triggerComponent);
        };
        closeSub = triggerComponent.instance.close.subscribe(kill.bind(this, triggerComponent));
        const zIndex = this.zIndex;
        if (triggerComponent.instance.showOverlay) {
            setTimeout(() => {
                this.overlayService.show({
                    triggerComponent,
                    zIndex
                });
                if (triggerComponent.instance.closeOnBlur) {
                    overlaySub = this.overlayService.click.subscribe(kill);
                }
            });
        }
    }
    assignDefaults(options) {
        options = super.assignDefaults(options);
        /* istanbul ignore else */
        if (!options.zIndex) {
            this.zIndex = this.overlayService.instance ? this.overlayService.instance.zIndex + 3 : this.zIndex + 2;
            options.inputs.zIndex = this.zIndex;
        }
        return options;
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(ɵngcc0.ɵɵinject(ɵngcc1.InjectionService), ɵngcc0.ɵɵinject(ɵngcc2.OverlayService)); };
DialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DialogService_Factory() { return new DialogService(i0.ɵɵinject(i1.InjectionService), i0.ɵɵinject(i2.OverlayService)); }, token: DialogService, providedIn: "root" });
DialogService.ctorParameters = () => [
    { type: InjectionService },
    { type: OverlayService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DialogService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc1.InjectionService }, { type: ɵngcc2.OverlayService }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFFeEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQ7QUFHQztBQUMrRDs7OztBQUFoRSxNQUFNLE9BQU8sYUFBbUMsU0FBUSx3QkFBMkI7QUFDbkYsSUFlRSxZQUFxQixnQkFBa0MsRUFBVyxjQUE4QjtBQUNsRyxRQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzVCLFFBRnVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7QUFBQyxRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtBQUFDLFFBZnhGLGFBQVEsR0FBa0I7QUFDckMsWUFBSSxNQUFNLEVBQUUsWUFBWSxDQUFDLE9BQU87QUFDaEMsWUFBSSxNQUFNLEVBQUU7QUFDWixnQkFBTSxNQUFNLEVBQUUsR0FBRztBQUNqQixnQkFBTSxXQUFXLEVBQUUsSUFBSTtBQUN2QixnQkFBTSxhQUFhLEVBQUUsSUFBSTtBQUN6QixnQkFBTSxXQUFXLEVBQUUsSUFBSTtBQUN2QixnQkFBTSxXQUFXLEVBQUUsSUFBSTtBQUN2QixnQkFBTSxPQUFPLEVBQUUsSUFBSTtBQUNuQixhQUFLO0FBQ0wsU0FBRyxDQUFDO0FBQ0osUUFDWSxTQUFJLEdBQVEsZUFBZSxDQUFDO0FBQ3hDLFFBQVUsV0FBTSxHQUFHLEdBQUcsQ0FBQztBQUN2QixJQUdFLENBQUM7QUFDSCxJQUNFLE1BQU0sQ0FBQyxPQUFzQjtBQUMvQixRQUFJLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDNUMsUUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDeEMsUUFBSSxPQUFPLFNBQVMsQ0FBQztBQUNyQixJQUFFLENBQUM7QUFDSCxJQUNFLE9BQU8sQ0FBQyxTQUFjO0FBQUksUUFDeEIsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7QUFDdEQsUUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2xDLFFBQ0ksSUFBSSxVQUFVLEVBQUU7QUFDcEIsWUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzVELFNBQUs7QUFDTCxRQUNJLFVBQVUsQ0FBQyxHQUFHLEVBQUU7QUFDcEIsWUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFDSCxJQUNFLG1CQUFtQixDQUFDLGdCQUFxQjtBQUFJLFFBQzNDLHdDQUF3QztBQUM1QyxRQUFJLElBQUksUUFBc0IsQ0FBQztBQUMvQixRQUFJLElBQUksVUFBd0IsQ0FBQztBQUNqQyxRQUNJLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7QUFDNUIsWUFBTSx3QkFBd0I7QUFDOUIsWUFBTSxJQUFJLENBQUMsS0FBSyxnQkFBZ0IsRUFBRTtBQUNsQyxnQkFBUSxPQUFPO0FBQ2YsYUFBTztBQUNQLFlBQ00sUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzdCLFlBQU0sSUFBSSxVQUFVO0FBQUUsZ0JBQUEsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQy9DLFlBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3JDLFFBQUksQ0FBQyxDQUFDO0FBQ04sUUFDSSxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0FBQzVGLFFBQUksTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUMvQixRQUNJLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRTtBQUMvQyxZQUFNLFVBQVUsQ0FBQyxHQUFHLEVBQUU7QUFDdEIsZ0JBQVEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7QUFDakMsb0JBQVUsZ0JBQWdCO0FBQzFCLG9CQUFVLE1BQU07QUFDaEIsaUJBQVMsQ0FBQyxDQUFDO0FBQ1gsZ0JBQVEsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO0FBQ25ELG9CQUFVLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakUsaUJBQVM7QUFDVCxZQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ1QsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsY0FBYyxDQUFDLE9BQXNCO0FBQUksUUFDdkMsT0FBTyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDNUMsUUFDSSwwQkFBMEI7QUFDOUIsUUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUN6QixZQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzdHLFlBQ00sT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUMxQyxTQUFLO0FBQ0wsUUFDSSxPQUFPLE9BQU8sQ0FBQztBQUNuQixJQUFFLENBQUM7QUFDSDs4S0FBQztBQUNELHFPQXBGSztBQUFDO0VBSEwsVUFBVSxTQUFDLHJCQUdpQyxZQVRwQyxnQkFBZ0I7T0FPdkIsVUFBVSxFQUFFLE1BQU0sekJBUFMsWUFDcEIsY0FBYztBQUFHO09BT3pCOzs7OztrSEFQMkI7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0aW9uUmVnaXN0cnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5qZWN0aW9uLXJlZ2lzdHJ5L2luamVjdGlvbi1yZWdpc3RyeS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgSW5qZWN0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luamVjdGlvbi9pbmplY3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBPdmVybGF5U2VydmljZSB9IGZyb20gJy4uL292ZXJsYXkvb3ZlcmxheS5zZXJ2aWNlJztcbmltcG9ydCB7IERpYWxvZ0Zvcm1hdCB9IGZyb20gJy4vZGlhbG9nLWZvcm1hdC5lbnVtJztcbmltcG9ydCB7IERpYWxvZ09wdGlvbnMgfSBmcm9tICcuL2RpYWxvZy1vcHRpb25zLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dTZXJ2aWNlPFQgPSBEaWFsb2dDb21wb25lbnQ+IGV4dGVuZHMgSW5qZWN0aW9uUmVnaXN0cnlTZXJ2aWNlPFQ+IHtcbiAgcmVhZG9ubHkgZGVmYXVsdHM6IERpYWxvZ09wdGlvbnMgPSB7XG4gICAgZm9ybWF0OiBEaWFsb2dGb3JtYXQuUmVndWxhcixcbiAgICBpbnB1dHM6IHtcbiAgICAgIHpJbmRleDogOTkxLFxuICAgICAgY2xvc2VPbkJsdXI6IHRydWUsXG4gICAgICBjbG9zZU9uRXNjYXBlOiB0cnVlLFxuICAgICAgY2xvc2VCdXR0b246IHRydWUsXG4gICAgICBzaG93T3ZlcmxheTogdHJ1ZSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9XG4gIH07XG5cbiAgcHJvdGVjdGVkIHR5cGU6IGFueSA9IERpYWxvZ0NvbXBvbmVudDtcbiAgcHJpdmF0ZSB6SW5kZXggPSA5OTU7XG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgaW5qZWN0aW9uU2VydmljZTogSW5qZWN0aW9uU2VydmljZSwgcmVhZG9ubHkgb3ZlcmxheVNlcnZpY2U6IE92ZXJsYXlTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaW5qZWN0aW9uU2VydmljZSk7XG4gIH1cblxuICBjcmVhdGUob3B0aW9uczogRGlhbG9nT3B0aW9ucykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHN1cGVyLmNyZWF0ZShvcHRpb25zKTtcbiAgICB0aGlzLmNyZWF0ZVN1YnNjcmlwdGlvbnMoY29tcG9uZW50KTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xuICB9XG5cbiAgZGVzdHJveShjb21wb25lbnQ6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGhhc092ZXJsYXkgPSBjb21wb25lbnQuaW5zdGFuY2Uuc2hvd092ZXJsYXk7XG4gICAgdGhpcy56SW5kZXggPSB0aGlzLnpJbmRleCAtIDI7XG5cbiAgICBpZiAoaGFzT3ZlcmxheSkge1xuICAgICAgdGhpcy5vdmVybGF5U2VydmljZS5yZW1vdmVUcmlnZ2VyQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzdXBlci5kZXN0cm95KGNvbXBvbmVudCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVTdWJzY3JpcHRpb25zKHRyaWdnZXJDb21wb25lbnQ6IGFueSk6IHZvaWQge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcbiAgICBsZXQgY2xvc2VTdWI6IFN1YnNjcmlwdGlvbjtcbiAgICBsZXQgb3ZlcmxheVN1YjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3Qga2lsbCA9IChjOiBhbnkpID0+IHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKGMgIT09IHRyaWdnZXJDb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjbG9zZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgaWYgKG92ZXJsYXlTdWIpIG92ZXJsYXlTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZGVzdHJveSh0cmlnZ2VyQ29tcG9uZW50KTtcbiAgICB9O1xuXG4gICAgY2xvc2VTdWIgPSB0cmlnZ2VyQ29tcG9uZW50Lmluc3RhbmNlLmNsb3NlLnN1YnNjcmliZShraWxsLmJpbmQodGhpcywgdHJpZ2dlckNvbXBvbmVudCkpO1xuICAgIGNvbnN0IHpJbmRleCA9IHRoaXMuekluZGV4O1xuXG4gICAgaWYgKHRyaWdnZXJDb21wb25lbnQuaW5zdGFuY2Uuc2hvd092ZXJsYXkpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLm92ZXJsYXlTZXJ2aWNlLnNob3coe1xuICAgICAgICAgIHRyaWdnZXJDb21wb25lbnQsXG4gICAgICAgICAgekluZGV4XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodHJpZ2dlckNvbXBvbmVudC5pbnN0YW5jZS5jbG9zZU9uQmx1cikge1xuICAgICAgICAgIG92ZXJsYXlTdWIgPSB0aGlzLm92ZXJsYXlTZXJ2aWNlLmNsaWNrLnN1YnNjcmliZShraWxsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYXNzaWduRGVmYXVsdHMob3B0aW9uczogRGlhbG9nT3B0aW9ucyk6IERpYWxvZ09wdGlvbnMge1xuICAgIG9wdGlvbnMgPSBzdXBlci5hc3NpZ25EZWZhdWx0cyhvcHRpb25zKTtcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKCFvcHRpb25zLnpJbmRleCkge1xuICAgICAgdGhpcy56SW5kZXggPSB0aGlzLm92ZXJsYXlTZXJ2aWNlLmluc3RhbmNlID8gdGhpcy5vdmVybGF5U2VydmljZS5pbnN0YW5jZS56SW5kZXggKyAzIDogdGhpcy56SW5kZXggKyAyO1xuXG4gICAgICBvcHRpb25zLmlucHV0cy56SW5kZXggPSB0aGlzLnpJbmRleDtcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxufVxuIl19