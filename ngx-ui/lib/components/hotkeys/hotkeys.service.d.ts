import { NgZone } from '@angular/core';
import { Hotkey } from './hotkey.interface';
import * as ɵngcc0 from '@angular/core';
export declare function _add(combo: string, opts: Hotkey): Hotkey;
export declare function _suspend(comp: any): void;
export declare function _pauseOthers(comp?: any): void;
export declare function _unpauseOthers(comp?: any): void;
export declare function _activate(comp: any): void;
export declare function _deregister(comp: any): void;
export declare function Hotkey(key: string, description: string, options?: Partial<Hotkey>): (target: any, name: string) => void;
export declare class HotkeysService {
    private readonly ngZone;
    readonly suspend: typeof _suspend;
    readonly activate: typeof _activate;
    readonly deregister: typeof _deregister;
    readonly pauseOthers: typeof _pauseOthers;
    readonly unpauseOthers: typeof _unpauseOthers;
    readonly changeEvent: import("rxjs").Observable<{
        [combo: string]: Hotkey[];
    }>;
    get hotkeys(): {
        [combo: string]: Hotkey[];
    };
    constructor(ngZone: NgZone);
    add(combo: string, opts: Hotkey): Hotkey;
    clear(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<HotkeysService, never>;
}

//# sourceMappingURL=hotkeys.service.d.ts.map