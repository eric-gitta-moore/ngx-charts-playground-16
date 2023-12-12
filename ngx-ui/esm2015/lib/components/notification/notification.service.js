import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { InjectionService } from '../../services/injection/injection.service';
import { InjectionRegistryService } from '../../services/injection-registry/injection-registry.service';
import { NotificationType } from './notification-type.enum';
import { NotificationStyleType } from './notification-style-type.enum';
import { NotificationPermissionType } from './notification-permission-type.enum';
import { NotificationComponent } from './notification.component';
import { NotificationContainerComponent } from './notification-container.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/injection/injection.service";
import * as i2 from "@angular/common";
/** adding dynamic to suppress `Document` type metadata error  */
/** @dynamic */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../services/injection/injection.service';
export class NotificationService extends InjectionRegistryService {
    constructor(injectionService, document) {
        super(injectionService);
        this.injectionService = injectionService;
        this.document = document;
        this.defaults = {
            inputs: {
                timeout: 3000,
                rateLimit: true,
                pauseOnHover: true,
                type: NotificationType.html,
                styleType: NotificationStyleType.none,
                showClose: true,
                sound: false
            }
        };
        this.type = NotificationComponent;
    }
    get isNativeSupported() {
        return 'Notification' in window;
    }
    create(bindings) {
        // verify flood not happening
        if (bindings.rateLimit && this.isFlooded(bindings)) {
            return;
        }
        // if limit reached, remove the first one
        const compsByType = this.getByType();
        if (compsByType && compsByType.length >= NotificationService.limit) {
            this.destroy(compsByType[0]);
        }
        // native notifications need to be invoked
        let component;
        if (bindings.type === NotificationType.native) {
            component = this.showNative(bindings);
        }
        else {
            component = super.create(bindings);
            this.createSubscriptions(component);
            this.startTimer(component);
        }
        return component;
    }
    startTimer(component) {
        if (component.instance && component.instance.timeout !== false) {
            clearTimeout(component.instance.timer);
            component.instance.timer = setTimeout(() => {
                this.destroy(component);
            }, component.instance.timeout);
        }
    }
    pauseTimer(component) {
        clearTimeout(component.instance.timer);
    }
    requestPermissions() {
        if (this.isNativeSupported) {
            Notification.requestPermission(/* istanbul ignore next */ /* istanbul ignore next */ status => (this.permission = status));
        }
    }
    assignDefaults(options) {
        const bindings = super.assignDefaults(options);
        if (bindings.inputs && bindings.inputs.timeout === true) {
            bindings.inputs.timeout = this.defaults.inputs.timeout;
        }
        // add a timestamp for flood checks
        bindings.inputs.timestamp = +new Date();
        return bindings;
    }
    injectComponent(type, options) {
        if (!this.container || !this.document.contains(this.container.location.nativeElement)) {
            this.container = this.injectionService.appendComponent(NotificationContainerComponent);
        }
        return this.injectionService.appendComponent(type, options, this.container);
    }
    createSubscriptions(component) {
        const pauseSub = component.instance.pause.subscribe(() => {
            this.pauseTimer(component);
        });
        const resumeSub = component.instance.resume.subscribe(() => {
            this.startTimer(component);
        });
        const closeSub = component.instance.close.subscribe(() => {
            closeSub.unsubscribe();
            resumeSub.unsubscribe();
            pauseSub.unsubscribe();
            this.destroy(component);
        });
    }
    isFlooded(options) {
        const compsByType = this.getByType();
        for (const notification of compsByType) {
            const instance = notification.instance;
            if (instance.title === options.title &&
                instance.body === options.body &&
                instance.timestamp + 1000 > options.timestamp) {
                return true;
            }
        }
        return false;
    }
    showNative(options) {
        if (!this.isNativeSupported)
            return;
        if (!this.permission)
            this.requestPermissions();
        if (this.permission === NotificationPermissionType.denied)
            return;
        const note = new Notification(options.title, options);
        note.onerror = () => {
            // eslint-disable-next-line no-console
            console.error('Notification failed!', options);
        };
        // manually do this
        if (options && typeof options.timeout === 'number') {
            setTimeout(note.close.bind(note), options.timeout);
        }
        return note;
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(ɵngcc0.ɵɵinject(ɵngcc1.InjectionService), ɵngcc0.ɵɵinject(DOCUMENT)); };
NotificationService.limit = 10;
NotificationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NotificationService_Factory() { return new NotificationService(i0.ɵɵinject(i1.InjectionService), i0.ɵɵinject(i2.DOCUMENT)); }, token: NotificationService, providedIn: "root" });
NotificationService.ctorParameters = () => [
    { type: InjectionService },
    { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NotificationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc1.InjectionService }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFHeEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDakYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDakUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEY7QUFBcUM7QUFFUDtBQUE5QixpRUFBaUU7QUFDakUsZUFBZTs7O0FBSWYsTUFBTSxPQUFPLG1CQUFvQixTQUFRLHdCQUErQztBQUN4RixJQXFCRSxZQUFxQixnQkFBa0MsRUFBcUMsUUFBa0I7QUFDaEgsUUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM1QixRQUZ1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0FBQUMsUUFBb0MsYUFBUSxHQUFSLFFBQVEsQ0FBVTtBQUFDLFFBcEJ0RyxhQUFRLEdBQXdCO0FBQzNDLFlBQUksTUFBTSxFQUFFO0FBQ1osZ0JBQU0sT0FBTyxFQUFFLElBQUk7QUFDbkIsZ0JBQU0sU0FB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QUM7QUFDcEQsUUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssMEJBQTBCLENBQUMsTUFBTTtBQUFFLFlBQUEsT0FBTztBQUN0RSxRQUNJLE1BQU0sSUFBSSxHQUFHLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDMUQsUUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtBQUN4QixZQUFNLHNDQUFzQztBQUM1QyxZQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDckQsUUFBSSxDQUFDLENBQUM7QUFDTixRQUNJLG1CQUFtQjtBQUN2QixRQUFJLElBQUksT0FBTyxJQUFJLE9BQU8sT0FBTyxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7QUFDeEQsWUFBTSxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pELFNBQUs7QUFDTCxRQUNJLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLElBQUUsQ0FBQztBQUNIO21MQUFDO0FBbkppQix5QkFBSyxHQUFxQixFQUFFLENBQUM7QUFDL0MsdVBBRks7QUFBQztFQUhMLFVBQVUsU0FBQyxyQkFHdUMsWUFoQjFDLGdCQUFnQjtPQWN2QixVQUFVLEVBQUUsTUFBTSxjQUNuQix2Q0FmNEIsWUFzQzJFLFFBQVEsdUJBQXBELE1BQU0sU0FBQyxRQUFRO0FBQVE7Ozs7Ozs7OztrQ0FBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50UmVmLCBJbmplY3QsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJbmplY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5qZWN0aW9uL2luamVjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEluamVjdGlvblJlZ2lzdHJ5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luamVjdGlvbi1yZWdpc3RyeS9pbmplY3Rpb24tcmVnaXN0cnkuc2VydmljZSc7XG5pbXBvcnQgeyBQYXJ0aWFsQmluZGluZ3MgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmplY3Rpb24tcmVnaXN0cnkvcGFydGlhbC1iaW5kaW5ncy5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25UeXBlIH0gZnJvbSAnLi9ub3RpZmljYXRpb24tdHlwZS5lbnVtJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblN0eWxlVHlwZSB9IGZyb20gJy4vbm90aWZpY2F0aW9uLXN0eWxlLXR5cGUuZW51bSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25QZXJtaXNzaW9uVHlwZSB9IGZyb20gJy4vbm90aWZpY2F0aW9uLXBlcm1pc3Npb24tdHlwZS5lbnVtJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbm90aWZpY2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL25vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbk9wdGlvbnMgfSBmcm9tICcuL25vdGlmaWNhdGlvbi1vcHRpb25zLmludGVyZmFjZSc7XG5cbi8qKiBhZGRpbmcgZHluYW1pYyB0byBzdXBwcmVzcyBgRG9jdW1lbnRgIHR5cGUgbWV0YWRhdGEgZXJyb3IgICovXG4vKiogQGR5bmFtaWMgKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblNlcnZpY2UgZXh0ZW5kcyBJbmplY3Rpb25SZWdpc3RyeVNlcnZpY2U8Tm90aWZpY2F0aW9uQ29tcG9uZW50PiB7XG4gIHN0YXRpYyByZWFkb25seSBsaW1pdDogbnVtYmVyIHwgYm9vbGVhbiA9IDEwO1xuICByZWFkb25seSBkZWZhdWx0czogTm90aWZpY2F0aW9uT3B0aW9ucyA9IHtcbiAgICBpbnB1dHM6IHtcbiAgICAgIHRpbWVvdXQ6IDMwMDAsXG4gICAgICByYXRlTGltaXQ6IHRydWUsXG4gICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlLmh0bWwsXG4gICAgICBzdHlsZVR5cGU6IE5vdGlmaWNhdGlvblN0eWxlVHlwZS5ub25lLFxuICAgICAgc2hvd0Nsb3NlOiB0cnVlLFxuICAgICAgc291bmQ6IGZhbHNlXG4gICAgfVxuICB9O1xuXG4gIHBlcm1pc3Npb246IE5vdGlmaWNhdGlvblBlcm1pc3Npb247XG4gIGNvbnRhaW5lcj86IENvbXBvbmVudFJlZjxOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQ+O1xuICB0eXBlID0gTm90aWZpY2F0aW9uQ29tcG9uZW50O1xuXG4gIGdldCBpc05hdGl2ZVN1cHBvcnRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gJ05vdGlmaWNhdGlvbicgaW4gd2luZG93O1xuICB9XG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgaW5qZWN0aW9uU2VydmljZTogSW5qZWN0aW9uU2VydmljZSwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSByZWFkb25seSBkb2N1bWVudDogRG9jdW1lbnQpIHtcbiAgICBzdXBlcihpbmplY3Rpb25TZXJ2aWNlKTtcbiAgfVxuXG4gIGNyZWF0ZShiaW5kaW5nczogUGFydGlhbDxOb3RpZmljYXRpb25PcHRpb25zPik6IENvbXBvbmVudFJlZjxOb3RpZmljYXRpb25Db21wb25lbnQ+IHtcbiAgICAvLyB2ZXJpZnkgZmxvb2Qgbm90IGhhcHBlbmluZ1xuICAgIGlmIChiaW5kaW5ncy5yYXRlTGltaXQgJiYgdGhpcy5pc0Zsb29kZWQoYmluZGluZ3MpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgbGltaXQgcmVhY2hlZCwgcmVtb3ZlIHRoZSBmaXJzdCBvbmVcbiAgICBjb25zdCBjb21wc0J5VHlwZSA9IHRoaXMuZ2V0QnlUeXBlKCk7XG5cbiAgICBpZiAoY29tcHNCeVR5cGUgJiYgY29tcHNCeVR5cGUubGVuZ3RoID49IE5vdGlmaWNhdGlvblNlcnZpY2UubGltaXQpIHtcbiAgICAgIHRoaXMuZGVzdHJveShjb21wc0J5VHlwZVswXSk7XG4gICAgfVxuXG4gICAgLy8gbmF0aXZlIG5vdGlmaWNhdGlvbnMgbmVlZCB0byBiZSBpbnZva2VkXG4gICAgbGV0IGNvbXBvbmVudDogQ29tcG9uZW50UmVmPE5vdGlmaWNhdGlvbkNvbXBvbmVudD4gfCBOb3RpZmljYXRpb247XG5cbiAgICBpZiAoYmluZGluZ3MudHlwZSA9PT0gTm90aWZpY2F0aW9uVHlwZS5uYXRpdmUpIHtcbiAgICAgIGNvbXBvbmVudCA9IHRoaXMuc2hvd05hdGl2ZShiaW5kaW5ncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBvbmVudCA9IHN1cGVyLmNyZWF0ZShiaW5kaW5ncyk7XG4gICAgICB0aGlzLmNyZWF0ZVN1YnNjcmlwdGlvbnMoY29tcG9uZW50KTtcbiAgICAgIHRoaXMuc3RhcnRUaW1lcihjb21wb25lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnQgYXMgYW55O1xuICB9XG5cbiAgc3RhcnRUaW1lcihjb21wb25lbnQ6IENvbXBvbmVudFJlZjxOb3RpZmljYXRpb25Db21wb25lbnQ+KTogdm9pZCB7XG4gICAgaWYgKGNvbXBvbmVudC5pbnN0YW5jZSAmJiBjb21wb25lbnQuaW5zdGFuY2UudGltZW91dCAhPT0gZmFsc2UpIHtcbiAgICAgIGNsZWFyVGltZW91dChjb21wb25lbnQuaW5zdGFuY2UudGltZXIpO1xuXG4gICAgICBjb21wb25lbnQuaW5zdGFuY2UudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kZXN0cm95KGNvbXBvbmVudCk7XG4gICAgICB9LCBjb21wb25lbnQuaW5zdGFuY2UudGltZW91dCBhcyBudW1iZXIpO1xuICAgIH1cbiAgfVxuXG4gIHBhdXNlVGltZXIoY29tcG9uZW50OiBDb21wb25lbnRSZWY8Tm90aWZpY2F0aW9uQ29tcG9uZW50Pik6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dChjb21wb25lbnQuaW5zdGFuY2UudGltZXIpO1xuICB9XG5cbiAgcmVxdWVzdFBlcm1pc3Npb25zKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzTmF0aXZlU3VwcG9ydGVkKSB7XG4gICAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gc3RhdHVzID0+ICh0aGlzLnBlcm1pc3Npb24gPSBzdGF0dXMpKTtcbiAgICB9XG4gIH1cblxuICBhc3NpZ25EZWZhdWx0cyhvcHRpb25zOiBQYXJ0aWFsPE5vdGlmaWNhdGlvbk9wdGlvbnM+KTogUGFydGlhbEJpbmRpbmdzIHtcbiAgICBjb25zdCBiaW5kaW5ncyA9IHN1cGVyLmFzc2lnbkRlZmF1bHRzKG9wdGlvbnMgYXMgYW55KTtcblxuICAgIGlmIChiaW5kaW5ncy5pbnB1dHMgJiYgYmluZGluZ3MuaW5wdXRzLnRpbWVvdXQgPT09IHRydWUpIHtcbiAgICAgIGJpbmRpbmdzLmlucHV0cy50aW1lb3V0ID0gdGhpcy5kZWZhdWx0cy5pbnB1dHMudGltZW91dDtcbiAgICB9XG5cbiAgICAvLyBhZGQgYSB0aW1lc3RhbXAgZm9yIGZsb29kIGNoZWNrc1xuICAgIGJpbmRpbmdzLmlucHV0cy50aW1lc3RhbXAgPSArbmV3IERhdGUoKTtcbiAgICByZXR1cm4gYmluZGluZ3M7XG4gIH1cblxuICBpbmplY3RDb21wb25lbnQodHlwZTogVHlwZTxOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQ+LCBvcHRpb25zOiBQYXJ0aWFsQmluZGluZ3MpOiBDb21wb25lbnRSZWY8YW55PiB7XG4gICAgaWYgKCF0aGlzLmNvbnRhaW5lciB8fCAhdGhpcy5kb2N1bWVudC5jb250YWlucyh0aGlzLmNvbnRhaW5lci5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KSkge1xuICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmluamVjdGlvblNlcnZpY2UuYXBwZW5kQ29tcG9uZW50KE5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0aW9uU2VydmljZS5hcHBlbmRDb21wb25lbnQodHlwZSwgb3B0aW9ucywgdGhpcy5jb250YWluZXIpO1xuICB9XG5cbiAgY3JlYXRlU3Vic2NyaXB0aW9ucyhjb21wb25lbnQ6IENvbXBvbmVudFJlZjxOb3RpZmljYXRpb25Db21wb25lbnQ+KTogYW55IHtcbiAgICBjb25zdCBwYXVzZVN1YjogU3Vic2NyaXB0aW9uID0gY29tcG9uZW50Lmluc3RhbmNlLnBhdXNlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnBhdXNlVGltZXIoY29tcG9uZW50KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3VtZVN1YjogU3Vic2NyaXB0aW9uID0gY29tcG9uZW50Lmluc3RhbmNlLnJlc3VtZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zdGFydFRpbWVyKGNvbXBvbmVudCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjbG9zZVN1YjogU3Vic2NyaXB0aW9uID0gY29tcG9uZW50Lmluc3RhbmNlLmNsb3NlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjbG9zZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgcmVzdW1lU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICBwYXVzZVN1Yi51bnN1YnNjcmliZSgpO1xuXG4gICAgICB0aGlzLmRlc3Ryb3koY29tcG9uZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzRmxvb2RlZChvcHRpb25zOiBQYXJ0aWFsPE5vdGlmaWNhdGlvbk9wdGlvbnM+KTogYm9vbGVhbiB7XG4gICAgY29uc3QgY29tcHNCeVR5cGUgPSB0aGlzLmdldEJ5VHlwZSgpO1xuXG4gICAgZm9yIChjb25zdCBub3RpZmljYXRpb24gb2YgY29tcHNCeVR5cGUpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbm90aWZpY2F0aW9uLmluc3RhbmNlO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGluc3RhbmNlLnRpdGxlID09PSBvcHRpb25zLnRpdGxlICYmXG4gICAgICAgIGluc3RhbmNlLmJvZHkgPT09IG9wdGlvbnMuYm9keSAmJlxuICAgICAgICBpbnN0YW5jZS50aW1lc3RhbXAgKyAxMDAwID4gb3B0aW9ucy50aW1lc3RhbXBcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzaG93TmF0aXZlKG9wdGlvbnM6IFBhcnRpYWw8Tm90aWZpY2F0aW9uT3B0aW9ucz4pOiBhbnkge1xuICAgIGlmICghdGhpcy5pc05hdGl2ZVN1cHBvcnRlZCkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5wZXJtaXNzaW9uKSB0aGlzLnJlcXVlc3RQZXJtaXNzaW9ucygpO1xuICAgIGlmICh0aGlzLnBlcm1pc3Npb24gPT09IE5vdGlmaWNhdGlvblBlcm1pc3Npb25UeXBlLmRlbmllZCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgbm90ZSA9IG5ldyBOb3RpZmljYXRpb24ob3B0aW9ucy50aXRsZSwgb3B0aW9ucyk7XG5cbiAgICBub3RlLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcignTm90aWZpY2F0aW9uIGZhaWxlZCEnLCBvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgLy8gbWFudWFsbHkgZG8gdGhpc1xuICAgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLnRpbWVvdXQgPT09ICdudW1iZXInKSB7XG4gICAgICBzZXRUaW1lb3V0KG5vdGUuY2xvc2UuYmluZChub3RlKSwgb3B0aW9ucy50aW1lb3V0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm90ZTtcbiAgfVxufVxuIl19