import { OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HotkeysService } from './hotkeys.service';
import { Hotkey } from './hotkey.interface';
import * as ɵngcc0 from '@angular/core';
export declare class HotkeysComponent implements OnInit, OnDestroy {
    private readonly _hotkeysService;
    readonly hotkeys$: BehaviorSubject<Hotkey[]>;
    visible: boolean;
    private readonly _destroy;
    constructor(_hotkeysService: HotkeysService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    updateHotkeys(hotkeys: {
        [combo: string]: Hotkey[];
    }): void;
    show(): void;
    hide(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<HotkeysComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<HotkeysComponent, "ngx-hotkeys", ["ngxHotkeys"], {}, {}, never, never>;
}

//# sourceMappingURL=hotkeys.component.d.ts.map