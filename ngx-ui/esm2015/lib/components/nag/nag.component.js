import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { trigger } from '@angular/animations';
import { bounceAnimation } from '../../animations/bounce.animation';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../toolbar/toolbar.component';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from '../toolbar/toolbar-content.directive';
import * as ɵngcc4 from '../icon/icon.component';
import * as ɵngcc5 from '../toolbar/toolbar-title.directive';

function NagComponent_ngx_toolbar_title_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ngx-toolbar-title");
    ɵngcc0.ɵɵprojection(1, 1);
    ɵngcc0.ɵɵelementEnd();
} }
const _c0 = ["*", [["", "ngx-nag-title", ""]]];
const _c1 = ["*", "[ngx-nag-title]"];
export class NagComponent {
    constructor() {
        this.cssClass = '';
        this.state = "closed" /* closed */;
        this.stateChanged = new EventEmitter();
        this.nagTitle = '';
        // Controls the bounce animation
        this.bounce = 0;
    }
    get zIndex() {
        return this._zIndex;
    }
    set zIndex(val) {
        this._zIndex = coerceNumberProperty(val);
    }
    get klass() {
        return `ngx-nag ngx-nag-bottom ngx-nag-${this.state} ${this.cssClass}`;
    }
    toggle() {
        this.state = this.state !== "open" /* open */ ? "open" /* open */ : "peek" /* peek */; // can't toggle if closed
        this.stateChanged.emit(this.state);
    }
    ngOnDestroy() {
        this.stateChanged.emit(this.state);
    }
    ngOnChanges(changes) {
        if (changes.hide && changes.hide.currentValue !== changes.hide.previousValue) {
            if (changes.hide.currentValue === true) {
                // nag is hidden external from component
                this.state = "closed" /* closed */;
                this.stateChanged.emit(this.state);
            }
        }
        if (changes.watch && !this.hide) {
            // If watch value changes and nag is not hidden
            switch (this.state) {
                case "closed" /* closed */: // and nag is closed
                    this.state = "peek" /* peek */; // open it
                    this.stateChanged.emit(this.state);
                    break;
                case "peek" /* peek */: // and nag is peeked
                    this.bounce = (this.bounce + 1) % 1000; // bounce it
                    break;
            }
        }
    }
}
NagComponent.ɵfac = function NagComponent_Factory(t) { return new (t || NagComponent)(); };
NagComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NagComponent, selectors: [["ngx-nag"]], hostAttrs: ["role", "dialog", "tabindex", "-1"], hostVars: 5, hostBindings: function NagComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵsyntheticHostProperty("@bounce", ctx.bounce);
        ɵngcc0.ɵɵclassMap(ctx.klass);
        ɵngcc0.ɵɵstyleProp("z-index", ctx.zIndex);
    } }, inputs: { cssClass: "cssClass", state: "state", nagTitle: "nagTitle", zIndex: "zIndex", watch: "watch", hide: "hide" }, outputs: { stateChanged: "stateChanged" }, exportAs: ["ngxNag"], features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 7, vars: 2, consts: [[1, "ngx-nag-content"], [1, "ngx-nag-toolbar", 3, "mainTitle", "click"], [4, "ngIf"], ["fontIcon", "arrow-down", 1, "ngx-nag-icon"], [1, "ngx-nag-body", "ngx-section-content"]], template: function NagComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "ngx-toolbar", 1);
        ɵngcc0.ɵɵlistener("click", function NagComponent_Template_ngx_toolbar_click_1_listener() { return ctx.toggle(); });
        ɵngcc0.ɵɵtemplate(2, NagComponent_ngx_toolbar_title_2_Template, 2, 0, "ngx-toolbar-title", 2);
        ɵngcc0.ɵɵelementStart(3, "ngx-toolbar-content");
        ɵngcc0.ɵɵelement(4, "ngx-icon", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "section", 4);
        ɵngcc0.ɵɵprojection(6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("mainTitle", ctx.nagTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nagTitle);
    } }, directives: [ɵngcc1.ToolbarComponent, ɵngcc2.NgIf, ɵngcc3.ToolbarContentDirective, ɵngcc4.IconComponent, ɵngcc5.ToolbarTitleDirective], styles: [".ngx-nag{position:fixed;overflow-y:auto;overflow-x:hidden;text-align:left;z-index:998;background:#1c2029;background:#313847}.ngx-nag.ngx-nag-bottom{left:20%;right:20%;top:calc(100% - 50px);width:60%;transition:transform .3s ease-out;transform:translateY(50px)}.ngx-nag.ngx-nag-bottom.ngx-nag-peek{transform:translateY(0)}.ngx-nag.ngx-nag-bottom.ngx-nag-open{transform:translateY(-100%) translateY(50px)}.ngx-nag.ngx-nag-bottom .ngx-nag-icon{transform:rotate(180deg);display:block;transition:.4s ease-out;background-color:#212633;height:30px;width:30px;border-radius:15px;float:right;text-align:center;margin-top:10px;line-height:34px;cursor:pointer}.ngx-nag.ngx-nag-bottom.ngx-nag-open .ngx-nag-icon{transform:rotate(0deg)}.ngx-nag .ngx-nag-body{background-color:#313847;margin-bottom:0;padding:1.8em;max-height:50vh;overflow-y:auto}.ngx-nag .ngx-nag-toolbar{background:#293040;cursor:pointer}"], encapsulation: 2, data: { animation: [trigger('bounce', bounceAnimation())] }, changeDetection: 0 });
NagComponent.propDecorators = {
    cssClass: [{ type: Input }],
    state: [{ type: Input }],
    stateChanged: [{ type: Output }],
    zIndex: [{ type: Input }],
    nagTitle: [{ type: Input }],
    watch: [{ type: Input }],
    hide: [{ type: Input }],
    klass: [{ type: HostBinding, args: ['class',] }],
    bounce: [{ type: HostBinding, args: ['@bounce',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NagComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-nag',
                exportAs: 'ngxNag',
                template: "<div class=\"ngx-nag-content\">\n  <ngx-toolbar class=\"ngx-nag-toolbar\" (click)=\"toggle()\" [mainTitle]=\"nagTitle\">\n    <ngx-toolbar-title *ngIf=\"!nagTitle\"> <ng-content select=\"[ngx-nag-title]\"></ng-content> </ngx-toolbar-title>\n    <ngx-toolbar-content><ngx-icon class=\"ngx-nag-icon\" fontIcon=\"arrow-down\"></ngx-icon></ngx-toolbar-content>\n  </ngx-toolbar>\n  <section class=\"ngx-nag-body ngx-section-content\"><ng-content></ng-content></section>\n</div>\n",
                host: {
                    role: 'dialog',
                    tabindex: '-1',
                    '[style.zIndex]': 'zIndex'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [trigger('bounce', bounceAnimation())],
                styles: [".ngx-nag{position:fixed;overflow-y:auto;overflow-x:hidden;text-align:left;z-index:998;background:#1c2029;background:#313847}.ngx-nag.ngx-nag-bottom{left:20%;right:20%;top:calc(100% - 50px);width:60%;transition:transform .3s ease-out;transform:translateY(50px)}.ngx-nag.ngx-nag-bottom.ngx-nag-peek{transform:translateY(0)}.ngx-nag.ngx-nag-bottom.ngx-nag-open{transform:translateY(-100%) translateY(50px)}.ngx-nag.ngx-nag-bottom .ngx-nag-icon{transform:rotate(180deg);display:block;transition:.4s ease-out;background-color:#212633;height:30px;width:30px;border-radius:15px;float:right;text-align:center;margin-top:10px;line-height:34px;cursor:pointer}.ngx-nag.ngx-nag-bottom.ngx-nag-open .ngx-nag-icon{transform:rotate(0deg)}.ngx-nag .ngx-nag-body{background-color:#313847;margin-bottom:0;padding:1.8em;max-height:50vh;overflow-y:auto}.ngx-nag .ngx-nag-toolbar{background:#293040;cursor:pointer}"]
            }]
    }], function () { return []; }, { cssClass: [{
            type: Input
        }], state: [{
            type: Input
        }], stateChanged: [{
            type: Output
        }], nagTitle: [{
            type: Input
        }], bounce: [{
            type: HostBinding,
            args: ['@bounce']
        }], zIndex: [{
            type: Input
        }], klass: [{
            type: HostBinding,
            args: ['class']
        }], watch: [{
            type: Input
        }], hide: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFnLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9uYWcvbmFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFHTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUU5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQXNCcEUsTUFBTSxPQUFPLFlBQVk7QUFBRyxJQWQ1QjtBQUNHLFFBY1EsYUFBUSxHQUFHLEVBQUUsQ0FBQztBQUN6QixRQUVFLFVBQUsseUJBQTRDO0FBQ25ELFFBQ1ksaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0FBQ3RELFFBU1csYUFBUSxHQUFHLEVBQUUsQ0FBQztBQUN6QixRQVFFLGdDQUFnQztBQUNsQyxRQUNFLFdBQU0sR0FBRyxDQUFDLENBQUM7QUFDYixJQWlDQSxDQUFDO0FBQ0QsSUF0REUsSUFBSSxNQUFNO0FBQ1osUUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUNJLE1BQU0sQ0FBQyxHQUFXO0FBQ3hCLFFBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3QyxJQUFFLENBQUM7QUFDSCxJQUtFLElBQ0ksS0FBSztBQUNYLFFBQUksT0FBTyxrQ0FBa0MsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDM0UsSUFBRSxDQUFDO0FBQ0gsSUFPRSxNQUFNO0FBQ1IsUUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLHNCQUFlLENBQUMsQ0FBQyxtQkFBWSxDQUFDLGtCQUFXLENBQUMsQ0FBQyx5QkFBeUI7QUFDL0YsUUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXO0FBQ2IsUUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkMsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXLENBQUMsT0FBc0I7QUFDcEMsUUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLEtBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDbEYsWUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtBQUM5QyxnQkFBUSx3Q0FBd0M7QUFDaEQsZ0JBQVEsSUFBSSxDQUFDLEtBQUssd0JBQWUsQ0FBQztBQUNsQyxnQkFBUSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0MsYUFBTztBQUNQLFNBQUs7QUFDTCxRQUFJLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDckMsWUFBTSwrQ0FBK0M7QUFDckQsWUFBTSxRQUFRLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDMUIsZ0JBQVEsNEJBQW1CLG9CQUFvQjtBQUMvQyxvQkFBVSxJQUFJLENBQUMsS0FBSyxvQkFBYSxDQUFDLENBQUMsVUFBVTtBQUM3QyxvQkFBVSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0Msb0JBQVUsTUFBTTtBQUNoQixnQkFBUSx3QkFBaUIsb0JBQW9CO0FBQzdDLG9CQUFVLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLFlBQVk7QUFDOUQsb0JBQVUsTUFBTTtBQUNoQixhQUFPO0FBQ1AsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIO3dDQTNFQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFO0dBQVMsa0JBQ25CLFFBQVEsRUFBRSxRQUFRLGtCQUNsQjs7OztxSkFBbUMsa0JBQ25DLElBQUksRUFBRSxzQkFDSixJQUFJLEVBQUUsUUFBUSxzQkFDZCxRQUFRLEVBQUUsSUFBSSxzQkFDZCxnQkFBZ0IsRUFBRSxRQUFRLGtCQUMzQixrQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxrQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBRS9DLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5REFDbkQsd2tDQUNJO0FBQUM7QUFBZ0MsdUJBQ25DLEtBQUs7QUFBSyxvQkFFVixLQUFLO0FBQ04sMkJBRUMsTUFBTTtBQUFLLHFCQUtYLEtBQUs7QUFDTix1QkFJQyxLQUFLO0FBQUssb0JBQ1YsS0FBSztBQUFLLG1CQUNWLEtBQUs7QUFBSyxvQkFFVixXQUFXLFNBQUMsT0FBTztBQUNqQixxQkFLRixXQUFXLFNBQUMsU0FBUztBQUNwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlTnVtYmVyUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBib3VuY2VBbmltYXRpb24gfSBmcm9tICcuLi8uLi9hbmltYXRpb25zL2JvdW5jZS5hbmltYXRpb24nO1xuXG5jb25zdCBlbnVtIFN0YXRlIHtcbiAgb3BlbiA9ICdvcGVuJyxcbiAgcGVlayA9ICdwZWVrJyxcbiAgY2xvc2VkID0gJ2Nsb3NlZCdcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LW5hZycsXG4gIGV4cG9ydEFzOiAnbmd4TmFnJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hZy5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICByb2xlOiAnZGlhbG9nJyxcbiAgICB0YWJpbmRleDogJy0xJyxcbiAgICAnW3N0eWxlLnpJbmRleF0nOiAnekluZGV4J1xuICB9LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3R5bGVVcmxzOiBbJy4vbmFnLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdib3VuY2UnLCBib3VuY2VBbmltYXRpb24oKSldXG59KVxuZXhwb3J0IGNsYXNzIE5hZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgY3NzQ2xhc3MgPSAnJztcblxuICBASW5wdXQoKVxuICBzdGF0ZTogU3RhdGUgfCBrZXlvZiB0eXBlb2YgU3RhdGUgPSBTdGF0ZS5jbG9zZWQ7XG5cbiAgQE91dHB1dCgpIHN0YXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGdldCB6SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3pJbmRleDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgekluZGV4KHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fekluZGV4ID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsKTtcbiAgfVxuXG4gIEBJbnB1dCgpIG5hZ1RpdGxlID0gJyc7XG4gIEBJbnB1dCgpIHdhdGNoOiBhbnk7IC8vIGNoYW5nZXMgdG8gdGhpcyB2YWx1ZSBjYXVzZSBhbmltYXRpb24gYW5kIHN0YXRlIGNoYW5nZXNcbiAgQElucHV0KCkgaGlkZTogYW55OyAvLyBzZXR0aW5nIHRoaXMgdmFsdWUgd2lsbCBmb3JjZSB0aGUgbmFnIHRvIGNsb3NlXG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBrbGFzcygpIHtcbiAgICByZXR1cm4gYG5neC1uYWcgbmd4LW5hZy1ib3R0b20gbmd4LW5hZy0ke3RoaXMuc3RhdGV9ICR7dGhpcy5jc3NDbGFzc31gO1xuICB9XG5cbiAgLy8gQ29udHJvbHMgdGhlIGJvdW5jZSBhbmltYXRpb25cbiAgQEhvc3RCaW5kaW5nKCdAYm91bmNlJylcbiAgYm91bmNlID0gMDtcblxuICBwcml2YXRlIF96SW5kZXg6IG51bWJlcjtcblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGUgIT09IFN0YXRlLm9wZW4gPyBTdGF0ZS5vcGVuIDogU3RhdGUucGVlazsgLy8gY2FuJ3QgdG9nZ2xlIGlmIGNsb3NlZFxuICAgIHRoaXMuc3RhdGVDaGFuZ2VkLmVtaXQodGhpcy5zdGF0ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlZC5lbWl0KHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmhpZGUgJiYgY2hhbmdlcy5oaWRlLmN1cnJlbnRWYWx1ZSAhPT0gY2hhbmdlcy5oaWRlLnByZXZpb3VzVmFsdWUpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmhpZGUuY3VycmVudFZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIC8vIG5hZyBpcyBoaWRkZW4gZXh0ZXJuYWwgZnJvbSBjb21wb25lbnRcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLmNsb3NlZDtcbiAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZWQuZW1pdCh0aGlzLnN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoYW5nZXMud2F0Y2ggJiYgIXRoaXMuaGlkZSkge1xuICAgICAgLy8gSWYgd2F0Y2ggdmFsdWUgY2hhbmdlcyBhbmQgbmFnIGlzIG5vdCBoaWRkZW5cbiAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgICBjYXNlIFN0YXRlLmNsb3NlZDogLy8gYW5kIG5hZyBpcyBjbG9zZWRcbiAgICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUucGVlazsgLy8gb3BlbiBpdFxuICAgICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VkLmVtaXQodGhpcy5zdGF0ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgU3RhdGUucGVlazogLy8gYW5kIG5hZyBpcyBwZWVrZWRcbiAgICAgICAgICB0aGlzLmJvdW5jZSA9ICh0aGlzLmJvdW5jZSArIDEpICUgMTAwMDsgLy8gYm91bmNlIGl0XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=