import * as ɵngcc0 from '@angular/core';
export declare class IconRegistryService {
    private _defaultFontSetClass;
    private _iconMap;
    setDefaultFontSetClass(iconSet: string): string;
    get(keys: string | string[], set?: string): string[];
    lookup(keys: string | string[], set?: string): string[];
    add(key: string, icon: string | string[]): void;
    private _expandKeys;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<IconRegistryService, never>;
}

//# sourceMappingURL=icon-registry.service.d.ts.map