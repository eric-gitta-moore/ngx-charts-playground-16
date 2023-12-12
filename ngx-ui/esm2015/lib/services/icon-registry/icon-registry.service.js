import { Injectable } from '@angular/core';
import { convertClass } from './convert-class.util';
import * as i0 from "@angular/core";
import * as ɵngcc0 from '@angular/core';
export class IconRegistryService {
    constructor() {
        this._defaultFontSetClass = 'ngx';
        this._iconMap = new Map();
    }
    setDefaultFontSetClass(iconSet) {
        this._defaultFontSetClass = iconSet;
        return this._defaultFontSetClass;
    }
    get(keys, set) {
        return this.lookup(keys, set).map(k => convertClass(k));
    }
    lookup(keys, set) {
        return (Array.isArray(keys) ? keys : [keys]).reduce((p, k) => {
            k = this._expandKeys(k, set)
                .map(kk => {
                const x = this._iconMap.get(kk);
                return x && x.length === 1 ? x[0] : kk;
            })
                .join(' ');
            return p.concat(this._iconMap.get(k) || [k]);
        }, []);
    }
    add(key, icon) {
        const k = this._expandKeys(key).join(' ');
        const v = this.lookup(icon);
        this._iconMap.set(k, v);
    }
    _expandKeys(key, set = this._defaultFontSetClass) {
        return key.split(' ').map(k => {
            if (k.includes(':'))
                return k;
            return `${set}:${k}`;
        });
    }
}
IconRegistryService.ɵfac = function IconRegistryService_Factory(t) { return new (t || IconRegistryService)(); };
IconRegistryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function IconRegistryService_Factory() { return new IconRegistryService(); }, token: IconRegistryService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(IconRegistryService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1yZWdpc3RyeS5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9zZXJ2aWNlcy9pY29uLXJlZ2lzdHJ5L2ljb24tcmVnaXN0cnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRDs7QUFJQSxNQUFNLE9BQU8sbUJBQW1CO0FBQ2hDLElBSkE7QUFDRSxRQUdRLHlCQUFvQixHQUFHLEtBQUssQ0FBQztBQUN2QyxRQUFVLGFBQVEsR0FBMEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUN0RCxLQWtDQztBQUNELElBbENFLHNCQUFzQixDQUFDLE9BQWU7QUFBSSxRQUN4QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsT0FBTyxDQUFDO0FBQ3hDLFFBQUksT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7QUFDckMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxHQUFHLENBQUMsSUFBdUIsRUFBRSxHQUFZO0FBQUksUUFDM0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1RCxJQUFFLENBQUM7QUFDSCxJQUNFLE1BQU0sQ0FBQyxJQUF1QixFQUFFLEdBQVk7QUFBSSxRQUM5QyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBVyxFQUFFLENBQVMsRUFBRSxFQUFFO0FBQ25GLFlBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztBQUNsQyxpQkFBUyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbEIsZ0JBQVUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDMUMsZ0JBQVUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ2pELFlBQVEsQ0FBQyxDQUFDO0FBQ1YsaUJBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLFlBQU0sT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRCxRQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNYLElBQUUsQ0FBQztBQUNILElBQ0UsR0FBRyxDQUFDLEdBQVcsRUFBRSxJQUF1QjtBQUFJLFFBQzFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlDLFFBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoQyxRQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1QixJQUFFLENBQUM7QUFDSCxJQUNVLFdBQVcsQ0FBQyxHQUFXLEVBQUUsTUFBYyxJQUFJLENBQUMsb0JBQW9CO0FBQUksUUFDMUUsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUNsQyxZQUFNLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7QUFBRSxnQkFBQSxPQUFPLENBQUMsQ0FBQztBQUNwQyxZQUFNLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDM0IsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNIO2dIQUFDO0FBQ0Q7K0NBekNDLFVBQVUsU0FBQyxrQkFDVixVQUFVLEVBQUUsTUFBTTtDQUNuQjs7OztnREFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBjb252ZXJ0Q2xhc3MgfSBmcm9tICcuL2NvbnZlcnQtY2xhc3MudXRpbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEljb25SZWdpc3RyeVNlcnZpY2Uge1xuICBwcml2YXRlIF9kZWZhdWx0Rm9udFNldENsYXNzID0gJ25neCc7XG4gIHByaXZhdGUgX2ljb25NYXA6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPiA9IG5ldyBNYXAoKTtcblxuICBzZXREZWZhdWx0Rm9udFNldENsYXNzKGljb25TZXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgdGhpcy5fZGVmYXVsdEZvbnRTZXRDbGFzcyA9IGljb25TZXQ7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRGb250U2V0Q2xhc3M7XG4gIH1cblxuICBnZXQoa2V5czogc3RyaW5nIHwgc3RyaW5nW10sIHNldD86IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5sb29rdXAoa2V5cywgc2V0KS5tYXAoayA9PiBjb252ZXJ0Q2xhc3MoaykpO1xuICB9XG5cbiAgbG9va3VwKGtleXM6IHN0cmluZyB8IHN0cmluZ1tdLCBzZXQ/OiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIChBcnJheS5pc0FycmF5KGtleXMpID8ga2V5cyA6IFtrZXlzXSkucmVkdWNlKChwOiBzdHJpbmdbXSwgazogc3RyaW5nKSA9PiB7XG4gICAgICBrID0gdGhpcy5fZXhwYW5kS2V5cyhrLCBzZXQpXG4gICAgICAgIC5tYXAoa2sgPT4ge1xuICAgICAgICAgIGNvbnN0IHggPSB0aGlzLl9pY29uTWFwLmdldChrayk7XG4gICAgICAgICAgcmV0dXJuIHggJiYgeC5sZW5ndGggPT09IDEgPyB4WzBdIDoga2s7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcgJyk7XG4gICAgICByZXR1cm4gcC5jb25jYXQodGhpcy5faWNvbk1hcC5nZXQoaykgfHwgW2tdKTtcbiAgICB9LCBbXSk7XG4gIH1cblxuICBhZGQoa2V5OiBzdHJpbmcsIGljb246IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgY29uc3QgayA9IHRoaXMuX2V4cGFuZEtleXMoa2V5KS5qb2luKCcgJyk7XG4gICAgY29uc3QgdiA9IHRoaXMubG9va3VwKGljb24pO1xuICAgIHRoaXMuX2ljb25NYXAuc2V0KGssIHYpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZXhwYW5kS2V5cyhrZXk6IHN0cmluZywgc2V0OiBzdHJpbmcgPSB0aGlzLl9kZWZhdWx0Rm9udFNldENsYXNzKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBrZXkuc3BsaXQoJyAnKS5tYXAoayA9PiB7XG4gICAgICBpZiAoay5pbmNsdWRlcygnOicpKSByZXR1cm4gaztcbiAgICAgIHJldHVybiBgJHtzZXR9OiR7a31gO1xuICAgIH0pO1xuICB9XG59XG4iXX0=