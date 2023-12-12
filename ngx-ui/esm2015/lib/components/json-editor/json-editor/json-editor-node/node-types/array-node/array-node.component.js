import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ArrayNode } from '../../../../node-types/array-node.component';
import * as ɵngcc0 from '@angular/core';

function ArrayNodeComponent_div_1_ng_container_11_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelementStart(1, "button", 16);
    ɵngcc0.ɵɵlistener("click", function ArrayNodeComponent_div_1_ng_container_11_li_1_Template_button_click_1_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r10); const type_r7 = restoredCtx.$implicit; const i_r4 = ɵngcc0.ɵɵnextContext(2).index; const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.changeItemType(i_r4, type_r7); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r7 = ctx.$implicit;
    const i_r4 = ɵngcc0.ɵɵnextContext(2).index;
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r6.schemas[i_r4].currentType === type_r7);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" Change type to ", ctx_r6.dataTypeMap[type_r7].name, " ");
} }
function ArrayNodeComponent_div_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, ArrayNodeComponent_div_1_ng_container_11_li_1_Template, 3, 2, "li", 15);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r4 = ɵngcc0.ɵɵnextContext().index;
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r5.schemas[i_r4] == null ? null : ctx_r5.schemas[i_r4].$meta == null ? null : ctx_r5.schemas[i_r4].$meta.type);
} }
function ArrayNodeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "div", 10);
    ɵngcc0.ɵɵelementStart(2, "ngx-dropdown", 2);
    ɵngcc0.ɵɵelementStart(3, "ngx-dropdown-toggle");
    ɵngcc0.ɵɵelementStart(4, "div", 11);
    ɵngcc0.ɵɵelement(5, "ngx-icon", 12);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "ngx-dropdown-menu", 6);
    ɵngcc0.ɵɵelementStart(7, "ul", 7);
    ɵngcc0.ɵɵelementStart(8, "li");
    ɵngcc0.ɵɵelementStart(9, "button", 13);
    ɵngcc0.ɵɵlistener("click", function ArrayNodeComponent_div_1_Template_button_click_9_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r14); const i_r4 = restoredCtx.index; const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.deleteArrayItem(i_r4); });
    ɵngcc0.ɵɵtext(10, "Delete");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(11, ArrayNodeComponent_div_1_ng_container_11_Template, 2, 1, "ng-container", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(12, "ngx-json-editor-node", 14);
    ɵngcc0.ɵɵlistener("modelChange", function ArrayNodeComponent_div_1_Template_ngx_json_editor_node_modelChange_12_listener($event) { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r14); const i_r4 = restoredCtx.index; const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.updateArrayItem(i_r4, $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("showCaret", true);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("fontIcon", ctx_r0.schemas[i_r4] == null ? null : ctx_r0.schemas[i_r4].$meta.icon);
    ɵngcc0.ɵɵadvance(6);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.schemas[i_r4] == null ? null : ctx_r0.schemas[i_r4].$meta == null ? null : ctx_r0.schemas[i_r4].$meta.type);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("model", value_r3)("schema", ctx_r0.schemas[i_r4])("path", ctx_r0.path + "[" + i_r4 + "]")("errors", ctx_r0.errors)("isDuplicated", ctx_r0.isDuplicated)("typeCheckOverrides", ctx_r0.typeCheckOverrides)("showKnownProperties", ctx_r0.showKnownProperties);
} }
function ArrayNodeComponent_ng_template_8_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 18);
    ɵngcc0.ɵɵlistener("click", function ArrayNodeComponent_ng_template_8_li_0_Template_li_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r19); const dataType_r17 = restoredCtx.$implicit; const ctx_r18 = ɵngcc0.ɵɵnextContext(2); return ctx_r18.addArrayItem(dataType_r17); });
    ɵngcc0.ɵɵelementStart(1, "button", 19);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const dataType_r17 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(dataType_r17.name);
} }
function ArrayNodeComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ArrayNodeComponent_ng_template_8_li_0_Template, 3, 1, "li", 17);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.dataTypes);
} }
function ArrayNodeComponent_ng_container_9_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelementStart(1, "button", 16);
    ɵngcc0.ɵɵlistener("click", function ArrayNodeComponent_ng_container_9_li_1_Template_button_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r23); const ctx_r22 = ɵngcc0.ɵɵnextContext(2); return ctx_r22.addArrayItem(); });
    ɵngcc0.ɵɵtext(2, "Add");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r20.isDuplicated);
} }
function ArrayNodeComponent_ng_container_9_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelementStart(1, "button", 13);
    ɵngcc0.ɵɵlistener("click", function ArrayNodeComponent_ng_container_9_ng_container_2_li_1_Template_button_click_1_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r27); const type_r25 = restoredCtx.$implicit; const ctx_r26 = ɵngcc0.ɵɵnextContext(3); return ctx_r26.addArrayItem(ctx_r26.dataTypeMap[type_r25]); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r25 = ctx.$implicit;
    const ctx_r24 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1("Add ", ctx_r24.dataTypeMap[type_r25].name, "");
} }
function ArrayNodeComponent_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, ArrayNodeComponent_ng_container_9_ng_container_2_li_1_Template, 3, 1, "li", 15);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r21 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r21.schema.items.type);
} }
function ArrayNodeComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, ArrayNodeComponent_ng_container_9_li_1_Template, 3, 1, "li", 9);
    ɵngcc0.ɵɵtemplate(2, ArrayNodeComponent_ng_container_9_ng_container_2_Template, 2, 1, "ng-container", 9);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2._array.isArray(ctx_r2.schema.items.type));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2._array.isArray(ctx_r2.schema.items.type));
} }
export class ArrayNodeComponent extends ArrayNode {
    constructor() {
        super(...arguments);
        this.isDuplicated = false;
    }
}
ArrayNodeComponent.ɵfac = /*@__PURE__*/ function () { let ɵArrayNodeComponent_BaseFactory; return function ArrayNodeComponent_Factory(t) { return (ɵArrayNodeComponent_BaseFactory || (ɵArrayNodeComponent_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(ArrayNodeComponent)))(t || ArrayNodeComponent); }; }();
ArrayNodeComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: ArrayNodeComponent, selectors: [["ngx-json-array-node"]], inputs: { isDuplicated: "isDuplicated" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 10, vars: 7, consts: [[3, "hidden"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "showCaret"], [3, "disabled"], [1, "add-button"], ["fontIcon", "plus-bold"], [1, "ngx-dropdown-dark-outline"], [1, "vertical-list"], [3, "ngIf"], [4, "ngIf"], [1, "property-def"], ["tooltipPlacement", "top", 1, "type-icon"], [3, "fontIcon"], ["type", "button", 3, "click"], [3, "model", "schema", "path", "errors", "isDuplicated", "typeCheckOverrides", "showKnownProperties", "modelChange"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "disabled", "click"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["type", "button"]], template: function ArrayNodeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, ArrayNodeComponent_div_1_Template, 13, 10, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "ngx-dropdown", 2);
        ɵngcc0.ɵɵelementStart(3, "ngx-dropdown-toggle", 3);
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵelement(5, "ngx-icon", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "ngx-dropdown-menu", 6);
        ɵngcc0.ɵɵelementStart(7, "ul", 7);
        ɵngcc0.ɵɵtemplate(8, ArrayNodeComponent_ng_template_8_Template, 1, 1, "ng-template", 8);
        ɵngcc0.ɵɵtemplate(9, ArrayNodeComponent_ng_container_9_Template, 3, 2, "ng-container", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("hidden", !ctx.expanded);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.model)("ngForTrackBy", ctx.arrayTrackBy);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("showCaret", true);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", ctx.isDuplicated);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.schema || !ctx.schema.items || !ctx.schema.items.type);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.schema == null ? null : ctx.schema.items == null ? null : ctx.schema.items.type);
    } }, encapsulation: 2, changeDetection: 0 });
ArrayNodeComponent.propDecorators = {
    isDuplicated: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ArrayNodeComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-json-array-node',
                template: "<div [hidden]=\"!expanded\">\n  <div *ngFor=\"let value of model; let i = index; trackBy: arrayTrackBy\">\n    <div class=\"property-def\">\n      <ngx-dropdown [showCaret]=\"true\">\n        <ngx-dropdown-toggle>\n          <div class=\"type-icon\" tooltipPlacement=\"top\">\n            <ngx-icon [fontIcon]=\"schemas[i]?.$meta.icon\"> </ngx-icon>\n          </div>\n        </ngx-dropdown-toggle>\n        <ngx-dropdown-menu class=\"ngx-dropdown-dark-outline\">\n          <ul class=\"vertical-list\">\n            <li><button type=\"button\" (click)=\"deleteArrayItem(i)\">Delete</button></li>\n\n            <ng-container *ngIf=\"schemas[i]?.$meta?.type\">\n              <li *ngFor=\"let type of schemas[i]?.$meta?.type\">\n                <button type=\"button\" (click)=\"changeItemType(i, type)\" [disabled]=\"schemas[i].currentType === type\">\n                  Change type to {{ dataTypeMap[type].name }}\n                </button>\n              </li>\n            </ng-container>\n          </ul>\n        </ngx-dropdown-menu>\n      </ngx-dropdown>\n    </div>\n\n    <ngx-json-editor-node\n      [model]=\"value\"\n      (modelChange)=\"updateArrayItem(i, $event)\"\n      [schema]=\"schemas[i]\"\n      [path]=\"path + '[' + i + ']'\"\n      [errors]=\"errors\"\n      [isDuplicated]=\"isDuplicated\"\n      [typeCheckOverrides]=\"typeCheckOverrides\"\n      [showKnownProperties]=\"showKnownProperties\"\n    >\n    </ngx-json-editor-node>\n  </div>\n\n  <ngx-dropdown [showCaret]=\"true\">\n    <ngx-dropdown-toggle [disabled]=\"isDuplicated\">\n      <div class=\"add-button\">\n        <ngx-icon fontIcon=\"plus-bold\"></ngx-icon>\n      </div>\n    </ngx-dropdown-toggle>\n    <ngx-dropdown-menu class=\"ngx-dropdown-dark-outline\">\n      <ul class=\"vertical-list\">\n        <ng-template [ngIf]=\"!schema || !schema.items || !schema.items.type\">\n          <li *ngFor=\"let dataType of dataTypes\" (click)=\"addArrayItem(dataType)\">\n            <button type=\"button\">{{ dataType.name }}</button>\n          </li>\n        </ng-template>\n        <ng-container *ngIf=\"schema?.items?.type\">\n          <li *ngIf=\"!_array.isArray(schema.items.type)\">\n            <button [disabled]=\"isDuplicated\" type=\"button\" (click)=\"addArrayItem()\">Add</button>\n          </li>\n          <ng-container *ngIf=\"_array.isArray(schema.items.type)\">\n            <li *ngFor=\"let type of schema.items.type\">\n              <button type=\"button\" (click)=\"addArrayItem(dataTypeMap[type])\">Add {{ dataTypeMap[type].name }}</button>\n            </li>\n          </ng-container>\n        </ng-container>\n      </ul>\n    </ngx-dropdown-menu>\n  </ngx-dropdown>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { isDuplicated: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktbm9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvanNvbi1lZGl0b3IvanNvbi1lZGl0b3IvanNvbi1lZGl0b3Itbm9kZS9ub2RlLXR5cGVzL2FycmF5LW5vZGUvYXJyYXktbm9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU94RSxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsU0FBUztBQUNqRCxJQU5BO0FBQ0c7QUFBNkIsUUFLckIsaUJBQVksR0FBRyxLQUFLLENBQUM7QUFDaEMsSUFBQSxDQUFDO0FBQ0Q7OENBUkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxxQkFBcUIsa0JBQy9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aURBR0c7QUFBQztBQUFzQywyQkFDekMsS0FBSztBQUFJO21FQUo4QixrQkFDeEMsZUFBZSxFQUFFO1dBQXVCLENBQUMsTUFBTTtPQUNoRDs7Ozs7OztvQkFFYTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFycmF5Tm9kZSB9IGZyb20gJy4uLy4uLy4uLy4uL25vZGUtdHlwZXMvYXJyYXktbm9kZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtanNvbi1hcnJheS1ub2RlJyxcbiAgdGVtcGxhdGVVcmw6ICdhcnJheS1ub2RlLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlOb2RlQ29tcG9uZW50IGV4dGVuZHMgQXJyYXlOb2RlIHtcbiAgQElucHV0KCkgaXNEdXBsaWNhdGVkID0gZmFsc2U7XG59XG4iXX0=