import { EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { TipStatus } from './tip-status.enum';
import * as ɵngcc0 from '@angular/core';
export declare class TipComponent implements OnChanges, OnDestroy {
    status: TipStatus;
    isCloseable: boolean;
    icon: string;
    close: EventEmitter<any>;
    readonly TipStatus: typeof TipStatus;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    onClose(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TipComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<TipComponent, "ngx-tip", ["ngxTip"], { "isCloseable": "isCloseable"; "icon": "icon"; "status": "status"; }, { "close": "close"; }, never, ["*"]>;
}

//# sourceMappingURL=tip.component.d.ts.map