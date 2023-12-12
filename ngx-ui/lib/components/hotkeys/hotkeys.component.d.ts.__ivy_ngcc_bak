import { OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HotkeysService } from './hotkeys.service';
import { Hotkey } from './hotkey.interface';
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
}
