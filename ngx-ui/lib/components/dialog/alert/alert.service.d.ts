import { Subject } from 'rxjs';
import { InjectionService } from '../../../services/injection/injection.service';
import { OverlayService } from '../../overlay/overlay.service';
import { DialogOptions } from '../dialog-options.interface';
import { DialogService } from '../dialog.service';
import { AlertComponent } from './alert.component';
import * as ɵngcc0 from '@angular/core';
export declare class AlertService extends DialogService<AlertComponent> {
    readonly injectionService: InjectionService;
    readonly overlayService: OverlayService;
    readonly defaults: DialogOptions;
    protected type: any;
    constructor(injectionService: InjectionService, overlayService: OverlayService);
    alert(options: DialogOptions): Subject<{
        type: string;
        data: any;
    }>;
    confirm(options: DialogOptions): Subject<{
        type: string;
        data: any;
    }>;
    prompt(options: DialogOptions): Subject<{
        type: string;
        data: any;
    }>;
    private createDialog;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<AlertService, never>;
}

//# sourceMappingURL=alert.service.d.ts.map