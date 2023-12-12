import { EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { SchemaValidatorService } from './schema-validator.service';
import { JSONEditorSchema } from './json-editor.helper';
import * as ɵngcc0 from '@angular/core';
export declare class JsonEditor implements OnChanges {
    protected schemaValidatorService: SchemaValidatorService;
    protected cdr: ChangeDetectorRef;
    model: any;
    schema: JSONEditorSchema;
    label: string;
    typeCheckOverrides?: any;
    schemaValidator?: (schema: any, ...args: any[]) => any[];
    showKnownProperties: boolean;
    modelChange: EventEmitter<any>;
    schemaUpdate: EventEmitter<JSONEditorSchema>;
    errors: any[];
    constructor(schemaValidatorService: SchemaValidatorService, cdr: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Model change callback. Validates the model and emits a change event
     *
     * @param model
     */
    modelChangedCallback(model: any): void;
    /**
     * Validates the model based on the schema
     *
     * @param schema
     * @param model
     */
    validate(schema: any, model: any): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<JsonEditor, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<JsonEditor, never, never, { "showKnownProperties": "showKnownProperties"; "schema": "schema"; "model": "model"; "label": "label"; "typeCheckOverrides": "typeCheckOverrides"; "schemaValidator": "schemaValidator"; }, { "modelChange": "modelChange"; "schemaUpdate": "schemaUpdate"; }, never>;
}

//# sourceMappingURL=json-editor.d.ts.map