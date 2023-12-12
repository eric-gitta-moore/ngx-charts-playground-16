import { PipeTransform } from '@angular/core';
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
export declare class FilterPipe implements PipeTransform {
    transform(array: any[], filter: unknown): any[];
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<FilterPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDeclaration<FilterPipe, "filterBy">;
}

//# sourceMappingURL=filter.pipe.d.ts.map