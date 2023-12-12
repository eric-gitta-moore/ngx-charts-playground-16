import { EventEmitter } from '@angular/core';
import { SectionHeaderComponent } from './section-header.component';
import { SectionApperance } from './section-appearance.enum';
import { TogglePosition } from './section-toggle-position.enum';
import * as ɵngcc0 from '@angular/core';
export declare class SectionComponent {
    get outline(): boolean;
    sectionCollapsed: boolean;
    sectionCollapsible: boolean;
    headerToggle: boolean;
    sectionTitle: string;
    padding: any;
    appearance: SectionApperance;
    togglePosition: TogglePosition;
    toggle: EventEmitter<any>;
    headerComp: SectionHeaderComponent;
    readonly TogglePosition: typeof TogglePosition;
    onSectionClicked(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<SectionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<SectionComponent, "ngx-section", ["ngxSection"], { "sectionCollapsed": "sectionCollapsed"; "sectionCollapsible": "sectionCollapsible"; "headerToggle": "headerToggle"; "padding": "padding"; "appearance": "appearance"; "togglePosition": "togglePosition"; "sectionTitle": "sectionTitle"; }, { "toggle": "toggle"; }, ["headerComp"], ["ngx-section-header", "*"]>;
}

//# sourceMappingURL=section.component.d.ts.map