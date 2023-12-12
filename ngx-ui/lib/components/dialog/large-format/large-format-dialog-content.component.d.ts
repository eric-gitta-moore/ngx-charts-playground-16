import { ElementRef, EventEmitter, TemplateRef } from '@angular/core';
import { AlertService } from '../alert/alert.service';
import { DialogOptions } from '../dialog-options.interface';
import { LargeFormatDialogFooterComponent } from './components/large-format-dialog-footer/large-format-dialog-footer.component';
import * as ɵngcc0 from '@angular/core';
export declare class LargeFormatDialogContentComponent {
    elementRef: ElementRef;
    private readonly alertService;
    dialogTitle: string;
    dialogSubtitle?: string;
    dialogActionTitle: string;
    dirty: boolean;
    dialogDirtyActionTitle: string;
    dirtyAlertOptions?: DialogOptions;
    skipDirtyAlert: boolean;
    closeOrCancel: EventEmitter<boolean>;
    hostClass: boolean;
    footerComponent?: LargeFormatDialogFooterComponent;
    stepperTemplate?: TemplateRef<unknown>;
    tabsTemplate?: TemplateRef<unknown>;
    constructor(elementRef: ElementRef, alertService: AlertService);
    onCloseOrCancel(isDirty: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<LargeFormatDialogContentComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<LargeFormatDialogContentComponent, "ngx-large-format-dialog-content", ["ngxLargeFormatDialogContent"], { "dialogTitle": "dialogTitle"; "dialogActionTitle": "dialogActionTitle"; "dirty": "dirty"; "dialogDirtyActionTitle": "dialogDirtyActionTitle"; "skipDirtyAlert": "skipDirtyAlert"; "dialogSubtitle": "dialogSubtitle"; "dirtyAlertOptions": "dirtyAlertOptions"; }, { "closeOrCancel": "closeOrCancel"; }, ["footerComponent", "stepperTemplate", "tabsTemplate"], ["*", "ngx-large-format-dialog-footer"]>;
}

//# sourceMappingURL=large-format-dialog-content.component.d.ts.map