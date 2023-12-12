import { Pipe } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class DecamelizePipe {
    transform(input) {
        if (!input)
            return '';
        const s = input.toString();
        return s.charAt(0).toUpperCase() + s.substr(1).replace(/[A-Z]/g, ' $&');
    }
}
DecamelizePipe.ɵfac = function DecamelizePipe_Factory(t) { return new (t || DecamelizePipe)(); };
DecamelizePipe.ɵpipe = /*@__PURE__*/ ɵngcc0.ɵɵdefinePipe({ name: "decamelize", type: DecamelizePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DecamelizePipe, [{
        type: Pipe,
        args: [{
                name: 'decamelize'
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjYW1lbGl6ZS5waXBlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9waXBlcy9kZWNhbWVsaXplL2RlY2FtZWxpemUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFLcEQsTUFBTSxPQUFPLGNBQWM7QUFBRyxJQUM1QixTQUFTLENBQUMsS0FBYztBQUFJLFFBQzFCLElBQUksQ0FBQyxLQUFLO0FBQUUsWUFBQSxPQUFPLEVBQUUsQ0FBQztBQUMxQixRQUNJLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMvQixRQUFJLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDNUUsSUFBRSxDQUFDO0FBQ0g7MENBVkMsSUFBSSxTQUFDLGtCQUNKLElBQUksRUFBRSxZQUFZO09BQ25COzs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZGVjYW1lbGl6ZSdcbn0pXG5leHBvcnQgY2xhc3MgRGVjYW1lbGl6ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGlucHV0OiB1bmtub3duKTogc3RyaW5nIHtcbiAgICBpZiAoIWlucHV0KSByZXR1cm4gJyc7XG5cbiAgICBjb25zdCBzID0gaW5wdXQudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc3Vic3RyKDEpLnJlcGxhY2UoL1tBLVpdL2csICcgJCYnKTtcbiAgfVxufVxuIl19