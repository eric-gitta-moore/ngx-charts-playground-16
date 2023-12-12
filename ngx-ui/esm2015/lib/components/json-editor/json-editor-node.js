import { Input, EventEmitter, Output, TemplateRef, ViewChild, Directive } from '@angular/core';
import { createValueForSchema, inferType } from './json-editor.helper';
import { DialogService } from '../dialog/dialog.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../dialog/dialog.service';

const _c0 = ["codeEditorTpl"];
export class JsonEditorNode {
    constructor(dialogMngr) {
        this.dialogMngr = dialogMngr;
        this.required = false;
        this.inline = false;
        this.path = '';
        this.showKnownProperties = false;
        this.modelChange = new EventEmitter();
        this.schemaUpdate = new EventEmitter();
        this.requiredCache = {};
        this.expanded = true;
        this.valid = true;
        this.childrenValid = true;
        this.editorConfig = {
            lineNumbers: true,
            theme: 'dracula',
            mode: {
                label: 'Javascript',
                name: 'javascript',
                json: true
            }
        };
        this.editorModel = '';
        this.editorVisible = true;
        this.editorModes = [
            {
                label: 'Javascript',
                name: 'javascript',
                json: true
            },
            {
                label: 'YAML',
                name: 'yaml'
            },
            {
                label: 'Python',
                name: 'python'
            },
            {
                label: 'Powershell',
                name: 'powershell'
            },
            {
                label: 'HTML',
                name: 'htmlmixed'
            }
        ];
    }
    ngOnInit() {
        if (!this.schema) {
            this.schema = Object.assign({}, inferType(this.model, this.typeCheckOverrides));
        }
        if (this.schema.required) {
            for (const prop of this.schema.required) {
                this.requiredCache[prop] = true;
            }
        }
        if (Array.isArray(this.schema.type) && this.schema.type.length > 0) {
            if (!this.schema.$meta) {
                this.schema.$meta = {};
            }
            this.schema.$meta.type = [...this.schema.type];
            if (this.model !== undefined) {
                this.schema = Object.assign(Object.assign({}, this.schema), inferType(this.model, this.typeCheckOverrides, this.schema.$meta.type));
            }
            else {
                this.schema.type = this.schema.type[0];
                this.schema.$meta.currentType = this.schema.type;
            }
        }
        setTimeout(() => {
            this.initModel();
        });
    }
    ngOnChanges(changes) {
        if (changes.errors) {
            this.processErrors();
        }
    }
    /**
     * Inits the model if it is not defined
     */
    initModel() {
        if (this.model !== undefined) {
            return;
        }
        if (!this.schema) {
            return;
        }
        const value = createValueForSchema(this.schema);
        if (value !== undefined) {
            this.updateModel(value);
        }
    }
    /**
     * Process the errors input to figure out whether it or any of its children are invalid
     */
    processErrors() {
        this.ownErrors = [];
        this.childrenErrors = [];
        if (this.errors && this.errors.length) {
            this.ownErrors = this.errors.filter(e => {
                return e.dataPath === this.path;
            });
            this.childrenErrors = this.errors.filter(e => {
                return e.dataPath.startsWith(this.path);
            });
        }
        this.childrenValid = this.childrenErrors.length === 0;
        this.valid = this.ownErrors.length === 0;
    }
    /**
     * Updates the whole model and emits the change event
     *
     * @param value
     */
    updateModel(value) {
        this.model = value;
        this.modelChange.emit(this.model);
    }
    /**
     * Expand click event
     */
    onExpandClick() {
        this.expanded = !this.expanded;
    }
    /**
     * Opens the code editor dialog
     */
    openCodeEditor() {
        this.editorModel = this.model;
        this.editorDialog = this.dialogMngr.create({ template: this.codeEditorTpl, class: 'code-editor-dialog' });
    }
    /**
     * Closes the code editor dialog
     */
    closeCodeEditor() {
        this.dialogMngr.destroy(this.editorDialog);
    }
    /**
     * Sets the editor mode and refreshes the editor
     */
    selectEditorMode(modeName) {
        this.editorConfig.mode.name = modeName;
        this.editorConfig = Object.assign({}, this.editorConfig);
        this.editorVisible = false;
        setTimeout(() => {
            this.editorVisible = true;
        });
    }
}
JsonEditorNode.ɵfac = function JsonEditorNode_Factory(t) { return new (t || JsonEditorNode)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DialogService)); };
JsonEditorNode.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: JsonEditorNode, viewQuery: function JsonEditorNode_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.codeEditorTpl = _t.first);
    } }, inputs: { required: "required", inline: "inline", path: "path", showKnownProperties: "showKnownProperties", schema: "schema", model: "model", errors: "errors", typeCheckOverrides: "typeCheckOverrides" }, outputs: { modelChange: "modelChange", schemaUpdate: "schemaUpdate" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
JsonEditorNode.ctorParameters = () => [
    { type: DialogService }
];
JsonEditorNode.propDecorators = {
    schema: [{ type: Input }],
    model: [{ type: Input }],
    required: [{ type: Input }],
    inline: [{ type: Input }],
    path: [{ type: Input }],
    errors: [{ type: Input }],
    typeCheckOverrides: [{ type: Input }],
    showKnownProperties: [{ type: Input }],
    modelChange: [{ type: Output }],
    schemaUpdate: [{ type: Output }],
    codeEditorTpl: [{ type: ViewChild, args: ['codeEditorTpl',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(JsonEditorNode, [{
        type: Directive
    }], function () { return [{ type: ɵngcc1.DialogService }]; }, { required: [{
            type: Input
        }], inline: [{
            type: Input
        }], path: [{
            type: Input
        }], showKnownProperties: [{
            type: Input
        }], modelChange: [{
            type: Output
        }], schemaUpdate: [{
            type: Output
        }], schema: [{
            type: Input
        }], model: [{
            type: Input
        }], errors: [{
            type: Input
        }], typeCheckOverrides: [{
            type: Input
        }], codeEditorTpl: [{
            type: ViewChild,
            args: ['codeEditorTpl']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1lZGl0b3Itbm9kZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9qc29uLWVkaXRvci9qc29uLWVkaXRvci1ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxLQUFLLEVBQ0wsWUFBWSxFQUNaLE1BQU0sRUFJTixXQUFXLEVBQ1gsU0FBUyxFQUVULFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFvQixNQUFNLHNCQUFzQixDQUFDO0FBRXpGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFHekQsTUFBTSxPQUFPLGNBQWM7QUFBRyxJQXFFNUIsWUFBbUIsVUFBeUI7QUFBSSxRQUE3QixlQUFVLEdBQVYsVUFBVSxDQUFlO0FBQUMsUUFoRXBDLGFBQVEsR0FBRyxLQUFLLENBQUM7QUFDNUIsUUFDVyxXQUFNLEdBQUcsS0FBSyxDQUFDO0FBQzFCLFFBQ1csU0FBSSxHQUFHLEVBQUUsQ0FBQztBQUNyQixRQUtXLHdCQUFtQixHQUFHLEtBQUssQ0FBQztBQUN2QyxRQUNZLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDaEUsUUFDWSxpQkFBWSxHQUFtQyxJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzlFLFFBR0Usa0JBQWEsR0FBUSxFQUFFLENBQUM7QUFDMUIsUUFBRSxhQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLFFBRUUsVUFBSyxHQUFHLElBQUksQ0FBQztBQUNmLFFBRUUsa0JBQWEsR0FBRyxJQUFJLENBQUM7QUFDdkIsUUFFRSxpQkFBWSxHQUFHO0FBQ2pCLFlBQUksV0FBVyxFQUFFLElBQUk7QUFDckIsWUFBSSxLQUFLLEVBQUUsU0FBUztBQUNwQixZQUFJLElBQUksRUFBRTtBQUNWLGdCQUFNLEtBQUssRUFBRSxZ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O0FBQ0gsSUFDRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUsZ0JBQWdCLENBQUMsUUFBZ0I7QUFBSSxRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0FBQzNDLFFBQUksSUFBSSxDQUFDLFlBQVkscUJBQVEsSUFBSSxDQUFDLFlBQVksQ0FBRSxDQUFDO0FBQ2pELFFBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7QUFDL0IsUUFDSSxVQUFVLENBQUMsR0FBRyxFQUFFO0FBQ3BCLFlBQU0sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDaEMsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUNIOzBDQXBNQyxTQUFTOzs7Ozs7dVVBQ1I7QUFBQztBQUF3QyxZQUhsQyxhQUFhO0FBQUc7QUFBRztBQUV6QixxQkFFQSxLQUFLO0FBQUssb0JBRVYsS0FBSztBQUFLLHVCQUVWLEtBQUs7QUFBSyxxQkFFVixLQUFLO0FBQUssbUJBRVYsS0FBSztBQUFLLHFCQUVWLEtBQUs7QUFBSyxpQ0FFVixLQUFLO0FBQUssa0NBRVYsS0FBSztBQUFLLDBCQUVWLE1BQU07QUFBSywyQkFFWCxNQUFNO0FBQUssNEJBRVgsU0FBUyxTQUFDLGVBQWU7QUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIElucHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBjcmVhdGVWYWx1ZUZvclNjaGVtYSwgaW5mZXJUeXBlLCBKU09ORWRpdG9yU2NoZW1hIH0gZnJvbSAnLi9qc29uLWVkaXRvci5oZWxwZXInO1xuaW1wb3J0IHsgRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vZGlhbG9nL2RpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gJy4uL2RpYWxvZy9kaWFsb2cuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIEpzb25FZGl0b3JOb2RlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBzY2hlbWE6IEpTT05FZGl0b3JTY2hlbWE7XG5cbiAgQElucHV0KCkgbW9kZWw6IGFueTtcblxuICBASW5wdXQoKSByZXF1aXJlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGlubGluZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHBhdGggPSAnJztcblxuICBASW5wdXQoKSBlcnJvcnM6IGFueVtdO1xuXG4gIEBJbnB1dCgpIHR5cGVDaGVja092ZXJyaWRlcz86IGFueTtcblxuICBASW5wdXQoKSBzaG93S25vd25Qcm9wZXJ0aWVzID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIG1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KCkgc2NoZW1hVXBkYXRlOiBFdmVudEVtaXR0ZXI8SlNPTkVkaXRvclNjaGVtYT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZCgnY29kZUVkaXRvclRwbCcpIGNvZGVFZGl0b3JUcGw6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgcmVxdWlyZWRDYWNoZTogYW55ID0ge307XG4gIGV4cGFuZGVkID0gdHJ1ZTtcblxuICBvd25FcnJvcnM6IGFueVtdO1xuICB2YWxpZCA9IHRydWU7XG5cbiAgY2hpbGRyZW5FcnJvcnM6IGFueVtdO1xuICBjaGlsZHJlblZhbGlkID0gdHJ1ZTtcblxuICBlZGl0b3JEaWFsb2c6IENvbXBvbmVudFJlZjxEaWFsb2dDb21wb25lbnQ+O1xuICBlZGl0b3JDb25maWcgPSB7XG4gICAgbGluZU51bWJlcnM6IHRydWUsXG4gICAgdGhlbWU6ICdkcmFjdWxhJyxcbiAgICBtb2RlOiB7XG4gICAgICBsYWJlbDogJ0phdmFzY3JpcHQnLFxuICAgICAgbmFtZTogJ2phdmFzY3JpcHQnLFxuICAgICAganNvbjogdHJ1ZVxuICAgIH1cbiAgfTtcbiAgZWRpdG9yTW9kZWwgPSAnJztcbiAgZWRpdG9yVmlzaWJsZSA9IHRydWU7XG5cbiAgZWRpdG9yTW9kZXM6IGFueVtdID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnSmF2YXNjcmlwdCcsXG4gICAgICBuYW1lOiAnamF2YXNjcmlwdCcsXG4gICAgICBqc29uOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ1lBTUwnLFxuICAgICAgbmFtZTogJ3lhbWwnXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ1B5dGhvbicsXG4gICAgICBuYW1lOiAncHl0aG9uJ1xuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdQb3dlcnNoZWxsJyxcbiAgICAgIG5hbWU6ICdwb3dlcnNoZWxsJ1xuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdIVE1MJyxcbiAgICAgIG5hbWU6ICdodG1sbWl4ZWQnXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dNbmdyOiBEaWFsb2dTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5zY2hlbWEpIHtcbiAgICAgIHRoaXMuc2NoZW1hID0ge1xuICAgICAgICAuLi5pbmZlclR5cGUodGhpcy5tb2RlbCwgdGhpcy50eXBlQ2hlY2tPdmVycmlkZXMpXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNjaGVtYS5yZXF1aXJlZCkge1xuICAgICAgZm9yIChjb25zdCBwcm9wIG9mIHRoaXMuc2NoZW1hLnJlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZWRDYWNoZVtwcm9wXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5zY2hlbWEudHlwZSkgJiYgdGhpcy5zY2hlbWEudHlwZS5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoIXRoaXMuc2NoZW1hLiRtZXRhKSB7XG4gICAgICAgIHRoaXMuc2NoZW1hLiRtZXRhID0ge307XG4gICAgICB9XG4gICAgICB0aGlzLnNjaGVtYS4kbWV0YS50eXBlID0gWy4uLnRoaXMuc2NoZW1hLnR5cGVdO1xuXG4gICAgICBpZiAodGhpcy5tb2RlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2NoZW1hID0ge1xuICAgICAgICAgIC4uLnRoaXMuc2NoZW1hLFxuICAgICAgICAgIC4uLmluZmVyVHlwZSh0aGlzLm1vZGVsLCB0aGlzLnR5cGVDaGVja092ZXJyaWRlcywgdGhpcy5zY2hlbWEuJG1ldGEudHlwZSlcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2NoZW1hLnR5cGUgPSB0aGlzLnNjaGVtYS50eXBlWzBdO1xuICAgICAgICB0aGlzLnNjaGVtYS4kbWV0YS5jdXJyZW50VHlwZSA9IHRoaXMuc2NoZW1hLnR5cGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmluaXRNb2RlbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmVycm9ycykge1xuICAgICAgdGhpcy5wcm9jZXNzRXJyb3JzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRzIHRoZSBtb2RlbCBpZiBpdCBpcyBub3QgZGVmaW5lZFxuICAgKi9cbiAgaW5pdE1vZGVsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1vZGVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc2NoZW1hKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWU6IGFueSA9IGNyZWF0ZVZhbHVlRm9yU2NoZW1hKHRoaXMuc2NoZW1hKTtcblxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZU1vZGVsKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJvY2VzcyB0aGUgZXJyb3JzIGlucHV0IHRvIGZpZ3VyZSBvdXQgd2hldGhlciBpdCBvciBhbnkgb2YgaXRzIGNoaWxkcmVuIGFyZSBpbnZhbGlkXG4gICAqL1xuICBwcm9jZXNzRXJyb3JzKCk6IHZvaWQge1xuICAgIHRoaXMub3duRXJyb3JzID0gW107XG4gICAgdGhpcy5jaGlsZHJlbkVycm9ycyA9IFtdO1xuXG4gICAgaWYgKHRoaXMuZXJyb3JzICYmIHRoaXMuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgdGhpcy5vd25FcnJvcnMgPSB0aGlzLmVycm9ycy5maWx0ZXIoZSA9PiB7XG4gICAgICAgIHJldHVybiBlLmRhdGFQYXRoID09PSB0aGlzLnBhdGg7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jaGlsZHJlbkVycm9ycyA9IHRoaXMuZXJyb3JzLmZpbHRlcihlID0+IHtcbiAgICAgICAgcmV0dXJuIGUuZGF0YVBhdGguc3RhcnRzV2l0aCh0aGlzLnBhdGgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuY2hpbGRyZW5WYWxpZCA9IHRoaXMuY2hpbGRyZW5FcnJvcnMubGVuZ3RoID09PSAwO1xuICAgIHRoaXMudmFsaWQgPSB0aGlzLm93bkVycm9ycy5sZW5ndGggPT09IDA7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgd2hvbGUgbW9kZWwgYW5kIGVtaXRzIHRoZSBjaGFuZ2UgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqL1xuICB1cGRhdGVNb2RlbCh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IHZhbHVlO1xuICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdCh0aGlzLm1vZGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBhbmQgY2xpY2sgZXZlbnRcbiAgICovXG4gIG9uRXhwYW5kQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBjb2RlIGVkaXRvciBkaWFsb2dcbiAgICovXG4gIG9wZW5Db2RlRWRpdG9yKCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdG9yTW9kZWwgPSB0aGlzLm1vZGVsO1xuICAgIHRoaXMuZWRpdG9yRGlhbG9nID0gdGhpcy5kaWFsb2dNbmdyLmNyZWF0ZSh7IHRlbXBsYXRlOiB0aGlzLmNvZGVFZGl0b3JUcGwsIGNsYXNzOiAnY29kZS1lZGl0b3ItZGlhbG9nJyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIGNvZGUgZWRpdG9yIGRpYWxvZ1xuICAgKi9cbiAgY2xvc2VDb2RlRWRpdG9yKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nTW5nci5kZXN0cm95KHRoaXMuZWRpdG9yRGlhbG9nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBlZGl0b3IgbW9kZSBhbmQgcmVmcmVzaGVzIHRoZSBlZGl0b3JcbiAgICovXG4gIHNlbGVjdEVkaXRvck1vZGUobW9kZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZWRpdG9yQ29uZmlnLm1vZGUubmFtZSA9IG1vZGVOYW1lO1xuICAgIHRoaXMuZWRpdG9yQ29uZmlnID0geyAuLi50aGlzLmVkaXRvckNvbmZpZyB9O1xuICAgIHRoaXMuZWRpdG9yVmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmVkaXRvclZpc2libGUgPSB0cnVlO1xuICAgIH0pO1xuICB9XG59XG4iXX0=