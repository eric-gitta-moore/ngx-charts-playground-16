import { ElementRef, EventEmitter } from '@angular/core';
import { DropdownShowTypes } from './dropdown.show-types.enum';
import * as ɵngcc0 from '@angular/core';
export declare class DropdownToggleDirective {
    private readonly el;
    showEvent: DropdownShowTypes;
    get disabled(): boolean;
    set disabled(disabled: boolean);
    toggle: EventEmitter<Event>;
    readonly element: HTMLElement;
    private _disabled;
    constructor(el: ElementRef<HTMLElement>);
    onClick(event: Event): void;
    onContextmenu(event: Event): void;
    onDblclick(event: Event): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DropdownToggleDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<DropdownToggleDirective, "ngx-dropdown-toggle", ["ngxDropdownToggle"], { "showEvent": "showEvent"; "disabled": "disabled"; }, { "toggle": "toggle"; }, never>;
}

//# sourceMappingURL=dropdown-toggle.directive.d.ts.map