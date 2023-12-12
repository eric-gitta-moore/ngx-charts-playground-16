import { trigger } from '@angular/animations';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { fadeInAnimation } from '../../animations/fade-in.animation';
import { slideDownFadeOutAnimation } from '../../animations/slide-down-fade-out.animation';
import { HotkeysService } from './hotkeys.service';
import { HotkeyStatus } from './hotkey-status.enum';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './hotkeys.service';
import * as ɵngcc2 from '@angular/common';

function HotkeysComponent_div_0_div_1_div_1_span_3_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1, " + ");
    ɵngcc0.ɵɵelementEnd();
} }
function HotkeysComponent_div_0_div_1_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵelementStart(1, "span", 10);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, HotkeysComponent_div_0_div_1_div_1_span_3_span_3_Template, 2, 0, "span", 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const key_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const hotkey_r5 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(key_r7);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", i_r8 < hotkey_r5.keys.length - 1);
} }
function HotkeysComponent_div_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementStart(2, "div", 8);
    ɵngcc0.ɵɵtemplate(3, HotkeysComponent_div_0_div_1_div_1_span_3_Template, 4, 2, "span", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const hotkey_r5 = ctx.$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", hotkey_r5.description, " ");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", hotkey_r5.keys);
} }
function HotkeysComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 5);
    ɵngcc0.ɵɵtemplate(1, HotkeysComponent_div_0_div_1_div_1_Template, 4, 2, "div", 6);
    ɵngcc0.ɵɵpipe(2, "async");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("@containerAnimationState", "active");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind1(2, 2, ctx_r1.hotkeys$));
} }
function HotkeysComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵlistener("click", function HotkeysComponent_div_0_div_2_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const ctx_r11 = ɵngcc0.ɵɵnextContext(2); return ctx_r11.hide(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@iconAnimationState", "active");
} }
function HotkeysComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵlistener("click", function HotkeysComponent_div_0_div_3_Template_div_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r14); const ctx_r13 = ɵngcc0.ɵɵnextContext(2); return ctx_r13.show(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    ɵngcc0.ɵɵproperty("@iconAnimationState", "active");
} }
function HotkeysComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵtemplate(1, HotkeysComponent_div_0_div_1_Template, 3, 4, "div", 2);
    ɵngcc0.ɵɵtemplate(2, HotkeysComponent_div_0_div_2_Template, 1, 1, "div", 3);
    ɵngcc0.ɵɵtemplate(3, HotkeysComponent_div_0_div_3_Template, 1, 1, "div", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.visible);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.visible);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.visible);
} }
export class HotkeysComponent {
    constructor(_hotkeysService) {
        this._hotkeysService = _hotkeysService;
        this.hotkeys$ = new BehaviorSubject([]);
        this.visible = false;
        this._destroy = new Subject();
    }
    ngOnInit() {
        this._hotkeysService.changeEvent.pipe(takeUntil(this._destroy)).subscribe(this.updateHotkeys.bind(this));
        this.updateHotkeys(this._hotkeysService.hotkeys);
    }
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
    }
    updateHotkeys(hotkeys) {
        const hks = [];
        for (const comb in hotkeys) {
            for (const hotkey of hotkeys[comb]) {
                if (hotkey.status === HotkeyStatus.Active && hotkey.visible) {
                    hks.push(hotkey);
                }
            }
        }
        this.hotkeys$.next(hks);
    }
    show() {
        this.visible = true;
    }
    hide() {
        this.visible = false;
    }
}
HotkeysComponent.ɵfac = function HotkeysComponent_Factory(t) { return new (t || HotkeysComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.HotkeysService)); };
HotkeysComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: HotkeysComponent, selectors: [["ngx-hotkeys"]], exportAs: ["ngxHotkeys"], decls: 2, vars: 3, consts: [["class", "hotkeys-container", 4, "ngIf"], [1, "hotkeys-container"], ["class", "hotkeys", 4, "ngIf"], ["class", "close-icon icon icon-x-filled", 3, "click", 4, "ngIf"], ["class", "hotkeys-icon icon icon-keyboard", 3, "click", 4, "ngIf"], [1, "hotkeys"], ["class", "hotkey-row", 4, "ngFor", "ngForOf"], [1, "hotkey-row"], [1, "combination"], [4, "ngFor", "ngForOf"], [1, "key"], [4, "ngIf"], [1, "close-icon", "icon", "icon-x-filled", 3, "click"], [1, "hotkeys-icon", "icon", "icon-keyboard", 3, "click"]], template: function HotkeysComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, HotkeysComponent_div_0_Template, 4, 3, "div", 0);
        ɵngcc0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ɵngcc0.ɵɵpipeBind1(1, 1, ctx.hotkeys$).length > 0);
    } }, directives: [ɵngcc2.NgIf, ɵngcc2.NgForOf], pipes: [ɵngcc2.AsyncPipe], styles: [".hotkeys-container[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:20px;z-index:2000}.hotkeys-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{cursor:pointer;width:40px;height:40px;line-height:43px;text-align:center;border-radius:20px;position:absolute;bottom:0;right:0}.hotkeys-container[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{font-size:40px;color:#909cb4;float:right;line-height:1em}.hotkeys-container[_ngcontent-%COMP%]   .hotkeys-icon[_ngcontent-%COMP%]{color:#909cb4;font-size:14px;background-color:#000}.hotkeys-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover{color:#cdd2dd}.hotkeys[_ngcontent-%COMP%]{background:#12141a;border:1px solid #5a6884;padding:15px;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);color:#909cb4;font-size:14px;border-radius:2px;margin-bottom:45px}.hotkeys[_ngcontent-%COMP%]   .hotkey-row[_ngcontent-%COMP%]{padding:10px 0;border-bottom:1px solid #455066}.hotkeys[_ngcontent-%COMP%]   .hotkey-row[_ngcontent-%COMP%]:first-child{padding-top:0}.hotkeys[_ngcontent-%COMP%]   .hotkey-row[_ngcontent-%COMP%]:last-child{border-bottom:none;padding-bottom:0}.hotkeys[_ngcontent-%COMP%]   .hotkey-row[_ngcontent-%COMP%]   .combination[_ngcontent-%COMP%]{float:right;margin-left:30px}.hotkeys[_ngcontent-%COMP%]   .hotkey-row[_ngcontent-%COMP%]   .combination[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{background:#5a6884;color:#12141a;padding:2px 7px;border-radius:2px}"], data: { animation: [
            trigger('containerAnimationState', slideDownFadeOutAnimation()),
            trigger('iconAnimationState', fadeInAnimation())
        ] }, changeDetection: 0 });
HotkeysComponent.ctorParameters = () => [
    { type: HotkeysService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(HotkeysComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxHotkeys',
                selector: 'ngx-hotkeys',
                template: "<div class=\"hotkeys-container\" *ngIf=\"(hotkeys$ | async).length > 0\">\n  <div class=\"hotkeys\" *ngIf=\"visible\" [@containerAnimationState]=\"'active'\">\n    <div *ngFor=\"let hotkey of hotkeys$ | async\" class=\"hotkey-row\">\n      {{ hotkey.description }}\n      <div class=\"combination\">\n        <span *ngFor=\"let key of hotkey.keys; let i = index\">\n          <span class=\"key\">{{ key }}</span> <span *ngIf=\"i < hotkey.keys.length - 1\"> + </span>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div\n    class=\"close-icon icon icon-x-filled\"\n    *ngIf=\"visible\"\n    (click)=\"hide()\"\n    [@iconAnimationState]=\"'active'\"\n  ></div>\n  <div\n    class=\"hotkeys-icon icon icon-keyboard\"\n    *ngIf=\"!visible\"\n    (click)=\"show()\"\n    [@iconAnimationState]=\"'active'\"\n  ></div>\n</div>\n",
                animations: [
                    trigger('containerAnimationState', slideDownFadeOutAnimation()),
                    trigger('iconAnimationState', fadeInAnimation())
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".hotkeys-container{position:fixed;bottom:20px;right:20px;z-index:2000}.hotkeys-container .icon{cursor:pointer;width:40px;height:40px;line-height:43px;text-align:center;border-radius:20px;position:absolute;bottom:0;right:0}.hotkeys-container .close-icon{font-size:40px;color:#909cb4;float:right;line-height:1em}.hotkeys-container .hotkeys-icon{color:#909cb4;font-size:14px;background-color:#000}.hotkeys-container .icon:hover{color:#cdd2dd}.hotkeys{background:#12141a;border:1px solid #5a6884;padding:15px;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);color:#909cb4;font-size:14px;border-radius:2px;margin-bottom:45px}.hotkeys .hotkey-row{padding:10px 0;border-bottom:1px solid #455066}.hotkeys .hotkey-row:first-child{padding-top:0}.hotkeys .hotkey-row:last-child{border-bottom:none;padding-bottom:0}.hotkeys .hotkey-row .combination{float:right;margin-left:30px}.hotkeys .hotkey-row .combination .key{background:#5a6884;color:#12141a;padding:2px 7px;border-radius:2px}"]
            }]
    }], function () { return [{ type: ɵngcc1.HotkeysService }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90a2V5cy5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvaG90a2V5cy9ob3RrZXlzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBcUIsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYXBELE1BQU0sT0FBTyxnQkFBZ0I7QUFBRyxJQU05QixZQUE2QixlQUErQjtBQUFJLFFBQW5DLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtBQUFDLFFBTHBELGFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBVyxFQUFFLENBQUMsQ0FBQztBQUN4RCxRQUFFLFlBQU8sR0FBRyxLQUFLLENBQUM7QUFDbEIsUUFDbUIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7QUFDbEQsSUFDaUUsQ0FBQztBQUNsRSxJQUNFLFFBQVE7QUFBSyxRQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDN0csUUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckQsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXO0FBQUssUUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3pCLFFBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM3QixJQUFFLENBQUM7QUFDSCxJQUNFLGFBQWEsQ0FBQyxPQUFzQztBQUN0RCxRQUFJLE1BQU0sR0FBRyxHQUFhLEVBQUUsQ0FBQztBQUM3QixRQUNJLEtBQUssTUFBTSxJQUFJLElBQUksT0FBTyxFQUFFO0FBQ2hDLFlBQU0sS0FBSyxNQUFNLE1BQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDMUMsZ0JBQVEsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFlBQVksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtBQUNyRSxvQkFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLGlCQUFTO0FBQ1QsYUFBTztBQUNQLFNBQUs7QUFDTCxRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLElBQUUsQ0FBQztBQUNILElBQ0UsSUFBSTtBQUNOLFFBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDeEIsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJO0FBQ04sUUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUN6QixJQUFFLENBQUM7QUFDSDs0Q0FsREMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxZQUFZLGtCQUN0QixRQUFRLEVBQUUsYUFBYTtVQUN2Qjs7NEJBQXVDO1dBRXZDO0NBQVUsRUFBRSxzQkFDVixPQUFPLENBQUMseUJBQXlCLEVBQUUseUJBQXlCO0NBQUUsQ0FBQyxzQkFDL0QsT0FBTyxDQUFDLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxDQUFDLGtCQUNqRCxrQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSx3aUNBQ2hEOzs7bUNBQ0k7QUFBQztBQUEwQyxZQWZ2QyxjQUFjO0FBQUc7Ozs7Ozs7Ozs7Ozs7OytFQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGZhZGVJbkFuaW1hdGlvbiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMvZmFkZS1pbi5hbmltYXRpb24nO1xuaW1wb3J0IHsgc2xpZGVEb3duRmFkZU91dEFuaW1hdGlvbiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMvc2xpZGUtZG93bi1mYWRlLW91dC5hbmltYXRpb24nO1xuaW1wb3J0IHsgSG90a2V5c1NlcnZpY2UgfSBmcm9tICcuL2hvdGtleXMuc2VydmljZSc7XG5pbXBvcnQgeyBIb3RrZXkgfSBmcm9tICcuL2hvdGtleS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSG90a2V5U3RhdHVzIH0gZnJvbSAnLi9ob3RrZXktc3RhdHVzLmVudW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICduZ3hIb3RrZXlzJyxcbiAgc2VsZWN0b3I6ICduZ3gtaG90a2V5cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob3RrZXlzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaG90a2V5cy5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignY29udGFpbmVyQW5pbWF0aW9uU3RhdGUnLCBzbGlkZURvd25GYWRlT3V0QW5pbWF0aW9uKCkpLFxuICAgIHRyaWdnZXIoJ2ljb25BbmltYXRpb25TdGF0ZScsIGZhZGVJbkFuaW1hdGlvbigpKVxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBIb3RrZXlzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICByZWFkb25seSBob3RrZXlzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SG90a2V5W10+KFtdKTtcbiAgdmlzaWJsZSA9IGZhbHNlO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2hvdGtleXNTZXJ2aWNlOiBIb3RrZXlzU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9ob3RrZXlzU2VydmljZS5jaGFuZ2VFdmVudC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSkuc3Vic2NyaWJlKHRoaXMudXBkYXRlSG90a2V5cy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnVwZGF0ZUhvdGtleXModGhpcy5faG90a2V5c1NlcnZpY2UuaG90a2V5cyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kZXN0cm95Lm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95LmNvbXBsZXRlKCk7XG4gIH1cblxuICB1cGRhdGVIb3RrZXlzKGhvdGtleXM6IHsgW2NvbWJvOiBzdHJpbmddOiBIb3RrZXlbXSB9KSB7XG4gICAgY29uc3QgaGtzOiBIb3RrZXlbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBjb21iIGluIGhvdGtleXMpIHtcbiAgICAgIGZvciAoY29uc3QgaG90a2V5IG9mIGhvdGtleXNbY29tYl0pIHtcbiAgICAgICAgaWYgKGhvdGtleS5zdGF0dXMgPT09IEhvdGtleVN0YXR1cy5BY3RpdmUgJiYgaG90a2V5LnZpc2libGUpIHtcbiAgICAgICAgICBoa3MucHVzaChob3RrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5ob3RrZXlzJC5uZXh0KGhrcyk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICB9XG59XG4iXX0=