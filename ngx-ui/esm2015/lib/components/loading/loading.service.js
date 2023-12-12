import { Injectable } from '@angular/core';
import { InjectionService } from '../../services/injection/injection.service';
import { LoadingComponent } from './loading.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/injection/injection.service";
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../services/injection/injection.service';
export class LoadingService {
    constructor(injectionService) {
        this.injectionService = injectionService;
        this.threshold = 250;
        this._count = 0;
        this._progress = 0;
    }
    set progress(val) {
        if (this.instance) {
            this.instance.progress = val;
        }
        this._progress = val;
    }
    get progress() {
        return this._progress;
    }
    get count() {
        return this._count;
    }
    get instance() {
        if (this.component)
            return this.component.instance;
    }
    start(autoIncrement = true) {
        this.create();
        this._count++;
        if (autoIncrement) {
            clearTimeout(this.timeout);
            const fn = () => {
                this.increment();
                if (this.progress < 100) {
                    this.timeout = setTimeout(fn, this.threshold);
                }
                else {
                    this.complete();
                }
            };
            this.timeout = setTimeout(fn, this.threshold);
        }
    }
    stop() {
        this._count--;
        clearTimeout(this.timeout);
    }
    reset(num = 0) {
        this.progress = num;
    }
    complete(all = false) {
        this._count--;
        if (this.count <= 0 || all) {
            this.progress = 100;
            this._count = 0;
            setTimeout(() => {
                this.hide();
                this.progress = 0;
            }, this.threshold * 2);
        }
    }
    hide() {
        this.stop();
        if (this.instance) {
            this.instance.visible = false;
        }
    }
    create() {
        if (!this.component) {
            this.component = this.injectionService.appendComponent(LoadingComponent);
        }
        this.instance.visible = true;
        this.instance.progress = this.progress;
        return this.component;
    }
    increment() {
        if (this.progress >= 100)
            return;
        // inspired by angular-loading-bar
        // https://github.com/chieffancypants/angular-loading-bar
        const stat = this.progress / 100;
        let rnd = 0;
        if (stat >= 0 && stat < 0.25) {
            // Start out between 3 - 6% increments
            rnd = (Math.random() * (5 - 3 + 1) + 3) / 100;
        }
        else if (stat >= 0.25 && stat < 0.65) {
            // increment between 0 - 3%
            rnd = (Math.random() * 3) / 100;
        }
        else if (stat >= 0.65 && stat < 0.9) {
            // increment between 0 - 2%
            rnd = (Math.random() * 2) / 100;
        }
        else {
            // finally, increment it .5 %
            // after 99%, don't increment:
            rnd = 0.005;
        }
        this.progress = (stat + rnd) * 100;
    }
}
LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(ɵngcc0.ɵɵinject(ɵngcc1.InjectionService)); };
LoadingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(i0.ɵɵinject(i1.InjectionService)); }, token: LoadingService, providedIn: "root" });
LoadingService.ctorParameters = () => [
    { type: InjectionService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(LoadingService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc1.InjectionService }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZEO0FBR0M7OztBQUNELE1BQU0sT0FBTyxjQUFjO0FBQzNCLElBMkJFLFlBQTZCLGdCQUFrQztBQUFJLFFBQXRDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7QUFBQyxRQTNCaEUsY0FBUyxHQUFHLEdBQUcsQ0FBQztBQUNsQixRQXFCVSxXQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLFFBRVUsY0FBUyxHQUFHLENBQUMsQ0FBQztBQUN4QixJQUNvRSxDQUFDO0FBQ3JFLElBMUJFLElBQUksUUFBUSxDQUFDLEdBQVc7QUFDMUIsUUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDdkIsWUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDbkMsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFDekIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLFFBQVE7QUFBSyxRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUMxQixJQUFFLENBQUM7QUFDSCxJQUNFLElBQUksS0FBSztBQUFLLFFBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3ZCLElBQUUsQ0FBQztBQUNILElBQ0UsSUFBWSxRQUFRO0FBQ3RCLFFBQUksSUFBSSxJQUFJLENBQUMsU0FBUztBQUFFLFlBQUEsT0FB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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEluamVjdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmplY3Rpb24vaW5qZWN0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vbG9hZGluZy5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2VydmljZSB7XG4gIHRocmVzaG9sZCA9IDI1MDtcblxuICBzZXQgcHJvZ3Jlc3ModmFsOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5wcm9ncmVzcyA9IHZhbDtcbiAgICB9XG5cbiAgICB0aGlzLl9wcm9ncmVzcyA9IHZhbDtcbiAgfVxuXG4gIGdldCBwcm9ncmVzcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wcm9ncmVzcztcbiAgfVxuXG4gIGdldCBjb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jb3VudDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGluc3RhbmNlKCkge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudCkgcmV0dXJuIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfY291bnQgPSAwO1xuICBwcml2YXRlIHRpbWVvdXQ6IGFueTtcbiAgcHJpdmF0ZSBjb21wb25lbnQ6IENvbXBvbmVudFJlZjxMb2FkaW5nQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBfcHJvZ3Jlc3MgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0aW9uU2VydmljZTogSW5qZWN0aW9uU2VydmljZSkge31cblxuICBzdGFydChhdXRvSW5jcmVtZW50ID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgdGhpcy5fY291bnQrKztcblxuICAgIGlmIChhdXRvSW5jcmVtZW50KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcblxuICAgICAgY29uc3QgZm4gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5jcmVtZW50KCk7XG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzIDwgMTAwKSB7XG4gICAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmbiwgdGhpcy50aHJlc2hvbGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmbiwgdGhpcy50aHJlc2hvbGQpO1xuICAgIH1cbiAgfVxuXG4gIHN0b3AoKTogdm9pZCB7XG4gICAgdGhpcy5fY291bnQtLTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgfVxuXG4gIHJlc2V0KG51bSA9IDApOiB2b2lkIHtcbiAgICB0aGlzLnByb2dyZXNzID0gbnVtO1xuICB9XG5cbiAgY29tcGxldGUoYWxsID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLl9jb3VudC0tO1xuXG4gICAgaWYgKHRoaXMuY291bnQgPD0gMCB8fCBhbGwpIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAxMDA7XG4gICAgICB0aGlzLl9jb3VudCA9IDA7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICB9LCB0aGlzLnRocmVzaG9sZCAqIDIpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9wKCk7XG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGUoKTogQ29tcG9uZW50UmVmPExvYWRpbmdDb21wb25lbnQ+IHtcbiAgICBpZiAoIXRoaXMuY29tcG9uZW50KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudCA9IHRoaXMuaW5qZWN0aW9uU2VydmljZS5hcHBlbmRDb21wb25lbnQoTG9hZGluZ0NvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS52aXNpYmxlID0gdHJ1ZTtcbiAgICB0aGlzLmluc3RhbmNlLnByb2dyZXNzID0gdGhpcy5wcm9ncmVzcztcblxuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudDtcbiAgfVxuXG4gIHByaXZhdGUgaW5jcmVtZW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByb2dyZXNzID49IDEwMCkgcmV0dXJuO1xuXG4gICAgLy8gaW5zcGlyZWQgYnkgYW5ndWxhci1sb2FkaW5nLWJhclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGllZmZhbmN5cGFudHMvYW5ndWxhci1sb2FkaW5nLWJhclxuICAgIGNvbnN0IHN0YXQgPSB0aGlzLnByb2dyZXNzIC8gMTAwO1xuICAgIGxldCBybmQgPSAwO1xuXG4gICAgaWYgKHN0YXQgPj0gMCAmJiBzdGF0IDwgMC4yNSkge1xuICAgICAgLy8gU3RhcnQgb3V0IGJldHdlZW4gMyAtIDYlIGluY3JlbWVudHNcbiAgICAgIHJuZCA9IChNYXRoLnJhbmRvbSgpICogKDUgLSAzICsgMSkgKyAzKSAvIDEwMDtcbiAgICB9IGVsc2UgaWYgKHN0YXQgPj0gMC4yNSAmJiBzdGF0IDwgMC42NSkge1xuICAgICAgLy8gaW5jcmVtZW50IGJldHdlZW4gMCAtIDMlXG4gICAgICBybmQgPSAoTWF0aC5yYW5kb20oKSAqIDMpIC8gMTAwO1xuICAgIH0gZWxzZSBpZiAoc3RhdCA+PSAwLjY1ICYmIHN0YXQgPCAwLjkpIHtcbiAgICAgIC8vIGluY3JlbWVudCBiZXR3ZWVuIDAgLSAyJVxuICAgICAgcm5kID0gKE1hdGgucmFuZG9tKCkgKiAyKSAvIDEwMDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZmluYWxseSwgaW5jcmVtZW50IGl0IC41ICVcbiAgICAgIC8vIGFmdGVyIDk5JSwgZG9uJ3QgaW5jcmVtZW50OlxuICAgICAgcm5kID0gMC4wMDU7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9ncmVzcyA9IChzdGF0ICsgcm5kKSAqIDEwMDtcbiAgfVxufVxuIl19