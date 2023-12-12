import { Pipe } from '@angular/core';
import momentTimezone from 'moment-timezone';
import * as ɵngcc0 from '@angular/core';
export class TimeZonePipe {
    transform(value, timezone) {
        if (!value) {
            return '';
        }
        const m = timezone ? momentTimezone(value).tz(timezone) : momentTimezone(value);
        return m.isValid() ? m : '' + value;
    }
}
TimeZonePipe.ɵfac = function TimeZonePipe_Factory(t) { return new (t || TimeZonePipe)(); };
TimeZonePipe.ɵpipe = /*@__PURE__*/ ɵngcc0.ɵɵdefinePipe({ name: "amTimeZone", type: TimeZonePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TimeZonePipe, [{
        type: Pipe,
        args: [{
                name: 'amTimeZone'
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS16b25lLnBpcGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL3BpcGVzL3RpbWUtem9uZS90aW1lLXpvbmUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLGNBQWMsTUFBTSxpQkFBaUIsQ0FBQzs7QUFLN0MsTUFBTSxPQUFPLFlBQVk7QUFBRyxJQUMxQixTQUFTLENBQUMsS0FBcUQsRUFBRSxRQUFpQjtBQUFJLFFBQ3BGLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDaEIsWUFBTSxPQUFPLEVBQUUsQ0FBQztBQUNoQixTQUFLO0FBQ0wsUUFDSSxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRixRQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7QUFDeEMsSUFBRSxDQUFDO0FBQ0g7d0NBWkMsSUFBSSxTQUFDLGtCQUNKLElBQUksRUFBRSxZQUFZO1dBQ25COzs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBtb21lbnRUaW1lem9uZSBmcm9tICdtb21lbnQtdGltZXpvbmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdhbVRpbWVab25lJ1xufSlcbmV4cG9ydCBjbGFzcyBUaW1lWm9uZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBEYXRlIHwgbW9tZW50VGltZXpvbmUuTW9tZW50IHwgc3RyaW5nIHwgbnVtYmVyLCB0aW1lem9uZT86IHN0cmluZyk6IG1vbWVudFRpbWV6b25lLk1vbWVudCB8IHN0cmluZyB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IG0gPSB0aW1lem9uZSA/IG1vbWVudFRpbWV6b25lKHZhbHVlKS50eih0aW1lem9uZSkgOiBtb21lbnRUaW1lem9uZSh2YWx1ZSk7XG4gICAgcmV0dXJuIG0uaXNWYWxpZCgpID8gbSA6ICcnICsgdmFsdWU7XG4gIH1cbn1cbiJdfQ==