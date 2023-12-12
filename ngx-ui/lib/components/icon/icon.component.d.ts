import { ElementRef, OnChanges, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IconRegistryService } from '../../services/icon-registry/icon-registry.service';
import * as ɵngcc0 from '@angular/core';
export declare class IconComponent implements OnChanges, OnInit {
    private http;
    private elementRef;
    private iconRegisteryService;
    fontIcon: string | string[];
    alt: string;
    defaultPath: string;
    fontSet: string;
    set svgSrc(val: string);
    cssClasses: string[];
    constructor(http: HttpClient, elementRef: ElementRef, iconRegisteryService: IconRegistryService);
    ngOnChanges(): void;
    ngOnInit(): void;
    update(): void;
    loadSvg(val: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<IconComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<IconComponent, "ngx-icon", ["ngxIcon"], { "defaultPath": "defaultPath"; "fontSet": "fontSet"; "svgSrc": "svgSrc"; "fontIcon": "fontIcon"; "alt": "alt"; }, {}, never, ["*", "*"]>;
}

//# sourceMappingURL=icon.component.d.ts.map