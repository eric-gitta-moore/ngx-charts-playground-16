import { InjectionService } from '../../services/injection/injection.service';
import * as ɵngcc0 from '@angular/core';
export declare class LoadingService {
    private readonly injectionService;
    threshold: number;
    set progress(val: number);
    get progress(): number;
    get count(): number;
    private get instance();
    private _count;
    private timeout;
    private component;
    private _progress;
    constructor(injectionService: InjectionService);
    start(autoIncrement?: boolean): void;
    stop(): void;
    reset(num?: number): void;
    complete(all?: boolean): void;
    hide(): void;
    private create;
    private increment;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<LoadingService, never>;
}

//# sourceMappingURL=loading.service.d.ts.map