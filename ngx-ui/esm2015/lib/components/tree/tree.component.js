import { Component, Input, EventEmitter, Output, ContentChild, ViewEncapsulation, ContentChildren, TemplateRef, QueryList, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TreeNodeComponent } from './tree-node.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from './tree-node.component';

function TreeComponent_ngx_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-tree-node", 5);
    ɵngcc0.ɵɵlistener("expand", function TreeComponent_ngx_tree_node_2_Template_ngx_tree_node_expand_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.expand.emit($event); })("collapse", function TreeComponent_ngx_tree_node_2_Template_ngx_tree_node_collapse_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.collapse.emit($event); })("activate", function TreeComponent_ngx_tree_node_2_Template_ngx_tree_node_activate_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.activate.emit($event); })("deactivate", function TreeComponent_ngx_tree_node_2_Template_ngx_tree_node_deactivate_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.deactivate.emit($event); })("selectNode", function TreeComponent_ngx_tree_node_2_Template_ngx_tree_node_selectNode_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.selectNode.emit($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("node", node_r3)("disabled", node_r3.disabled)("expandable", node_r3.expandable)("expanded", node_r3.expanded)("selectable", node_r3.selectable)("icons", ctx_r0.icons)("label", node_r3.label)("model", node_r3.model)("children", node_r3.children)("template", ctx_r0.template);
} }
function TreeComponent_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngIf", "!nodes"]);
} }
function TreeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 6);
} }
const _c0 = ["*"];
export class TreeComponent {
    constructor(_cdr) {
        this._cdr = _cdr;
        this.icons = {
            collapse: 'icon-tree-collapse',
            expand: 'icon-tree-expand'
        };
        this.expand = new EventEmitter();
        this.collapse = new EventEmitter();
        this.activate = new EventEmitter();
        this.deactivate = new EventEmitter();
        this.selectNode = new EventEmitter();
        this._destroy$ = new Subject();
    }
    get hasOneLeaf() {
        return (this.nodes && this.nodes.length === 1) || this.nodeElms.length === 1;
    }
    get template() {
        return this._templateInput || this._templateQuery;
    }
    ngAfterContentInit() {
        this.nodeElms.changes.pipe(takeUntil(this._destroy$)).subscribe(() => this._cdr.markForCheck());
    }
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
}
TreeComponent.ɵfac = function TreeComponent_Factory(t) { return new (t || TreeComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TreeComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: TreeComponent, selectors: [["ngx-tree"]], contentQueries: function TreeComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, TemplateRef, 7);
        ɵngcc0.ɵɵcontentQuery(dirIndex, TreeNodeComponent, 4);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._templateQuery = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.nodeElms = _t);
    } }, inputs: { icons: "icons", nodes: "nodes", _templateInput: ["template", "_templateInput"] }, outputs: { expand: "expand", collapse: "collapse", activate: "activate", deactivate: "deactivate", selectNode: "selectNode" }, ngContentSelectors: _c0, decls: 5, vars: 5, consts: [[1, "ngx-tree"], [1, "vertical-list"], [3, "node", "disabled", "expandable", "expanded", "selectable", "icons", "label", "model", "children", "template", "expand", "collapse", "activate", "deactivate", "selectNode", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "ngx-tree-vr", 4, "ngIf"], [3, "node", "disabled", "expandable", "expanded", "selectable", "icons", "label", "model", "children", "template", "expand", "collapse", "activate", "deactivate", "selectNode"], [1, "ngx-tree-vr"]], template: function TreeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "ul", 1);
        ɵngcc0.ɵɵtemplate(2, TreeComponent_ngx_tree_node_2_Template, 1, 10, "ngx-tree-node", 2);
        ɵngcc0.ɵɵtemplate(3, TreeComponent_ng_content_3_Template, 1, 0, "ng-content", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, TreeComponent_div_4_Template, 1, 0, "div", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("one-leaf", ctx.hasOneLeaf);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.nodes);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nodes);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", (ctx.nodes == null ? null : ctx.nodes.length) || (ctx.nodeElms == null ? null : ctx.nodeElms.length));
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc2.TreeNodeComponent], styles: [".ngx-tree{position:relative}.ngx-tree .ngx-tree-node{position:relative;padding-left:20px;line-height:25px;min-height:25px}.ngx-tree .ngx-tree-node .ngx-expander{font-size:.75rem;color:#b3b6bd;position:absolute;left:0;top:3px;z-index:1;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ngx-tree .ngx-tree-node .ngx-expander:not(.disabled){cursor:pointer}.ngx-tree .ngx-tree-node .ngx-expander.icon-tree-collapse:before,.ngx-tree .ngx-tree-node .ngx-expander.icon-tree-expand:before{background:#1c2029;border-radius:50%}.ngx-tree .ngx-tree-node .ngx-node-label{color:#b3b6bd;font-size:.9rem}.ngx-tree .ngx-tree-node .ngx-tree{margin-left:5px}.ngx-tree .ngx-tree-node.selectable>.ngx-node-label:not(.disabled){cursor:pointer}.ngx-tree.one-leaf>.ngx-tree-vr:before{display:none}.ngx-tree .ngx-tree-vr{position:absolute;top:17px;bottom:12px;left:5px;border-left:1px dashed #667080;width:1px}.ngx-tree .ngx-tree-vr:after{background:#667080;bottom:-3px}.ngx-tree .ngx-tree-vr:after,.ngx-tree .ngx-tree-vr:before{content:\" \";width:5px;height:5px;border-radius:5px;position:absolute;left:-3px}.ngx-tree .ngx-tree-vr:before{background:none;border:1px solid #667080;top:-5px}"], encapsulation: 2, changeDetection: 0 });
TreeComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
TreeComponent.propDecorators = {
    nodes: [{ type: Input }],
    _templateInput: [{ type: Input, args: ['template',] }],
    icons: [{ type: Input }],
    _templateQuery: [{ type: ContentChild, args: [TemplateRef, { static: true },] }],
    nodeElms: [{ type: ContentChildren, args: [TreeNodeComponent,] }],
    expand: [{ type: Output }],
    collapse: [{ type: Output }],
    activate: [{ type: Output }],
    deactivate: [{ type: Output }],
    selectNode: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TreeComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-tree',
                template: "<div class=\"ngx-tree\" [class.one-leaf]=\"hasOneLeaf\">\n  <ul class=\"vertical-list\">\n    <ngx-tree-node\n      *ngFor=\"let node of nodes\"\n      [node]=\"node\"\n      [disabled]=\"node.disabled\"\n      [expandable]=\"node.expandable\"\n      [expanded]=\"node.expanded\"\n      [selectable]=\"node.selectable\"\n      [icons]=\"icons\"\n      [label]=\"node.label\"\n      [model]=\"node.model\"\n      [children]=\"node.children\"\n      [template]=\"template\"\n      (expand)=\"expand.emit($event)\"\n      (collapse)=\"collapse.emit($event)\"\n      (activate)=\"activate.emit($event)\"\n      (deactivate)=\"deactivate.emit($event)\"\n      (selectNode)=\"selectNode.emit($event)\"\n    >\n    </ngx-tree-node>\n    <ng-content *ngIf=\"!nodes\"></ng-content>\n  </ul>\n  <div class=\"ngx-tree-vr\" *ngIf=\"nodes?.length || nodeElms?.length\"></div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-tree{position:relative}.ngx-tree .ngx-tree-node{position:relative;padding-left:20px;line-height:25px;min-height:25px}.ngx-tree .ngx-tree-node .ngx-expander{font-size:.75rem;color:#b3b6bd;position:absolute;left:0;top:3px;z-index:1;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ngx-tree .ngx-tree-node .ngx-expander:not(.disabled){cursor:pointer}.ngx-tree .ngx-tree-node .ngx-expander.icon-tree-collapse:before,.ngx-tree .ngx-tree-node .ngx-expander.icon-tree-expand:before{background:#1c2029;border-radius:50%}.ngx-tree .ngx-tree-node .ngx-node-label{color:#b3b6bd;font-size:.9rem}.ngx-tree .ngx-tree-node .ngx-tree{margin-left:5px}.ngx-tree .ngx-tree-node.selectable>.ngx-node-label:not(.disabled){cursor:pointer}.ngx-tree.one-leaf>.ngx-tree-vr:before{display:none}.ngx-tree .ngx-tree-vr{position:absolute;top:17px;bottom:12px;left:5px;border-left:1px dashed #667080;width:1px}.ngx-tree .ngx-tree-vr:after{background:#667080;bottom:-3px}.ngx-tree .ngx-tree-vr:after,.ngx-tree .ngx-tree-vr:before{content:\" \";width:5px;height:5px;border-radius:5px;position:absolute;left:-3px}.ngx-tree .ngx-tree-vr:before{background:none;border:1px solid #667080;top:-5px}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { icons: [{
            type: Input
        }], expand: [{
            type: Output
        }], collapse: [{
            type: Output
        }], activate: [{
            type: Output
        }], deactivate: [{
            type: Output
        }], selectNode: [{
            type: Output
        }], nodes: [{
            type: Input
        }], _templateInput: [{
            type: Input,
            args: ['template']
        }], _templateQuery: [{
            type: ContentChild,
            args: [TemplateRef, { static: true }]
        }], nodeElms: [{
            type: ContentChildren,
            args: [TreeNodeComponent]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvdHJlZS90cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxZQUFZLEVBQ1osTUFBTSxFQUNOLFlBQVksRUFDWixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLFdBQVcsRUFDWCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUdsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVUxRCxNQUFNLE9BQU8sYUFBYTtBQUFHLElBaUMzQixZQUE2QixJQUF1QjtBQUFJLFFBQTNCLFNBQUksR0FBSixJQUFJLENBQW1CO0FBQUMsUUExQjVDLFVBQUssR0FBRztBQUNuQixZQUFJLFFBQVEsRUFBRSxvQkFBb0I7QUFDbEMsWUFBSSxNQUFNLEVBQUUsa0JBQWtCO0FBQzlCLFNBQUcsQ0FBQztBQUNKLFFBTVksV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7QUFDeEMsUUFBWSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUMxQyxRQUFZLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzFDLFFBQVksZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7QUFDNUMsUUFBWSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM1QyxRQVNtQixjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztBQUNuRCxJQUN5RCxDQUFDO0FBQzFELElBWEUsSUFBSSxVQUFVO0FBQUssUUFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0FBQ2pGLElBQUUsQ0FBQztBQUNILElBQ0UsSUFBSSxRQUFRO0FBQUssUUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQztBQUN0RCxJQUFFLENBQUM7QUFDSCxJQUtFLGtCQUFrQjtBQUFLLFFBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztBQUNwRyxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVc7QUFBSyxRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDMUIsUUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzlCLElBQUUsQ0FBQztBQUNIO3lDQWxEQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLFVBQVUsa0JBQ3BCOzs7Ozs7OztxVUFBb0Msa0JBRXBDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7OztnSUFDaEQ7aXlDQUNJO0FBQUM7QUFBdUMsWUFqQjNDLGlCQUFpQjtBQUNsQjtBQUFHO0FBRUMsb0JBZUYsS0FBSztBQUFLLDZCQUdWLEtBQUssU0FBQyxVQUFVO0FBQ2Qsb0JBRUYsS0FBSztBQUFLLDZCQUtWLFlBQVksU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0FBQ3hDLHVCQUVGLGVBQWUsU0FBQyxpQkFBaUI7QUFBTyxxQkFFeEMsTUFBTTtBQUFLLHVCQUNYLE1BQU07QUFBSyx1QkFDWCxNQUFNO0FBQUsseUJBQ1gsTUFBTTtBQUFLLHlCQUNYLE1BQU07QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgQ29udGVudENoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ29udGVudENoaWxkcmVuLFxuICBUZW1wbGF0ZVJlZixcbiAgUXVlcnlMaXN0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uRGVzdHJveSxcbiAgQWZ0ZXJDb250ZW50SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVHJlZU5vZGVDb21wb25lbnQgfSBmcm9tICcuL3RyZWUtbm9kZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuL3RyZWUtbm9kZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC10cmVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90cmVlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBub2RlczogVHJlZU5vZGVbXTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ3RlbXBsYXRlJylcbiAgX3RlbXBsYXRlSW5wdXQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgaWNvbnMgPSB7XG4gICAgY29sbGFwc2U6ICdpY29uLXRyZWUtY29sbGFwc2UnLFxuICAgIGV4cGFuZDogJ2ljb24tdHJlZS1leHBhbmQnXG4gIH07XG5cbiAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSlcbiAgX3RlbXBsYXRlUXVlcnk6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQENvbnRlbnRDaGlsZHJlbihUcmVlTm9kZUNvbXBvbmVudCkgcmVhZG9ubHkgbm9kZUVsbXM6IFF1ZXJ5TGlzdDxUcmVlTm9kZUNvbXBvbmVudD47XG5cbiAgQE91dHB1dCgpIGV4cGFuZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNvbGxhcHNlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYWN0aXZhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkZWFjdGl2YXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VsZWN0Tm9kZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBnZXQgaGFzT25lTGVhZigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMubm9kZXMgJiYgdGhpcy5ub2Rlcy5sZW5ndGggPT09IDEpIHx8IHRoaXMubm9kZUVsbXMubGVuZ3RoID09PSAxO1xuICB9XG5cbiAgZ2V0IHRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZUlucHV0IHx8IHRoaXMuX3RlbXBsYXRlUXVlcnk7XG4gIH1cblxuICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5ub2RlRWxtcy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19