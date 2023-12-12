import { TemplateRef } from '@angular/core';
import { SelectDropdownOption } from './select-dropdown-option.interface';
import * as ɵngcc0 from '@angular/core';
export declare class SelectOptionDirective implements SelectDropdownOption {
    name: string;
    value: any;
    get disabled(): boolean;
    set disabled(disabled: boolean);
    get hidden(): boolean;
    set hidden(hidden: boolean);
    _optionTemplateInput: TemplateRef<any>;
    _optionTemplateQuery: TemplateRef<any>;
    get optionTemplate(): TemplateRef<any>;
    _inputTemplateInput: TemplateRef<any>;
    _inputTemplateQuery: TemplateRef<any>;
    get inputTemplate(): TemplateRef<any>;
    private _disabled;
    private _hidden;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<SelectOptionDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<SelectOptionDirective, "ngx-select-option", ["ngxSelectOption"], { "name": "name"; "disabled": "disabled"; "hidden": "hidden"; "value": "value"; "_optionTemplateInput": "optionTemplate"; "_inputTemplateInput": "inputTemplate"; }, {}, ["_optionTemplateQuery", "_inputTemplateQuery"]>;
}

//# sourceMappingURL=select-option.directive.d.ts.map