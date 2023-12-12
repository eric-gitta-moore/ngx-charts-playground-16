import { OnInit, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { JsonEditorNode } from '../../json-editor-node';
import { DialogService } from '../../../dialog/dialog.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { JSONEditorSchema, JsonSchemaDataType } from '../../json-editor.helper';
import * as ɵngcc0 from '@angular/core';
export declare class JsonEditorNodeFlatComponent extends JsonEditorNode implements OnInit, OnChanges {
    dialogMngr: DialogService;
    private domSanitizer;
    model: any;
    schema: JSONEditorSchema;
    typeCheckOverrides?: any;
    errors: any[];
    label: string;
    level: number;
    schemaBuilderMode?: boolean;
    schemaRef?: JSONEditorSchema;
    formats: JsonSchemaDataType[];
    arrayItem: boolean;
    hideRoot: boolean;
    arrayName: string;
    compressed: boolean;
    indentationArray: number[];
    showKnownProperties: boolean;
    isDuplicated: boolean;
    updatePropertyNameEvent: EventEmitter<{
        id: string | number;
        name: string;
    }>;
    requiredIndicator: SafeHtml;
    nextLevel: number;
    constructor(dialogMngr: DialogService, domSanitizer: DomSanitizer);
    ngOnChanges(changes: SimpleChanges): void;
    updatePropertyName(id: string | number, name: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<JsonEditorNodeFlatComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<JsonEditorNodeFlatComponent, "ngx-json-editor-node-flat", never, { "arrayItem": "arrayItem"; "hideRoot": "hideRoot"; "arrayName": "arrayName"; "showKnownProperties": "showKnownProperties"; "isDuplicated": "isDuplicated"; "model": "model"; "schema": "schema"; "typeCheckOverrides": "typeCheckOverrides"; "errors": "errors"; "label": "label"; "level": "level"; "schemaBuilderMode": "schemaBuilderMode"; "schemaRef": "schemaRef"; "formats": "formats"; "compressed": "compressed"; "indentationArray": "indentationArray"; }, { "updatePropertyNameEvent": "updatePropertyNameEvent"; }, never, ["[cdkDragHandle]", "[node-options]"]>;
}

//# sourceMappingURL=json-editor-node-flat.component.d.ts.map