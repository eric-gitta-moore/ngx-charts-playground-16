import { EventEmitter, OnChanges, TemplateRef } from '@angular/core';
import { TreeNode } from './tree-node.model';
import * as ɵngcc0 from '@angular/core';
export declare class TreeNodeComponent implements OnChanges {
    label: string;
    model: any;
    node: TreeNode;
    children: any[];
    disabled: boolean;
    expandable: boolean;
    expanded: boolean;
    selectable: boolean;
    template: TemplateRef<any>;
    icons: {
        collapse: string;
        expand: string;
    };
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    selectNode: EventEmitter<any>;
    select: EventEmitter<any>;
    expand: EventEmitter<any>;
    collapse: EventEmitter<any>;
    data: any;
    ngOnChanges(): void;
    onExpandClick(event: Event): void;
    onClick(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TreeNodeComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<TreeNodeComponent, "ngx-tree-node", ["ngxTreeNode"], { "icons": "icons"; "expanded": "expanded"; "label": "label"; "model": "model"; "node": "node"; "children": "children"; "disabled": "disabled"; "expandable": "expandable"; "selectable": "selectable"; "template": "template"; }, { "activate": "activate"; "deactivate": "deactivate"; "selectNode": "selectNode"; "select": "select"; "expand": "expand"; "collapse": "collapse"; }, never, ["*"]>;
}

//# sourceMappingURL=tree-node.component.d.ts.map