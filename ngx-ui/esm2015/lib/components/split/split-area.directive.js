import { Directive, Input, HostBinding, ChangeDetectorRef } from '@angular/core';
import { partsToStyle, basisToParts } from './utils';
import * as ɵngcc0 from '@angular/core';
const DEFAULT_BASIS = '1 1 1e-9px';
export function validateBasis(basis, grow = '1', shrink = '1') {
    const parts = [grow, shrink, basis];
    const matches = basis.split(' ');
    if (matches.length === 3) {
        return matches;
    }
    return parts;
}
export class SplitAreaDirective {
    constructor(ref) {
        this.ref = ref;
        this.ngxSplitArea = DEFAULT_BASIS;
        this.shouldAdjustMaxMin = false;
        this.overflow = 'hidden';
    }
    get flex() {
        return partsToStyle(this.currentFlexParts);
    }
    get maxWidth() {
        if (this.shouldAdjustMaxMin) {
            return this.currentFlexParts[2];
        }
    }
    get minWidth() {
        if (this.shouldAdjustMaxMin) {
            return this.currentFlexParts[2];
        }
    }
    ngOnChanges() {
        if (!this.ngxSplitArea) {
            this.ngxSplitArea = DEFAULT_BASIS;
        }
        const [grow, shrink, basis] = basisToParts('1', '1', this.ngxSplitArea);
        this.currentFlexParts = [grow, shrink, basis];
        this.initialFlexParts = [grow, shrink, basis];
        if (!this.minBasis && shrink === '0') {
            this.minBasis = basis;
        }
        if (!this.maxBasis && grow === '0') {
            this.maxBasis = basis;
        }
    }
    updateBasis(newBasis) {
        this.currentFlexParts[2] = newBasis;
        if (this.shouldAdjustMaxMin) {
            this.ref.detectChanges();
        }
        else {
            this.ref.markForCheck();
        }
    }
}
SplitAreaDirective.ɵfac = function SplitAreaDirective_Factory(t) { return new (t || SplitAreaDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
SplitAreaDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: SplitAreaDirective, selectors: [["", "ngxSplitArea", ""]], hostAttrs: [1, "ngx-split-area"], hostVars: 8, hostBindings: function SplitAreaDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("overflow", ctx.overflow)("flex", ctx.flex)("max-width", ctx.maxWidth)("min-width", ctx.minWidth);
    } }, inputs: { ngxSplitArea: "ngxSplitArea", shouldAdjustMaxMin: "shouldAdjustMaxMin", minBasis: "minBasis", maxBasis: "maxBasis" }, exportAs: ["ngxSplitArea"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
SplitAreaDirective.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
SplitAreaDirective.propDecorators = {
    ngxSplitArea: [{ type: Input }],
    minBasis: [{ type: Input }],
    maxBasis: [{ type: Input }],
    shouldAdjustMaxMin: [{ type: Input }],
    flex: [{ type: HostBinding, args: ['style.flex',] }],
    maxWidth: [{ type: HostBinding, args: ['style.max-width',] }],
    minWidth: [{ type: HostBinding, args: ['style.min-width',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SplitAreaDirective, [{
        type: Directive,
        args: [{
                exportAs: 'ngxSplitArea',
                selector: '[ngxSplitArea]',
                host: {
                    class: 'ngx-split-area',
                    '[style.overflow]': 'overflow'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { ngxSplitArea: [{
            type: Input
        }], shouldAdjustMaxMin: [{
            type: Input
        }], flex: [{
            type: HostBinding,
            args: ['style.flex']
        }], maxWidth: [{
            type: HostBinding,
            args: ['style.max-width']
        }], minWidth: [{
            type: HostBinding,
            args: ['style.min-width']
        }], minBasis: [{
            type: Input
        }], maxBasis: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtYXJlYS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvc3BsaXQvc3BsaXQtYXJlYS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBYSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sU0FBUyxDQUFDOztBQUVoRSxNQUFNLGFBQWEsR0FBRyxZQUFZLENBQUM7QUFFbkMsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUFhLEVBQUUsSUFBSSxHQUFHLEdBQUcsRUFBRSxNQUFNLEdBQUcsR0FBRztBQUFJLElBQ3ZFLE1BQU0sS0FBSyxHQUFjLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNqRCxJQUFFLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkMsSUFBRSxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQzVCLFFBQUksT0FBTyxPQUFvQixDQUFDO0FBQ2hDLEtBQUc7QUFDSCxJQUFFLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQVVELE1BQU0sT0FBTyxrQkFBa0I7QUFBRyxJQTBCaEMsWUFBb0IsR0FBc0I7QUFBSSxRQUExQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBekJsQyxpQkFBWSxHQUFXLGFBQWEsQ0FBQztBQUNoRCxRQUVXLHVCQUFrQixHQUFHLEtBQUssQ0FBQztBQUN0QyxRQUNFLGFBQVEsR0FBRyxRQUFRLENBQUM7QUFDdEIsSUFtQitDLENBQUM7QUFDaEQsSUFqQkUsSUFDSSxJQUFJO0FBQ1YsUUFBSSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUMvQyxJQUFFLENBQUM7QUFDSCxJQUNFLElBQW9DLFFBQVE7QUFBSyxRQUMvQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtBQUNqQyxZQUFNLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUFFLElBQW9DLFFBQVE7QUFBSyxRQUMvQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtBQUNqQyxZQUFNLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUdFLFdBQVc7QUFDYixRQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQzVCLFlBQU0sSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUM7QUFDeEMsU0FBSztBQUNMLFFBQUksTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUcsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzVFLFFBQUksSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNsRCxRQUFJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDbEQsUUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxNQUFNLEtBQUssR0FBRyxFQUFFO0FBQzFDLFlBQU0sSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDNUIsU0FBSztBQUNMLFFBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRTtBQUN4QyxZQUFNLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzVCLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVcsQ0FBQyxRQUFnQjtBQUM5QixRQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7QUFDeEMsUUFDSSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtBQUNqQyxZQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDL0IsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDOUIsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIOzhDQTVEQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGNBQWMsa0JBQ3hCLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsSUFBSSxFQUFFLHNCQUNKLEtBQUssRUFBRSxnQkFBZ0Isc0JBQ3ZCLGtCQUFrQixFQUFFLFVBQVUsa0JBQy9CLGNBQ0Y7O2dOQUNJO0FBQUM7QUFBNEMsWUF0QkMsaUJBQWlCO0FBQUc7QUFBRztBQUN2RCwyQkFzQmhCLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUssdUJBQ1YsS0FBSztBQUFLLGlDQUNWLEtBQUs7QUFBSyxtQkFNVixXQUFXLFNBQUMsWUFBWTtBQUN0Qix1QkFJRixXQUFXLFNBQUMsaUJBQWlCO0FBQU8sdUJBS3BDLFdBQVcsU0FBQyxpQkFBaUI7QUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBIb3N0QmluZGluZywgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZsZXhQYXJ0cywgcGFydHNUb1N0eWxlLCBiYXNpc1RvUGFydHMgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgREVGQVVMVF9CQVNJUyA9ICcxIDEgMWUtOXB4JztcblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQmFzaXMoYmFzaXM6IHN0cmluZywgZ3JvdyA9ICcxJywgc2hyaW5rID0gJzEnKTogRmxleFBhcnRzIHtcbiAgY29uc3QgcGFydHM6IEZsZXhQYXJ0cyA9IFtncm93LCBzaHJpbmssIGJhc2lzXTtcbiAgY29uc3QgbWF0Y2hlcyA9IGJhc2lzLnNwbGl0KCcgJyk7XG4gIGlmIChtYXRjaGVzLmxlbmd0aCA9PT0gMykge1xuICAgIHJldHVybiBtYXRjaGVzIGFzIEZsZXhQYXJ0cztcbiAgfVxuICByZXR1cm4gcGFydHM7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBleHBvcnRBczogJ25neFNwbGl0QXJlYScsXG4gIHNlbGVjdG9yOiAnW25neFNwbGl0QXJlYV0nLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICduZ3gtc3BsaXQtYXJlYScsXG4gICAgJ1tzdHlsZS5vdmVyZmxvd10nOiAnb3ZlcmZsb3cnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgU3BsaXRBcmVhRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbmd4U3BsaXRBcmVhOiBzdHJpbmcgPSBERUZBVUxUX0JBU0lTO1xuICBASW5wdXQoKSBtaW5CYXNpczogc3RyaW5nO1xuICBASW5wdXQoKSBtYXhCYXNpczogc3RyaW5nO1xuICBASW5wdXQoKSBzaG91bGRBZGp1c3RNYXhNaW4gPSBmYWxzZTtcblxuICBvdmVyZmxvdyA9ICdoaWRkZW4nO1xuICBpbml0aWFsRmxleFBhcnRzOiBGbGV4UGFydHM7XG4gIGN1cnJlbnRGbGV4UGFydHM6IEZsZXhQYXJ0cztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmZsZXgnKVxuICBnZXQgZmxleCgpIHtcbiAgICByZXR1cm4gcGFydHNUb1N0eWxlKHRoaXMuY3VycmVudEZsZXhQYXJ0cyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1heC13aWR0aCcpIGdldCBtYXhXaWR0aCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnNob3VsZEFkanVzdE1heE1pbikge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEZsZXhQYXJ0c1syXTtcbiAgICB9XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5taW4td2lkdGgnKSBnZXQgbWluV2lkdGgoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zaG91bGRBZGp1c3RNYXhNaW4pIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRGbGV4UGFydHNbMl07XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICghdGhpcy5uZ3hTcGxpdEFyZWEpIHtcbiAgICAgIHRoaXMubmd4U3BsaXRBcmVhID0gREVGQVVMVF9CQVNJUztcbiAgICB9XG4gICAgY29uc3QgW2dyb3csIHNocmluaywgYmFzaXNdID0gYmFzaXNUb1BhcnRzKCcxJywgJzEnLCB0aGlzLm5neFNwbGl0QXJlYSk7XG4gICAgdGhpcy5jdXJyZW50RmxleFBhcnRzID0gW2dyb3csIHNocmluaywgYmFzaXNdO1xuICAgIHRoaXMuaW5pdGlhbEZsZXhQYXJ0cyA9IFtncm93LCBzaHJpbmssIGJhc2lzXTtcbiAgICBpZiAoIXRoaXMubWluQmFzaXMgJiYgc2hyaW5rID09PSAnMCcpIHtcbiAgICAgIHRoaXMubWluQmFzaXMgPSBiYXNpcztcbiAgICB9XG4gICAgaWYgKCF0aGlzLm1heEJhc2lzICYmIGdyb3cgPT09ICcwJykge1xuICAgICAgdGhpcy5tYXhCYXNpcyA9IGJhc2lzO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUJhc2lzKG5ld0Jhc2lzOiBzdHJpbmcpIHtcbiAgICB0aGlzLmN1cnJlbnRGbGV4UGFydHNbMl0gPSBuZXdCYXNpcztcblxuICAgIGlmICh0aGlzLnNob3VsZEFkanVzdE1heE1pbikge1xuICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==