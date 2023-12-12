import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../../../../../tooltip/tooltip.directive';
import * as ɵngcc3 from '../../../../../icon/icon.component';
import * as ɵngcc4 from '../../../../../input/input.component';
import * as ɵngcc5 from '@angular/forms';

function JsonEditorNodeInfoComponent_div_0_ngx_icon_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ngx-icon", 11);
} if (rf & 2) {
    ɵngcc0.ɵɵnextContext();
    const _r5 = ɵngcc0.ɵɵreference(5);
    ɵngcc0.ɵɵproperty("tooltipTemplate", _r5);
} }
function JsonEditorNodeInfoComponent_div_0_ng_template_4_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵelementStart(1, "div", 15);
    ɵngcc0.ɵɵtext(2, "Description");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵtextInterpolate(ctx_r7.description);
} }
function JsonEditorNodeInfoComponent_div_0_ng_template_4_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 16);
} }
function JsonEditorNodeInfoComponent_div_0_ng_template_4_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const example_r11 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(example_r11);
} }
function JsonEditorNodeInfoComponent_div_0_ng_template_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 15);
    ɵngcc0.ɵɵtext(2, "Examples");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, JsonEditorNodeInfoComponent_div_0_ng_template_4_ng_container_3_div_3_Template, 2, 1, "div", 17);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r9.examples);
} }
function JsonEditorNodeInfoComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵtemplate(1, JsonEditorNodeInfoComponent_div_0_ng_template_4_div_1_Template, 5, 1, "div", 13);
    ɵngcc0.ɵɵtemplate(2, JsonEditorNodeInfoComponent_div_0_ng_template_4_div_2_Template, 1, 0, "div", 14);
    ɵngcc0.ɵɵtemplate(3, JsonEditorNodeInfoComponent_div_0_ng_template_4_ng_container_3_Template, 4, 1, "ng-container", 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.description && ctx_r6.compressed);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.description && ctx_r6.compressed && (ctx_r6.examples == null ? null : ctx_r6.examples.length));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r6.examples == null ? null : ctx_r6.examples.length);
} }
function JsonEditorNodeInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵelementStart(1, "span", 8);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, JsonEditorNodeInfoComponent_div_0_ngx_icon_3_Template, 1, 1, "ngx-icon", 9);
    ɵngcc0.ɵɵtemplate(4, JsonEditorNodeInfoComponent_div_0_ng_template_4_Template, 4, 3, "ng-template", null, 10, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("tooltipTitle", ctx_r0.title)("tooltipShowCaret", false)("tooltipShowTimeout", 750);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r0.title, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.description && ctx_r0.compressed || (ctx_r0.examples == null ? null : ctx_r0.examples.length));
} }
function JsonEditorNodeInfoComponent_ngx_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-input", 18);
    ɵngcc0.ɵɵlistener("ngModelChange", function JsonEditorNodeInfoComponent_ngx_input_1_Template_ngx_input_ngModelChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.propertyNameChange.emit($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngModel", ctx_r1.propertyName);
} }
function JsonEditorNodeInfoComponent_ngx_icon_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "ngx-icon", 19);
} }
function JsonEditorNodeInfoComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 20);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("tooltipTitle", ctx_r3.description)("tooltipShowCaret", false)("tooltipShowTimeout", 750);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r3.description, "\n");
} }
export class JsonEditorNodeInfoComponent {
    constructor() {
        this.nameEditable = false;
        this.compressed = false;
        this.propertyNameChange = new EventEmitter();
    }
    updatePropertyName(name) {
        this.propertyNameChange.emit(name);
    }
}
JsonEditorNodeInfoComponent.ɵfac = function JsonEditorNodeInfoComponent_Factory(t) { return new (t || JsonEditorNodeInfoComponent)(); };
JsonEditorNodeInfoComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: JsonEditorNodeInfoComponent, selectors: [["ngx-json-editor-node-info"]], inputs: { nameEditable: "nameEditable", compressed: "compressed", title: "title", propertyName: "propertyName", description: "description", type: "type", examples: "examples" }, outputs: { propertyNameChange: "propertyNameChange" }, decls: 9, vars: 9, consts: [["class", "info-name", 4, "ngIf"], ["class", "editable-name", "type", "text", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "info-type"], [1, "type"], ["class", "dot-separator", "fontIcon", "circle-filled", 4, "ngIf"], ["ngx-tooltip", "", "tooltipType", "tooltip", "tooltipCssClass", "narrow", 1, "property-name", 3, "tooltipTitle", "tooltipShowCaret", "tooltipShowTimeout"], ["class", "description", "ngx-tooltip", "", "tooltipType", "tooltip", "tooltipCssClass", "narrow", 3, "tooltipTitle", "tooltipShowCaret", "tooltipShowTimeout", 4, "ngIf"], [1, "info-name"], ["ngx-tooltip", "", "tooltipType", "tooltip", "tooltipCssClass", "narrow", 1, "name", 3, "tooltipTitle", "tooltipShowCaret", "tooltipShowTimeout"], ["class", "info-btn", "fontIcon", "info-filled", "ngx-tooltip", "", "tooltipType", "popover", "tooltipPlacement", "top", 3, "tooltipTemplate", 4, "ngIf"], ["popoverTemplate", ""], ["fontIcon", "info-filled", "ngx-tooltip", "", "tooltipType", "popover", "tooltipPlacement", "top", 1, "info-btn", 3, "tooltipTemplate"], [1, "json-editor--popover-template"], [4, "ngIf"], ["class", "separator", 4, "ngIf"], [1, "label"], [1, "separator"], [4, "ngFor", "ngForOf"], ["type", "text", 1, "editable-name", 3, "ngModel", "ngModelChange"], ["fontIcon", "circle-filled", 1, "dot-separator"], ["ngx-tooltip", "", "tooltipType", "tooltip", "tooltipCssClass", "narrow", 1, "description", 3, "tooltipTitle", "tooltipShowCaret", "tooltipShowTimeout"]], template: function JsonEditorNodeInfoComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, JsonEditorNodeInfoComponent_div_0_Template, 6, 5, "div", 0);
        ɵngcc0.ɵɵtemplate(1, JsonEditorNodeInfoComponent_ngx_input_1_Template, 1, 1, "ngx-input", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "span", 3);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, JsonEditorNodeInfoComponent_ngx_icon_5_Template, 1, 0, "ngx-icon", 4);
        ɵngcc0.ɵɵelementStart(6, "span", 5);
        ɵngcc0.ɵɵtext(7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(8, JsonEditorNodeInfoComponent_span_8_Template, 2, 4, "span", 6);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nameEditable && ctx.title);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nameEditable);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.type);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.propertyName);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("tooltipTitle", ctx.propertyName)("tooltipShowCaret", false)("tooltipShowTimeout", 750);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.propertyName, " ");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.compressed);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.TooltipDirective, ɵngcc3.IconComponent, ɵngcc1.NgForOf, ɵngcc4.InputComponent, ɵngcc5.NgControlStatus, ɵngcc5.NgModel], styles: ["ngx-json-editor-node-info{display:flex;flex-direction:column;justify-content:center}ngx-json-editor-node-info .info-name{display:flex;align-items:baseline}ngx-json-editor-node-info .info-name .info-btn{color:#818fa9;font-size:12px;margin-left:5px;position:relative;z-index:1;white-space:nowrap}ngx-json-editor-node-info .editable-name input,ngx-json-editor-node-info .name{font-weight:600;font-size:18px;line-height:23px;color:#f0f1f6}ngx-json-editor-node-info .description,ngx-json-editor-node-info .info-type,ngx-json-editor-node-info .name{display:inline-block;white-space:nowrap;text-overflow:ellipsis;max-width:calc(100% - 30px);overflow:hidden}ngx-json-editor-node-info .description,ngx-json-editor-node-info .dot-separator,ngx-json-editor-node-info .property-name{color:#a0aabe}ngx-json-editor-node-info .dot-separator{font-size:.2em;margin:0 5px;vertical-align:middle}ngx-json-editor-node-info .type{color:#f0f1f6}ngx-json-editor-node-info .editable-name{margin:0;padding-top:15px}ngx-json-editor-node-info .editable-name .ngx-input-hint{display:none}"], encapsulation: 2 });
JsonEditorNodeInfoComponent.propDecorators = {
    nameEditable: [{ type: Input }],
    title: [{ type: Input }],
    propertyName: [{ type: Input }],
    description: [{ type: Input }],
    type: [{ type: Input }],
    examples: [{ type: Input }],
    compressed: [{ type: Input }],
    propertyNameChange: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(JsonEditorNodeInfoComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-json-editor-node-info',
                template: "<!-- Property name/title -->\n<div class=\"info-name\" *ngIf=\"!nameEditable && title\">\n  <span class=\"name\"\n    ngx-tooltip\n    tooltipType=\"tooltip\"\n    [tooltipTitle]=\"title\"\n    [tooltipShowCaret]=\"false\"\n    tooltipCssClass=\"narrow\"\n    [tooltipShowTimeout]=\"750\">\n    {{ title }}\n  </span>\n\n  <ngx-icon\n    *ngIf=\"(description && compressed) || examples?.length\"\n    class=\"info-btn\"\n    fontIcon=\"info-filled\"\n    ngx-tooltip\n    tooltipType=\"popover\"\n    tooltipPlacement=\"top\"\n    [tooltipTemplate]=\"popoverTemplate\"\n  ></ngx-icon>\n\n  <ng-template #popoverTemplate>\n    <div class=\"json-editor--popover-template\">\n      <div *ngIf=\"description && compressed\">\n        <div class=\"label\">Description</div>\n        <div>{{ description }}</div>\n      </div>\n      <div *ngIf=\"(description && compressed) && examples?.length\" class=\"separator\"></div>\n      <ng-container *ngIf=\"examples?.length\">\n        <div class=\"label\">Examples</div>\n        <div *ngFor=\"let example of examples\">{{ example }}</div>          \n      </ng-container>\n    </div>\n  </ng-template>\n</div>\n\n<!-- Inline text editing-->\n<ngx-input\n  class=\"editable-name\"\n  type=\"text\"\n  *ngIf=\"nameEditable\"\n  [ngModel]=\"propertyName\"\n  (ngModelChange)=\"propertyNameChange.emit($event)\"\n></ngx-input>\n\n<!-- Type info -->\n<div class=\"info-type\">\n  <span class=\"type\">{{ type }}</span>\n  <ngx-icon\n    *ngIf=\"propertyName\"\n    class=\"dot-separator\"\n    fontIcon=\"circle-filled\"\n  ></ngx-icon>\n  <span class=\"property-name\"\n    ngx-tooltip\n    tooltipType=\"tooltip\"\n    [tooltipTitle]=\"propertyName\"\n    [tooltipShowCaret]=\"false\"\n    [tooltipShowTimeout]=\"750\"\n    tooltipCssClass=\"narrow\">\n      {{ propertyName }}\n    </span>\n</div>\n\n<!-- Description -->\n<span *ngIf=\"!compressed\" class=\"description\"\n  ngx-tooltip\n  tooltipType=\"tooltip\"\n  [tooltipTitle]=\"description\"\n  [tooltipShowCaret]=\"false\"\n  [tooltipShowTimeout]=\"750\"\n  tooltipCssClass=\"narrow\">\n  {{ description }}\n</span>",
                encapsulation: ViewEncapsulation.None,
                styles: ["ngx-json-editor-node-info{display:flex;flex-direction:column;justify-content:center}ngx-json-editor-node-info .info-name{display:flex;align-items:baseline}ngx-json-editor-node-info .info-name .info-btn{color:#818fa9;font-size:12px;margin-left:5px;position:relative;z-index:1;white-space:nowrap}ngx-json-editor-node-info .editable-name input,ngx-json-editor-node-info .name{font-weight:600;font-size:18px;line-height:23px;color:#f0f1f6}ngx-json-editor-node-info .description,ngx-json-editor-node-info .info-type,ngx-json-editor-node-info .name{display:inline-block;white-space:nowrap;text-overflow:ellipsis;max-width:calc(100% - 30px);overflow:hidden}ngx-json-editor-node-info .description,ngx-json-editor-node-info .dot-separator,ngx-json-editor-node-info .property-name{color:#a0aabe}ngx-json-editor-node-info .dot-separator{font-size:.2em;margin:0 5px;vertical-align:middle}ngx-json-editor-node-info .type{color:#f0f1f6}ngx-json-editor-node-info .editable-name{margin:0;padding-top:15px}ngx-json-editor-node-info .editable-name .ngx-input-hint{display:none}"]
            }]
    }], function () { return []; }, { nameEditable: [{
            type: Input
        }], compressed: [{
            type: Input
        }], propertyNameChange: [{
            type: Output
        }], title: [{
            type: Input
        }], propertyName: [{
            type: Input
        }], description: [{
            type: Input
        }], type: [{
            type: Input
        }], examples: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9qc29uLWVkaXRvci9qc29uLWVkaXRvci1mbGF0L2pzb24tZWRpdG9yLW5vZGUtZmxhdC9ub2RlLXR5cGVzL25vZGUtaW5mby9ub2RlLWluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTFGLE1BQU0sT0FBTywyQkFBMkI7QUFDeEMsSUFQQTtBQUNHLFFBT0QsaUJBQVksR0FBRyxLQUFLLENBQUM7QUFDdkIsUUFpQkUsZUFBVSxHQUFHLEtBQUssQ0FBQztBQUNyQixRQUNZLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7QUFDNUQsSUFJQSxDQUFDO0FBQ0QsSUFKRSxrQkFBa0IsQ0FBQyxJQUFZO0FBQ2pDLFFBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QyxJQUFFLENBQUM7QUFDSDt1REFqQ0MsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSwyQkFBMkI7U0FDckM7OytGQUF5QztXQUV6QyxhQUFhLEVBQUUsaUJBQWlCO0FBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBQ3RDLGdzQ0FDSTtBQUFDO0FBQ0ksMkJBQVAsS0FBSztBQUNOLG9CQUVDLEtBQUs7QUFDTiwyQkFFQyxLQUFLO0FBQ04sMEJBRUMsS0FBSztBQUNOLG1CQUVDLEtBQUs7QUFDTix1QkFFQyxLQUFLO0FBQ04seUJBRUMsS0FBSztBQUNOLGlDQUVDLE1BQU07QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1qc29uLWVkaXRvci1ub2RlLWluZm8nLFxuICB0ZW1wbGF0ZVVybDogJy4vbm9kZS1pbmZvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbm9kZS1pbmZvLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkVkaXRvck5vZGVJbmZvQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbmFtZUVkaXRhYmxlID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwcm9wZXJ0eU5hbWU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHR5cGU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBleGFtcGxlczogc3RyaW5nW107XG5cbiAgQElucHV0KClcbiAgY29tcHJlc3NlZCA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBwcm9wZXJ0eU5hbWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICB1cGRhdGVQcm9wZXJ0eU5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5wcm9wZXJ0eU5hbWVDaGFuZ2UuZW1pdChuYW1lKTtcbiAgfVxufVxuIl19