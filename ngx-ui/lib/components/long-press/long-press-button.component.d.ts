import { EventEmitter, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { LongPressButtonState } from './long-press-button-state.enum';
import * as ɵngcc0 from '@angular/core';
export declare class LongPressButtonComponent implements OnInit, OnChanges {
    private readonly cdr;
    state: LongPressButtonState;
    icon: string;
    get duration(): number;
    set duration(duration: number);
    get disabled(): boolean;
    set disabled(disabled: boolean);
    longPress: EventEmitter<boolean>;
    readonly LongPressButtonState: typeof LongPressButtonState;
    pressed: boolean;
    private _lastTimeout;
    private _duration;
    private _disabled;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(): void;
    updateState(): void;
    onLongPressStart(): void;
    onLongPressFinish(e: boolean): void;
    onLongPressCancel(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<LongPressButtonComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<LongPressButtonComponent, "ngx-long-press-button", ["ngxLongPressButton"], { "state": "state"; "icon": "icon"; "duration": "duration"; "disabled": "disabled"; }, { "longPress": "longPress"; }, never, never>;
}

//# sourceMappingURL=long-press-button.component.d.ts.map