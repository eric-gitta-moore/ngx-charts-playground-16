import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { debounceable } from '../../../../decorators/debounceable/debounceable.decorator';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/drag-drop';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '../../../input/input.component';
import * as ɵngcc4 from '@angular/forms';

function OrderableInputsListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 3);
    ɵngcc0.ɵɵelementStart(1, "div", 4);
    ɵngcc0.ɵɵelement(2, "i", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "ngx-input", 6);
    ɵngcc0.ɵɵlistener("ngModelChange", function OrderableInputsListComponent_div_1_Template_ngx_input_ngModelChange_3_listener($event) { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r4); const item_r1 = restoredCtx.$implicit; return item_r1.value = $event; })("keyup", function OrderableInputsListComponent_div_1_Template_ngx_input_keyup_3_listener() { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.update(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "button", 7);
    ɵngcc0.ɵɵlistener("click", function OrderableInputsListComponent_div_1_Template_button_click_4_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r4); const index_r2 = restoredCtx.index; const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.removeItem(index_r2); });
    ɵngcc0.ɵɵelement(5, "i", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngModel", item_r1.value);
} }
export class OrderableInputsListComponent {
    constructor() {
        this.onUpdate = new EventEmitter();
        this.dataValues = [];
    }
    ngOnInit() {
        (this.data || []).forEach(item => {
            this.dataValues.push({
                value: item
            });
        });
    }
    addExample() {
        this.dataValues.push({
            value: ''
        });
    }
    removeItem(index) {
        this.dataValues.splice(index, 1);
        this.update();
    }
    drop(event) {
        moveItemInArray(this.dataValues, event.previousIndex, event.currentIndex);
        this.update();
    }
    update() {
        const data = this.dataValues.map(item => item.value);
        this.onUpdate.emit(data);
    }
}
OrderableInputsListComponent.ɵfac = function OrderableInputsListComponent_Factory(t) { return new (t || OrderableInputsListComponent)(); };
OrderableInputsListComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: OrderableInputsListComponent, selectors: [["ngx-orderable-inputs-list"]], inputs: { data: "data" }, outputs: { onUpdate: "onUpdate" }, decls: 4, vars: 1, consts: [["cdkDropList", "", 1, "orderable-inputs-list", 3, "cdkDropListDropped"], ["class", "input-item", "cdkDrag", "", "cdkDragLockAxis", "y", 4, "ngFor", "ngForOf"], [1, "add-examples", 3, "click"], ["cdkDrag", "", "cdkDragLockAxis", "y", 1, "input-item"], ["cdkDragHandle", "", 1, "drag-drop-handle"], [1, "ngx-icon", "ngx-handle"], ["type", "text", 3, "ngModel", "ngModelChange", "keyup"], ["type", "button", 1, "remove-item", 3, "click"], [1, "ngx-icon", "ngx-x"]], template: function OrderableInputsListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("cdkDropListDropped", function OrderableInputsListComponent_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        ɵngcc0.ɵɵtemplate(1, OrderableInputsListComponent_div_1_Template, 6, 1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵlistener("click", function OrderableInputsListComponent_Template_div_click_2_listener() { return ctx.addExample(); });
        ɵngcc0.ɵɵtext(3, " Add Example ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.dataValues);
    } }, directives: [ɵngcc1.CdkDropList, ɵngcc2.NgForOf, ɵngcc1.CdkDrag, ɵngcc1.CdkDragHandle, ɵngcc3.InputComponent, ɵngcc4.NgControlStatus, ɵngcc4.NgModel], styles: [".add-examples,.input-item{height:45px;display:flex;align-items:center}.input-item{background:#3b4457;box-shadow:0 2px 7px rgba(0,0,0,.2);border-radius:2px;margin-bottom:13px}.input-item .drag-drop-handle,.input-item .remove-item{color:#818fa9}.input-item .drag-drop-handle{margin:0 9px;height:17px;font-size:14.5px;cursor:-webkit-grab;cursor:grab}.input-item .ngx-input{flex:1;margin:0}.input-item .remove-item{font-size:8px;margin:0 5px;height:8px}.add-examples{cursor:pointer;height:45px;border:1px dashed #479eff;color:#479eff;display:flex;align-items:center;justify-content:center}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.orderable-inputs-list.cdk-drop-list-dragging .input-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"], encapsulation: 2, changeDetection: 0 });
OrderableInputsListComponent.propDecorators = {
    data: [{ type: Input }],
    onUpdate: [{ type: Output }]
};
__decorate([
    debounceable(500),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderableInputsListComponent.prototype, "update", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(OrderableInputsListComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-orderable-inputs-list',
                template: "<div class=\"orderable-inputs-list\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\n  <div class=\"input-item\" *ngFor=\"let item of dataValues; let index = index\" cdkDrag cdkDragLockAxis=\"y\">\n    <div class=\"drag-drop-handle\" cdkDragHandle>\n      <i class=\"ngx-icon ngx-handle\"></i>\n    </div>\n    <ngx-input type=\"text\" [(ngModel)]=\"item.value\" (keyup)=\"update()\"> </ngx-input>\n    <button type=\"button\" class=\"remove-item\" (click)=\"removeItem(index)\">\n      <i class=\"ngx-icon ngx-x\"></i>\n    </button>\n  </div>\n  <div class=\"add-examples\" (click)=\"addExample()\">\n    Add Example\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".add-examples,.input-item{height:45px;display:flex;align-items:center}.input-item{background:#3b4457;box-shadow:0 2px 7px rgba(0,0,0,.2);border-radius:2px;margin-bottom:13px}.input-item .drag-drop-handle,.input-item .remove-item{color:#818fa9}.input-item .drag-drop-handle{margin:0 9px;height:17px;font-size:14.5px;cursor:-webkit-grab;cursor:grab}.input-item .ngx-input{flex:1;margin:0}.input-item .remove-item{font-size:8px;margin:0 5px;height:8px}.add-examples{cursor:pointer;height:45px;border:1px dashed #479eff;color:#479eff;display:flex;align-items:center;justify-content:center}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.orderable-inputs-list.cdk-drop-list-dragging .input-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"]
            }]
    }], function () { return []; }, { onUpdate: [{
            type: Output
        }], data: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJhYmxlLWlucHV0cy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9qc29uLWVkaXRvci9qc29uLWVkaXRvci1mbGF0L29yZGVyYWJsZS1pbnB1dHMtbGlzdC9vcmRlcmFibGUtaW5wdXRzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsRUFFakIsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBZSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0REFBNEQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhMUYsTUFBTSxPQUFPLDRCQUE0QjtBQUFHLElBUDVDO0FBQ0csUUFRUyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztBQUNwRCxRQUNFLGVBQVUsR0FBZ0IsRUFBRSxDQUFDO0FBQy9CLElBOEJBLENBQUM7QUFDRCxJQTlCRSxRQUFRO0FBQ1YsUUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3JDLFlBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDM0IsZ0JBQVEsS0FBSyxFQUFFLElBQUk7QUFDbkIsYUFBTyxDQUFDLENBQUM7QUFDVCxRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsSUFBRSxDQUFDO0FBQ0gsSUFDRSxVQUFVO0FBQUssUUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztBQUN6QixZQUFNLEtBQUssRUFBRSxFQUFFO0FBQ2YsU0FBSyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFDSCxJQUNFLFVBQVUsQ0FBQyxLQUFhO0FBQUksUUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLFFBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2xCLElBQUUsQ0FBQztBQUNILElBQ0UsSUFBSSxDQUFDLEtBQTRCO0FBQUksUUFDbkMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDOUUsUUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDbEIsSUFBRSxDQUFDO0FBQ0gsSUFFRSxNQUFNO0FBQUssUUFDVCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6RCxRQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNIO3dEQTFDQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtPQUNyQyw4b0JBQXFELGtCQUVyRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Ozs7Ozs7Ozs7OztpSEFDaEQsdzJCQUNJO0FBQUM7QUFBZ0QsbUJBQ25ELEtBQUs7QUFBSyx1QkFDVixNQUFNO0FBQUk7QUE2Qlg7QUFBYSxJQURaLFlBQVksQ0FBQyxHQUFHLENBQUM7QUFDbkI7QUFDc0I7QUFDakI7QUFHUSwwREFGWDs7Ozs7Ozs7Ozs7Ozs7b0JBQ0g7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1vdmVJdGVtSW5BcnJheSwgQ2RrRHJhZ0Ryb3AgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7IGRlYm91bmNlYWJsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2RlY29yYXRvcnMvZGVib3VuY2VhYmxlL2RlYm91bmNlYWJsZS5kZWNvcmF0b3InO1xuXG5pbnRlcmZhY2UgRGF0YVZhbHVlIHtcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LW9yZGVyYWJsZS1pbnB1dHMtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlcmFibGUtaW5wdXRzLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vcmRlcmFibGUtaW5wdXRzLWxpc3QuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJhYmxlSW5wdXRzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRhdGE6IHN0cmluZ1tdO1xuICBAT3V0cHV0KCkgb25VcGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuXG4gIGRhdGFWYWx1ZXM6IERhdGFWYWx1ZVtdID0gW107XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgKHRoaXMuZGF0YSB8fCBbXSkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHRoaXMuZGF0YVZhbHVlcy5wdXNoKHtcbiAgICAgICAgdmFsdWU6IGl0ZW1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRXhhbXBsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFWYWx1ZXMucHVzaCh7XG4gICAgICB2YWx1ZTogJydcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUl0ZW0oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZGF0YVZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pOiB2b2lkIHtcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5kYXRhVmFsdWVzLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBAZGVib3VuY2VhYmxlKDUwMClcbiAgdXBkYXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGFWYWx1ZXMubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSk7XG4gICAgdGhpcy5vblVwZGF0ZS5lbWl0KGRhdGEpO1xuICB9XG59XG4iXX0=