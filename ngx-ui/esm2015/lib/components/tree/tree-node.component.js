import { Component, Input, EventEmitter, Output, ViewEncapsulation, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import * as ɵngcc0 from '@angular/core';

function TreeNodeComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 5);
    ɵngcc0.ɵɵlistener("click", function TreeNodeComponent_span_1_Template_span_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.onExpandClick($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("disabled", ctx_r0.disabled);
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.expanded ? ctx_r0.icons.collapse : ctx_r0.icons.expand);
} }
function TreeNodeComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 6);
    ɵngcc0.ɵɵlistener("click", function TreeNodeComponent_span_2_Template_span_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.onClick(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("disabled", ctx_r1.disabled);
    ɵngcc0.ɵɵproperty("innerHTML", ctx_r1.label, ɵngcc0.ɵɵsanitizeHtml);
} }
function TreeNodeComponent_3_ng_template_0_Template(rf, ctx) { }
function TreeNodeComponent_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, TreeNodeComponent_3_ng_template_0_Template, 0, 0, "ng-template", 7);
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.template)("ngTemplateOutletContext", ctx_r2.data);
} }
function TreeNodeComponent_ng_content_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngIf", "expanded"]);
} }
function TreeNodeComponent_ngx_tree_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-tree", 8);
    ɵngcc0.ɵɵlistener("selectNode", function TreeNodeComponent_ngx_tree_5_Template_ngx_tree_selectNode_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.selectNode.emit($event); })("expand", function TreeNodeComponent_ngx_tree_5_Template_ngx_tree_expand_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.expand.emit($event); })("collapse", function TreeNodeComponent_ngx_tree_5_Template_ngx_tree_collapse_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.collapse.emit($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nodes", ctx_r4.children)("template", ctx_r4.template)("icons", ctx_r4.icons);
} }
const _c0 = ["*"];
export class TreeNodeComponent {
    constructor() {
        this.icons = {
            collapse: 'icon-tree-collapse',
            expand: 'icon-tree-expand'
        };
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.selectNode = new EventEmitter();
        // backwards compatibility. Use selectNode
        // eslint-disable-next-line @angular-eslint/no-output-native
        this.select = this.selectNode;
        this.expand = new EventEmitter();
        this.collapse = new EventEmitter();
    }
    ngOnChanges() {
        this.data = {
            $implicit: this.node,
            label: this.label,
            children: this.children,
            model: this.model
        };
    }
    onExpandClick(event) {
        if (this.disabled || !this.expandable)
            return;
        event.stopPropagation();
        this.expanded = !this.expanded;
        if (this.expanded) {
            this.expand.emit(this.data);
        }
        else {
            this.collapse.emit(this.data);
        }
    }
    onClick() {
        if (!this.selectable || this.disabled)
            return;
        this.selectNode.emit(this.data);
    }
}
TreeNodeComponent.ɵfac = function TreeNodeComponent_Factory(t) { return new (t || TreeNodeComponent)(); };
TreeNodeComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: TreeNodeComponent, selectors: [["ngx-tree-node"]], inputs: { icons: "icons", expanded: "expanded", label: "label", model: "model", node: "node", children: "children", disabled: "disabled", expandable: "expandable", selectable: "selectable", template: "template" }, outputs: { activate: "activate", deactivate: "deactivate", selectNode: "selectNode", select: "select", expand: "expand", collapse: "collapse" }, exportAs: ["ngxTreeNode"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 6, vars: 7, consts: [["tabindex", "-1", 1, "ngx-tree-node", 3, "focus", "blur"], ["class", "ngx-expander", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["class", "ngx-node-label", 3, "innerHTML", "disabled", "click", 4, "ngIf"], [4, "ngIf"], ["class", "ngx-sub-tree", 3, "nodes", "template", "icons", "selectNode", "expand", "collapse", 4, "ngIf"], [1, "ngx-expander", 3, "ngClass", "click"], [1, "ngx-node-label", 3, "innerHTML", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ngx-sub-tree", 3, "nodes", "template", "icons", "selectNode", "expand", "collapse"]], template: function TreeNodeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "li", 0);
        ɵngcc0.ɵɵlistener("focus", function TreeNodeComponent_Template_li_focus_0_listener() { return ctx.activate.emit(ctx.data); })("blur", function TreeNodeComponent_Template_li_blur_0_listener() { return ctx.deactivate.emit(ctx.data); });
        ɵngcc0.ɵɵtemplate(1, TreeNodeComponent_span_1_Template, 1, 3, "span", 1);
        ɵngcc0.ɵɵtemplate(2, TreeNodeComponent_span_2_Template, 1, 3, "span", 2);
        ɵngcc0.ɵɵtemplate(3, TreeNodeComponent_3_Template, 1, 2, undefined, 3);
        ɵngcc0.ɵɵtemplate(4, TreeNodeComponent_ng_content_4_Template, 1, 0, "ng-content", 3);
        ɵngcc0.ɵɵtemplate(5, TreeNodeComponent_ngx_tree_5_Template, 1, 3, "ngx-tree", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("selectable", ctx.selectable);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.expandable);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.template);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.template);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.expanded);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", (ctx.children == null ? null : ctx.children.length) && ctx.expandable && ctx.expanded);
    } }, encapsulation: 2, changeDetection: 0 });
TreeNodeComponent.propDecorators = {
    label: [{ type: Input }],
    model: [{ type: Input }],
    node: [{ type: Input }],
    children: [{ type: Input }],
    disabled: [{ type: Input }],
    expandable: [{ type: Input }],
    expanded: [{ type: Input }],
    selectable: [{ type: Input }],
    template: [{ type: Input }],
    icons: [{ type: Input }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    selectNode: [{ type: Output }],
    select: [{ type: Output }],
    expand: [{ type: Output }],
    collapse: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TreeNodeComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxTreeNode',
                selector: 'ngx-tree-node',
                template: "<li\n  class=\"ngx-tree-node\"\n  [class.selectable]=\"selectable\"\n  (focus)=\"activate.emit(this.data)\"\n  (blur)=\"deactivate.emit(this.data)\"\n  tabindex=\"-1\"\n>\n  <span\n    *ngIf=\"expandable\"\n    class=\"ngx-expander\"\n    (click)=\"onExpandClick($event)\"\n    [class.disabled]=\"disabled\"\n    [ngClass]=\"expanded ? icons.collapse : icons.expand\"\n  >\n  </span>\n  <span *ngIf=\"!template\" [innerHTML]=\"label\" [class.disabled]=\"disabled\" class=\"ngx-node-label\" (click)=\"onClick()\">\n  </span>\n  <ng-template *ngIf=\"template\" [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"data\"> </ng-template>\n  <ng-content *ngIf=\"expanded\"></ng-content>\n  <ngx-tree\n    *ngIf=\"children?.length && expandable && expanded\"\n    class=\"ngx-sub-tree\"\n    [nodes]=\"children\"\n    [template]=\"template\"\n    [icons]=\"icons\"\n    (selectNode)=\"selectNode.emit($event)\"\n    (expand)=\"expand.emit($event)\"\n    (collapse)=\"collapse.emit($event)\"\n  >\n  </ngx-tree>\n</li>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { icons: [{
            type: Input
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], selectNode: [{
            type: Output
        }], select: [{
            type: Output
        }], expand: [{
            type: Output
        }], collapse: [{
            type: Output
        }], expanded: [{
            type: Input
        }], label: [{
            type: Input
        }], model: [{
            type: Input
        }], node: [{
            type: Input
        }], children: [{
            type: Input
        }], disabled: [{
            type: Input
        }], expandable: [{
            type: Input
        }], selectable: [{
            type: Input
        }], template: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy90cmVlL3RyZWUtbm9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsWUFBWSxFQUNaLE1BQU0sRUFFTixpQkFBaUIsRUFDakIsV0FBVyxFQUNYLHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVd2QixNQUFNLE9BQU8saUJBQWlCO0FBQUcsSUFQakM7QUFDRyxRQWdCUSxVQUFLLEdBQUc7QUFDbkIsWUFBSSxRQUFRLEVBQUUsb0JBQW9CO0FBQ2xDLFlBQUksTUFBTSxFQUFFLGtCQUFrQjtBQUM5QixTQUFHLENBQUM7QUFDSixRQUNZLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzFDLFFBQVksZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7QUFDNUMsUUFBWSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM1QyxRQUFFLDBDQUEwQztBQUM1QyxRQUFFLDREQUE0RDtBQUM5RCxRQUFZLFdBQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQ3JDLFFBQVksV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7QUFDeEMsUUFBWSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUMxQyxJQThCQSxDQUFDO0FBQ0QsSUE1QkUsV0FBVztBQUFLLFFBQ2QsSUFBSSxDQUFDLElBQUksR0FBRztBQUNoQixZQUFNLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSTtBQUMxQixZQUFNLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztBQUN2QixZQUFNLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtBQUM3QixZQUFNLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztBQUN2QixTQUFLLENBQUM7QUFDTixJQUFFLENBQUM7QUFDSCxJQUNFLGFBQWEsQ0FBQyxLQUFZO0FBQUksUUFDNUIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7QUFBRSxZQUFBLE9BQU87QUFDbEQsUUFDSSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDNUIsUUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNuQyxRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUN2QixZQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQyxTQUFLO0FBQUMsYUFBSztBQUNYLFlBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLE9BQU87QUFBSyxRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRO0FBQUUsWUFBQSxPQUFPO0FBQ2xELFFBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLElBQUUsQ0FBQztBQUNIOzZDQTVEQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGFBQWE7ZUFDdkIsUUFBUSxFQUFFLGVBQWUsa0JBQ3pCLHlnQ0FBeUMsa0JBQ3pDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxjQUNoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpREFDSTtBQUFDO0FBQXFDLG9CQUN4QyxLQUFLO0FBQUssb0JBQ1YsS0FBSztBQUFLLG1CQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUssdUJBQ1YsS0FBSztBQUFLLHlCQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUsseUJBQ1YsS0FBSztBQUFLLHVCQUNWLEtBQUs7QUFBSyxvQkFDVixLQUFLO0FBQUssdUJBS1YsTUFBTTtBQUFLLHlCQUNYLE1BQU07QUFBSyx5QkFDWCxNQUFNO0FBQUsscUJBR1gsTUFBTTtBQUFLLHFCQUNYLE1BQU07QUFBSyx1QkFDWCxNQUFNO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIE9uQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIFRlbXBsYXRlUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuL3RyZWUtbm9kZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ25neFRyZWVOb2RlJyxcbiAgc2VsZWN0b3I6ICduZ3gtdHJlZS1ub2RlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUtbm9kZS5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgbW9kZWw6IGFueTtcbiAgQElucHV0KCkgbm9kZTogVHJlZU5vZGU7XG4gIEBJbnB1dCgpIGNoaWxkcmVuOiBhbnlbXTtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGV4cGFuZGFibGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGV4cGFuZGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBzZWxlY3RhYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgaWNvbnMgPSB7XG4gICAgY29sbGFwc2U6ICdpY29uLXRyZWUtY29sbGFwc2UnLFxuICAgIGV4cGFuZDogJ2ljb24tdHJlZS1leHBhbmQnXG4gIH07XG5cbiAgQE91dHB1dCgpIGFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGVhY3RpdmF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlbGVjdE5vZGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBVc2Ugc2VsZWN0Tm9kZVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIHNlbGVjdCA9IHRoaXMuc2VsZWN0Tm9kZTtcbiAgQE91dHB1dCgpIGV4cGFuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNvbGxhcHNlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGRhdGE6IGFueTtcblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAkaW1wbGljaXQ6IHRoaXMubm9kZSxcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgY2hpbGRyZW46IHRoaXMuY2hpbGRyZW4sXG4gICAgICBtb2RlbDogdGhpcy5tb2RlbFxuICAgIH07XG4gIH1cblxuICBvbkV4cGFuZENsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICF0aGlzLmV4cGFuZGFibGUpIHJldHVybjtcblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuXG4gICAgaWYgKHRoaXMuZXhwYW5kZWQpIHtcbiAgICAgIHRoaXMuZXhwYW5kLmVtaXQodGhpcy5kYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2xsYXBzZS5lbWl0KHRoaXMuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0YWJsZSB8fCB0aGlzLmRpc2FibGVkKSByZXR1cm47XG4gICAgdGhpcy5zZWxlY3ROb2RlLmVtaXQodGhpcy5kYXRhKTtcbiAgfVxufVxuIl19