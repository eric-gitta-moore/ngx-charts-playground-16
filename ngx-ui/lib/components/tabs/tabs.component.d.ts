import { QueryList, EventEmitter, AfterContentInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { TabComponent } from './tab.component';
import * as ɵngcc0 from '@angular/core';
export declare class TabsComponent implements AfterContentInit, OnDestroy {
    readonly cdr: ChangeDetectorRef;
    vertical: boolean;
    selectTab: EventEmitter<any>;
    select: EventEmitter<any>;
    readonly tabs: QueryList<TabComponent>;
    private tabEvents;
    get index(): number;
    private readonly _destroy$;
    constructor(cdr: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    tabClicked(activeTab: TabComponent): void;
    move(offset: number): void;
    next(): void;
    prev(): void;
    private setupTabInputWatcher;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TabsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<TabsComponent, "ngx-tabs", ["ngxTabs"], { "vertical": "vertical"; }, { "selectTab": "selectTab"; "select": "select"; }, ["tabs"], ["*"]>;
}

//# sourceMappingURL=tabs.component.d.ts.map