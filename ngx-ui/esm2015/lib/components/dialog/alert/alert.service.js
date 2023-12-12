import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { InjectionService } from '../../../services/injection/injection.service';
import { OverlayService } from '../../overlay/overlay.service';
import { DialogService } from '../dialog.service';
import { AlertStyles } from './alert-styles.enum';
import { AlertTypes } from './alert-types.enum';
import { AlertComponent } from './alert.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/injection/injection.service";
import * as i2 from "../../overlay/overlay.service";
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../../services/injection/injection.service';
import * as ɵngcc2 from '../../overlay/overlay.service';
const classMap = {
    [AlertStyles.Danger]: 'ngx-alert-danger',
    [AlertStyles.Warning]: 'ngx-alert-warning',
    [AlertStyles.Info]: 'ngx-alert-info'
};
export class AlertService extends DialogService {
    constructor(injectionService, overlayService) {
        super(injectionService, overlayService);
        this.injectionService = injectionService;
        this.overlayService = overlayService;
        this.defaults = {
            inputs: {
                zIndex: 991,
                closeOnBlur: false,
                closeOnEscape: false,
                closeButton: false,
                showOverlay: true,
                visible: true
            }
        };
        this.type = AlertComponent;
    }
    alert(options) {
        return this.createDialog(options, AlertTypes.Alert);
    }
    confirm(options) {
        return this.createDialog(options, AlertTypes.Confirm);
    }
    prompt(options) {
        return this.createDialog(options, AlertTypes.Prompt);
    }
    createDialog(options, type) {
        const subject = new Subject();
        const { title, content, longPress, confirmButtonText, cancelButtonText, cancelButtonClass = [], confirmButtonClass = 'btn-primary' } = options;
        const cssClass = ['ngx-alert-dialog', classMap[options.style], options.cssClass].join(' ');
        const component = this.create({
            title,
            content,
            longPress,
            type,
            cssClass,
            confirmButtonText,
            cancelButtonText,
            cancelButtonClass,
            confirmButtonClass
        });
        const list = component.instance.ok.subscribe((data) => {
            subject.next({
                type: 'ok',
                data
            });
            subject.complete();
            list.unsubscribe();
            list2.unsubscribe();
        });
        const list2 = component.instance.cancel.subscribe((data) => {
            subject.next({
                type: 'cancel',
                data
            });
            subject.complete();
            list.unsubscribe();
            list2.unsubscribe();
        });
        return subject;
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(ɵngcc0.ɵɵinject(ɵngcc1.InjectionService), ɵngcc0.ɵɵinject(ɵngcc2.OverlayService)); };
AlertService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AlertService_Factory() { return new AlertService(i0.ɵɵinject(i1.InjectionService), i0.ɵɵinject(i2.OverlayService)); }, token: AlertService, providedIn: "root" });
AlertService.ctorParameters = () => [
    { type: InjectionService },
    { type: OverlayService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(AlertService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc1.InjectionService }, { type: ɵngcc2.OverlayService }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9kaWFsb2cvYWxlcnQvYWxlcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRDtBQUVpQjtBQUN5Qjs7OztBQUYxQyxNQUFNLFFBQVEsR0FBRztBQUNqQixJQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLGtCQUFrQjtBQUMxQyxJQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLG1CQUFtQjtBQUM1QyxJQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLGdCQUFnQjtBQUN0QyxDQUFDLENBQUM7QUFLRixNQUFNLE9BQU8sWUFBYSxTQUFRLGFBQTZCO0FBQy9ELElBYUUsWUFBcUIsZ0JBQWtDLEVBQVcsY0FBOEI7QUFDbEcsUUFBSSxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDNUMsUUFGdUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtBQUFDLFFBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdC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QUMsQ0FBQztBQUNQLFFBQ0ksT0FBTyxPQUFPLENBQUM7QUFDbkIsSUFBRSxDQUFDO0FBQ0g7MktBQUM7QUFDRCxpT0FoRks7QUFBQztFQUhMLFVBQVUsU0FBQyxyQkFHZ0MsWUFqQm5DLGdCQUFnQjtPQWV2QixVQUFVLEVBQUUsTUFBTSx6QkFmUyxZQUNwQixjQUFjO0FBQUc7T0FlekI7Ozs7O2tIQWYyQjtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJbmplY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvaW5qZWN0aW9uL2luamVjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE92ZXJsYXlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb3ZlcmxheS9vdmVybGF5LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlhbG9nT3B0aW9ucyB9IGZyb20gJy4uL2RpYWxvZy1vcHRpb25zLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWxlcnRTdHlsZXMgfSBmcm9tICcuL2FsZXJ0LXN0eWxlcy5lbnVtJztcbmltcG9ydCB7IEFsZXJ0VHlwZXMgfSBmcm9tICcuL2FsZXJ0LXR5cGVzLmVudW0nO1xuaW1wb3J0IHsgQWxlcnRDb21wb25lbnQgfSBmcm9tICcuL2FsZXJ0LmNvbXBvbmVudCc7XG5cbmNvbnN0IGNsYXNzTWFwID0ge1xuICBbQWxlcnRTdHlsZXMuRGFuZ2VyXTogJ25neC1hbGVydC1kYW5nZXInLFxuICBbQWxlcnRTdHlsZXMuV2FybmluZ106ICduZ3gtYWxlcnQtd2FybmluZycsXG4gIFtBbGVydFN0eWxlcy5JbmZvXTogJ25neC1hbGVydC1pbmZvJ1xufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRTZXJ2aWNlIGV4dGVuZHMgRGlhbG9nU2VydmljZTxBbGVydENvbXBvbmVudD4ge1xuICByZWFkb25seSBkZWZhdWx0czogRGlhbG9nT3B0aW9ucyA9IHtcbiAgICBpbnB1dHM6IHtcbiAgICAgIHpJbmRleDogOTkxLFxuICAgICAgY2xvc2VPbkJsdXI6IGZhbHNlLFxuICAgICAgY2xvc2VPbkVzY2FwZTogZmFsc2UsXG4gICAgICBjbG9zZUJ1dHRvbjogZmFsc2UsXG4gICAgICBzaG93T3ZlcmxheTogdHJ1ZSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9XG4gIH07XG5cbiAgcHJvdGVjdGVkIHR5cGU6IGFueSA9IEFsZXJ0Q29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGluamVjdGlvblNlcnZpY2U6IEluamVjdGlvblNlcnZpY2UsIHJlYWRvbmx5IG92ZXJsYXlTZXJ2aWNlOiBPdmVybGF5U2VydmljZSkge1xuICAgIHN1cGVyKGluamVjdGlvblNlcnZpY2UsIG92ZXJsYXlTZXJ2aWNlKTtcbiAgfVxuXG4gIGFsZXJ0KG9wdGlvbnM6IERpYWxvZ09wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVEaWFsb2cob3B0aW9ucywgQWxlcnRUeXBlcy5BbGVydCk7XG4gIH1cblxuICBjb25maXJtKG9wdGlvbnM6IERpYWxvZ09wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVEaWFsb2cob3B0aW9ucywgQWxlcnRUeXBlcy5Db25maXJtKTtcbiAgfVxuXG4gIHByb21wdChvcHRpb25zOiBEaWFsb2dPcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRGlhbG9nKG9wdGlvbnMsIEFsZXJ0VHlwZXMuUHJvbXB0KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRGlhbG9nKG9wdGlvbnM6IERpYWxvZ09wdGlvbnMsIHR5cGU6IEFsZXJ0VHlwZXMpIHtcbiAgICBjb25zdCBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8eyB0eXBlOiBzdHJpbmc7IGRhdGE6IGFueSB9PigpO1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLFxuICAgICAgY29udGVudCxcbiAgICAgIGxvbmdQcmVzcyxcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0LFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dCxcbiAgICAgIGNhbmNlbEJ1dHRvbkNsYXNzID0gW10sXG4gICAgICBjb25maXJtQnV0dG9uQ2xhc3MgPSAnYnRuLXByaW1hcnknXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgY3NzQ2xhc3MgPSBbJ25neC1hbGVydC1kaWFsb2cnLCBjbGFzc01hcFtvcHRpb25zLnN0eWxlXSwgb3B0aW9ucy5jc3NDbGFzc10uam9pbignICcpO1xuXG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jcmVhdGUoe1xuICAgICAgdGl0bGUsXG4gICAgICBjb250ZW50LFxuICAgICAgbG9uZ1ByZXNzLFxuICAgICAgdHlwZSxcbiAgICAgIGNzc0NsYXNzLFxuICAgICAgY29uZmlybUJ1dHRvblRleHQsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0LFxuICAgICAgY2FuY2VsQnV0dG9uQ2xhc3MsXG4gICAgICBjb25maXJtQnV0dG9uQ2xhc3NcbiAgICB9KTtcblxuICAgIGNvbnN0IGxpc3QgPSBjb21wb25lbnQuaW5zdGFuY2Uub2suc3Vic2NyaWJlKChkYXRhOiB7IGRhdGE6IGFueSB9KSA9PiB7XG4gICAgICBzdWJqZWN0Lm5leHQoe1xuICAgICAgICB0eXBlOiAnb2snLFxuICAgICAgICBkYXRhXG4gICAgICB9KTtcblxuICAgICAgc3ViamVjdC5jb21wbGV0ZSgpO1xuICAgICAgbGlzdC51bnN1YnNjcmliZSgpO1xuICAgICAgbGlzdDIudW5zdWJzY3JpYmUoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxpc3QyID0gY29tcG9uZW50Lmluc3RhbmNlLmNhbmNlbC5zdWJzY3JpYmUoKGRhdGE6IHsgZGF0YTogYW55IH0pID0+IHtcbiAgICAgIHN1YmplY3QubmV4dCh7XG4gICAgICAgIHR5cGU6ICdjYW5jZWwnLFxuICAgICAgICBkYXRhXG4gICAgICB9KTtcblxuICAgICAgc3ViamVjdC5jb21wbGV0ZSgpO1xuICAgICAgbGlzdC51bnN1YnNjcmliZSgpO1xuICAgICAgbGlzdDIudW5zdWJzY3JpYmUoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJqZWN0O1xuICB9XG59XG4iXX0=