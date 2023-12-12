import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { ObjectNode } from '../../../../node-types/object-node.component';
import * as ɵngcc0 from '@angular/core';

function ObjectNodeComponent_div_1_ng_container_11_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelementStart(1, "button", 12);
    ɵngcc0.ɵɵlistener("click", function ObjectNodeComponent_div_1_ng_container_11_li_1_Template_button_click_1_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r11); const type_r8 = restoredCtx.$implicit; const prop_r3 = ɵngcc0.ɵɵnextContext(2).$implicit; const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.changePropertyType(prop_r3, type_r8); });
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r8 = ctx.$implicit;
    const prop_r3 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", prop_r3.$meta.currentType === type_r8);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" Change type to ", ctx_r7.dataTypeMap[type_r8].name, " ");
} }
function ObjectNodeComponent_div_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, ObjectNodeComponent_div_1_ng_container_11_li_1_Template, 3, 2, "li", 17);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const prop_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", prop_r3 == null ? null : prop_r3.$meta == null ? null : prop_r3.$meta.type);
} }
function ObjectNodeComponent_div_1_input_13_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "input", 18);
    ɵngcc0.ɵɵlistener("ngModelChange", function ObjectNodeComponent_div_1_input_13_Template_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const prop_r3 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.updatePropertyName(prop_r3.id, $event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const prop_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("ngModel", prop_r3.propertyName);
} }
function ObjectNodeComponent_div_1_ng_container_14_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1, "*");
    ɵngcc0.ɵɵelementEnd();
} }
function ObjectNodeComponent_div_1_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 19);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵtemplate(3, ObjectNodeComponent_div_1_ng_container_14_span_3_Template, 2, 0, "span", 13);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const prop_r3 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("tooltipTitle", (prop_r3 == null ? null : prop_r3.description) ? prop_r3 == null ? null : prop_r3.description : prop_r3 == null ? null : prop_r3.propertyName);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", (prop_r3 == null ? null : prop_r3.title) ? prop_r3 == null ? null : prop_r3.title : prop_r3 == null ? null : prop_r3.propertyName, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.requiredCache[prop_r3.propertyName]);
} }
function ObjectNodeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "div", 8);
    ɵngcc0.ɵɵelementStart(2, "ngx-dropdown", 2);
    ɵngcc0.ɵɵelementStart(3, "ngx-dropdown-toggle");
    ɵngcc0.ɵɵelementStart(4, "div", 9);
    ɵngcc0.ɵɵelement(5, "ngx-icon", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "ngx-dropdown-menu", 6);
    ɵngcc0.ɵɵelementStart(7, "ul", 11);
    ɵngcc0.ɵɵelementStart(8, "li");
    ɵngcc0.ɵɵelementStart(9, "button", 12);
    ɵngcc0.ɵɵlistener("click", function ObjectNodeComponent_div_1_Template_button_click_9_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r21); const prop_r3 = restoredCtx.$implicit; const ctx_r20 = ɵngcc0.ɵɵnextContext(); return ctx_r20.deleteProperty(prop_r3.propertyName); });
    ɵngcc0.ɵɵtext(10, " Delete ");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(11, ObjectNodeComponent_div_1_ng_container_11_Template, 2, 1, "ng-container", 13);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(12, "div", 14);
    ɵngcc0.ɵɵtemplate(13, ObjectNodeComponent_div_1_input_13_Template, 1, 1, "input", 15);
    ɵngcc0.ɵɵtemplate(14, ObjectNodeComponent_div_1_ng_container_14_Template, 4, 3, "ng-container", 13);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(15, "ngx-json-editor-node", 16);
    ɵngcc0.ɵɵlistener("modelChange", function ObjectNodeComponent_div_1_Template_ngx_json_editor_node_modelChange_15_listener($event) { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r21); const prop_r3 = restoredCtx.$implicit; const ctx_r22 = ɵngcc0.ɵɵnextContext(); return ctx_r22.updateProp(prop_r3.id, $event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const prop_r3 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("invalid", ctx_r0.duplicatedFields.has(prop_r3.id));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("showCaret", true);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("fontIcon", prop_r3.$meta.icon);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("disabled", ctx_r0.requiredCache[prop_r3.propertyName]);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", prop_r3 == null ? null : prop_r3.$meta == null ? null : prop_r3.$meta.type);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", prop_r3.nameEditable);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !(prop_r3 == null ? null : prop_r3.nameEditable));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("model", ctx_r0.model[prop_r3.propertyName])("schema", prop_r3)("required", !!ctx_r0.requiredCache[prop_r3.propertyName])("inline", prop_r3.type !== "array" && prop_r3.type !== "object")("path", ctx_r0.path + ctx_r0.getPath(prop_r3.propertyName))("isDuplicated", ctx_r0.duplicatedFields.has(prop_r3.id))("errors", ctx_r0.errors)("typeCheckOverrides", ctx_r0.typeCheckOverrides)("showKnownProperties", ctx_r0.showKnownProperties);
} }
function ObjectNodeComponent_ul_8_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 22);
    ɵngcc0.ɵɵlistener("click", function ObjectNodeComponent_ul_8_li_1_Template_li_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r26); const prop_r24 = restoredCtx.$implicit; const ctx_r25 = ɵngcc0.ɵɵnextContext(2); return ctx_r25.addSchemaProperty(prop_r24.key); });
    ɵngcc0.ɵɵelementStart(1, "button", 23);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const prop_r24 = ctx.$implicit;
    const ctx_r23 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", ctx_r23.model[prop_r24.key] !== undefined);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", prop_r24.value.title ? prop_r24.value.title : prop_r24.key, " ");
} }
function ObjectNodeComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 20);
    ɵngcc0.ɵɵtemplate(1, ObjectNodeComponent_ul_8_li_1_Template, 3, 2, "li", 21);
    ɵngcc0.ɵɵpipe(2, "keyvalue");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind1(2, 1, ctx_r1.schema.properties));
} }
function ObjectNodeComponent_ul_9_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 22);
    ɵngcc0.ɵɵlistener("click", function ObjectNodeComponent_ul_9_li_1_Template_li_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r31); const prop_r29 = restoredCtx.$implicit; const ctx_r30 = ɵngcc0.ɵɵnextContext(2); return ctx_r30.addSchemaPatternProperty(prop_r29.key); });
    ɵngcc0.ɵɵelementStart(1, "button", 25);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const prop_r29 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(prop_r29.value.title ? prop_r29.value.title : prop_r29.key);
} }
function ObjectNodeComponent_ul_9_ng_template_3_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r35 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 22);
    ɵngcc0.ɵɵlistener("click", function ObjectNodeComponent_ul_9_ng_template_3_li_0_Template_li_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r35); const dataType_r33 = restoredCtx.$implicit; const ctx_r34 = ɵngcc0.ɵɵnextContext(3); return ctx_r34.addProperty(dataType_r33); });
    ɵngcc0.ɵɵelementStart(1, "button", 25);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const dataType_r33 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(dataType_r33.name);
} }
function ObjectNodeComponent_ul_9_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, ObjectNodeComponent_ul_9_ng_template_3_li_0_Template, 3, 1, "li", 21);
} if (rf & 2) {
    const ctx_r28 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r28.dataTypes);
} }
function ObjectNodeComponent_ul_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ul", 20);
    ɵngcc0.ɵɵtemplate(1, ObjectNodeComponent_ul_9_li_1_Template, 3, 1, "li", 21);
    ɵngcc0.ɵɵpipe(2, "keyvalue");
    ɵngcc0.ɵɵtemplate(3, ObjectNodeComponent_ul_9_ng_template_3_Template, 1, 1, "ng-template", 24);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind1(2, 2, ctx_r2.schema.patternProperties));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r2.schema || ctx_r2.schema.additionalProperties !== false);
} }
export class ObjectNodeComponent extends ObjectNode {
    constructor(cdr) {
        super(cdr);
        this.cdr = cdr;
        this.isDuplicated = false;
    }
}
ObjectNodeComponent.ɵfac = function ObjectNodeComponent_Factory(t) { return new (t || ObjectNodeComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
ObjectNodeComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: ObjectNodeComponent, selectors: [["ngx-json-object-node"]], inputs: { isDuplicated: "isDuplicated" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 10, vars: 9, consts: [[3, "hidden"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "showCaret"], [3, "disabled"], [1, "add-button"], ["fontIcon", "plus-bold"], [1, "ngx-dropdown-dark-outline"], ["class", "vertical-list dropdown-column", 4, "ngIf"], [1, "property-def"], [1, "type-icon"], [3, "fontIcon"], [1, "vertical-list"], ["type", "button", 3, "disabled", "click"], [4, "ngIf"], [1, "property-name"], ["type", "text", 3, "ngModel", "ngModelChange", 4, "ngIf"], [3, "model", "schema", "required", "inline", "path", "isDuplicated", "errors", "typeCheckOverrides", "showKnownProperties", "modelChange"], [4, "ngFor", "ngForOf"], ["type", "text", 3, "ngModel", "ngModelChange"], ["ngx-tooltip", "", 1, "title", 3, "tooltipTitle"], [1, "vertical-list", "dropdown-column"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["type", "button", 3, "disabled"], [3, "ngIf"], ["type", "button"]], template: function ObjectNodeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, ObjectNodeComponent_div_1_Template, 16, 17, "div", 1);
        ɵngcc0.ɵɵpipe(2, "objectValues");
        ɵngcc0.ɵɵelementStart(3, "ngx-dropdown", 2);
        ɵngcc0.ɵɵelementStart(4, "ngx-dropdown-toggle", 3);
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵelement(6, "ngx-icon", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "ngx-dropdown-menu", 6);
        ɵngcc0.ɵɵtemplate(8, ObjectNodeComponent_ul_8_Template, 3, 3, "ul", 7);
        ɵngcc0.ɵɵtemplate(9, ObjectNodeComponent_ul_9_Template, 4, 4, "ul", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("hidden", !ctx.expanded);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind1(2, 7, ctx.propertyIndex))("ngForTrackBy", ctx.trackBy);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("showCaret", true);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("disabled", ctx.isDuplicated);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("ngIf", ctx.schema.properties);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.schema || ctx.schema.patternProperties || ctx.schema.additionalProperties !== false);
    } }, styles: [".invalid[_ngcontent-%COMP%]{border:1px solid #e02f00}"], changeDetection: 0 });
ObjectNodeComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
ObjectNodeComponent.propDecorators = {
    isDuplicated: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ObjectNodeComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-json-object-node',
                template: "<div [hidden]=\"!expanded\">\n  <div *ngFor=\"let prop of propertyIndex | objectValues; trackBy: trackBy\">\n    <div class=\"property-def\" [class.invalid]=\"duplicatedFields.has(prop.id)\">\n      <ngx-dropdown [showCaret]=\"true\">\n        <ngx-dropdown-toggle>\n          <div class=\"type-icon\">\n            <ngx-icon [fontIcon]=\"prop.$meta.icon\"></ngx-icon>\n          </div>\n        </ngx-dropdown-toggle>\n        <ngx-dropdown-menu class=\"ngx-dropdown-dark-outline\">\n          <ul class=\"vertical-list\">\n            <li>\n              <button\n                type=\"button\"\n                (click)=\"deleteProperty(prop.propertyName)\"\n                [disabled]=\"requiredCache[prop.propertyName]\"\n              >\n                Delete\n              </button>\n            </li>\n            <ng-container *ngIf=\"prop?.$meta?.type\">\n              <li *ngFor=\"let type of prop?.$meta?.type\">\n                <button\n                  type=\"button\"\n                  (click)=\"changePropertyType(prop, type)\"\n                  [disabled]=\"prop.$meta.currentType === type\"\n                >\n                  Change type to {{ dataTypeMap[type].name }}\n                </button>\n              </li>\n            </ng-container>\n          </ul>\n        </ngx-dropdown-menu>\n      </ngx-dropdown>\n\n      <div class=\"property-name\">\n        <input\n          type=\"text\"\n          *ngIf=\"prop.nameEditable\"\n          [ngModel]=\"prop.propertyName\"\n          (ngModelChange)=\"updatePropertyName(prop.id, $event)\"\n        />\n\n        <ng-container *ngIf=\"!prop?.nameEditable\">\n          <div class=\"title\" ngx-tooltip [tooltipTitle]=\"prop?.description ? prop?.description : prop?.propertyName\">\n            {{ prop?.title ? prop?.title : prop?.propertyName }}\n            <span *ngIf=\"requiredCache[prop.propertyName]\">*</span>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n\n    <ngx-json-editor-node\n      [model]=\"model[prop.propertyName]\"\n      (modelChange)=\"updateProp(prop.id, $event)\"\n      [schema]=\"prop\"\n      [required]=\"!!requiredCache[prop.propertyName]\"\n      [inline]=\"prop.type !== 'array' && prop.type !== 'object'\"\n      [path]=\"path + getPath(prop.propertyName)\"\n      [isDuplicated]=\"duplicatedFields.has(prop.id)\"\n      [errors]=\"errors\"\n      [typeCheckOverrides]=\"typeCheckOverrides\"\n      [showKnownProperties]=\"showKnownProperties\"\n    >\n    </ngx-json-editor-node>\n  </div>\n\n  <ngx-dropdown [showCaret]=\"true\">\n    <ngx-dropdown-toggle [disabled]=\"isDuplicated\">\n      <div class=\"add-button\">\n        <ngx-icon fontIcon=\"plus-bold\"></ngx-icon>\n      </div>\n    </ngx-dropdown-toggle>\n    <ngx-dropdown-menu class=\"ngx-dropdown-dark-outline\">\n      <ul class=\"vertical-list dropdown-column\" *ngIf=\"schema.properties\">\n        <li *ngFor=\"let prop of schema.properties | keyvalue\" (click)=\"addSchemaProperty(prop.key)\">\n          <button [disabled]=\"model[prop.key] !== undefined\" type=\"button\">\n            {{ prop.value.title ? prop.value.title : prop.key }}\n          </button>\n        </li>\n      </ul>\n      <ul\n        class=\"vertical-list dropdown-column\"\n        *ngIf=\"!schema || schema.patternProperties || schema.additionalProperties !== false\"\n      >\n        <li *ngFor=\"let prop of schema.patternProperties | keyvalue\" (click)=\"addSchemaPatternProperty(prop.key)\">\n          <button type=\"button\">{{ prop.value.title ? prop.value.title : prop.key }}</button>\n        </li>\n        <ng-template [ngIf]=\"!schema || schema.additionalProperties !== false\">\n          <li *ngFor=\"let dataType of dataTypes\" (click)=\"addProperty(dataType)\">\n            <button type=\"button\">{{ dataType.name }}</button>\n          </li>\n        </ng-template>\n      </ul>\n    </ngx-dropdown-menu>\n  </ngx-dropdown>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".invalid{border:1px solid #e02f00}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { isDuplicated: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LW5vZGUuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2pzb24tZWRpdG9yL2pzb24tZWRpdG9yL2pzb24tZWRpdG9yLW5vZGUvbm9kZS10eXBlcy9vYmplY3Qtbm9kZS9vYmplY3Qtbm9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVExRSxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsVUFBVTtBQUNuRCxJQUVFLFlBQXNCLEdBQXNCO0FBQzlDLFFBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsUUFGd0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7QUFBQyxRQUZwQyxpQkFBWSxHQUFHLEtBQUssQ0FBQztBQUNoQyxJQUdFLENBQUM7QUFDSDsrQ0FaQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLHNCQUFzQixrQkFDaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQUlHO0FBQUM7QUFBNkMsWUFUTixpQkFBaUI7QUFBRztBQUFHO0FBQ3ZELDJCQVNWLEtBQUs7QUFBSTs7Ozs7MDRCQUwrQixrQkFFekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sOEVBQ2hEOzs7Ozs7b0JBRWE7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JqZWN0Tm9kZSB9IGZyb20gJy4uLy4uLy4uLy4uL25vZGUtdHlwZXMvb2JqZWN0LW5vZGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWpzb24tb2JqZWN0LW5vZGUnLFxuICB0ZW1wbGF0ZVVybDogJ29iamVjdC1ub2RlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ29iamVjdC1ub2RlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE9iamVjdE5vZGVDb21wb25lbnQgZXh0ZW5kcyBPYmplY3ROb2RlIHtcbiAgQElucHV0KCkgaXNEdXBsaWNhdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihjZHIpO1xuICB9XG59XG4iXX0=