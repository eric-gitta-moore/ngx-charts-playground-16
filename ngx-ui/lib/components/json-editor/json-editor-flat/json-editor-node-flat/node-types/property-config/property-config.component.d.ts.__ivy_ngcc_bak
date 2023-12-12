import { OnInit, EventEmitter } from '@angular/core';
import { DialogService } from '../../../../../dialog/dialog.service';
import { JSONEditorSchema, JsonSchemaDataType } from '../../../../json-editor.helper';
export interface PropertyConfigOptions {
    required: boolean;
    index: number;
    newProperty: JSONEditorSchema;
    oldProperty: JSONEditorSchema;
}
export declare class PropertyConfigComponent implements OnInit {
    private dialogService;
    property: JSONEditorSchema;
    index?: number;
    schema: JSONEditorSchema;
    formats: JsonSchemaDataType[];
    arrayItem?: boolean;
    rootItem?: boolean;
    updateSchema: EventEmitter<PropertyConfigOptions>;
    propTypes: string[];
    editableProperty: JSONEditorSchema;
    required: boolean;
    newEnumValue: string;
    constructor(dialogService: DialogService);
    ngOnInit(): void;
    applyChanges(): void;
    updateType(type: string): void;
    updateExamples(examples: string[]): void;
    updateFormat(format: string): void;
    addEnumValue(): void;
    updateDefault(enumValue: string): void;
    removeEnumValue(val: string): void;
    private cleanUpPropertyConstrains;
    private setRequired;
}
