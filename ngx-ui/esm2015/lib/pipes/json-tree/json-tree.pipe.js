import { Pipe } from '@angular/core';
import { jsonToTree } from './json-to-tree.util';
import * as ɵngcc0 from '@angular/core';
export class JSONTreePipe {
    transform(input) {
        return [jsonToTree(input)];
    }
}
JSONTreePipe.ɵfac = function JSONTreePipe_Factory(t) { return new (t || JSONTreePipe)(); };
JSONTreePipe.ɵpipe = /*@__PURE__*/ ɵngcc0.ɵɵdefinePipe({ name: "jsonTree", type: JSONTreePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(JSONTreePipe, [{
        type: Pipe,
        args: [{
                name: 'jsonTree'
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi10cmVlLnBpcGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL3BpcGVzL2pzb24tdHJlZS9qc29uLXRyZWUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBS2pELE1BQU0sT0FBTyxZQUFZO0FBQUcsSUFDMUIsU0FBUyxDQUFDLEtBQWM7QUFBSSxRQUMxQixPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDL0IsSUFBRSxDQUFDO0FBQ0g7d0NBUEMsSUFBSSxTQUFDLGtCQUNKLElBQUksRUFBRSxVQUFVO1NBQ2pCOzs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsganNvblRvVHJlZSB9IGZyb20gJy4vanNvbi10by10cmVlLnV0aWwnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdqc29uVHJlZSdcbn0pXG5leHBvcnQgY2xhc3MgSlNPTlRyZWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShpbnB1dDogdW5rbm93bik6IGFueVtdIHtcbiAgICByZXR1cm4gW2pzb25Ub1RyZWUoaW5wdXQpXTtcbiAgfVxufVxuIl19