import { Injectable, RendererFactory2 } from '@angular/core';
import { InjectionService } from '../../services/injection/injection.service';
import { InjectionRegistryService } from '../../services/injection-registry/injection-registry.service';
import { DrawerComponent } from './drawer.component';
import { OverlayService } from '../overlay/overlay.service';
import { DrawerDirection } from './drawer-direction.enum';
import * as i0 from "@angular/core";
import * as i1 from "../../services/injection/injection.service";
import * as i2 from "../overlay/overlay.service";
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../services/injection/injection.service';
import * as ɵngcc2 from '../overlay/overlay.service';
export class DrawerService extends InjectionRegistryService {
    constructor(injectionService, overlayService, rendererFactory) {
        super(injectionService);
        this.injectionService = injectionService;
        this.overlayService = overlayService;
        this.rendererFactory = rendererFactory;
        this.type = DrawerComponent;
        this.defaults = {
            inputs: {
                direction: DrawerDirection.Left
            }
        };
        this.zIndex = 995;
        this.size = 80;
        this.renderer = this.rendererFactory.createRenderer(null, null);
    }
    create(options) {
        const component = super.create(options);
        this.createSubscriptions(component, options.isRoot, options.parentContainer);
        return component;
    }
    destroy(component) {
        // race case clicking fast errors here
        if (component && component.instance) {
            component.instance.size = 0;
        }
        setTimeout(() => {
            this.zIndex = this.zIndex - 2;
            this.size = this.size + 10;
            this.overlayService.removeTriggerComponent(component);
            super.destroy(component);
        }, 10);
    }
    assignDefaults(options) {
        options = super.assignDefaults(options);
        if (!options.inputs.zIndex) {
            this.zIndex = this.overlayService.instance
                ? this.overlayService.instance.zIndex + 3
                : /* istanbul ignore next */ this.zIndex + 2;
            options.inputs.zIndex = this.zIndex;
        }
        this.size = this.size - 10;
        if (!options.inputs.size) {
            options.inputs.size = this.size;
        }
        return options;
    }
    createSubscriptions(component, isRoot = true, parentContainer) {
        if (isRoot) {
            this.overlayService.show({
                triggerComponent: component,
                zIndex: this.zIndex
            });
        }
        // eslint-disable-next-line prefer-const
        let closeSub;
        let overlaySub;
        const kill = (c) => {
            /* istanbul ignore if */
            if (component !== c) {
                return;
            }
            closeSub.unsubscribe();
            if (overlaySub) {
                overlaySub.unsubscribe();
            }
            if (this.parentListenerFunc && this.components.get(this.type).length === 1) {
                this.parentListenerFunc();
            }
            this.destroy(component);
        };
        closeSub = component.instance.close.subscribe(kill.bind(this, component));
        if (component.instance.closeOnOutsideClick) {
            if (isRoot) {
                overlaySub = this.overlayService.click.subscribe(kill);
            }
            else {
                const components = this.components.get(this.type);
                this.parentListenerFunc = this.renderer.listen(parentContainer, 'click', evt => {
                    /* istanbul ignore else */
                    if (evt.target === parentContainer) {
                        kill(components[components.length - 1]);
                    }
                });
            }
        }
    }
}
DrawerService.ɵfac = function DrawerService_Factory(t) { return new (t || DrawerService)(ɵngcc0.ɵɵinject(ɵngcc1.InjectionService), ɵngcc0.ɵɵinject(ɵngcc2.OverlayService), ɵngcc0.ɵɵinject(ɵngcc0.RendererFactory2)); };
DrawerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DrawerService_Factory() { return new DrawerService(i0.ɵɵinject(i1.InjectionService), i0.ɵɵinject(i2.OverlayService), i0.ɵɵinject(i0.RendererFactory2)); }, token: DrawerService, providedIn: "root" });
DrawerService.ctorParameters = () => [
    { type: InjectionService },
    { type: OverlayService },
    { type: RendererFactory2 }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DrawerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc1.InjectionService }, { type: ɵngcc2.OverlayService }, { type: ɵngcc0.RendererFactory2 }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvZHJhd2VyL2RyYXdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQTJCLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFEO0FBQXFDO0FBS2pDOzs7O0FBQUosTUFBTSxPQUFPLGFBQWMsU0FBUSx3QkFBeUM7QUFDNUUsSUFhRSxZQUNXLGdCQUFrQyxFQUMxQixjQUE4QixFQUM5QixlQUFpQztBQUNuRCxRQUNDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzVCLFFBTGEscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtBQUFDLFFBQzNCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtBQUFDLFFBQy9CLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtBQUN0RCxRQWpCRSxTQUFJLEdBQVEsZUFBZSxDQUFDO0FBQzlCLFFBQ1csYUFBUSxHQUFrQjtBQUNyQyxZQUFJLE1BQU0sRUFBRTtBQUNaLGdCQUFNLFNBQVMsRUFBRSxlQUFlLENBQUMsSUFBSTtBQUNyQyxhQUFLO0FBQ0wsU0FBRyxDQUFDO0FBQ0osUUFFVSxXQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ3ZCLFFBQVUsU0FBSSxHQUFHLEVBQUUsQ0FBQztBQUNwQixRQVFJLElBQUksQ0FBQyxR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QyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRCxxQkFBVztBQUNYLGdCQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ1gsYUFBTztBQUNQLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSDt3TkFBQztBQUNELHVRQTFHSztBQUFDO0VBSEwsVUFBVSxTQUFDLHJCQUdpQyxZQVZwQyxnQkFBZ0I7T0FRdkIsVUFBVSxFQUFFLE1BQU0sekJBUlMsWUFHcEIsY0FBYztTQU10QixUQU4wQixZQU5tQixnQkFBZ0I7QUFBRzs7Ozs7O3FKQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnRSZWYsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEluamVjdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmplY3Rpb24vaW5qZWN0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5qZWN0aW9uUmVnaXN0cnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5qZWN0aW9uLXJlZ2lzdHJ5L2luamVjdGlvbi1yZWdpc3RyeS5zZXJ2aWNlJztcbmltcG9ydCB7IERyYXdlckNvbXBvbmVudCB9IGZyb20gJy4vZHJhd2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPdmVybGF5U2VydmljZSB9IGZyb20gJy4uL292ZXJsYXkvb3ZlcmxheS5zZXJ2aWNlJztcbmltcG9ydCB7IERyYXdlckRpcmVjdGlvbiB9IGZyb20gJy4vZHJhd2VyLWRpcmVjdGlvbi5lbnVtJztcbmltcG9ydCB7IERyYXdlck9wdGlvbnMgfSBmcm9tICcuL2RyYXdlci1vcHRpb25zLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERyYXdlclNlcnZpY2UgZXh0ZW5kcyBJbmplY3Rpb25SZWdpc3RyeVNlcnZpY2U8RHJhd2VyQ29tcG9uZW50PiB7XG4gIHR5cGU6IGFueSA9IERyYXdlckNvbXBvbmVudDtcblxuICByZWFkb25seSBkZWZhdWx0czogRHJhd2VyT3B0aW9ucyA9IHtcbiAgICBpbnB1dHM6IHtcbiAgICAgIGRpcmVjdGlvbjogRHJhd2VyRGlyZWN0aW9uLkxlZnRcbiAgICB9XG4gIH07XG5cbiAgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgcHJpdmF0ZSB6SW5kZXggPSA5OTU7XG4gIHByaXZhdGUgc2l6ZSA9IDgwO1xuICBwcml2YXRlIHBhcmVudExpc3RlbmVyRnVuYzogKCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICByZWFkb25seSBpbmplY3Rpb25TZXJ2aWNlOiBJbmplY3Rpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgb3ZlcmxheVNlcnZpY2U6IE92ZXJsYXlTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyXG4gICkge1xuICAgIHN1cGVyKGluamVjdGlvblNlcnZpY2UpO1xuICAgIHRoaXMucmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgfVxuXG4gIGNyZWF0ZShvcHRpb25zOiBEcmF3ZXJPcHRpb25zKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gc3VwZXIuY3JlYXRlKG9wdGlvbnMpO1xuICAgIHRoaXMuY3JlYXRlU3Vic2NyaXB0aW9ucyhjb21wb25lbnQsIG9wdGlvbnMuaXNSb290LCBvcHRpb25zLnBhcmVudENvbnRhaW5lcik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfVxuXG4gIGRlc3Ryb3koY29tcG9uZW50OiBDb21wb25lbnRSZWY8RHJhd2VyQ29tcG9uZW50Pik6IHZvaWQge1xuICAgIC8vIHJhY2UgY2FzZSBjbGlja2luZyBmYXN0IGVycm9ycyBoZXJlXG4gICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuaW5zdGFuY2UpIHtcbiAgICAgIGNvbXBvbmVudC5pbnN0YW5jZS5zaXplID0gMDtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuekluZGV4ID0gdGhpcy56SW5kZXggLSAyO1xuICAgICAgdGhpcy5zaXplID0gdGhpcy5zaXplICsgMTA7XG4gICAgICB0aGlzLm92ZXJsYXlTZXJ2aWNlLnJlbW92ZVRyaWdnZXJDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgIHN1cGVyLmRlc3Ryb3koY29tcG9uZW50KTtcbiAgICB9LCAxMCk7XG4gIH1cblxuICBhc3NpZ25EZWZhdWx0cyhvcHRpb25zOiBEcmF3ZXJPcHRpb25zKTogYW55IHtcbiAgICBvcHRpb25zID0gc3VwZXIuYXNzaWduRGVmYXVsdHMob3B0aW9ucyk7XG5cbiAgICBpZiAoIW9wdGlvbnMuaW5wdXRzLnpJbmRleCkge1xuICAgICAgdGhpcy56SW5kZXggPSB0aGlzLm92ZXJsYXlTZXJ2aWNlLmluc3RhbmNlXG4gICAgICAgID8gdGhpcy5vdmVybGF5U2VydmljZS5pbnN0YW5jZS56SW5kZXggKyAzXG4gICAgICAgIDogLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gdGhpcy56SW5kZXggKyAyO1xuICAgICAgb3B0aW9ucy5pbnB1dHMuekluZGV4ID0gdGhpcy56SW5kZXg7XG4gICAgfVxuXG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplIC0gMTA7XG4gICAgaWYgKCFvcHRpb25zLmlucHV0cy5zaXplKSB7XG4gICAgICBvcHRpb25zLmlucHV0cy5zaXplID0gdGhpcy5zaXplO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgY3JlYXRlU3Vic2NyaXB0aW9ucyhjb21wb25lbnQ6IENvbXBvbmVudFJlZjxEcmF3ZXJDb21wb25lbnQ+LCBpc1Jvb3QgPSB0cnVlLCBwYXJlbnRDb250YWluZXI/KSB7XG4gICAgaWYgKGlzUm9vdCkge1xuICAgICAgdGhpcy5vdmVybGF5U2VydmljZS5zaG93KHtcbiAgICAgICAgdHJpZ2dlckNvbXBvbmVudDogY29tcG9uZW50LFxuICAgICAgICB6SW5kZXg6IHRoaXMuekluZGV4XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG4gICAgbGV0IGNsb3NlU3ViOiBTdWJzY3JpcHRpb247XG4gICAgbGV0IG92ZXJsYXlTdWI6IFN1YnNjcmlwdGlvbjtcblxuICAgIGNvbnN0IGtpbGwgPSAoYzogQ29tcG9uZW50UmVmPERyYXdlckNvbXBvbmVudD4pID0+IHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKGNvbXBvbmVudCAhPT0gYykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNsb3NlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICBpZiAob3ZlcmxheVN1Yikge1xuICAgICAgICBvdmVybGF5U3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wYXJlbnRMaXN0ZW5lckZ1bmMgJiYgdGhpcy5jb21wb25lbnRzLmdldCh0aGlzLnR5cGUpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0aGlzLnBhcmVudExpc3RlbmVyRnVuYygpO1xuICAgICAgfVxuICAgICAgdGhpcy5kZXN0cm95KGNvbXBvbmVudCk7XG4gICAgfTtcblxuICAgIGNsb3NlU3ViID0gY29tcG9uZW50Lmluc3RhbmNlLmNsb3NlLnN1YnNjcmliZShraWxsLmJpbmQodGhpcywgY29tcG9uZW50KSk7XG4gICAgaWYgKGNvbXBvbmVudC5pbnN0YW5jZS5jbG9zZU9uT3V0c2lkZUNsaWNrKSB7XG4gICAgICBpZiAoaXNSb290KSB7XG4gICAgICAgIG92ZXJsYXlTdWIgPSB0aGlzLm92ZXJsYXlTZXJ2aWNlLmNsaWNrLnN1YnNjcmliZShraWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHMuZ2V0KHRoaXMudHlwZSk7XG5cbiAgICAgICAgdGhpcy5wYXJlbnRMaXN0ZW5lckZ1bmMgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihwYXJlbnRDb250YWluZXIsICdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gcGFyZW50Q29udGFpbmVyKSB7XG4gICAgICAgICAgICBraWxsKGNvbXBvbmVudHNbY29tcG9uZW50cy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==