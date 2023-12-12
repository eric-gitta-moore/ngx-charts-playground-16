import { OnChanges, ChangeDetectorRef } from '@angular/core';
import { FlexParts } from './utils';
import * as ɵngcc0 from '@angular/core';
export declare function validateBasis(basis: string, grow?: string, shrink?: string): FlexParts;
export declare class SplitAreaDirective implements OnChanges {
    private ref;
    ngxSplitArea: string;
    minBasis: string;
    maxBasis: string;
    shouldAdjustMaxMin: boolean;
    overflow: string;
    initialFlexParts: FlexParts;
    currentFlexParts: FlexParts;
    get flex(): string;
    get maxWidth(): string;
    get minWidth(): string;
    constructor(ref: ChangeDetectorRef);
    ngOnChanges(): void;
    updateBasis(newBasis: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<SplitAreaDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<SplitAreaDirective, "[ngxSplitArea]", ["ngxSplitArea"], { "ngxSplitArea": "ngxSplitArea"; "shouldAdjustMaxMin": "shouldAdjustMaxMin"; "minBasis": "minBasis"; "maxBasis": "maxBasis"; }, {}, never>;
}

//# sourceMappingURL=split-area.directive.d.ts.map