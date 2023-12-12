import { TemplateRef, OnInit, ChangeDetectorRef, SimpleChanges, OnChanges } from '@angular/core';
import { ObjectNode } from '../../../../node-types/object-node.component';
import { DialogService } from '../../../../../dialog/dialog.service';
import { JsonSchemaDataType, JSONEditorSchema } from '../../../../json-editor.helper';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { PropertyConfigOptions, PropertyConfigComponent } from '../property-config/property-config.component';
import * as ɵngcc0 from '@angular/core';
export declare class ObjectNodeFlatComponent extends ObjectNode implements OnInit, OnChanges {
    private dialogService;
    protected cdr: ChangeDetectorRef;
    propertyConfigTmpl: TemplateRef<PropertyConfigComponent>;
    level: number;
    schemaBuilderMode: boolean;
    formats: JsonSchemaDataType[];
    compressed: boolean;
    hideRoot: boolean;
    isDuplicated: boolean;
    indentationArray: number[];
    duplicatedFields: Map<string, string>;
    objectKeys: {
        (o: object): string[];
        (o: {}): string[];
    };
    constructor(dialogService: DialogService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onUpdatePropertyName(options: {
        id: string;
        name: string;
    }): void;
    onPropertyConfig(property: JSONEditorSchema, index: number): void;
    updateSchema(options: PropertyConfigOptions): void;
    addProperty(dataType: JsonSchemaDataType): void;
    deleteProperty(propName: string): void;
    drop(event: CdkDragDrop<string[]>): void;
    private swapSchemaProperties;
    private initSchemaProperties;
    private updateSchemaRefProperty;
    private updateSchemaPropertyName;
    private toggleRequiredValue;
    private updateRequiredProperties;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ObjectNodeFlatComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<ObjectNodeFlatComponent, "ngx-json-object-node-flat", never, { "formats": "formats"; "hideRoot": "hideRoot"; "isDuplicated": "isDuplicated"; "level": "level"; "schemaBuilderMode": "schemaBuilderMode"; "compressed": "compressed"; }, {}, never, never>;
}

//# sourceMappingURL=object-node-flat.component.d.ts.map