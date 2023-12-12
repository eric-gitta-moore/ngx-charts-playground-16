import { AfterViewInit, ElementRef, EventEmitter, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { SelectDropdownOption } from './select-dropdown-option.interface';
import * as ɵngcc0 from '@angular/core';
export declare class SelectInputComponent implements AfterViewInit, OnChanges {
    placeholder: string;
    identifier: string;
    options: SelectDropdownOption[];
    label: string;
    hint: string;
    selectCaret: string | TemplateRef<any>;
    requiredIndicator: string | boolean;
    tabindex: number;
    get autofocus(): boolean;
    set autofocus(autofocus: boolean);
    get allowClear(): boolean;
    set allowClear(allowClear: boolean);
    get multiple(): boolean;
    set multiple(multiple: boolean);
    get tagging(): boolean;
    set tagging(tagging: boolean);
    get allowAdditions(): boolean;
    set allowAdditions(allowAdditions: boolean);
    get disableDropdown(): boolean;
    set disableDropdown(disableDropdown: boolean);
    get selected(): any[];
    set selected(val: any[]);
    toggle: EventEmitter<void>;
    selection: EventEmitter<any[]>;
    activate: EventEmitter<Event>;
    keyup: EventEmitter<{
        event: KeyboardEvent;
        value?: string;
    }>;
    readonly inputElement?: ElementRef<HTMLInputElement>;
    get caretVisible(): boolean;
    get isNotTemplate(): boolean;
    selectedOptions: SelectDropdownOption[];
    private _selected;
    private _autofocus;
    private _allowClear;
    private _multiple;
    private _tagging;
    private _allowAdditions;
    private _disableDropdown;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    onKeyUp(event: KeyboardEvent): void;
    onGlobalKeyUp(event: KeyboardEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    onClick(event: Event): void;
    onToggle(): void;
    onOptionRemove(event: Event, option: SelectDropdownOption): void;
    private calcSelectedOptions;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<SelectInputComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<SelectInputComponent, "ngx-select-input", ["ngxSelectInput"], { "autofocus": "autofocus"; "allowClear": "allowClear"; "multiple": "multiple"; "tagging": "tagging"; "allowAdditions": "allowAdditions"; "disableDropdown": "disableDropdown"; "selected": "selected"; "placeholder": "placeholder"; "identifier": "identifier"; "options": "options"; "label": "label"; "hint": "hint"; "selectCaret": "selectCaret"; "requiredIndicator": "requiredIndicator"; "tabindex": "tabindex"; }, { "toggle": "toggle"; "selection": "selection"; "activate": "activate"; "keyup": "keyup"; }, never, ["ngx-input-hint"]>;
}

//# sourceMappingURL=select-input.component.d.ts.map