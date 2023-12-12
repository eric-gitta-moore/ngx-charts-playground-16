import { Component, Input, Output, ContentChildren, QueryList, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TabComponent } from './tab.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function TabsComponent_li_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function TabsComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li", 3);
    ɵngcc0.ɵɵelementStart(1, "button", 4);
    ɵngcc0.ɵɵlistener("click", function TabsComponent_li_2_Template_button_click_1_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r4); const tab_r1 = restoredCtx.$implicit; const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.tabClicked(tab_r1); });
    ɵngcc0.ɵɵtemplate(2, TabsComponent_li_2_ng_container_2_Template, 1, 0, "ng-container", 5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    ɵngcc0.ɵɵclassProp("disabled", tab_r1.disabled)("active", tab_r1.active);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("disabled", tab_r1.disabled);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", tab_r1.labelTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(7, _c0, tab_r1));
} }
const _c1 = ["*"];
export class TabsComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.selectTab = new EventEmitter();
        // For backwards compat... user selectTab instead.
        // eslint-disable-next-line @angular-eslint/no-output-native
        this.select = this.selectTab;
        this.tabEvents = [];
        this._destroy$ = new Subject();
    }
    get index() {
        const tabs = this.tabs.toArray();
        return tabs.findIndex(tab => tab.active);
    }
    ngAfterContentInit() {
        const tabs = this.tabs.toArray();
        const actives = this.tabs.filter(t => t.active);
        if (actives.length > 1) {
            // eslint-disable-next-line no-console
            console.error("Multiple active tabs set 'active'");
        }
        else if (!actives.length && tabs.length) {
            setTimeout(() => {
                tabs[0].active = true;
                tabs[0].detectChanges();
                this.cdr.markForCheck();
            });
        }
        // Watches for changes to tab inputs
        this.setupTabInputWatcher();
        // Watches for change tabs themselves
        this.tabs.changes.pipe(takeUntil(this._destroy$)).subscribe(() => {
            this.setupTabInputWatcher();
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
    tabClicked(activeTab) {
        this.tabs.forEach(tab => (tab.active = false));
        activeTab.active = true;
        this.tabs.forEach(tab => tab.detectChanges());
        this.cdr.markForCheck();
        this.selectTab.emit(activeTab);
    }
    move(offset) {
        const tabs = this.tabs.toArray();
        for (let i = this.index + offset; i < tabs.length && i >= 0; i += offset) {
            const tab = tabs[i];
            if (tab && !tab.disabled) {
                this.tabClicked(tabs[i]);
                return;
            }
        }
    }
    next() {
        this.move(1);
    }
    prev() {
        this.move(-1);
    }
    setupTabInputWatcher() {
        this.tabEvents.forEach(t => {
            t.unsubscribe();
        });
        this.tabEvents = this.tabs.toArray().map(t => {
            return t.inputChanges.pipe(takeUntil(this._destroy$)).subscribe(() => {
                this.cdr.markForCheck();
            });
        });
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
TabsComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: TabsComponent, selectors: [["ngx-tabs"]], contentQueries: function TabsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, TabComponent, 4);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.tabs = _t);
    } }, hostAttrs: [1, "ngx-tabs"], inputs: { vertical: "vertical" }, outputs: { selectTab: "selectTab", select: "select" }, exportAs: ["ngxTabs"], ngContentSelectors: _c1, decls: 5, vars: 5, consts: [[1, "ngx-tabs-list", "list-reset"], ["class", "ngx-tab", 3, "disabled", "active", 4, "ngFor", "ngForOf"], [1, "ngx-tab-content"], [1, "ngx-tab"], [3, "disabled", "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "section");
        ɵngcc0.ɵɵelementStart(1, "ul", 0);
        ɵngcc0.ɵɵtemplate(2, TabsComponent_li_2_Template, 3, 9, "li", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵprojection(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("tabs-vertical", ctx.vertical)("tabs-horizontal", !ctx.vertical);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.tabs);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet], styles: [".ngx-tabs{margin-bottom:2em;display:block}.ngx-tabs .ngx-tabs-list{display:block;border-bottom:2px solid #313847}.ngx-tabs .ngx-tabs-list li{display:inline-block}.ngx-tabs .ngx-tabs-list li.active button,.ngx-tabs .ngx-tabs-list li.active button:focus,.ngx-tabs .ngx-tabs-list li.active button:hover{color:#cfcfcf;border-width:0}.ngx-tabs .ngx-tabs-list li.active button:not([disabled]):after,.ngx-tabs .ngx-tabs-list li:hover button:not([disabled]):after{transform:scale(1)}.ngx-tabs .ngx-tabs-list li button{border:none;color:#cdd2dd;background:transparent;box-shadow:none;font-size:1.1rem;box-sizing:border-box;display:inline-block;margin:0;padding:.35em .75em;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;font:inherit;font-size:1em;outline:none;bottom:-1px}.ngx-tabs .ngx-tabs-list li button:not([disabled]):hover{border:none;color:#cfcfcf;background:transparent;opacity:1}.ngx-tabs .ngx-tabs-list li button:after{content:\"\";background:#1483ff;height:2px;position:absolute;width:100%;left:0;bottom:-1px;transition:all .25s ease 0s;transform:scale(0);background:#1483ff none repeat scroll 0 0;color:#cfcfcf}.ngx-tabs .ngx-tab-content{padding:10px}"], encapsulation: 2, changeDetection: 0 });
TabsComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
TabsComponent.propDecorators = {
    vertical: [{ type: Input }],
    selectTab: [{ type: Output }],
    select: [{ type: Output }],
    tabs: [{ type: ContentChildren, args: [TabComponent,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(TabsComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxTabs',
                selector: 'ngx-tabs',
                template: "<section>\n  <ul class=\"ngx-tabs-list list-reset\" [class.tabs-vertical]=\"vertical\" [class.tabs-horizontal]=\"!vertical\">\n    <li *ngFor=\"let tab of tabs\" class=\"ngx-tab\" [class.disabled]=\"tab.disabled\" [class.active]=\"tab.active\">\n      <button (click)=\"tabClicked(tab)\" [disabled]=\"tab.disabled\">\n        <ng-container *ngTemplateOutlet=\"tab.labelTemplate; context: { $implicit: tab }\"> </ng-container>\n      </button>\n    </li>\n  </ul>\n  <div class=\"ngx-tab-content\">\n    <ng-content></ng-content>\n  </div>\n</section>\n",
                host: {
                    class: 'ngx-tabs'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-tabs{margin-bottom:2em;display:block}.ngx-tabs .ngx-tabs-list{display:block;border-bottom:2px solid #313847}.ngx-tabs .ngx-tabs-list li{display:inline-block}.ngx-tabs .ngx-tabs-list li.active button,.ngx-tabs .ngx-tabs-list li.active button:focus,.ngx-tabs .ngx-tabs-list li.active button:hover{color:#cfcfcf;border-width:0}.ngx-tabs .ngx-tabs-list li.active button:not([disabled]):after,.ngx-tabs .ngx-tabs-list li:hover button:not([disabled]):after{transform:scale(1)}.ngx-tabs .ngx-tabs-list li button{border:none;color:#cdd2dd;background:transparent;box-shadow:none;font-size:1.1rem;box-sizing:border-box;display:inline-block;margin:0;padding:.35em .75em;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;font:inherit;font-size:1em;outline:none;bottom:-1px}.ngx-tabs .ngx-tabs-list li button:not([disabled]):hover{border:none;color:#cfcfcf;background:transparent;opacity:1}.ngx-tabs .ngx-tabs-list li button:after{content:\"\";background:#1483ff;height:2px;position:absolute;width:100%;left:0;bottom:-1px;transition:all .25s ease 0s;transform:scale(0);background:#1483ff none repeat scroll 0 0;color:#cfcfcf}.ngx-tabs .ngx-tab-content{padding:10px}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { selectTab: [{
            type: Output
        }], select: [{
            type: Output
        }], vertical: [{
            type: Input
        }], tabs: [{
            type: ContentChildren,
            args: [TabComponent]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvdGFicy90YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sZUFBZSxFQUNmLFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBRWpCLHVCQUF1QixFQUN2QixpQkFBaUIsRUFFbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWEvQyxNQUFNLE9BQU8sYUFBYTtBQUFHLElBbUIzQixZQUFxQixHQUFzQjtBQUFJLFFBQTFCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsUUFoQmxDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzNDLFFBQUUsa0RBQWtEO0FBQ3BELFFBQUUsNERBQTREO0FBQzlELFFBQVksV0FBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDcEMsUUFHVSxjQUFTLEdBQW1CLEVBQUUsQ0FBQztBQUN6QyxRQU1tQixjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztBQUNuRCxJQUNnRCxDQUFDO0FBQ2pELElBUkUsSUFBSSxLQUFLO0FBQUssUUFDWixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3JDLFFBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdD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RztBQUVILHVCQWlCRSxLQUFLO0FBQUssd0JBRVYsTUFBTTtBQUFLLHFCQUdYLE1BQU07QUFBSyxtQkFFWCxlQUFlLFNBQUMsWUFBWTtBQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgRXZlbnRFbWl0dGVyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSAnLi90YWIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnbmd4VGFicycsXG4gIHNlbGVjdG9yOiAnbmd4LXRhYnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFicy5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25neC10YWJzJ1xuICB9LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdHlsZVVybHM6IFsnLi90YWJzLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSB2ZXJ0aWNhbDogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgc2VsZWN0VGFiID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyBGb3IgYmFja3dhcmRzIGNvbXBhdC4uLiB1c2VyIHNlbGVjdFRhYiBpbnN0ZWFkLlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIHNlbGVjdCA9IHRoaXMuc2VsZWN0VGFiO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oVGFiQ29tcG9uZW50KSByZWFkb25seSB0YWJzOiBRdWVyeUxpc3Q8VGFiQ29tcG9uZW50PjtcblxuICBwcml2YXRlIHRhYkV2ZW50czogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBnZXQgaW5kZXgoKTogbnVtYmVyIHtcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcbiAgICByZXR1cm4gdGFicy5maW5kSW5kZXgodGFiID0+IHRhYi5hY3RpdmUpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHJlYWRvbmx5IGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xuICAgIGNvbnN0IGFjdGl2ZXMgPSB0aGlzLnRhYnMuZmlsdGVyKHQgPT4gdC5hY3RpdmUpO1xuXG4gICAgaWYgKGFjdGl2ZXMubGVuZ3RoID4gMSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJNdWx0aXBsZSBhY3RpdmUgdGFicyBzZXQgJ2FjdGl2ZSdcIik7XG4gICAgfSBlbHNlIGlmICghYWN0aXZlcy5sZW5ndGggJiYgdGFicy5sZW5ndGgpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0YWJzWzBdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRhYnNbMF0uZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFdhdGNoZXMgZm9yIGNoYW5nZXMgdG8gdGFiIGlucHV0c1xuICAgIHRoaXMuc2V0dXBUYWJJbnB1dFdhdGNoZXIoKTtcblxuICAgIC8vIFdhdGNoZXMgZm9yIGNoYW5nZSB0YWJzIHRoZW1zZWx2ZXNcbiAgICB0aGlzLnRhYnMuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNldHVwVGFiSW5wdXRXYXRjaGVyKCk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2Rlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgdGFiQ2xpY2tlZChhY3RpdmVUYWI6IFRhYkNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMudGFicy5mb3JFYWNoKHRhYiA9PiAodGFiLmFjdGl2ZSA9IGZhbHNlKSk7XG5cbiAgICBhY3RpdmVUYWIuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnRhYnMuZm9yRWFjaCh0YWIgPT4gdGFiLmRldGVjdENoYW5nZXMoKSk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG5cbiAgICB0aGlzLnNlbGVjdFRhYi5lbWl0KGFjdGl2ZVRhYik7XG4gIH1cblxuICBtb3ZlKG9mZnNldDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgdGFicyA9IHRoaXMudGFicy50b0FycmF5KCk7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuaW5kZXggKyBvZmZzZXQ7IGkgPCB0YWJzLmxlbmd0aCAmJiBpID49IDA7IGkgKz0gb2Zmc2V0KSB7XG4gICAgICBjb25zdCB0YWIgPSB0YWJzW2ldO1xuICAgICAgaWYgKHRhYiAmJiAhdGFiLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMudGFiQ2xpY2tlZCh0YWJzW2ldKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5tb3ZlKDEpO1xuICB9XG5cbiAgcHJldigpOiB2b2lkIHtcbiAgICB0aGlzLm1vdmUoLTEpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cFRhYklucHV0V2F0Y2hlcigpIHtcbiAgICB0aGlzLnRhYkV2ZW50cy5mb3JFYWNoKHQgPT4ge1xuICAgICAgdC51bnN1YnNjcmliZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy50YWJFdmVudHMgPSB0aGlzLnRhYnMudG9BcnJheSgpLm1hcCh0ID0+IHtcbiAgICAgIHJldHVybiB0LmlucHV0Q2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==