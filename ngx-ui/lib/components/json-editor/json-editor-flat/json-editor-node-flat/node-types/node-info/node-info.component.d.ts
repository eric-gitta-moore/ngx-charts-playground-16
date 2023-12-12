import { EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class JsonEditorNodeInfoComponent {
    nameEditable: boolean;
    title: string;
    propertyName: string;
    description: string;
    type: string;
    examples: string[];
    compressed: boolean;
    propertyNameChange: EventEmitter<string>;
    updatePropertyName(name: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<JsonEditorNodeInfoComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<JsonEditorNodeInfoComponent, "ngx-json-editor-node-info", never, { "nameEditable": "nameEditable"; "compressed": "compressed"; "title": "title"; "propertyName": "propertyName"; "description": "description"; "type": "type"; "examples": "examples"; }, { "propertyNameChange": "propertyNameChange"; }, never, never>;
}

//# sourceMappingURL=node-info.component.d.ts.map