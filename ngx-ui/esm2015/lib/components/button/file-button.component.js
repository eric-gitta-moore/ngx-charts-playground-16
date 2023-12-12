import { Component, Input, Output, EventEmitter, NgZone, ViewEncapsulation, ContentChild, TemplateRef, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { FileUploader } from '@swimlane/ng2-file-upload';
import { id } from '../../utils/id/id.util';
import { FileButtonStyleType } from './file-button-style.type';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@swimlane/ng2-file-upload';

const _c0 = ["dropzoneTemplate"];
const _c1 = ["fileInput"];
function FileButtonComponent_div_0_ng_template_1_Template(rf, ctx) { }
const _c2 = function (a0) { return { $implicit: a0 }; };
function FileButtonComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵlistener("fileOver", function FileButtonComponent_div_0_Template_div_fileOver_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.fileOverBase($event); });
    ɵngcc0.ɵɵtemplate(1, FileButtonComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("file-over", ctx_r0.fileOverDropzone);
    ɵngcc0.ɵɵproperty("uploader", ctx_r0.uploader);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.dropzoneTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(5, _c2, ctx_r0.uploader));
} }
function FileButtonComponent_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 12);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r6.fileName, " ");
} }
function FileButtonComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 4);
    ɵngcc0.ɵɵelementStart(1, "div", 5);
    ɵngcc0.ɵɵelement(2, "input", 6, 7);
    ɵngcc0.ɵɵelementStart(4, "label", 8);
    ɵngcc0.ɵɵprojection(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, FileButtonComponent_div_1_span_6_Template, 2, 1, "span", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(7, "div", 10);
    ɵngcc0.ɵɵelement(8, "span", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r1.cssClasses);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", ctx_r1.isDisabled)("multiple", ctx_r1.multiple)("id", ctx_r1.id + "-input")("name", ctx_r1.name + "-input")("uploader", ctx_r1.uploader);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵclassProp("disabled", ctx_r1.isDisabled)("btn", ctx_r1.styleType === ctx_r1.FileButtonStyleType.standard);
    ɵngcc0.ɵɵattribute("for", ctx_r1.id + "-input");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.fileName);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("width", ctx_r1.progress, "%");
} }
const _c3 = ["*"];
export class FileButtonComponent {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        this.id = `input-${id()}`;
        this.styleType = FileButtonStyleType.standard;
        this.afterAddingFile = new EventEmitter();
        this.beforeUploadItem = new EventEmitter();
        this.successItem = new EventEmitter();
        this.errorItem = new EventEmitter();
        this.progressAll = new EventEmitter();
        this.FileButtonStyleType = FileButtonStyleType;
        this.progress = 0;
        this.fileName = '';
        this.fileOverDropzone = false;
        this._isItemSuccessful = false;
        this._disabled = false;
        this._multiple = false;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this._disabled = coerceBooleanProperty(disabled);
    }
    get multiple() {
        return this._multiple;
    }
    set multiple(multiple) {
        this._multiple = coerceBooleanProperty(multiple);
    }
    get isDisabled() {
        return this.disabled || this.uploader.isUploading;
    }
    get cssClasses() {
        return {
            'ngx-file-button': true,
            'standard-style': this.styleType === FileButtonStyleType.standard,
            'progress-style': this.styleType === FileButtonStyleType.progress,
            'show-progress': this.uploader && this.uploader.options.isHTML5,
            success: this._isItemSuccessful,
            active: this.uploader && this.uploader.isUploading
        };
    }
    ngOnInit() {
        if (!this.uploader && !this.options) {
            throw new Error('You must pass either an uploader instance or options.');
        }
        // if options were passed, init a new uploader
        if (!this.uploader && this.options) {
            this.uploader = new FileUploader(this.options);
        }
        // always remove after upload for this case
        this.uploader.options.removeAfterUpload = true;
        this.uploader.onAfterAddingFile = this.onAfterAddingFile.bind(this);
        this.uploader.onBeforeUploadItem = this.onBeforeUploadItem.bind(this);
        this.uploader.onProgressAll = this.onProgressAll.bind(this);
        this.uploader.onSuccessItem = this.onSuccessItem.bind(this);
        this.uploader.onErrorItem = this.onErrorItem.bind(this);
    }
    onAfterAddingFile(fileItem) {
        this._ngZone.run(() => {
            this.fileName = fileItem.file.name;
            this.afterAddingFile.emit({ fileItem });
        });
    }
    onBeforeUploadItem(fileItem) {
        this._ngZone.run(() => {
            this.beforeUploadItem.emit({ fileItem });
        });
    }
    onErrorItem(response, status, headers) {
        this.errorItem.emit({ response, status, headers });
    }
    onProgressAll(progress) {
        this._ngZone.run(() => {
            this.progress = progress;
            this.progressAll.emit({ progress });
        });
    }
    onSuccessItem(item, response, status, headers) {
        this._ngZone.run(() => {
            this._isItemSuccessful = true;
            setTimeout(() => {
                this.fileName = '';
                this._isItemSuccessful = false;
            }, 2500);
            this.successItem.emit({ item, response, status, headers });
        });
    }
    fileOverBase(event) {
        this.fileOverDropzone = event;
    }
    clearInput() {
        this.fileInput.nativeElement.value = '';
    }
}
FileButtonComponent.ɵfac = function FileButtonComponent_Factory(t) { return new (t || FileButtonComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
FileButtonComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: FileButtonComponent, selectors: [["ngx-file-button"]], contentQueries: function FileButtonComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, _c0, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropzoneTemplate = _t.first);
    } }, viewQuery: function FileButtonComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.fileInput = _t.first);
    } }, inputs: { id: "id", styleType: "styleType", disabled: "disabled", multiple: "multiple", uploader: "uploader", name: "name", options: "options" }, outputs: { afterAddingFile: "afterAddingFile", beforeUploadItem: "beforeUploadItem", successItem: "successItem", errorItem: "errorItem", progressAll: "progressAll" }, exportAs: ["ngxFileButton"], ngContentSelectors: _c3, decls: 2, vars: 2, consts: [["ng2FileDrop", "", 3, "file-over", "uploader", "fileOver", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["ng2FileDrop", "", 3, "uploader", "fileOver"], ["ng2FileDrop", "", 3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], [1, "ngx-file-button-button"], ["ng2FileSelect", "", "type", "file", 1, "ngx-file-button-input", 3, "disabled", "multiple", "id", "name", "uploader"], ["fileInput", ""], [1, "ngx-file-button-label"], ["class", "ngx-file-button-text", 4, "ngIf"], [1, "ngx-file-button-fill"], [1, "icon-check"], [1, "ngx-file-button-text"]], template: function FileButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, FileButtonComponent_div_0_Template, 2, 7, "div", 0);
        ɵngcc0.ɵɵtemplate(1, FileButtonComponent_div_1_Template, 9, 14, "div", 1);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.dropzoneTemplate);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.dropzoneTemplate);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.FileDropDirective, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgClass, ɵngcc2.FileSelectDirective], styles: ["button{box-sizing:border-box;color:inherit;cursor:pointer;display:inline-block;position:relative;text-align:center;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;font:inherit;background:transparent;border:none;text-shadow:1px 1px rgba(0,0,0,.07)}button:active,button:focus{outline:none}.btn{box-sizing:border-box;color:#fff;display:inline-block;padding:.35em .55em;position:relative;text-align:center;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;font:inherit;font-size:.9em;font-weight:700;outline:none;line-height:1em;background:#455066;border:1px solid transparent;border-radius:2px;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);transition:background-color .2s,box-shadow .2s}.btn .icon,.btn .ngx-icon{font-weight:400;vertical-align:middle;line-height:1em;font-size:.9em}.btn .icon:before,.btn .ngx-icon:before{font-weight:inherit}.btn .icon.has-text,.btn .icon.has-text-right,.btn .ngx-icon.has-text,.btn .ngx-icon.has-text-right{margin-right:.2em}.btn .icon.has-text-left,.btn .ngx-icon.has-text-left{margin-left:.2em}.btn::-moz-focus-inner{border:0;padding:0}.btn:focus{outline:none;box-shadow:0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12)}.btn:active:hover:focus:not(.disabled),.btn:active:hover:focus:not([disabled]){cursor:pointer;background:#313847}.btn:active:hover:focus:not(.disabled).btn-primary,.btn:active:hover:focus:not([disabled]).btn-primary{background-color:#1483ff}.btn:active:hover:focus:not(.disabled).btn-warning,.btn:active:hover:focus:not([disabled]).btn-warning{background-color:#ffa814}.btn:active:hover:focus:not(.disabled).btn-danger,.btn:active:hover:focus:not([disabled]).btn-danger{background-color:#ff4514}.btn:active:hover:focus:not(.disabled).btn-link,.btn:active:hover:focus:not([disabled]).btn-link{background-color:transparent}.btn:active:hover:focus:not(.disabled).btn-bordered,.btn:active:hover:focus:not([disabled]).btn-bordered{border-color:#94c6ff;color:#94c6ff}.btn:active,.btn:focus,.btn:hover{text-decoration:none}.btn.small{font-size:.6em}.btn.large{font-size:1.3em}.btn.btn-primary{background-color:#479eff}.btn.btn-primary.btn-primary-gradient{background:linear-gradient(125.43deg,#54cdfc 10.86%,#479eff 49.11%)}.btn.btn-warning{background-color:#ffbb47;color:#07080b}.btn.btn-danger{background-color:#ff6d47}.btn.btn-link{background-color:transparent;box-shadow:none}.btn.btn-bordered,.btn.btn-primary.btn-bordered{border:1px solid #479eff;color:#479eff;background-color:transparent;box-shadow:none}.btn.btn-bordered.disabled-button,.btn.btn-primary.btn-bordered.disabled-button{opacity:.5}.btn.btn-bordered.disabled-button .button,.btn.btn-primary.btn-bordered.disabled-button .button{opacity:1}.btn.btn-default.btn-bordered{border:1px solid #fff;color:#fff;background-color:transparent;box-shadow:none}.btn.btn-default.btn-bordered:hover{border-color:#1483ff!important;color:#1483ff!important}.btn.btn-default.btn-bordered.disabled-button{opacity:.5}.btn.btn-default.btn-bordered.disabled-button .button{opacity:1}.btn.btn-file{cursor:pointer;padding:0}.btn.btn-file label{display:block;cursor:pointer;padding:.35em .75em}.btn.btn-file[disabled] label{cursor:not-allowed}.btn.btn-file input[type=file]{pointer-events:none;position:absolute;left:-9999px}.ngx-file-button{display:inline-block;box-sizing:border-box;position:relative}.ngx-file-button .ngx-file-button-input{position:absolute;left:-9999px}.ngx-file-button .ngx-file-button-label{cursor:pointer}.ngx-file-button.standard-style .icon-check{display:none}.ngx-file-button.standard-style .ngx-file-button-text{font-size:.9rem;margin-left:8px;color:#696969}.ngx-file-button.progress-style{min-width:150px;text-align:center;transition:all .3s ease .3s;max-height:50px;overflow:hidden}.ngx-file-button.progress-style .ngx-file-button-button{width:100%;background:#455066;border:none;border-radius:50px;padding:5px 0;transition:all .3s ease;position:relative;margin:0}.ngx-file-button.progress-style .ngx-file-button-button:focus:not(.disabled),.ngx-file-button.progress-style .ngx-file-button-button:focus:not([disabled]),.ngx-file-button.progress-style .ngx-file-button-button:hover:not(.disabled),.ngx-file-button.progress-style .ngx-file-button-button:hover:not([disabled]){background:#313847}.ngx-file-button.progress-style .ngx-file-button-button .ngx-file-button-label{color:#cfcfcf;font-size:18px;font-weight:400;line-height:40px;max-height:40px;transition:all .3s ease;cursor:pointer;display:block}.ngx-file-button.progress-style .ngx-file-button-button.disabled .ngx-file-button-label,.ngx-file-button.progress-style .ngx-file-button-button[disabled] .ngx-file-button-label{cursor:not-allowed}.ngx-file-button.progress-style .ngx-file-button-button .ngx-file-button-text{display:none}.ngx-file-button.progress-style .ngx-file-button-fill{position:absolute;top:0;left:0;bottom:0;right:0;width:0;background:#479eff;border-radius:50px;display:none}.ngx-file-button.progress-style .icon-check{font-size:25px;color:#cfcfcf;position:absolute;top:0;left:0;right:0;bottom:0;line-height:50px;transform:scale(0)}.ngx-file-button.progress-style.active{padding:0}.ngx-file-button.progress-style.active .ngx-file-button-button{background:#696969;margin-top:25px}.ngx-file-button.progress-style.active .ngx-file-button-fill{display:block;margin-top:25px;transition:all .1s ease .1s}.ngx-file-button.progress-style.active .ngx-file-button-label{display:none}.ngx-file-button.progress-style.success .ngx-file-button-button{margin:0;padding:25px;width:50px;background:#479eff}.ngx-file-button.progress-style.success .ngx-file-button-fill,.ngx-file-button.progress-style.success .ngx-file-button-label{display:none}.ngx-file-button.progress-style.success .icon-check{transform:scale(1);transition:all .3s ease .3s}"], encapsulation: 2, changeDetection: 0 });
FileButtonComponent.ctorParameters = () => [
    { type: NgZone }
];
FileButtonComponent.propDecorators = {
    id: [{ type: Input }],
    name: [{ type: Input }],
    styleType: [{ type: Input }],
    uploader: [{ type: Input }],
    options: [{ type: Input }],
    disabled: [{ type: Input }],
    multiple: [{ type: Input }],
    afterAddingFile: [{ type: Output }],
    beforeUploadItem: [{ type: Output }],
    successItem: [{ type: Output }],
    errorItem: [{ type: Output }],
    progressAll: [{ type: Output }],
    dropzoneTemplate: [{ type: ContentChild, args: ['dropzoneTemplate',] }],
    fileInput: [{ type: ViewChild, args: ['fileInput',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(FileButtonComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxFileButton',
                selector: 'ngx-file-button',
                template: "<div\n  *ngIf=\"dropzoneTemplate\"\n  ng2FileDrop\n  [class.file-over]=\"fileOverDropzone\"\n  [uploader]=\"uploader\"\n  (fileOver)=\"fileOverBase($event)\"\n>\n  <ng-template ng2FileDrop [ngTemplateOutlet]=\"dropzoneTemplate\" [ngTemplateOutletContext]=\"{ $implicit: uploader }\">\n  </ng-template>\n</div>\n\n<div *ngIf=\"!dropzoneTemplate\" [ngClass]=\"cssClasses\">\n  <div class=\"ngx-file-button-button\">\n    <input\n      #fileInput\n      ng2FileSelect\n      type=\"file\"\n      class=\"ngx-file-button-input\"\n      [disabled]=\"isDisabled\"\n      [multiple]=\"multiple\"\n      [id]=\"id + '-input'\"\n      [name]=\"name + '-input'\"\n      [uploader]=\"uploader\"\n    />\n    <label\n      [class.disabled]=\"isDisabled\"\n      [class.btn]=\"styleType === FileButtonStyleType.standard\"\n      [attr.for]=\"id + '-input'\"\n      class=\"ngx-file-button-label\"\n    >\n      <ng-content></ng-content>\n    </label>\n    <span class=\"ngx-file-button-text\" *ngIf=\"fileName\">\n      {{ fileName }}\n    </span>\n  </div>\n  <div class=\"ngx-file-button-fill\" [style.width.%]=\"progress\"></div>\n  <span class=\"icon-check\"></span>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["button{box-sizing:border-box;color:inherit;cursor:pointer;display:inline-block;position:relative;text-align:center;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;font:inherit;background:transparent;border:none;text-shadow:1px 1px rgba(0,0,0,.07)}button:active,button:focus{outline:none}.btn{box-sizing:border-box;color:#fff;display:inline-block;padding:.35em .55em;position:relative;text-align:center;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;font:inherit;font-size:.9em;font-weight:700;outline:none;line-height:1em;background:#455066;border:1px solid transparent;border-radius:2px;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);transition:background-color .2s,box-shadow .2s}.btn .icon,.btn .ngx-icon{font-weight:400;vertical-align:middle;line-height:1em;font-size:.9em}.btn .icon:before,.btn .ngx-icon:before{font-weight:inherit}.btn .icon.has-text,.btn .icon.has-text-right,.btn .ngx-icon.has-text,.btn .ngx-icon.has-text-right{margin-right:.2em}.btn .icon.has-text-left,.btn .ngx-icon.has-text-left{margin-left:.2em}.btn::-moz-focus-inner{border:0;padding:0}.btn:focus{outline:none;box-shadow:0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12)}.btn:active:hover:focus:not(.disabled),.btn:active:hover:focus:not([disabled]){cursor:pointer;background:#313847}.btn:active:hover:focus:not(.disabled).btn-primary,.btn:active:hover:focus:not([disabled]).btn-primary{background-color:#1483ff}.btn:active:hover:focus:not(.disabled).btn-warning,.btn:active:hover:focus:not([disabled]).btn-warning{background-color:#ffa814}.btn:active:hover:focus:not(.disabled).btn-danger,.btn:active:hover:focus:not([disabled]).btn-danger{background-color:#ff4514}.btn:active:hover:focus:not(.disabled).btn-link,.btn:active:hover:focus:not([disabled]).btn-link{background-color:transparent}.btn:active:hover:focus:not(.disabled).btn-bordered,.btn:active:hover:focus:not([disabled]).btn-bordered{border-color:#94c6ff;color:#94c6ff}.btn:active,.btn:focus,.btn:hover{text-decoration:none}.btn.small{font-size:.6em}.btn.large{font-size:1.3em}.btn.btn-primary{background-color:#479eff}.btn.btn-primary.btn-primary-gradient{background:linear-gradient(125.43deg,#54cdfc 10.86%,#479eff 49.11%)}.btn.btn-warning{background-color:#ffbb47;color:#07080b}.btn.btn-danger{background-color:#ff6d47}.btn.btn-link{background-color:transparent;box-shadow:none}.btn.btn-bordered,.btn.btn-primary.btn-bordered{border:1px solid #479eff;color:#479eff;background-color:transparent;box-shadow:none}.btn.btn-bordered.disabled-button,.btn.btn-primary.btn-bordered.disabled-button{opacity:.5}.btn.btn-bordered.disabled-button .button,.btn.btn-primary.btn-bordered.disabled-button .button{opacity:1}.btn.btn-default.btn-bordered{border:1px solid #fff;color:#fff;background-color:transparent;box-shadow:none}.btn.btn-default.btn-bordered:hover{border-color:#1483ff!important;color:#1483ff!important}.btn.btn-default.btn-bordered.disabled-button{opacity:.5}.btn.btn-default.btn-bordered.disabled-button .button{opacity:1}.btn.btn-file{cursor:pointer;padding:0}.btn.btn-file label{display:block;cursor:pointer;padding:.35em .75em}.btn.btn-file[disabled] label{cursor:not-allowed}.btn.btn-file input[type=file]{pointer-events:none;position:absolute;left:-9999px}.ngx-file-button{display:inline-block;box-sizing:border-box;position:relative}.ngx-file-button .ngx-file-button-input{position:absolute;left:-9999px}.ngx-file-button .ngx-file-button-label{cursor:pointer}.ngx-file-button.standard-style .icon-check{display:none}.ngx-file-button.standard-style .ngx-file-button-text{font-size:.9rem;margin-left:8px;color:#696969}.ngx-file-button.progress-style{min-width:150px;text-align:center;transition:all .3s ease .3s;max-height:50px;overflow:hidden}.ngx-file-button.progress-style .ngx-file-button-button{width:100%;background:#455066;border:none;border-radius:50px;padding:5px 0;transition:all .3s ease;position:relative;margin:0}.ngx-file-button.progress-style .ngx-file-button-button:focus:not(.disabled),.ngx-file-button.progress-style .ngx-file-button-button:focus:not([disabled]),.ngx-file-button.progress-style .ngx-file-button-button:hover:not(.disabled),.ngx-file-button.progress-style .ngx-file-button-button:hover:not([disabled]){background:#313847}.ngx-file-button.progress-style .ngx-file-button-button .ngx-file-button-label{color:#cfcfcf;font-size:18px;font-weight:400;line-height:40px;max-height:40px;transition:all .3s ease;cursor:pointer;display:block}.ngx-file-button.progress-style .ngx-file-button-button.disabled .ngx-file-button-label,.ngx-file-button.progress-style .ngx-file-button-button[disabled] .ngx-file-button-label{cursor:not-allowed}.ngx-file-button.progress-style .ngx-file-button-button .ngx-file-button-text{display:none}.ngx-file-button.progress-style .ngx-file-button-fill{position:absolute;top:0;left:0;bottom:0;right:0;width:0;background:#479eff;border-radius:50px;display:none}.ngx-file-button.progress-style .icon-check{font-size:25px;color:#cfcfcf;position:absolute;top:0;left:0;right:0;bottom:0;line-height:50px;transform:scale(0)}.ngx-file-button.progress-style.active{padding:0}.ngx-file-button.progress-style.active .ngx-file-button-button{background:#696969;margin-top:25px}.ngx-file-button.progress-style.active .ngx-file-button-fill{display:block;margin-top:25px;transition:all .1s ease .1s}.ngx-file-button.progress-style.active .ngx-file-button-label{display:none}.ngx-file-button.progress-style.success .ngx-file-button-button{margin:0;padding:25px;width:50px;background:#479eff}.ngx-file-button.progress-style.success .ngx-file-button-fill,.ngx-file-button.progress-style.success .ngx-file-button-label{display:none}.ngx-file-button.progress-style.success .icon-check{transform:scale(1);transition:all .3s ease .3s}"]
            }]
    }], function () { return [{ type: ɵngcc0.NgZone }]; }, { id: [{
            type: Input
        }], styleType: [{
            type: Input
        }], afterAddingFile: [{
            type: Output
        }], beforeUploadItem: [{
            type: Output
        }], successItem: [{
            type: Output
        }], errorItem: [{
            type: Output
        }], progressAll: [{
            type: Output
        }], disabled: [{
            type: Input
        }], multiple: [{
            type: Input
        }], uploader: [{
            type: Input
        }], name: [{
            type: Input
        }], options: [{
            type: Input
        }], dropzoneTemplate: [{
            type: ContentChild,
            args: ['dropzoneTemplate']
        }], fileInput: [{
            type: ViewChild,
            args: ['fileInput']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi9maWxlLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixNQUFNLEVBQ04saUJBQWlCLEVBRWpCLFlBQVksRUFDWixXQUFXLEVBQ1gsU0FBUyxFQUNULFVBQVUsRUFDVix1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUF1QixZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUN4RixPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVUvRCxNQUFNLE9BQU8sbUJBQW1CO0FBQUcsSUEyRGpDLFlBQTRCLE9BQWU7QUFBSSxRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFRO0FBQUMsUUExRG5DLE9BQUUsR0FBRyxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDaEMsUUFDVyxjQUFTLEdBQUcsbUJBQW1CLENBQUMsUUFBUSxDQUFDO0FBQ3BELFFBbUJZLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7QUFDekUsUUFBWSxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztBQUMxRSxRQUFZLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWlFLENBQUM7QUFDNUcsUUFBWSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQXNELENBQUM7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O0FBRVEsaUJBb0JULEtBQUs7QUFBSyxtQkFDVixLQUFLO0FBQUssd0JBQ1YsS0FBSztBQUFLLHVCQUNWLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUssdUJBRVYsS0FBSztBQUNOLHVCQU9DLEtBQUs7QUFDTiw4QkFPQyxNQUFNO0FBQUssK0JBQ1gsTUFBTTtBQUFLLDBCQUNYLE1BQU07QUFBSyx3QkFDWCxNQUFNO0FBQUssMEJBQ1gsTUFBTTtBQUFLLCtCQUVYLFlBQVksU0FBQyxrQkFBa0I7QUFDN0Isd0JBRUYsU0FBUyxTQUFDLFdBQVc7QUFDcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgTmdab25lLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgT25Jbml0LFxuICBDb250ZW50Q2hpbGQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IEZpbGVVcGxvYWRlck9wdGlvbnMsIEZpbGVVcGxvYWRlciwgRmlsZUl0ZW0gfSBmcm9tICdAc3dpbWxhbmUvbmcyLWZpbGUtdXBsb2FkJztcbmltcG9ydCB7IGlkIH0gZnJvbSAnLi4vLi4vdXRpbHMvaWQvaWQudXRpbCc7XG5pbXBvcnQgeyBGaWxlQnV0dG9uU3R5bGVUeXBlIH0gZnJvbSAnLi9maWxlLWJ1dHRvbi1zdHlsZS50eXBlJztcblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnbmd4RmlsZUJ1dHRvbicsXG4gIHNlbGVjdG9yOiAnbmd4LWZpbGUtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS1idXR0b24uY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRmlsZUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGlkID0gYGlucHV0LSR7aWQoKX1gO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0eWxlVHlwZSA9IEZpbGVCdXR0b25TdHlsZVR5cGUuc3RhbmRhcmQ7XG4gIEBJbnB1dCgpIHVwbG9hZGVyOiBGaWxlVXBsb2FkZXI7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IEZpbGVVcGxvYWRlck9wdGlvbnM7XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShkaXNhYmxlZCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgbXVsdGlwbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xuICB9XG4gIHNldCBtdWx0aXBsZShtdWx0aXBsZSkge1xuICAgIHRoaXMuX211bHRpcGxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KG11bHRpcGxlKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSBhZnRlckFkZGluZ0ZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZmlsZUl0ZW06IEZpbGVJdGVtIH0+KCk7XG4gIEBPdXRwdXQoKSBiZWZvcmVVcGxvYWRJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjx7IGZpbGVJdGVtOiBGaWxlSXRlbSB9PigpO1xuICBAT3V0cHV0KCkgc3VjY2Vzc0l0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPHsgaXRlbTogYW55OyByZXNwb25zZTogc3RyaW5nOyBzdGF0dXM6IG51bWJlcjsgaGVhZGVyczogYW55IH0+KCk7XG4gIEBPdXRwdXQoKSBlcnJvckl0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPHsgcmVzcG9uc2U6IHN0cmluZzsgc3RhdHVzOiBudW1iZXI7IGhlYWRlcnM6IGFueSB9PigpO1xuICBAT3V0cHV0KCkgcHJvZ3Jlc3NBbGwgPSBuZXcgRXZlbnRFbWl0dGVyPHsgcHJvZ3Jlc3M6IG51bWJlciB9PigpO1xuXG4gIEBDb250ZW50Q2hpbGQoJ2Ryb3B6b25lVGVtcGxhdGUnKVxuICByZWFkb25seSBkcm9wem9uZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcpXG4gIHJlYWRvbmx5IGZpbGVJbnB1dD86IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgZ2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgdGhpcy51cGxvYWRlci5pc1VwbG9hZGluZztcbiAgfVxuXG4gIGdldCBjc3NDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICduZ3gtZmlsZS1idXR0b24nOiB0cnVlLFxuICAgICAgJ3N0YW5kYXJkLXN0eWxlJzogdGhpcy5zdHlsZVR5cGUgPT09IEZpbGVCdXR0b25TdHlsZVR5cGUuc3RhbmRhcmQsXG4gICAgICAncHJvZ3Jlc3Mtc3R5bGUnOiB0aGlzLnN0eWxlVHlwZSA9PT0gRmlsZUJ1dHRvblN0eWxlVHlwZS5wcm9ncmVzcyxcbiAgICAgICdzaG93LXByb2dyZXNzJzogdGhpcy51cGxvYWRlciAmJiB0aGlzLnVwbG9hZGVyLm9wdGlvbnMuaXNIVE1MNSxcbiAgICAgIHN1Y2Nlc3M6IHRoaXMuX2lzSXRlbVN1Y2Nlc3NmdWwsXG4gICAgICBhY3RpdmU6IHRoaXMudXBsb2FkZXIgJiYgdGhpcy51cGxvYWRlci5pc1VwbG9hZGluZ1xuICAgIH07XG4gIH1cblxuICByZWFkb25seSBGaWxlQnV0dG9uU3R5bGVUeXBlID0gRmlsZUJ1dHRvblN0eWxlVHlwZTtcbiAgcHJvZ3Jlc3MgPSAwO1xuICBmaWxlTmFtZSA9ICcnO1xuICBmaWxlT3ZlckRyb3B6b25lID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfaXNJdGVtU3VjY2Vzc2Z1bCA9IGZhbHNlO1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9tdWx0aXBsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBfbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnVwbG9hZGVyICYmICF0aGlzLm9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3QgcGFzcyBlaXRoZXIgYW4gdXBsb2FkZXIgaW5zdGFuY2Ugb3Igb3B0aW9ucy4nKTtcbiAgICB9XG5cbiAgICAvLyBpZiBvcHRpb25zIHdlcmUgcGFzc2VkLCBpbml0IGEgbmV3IHVwbG9hZGVyXG4gICAgaWYgKCF0aGlzLnVwbG9hZGVyICYmIHRoaXMub3B0aW9ucykge1xuICAgICAgdGhpcy51cGxvYWRlciA9IG5ldyBGaWxlVXBsb2FkZXIodGhpcy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBhbHdheXMgcmVtb3ZlIGFmdGVyIHVwbG9hZCBmb3IgdGhpcyBjYXNlXG4gICAgdGhpcy51cGxvYWRlci5vcHRpb25zLnJlbW92ZUFmdGVyVXBsb2FkID0gdHJ1ZTtcblxuICAgIHRoaXMudXBsb2FkZXIub25BZnRlckFkZGluZ0ZpbGUgPSB0aGlzLm9uQWZ0ZXJBZGRpbmdGaWxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGxvYWRlci5vbkJlZm9yZVVwbG9hZEl0ZW0gPSB0aGlzLm9uQmVmb3JlVXBsb2FkSXRlbS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBsb2FkZXIub25Qcm9ncmVzc0FsbCA9IHRoaXMub25Qcm9ncmVzc0FsbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBsb2FkZXIub25TdWNjZXNzSXRlbSA9IHRoaXMub25TdWNjZXNzSXRlbS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBsb2FkZXIub25FcnJvckl0ZW0gPSB0aGlzLm9uRXJyb3JJdGVtLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbkFmdGVyQWRkaW5nRmlsZShmaWxlSXRlbTogRmlsZUl0ZW0pOiB2b2lkIHtcbiAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlSXRlbS5maWxlLm5hbWU7XG4gICAgICB0aGlzLmFmdGVyQWRkaW5nRmlsZS5lbWl0KHsgZmlsZUl0ZW0gfSk7XG4gICAgfSk7XG4gIH1cblxuICBvbkJlZm9yZVVwbG9hZEl0ZW0oZmlsZUl0ZW06IEZpbGVJdGVtKSB7XG4gICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmJlZm9yZVVwbG9hZEl0ZW0uZW1pdCh7IGZpbGVJdGVtIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgb25FcnJvckl0ZW0ocmVzcG9uc2U6IHN0cmluZywgc3RhdHVzOiBudW1iZXIsIGhlYWRlcnM6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuZXJyb3JJdGVtLmVtaXQoeyByZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzIH0pO1xuICB9XG5cbiAgb25Qcm9ncmVzc0FsbChwcm9ncmVzczogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICB0aGlzLnByb2dyZXNzQWxsLmVtaXQoeyBwcm9ncmVzcyB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VjY2Vzc0l0ZW0oaXRlbTogYW55LCByZXNwb25zZTogc3RyaW5nLCBzdGF0dXM6IG51bWJlciwgaGVhZGVyczogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLl9pc0l0ZW1TdWNjZXNzZnVsID0gdHJ1ZTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZU5hbWUgPSAnJztcbiAgICAgICAgdGhpcy5faXNJdGVtU3VjY2Vzc2Z1bCA9IGZhbHNlO1xuICAgICAgfSwgMjUwMCk7XG5cbiAgICAgIHRoaXMuc3VjY2Vzc0l0ZW0uZW1pdCh7IGl0ZW0sIHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnMgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmaWxlT3ZlckJhc2UoZXZlbnQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZpbGVPdmVyRHJvcHpvbmUgPSBldmVudDtcbiAgfVxuXG4gIGNsZWFySW5wdXQoKSB7XG4gICAgdGhpcy5maWxlSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICB9XG59XG4iXX0=