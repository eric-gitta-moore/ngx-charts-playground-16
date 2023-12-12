import { OnInit } from '@angular/core';
import { JsonEditorNode } from '../../json-editor-node';
import { DialogService } from '../../../dialog/dialog.service';
import { JSONEditorSchema } from '../../json-editor.helper';
import * as ɵngcc0 from '@angular/core';
export declare class JsonEditorNodeComponent extends JsonEditorNode implements OnInit {
    dialogMngr: DialogService;
    model: any;
    schema: JSONEditorSchema;
    typeCheckOverrides?: any;
    errors: any[];
    showKnownProperties: boolean;
    isDuplicated: boolean;
    placeholder: string;
    constructor(dialogMngr: DialogService);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<JsonEditorNodeComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<JsonEditorNodeComponent, "ngx-json-editor-node", never, { "showKnownProperties": "showKnownProperties"; "isDuplicated": "isDuplicated"; "model": "model"; "schema": "schema"; "typeCheckOverrides": "typeCheckOverrides"; "errors": "errors"; }, {}, never, never>;
}

//# sourceMappingURL=json-editor-node.component.d.ts.map