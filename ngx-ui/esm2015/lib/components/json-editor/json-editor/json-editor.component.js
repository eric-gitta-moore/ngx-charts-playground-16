import { Component, ViewEncapsulation, ContentChildren, QueryList, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { JsonEditor } from '../json-editor';
import { SchemaValidatorService } from '../schema-validator.service';
import { JsonEditorNodeComponent } from './json-editor-node/json-editor-node.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../schema-validator.service';
import * as ɵngcc2 from '../../icon/icon.component';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from './json-editor-node/json-editor-node.component';

function JsonEditorComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.label);
} }
function JsonEditorComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.schema.title ? ctx_r1.schema.title : "Object");
} }
export class JsonEditorComponent extends JsonEditor {
    constructor(schemaValidatorService, cdr) {
        super(schemaValidatorService, cdr);
        this.schemaValidatorService = schemaValidatorService;
        this.cdr = cdr;
    }
}
JsonEditorComponent.ɵfac = function JsonEditorComponent_Factory(t) { return new (t || JsonEditorComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.SchemaValidatorService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
JsonEditorComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: JsonEditorComponent, selectors: [["ngx-json-editor"]], contentQueries: function JsonEditorComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, JsonEditorNodeComponent, 4);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nodeElms = _t);
    } }, inputs: { model: "model", schema: "schema", typeCheckOverrides: "typeCheckOverrides" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 8, vars: 7, consts: [[1, "ngx-json-editor"], [1, "editor-title"], [1, "type-icon"], ["fontIcon", "integration"], [1, "name"], ["class", "title", 4, "ngIf"], [3, "model", "schema", "errors", "typeCheckOverrides", "showKnownProperties", "modelChange"], [1, "title"]], template: function JsonEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelement(3, "ngx-icon", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 4);
        ɵngcc0.ɵɵtemplate(5, JsonEditorComponent_div_5_Template, 2, 1, "div", 5);
        ɵngcc0.ɵɵtemplate(6, JsonEditorComponent_div_6_Template, 2, 1, "div", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "ngx-json-editor-node", 6);
        ɵngcc0.ɵɵlistener("modelChange", function JsonEditorComponent_Template_ngx_json_editor_node_modelChange_7_listener($event) { return ctx.model = $event; })("modelChange", function JsonEditorComponent_Template_ngx_json_editor_node_modelChange_7_listener($event) { return ctx.modelChangedCallback($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("ngIf", ctx.label);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.label);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("model", ctx.model)("schema", ctx.schema)("errors", ctx.errors)("typeCheckOverrides", ctx.typeCheckOverrides)("showKnownProperties", ctx.showKnownProperties);
    } }, directives: [ɵngcc2.IconComponent, ɵngcc3.NgIf, ɵngcc4.JsonEditorNodeComponent], styles: [".ngx-json-editor .editor-title{border:1px solid rgba(148,198,255,.07);height:30px;display:inline-block;margin-left:20px;position:relative;background:rgba(148,198,255,.05)}.ngx-json-editor .editor-title:before{content:\" \";width:15px;height:1px;border-radius:5px;background:none;border-top:1px dashed #5a6884;position:absolute;top:50%;left:-15px}.ngx-json-editor .editor-title .type-icon{width:28px;height:28px;position:relative;background:rgba(148,198,255,.07);margin-left:0;display:inline-block}.ngx-json-editor .editor-title .type-icon ngx-icon{color:#afb7c8;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:16px;height:16px}.ngx-json-editor .editor-title .name{display:inline-block;width:170px;padding:0 5px;position:relative;transform:translateY(-50%);vertical-align:middle}.ngx-json-editor .editor-title .name .title{display:inline-block;width:100%;color:#72819f;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;position:relative;top:5px}.ngx-json-editor .ngx-dropdown-menu{white-space:nowrap;left:16px!important}.ngx-json-editor .ngx-dropdown-menu .dropdown-column{vertical-align:top;display:inline-block;min-width:150px}.ngx-json-editor .ngx-dropdown-menu .dropdown-column:nth-child(2){border-left:1px solid #505c75}.code-editor-dialog .code-editor{width:90vw;overflow:auto}.code-editor-dialog .code-editor .save-code-button{position:absolute;right:22px;top:55px}.code-editor-dialog .code-editor .CodeMirror{height:70vh}.code-editor-dialog .code-editor .mode-select{width:300px}"], encapsulation: 2, changeDetection: 0 });
JsonEditorComponent.ctorParameters = () => [
    { type: SchemaValidatorService },
    { type: ChangeDetectorRef }
];
JsonEditorComponent.propDecorators = {
    model: [{ type: Input }],
    schema: [{ type: Input }],
    typeCheckOverrides: [{ type: Input }],
    nodeElms: [{ type: ContentChildren, args: [JsonEditorNodeComponent,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(JsonEditorComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-json-editor',
                template: "<div class=\"ngx-json-editor\">\n  <div class=\"editor-title\">\n    <div class=\"type-icon\">\n      <ngx-icon fontIcon=\"integration\"></ngx-icon>\n    </div>\n    <div class=\"name\">\n      <div class=\"title\" *ngIf=\"label\">{{ label }}</div>\n      <div class=\"title\" *ngIf=\"!label\">{{ schema.title ? schema.title : 'Object' }}</div>\n    </div>\n  </div>\n\n  <ngx-json-editor-node\n    [(model)]=\"model\"\n    [schema]=\"schema\"\n    (modelChange)=\"modelChangedCallback($event)\"\n    [errors]=\"errors\"\n    [typeCheckOverrides]=\"typeCheckOverrides\"\n    [showKnownProperties]=\"showKnownProperties\"\n  >\n  </ngx-json-editor-node>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-json-editor .editor-title{border:1px solid rgba(148,198,255,.07);height:30px;display:inline-block;margin-left:20px;position:relative;background:rgba(148,198,255,.05)}.ngx-json-editor .editor-title:before{content:\" \";width:15px;height:1px;border-radius:5px;background:none;border-top:1px dashed #5a6884;position:absolute;top:50%;left:-15px}.ngx-json-editor .editor-title .type-icon{width:28px;height:28px;position:relative;background:rgba(148,198,255,.07);margin-left:0;display:inline-block}.ngx-json-editor .editor-title .type-icon ngx-icon{color:#afb7c8;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:16px;height:16px}.ngx-json-editor .editor-title .name{display:inline-block;width:170px;padding:0 5px;position:relative;transform:translateY(-50%);vertical-align:middle}.ngx-json-editor .editor-title .name .title{display:inline-block;width:100%;color:#72819f;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;position:relative;top:5px}.ngx-json-editor .ngx-dropdown-menu{white-space:nowrap;left:16px!important}.ngx-json-editor .ngx-dropdown-menu .dropdown-column{vertical-align:top;display:inline-block;min-width:150px}.ngx-json-editor .ngx-dropdown-menu .dropdown-column:nth-child(2){border-left:1px solid #505c75}.code-editor-dialog .code-editor{width:90vw;overflow:auto}.code-editor-dialog .code-editor .save-code-button{position:absolute;right:22px;top:55px}.code-editor-dialog .code-editor .CodeMirror{height:70vh}.code-editor-dialog .code-editor .mode-select{width:300px}"]
            }]
    }], function () { return [{ type: ɵngcc1.SchemaValidatorService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { model: [{
            type: Input
        }], schema: [{
            type: Input
        }], typeCheckOverrides: [{
            type: Input
        }], nodeElms: [{
            type: ContentChildren,
            args: [JsonEditorNodeComponent]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2pzb24tZWRpdG9yL2pzb24tZWRpdG9yL2pzb24tZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUNqQixlQUFlLEVBQ2YsU0FBUyxFQUNULEtBQUssRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVV4RixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsVUFBVTtBQUNuRCxJQVNFLFlBQXNCLHNCQUE4QyxFQUFZLEdBQXNCO0FBQ3hHLFFBQUksS0FBSyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZDLFFBRndCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7QUFBQyxRQUFXLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsSUFFdkcsQ0FBQztBQUNIOytDQXBCQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGlCQUFpQixrQkFDM0I7Ozs7Ozs0S0FBMkMsa0JBRTNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnRUFDaEQsOGpEQUNJO0FBQUM7QUFBNkMsWUFYMUMsc0JBQXNCO0FBQUksWUFIakMsaUJBQWlCO0FBQ2pCO0FBQUc7QUFDZSxvQkFhakIsS0FBSztBQUFLLHFCQUVWLEtBQUs7QUFBSyxpQ0FFVixLQUFLO0FBQUssdUJBRVYsZUFBZSxTQUFDLHVCQUF1QjtBQUN0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBKc29uRWRpdG9yIH0gZnJvbSAnLi4vanNvbi1lZGl0b3InO1xuaW1wb3J0IHsgU2NoZW1hVmFsaWRhdG9yU2VydmljZSB9IGZyb20gJy4uL3NjaGVtYS12YWxpZGF0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBKc29uRWRpdG9yTm9kZUNvbXBvbmVudCB9IGZyb20gJy4vanNvbi1lZGl0b3Itbm9kZS9qc29uLWVkaXRvci1ub2RlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBKU09ORWRpdG9yU2NoZW1hIH0gZnJvbSAnLi4vanNvbi1lZGl0b3IuaGVscGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWpzb24tZWRpdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2pzb24tZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vanNvbi1lZGl0b3IuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkVkaXRvckNvbXBvbmVudCBleHRlbmRzIEpzb25FZGl0b3Ige1xuICBASW5wdXQoKSBtb2RlbDogYW55O1xuXG4gIEBJbnB1dCgpIHNjaGVtYTogSlNPTkVkaXRvclNjaGVtYTtcblxuICBASW5wdXQoKSB0eXBlQ2hlY2tPdmVycmlkZXM/OiBhbnk7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihKc29uRWRpdG9yTm9kZUNvbXBvbmVudClcbiAgbm9kZUVsbXM6IFF1ZXJ5TGlzdDxKc29uRWRpdG9yTm9kZUNvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNjaGVtYVZhbGlkYXRvclNlcnZpY2U6IFNjaGVtYVZhbGlkYXRvclNlcnZpY2UsIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoc2NoZW1hVmFsaWRhdG9yU2VydmljZSwgY2RyKTtcbiAgfVxufVxuIl19