import { Input, ContentChildren, QueryList, ElementRef, Directive, HostBinding } from '@angular/core';
import { SplitAreaDirective } from './split-area.directive';
import { SplitHandleComponent } from './split-handle.component';
import { SplitDirection } from './split-direction.enum';
import { getMinMaxPct } from './get-min-max-pct.util';
import { basisToValue } from './basis-to-value.util';
import { isPercent } from './is-percent.util';
import { resizeAreaBy } from './resize-area-by.util';
import * as ɵngcc0 from '@angular/core';
export class SplitDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.direction = SplitDirection.Row;
        this.subscriptions = [];
    }
    get rowCss() {
        return this.direction === SplitDirection.Row;
    }
    get columnCss() {
        return this.direction === SplitDirection.Column;
    }
    ngAfterContentInit() {
        this.subscriptions.push(...this.handles.map(d => d.drag.subscribe((ev) => this.onDrag(ev))));
        this.subscriptions.push(...this.handles.map(d => d.dblclick.subscribe(() => this.onDblClick())));
        this.updateHandles();
    }
    ngOnChanges() {
        if (!this.direction) {
            this.direction = SplitDirection.Row;
        }
        this.updateHandles();
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }
    resize(delta) {
        const basisToPx = (this.rowCss ? this.elementRef.nativeElement.clientWidth : this.elementRef.nativeElement.clientHeight) / 100;
        const areas = this.areas.toArray();
        // for now assuming splitter is after first area
        const [first, ...rest] = areas;
        [first].forEach(area => (delta = resizeAreaBy(area, delta, basisToPx)));
        // delta is distributed left to right
        rest.forEach(area => (delta += resizeAreaBy(area, -delta, basisToPx)));
    }
    updateHandles() {
        if (this.handles) {
            this.handles.forEach(d => (d.direction = this.direction));
        }
    }
    onDblClick() {
        const basisToPx = (this.rowCss ? this.elementRef.nativeElement.clientWidth : this.elementRef.nativeElement.clientHeight) / 100;
        const area = this.areas.first;
        /* istanbul ignore if */
        if (!area)
            return;
        const [grow, shrink, basis] = area.currentFlexParts;
        const isPct = isPercent(basis);
        const basisValue = basisToValue(basis);
        // get basis in px and %
        const basisPx = isPct ? basisValue * basisToPx : basisValue;
        const basisPct = basisPx / basisToPx;
        // get baseBasis in percent
        const baseBasis = area.initialFlexParts[2];
        const baseBasisPct = basisToValue(baseBasis) / (isPercent(baseBasis) ? basisToPx : 1);
        const [minBasisPct, maxBasisPct] = getMinMaxPct(area.minBasis, area.maxBasis, grow, shrink, baseBasisPct, basisToPx);
        // max and min deltas
        const deltaMin = basisPct - minBasisPct;
        const deltaMax = maxBasisPct - basisPct;
        const delta = deltaMin < deltaMax ? deltaMax : -deltaMin;
        const deltaPx = delta * basisToPx;
        this.resize(deltaPx);
    }
    onDrag({ movementX, movementY }) {
        const deltaPx = this.direction === SplitDirection.Row ? movementX : movementY;
        this.resize(deltaPx);
    }
}
SplitDirective.ɵfac = function SplitDirective_Factory(t) { return new (t || SplitDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
SplitDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: SplitDirective, selectors: [["", "ngxSplit", ""]], contentQueries: function SplitDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, SplitHandleComponent, 4);
        ɵngcc0.ɵɵcontentQuery(dirIndex, SplitAreaDirective, 4);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.handles = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.areas = _t);
    } }, hostAttrs: [1, "ngx-split"], hostVars: 12, hostBindings: function SplitDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("display", "flex")("height", "100%")("width", "100%")("flex-direction", ctx.direction);
        ɵngcc0.ɵɵclassProp("row-split", ctx.rowCss)("column-split", ctx.columnCss);
    } }, inputs: { direction: ["ngxSplit", "direction"] }, exportAs: ["ngxSplit"], features: [ɵngcc0.ɵɵNgOnChangesFeature] });
SplitDirective.ctorParameters = () => [
    { type: ElementRef }
];
SplitDirective.propDecorators = {
    direction: [{ type: HostBinding, args: ['style.flex-direction',] }, { type: Input, args: ['ngxSplit',] }],
    handles: [{ type: ContentChildren, args: [SplitHandleComponent, { descendants: false },] }],
    areas: [{ type: ContentChildren, args: [SplitAreaDirective, { descendants: false },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SplitDirective, [{
        type: Directive,
        args: [{
                exportAs: 'ngxSplit',
                selector: '[ngxSplit]',
                host: {
                    class: 'ngx-split',
                    '[class.row-split]': 'rowCss',
                    '[class.column-split]': 'columnCss',
                    '[style.display]': '"flex"',
                    '[style.height]': '"100%"',
                    '[style.width]': '"100%"'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { direction: [{
            type: HostBinding,
            args: ['style.flex-direction']
        }, {
            type: Input,
            args: ['ngxSplit']
        }], handles: [{
            type: ContentChildren,
            args: [SplitHandleComponent, { descendants: false }]
        }], areas: [{
            type: ContentChildren,
            args: [SplitAreaDirective, { descendants: false }]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL3NwbGl0L3NwbGl0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsS0FBSyxFQUNMLGVBQWUsRUFFZixTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFFVCxXQUFXLEVBRVosTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFlckQsTUFBTSxPQUFPLGNBQWM7QUFBRyxJQXFCNUIsWUFBNkIsVUFBc0I7QUFBSSxRQUExQixlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFsQnBELGNBQVMsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDO0FBQ2pDLFFBZVUsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO0FBQzdDLElBQ3dELENBQUM7QUFDekQsSUFqQkUsSUFBSSxNQUFNO0FBQ1osUUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssY0FBYyxDQUFDLEdBQUcsQ0FBQztBQUNqRCxJQUFFLENBQUM7QUFDSCxJQUNFLElBQUksU0FBUztBQUNmLFFBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLGNBQWMsQ0FBQyxNQUFNLENBQUM7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bXBvcnQge1xuICBJbnB1dCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBRdWVyeUxpc3QsXG4gIEVsZW1lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgT25DaGFuZ2VzLFxuICBIb3N0QmluZGluZyxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTcGxpdEFyZWFEaXJlY3RpdmUgfSBmcm9tICcuL3NwbGl0LWFyZWEuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNwbGl0SGFuZGxlQ29tcG9uZW50IH0gZnJvbSAnLi9zcGxpdC1oYW5kbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFNwbGl0RGlyZWN0aW9uIH0gZnJvbSAnLi9zcGxpdC1kaXJlY3Rpb24uZW51bSc7XG5pbXBvcnQgeyBnZXRNaW5NYXhQY3QgfSBmcm9tICcuL2dldC1taW4tbWF4LXBjdC51dGlsJztcbmltcG9ydCB7IGJhc2lzVG9WYWx1ZSB9IGZyb20gJy4vYmFzaXMtdG8tdmFsdWUudXRpbCc7XG5pbXBvcnQgeyBpc1BlcmNlbnQgfSBmcm9tICcuL2lzLXBlcmNlbnQudXRpbCc7XG5pbXBvcnQgeyByZXNpemVBcmVhQnkgfSBmcm9tICcuL3Jlc2l6ZS1hcmVhLWJ5LnV0aWwnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9pbnRlcm5hbC9TdWJzY3JpcHRpb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgZXhwb3J0QXM6ICduZ3hTcGxpdCcsXG4gIHNlbGVjdG9yOiAnW25neFNwbGl0XScsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25neC1zcGxpdCcsXG4gICAgJ1tjbGFzcy5yb3ctc3BsaXRdJzogJ3Jvd0NzcycsXG4gICAgJ1tjbGFzcy5jb2x1bW4tc3BsaXRdJzogJ2NvbHVtbkNzcycsXG4gICAgJ1tzdHlsZS5kaXNwbGF5XSc6ICdcImZsZXhcIicsXG4gICAgJ1tzdHlsZS5oZWlnaHRdJzogJ1wiMTAwJVwiJyxcbiAgICAnW3N0eWxlLndpZHRoXSc6ICdcIjEwMCVcIidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBTcGxpdERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5mbGV4LWRpcmVjdGlvbicpXG4gIEBJbnB1dCgnbmd4U3BsaXQnKVxuICBkaXJlY3Rpb24gPSBTcGxpdERpcmVjdGlvbi5Sb3c7XG5cbiAgZ2V0IHJvd0NzcygpIHtcbiAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24gPT09IFNwbGl0RGlyZWN0aW9uLlJvdztcbiAgfVxuXG4gIGdldCBjb2x1bW5Dc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09PSBTcGxpdERpcmVjdGlvbi5Db2x1bW47XG4gIH1cblxuICBAQ29udGVudENoaWxkcmVuKFNwbGl0SGFuZGxlQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiBmYWxzZSB9KVxuICByZWFkb25seSBoYW5kbGVzOiBRdWVyeUxpc3Q8U3BsaXRIYW5kbGVDb21wb25lbnQ+O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oU3BsaXRBcmVhRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiBmYWxzZSB9KVxuICByZWFkb25seSBhcmVhczogUXVlcnlMaXN0PFNwbGl0QXJlYURpcmVjdGl2ZT47XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goLi4udGhpcy5oYW5kbGVzLm1hcChkID0+IGQuZHJhZy5zdWJzY3JpYmUoKGV2OiBNb3VzZUV2ZW50KSA9PiB0aGlzLm9uRHJhZyhldikpKSk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goLi4udGhpcy5oYW5kbGVzLm1hcChkID0+IGQuZGJsY2xpY2suc3Vic2NyaWJlKCgpID0+IHRoaXMub25EYmxDbGljaygpKSkpO1xuICAgIHRoaXMudXBkYXRlSGFuZGxlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKCF0aGlzLmRpcmVjdGlvbikge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBTcGxpdERpcmVjdGlvbi5Sb3c7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlSGFuZGxlcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goc3ViID0+IHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzaXplKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBiYXNpc1RvUHggPVxuICAgICAgKHRoaXMucm93Q3NzID8gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggOiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQpIC8gMTAwO1xuXG4gICAgY29uc3QgYXJlYXMgPSB0aGlzLmFyZWFzLnRvQXJyYXkoKTtcblxuICAgIC8vIGZvciBub3cgYXNzdW1pbmcgc3BsaXR0ZXIgaXMgYWZ0ZXIgZmlyc3QgYXJlYVxuICAgIGNvbnN0IFtmaXJzdCwgLi4ucmVzdF0gPSBhcmVhcztcbiAgICBbZmlyc3RdLmZvckVhY2goYXJlYSA9PiAoZGVsdGEgPSByZXNpemVBcmVhQnkoYXJlYSwgZGVsdGEsIGJhc2lzVG9QeCkpKTtcblxuICAgIC8vIGRlbHRhIGlzIGRpc3RyaWJ1dGVkIGxlZnQgdG8gcmlnaHRcbiAgICByZXN0LmZvckVhY2goYXJlYSA9PiAoZGVsdGEgKz0gcmVzaXplQXJlYUJ5KGFyZWEsIC1kZWx0YSwgYmFzaXNUb1B4KSkpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVIYW5kbGVzKCkge1xuICAgIGlmICh0aGlzLmhhbmRsZXMpIHtcbiAgICAgIHRoaXMuaGFuZGxlcy5mb3JFYWNoKGQgPT4gKGQuZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb24pKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uRGJsQ2xpY2soKTogdm9pZCB7XG4gICAgY29uc3QgYmFzaXNUb1B4ID1cbiAgICAgICh0aGlzLnJvd0NzcyA/IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoIDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0KSAvIDEwMDtcblxuICAgIGNvbnN0IGFyZWEgPSB0aGlzLmFyZWFzLmZpcnN0O1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFhcmVhKSByZXR1cm47XG5cbiAgICBjb25zdCBbZ3Jvdywgc2hyaW5rLCBiYXNpc10gPSBhcmVhLmN1cnJlbnRGbGV4UGFydHM7XG4gICAgY29uc3QgaXNQY3QgPSBpc1BlcmNlbnQoYmFzaXMpO1xuICAgIGNvbnN0IGJhc2lzVmFsdWUgPSBiYXNpc1RvVmFsdWUoYmFzaXMpO1xuXG4gICAgLy8gZ2V0IGJhc2lzIGluIHB4IGFuZCAlXG4gICAgY29uc3QgYmFzaXNQeCA9IGlzUGN0ID8gYmFzaXNWYWx1ZSAqIGJhc2lzVG9QeCA6IGJhc2lzVmFsdWU7XG4gICAgY29uc3QgYmFzaXNQY3QgPSBiYXNpc1B4IC8gYmFzaXNUb1B4O1xuXG4gICAgLy8gZ2V0IGJhc2VCYXNpcyBpbiBwZXJjZW50XG4gICAgY29uc3QgYmFzZUJhc2lzID0gYXJlYS5pbml0aWFsRmxleFBhcnRzWzJdO1xuICAgIGNvbnN0IGJhc2VCYXNpc1BjdCA9IGJhc2lzVG9WYWx1ZShiYXNlQmFzaXMpIC8gKGlzUGVyY2VudChiYXNlQmFzaXMpID8gYmFzaXNUb1B4IDogMSk7XG5cbiAgICBjb25zdCBbbWluQmFzaXNQY3QsIG1heEJhc2lzUGN0XSA9IGdldE1pbk1heFBjdChcbiAgICAgIGFyZWEubWluQmFzaXMsXG4gICAgICBhcmVhLm1heEJhc2lzLFxuICAgICAgZ3JvdyxcbiAgICAgIHNocmluayxcbiAgICAgIGJhc2VCYXNpc1BjdCxcbiAgICAgIGJhc2lzVG9QeFxuICAgICk7XG5cbiAgICAvLyBtYXggYW5kIG1pbiBkZWx0YXNcbiAgICBjb25zdCBkZWx0YU1pbiA9IGJhc2lzUGN0IC0gbWluQmFzaXNQY3Q7XG4gICAgY29uc3QgZGVsdGFNYXggPSBtYXhCYXNpc1BjdCAtIGJhc2lzUGN0O1xuXG4gICAgY29uc3QgZGVsdGEgPSBkZWx0YU1pbiA8IGRlbHRhTWF4ID8gZGVsdGFNYXggOiAtZGVsdGFNaW47XG4gICAgY29uc3QgZGVsdGFQeCA9IGRlbHRhICogYmFzaXNUb1B4O1xuXG4gICAgdGhpcy5yZXNpemUoZGVsdGFQeCk7XG4gIH1cblxuICBwcml2YXRlIG9uRHJhZyh7IG1vdmVtZW50WCwgbW92ZW1lbnRZIH06IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBkZWx0YVB4ID0gdGhpcy5kaXJlY3Rpb24gPT09IFNwbGl0RGlyZWN0aW9uLlJvdyA/IG1vdmVtZW50WCA6IG1vdmVtZW50WTtcbiAgICB0aGlzLnJlc2l6ZShkZWx0YVB4KTtcbiAgfVxufVxuIl19