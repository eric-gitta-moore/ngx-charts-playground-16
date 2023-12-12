import { TemplateRef, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { ArrayNode } from '../../../../node-types/array-node.component';
import { JSONEditorSchema, JsonSchemaDataType } from '../../../../json-editor.helper';
import { DialogService } from '../../../../../dialog/dialog.service';
import { PropertyConfigOptions, PropertyConfigComponent } from '../property-config/property-config.component';
import * as ɵngcc0 from '@angular/core';
export declare class ArrayNodeFlatComponent extends ArrayNode implements OnInit, OnChanges {
    private dialogService;
    propertyConfigTmpl: TemplateRef<PropertyConfigComponent>;
    level: number;
    schemaBuilderMode: boolean;
    formats: JsonSchemaDataType[];
    compressed: boolean;
    hideRoot: boolean;
    isDuplicated: boolean;
    indentationArray: number[];
    constructor(dialogService: DialogService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onPropertyConfig(item: JSONEditorSchema, index: number): void;
    updateSchema(options: PropertyConfigOptions): void;
    addArrayItem(dataType?: JsonSchemaDataType): void;
    deleteArrayItem(index: number): void;
    addDefaultItemForSchemaBuilder(dataType: JsonSchemaDataType): void;
    private removeDefaultItemForSchemaBuilder;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ArrayNodeFlatComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<ArrayNodeFlatComponent, "ngx-json-array-node-flat", never, { "hideRoot": "hideRoot"; "isDuplicated": "isDuplicated"; "level": "level"; "schemaBuilderMode": "schemaBuilderMode"; "formats": "formats"; "compressed": "compressed"; }, {}, never, never>;
}

//# sourceMappingURL=array-node-flat.component.d.ts.map