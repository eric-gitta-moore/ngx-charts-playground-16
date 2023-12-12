import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeComponent } from './tree.component';
import { TreeNodeComponent } from './tree-node.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
export class TreeModule {
}
TreeModule.ɵfac = function TreeModule_Factory(t) { return new (t || TreeModule)(); };
TreeModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: TreeModule });
TreeModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, FormsModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TreeModule, [{
        type: NgModule,
        args: [{
                declarations: [TreeComponent, TreeNodeComponent],
                exports: [TreeComponent, TreeNodeComponent],
                imports: [CommonModule, FormsModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TreeModule, { declarations: function () { return [TreeComponent, TreeNodeComponent]; }, imports: function () { return [CommonModule, FormsModule]; }, exports: function () { return [TreeComponent, TreeNodeComponent]; } }); })();
ɵngcc0.ɵɵsetComponentScope(TreeNodeComponent, [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgTemplateOutlet, TreeComponent], []);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvdHJlZS90cmVlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFPMUQsTUFBTSxPQUFPLFVBQVU7QUFBRztzQ0FMekIsUUFBUSxTQUFDLGtCQUNSLFlBQVk7Q0FBRSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxrQkFDaEQsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFO2dCQUFpQixDQUFDLGtCQUMzQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLGNBQ3JDOzs7Ozs7Ozs7O3lIQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi90cmVlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlTm9kZUNvbXBvbmVudCB9IGZyb20gJy4vdHJlZS1ub2RlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RyZWVDb21wb25lbnQsIFRyZWVOb2RlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1RyZWVDb21wb25lbnQsIFRyZWVOb2RlQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVNb2R1bGUge31cbiJdfQ==