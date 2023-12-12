import { OnInit, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as ɵngcc0 from '@angular/core';
interface DataValue {
    value: string;
}
export declare class OrderableInputsListComponent implements OnInit {
    data: string[];
    onUpdate: EventEmitter<string[]>;
    dataValues: DataValue[];
    ngOnInit(): void;
    addExample(): void;
    removeItem(index: number): void;
    drop(event: CdkDragDrop<string[]>): void;
    update(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<OrderableInputsListComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<OrderableInputsListComponent, "ngx-orderable-inputs-list", never, { "data": "data"; }, { "onUpdate": "onUpdate"; }, never, never>;
}
export {};

//# sourceMappingURL=orderable-inputs-list.component.d.ts.map