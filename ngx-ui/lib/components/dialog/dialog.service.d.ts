import { InjectionRegistryService } from '../../services/injection-registry/injection-registry.service';
import { InjectionService } from '../../services/injection/injection.service';
import { OverlayService } from '../overlay/overlay.service';
import { DialogOptions } from './dialog-options.interface';
import { DialogComponent } from './dialog.component';
import * as ɵngcc0 from '@angular/core';
export declare class DialogService<T = DialogComponent> extends InjectionRegistryService<T> {
    readonly injectionService: InjectionService;
    readonly overlayService: OverlayService;
    readonly defaults: DialogOptions;
    protected type: any;
    private zIndex;
    constructor(injectionService: InjectionService, overlayService: OverlayService);
    create(options: DialogOptions): import("@angular/core").ComponentRef<T>;
    destroy(component: any): void;
    createSubscriptions(triggerComponent: any): void;
    assignDefaults(options: DialogOptions): DialogOptions;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DialogService<any>, never>;
}

//# sourceMappingURL=dialog.service.d.ts.map