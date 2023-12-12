import { Injectable, EventEmitter } from '@angular/core';
import { InjectionService } from '../../services/injection/injection.service';
import { OverlayComponent } from './overlay.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/injection/injection.service";
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../services/injection/injection.service';
export class OverlayService {
    constructor(injectionService) {
        this.injectionService = injectionService;
        // list of components that will close by clicking the overlay
        this.triggerComponents = [];
        this.click = new EventEmitter();
    }
    get instance() {
        if (this.component)
            return this.component.instance;
    }
    show(options = {}) {
        if (!options.triggerComponent) {
            throw new Error('ngx-ui OverlayService.show: triggerComponent missing ');
        }
        if (!this.component) {
            this.component = this.injectComponent();
            this.instance.click.subscribe(this.onClick.bind(this));
        }
        this.triggerComponents.push({
            component: options.triggerComponent,
            zIndex: options.zIndex
        });
        this.component.instance.visible = true;
        this.updateZIndex();
        return this.component;
    }
    hide() {
        if (this.triggerComponents.length === 0) {
            this.component.instance.visible = false;
        }
    }
    destroy() {
        if (this.component) {
            // destroy is called like this to trigger
            // proper lifecycle events like animations
            this.hide();
            setTimeout(() => {
                // <--- new dialog is being created during this timeout.
                if (this.component && this.triggerComponents.length === 0) {
                    this.component.destroy();
                    this.component = undefined;
                }
            }, 100);
        }
    }
    injectComponent() {
        return this.injectionService.appendComponent(OverlayComponent);
    }
    onClick() {
        if (this.triggerComponents.length > 0) {
            const lastIdx = this.triggerComponents.length - 1;
            const triggerComponent = this.triggerComponents[lastIdx];
            this.click.emit(triggerComponent.component);
        }
    }
    removeTriggerComponent(component) {
        const idx = this.triggerComponents.findIndex(c => c.component === component);
        if (idx !== -1) {
            this.triggerComponents.splice(idx, 1);
        }
        this.updateZIndex();
        if (this.triggerComponents.length === 0) {
            this.destroy();
        }
    }
    updateZIndex() {
        if (this.triggerComponents.length === 0) {
            return;
        }
        const indexes = this.triggerComponents.map(tc => tc.zIndex);
        const zIndex = Math.max(...indexes) - 1;
        this.instance.zIndex = zIndex;
    }
}
OverlayService.ɵfac = function OverlayService_Factory(t) { return new (t || OverlayService)(ɵngcc0.ɵɵinject(ɵngcc1.InjectionService)); };
OverlayService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OverlayService_Factory() { return new OverlayService(i0.ɵɵinject(i1.InjectionService)); }, token: OverlayService, providedIn: "root" });
OverlayService.ctorParameters = () => [
    { type: InjectionService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(OverlayService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc1.InjectionService }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL292ZXJsYXkvb3ZlcmxheS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWdCLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RDtBQUdDOzs7QUFDRCxNQUFNLE9BQU8sY0FBYztBQUMzQixJQVVFLFlBQW9CLGdCQUFrQztBQUFJLFFBQXRDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7QUFBQyxRQVJ2RCw2REFBNkQ7QUFDL0QsUUFBRSxzQkFBaUIsR0FBVSxFQUFFLENBQUM7QUFDaEMsUUFBRSxVQUFLLEdBQVEsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUNsQyxJQUsyRCxDQUFDO0FBQzVELElBTEUsSUFBSSxRQUFRO0FBQ2QsUUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTO0FBQUUsWUFBQSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO0FBQ3ZELElBQUUsQ0FBQztBQUNILElBR0UsSUFBSSxDQUFDLFVBQWUsRUFBRTtBQUN4QixRQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7QUFDbkMsWUFBTSxNQUFNLElBQUksS0FBSyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7QUFDL0UsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDekIsWUFBTSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUM5QyxZQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMs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QUFFO0FBQzdDLFlBQU0sT0FBTztBQUNiLFNBQUs7QUFDTCxRQUFJLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEUsUUFBSSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzVDLFFBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ2xDLElBQUUsQ0FBQztBQUNIO3lJQUFDO0FBQ0QseU1BekZLO0FBQUM7RUFITCxVQUFVLFNBQUMsckJBSUksWUFQUCxnQkFBZ0I7QUFBRztLQUkxQixVQUFVLEVBQUUsTUFBTSxjQUNuQjs7Ozs7aUZBTDZCO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnRSZWYsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbmplY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5qZWN0aW9uL2luamVjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE92ZXJsYXlDb21wb25lbnQgfSBmcm9tICcuL292ZXJsYXkuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgT3ZlcmxheVNlcnZpY2Uge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFJlZjxPdmVybGF5Q29tcG9uZW50PjtcblxuICAvLyBsaXN0IG9mIGNvbXBvbmVudHMgdGhhdCB3aWxsIGNsb3NlIGJ5IGNsaWNraW5nIHRoZSBvdmVybGF5XG4gIHRyaWdnZXJDb21wb25lbnRzOiBhbnlbXSA9IFtdO1xuICBjbGljazogYW55ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdldCBpbnN0YW5jZSgpIHtcbiAgICBpZiAodGhpcy5jb21wb25lbnQpIHJldHVybiB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0aW9uU2VydmljZTogSW5qZWN0aW9uU2VydmljZSkge31cblxuICBzaG93KG9wdGlvbnM6IGFueSA9IHt9KSB7XG4gICAgaWYgKCFvcHRpb25zLnRyaWdnZXJDb21wb25lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbmd4LXVpIE92ZXJsYXlTZXJ2aWNlLnNob3c6IHRyaWdnZXJDb21wb25lbnQgbWlzc2luZyAnKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmNvbXBvbmVudCkge1xuICAgICAgdGhpcy5jb21wb25lbnQgPSB0aGlzLmluamVjdENvbXBvbmVudCgpO1xuICAgICAgdGhpcy5pbnN0YW5jZS5jbGljay5zdWJzY3JpYmUodGhpcy5vbkNsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHRoaXMudHJpZ2dlckNvbXBvbmVudHMucHVzaCh7XG4gICAgICBjb21wb25lbnQ6IG9wdGlvbnMudHJpZ2dlckNvbXBvbmVudCxcbiAgICAgIHpJbmRleDogb3B0aW9ucy56SW5kZXhcbiAgICB9KTtcblxuICAgIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLnZpc2libGUgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlWkluZGV4KCk7XG5cbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnQ7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLnRyaWdnZXJDb21wb25lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5jb21wb25lbnQuaW5zdGFuY2UudmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuY29tcG9uZW50KSB7XG4gICAgICAvLyBkZXN0cm95IGlzIGNhbGxlZCBsaWtlIHRoaXMgdG8gdHJpZ2dlclxuICAgICAgLy8gcHJvcGVyIGxpZmVjeWNsZSBldmVudHMgbGlrZSBhbmltYXRpb25zXG4gICAgICB0aGlzLmhpZGUoKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIDwtLS0gbmV3IGRpYWxvZyBpcyBiZWluZyBjcmVhdGVkIGR1cmluZyB0aGlzIHRpbWVvdXQuXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCAmJiB0aGlzLnRyaWdnZXJDb21wb25lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBpbmplY3RDb21wb25lbnQoKTogQ29tcG9uZW50UmVmPE92ZXJsYXlDb21wb25lbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rpb25TZXJ2aWNlLmFwcGVuZENvbXBvbmVudChPdmVybGF5Q29tcG9uZW50KTtcbiAgfVxuXG4gIG9uQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlckNvbXBvbmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbGFzdElkeCA9IHRoaXMudHJpZ2dlckNvbXBvbmVudHMubGVuZ3RoIC0gMTtcbiAgICAgIGNvbnN0IHRyaWdnZXJDb21wb25lbnQgPSB0aGlzLnRyaWdnZXJDb21wb25lbnRzW2xhc3RJZHhdO1xuICAgICAgdGhpcy5jbGljay5lbWl0KHRyaWdnZXJDb21wb25lbnQuY29tcG9uZW50KTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVUcmlnZ2VyQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIGNvbnN0IGlkeCA9IHRoaXMudHJpZ2dlckNvbXBvbmVudHMuZmluZEluZGV4KGMgPT4gYy5jb21wb25lbnQgPT09IGNvbXBvbmVudCk7XG4gICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgIHRoaXMudHJpZ2dlckNvbXBvbmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVaSW5kZXgoKTtcblxuICAgIGlmICh0aGlzLnRyaWdnZXJDb21wb25lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlWkluZGV4KCkge1xuICAgIGlmICh0aGlzLnRyaWdnZXJDb21wb25lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbmRleGVzID0gdGhpcy50cmlnZ2VyQ29tcG9uZW50cy5tYXAodGMgPT4gdGMuekluZGV4KTtcbiAgICBjb25zdCB6SW5kZXggPSBNYXRoLm1heCguLi5pbmRleGVzKSAtIDE7XG4gICAgdGhpcy5pbnN0YW5jZS56SW5kZXggPSB6SW5kZXg7XG4gIH1cbn1cbiJdfQ==