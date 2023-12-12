import { OnInit, EventEmitter } from '@angular/core';
import { FileUploaderOptions, FileUploader, FileItem } from '@swimlane/ng2-file-upload';
import * as ɵngcc0 from '@angular/core';
export declare class DropzoneComponent implements OnInit {
    id: string;
    acceptedFileFormats: string[];
    uploader: FileUploader;
    options: FileUploaderOptions;
    get multiple(): boolean;
    set multiple(multiple: boolean);
    afterAddingFile: EventEmitter<{
        fileItem: FileItem;
    }>;
    beforeUploadItem: EventEmitter<{
        fileItem: FileItem;
    }>;
    successItem: EventEmitter<{
        item: any;
        response: string;
        status: number;
        headers: any;
    }>;
    errorItem: EventEmitter<{
        response: string;
        status: number;
        headers: any;
    }>;
    progressAll: EventEmitter<{
        progress: number;
    }>;
    acceptedFileFormatsTextDisplay: string;
    private _multiple;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DropzoneComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<DropzoneComponent, "ngx-dropzone", never, { "id": "id"; "multiple": "multiple"; "acceptedFileFormats": "acceptedFileFormats"; "uploader": "uploader"; "options": "options"; }, { "afterAddingFile": "afterAddingFile"; "beforeUploadItem": "beforeUploadItem"; "successItem": "successItem"; "errorItem": "errorItem"; "progressAll": "progressAll"; }, never, never>;
}

//# sourceMappingURL=dropzone.component.d.ts.map