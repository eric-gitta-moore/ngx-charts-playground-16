import { Component, Input, ContentChild, Renderer2, ViewEncapsulation, ChangeDetectorRef, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { DropdownMenuDirective } from './dropdown-menu.directive';
import { DropdownToggleDirective } from './dropdown-toggle.directive';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InViewportMetadata } from 'ng-in-viewport';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["*"];
export class DropdownComponent {
    constructor(renderer, cd) {
        this.renderer = renderer;
        this.cd = cd;
        this.destroy$ = new Subject();
        this._positionAdjusted = false;
        this._open = false;
        this._showCaret = false;
        this._closeOnClick = true;
        this._closeOnOutsideClick = true;
        this._closeOnMouseLeave = false;
        this._leaveTimeout = null;
    }
    get positionAdjusted() {
        return this._positionAdjusted;
    }
    get open() {
        return this._open;
    }
    set open(open) {
        this._open = coerceBooleanProperty(open);
    }
    get showCaret() {
        return this._showCaret;
    }
    set showCaret(showCaret) {
        this._showCaret = coerceBooleanProperty(showCaret);
    }
    get closeOnClick() {
        return this._closeOnClick;
    }
    set closeOnClick(closeOnClick) {
        this._closeOnClick = coerceBooleanProperty(closeOnClick);
    }
    get closeOnOutsideClick() {
        return this._closeOnOutsideClick;
    }
    set closeOnOutsideClick(closeOnOutsideClick) {
        this._closeOnOutsideClick = coerceBooleanProperty(closeOnOutsideClick);
    }
    get closeOnMouseLeave() {
        return this._closeOnMouseLeave;
    }
    set closeOnMouseLeave(val) {
        this._closeOnMouseLeave = coerceBooleanProperty(val);
    }
    ngAfterContentInit() {
        if (this.dropdownToggle) {
            this.dropdownToggle.toggle.subscribe((ev) => this.onToggleClick(ev));
        }
        if (this.dropdownMenu) {
            this.dropdownMenu.options = { partial: false };
            this.dropdownMenu
                .getCallbackFn()
                .pipe(takeUntil(this.destroy$))
                // tslint:disable-next-line: deprecation
                .subscribe({ next: this.adjustMenuDirection.bind(this) });
        }
    }
    adjustMenuDirection(event) {
        if (!event.visible && this.open) {
            if (this.isIntersectingBottom(event[InViewportMetadata].entry)) {
                this.renderer.addClass(this.dropdownMenu.element, 'ngx-dropdown-menu--upwards');
            }
            else {
                this.renderer.removeClass(this.dropdownMenu.element, 'ngx-dropdown-menu--upwards');
            }
        }
        if (this.open) {
            this._positionAdjusted = true;
            this.cd.markForCheck();
        }
    }
    isIntersectingBottom(entry) {
        return entry.boundingClientRect.bottom >= entry.rootBounds.bottom;
    }
    ngOnDestroy() {
        if (this._documentListener)
            this._documentListener();
        this.destroy$.next();
        this.destroy$.complete();
    }
    onDocumentClick(e) {
        if (this.open && this.closeOnOutsideClick) {
            const isToggling = this.dropdownToggle.element.contains(e.target);
            const isMenuClick = !this.closeOnClick && this.dropdownMenu.element.contains(e.target);
            if (!isToggling && !isMenuClick) {
                this.close();
            }
        }
    }
    onToggleClick(_) {
        this.open = !this.open;
        if (this.open) {
            this._documentListener = this.renderer.listen(document, 'click', this.onDocumentClick.bind(this));
        }
        else {
            this._documentListener();
            this._positionAdjusted = false;
        }
    }
    onMouseLeave() {
        if (this.closeOnMouseLeave) {
            this._leaveTimeout = setTimeout(() => {
                this.close();
            }, 1000);
        }
    }
    onMouseEnter() {
        if (this._leaveTimeout) {
            clearTimeout(this._leaveTimeout);
        }
    }
    close() {
        if (this.dropdownMenu) {
            this.renderer.removeClass(this.dropdownMenu.element, 'ngx-dropdown-menu--upwards');
        }
        this.open = false;
        this._positionAdjusted = false;
        if (this._documentListener)
            this._documentListener();
        this.cd.markForCheck();
    }
}
DropdownComponent.ɵfac = function DropdownComponent_Factory(t) { return new (t || DropdownComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
DropdownComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: DropdownComponent, selectors: [["ngx-dropdown"]], contentQueries: function DropdownComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, DropdownToggleDirective, 5);
        ɵngcc0.ɵɵcontentQuery(dirIndex, DropdownMenuDirective, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownToggle = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.dropdownMenu = _t.first);
    } }, hostAttrs: [1, "ngx-dropdown"], hostVars: 6, hostBindings: function DropdownComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mouseleave", function DropdownComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); })("mouseenter", function DropdownComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("open", ctx.open)("adjusted", ctx.positionAdjusted)("has-caret", ctx.showCaret);
    } }, inputs: { open: "open", showCaret: "showCaret", closeOnClick: "closeOnClick", closeOnOutsideClick: "closeOnOutsideClick", closeOnMouseLeave: "closeOnMouseLeave" }, exportAs: ["ngxDropdown"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function DropdownComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, styles: [".ngx-dropdown{position:relative;padding-bottom:10px}.ngx-dropdown.open .ngx-dropdown-menu{display:block}.ngx-dropdown.adjusted .ngx-dropdown-menu{opacity:1;-webkit-animation:openAnimation .25s;animation:openAnimation .25s}.ngx-dropdown.has-caret .ngx-dropdown-menu:before{display:block}.ngx-dropdown .ngx-dropdown-toggle{cursor:pointer;display:inline-block}.ngx-dropdown .ngx-dropdown-toggle.disabled,.ngx-dropdown .ngx-dropdown-toggle.disabled>a,.ngx-dropdown .ngx-dropdown-toggle.disabled>button{cursor:not-allowed}.ngx-dropdown .ngx-dropdown-menu--upwards{bottom:100%;top:auto!important;margin-bottom:14px}.ngx-dropdown .ngx-dropdown-menu--upwards:before{transform:rotate(225deg)!important;bottom:-7px;top:auto!important}.ngx-dropdown .ngx-dropdown-menu{position:absolute;clear:left;top:100%;left:0;z-index:1000;min-width:180px;background:#313847;box-shadow:0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12);margin-top:0;opacity:0;display:none;transition:visibility 0s,opacity .25s ease-out}.ngx-dropdown .ngx-dropdown-menu:before{z-index:-1;content:\" \";display:none;position:absolute;left:10px;top:-6px;width:12px;height:12px;background:#313847;transform:rotate(45deg);border-bottom:0;border-right:0}.ngx-dropdown .ngx-dropdown-menu.align-right{left:auto;right:0}.ngx-dropdown .ngx-dropdown-menu.align-right:before{left:auto;right:6px}.ngx-dropdown .ngx-dropdown-menu>ul>li>a,.ngx-dropdown .ngx-dropdown-menu>ul>li>button{padding:5px 20px;clear:both;line-height:1.42857143;white-space:nowrap;width:100%;text-align:left;background:transparent;box-shadow:none;color:#cfcfcf;font-size:.9em;display:block}.ngx-dropdown .ngx-dropdown-menu>ul>li:hover{background:#262c38}@-webkit-keyframes openAnimation{0%{transform:translateY(-25px)}to{transform:translateY(0)}}@keyframes openAnimation{0%{transform:translateY(-25px)}to{transform:translateY(0)}}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-light-outline{min-width:130px;font-size:13px;border:1px solid #505c75;background:#262c38}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-light-outline:before{border-top:1px solid #505c75;border-left:1px solid #505c75;background:#262c38;z-index:10;top:-7px;transform:translate(-1.8px) rotate(45deg)}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-light-outline>ul{padding:9.5px 0;margin:2px 0 0;list-style:none}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-light-outline>ul>li{padding-top:0!important;color:#fff}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-light-outline>ul>li>a,.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-light-outline>ul>li>button{cursor:pointer;height:26px;display:block;clear:both;font-weight:400;line-height:1.42857;white-space:nowrap;font-size:13px;color:#fff}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-light-outline>ul>li:hover{background:#1f242f}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-light-outline>ul>li.active{background:#479eff;color:#fff}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-light-outline>ul>li.active>a,.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-light-outline>ul>li.active>button{color:#fff}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-light-outline>ul>li.divider-label{height:auto;margin:8px 0;padding:0 20px;overflow:hidden;background-color:transparent;background-color:initial;color:#72819f}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-dark-outline{min-width:130px;font-size:13px;border:1px solid #505c75;background:#222732}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-dark-outline:before{border-top:1px solid #505c75;border-left:1px solid #505c75;background:#222732;z-index:10;top:-7px;transform:translate(-1.8px) rotate(45deg)}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-dark-outline>ul{padding:9.5px 0;margin:2px 0 0;list-style:none}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-dark-outline>ul>li{padding-top:0!important;color:#afb7c8}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-dark-outline>ul>li>a,.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-dark-outline>ul>li>button{cursor:pointer;height:26px;display:block;clear:both;font-weight:400;line-height:1.42857;white-space:nowrap;font-size:13px;color:#afb7c8}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-dark-outline>ul>li:hover{background:#262c38}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-dark-outline>ul>li.active{background:#479eff;color:#afb7c8}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-dark-outline>ul>li.active>a,.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-dark-outline>ul>li.active>button{color:#fff}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-dark-outline>ul>li.divider-label{height:auto;margin:8px 0;padding:0 20px;overflow:hidden;background-color:transparent;background-color:initial;color:#72819f}"], encapsulation: 2, changeDetection: 0 });
DropdownComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
DropdownComponent.propDecorators = {
    open: [{ type: Input }],
    showCaret: [{ type: Input }],
    closeOnClick: [{ type: Input }],
    closeOnOutsideClick: [{ type: Input }],
    closeOnMouseLeave: [{ type: Input }],
    dropdownToggle: [{ type: ContentChild, args: [DropdownToggleDirective,] }],
    dropdownMenu: [{ type: ContentChild, args: [DropdownMenuDirective,] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DropdownComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxDropdown',
                selector: 'ngx-dropdown',
                template: '<ng-content></ng-content>',
                host: {
                    class: 'ngx-dropdown',
                    '[class.open]': 'open',
                    '[class.adjusted]': 'positionAdjusted',
                    '[class.has-caret]': 'showCaret'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-dropdown{position:relative;padding-bottom:10px}.ngx-dropdown.open .ngx-dropdown-menu{display:block}.ngx-dropdown.adjusted .ngx-dropdown-menu{opacity:1;-webkit-animation:openAnimation .25s;animation:openAnimation .25s}.ngx-dropdown.has-caret .ngx-dropdown-menu:before{display:block}.ngx-dropdown .ngx-dropdown-toggle{cursor:pointer;display:inline-block}.ngx-dropdown .ngx-dropdown-toggle.disabled,.ngx-dropdown .ngx-dropdown-toggle.disabled>a,.ngx-dropdown .ngx-dropdown-toggle.disabled>button{cursor:not-allowed}.ngx-dropdown .ngx-dropdown-menu--upwards{bottom:100%;top:auto!important;margin-bottom:14px}.ngx-dropdown .ngx-dropdown-menu--upwards:before{transform:rotate(225deg)!important;bottom:-7px;top:auto!important}.ngx-dropdown .ngx-dropdown-menu{position:absolute;clear:left;top:100%;left:0;z-index:1000;min-width:180px;background:#313847;box-shadow:0 1px 8px 0 rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12);margin-top:0;opacity:0;display:none;transition:visibility 0s,opacity .25s ease-out}.ngx-dropdown .ngx-dropdown-menu:before{z-index:-1;content:\" \";display:none;position:absolute;left:10px;top:-6px;width:12px;height:12px;background:#313847;transform:rotate(45deg);border-bottom:0;border-right:0}.ngx-dropdown .ngx-dropdown-menu.align-right{left:auto;right:0}.ngx-dropdown .ngx-dropdown-menu.align-right:before{left:auto;right:6px}.ngx-dropdown .ngx-dropdown-menu>ul>li>a,.ngx-dropdown .ngx-dropdown-menu>ul>li>button{padding:5px 20px;clear:both;line-height:1.42857143;white-space:nowrap;width:100%;text-align:left;background:transparent;box-shadow:none;color:#cfcfcf;font-size:.9em;display:block}.ngx-dropdown .ngx-dropdown-menu>ul>li:hover{background:#262c38}@-webkit-keyframes openAnimation{0%{transform:translateY(-25px)}to{transform:translateY(0)}}@keyframes openAnimation{0%{transform:translateY(-25px)}to{transform:translateY(0)}}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-light-outline{min-width:130px;font-size:13px;border:1px solid #505c75;background:#262c38}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-light-outline:before{border-top:1px solid #505c75;border-left:1px solid #505c75;background:#262c38;z-index:10;top:-7px;transform:translate(-1.8px) rotate(45deg)}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-light-outline>ul{padding:9.5px 0;margin:2px 0 0;list-style:none}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-light-outline>ul>li{padding-top:0!important;color:#fff}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-light-outline>ul>li>a,.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-light-outline>ul>li>button{cursor:pointer;height:26px;display:block;clear:both;font-weight:400;line-height:1.42857;white-space:nowrap;font-size:13px;color:#fff}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-light-outline>ul>li:hover{background:#1f242f}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-light-outline>ul>li.active{background:#479eff;color:#fff}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-light-outline>ul>li.active>a,.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-light-outline>ul>li.active>button{color:#fff}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-light-outline>ul>li.divider-label{height:auto;margin:8px 0;padding:0 20px;overflow:hidden;background-color:transparent;background-color:initial;color:#72819f}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-dark-outline{min-width:130px;font-size:13px;border:1px solid #505c75;background:#222732}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-dark-outline:before{border-top:1px solid #505c75;border-left:1px solid #505c75;background:#222732;z-index:10;top:-7px;transform:translate(-1.8px) rotate(45deg)}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-dark-outline>ul{padding:9.5px 0;margin:2px 0 0;list-style:none}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-dark-outline>ul>li{padding-top:0!important;color:#afb7c8}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-dark-outline>ul>li>a,.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-dark-outline>ul>li>button{cursor:pointer;height:26px;display:block;clear:both;font-weight:400;line-height:1.42857;white-space:nowrap;font-size:13px;color:#afb7c8}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-dark-outline>ul>li:hover{background:#262c38}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-dark-outline>ul>li.active{background:#479eff;color:#afb7c8}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-dark-outline>ul>li.active>a,.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-dark-outline>ul>li.active>button{color:#fff}.ngx-dropdown .ngx-dropdown-menu.ngx-dropdown-dark-outline>ul>li.divider-label{height:auto;margin:8px 0;padding:0 20px;overflow:hidden;background-color:transparent;background-color:initial;color:#72819f}"]
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { open: [{
            type: Input
        }], showCaret: [{
            type: Input
        }], closeOnClick: [{
            type: Input
        }], closeOnOutsideClick: [{
            type: Input
        }], closeOnMouseLeave: [{
            type: Input
        }], onMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }], onMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], dropdownToggle: [{
            type: ContentChild,
            args: [DropdownToggleDirective]
        }], dropdownMenu: [{
            type: ContentChild,
            args: [DropdownMenuDirective]
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxZQUFZLEVBR1osU0FBUyxFQUNULGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQWdCcEQsTUFBTSxPQUFPLGlCQUFpQjtBQUFHLElBMEQvQixZQUE2QixRQUFtQixFQUFtQixFQUFxQjtBQUFJLFFBQS9ELGFBQVEsR0FBUixRQUFRLENBQVc7QUFBQyxRQUFrQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtBQUFDLFFBekR6RixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUMzQixRQUFVLHNCQUFpQixHQUFHLEtBQUssQ0FBQztBQUNwQyxRQWdEVSxVQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLFFBQVUsZUFBVSxHQUFHLEtBQUssQ0FBQztBQUM3QixRQUFVLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0FBQy9CLFFBQVUseUJBQW9CLEdBQUcsSUFBSSxDQUFDO0FBQ3RDLFFBQVUs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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ29udGVudENoaWxkLFxuICBPbkRlc3Ryb3ksXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSG9zdExpc3RlbmVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuaW1wb3J0IHsgRHJvcGRvd25NZW51RGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wZG93bi1tZW51LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJblZpZXdwb3J0TWV0YWRhdGEgfSBmcm9tICduZy1pbi12aWV3cG9ydCc7XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ25neERyb3Bkb3duJyxcbiAgc2VsZWN0b3I6ICduZ3gtZHJvcGRvd24nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wZG93bi5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICduZ3gtZHJvcGRvd24nLFxuICAgICdbY2xhc3Mub3Blbl0nOiAnb3BlbicsXG4gICAgJ1tjbGFzcy5hZGp1c3RlZF0nOiAncG9zaXRpb25BZGp1c3RlZCcsXG4gICAgJ1tjbGFzcy5oYXMtY2FyZXRdJzogJ3Nob3dDYXJldCdcbiAgfSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgX3Bvc2l0aW9uQWRqdXN0ZWQgPSBmYWxzZTtcbiAgcHVibGljIGdldCBwb3NpdGlvbkFkanVzdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbkFkanVzdGVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IG9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW47XG4gIH1cbiAgc2V0IG9wZW4ob3BlbjogYm9vbGVhbikge1xuICAgIHRoaXMuX29wZW4gPSBjb2VyY2VCb29sZWFuUHJvcGVydHkob3Blbik7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgc2hvd0NhcmV0KCkge1xuICAgIHJldHVybiB0aGlzLl9zaG93Q2FyZXQ7XG4gIH1cbiAgc2V0IHNob3dDYXJldChzaG93Q2FyZXQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93Q2FyZXQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoc2hvd0NhcmV0KTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBjbG9zZU9uQ2xpY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3NlT25DbGljaztcbiAgfVxuICBzZXQgY2xvc2VPbkNsaWNrKGNsb3NlT25DbGljazogYm9vbGVhbikge1xuICAgIHRoaXMuX2Nsb3NlT25DbGljayA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShjbG9zZU9uQ2xpY2spO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGNsb3NlT25PdXRzaWRlQ2xpY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3NlT25PdXRzaWRlQ2xpY2s7XG4gIH1cbiAgc2V0IGNsb3NlT25PdXRzaWRlQ2xpY2soY2xvc2VPbk91dHNpZGVDbGljazogYm9vbGVhbikge1xuICAgIHRoaXMuX2Nsb3NlT25PdXRzaWRlQ2xpY2sgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoY2xvc2VPbk91dHNpZGVDbGljayk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgY2xvc2VPbk1vdXNlTGVhdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3NlT25Nb3VzZUxlYXZlO1xuICB9XG4gIHNldCBjbG9zZU9uTW91c2VMZWF2ZSh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jbG9zZU9uTW91c2VMZWF2ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWwpO1xuICB9XG5cbiAgQENvbnRlbnRDaGlsZChEcm9wZG93blRvZ2dsZURpcmVjdGl2ZSkgcmVhZG9ubHkgZHJvcGRvd25Ub2dnbGU6IERyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKERyb3Bkb3duTWVudURpcmVjdGl2ZSkgcmVhZG9ubHkgZHJvcGRvd25NZW51OiBEcm9wZG93bk1lbnVEaXJlY3RpdmU7XG5cbiAgcHJpdmF0ZSBfZG9jdW1lbnRMaXN0ZW5lcj86ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgX29wZW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd0NhcmV0ID0gZmFsc2U7XG4gIHByaXZhdGUgX2Nsb3NlT25DbGljayA9IHRydWU7XG4gIHByaXZhdGUgX2Nsb3NlT25PdXRzaWRlQ2xpY2sgPSB0cnVlO1xuICBwcml2YXRlIF9jbG9zZU9uTW91c2VMZWF2ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9sZWF2ZVRpbWVvdXQgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSByZWFkb25seSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRyb3Bkb3duVG9nZ2xlKSB7XG4gICAgICB0aGlzLmRyb3Bkb3duVG9nZ2xlLnRvZ2dsZS5zdWJzY3JpYmUoKGV2OiBFdmVudCkgPT4gdGhpcy5vblRvZ2dsZUNsaWNrKGV2KSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZHJvcGRvd25NZW51KSB7XG4gICAgICB0aGlzLmRyb3Bkb3duTWVudS5vcHRpb25zID0geyBwYXJ0aWFsOiBmYWxzZSB9O1xuICAgICAgdGhpcy5kcm9wZG93bk1lbnVcbiAgICAgICAgLmdldENhbGxiYWNrRm4oKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgICAgICAgLnN1YnNjcmliZSh7IG5leHQ6IHRoaXMuYWRqdXN0TWVudURpcmVjdGlvbi5iaW5kKHRoaXMpIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFkanVzdE1lbnVEaXJlY3Rpb24oZXZlbnQ6IHtcbiAgICBbSW5WaWV3cG9ydE1ldGFkYXRhXTogeyBlbnRyeTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSB9O1xuICAgIHRhcmdldDogSFRNTEVsZW1lbnQ7XG4gICAgdmlzaWJsZTogYm9vbGVhbjtcbiAgfSk6IHZvaWQge1xuICAgIGlmICghZXZlbnQudmlzaWJsZSAmJiB0aGlzLm9wZW4pIHtcbiAgICAgIGlmICh0aGlzLmlzSW50ZXJzZWN0aW5nQm90dG9tKGV2ZW50W0luVmlld3BvcnRNZXRhZGF0YV0uZW50cnkpKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kcm9wZG93bk1lbnUuZWxlbWVudCwgJ25neC1kcm9wZG93bi1tZW51LS11cHdhcmRzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZHJvcGRvd25NZW51LmVsZW1lbnQsICduZ3gtZHJvcGRvd24tbWVudS0tdXB3YXJkcycpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICB0aGlzLl9wb3NpdGlvbkFkanVzdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgaXNJbnRlcnNlY3RpbmdCb3R0b20oZW50cnk6IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZW50cnkuYm91bmRpbmdDbGllbnRSZWN0LmJvdHRvbSA+PSBlbnRyeS5yb290Qm91bmRzLmJvdHRvbTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kb2N1bWVudExpc3RlbmVyKSB0aGlzLl9kb2N1bWVudExpc3RlbmVyKCk7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgb25Eb2N1bWVudENsaWNrKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3BlbiAmJiB0aGlzLmNsb3NlT25PdXRzaWRlQ2xpY2spIHtcbiAgICAgIGNvbnN0IGlzVG9nZ2xpbmcgPSB0aGlzLmRyb3Bkb3duVG9nZ2xlLmVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQgYXMgTm9kZSk7XG4gICAgICBjb25zdCBpc01lbnVDbGljayA9ICF0aGlzLmNsb3NlT25DbGljayAmJiB0aGlzLmRyb3Bkb3duTWVudS5lbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0IGFzIE5vZGUpO1xuXG4gICAgICBpZiAoIWlzVG9nZ2xpbmcgJiYgIWlzTWVudUNsaWNrKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblRvZ2dsZUNsaWNrKF86IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcblxuICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgIHRoaXMuX2RvY3VtZW50TGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3Rlbihkb2N1bWVudCwgJ2NsaWNrJywgdGhpcy5vbkRvY3VtZW50Q2xpY2suYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RvY3VtZW50TGlzdGVuZXIoKTtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uQWRqdXN0ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgb25Nb3VzZUxlYXZlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsb3NlT25Nb3VzZUxlYXZlKSB7XG4gICAgICB0aGlzLl9sZWF2ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXG4gIG9uTW91c2VFbnRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbGVhdmVUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fbGVhdmVUaW1lb3V0KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsb3NlKCkge1xuICAgIGlmICh0aGlzLmRyb3Bkb3duTWVudSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRyb3Bkb3duTWVudS5lbGVtZW50LCAnbmd4LWRyb3Bkb3duLW1lbnUtLXVwd2FyZHMnKTtcbiAgICB9XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy5fcG9zaXRpb25BZGp1c3RlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLl9kb2N1bWVudExpc3RlbmVyKSB0aGlzLl9kb2N1bWVudExpc3RlbmVyKCk7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19