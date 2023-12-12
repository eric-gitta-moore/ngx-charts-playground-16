import { PipeTransform } from '@angular/core';
import momentTimezone from 'moment-timezone';
import * as ɵngcc0 from '@angular/core';
export declare class TimeZonePipe implements PipeTransform {
    transform(value: Date | momentTimezone.Moment | string | number, timezone?: string): momentTimezone.Moment | string;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TimeZonePipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDeclaration<TimeZonePipe, "amTimeZone">;
}

//# sourceMappingURL=time-zone.pipe.d.ts.map