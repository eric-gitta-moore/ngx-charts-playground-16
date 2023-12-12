import { Pipe } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class CammelToSnakePipe {
    transform(input) {
        if (!input)
            return '';
        const str = input.toString();
        return str
            .split(/(?=[A-Z])/)
            .join('_')
            .toLowerCase();
    }
}
CammelToSnakePipe.ɵfac = function CammelToSnakePipe_Factory(t) { return new (t || CammelToSnakePipe)(); };
CammelToSnakePipe.ɵpipe = /*@__PURE__*/ ɵngcc0.ɵɵdefinePipe({ name: "cammeltosnake", type: CammelToSnakePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CammelToSnakePipe, [{
        type: Pipe,
        args: [{ name: 'cammeltosnake' }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtbWVsLXRvLXNuYWtlLnBpcGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL3BpcGVzL2NhbW1lbC10by1zbmFrZS9jYW1tZWwtdG8tc25ha2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFHcEQsTUFBTSxPQUFPLGlCQUFpQjtBQUFHLElBQy9CLFNBQVMsQ0FBQyxLQUFlO0FBQUksUUFDM0IsSUFBSSxDQUFDLEtBQUs7QUFBRSxZQUFBLE9BQU8sRUFBRSxDQUFDO0FBQzFCLFFBQUksTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ2pDLFFBQ0ksT0FBTyxHQUFHO0FBQ2QsYUFBTyxLQUFLLENBQUMsV0FBVyxDQUFDO0FBQ3pCLGFBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUNoQixhQUFPLFdBQVcsRUFBRSxDQUFDO0FBQ3JCLElBQUUsQ0FBQztBQUNIOzZDQVhDLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7Ozs7OzBCQUMxQjtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICdjYW1tZWx0b3NuYWtlJyB9KVxuZXhwb3J0IGNsYXNzIENhbW1lbFRvU25ha2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShpbnB1dD86IHVua25vd24pOiBzdHJpbmcge1xuICAgIGlmICghaW5wdXQpIHJldHVybiAnJztcbiAgICBjb25zdCBzdHIgPSBpbnB1dC50b1N0cmluZygpO1xuXG4gICAgcmV0dXJuIHN0clxuICAgICAgLnNwbGl0KC8oPz1bQS1aXSkvKVxuICAgICAgLmpvaW4oJ18nKVxuICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gIH1cbn1cbiJdfQ==