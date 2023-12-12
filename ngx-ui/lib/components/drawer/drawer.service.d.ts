import { ComponentRef, Renderer2, RendererFactory2 } from '@angular/core';
import { InjectionService } from '../../services/injection/injection.service';
import { InjectionRegistryService } from '../../services/injection-registry/injection-registry.service';
import { DrawerComponent } from './drawer.component';
import { OverlayService } from '../overlay/overlay.service';
import { DrawerOptions } from './drawer-options.interface';
import * as ɵngcc0 from '@angular/core';
export declare class DrawerService extends InjectionRegistryService<DrawerComponent> {
    readonly injectionService: InjectionService;
    private readonly overlayService;
    private readonly rendererFactory;
    type: any;
    readonly defaults: DrawerOptions;
    readonly renderer: Renderer2;
    private zIndex;
    private size;
    private parentListenerFunc;
    constructor(injectionService: InjectionService, overlayService: OverlayService, rendererFactory: RendererFactory2);
    create(options: DrawerOptions): ComponentRef<DrawerComponent>;
    destroy(component: ComponentRef<DrawerComponent>): void;
    assignDefaults(options: DrawerOptions): any;
    createSubscriptions(component: ComponentRef<DrawerComponent>, isRoot?: boolean, parentContainer?: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<DrawerService, never>;
}

//# sourceMappingURL=drawer.service.d.ts.map