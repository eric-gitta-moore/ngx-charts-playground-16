import { Pipe } from '@angular/core';
import { isNumber } from '../../utils/is-number/is-number.util';
import { filterByString } from '../../utils/filter/filter-by-string/filter-by-string.util';
import { filterByObject } from '../../utils/filter/filter-by-object/filter-by-object.util';
import { filterDefault } from '../../utils/filter/filter-default/filter-default.util';
/**
 * Filter Pipe
 * A pipe like the old-school ng1 pipe. Use this with
 * moderation since it has performance issues.
 *
 * References:
 *  - https://github.com/VadimDez/ng2-filter-pipe
 *  - https://angular.io/docs/ts/latest/guide/pipes.html
 *
 * Example:
 *
 *    <input type="text" [(ngModel)]="stringFilter">
 *    <ul>
 *      <li *ngFor="let item of array | filterBy: stringFilter">
 *        {{ item }}
 *      </li>
 *    </ul>
 *
 */
import * as ɵngcc0 from '@angular/core';
export class FilterPipe {
    transform(array, filter) {
        if (typeof filter === 'string') {
            if (isNumber(filter)) {
                return array.filter(filterDefault(filter));
            }
            return array.filter(filterByString(filter));
        }
        if (typeof filter === 'object') {
            return array.filter(filterByObject(filter));
        }
        return array.filter(filterDefault(filter));
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = /*@__PURE__*/ ɵngcc0.ɵɵdefinePipe({ name: "filterBy", type: FilterPipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(FilterPipe, [{
        type: Pipe,
        args: [{
                name: 'filterBy',
                pure: false
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL3BpcGVzL2ZpbHRlci9maWx0ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUMzRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFFdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFLSCxNQUFNLE9BQU8sVUFBVTtBQUFHLElBQ3hCLFNBQVMsQ0FBQyxLQUFZLEVBQUUsTUFBZTtBQUFJLFFBQ3pDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO0FBQ3BDLFlBQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDNUIsZ0JBQVEsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ25ELGFBQU87QUFDUCxZQUNNLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNsRCxTQUFLO0FBQ0wsUUFDSSxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtBQUNwQyxZQUFNLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNsRCxTQUFLO0FBQ0wsUUFDSSxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDL0MsSUFBRSxDQUFDO0FBQ0g7c0NBcEJDLElBQUksU0FBQyxrQkFDSixJQUFJLEVBQUUsVUFBVTtpQkFDaEIsSUFBSSxFQUFFLEtBQUssY0FDWjs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzL2lzLW51bWJlci9pcy1udW1iZXIudXRpbCc7XG5pbXBvcnQgeyBmaWx0ZXJCeVN0cmluZyB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbHRlci9maWx0ZXItYnktc3RyaW5nL2ZpbHRlci1ieS1zdHJpbmcudXRpbCc7XG5pbXBvcnQgeyBmaWx0ZXJCeU9iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbHRlci9maWx0ZXItYnktb2JqZWN0L2ZpbHRlci1ieS1vYmplY3QudXRpbCc7XG5pbXBvcnQgeyBmaWx0ZXJEZWZhdWx0IH0gZnJvbSAnLi4vLi4vdXRpbHMvZmlsdGVyL2ZpbHRlci1kZWZhdWx0L2ZpbHRlci1kZWZhdWx0LnV0aWwnO1xuXG4vKipcbiAqIEZpbHRlciBQaXBlXG4gKiBBIHBpcGUgbGlrZSB0aGUgb2xkLXNjaG9vbCBuZzEgcGlwZS4gVXNlIHRoaXMgd2l0aFxuICogbW9kZXJhdGlvbiBzaW5jZSBpdCBoYXMgcGVyZm9ybWFuY2UgaXNzdWVzLlxuICpcbiAqIFJlZmVyZW5jZXM6XG4gKiAgLSBodHRwczovL2dpdGh1Yi5jb20vVmFkaW1EZXovbmcyLWZpbHRlci1waXBlXG4gKiAgLSBodHRwczovL2FuZ3VsYXIuaW8vZG9jcy90cy9sYXRlc3QvZ3VpZGUvcGlwZXMuaHRtbFxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJzdHJpbmdGaWx0ZXJcIj5cbiAqICAgIDx1bD5cbiAqICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGFycmF5IHwgZmlsdGVyQnk6IHN0cmluZ0ZpbHRlclwiPlxuICogICAgICAgIHt7IGl0ZW0gfX1cbiAqICAgICAgPC9saT5cbiAqICAgIDwvdWw+XG4gKlxuICovXG5AUGlwZSh7XG4gIG5hbWU6ICdmaWx0ZXJCeScsXG4gIHB1cmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGFycmF5OiBhbnlbXSwgZmlsdGVyOiB1bmtub3duKTogYW55W10ge1xuICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGlzTnVtYmVyKGZpbHRlcikpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcihmaWx0ZXJEZWZhdWx0KGZpbHRlcikpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGZpbHRlckJ5U3RyaW5nKGZpbHRlcikpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcihmaWx0ZXJCeU9iamVjdChmaWx0ZXIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGZpbHRlckRlZmF1bHQoZmlsdGVyKSk7XG4gIH1cbn1cbiJdfQ==