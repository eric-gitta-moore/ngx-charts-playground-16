import { QueryList, ChangeDetectorRef } from '@angular/core';
import { JsonEditor } from '../json-editor';
import { SchemaValidatorService } from '../schema-validator.service';
import { JsonEditorNodeComponent } from './json-editor-node/json-editor-node.component';
import { JSONEditorSchema } from '../json-editor.helper';
import * as ɵngcc0 from '@angular/core';
export declare class JsonEditorComponent extends JsonEditor {
    protected schemaValidatorService: SchemaValidatorService;
    protected cdr: ChangeDetectorRef;
    model: any;
    schema: JSONEditorSchema;
    typeCheckOverrides?: any;
    nodeElms: QueryList<JsonEditorNodeComponent>;
    constructor(schemaValidatorService: SchemaValidatorService, cdr: ChangeDetectorRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<JsonEditorComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<JsonEditorComponent, "ngx-json-editor", never, { "model": "model"; "schema": "schema"; "typeCheckOverrides": "typeCheckOverrides"; }, {}, ["nodeElms"], never>;
}

//# sourceMappingURL=json-editor.component.d.ts.map