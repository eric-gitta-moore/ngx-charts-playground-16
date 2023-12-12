import { EventEmitter, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlexParts } from './utils';
import { SplitDirection } from './split-direction.enum';
import * as ɵngcc0 from '@angular/core';
export declare class SplitHandleComponent implements OnChanges {
    ngxSplitHandle: string;
    drag: EventEmitter<{
        x: number;
        y: number;
    }>;
    dragStart: EventEmitter<MouseEvent>;
    dragEnd: EventEmitter<MouseEvent>;
    dblclick: EventEmitter<MouseEvent>;
    direction: SplitDirection;
    subscription: Subscription;
    currentFlexParts: FlexParts;
    get flex(): string;
    get isRow(): boolean;
    get isColumn(): boolean;
    ngOnChanges(): void;
    onMousedown(ev: MouseEvent): void;
    onMouseMove(ev: MouseEvent): void;
    onMouseup(ev: MouseEvent): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<SplitHandleComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<SplitHandleComponent, "[ngxSplitHandle]", ["ngxSplitHandle"], { "ngxSplitHandle": "ngxSplitHandle"; }, { "drag": "drag"; "dragStart": "dragStart"; "dragEnd": "dragEnd"; "dblclick": "dblclick"; }, never, never>;
}

//# sourceMappingURL=split-handle.component.d.ts.map