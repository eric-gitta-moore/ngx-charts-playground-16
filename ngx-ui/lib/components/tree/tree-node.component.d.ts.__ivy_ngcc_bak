import { EventEmitter, OnChanges, TemplateRef } from '@angular/core';
import { TreeNode } from './tree-node.model';
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
}
