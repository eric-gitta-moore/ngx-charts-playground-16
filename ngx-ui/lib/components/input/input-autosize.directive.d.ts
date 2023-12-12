import { ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class AutosizeDirective {
    readonly element: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
    get enabled(): boolean;
    set enabled(v: boolean);
    private _enabled;
    get nodeName(): "TEXTAREA" | "INPUT";
    constructor(element: ElementRef<HTMLInputElement | HTMLTextAreaElement>);
    onInput(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<AutosizeDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<AutosizeDirective, "textarea[autosize], input[autosize]", ["ngxAutosize"], { "enabled": "autosize"; }, {}, never>;
}

//# sourceMappingURL=input-autosize.directive.d.ts.map