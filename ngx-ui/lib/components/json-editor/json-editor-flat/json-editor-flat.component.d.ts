import { QueryList, TemplateRef, SimpleChanges, ChangeDetectorRef, OnChanges, OnInit } from '@angular/core';
import { JsonEditorNodeFlatComponent } from './json-editor-node-flat/json-editor-node-flat.component';
import { SchemaValidatorService } from '../schema-validator.service';
import { JsonEditor } from '../json-editor';
import { JSONEditorSchema, JsonSchemaDataType } from '../json-editor.helper';
import { DialogService } from '../../dialog/dialog.service';
import { PropertyConfigComponent, PropertyConfigOptions } from './json-editor-node-flat/node-types/property-config/property-config.component';
import * as ɵngcc0 from '@angular/core';
export declare class JsonEditorFlatComponent extends JsonEditor implements OnInit, OnChanges {
    private dialogService;
    protected schemaValidatorService: SchemaValidatorService;
    protected cdr: ChangeDetectorRef;
    model: any;
    schema: JSONEditorSchema;
    typeCheckOverrides?: any;
    schemaBuilderMode?: boolean;
    formats?: string[];
    compressed: boolean;
    hideRoot: boolean;
    showKnownProperties: boolean;
    nodeElms: QueryList<JsonEditorNodeFlatComponent>;
    propertyConfigTmpl: TemplateRef<PropertyConfigComponent>;
    schemaRef: JSONEditorSchema;
    customFormats: JsonSchemaDataType[];
    constructor(dialogService: DialogService, schemaValidatorService: SchemaValidatorService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onPropertyConfig(): void;
    updateSchema(options: PropertyConfigOptions): void;
    private buildCustomFormats;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<JsonEditorFlatComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<JsonEditorFlatComponent, "ngx-json-editor-flat", never, { "schemaBuilderMode": "schemaBuilderMode"; "formats": "formats"; "compressed": "compressed"; "hideRoot": "hideRoot"; "showKnownProperties": "showKnownProperties"; "schema": "schema"; "model": "model"; "typeCheckOverrides": "typeCheckOverrides"; }, {}, ["nodeElms"], never>;
}

//# sourceMappingURL=json-editor-flat.component.d.ts.map