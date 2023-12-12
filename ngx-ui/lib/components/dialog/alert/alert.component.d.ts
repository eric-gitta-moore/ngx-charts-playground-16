import { AfterViewInit, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { DialogOptions } from '../dialog-options.interface';
import { DialogComponent } from '../dialog.component';
import { AlertTypes } from './alert-types.enum';
import * as ɵngcc0 from '@angular/core';
export declare class AlertComponent extends DialogComponent implements AfterViewInit, OnInit {
    type: AlertTypes;
    data: any;
    confirmButtonText: string;
    confirmButtonClass: string | string[];
    cancelButtonText: string;
    cancelButtonClass: string | string[];
    get longPress(): boolean;
    set longPress(longPress: boolean);
    ok: EventEmitter<{
        data: any;
    }>;
    cancel: EventEmitter<{
        data: any;
    }>;
    readonly dialogElm: ElementRef<HTMLDivElement>;
    readonly AlertTypes: typeof AlertTypes;
    readonly defaults: DialogOptions;
    private _longPress?;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onOkClick(): void;
    onCancelClick(): void;
    onKeydown(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<AlertComponent, "ngx-alert-dialog", ["ngxAlertDialog"], { "data": "data"; "longPress": "longPress"; "type": "type"; "confirmButtonText": "confirmButtonText"; "confirmButtonClass": "confirmButtonClass"; "cancelButtonText": "cancelButtonText"; "cancelButtonClass": "cancelButtonClass"; }, { "ok": "ok"; "cancel": "cancel"; }, never, never>;
}

//# sourceMappingURL=alert.component.d.ts.map