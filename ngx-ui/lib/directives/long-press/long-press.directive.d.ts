import { EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class LongPressDirective {
    get duration(): number;
    set duration(duration: number);
    get disabled(): boolean;
    set disabled(disabled: boolean);
    longPressStart: EventEmitter<boolean>;
    longPressFinish: EventEmitter<boolean>;
    longPressCancel: EventEmitter<boolean>;
    private _duration;
    private _disabled;
    private _pressed;
    private _pressTimeout;
    onPress(event: MouseEvent): void;
    onRelease(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<LongPressDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<LongPressDirective, "[long-press]", never, { "duration": "duration"; "disabled": "disabled"; }, { "longPressStart": "longPressStart"; "longPressFinish": "longPressFinish"; "longPressCancel": "longPressCancel"; }, never>;
}

//# sourceMappingURL=long-press.directive.d.ts.map