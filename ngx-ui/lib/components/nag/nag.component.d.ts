import { EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
declare const enum State {
    open = "open",
    peek = "peek",
    closed = "closed"
}
export declare class NagComponent implements OnDestroy, OnChanges {
    cssClass: string;
    state: State | keyof typeof State;
    stateChanged: EventEmitter<string>;
    get zIndex(): number;
    set zIndex(val: number);
    nagTitle: string;
    watch: any;
    hide: any;
    get klass(): string;
    bounce: number;
    private _zIndex;
    toggle(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NagComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NagComponent, "ngx-nag", ["ngxNag"], { "cssClass": "cssClass"; "state": "state"; "nagTitle": "nagTitle"; "zIndex": "zIndex"; "watch": "watch"; "hide": "hide"; }, { "stateChanged": "stateChanged"; }, never, ["[ngx-nag-title]", "*"]>;
}
export {};

//# sourceMappingURL=nag.component.d.ts.map