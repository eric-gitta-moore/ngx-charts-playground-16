import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { JsonSchemaDataType, JSONEditorSchema } from '../json-editor.helper';
import * as ɵngcc0 from '@angular/core';
export declare class ArrayNode implements OnChanges {
    schema: JSONEditorSchema;
    model: any[];
    required: boolean;
    expanded: boolean;
    path: string;
    errors: any[];
    typeCheckOverrides?: any;
    schemaRef: JSONEditorSchema;
    showKnownProperties: boolean;
    modelChange: EventEmitter<any[]>;
    schemaUpdate: EventEmitter<JSONEditorSchema>;
    requiredCache: any;
    schemas: JSONEditorSchema[];
    dataTypes: JsonSchemaDataType[];
    dataTypeMap: Record<string, any>;
    _array: ArrayConstructor;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Updates an array item of the model and emits the change event
     *
     * @param index
     * @param value
     */
    updateArrayItem(index: number, value: any): void;
    /**
     * Adds a new item to the model
     */
    addArrayItem(dataType?: JsonSchemaDataType): void;
    /**
     * Deletes an item from the array
     *
     * @param index
     */
    deleteArrayItem(index: number): void;
    /**
     * Track By function for the array ittierator
     *
     * @param index
     * @param value
     */
    arrayTrackBy(index: number): number;
    /**
     *
     * @param property
     * @param type
     */
    changeItemType(index: number, type: string): void;
    /**
     * Infers the schema type for each item in the array
     */
    private initSchemasTypeByModelValue;
    /**
     * Updates the icons in the schemas
     */
    private updateIcons;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ArrayNode, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<ArrayNode, never, never, { "required": "required"; "showKnownProperties": "showKnownProperties"; "model": "model"; "schema": "schema"; "expanded": "expanded"; "path": "path"; "errors": "errors"; "typeCheckOverrides": "typeCheckOverrides"; "schemaRef": "schemaRef"; }, { "modelChange": "modelChange"; "schemaUpdate": "schemaUpdate"; }, never>;
}

//# sourceMappingURL=array-node.component.d.ts.map