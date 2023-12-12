import { EventEmitter, TemplateRef, QueryList, ChangeDetectorRef, OnDestroy, AfterContentInit } from '@angular/core';
import { TreeNodeComponent } from './tree-node.component';
import { TreeNode } from './tree-node.model';
import * as ɵngcc0 from '@angular/core';
export declare class TreeComponent implements AfterContentInit, OnDestroy {
    private readonly _cdr;
    nodes: TreeNode[];
    _templateInput: TemplateRef<any>;
    icons: {
        collapse: string;
        expand: string;
    };
    _templateQuery: TemplateRef<any>;
    readonly nodeElms: QueryList<TreeNodeComponent>;
    expand: EventEmitter<any>;
    collapse: EventEmitter<any>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    selectNode: EventEmitter<any>;
    get hasOneLeaf(): boolean;
    get template(): TemplateRef<any>;
    private readonly _destroy$;
    constructor(_cdr: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TreeComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<TreeComponent, "ngx-tree", never, { "icons": "icons"; "nodes": "nodes"; "_templateInput": "template"; }, { "expand": "expand"; "collapse": "collapse"; "activate": "activate"; "deactivate": "deactivate"; "selectNode": "selectNode"; }, ["_templateQuery", "nodeElms"], ["*"]>;
}

//# sourceMappingURL=tree.component.d.ts.map