import { EventEmitter, OnInit, OnChanges, SimpleChanges, TemplateRef, ComponentRef } from '@angular/core';
import { JSONEditorSchema } from './json-editor.helper';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogService } from '../dialog/dialog.service';
import * as ɵngcc0 from '@angular/core';
export declare class JsonEditorNode implements OnInit, OnChanges {
    dialogMngr: DialogService;
    schema: JSONEditorSchema;
    model: any;
    required: boolean;
    inline: boolean;
    path: string;
    errors: any[];
    typeCheckOverrides?: any;
    showKnownProperties: boolean;
    modelChange: EventEmitter<any>;
    schemaUpdate: EventEmitter<JSONEditorSchema>;
    codeEditorTpl: TemplateRef<any>;
    requiredCache: any;
    expanded: boolean;
    ownErrors: any[];
    valid: boolean;
    childrenErrors: any[];
    childrenValid: boolean;
    editorDialog: ComponentRef<DialogComponent>;
    editorConfig: {
        lineNumbers: boolean;
        theme: string;
        mode: {
            label: string;
            name: string;
            json: boolean;
        };
    };
    editorModel: string;
    editorVisible: boolean;
    editorModes: any[];
    constructor(dialogMngr: DialogService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Inits the model if it is not defined
     */
    initModel(): void;
    /**
     * Process the errors input to figure out whether it or any of its children are invalid
     */
    processErrors(): void;
    /**
     * Updates the whole model and emits the change event
     *
     * @param value
     */
    updateModel(value: any): void;
    /**
     * Expand click event
     */
    onExpandClick(): void;
    /**
     * Opens the code editor dialog
     */
    openCodeEditor(): void;
    /**
     * Closes the code editor dialog
     */
    closeCodeEditor(): void;
    /**
     * Sets the editor mode and refreshes the editor
     */
    selectEditorMode(modeName: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<JsonEditorNode, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<JsonEditorNode, never, never, { "required": "required"; "inline": "inline"; "path": "path"; "showKnownProperties": "showKnownProperties"; "schema": "schema"; "model": "model"; "errors": "errors"; "typeCheckOverrides": "typeCheckOverrides"; }, { "modelChange": "modelChange"; "schemaUpdate": "schemaUpdate"; }, never>;
}

//# sourceMappingURL=json-editor-node.d.ts.map