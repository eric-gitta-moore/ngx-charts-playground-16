import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { FileUploader } from '@swimlane/ng2-file-upload';
import { id } from '../../utils/id/id.util';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../button/file-button.component';
import * as ɵngcc2 from '@swimlane/ng2-file-upload';
import * as ɵngcc3 from '../icon/icon.component';
import * as ɵngcc4 from '@angular/common';

function DropzoneComponent_ng_template_1_div_20_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 20);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" Supports: ", ctx_r3.acceptedFileFormatsTextDisplay, " ");
} }
function DropzoneComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "input", 2);
    ɵngcc0.ɵɵelementStart(1, "label", 3);
    ɵngcc0.ɵɵnamespaceSVG();
    ɵngcc0.ɵɵelementStart(2, "svg", 4);
    ɵngcc0.ɵɵelement(3, "path", 5);
    ɵngcc0.ɵɵelement(4, "path", 6);
    ɵngcc0.ɵɵelement(5, "path", 7);
    ɵngcc0.ɵɵelement(6, "path", 8);
    ɵngcc0.ɵɵelement(7, "path", 9);
    ɵngcc0.ɵɵelement(8, "path", 10);
    ɵngcc0.ɵɵelement(9, "path", 11);
    ɵngcc0.ɵɵelement(10, "path", 12);
    ɵngcc0.ɵɵelement(11, "path", 13);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵnamespaceHTML();
    ɵngcc0.ɵɵelementStart(12, "div", 14);
    ɵngcc0.ɵɵelement(13, "ngx-icon", 15);
    ɵngcc0.ɵɵelementStart(14, "div", 16);
    ɵngcc0.ɵɵtext(15, "Drag + Drop");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(16, "div", 17);
    ɵngcc0.ɵɵtext(17, "OR ");
    ɵngcc0.ɵɵelementStart(18, "span", 18);
    ɵngcc0.ɵɵtext(19, "BROWSE");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(20, DropzoneComponent_ng_template_1_div_20_Template, 2, 1, "div", 19);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const uploader_r2 = ctx.$implicit;
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("id", "ngx-dropzone--input--" + ctx_r1.id)("uploader", uploader_r2)("multiple", ctx_r1.multiple)("accept", (ctx_r1.acceptedFileFormats == null ? null : ctx_r1.acceptedFileFormats.length) ? ctx_r1.acceptedFileFormats : "*");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵattribute("for", "ngx-dropzone--input--" + ctx_r1.id);
    ɵngcc0.ɵɵadvance(19);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.acceptedFileFormats == null ? null : ctx_r1.acceptedFileFormats.length);
} }
export class DropzoneComponent {
    constructor() {
        this.id = `input-${id()}`;
        this.afterAddingFile = new EventEmitter();
        this.beforeUploadItem = new EventEmitter();
        this.successItem = new EventEmitter();
        this.errorItem = new EventEmitter();
        this.progressAll = new EventEmitter();
        this._multiple = true;
    }
    get multiple() {
        return this._multiple;
    }
    set multiple(multiple) {
        this._multiple = coerceBooleanProperty(multiple);
    }
    ngOnInit() {
        if (this.acceptedFileFormats && this.acceptedFileFormats.length) {
            this.acceptedFileFormatsTextDisplay =
                this.acceptedFileFormats.slice(0, -1).join(', ') + ' and ' + this.acceptedFileFormats.slice(-1);
        }
    }
}
DropzoneComponent.ɵfac = function DropzoneComponent_Factory(t) { return new (t || DropzoneComponent)(); };
DropzoneComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: DropzoneComponent, selectors: [["ngx-dropzone"]], inputs: { id: "id", multiple: "multiple", acceptedFileFormats: "acceptedFileFormats", uploader: "uploader", options: "options" }, outputs: { afterAddingFile: "afterAddingFile", beforeUploadItem: "beforeUploadItem", successItem: "successItem", errorItem: "errorItem", progressAll: "progressAll" }, decls: 3, vars: 2, consts: [[1, "ngx-dropzone", 3, "uploader", "options", "afterAddingFile", "beforeUploadItem", "successItem", "errorItem", "progressAll"], ["dropzoneTemplate", ""], ["type", "file", "ng2FileSelect", "", 1, "ngx-dropzone--input", 3, "id", "uploader", "multiple", "accept"], [1, "ngx-dropzone--label"], ["viewBox", "0 0 506 506", "xmlns", "http://www.w3.org/2000/svg", 1, "ngx-dropzone--rings"], ["opacity", "0.2", "d", "M252.743 504.196C391.58 504.196 504.129 391.732 504.129 253C504.129 114.268 391.58 1.8042 252.743 1.8042C113.907 1.8042 1.35742 114.268 1.35742 253C1.35742 391.732 113.907 504.196 252.743 504.196Z", 1, "ngx-dropzone--ring-9"], ["opacity", "0.3", "d", "M252.743 489.063C383.216 489.063 488.985 383.374 488.985 253C488.985 122.626 383.216 16.9365 252.743 16.9365C122.27 16.9365 16.501 122.626 16.501 253C16.501 383.374 122.27 489.063 252.743 489.063Z", 1, "ngx-dropzone--ring-8"], ["opacity", "0.4", "d", "M252.744 475.444C375.689 475.444 475.356 375.853 475.356 253C475.356 130.147 375.689 30.5555 252.744 30.5555C129.798 30.5555 30.1309 130.147 30.1309 253C30.1309 375.853 129.798 475.444 252.744 475.444Z", 1, "ngx-dropzone--ring-7"], ["opacity", "0.5", "d", "M252.743 461.825C368.161 461.825 461.727 368.331 461.727 253C461.727 137.669 368.161 44.1746 252.743 44.1746C137.325 44.1746 43.7598 137.669 43.7598 253C43.7598 368.331 137.325 461.825 252.743 461.825Z", 1, "ngx-dropzone--ring-6"], ["opacity", "0.6", "d", "M252.744 448.206C360.635 448.206 448.098 360.809 448.098 253C448.098 145.19 360.635 57.7936 252.744 57.7936C144.853 57.7936 57.3896 145.19 57.3896 253C57.3896 360.809 144.853 448.206 252.744 448.206Z", 1, "ngx-dropzone--ring-5"], ["opacity", "0.7", "d", "M252.743 434.587C353.107 434.587 434.468 353.288 434.468 253C434.468 152.712 353.107 71.4127 252.743 71.4127C152.379 71.4127 71.0186 152.712 71.0186 253C71.0186 353.288 152.379 434.587 252.743 434.587Z", 1, "ngx-dropzone--ring-4"], ["opacity", "0.8", "d", "M252.743 420.968C345.579 420.968 420.838 345.766 420.838 253C420.838 160.234 345.579 85.0317 252.743 85.0317C159.906 85.0317 84.6475 160.234 84.6475 253C84.6475 345.766 159.906 420.968 252.743 420.968Z", 1, "ngx-dropzone--ring-3"], ["opacity", "0.9", "d", "M252.743 407.349C338.052 407.349 407.209 338.245 407.209 253C407.209 167.755 338.052 98.6508 252.743 98.6508C167.434 98.6508 98.2773 167.755 98.2773 253C98.2773 338.245 167.434 407.349 252.743 407.349Z", 1, "ngx-dropzone--ring-2"], ["d", "M252.743 393.73C330.525 393.73 393.579 330.723 393.579 253C393.579 175.277 330.525 112.27 252.743 112.27C174.961 112.27 111.906 175.277 111.906 253C111.906 330.723 174.961 393.73 252.743 393.73Z", 1, "ngx-dropzone--ring-1"], [1, "ngx-dropzone--btn"], ["fontIcon", "upload-outline-large", 1, "ngx-dropzone--icon"], [1, "ngx-dropzone--title"], [1, "ngx-dropzone--sub-title"], [1, "underline"], ["class", "ngx-dropzone--supporting-files", 4, "ngIf"], [1, "ngx-dropzone--supporting-files"]], template: function DropzoneComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "ngx-file-button", 0);
        ɵngcc0.ɵɵlistener("afterAddingFile", function DropzoneComponent_Template_ngx_file_button_afterAddingFile_0_listener($event) { return ctx.afterAddingFile.emit($event); })("beforeUploadItem", function DropzoneComponent_Template_ngx_file_button_beforeUploadItem_0_listener($event) { return ctx.beforeUploadItem.emit($event); })("successItem", function DropzoneComponent_Template_ngx_file_button_successItem_0_listener($event) { return ctx.successItem.emit($event); })("errorItem", function DropzoneComponent_Template_ngx_file_button_errorItem_0_listener($event) { return ctx.errorItem.emit($event); })("progressAll", function DropzoneComponent_Template_ngx_file_button_progressAll_0_listener($event) { return ctx.progressAll.emit($event); });
        ɵngcc0.ɵɵtemplate(1, DropzoneComponent_ng_template_1_Template, 21, 6, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("uploader", ctx.uploader)("options", ctx.options);
    } }, directives: [ɵngcc1.FileButtonComponent, ɵngcc2.FileSelectDirective, ɵngcc3.IconComponent, ɵngcc4.NgIf], styles: ["@-webkit-keyframes soundWave{to{stroke:#1483ff;scale:1.2}}@keyframes soundWave{to{stroke:#1483ff;scale:1.2}}@-webkit-keyframes popIn{0%{transform:scale(.5)}50%{transform:scale(1.1)}to{transform:scale(1)}}@keyframes popIn{0%{transform:scale(.5)}50%{transform:scale(1.1)}to{transform:scale(1)}}.ngx-dropzone{display:flex;align-items:center;position:relative;flex-direction:column;flex:1;padding:50px;overflow:hidden}.ngx-dropzone .file-over .ngx-dropzone--label .ngx-dropzone--rings path{-webkit-animation:soundWave 1s infinite;animation:soundWave 1s infinite}.ngx-dropzone .file-over .ngx-dropzone--label .ngx-dropzone--rings path.ngx-dropzone--ring-1{-webkit-animation-delay:0s;animation-delay:0s}.ngx-dropzone .file-over .ngx-dropzone--label .ngx-dropzone--rings path.ngx-dropzone--ring-2{-webkit-animation-delay:.08s;animation-delay:.08s}.ngx-dropzone .file-over .ngx-dropzone--label .ngx-dropzone--rings path.ngx-dropzone--ring-3{-webkit-animation-delay:.16s;animation-delay:.16s}.ngx-dropzone .file-over .ngx-dropzone--label .ngx-dropzone--rings path.ngx-dropzone--ring-4{-webkit-animation-delay:.24s;animation-delay:.24s}.ngx-dropzone .file-over .ngx-dropzone--label .ngx-dropzone--rings path.ngx-dropzone--ring-5{-webkit-animation-delay:.32s;animation-delay:.32s}.ngx-dropzone .file-over .ngx-dropzone--label .ngx-dropzone--rings path.ngx-dropzone--ring-6{-webkit-animation-delay:.4s;animation-delay:.4s}.ngx-dropzone .file-over .ngx-dropzone--label .ngx-dropzone--rings path.ngx-dropzone--ring-7{-webkit-animation-delay:.48s;animation-delay:.48s}.ngx-dropzone .file-over .ngx-dropzone--label .ngx-dropzone--rings path.ngx-dropzone--ring-8{-webkit-animation-delay:.56s;animation-delay:.56s}.ngx-dropzone .file-over .ngx-dropzone--label .ngx-dropzone--rings path.ngx-dropzone--ring-9{-webkit-animation-delay:.64s;animation-delay:.64s}.ngx-dropzone .ngx-dropzone--input{display:none}.ngx-dropzone .ngx-dropzone--label{display:flex;flex-direction:column;position:relative;margin:0;font-weight:400;cursor:pointer;-webkit-animation:popIn .35s ease-in-out;animation:popIn .35s ease-in-out;height:500px;width:500px}.ngx-dropzone .ngx-dropzone--label .ngx-dropzone--rings{fill:none;width:100%}.ngx-dropzone .ngx-dropzone--label .ngx-dropzone--rings path{clip-rule:evenodd;fill-rule:evenodd;stroke:#3b4457;stroke-width:2;stroke-linejoin:round;transition:stroke .2s ease-in-out}.ngx-dropzone .ngx-dropzone--label .ngx-dropzone--btn{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center}.ngx-dropzone .ngx-dropzone--label .ngx-dropzone--btn .ngx-dropzone--icon{font-size:30px;color:#cdd2dd}.ngx-dropzone .ngx-dropzone--label .ngx-dropzone--btn .ngx-dropzone--title{font-size:20px;line-height:25px;font-weight:600;margin-bottom:5px;color:#cdd2dd}.ngx-dropzone .ngx-dropzone--label .ngx-dropzone--btn .ngx-dropzone--sub-title{color:#479eff;font-size:12px;font-weight:700;transition:color .2s ease-in-out}.ngx-dropzone .ngx-dropzone--label .ngx-dropzone--btn .ngx-dropzone--sub-title:focus,.ngx-dropzone .ngx-dropzone--label .ngx-dropzone--btn .ngx-dropzone--sub-title:hover{color:#7ab9ff}.ngx-dropzone .ngx-dropzone--label .ngx-dropzone--btn .ngx-dropzone--sub-title .underline{border-bottom:1px dotted}.ngx-dropzone .ngx-dropzone--label .ngx-dropzone--btn .ngx-dropzone--supporting-files{margin-top:20px;color:#818fa9;font-size:12px;padding:0 10px}"], encapsulation: 2, changeDetection: 0 });
DropzoneComponent.propDecorators = {
    id: [{ type: Input }],
    acceptedFileFormats: [{ type: Input }],
    uploader: [{ type: Input }],
    options: [{ type: Input }],
    multiple: [{ type: Input }],
    afterAddingFile: [{ type: Output }],
    beforeUploadItem: [{ type: Output }],
    successItem: [{ type: Output }],
    errorItem: [{ type: Output }],
    progressAll: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DropzoneComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-dropzone',
                template: "<ngx-file-button \n  [uploader]=\"uploader\" \n  [options]=\"options\"\n  (afterAddingFile)=\"afterAddingFile.emit($event)\"\n  (beforeUploadItem)=\"beforeUploadItem.emit($event)\"\n  (successItem)=\"successItem.emit($event)\"\n  (errorItem)=\"errorItem.emit($event)\"\n  (progressAll)=\"progressAll.emit($event)\"\n  class=\"ngx-dropzone\"\n>\n  <ng-template #dropzoneTemplate let-uploader>\n    <input\n      [id]=\"'ngx-dropzone--input--' + id\"\n      class=\"ngx-dropzone--input\"\n      type=\"file\"\n      ng2FileSelect\n      [uploader]=\"uploader\"\n      [multiple]=\"multiple\"\n      [accept]=\"acceptedFileFormats?.length ? acceptedFileFormats : '*'\"\n    />\n  \n    <label [attr.for]=\"'ngx-dropzone--input--' + id\" class=\"ngx-dropzone--label\">\n    <svg class=\"ngx-dropzone--rings\" viewBox=\"0 0 506 506\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path\n        class=\"ngx-dropzone--ring-9\"\n        opacity=\"0.2\"\n        d=\"M252.743 504.196C391.58 504.196 504.129 391.732 504.129 253C504.129 114.268 391.58 1.8042 252.743 1.8042C113.907 1.8042 1.35742 114.268 1.35742 253C1.35742 391.732 113.907 504.196 252.743 504.196Z\"\n      />\n      <path\n        class=\"ngx-dropzone--ring-8\"\n        opacity=\"0.3\"\n        d=\"M252.743 489.063C383.216 489.063 488.985 383.374 488.985 253C488.985 122.626 383.216 16.9365 252.743 16.9365C122.27 16.9365 16.501 122.626 16.501 253C16.501 383.374 122.27 489.063 252.743 489.063Z\"\n      />\n      <path\n        class=\"ngx-dropzone--ring-7\"\n        opacity=\"0.4\"\n        d=\"M252.744 475.444C375.689 475.444 475.356 375.853 475.356 253C475.356 130.147 375.689 30.5555 252.744 30.5555C129.798 30.5555 30.1309 130.147 30.1309 253C30.1309 375.853 129.798 475.444 252.744 475.444Z\"\n      />\n      <path\n        class=\"ngx-dropzone--ring-6\"\n        opacity=\"0.5\"\n        d=\"M252.743 461.825C368.161 461.825 461.727 368.331 461.727 253C461.727 137.669 368.161 44.1746 252.743 44.1746C137.325 44.1746 43.7598 137.669 43.7598 253C43.7598 368.331 137.325 461.825 252.743 461.825Z\"\n      />\n      <path\n        class=\"ngx-dropzone--ring-5\"\n        opacity=\"0.6\"\n        d=\"M252.744 448.206C360.635 448.206 448.098 360.809 448.098 253C448.098 145.19 360.635 57.7936 252.744 57.7936C144.853 57.7936 57.3896 145.19 57.3896 253C57.3896 360.809 144.853 448.206 252.744 448.206Z\"\n      />\n      <path\n        class=\"ngx-dropzone--ring-4\"\n        opacity=\"0.7\"\n        d=\"M252.743 434.587C353.107 434.587 434.468 353.288 434.468 253C434.468 152.712 353.107 71.4127 252.743 71.4127C152.379 71.4127 71.0186 152.712 71.0186 253C71.0186 353.288 152.379 434.587 252.743 434.587Z\"\n      />\n      <path\n        class=\"ngx-dropzone--ring-3\"\n        opacity=\"0.8\"\n        d=\"M252.743 420.968C345.579 420.968 420.838 345.766 420.838 253C420.838 160.234 345.579 85.0317 252.743 85.0317C159.906 85.0317 84.6475 160.234 84.6475 253C84.6475 345.766 159.906 420.968 252.743 420.968Z\"\n      />\n      <path\n        class=\"ngx-dropzone--ring-2\"\n        opacity=\"0.9\"\n        d=\"M252.743 407.349C338.052 407.349 407.209 338.245 407.209 253C407.209 167.755 338.052 98.6508 252.743 98.6508C167.434 98.6508 98.2773 167.755 98.2773 253C98.2773 338.245 167.434 407.349 252.743 407.349Z\"\n      />\n      <path\n        class=\"ngx-dropzone--ring-1\"\n        d=\"M252.743 393.73C330.525 393.73 393.579 330.723 393.579 253C393.579 175.277 330.525 112.27 252.743 112.27C174.961 112.27 111.906 175.277 111.906 253C111.906 330.723 174.961 393.73 252.743 393.73Z\"\n      />\n    </svg>\n\n    <div class=\"ngx-dropzone--btn\">\n      <ngx-icon class=\"ngx-dropzone--icon\" fontIcon=\"upload-outline-large\"></ngx-icon>\n      <div class=\"ngx-dropzone--title\">Drag + Drop</div>\n      <div class=\"ngx-dropzone--sub-title\">OR <span class=\"underline\">BROWSE</span></div>\n      <div *ngIf=\"acceptedFileFormats?.length\" class=\"ngx-dropzone--supporting-files\">\n        Supports: {{acceptedFileFormatsTextDisplay}}\n      </div>\n    </div>\n    </label>\n  </ng-template>\n</ngx-file-button>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["@-webkit-keyframes soundWave{to{stroke:#1483ff;scale:1.2}}@keyframes soundWave{to{stroke:#1483ff;scale:1.2}}@-webkit-keyframes popIn{0%{transform:scale(.5)}50%{transform:scale(1.1)}to{transform:scale(1)}}@keyframes popIn{0%{transform:scale(.5)}50%{transform:scale(1.1)}to{transform:scale(1)}}.ngx-dropzone{display:flex;align-items:center;position:relative;flex-direction:column;flex:1;padding:50px;overflow:hidden}.ngx-dropzone .file-over .ngx-dropzone--label .ngx-dropzone--rings path{-webkit-animation:soundWave 1s infinite;animation:soundWave 1s infinite}.ngx-dropzone .file-over .ngx-dropzone--label .ngx-dropzone--rings path.ngx-dropzone--ring-1{-webkit-animation-delay:0s;animation-delay:0s}.ngx-dropzone .file-over .ngx-dropzone--label .ngx-dropzone--rings path.ngx-dropzone--ring-2{-webkit-animation-delay:.08s;animation-delay:.08s}.ngx-dropzone .file-over .ngx-dropzone--label .ngx-dropzone--rings path.ngx-dropzone--ring-3{-webkit-animation-delay:.16s;animation-delay:.16s}.ngx-dropzone .file-over .ngx-dropzone--label .ngx-dropzone--rings path.ngx-dropzone--ring-4{-webkit-animation-delay:.24s;animation-delay:.24s}.ngx-dropzone .file-over .ngx-dropzone--label .ngx-dropzone--rings path.ngx-dropzone--ring-5{-webkit-animation-delay:.32s;animation-delay:.32s}.ngx-dropzone .file-over .ngx-dropzone--label .ngx-dropzone--rings path.ngx-dropzone--ring-6{-webkit-animation-delay:.4s;animation-delay:.4s}.ngx-dropzone .file-over .ngx-dropzone--label .ngx-dropzone--rings path.ngx-dropzone--ring-7{-webkit-animation-delay:.48s;animation-delay:.48s}.ngx-dropzone .file-over .ngx-dropzone--label .ngx-dropzone--rings path.ngx-dropzone--ring-8{-webkit-animation-delay:.56s;animation-delay:.56s}.ngx-dropzone .file-over .ngx-dropzone--label .ngx-dropzone--rings path.ngx-dropzone--ring-9{-webkit-animation-delay:.64s;animation-delay:.64s}.ngx-dropzone .ngx-dropzone--input{display:none}.ngx-dropzone .ngx-dropzone--label{display:flex;flex-direction:column;position:relative;margin:0;font-weight:400;cursor:pointer;-webkit-animation:popIn .35s ease-in-out;animation:popIn .35s ease-in-out;height:500px;width:500px}.ngx-dropzone .ngx-dropzone--label .ngx-dropzone--rings{fill:none;width:100%}.ngx-dropzone .ngx-dropzone--label .ngx-dropzone--rings path{clip-rule:evenodd;fill-rule:evenodd;stroke:#3b4457;stroke-width:2;stroke-linejoin:round;transition:stroke .2s ease-in-out}.ngx-dropzone .ngx-dropzone--label .ngx-dropzone--btn{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center}.ngx-dropzone .ngx-dropzone--label .ngx-dropzone--btn .ngx-dropzone--icon{font-size:30px;color:#cdd2dd}.ngx-dropzone .ngx-dropzone--label .ngx-dropzone--btn .ngx-dropzone--title{font-size:20px;line-height:25px;font-weight:600;margin-bottom:5px;color:#cdd2dd}.ngx-dropzone .ngx-dropzone--label .ngx-dropzone--btn .ngx-dropzone--sub-title{color:#479eff;font-size:12px;font-weight:700;transition:color .2s ease-in-out}.ngx-dropzone .ngx-dropzone--label .ngx-dropzone--btn .ngx-dropzone--sub-title:focus,.ngx-dropzone .ngx-dropzone--label .ngx-dropzone--btn .ngx-dropzone--sub-title:hover{color:#7ab9ff}.ngx-dropzone .ngx-dropzone--label .ngx-dropzone--btn .ngx-dropzone--sub-title .underline{border-bottom:1px dotted}.ngx-dropzone .ngx-dropzone--label .ngx-dropzone--btn .ngx-dropzone--supporting-files{margin-top:20px;color:#818fa9;font-size:12px;padding:0 10px}"]
            }]
    }], function () { return []; }, { id: [{
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
        }], multiple: [{
            type: Input
        }], acceptedFileFormats: [{
            type: Input
        }], uploader: [{
            type: Input
        }], options: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcHpvbmUuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2Ryb3B6b25lL2Ryb3B6b25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixFQUV2QixLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUF1QixZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUN4RixPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTNUMsTUFBTSxPQUFPLGlCQUFpQjtBQUFHLElBUGpDO0FBQ0csUUFPUSxPQUFFLEdBQUcsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQ2hDLFFBV1ksb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztBQUN6RSxRQUFZLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO0FBQzFFLFFBQVksZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBaUUsQ0FBQztBQUM1RyxRQUFZLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBc0QsQ0FBQztBQUMvRixRQUFZLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQXdCLENBQUM7QUFDbkUsUUFHVSxjQUFTLEdBQUcsSUFBSSxDQUFDO0FBQzNCLElBT0EsQ0FBQztBQUNELElBekJFLElBQ0ksUUFBUTtBQUNkLFFBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQzFCLElBQUUsQ0FBQztBQUNILElBQUUsSUFBSSxRQUFRLENBQUMsUUFBUTtBQUN2QixRQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDckQsSUFBRSxDQUFDO0FBQ0gsSUFXRSxRQUFRO0FBQUssUUFDWCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFO0FBQ3JFLFlBQU0sSUFBSSxDQUFDLDhCQUE4QjtBQUN6QyxnQkFBUSxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hHLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSDs2Q0FwQ0MsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qjs7OG1CQUF3QyxrQkFFeEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzs7Ozs0a0dBQ3RDLHdZQUNJO0FBQUM7QUFBcUMsaUJBQ3hDLEtBQUs7QUFBSyxrQ0FDVixLQUFLO0FBQUssdUJBQ1YsS0FBSztBQUFLLHNCQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQ04sOEJBT0MsTUFBTTtBQUFLLCtCQUNYLE1BQU07QUFBSywwQkFDWCxNQUFNO0FBQUssd0JBQ1gsTUFBTTtBQUFLLDBCQUNYLE1BQU07QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgRmlsZVVwbG9hZGVyT3B0aW9ucywgRmlsZVVwbG9hZGVyLCBGaWxlSXRlbSB9IGZyb20gJ0Bzd2ltbGFuZS9uZzItZmlsZS11cGxvYWQnO1xuaW1wb3J0IHsgaWQgfSBmcm9tICcuLi8uLi91dGlscy9pZC9pZC51dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWRyb3B6b25lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Ryb3B6b25lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcHpvbmUuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRHJvcHpvbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpZCA9IGBpbnB1dC0ke2lkKCl9YDtcbiAgQElucHV0KCkgYWNjZXB0ZWRGaWxlRm9ybWF0czogc3RyaW5nW107XG4gIEBJbnB1dCgpIHVwbG9hZGVyOiBGaWxlVXBsb2FkZXI7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IEZpbGVVcGxvYWRlck9wdGlvbnM7XG4gIEBJbnB1dCgpXG4gIGdldCBtdWx0aXBsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGU7XG4gIH1cbiAgc2V0IG11bHRpcGxlKG11bHRpcGxlKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkobXVsdGlwbGUpO1xuICB9XG5cbiAgQE91dHB1dCgpIGFmdGVyQWRkaW5nRmlsZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBmaWxlSXRlbTogRmlsZUl0ZW0gfT4oKTtcbiAgQE91dHB1dCgpIGJlZm9yZVVwbG9hZEl0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPHsgZmlsZUl0ZW06IEZpbGVJdGVtIH0+KCk7XG4gIEBPdXRwdXQoKSBzdWNjZXNzSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpdGVtOiBhbnk7IHJlc3BvbnNlOiBzdHJpbmc7IHN0YXR1czogbnVtYmVyOyBoZWFkZXJzOiBhbnkgfT4oKTtcbiAgQE91dHB1dCgpIGVycm9ySXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8eyByZXNwb25zZTogc3RyaW5nOyBzdGF0dXM6IG51bWJlcjsgaGVhZGVyczogYW55IH0+KCk7XG4gIEBPdXRwdXQoKSBwcm9ncmVzc0FsbCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBwcm9ncmVzczogbnVtYmVyIH0+KCk7XG5cbiAgYWNjZXB0ZWRGaWxlRm9ybWF0c1RleHREaXNwbGF5OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfbXVsdGlwbGUgPSB0cnVlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjY2VwdGVkRmlsZUZvcm1hdHMgJiYgdGhpcy5hY2NlcHRlZEZpbGVGb3JtYXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5hY2NlcHRlZEZpbGVGb3JtYXRzVGV4dERpc3BsYXkgPVxuICAgICAgICB0aGlzLmFjY2VwdGVkRmlsZUZvcm1hdHMuc2xpY2UoMCwgLTEpLmpvaW4oJywgJykgKyAnIGFuZCAnICsgdGhpcy5hY2NlcHRlZEZpbGVGb3JtYXRzLnNsaWNlKC0xKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==