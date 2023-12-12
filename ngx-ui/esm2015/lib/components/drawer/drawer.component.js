import { Component, Input, Output, EventEmitter, HostListener, ViewEncapsulation, ChangeDetectionStrategy, TemplateRef } from '@angular/core';
import { coerceNumberProperty, coerceBooleanProperty } from '@angular/cdk/coercion';
import { trigger } from '@angular/animations';
import { DRAWER_ANIMATION } from './drawer.animation';
import { DrawerDirection } from './drawer-direction.enum';
import { DrawerPosition } from './drawer-position.enum';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function DrawerComponent_ng_template_1_Template(rf, ctx) { }
const _c0 = function (a0, a1) { return { context: a0, close: a1 }; };
export class DrawerComponent {
    constructor() {
        this.cssClass = '';
        this.isRoot = true;
        this.close = new EventEmitter();
        this.position = DrawerPosition.fixed;
    }
    get size() {
        return this._size;
    }
    set size(val) {
        this._size = coerceNumberProperty(val);
    }
    get zIndex() {
        return this._zIndex;
    }
    set zIndex(val) {
        this._zIndex = coerceNumberProperty(val);
    }
    get closeOnOutsideClick() {
        return this._closeOnOutsideClick;
    }
    set closeOnOutsideClick(val) {
        this._closeOnOutsideClick = coerceBooleanProperty(val);
    }
    get cssClasses() {
        let clz = `ngx-drawer ${this.cssClass}`;
        if (this.isLeft)
            clz += ' left-drawer';
        if (this.isBottom)
            clz += ' bottom-drawer';
        return clz;
    }
    get isLeft() {
        return this.direction === DrawerDirection.Left;
    }
    get isBottom() {
        return this.direction === DrawerDirection.Bottom;
    }
    ngOnInit() {
        this.position = this.isRoot ? DrawerPosition.fixed : DrawerPosition.absolute;
        this.setDimensions(this.size);
    }
    ngOnDestroy() {
        this.close.emit(true);
    }
    setDimensions(size) {
        this.heightSize = `${this.isBottom && size ? size : 100}%`;
        this.widthSize = `${this.isLeft && size ? size : 100}%`;
    }
    onEscapeKey() {
        this.close.emit(true);
    }
}
DrawerComponent.ɵfac = function DrawerComponent_Factory(t) { return new (t || DrawerComponent)(); };
DrawerComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: DrawerComponent, selectors: [["ngx-drawer"]], hostAttrs: ["role", "dialog", "tabindex", "-1"], hostVars: 11, hostBindings: function DrawerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("keyup.esc", function DrawerComponent_keyup_esc_HostBindingHandler() { return ctx.onEscapeKey(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵsyntheticHostProperty("@drawerTransition", ctx.direction);
        ɵngcc0.ɵɵclassMap(ctx.cssClasses);
        ɵngcc0.ɵɵstyleProp("width", ctx.widthSize)("height", ctx.heightSize)("z-index", ctx.zIndex)("position", ctx.position);
    } }, inputs: { cssClass: "cssClass", isRoot: "isRoot", size: "size", zIndex: "zIndex", closeOnOutsideClick: "closeOnOutsideClick", direction: "direction", template: "template", context: "context" }, outputs: { close: "close" }, exportAs: ["ngxDrawer"], decls: 2, vars: 5, consts: [[1, "ngx-drawer-content"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function DrawerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, DrawerComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c0, ctx.context, ctx.close));
    } }, directives: [ɵngcc1.NgTemplateOutlet], styles: [".ngx-drawer{display:block;overflow-y:auto;overflow-x:hidden;text-align:left;z-index:998;background:#1c2029}.ngx-drawer.left-drawer{top:0;right:0;height:100%}.ngx-drawer.bottom-drawer{left:0;bottom:0;width:100%}.ngx-drawer .ngx-drawer-content{height:100%;overflow:auto}"], encapsulation: 2, data: { animation: [trigger('drawerTransition', DRAWER_ANIMATION)] }, changeDetection: 0 });
DrawerComponent.propDecorators = {
    cssClass: [{ type: Input }],
    direction: [{ type: Input }],
    template: [{ type: Input }],
    context: [{ type: Input }],
    isRoot: [{ type: Input }],
    size: [{ type: Input }],
    zIndex: [{ type: Input }],
    closeOnOutsideClick: [{ type: Input }],
    close: [{ type: Output }],
    onEscapeKey: [{ type: HostListener, args: ['keyup.esc',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(DrawerComponent, [{
        type: Component,
        args: [{
                exportAs: 'ngxDrawer',
                selector: 'ngx-drawer',
                template: "<div class=\"ngx-drawer-content\">\n  <ng-template [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"{ context: context, close: close }\">\n  </ng-template>\n</div>\n",
                animations: [trigger('drawerTransition', DRAWER_ANIMATION)],
                host: {
                    role: 'dialog',
                    tabindex: '-1',
                    '[class]': 'cssClasses',
                    '[style.width]': 'widthSize',
                    '[style.height]': 'heightSize',
                    '[style.zIndex]': 'zIndex',
                    '[style.position]': 'position',
                    '[@drawerTransition]': 'direction'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ngx-drawer{display:block;overflow-y:auto;overflow-x:hidden;text-align:left;z-index:998;background:#1c2029}.ngx-drawer.left-drawer{top:0;right:0;height:100%}.ngx-drawer.bottom-drawer{left:0;bottom:0;width:100%}.ngx-drawer .ngx-drawer-content{height:100%;overflow:auto}"]
            }]
    }], function () { return []; }, { cssClass: [{
            type: Input
        }], isRoot: [{
            type: Input
        }], close: [{
            type: Output
        }], size: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], closeOnOutsideClick: [{
            type: Input
        }], onEscapeKey: [{
            type: HostListener,
            args: ['keyup.esc']
        }], direction: [{
            type: Input
        }], template: [{
            type: Input
        }], context: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9kcmF3ZXIvZHJhd2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFlBQVksRUFDWixpQkFBaUIsRUFFakIsdUJBQXVCLEVBQ3ZCLFdBQVcsRUFFWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7O0FBcUJ4RCxNQUFNLE9BQU8sZUFBZTtBQUFHLElBbkIvQjtBQUNHLFFBbUJRLGFBQVEsR0FBRyxFQUFFLENBQUM7QUFDekIsUUFHVyxXQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLFFBeUJZLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0FBQ2hELFFBVUUsYUFBUSxHQUFtQixjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2xELElBK0JBLENBQUM7QUFDRCxJQXBFRSxJQUNJLElBQUk7QUFDVixRQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztBQUN0QixJQUFFLENBQUM7QUFDSCxJQUFFLElBQUksSUFBSSxDQUFDLEdBQVc7QUFDdEIsUUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNDLElBQUUsQ0FBQztBQUNI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QUUsdUJBQXVCLENBQUMsTUFBTTs7NENBQ2hEOzs7Ozt3YkFDSTtBQUFDO0FBQW1DLHVCQUN0QyxLQUFLO0FBQUssd0JBQ1YsS0FBSztBQUFLLHVCQUNWLEtBQUs7QUFBSyxzQkFDVixLQUFLO0FBQUsscUJBQ1YsS0FBSztBQUFLLG1CQUVWLEtBQUs7QUFDTixxQkFPQyxLQUFLO0FBQ04sa0NBT0MsS0FBSztBQUNOLG9CQU9DLE1BQU07QUFBSywwQkF1Q1gsWUFBWSxTQUFDLFdBQVc7QUFDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBPbkRlc3Ryb3ksXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBUZW1wbGF0ZVJlZixcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlTnVtYmVyUHJvcGVydHksIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7IERSQVdFUl9BTklNQVRJT04gfSBmcm9tICcuL2RyYXdlci5hbmltYXRpb24nO1xuaW1wb3J0IHsgRHJhd2VyRGlyZWN0aW9uIH0gZnJvbSAnLi9kcmF3ZXItZGlyZWN0aW9uLmVudW0nO1xuaW1wb3J0IHsgRHJhd2VyUG9zaXRpb24gfSBmcm9tICcuL2RyYXdlci1wb3NpdGlvbi5lbnVtJztcblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnbmd4RHJhd2VyJyxcbiAgc2VsZWN0b3I6ICduZ3gtZHJhd2VyJyxcbiAgdGVtcGxhdGVVcmw6ICdkcmF3ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcmF3ZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW3RyaWdnZXIoJ2RyYXdlclRyYW5zaXRpb24nLCBEUkFXRVJfQU5JTUFUSU9OKV0sXG4gIGhvc3Q6IHtcbiAgICByb2xlOiAnZGlhbG9nJyxcbiAgICB0YWJpbmRleDogJy0xJyxcbiAgICAnW2NsYXNzXSc6ICdjc3NDbGFzc2VzJyxcbiAgICAnW3N0eWxlLndpZHRoXSc6ICd3aWR0aFNpemUnLFxuICAgICdbc3R5bGUuaGVpZ2h0XSc6ICdoZWlnaHRTaXplJyxcbiAgICAnW3N0eWxlLnpJbmRleF0nOiAnekluZGV4JyxcbiAgICAnW3N0eWxlLnBvc2l0aW9uXSc6ICdwb3NpdGlvbicsXG4gICAgJ1tAZHJhd2VyVHJhbnNpdGlvbl0nOiAnZGlyZWN0aW9uJ1xuICB9LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEcmF3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGNzc0NsYXNzID0gJyc7XG4gIEBJbnB1dCgpIGRpcmVjdGlvbjogRHJhd2VyRGlyZWN0aW9uO1xuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgY29udGV4dDogYW55O1xuICBASW5wdXQoKSBpc1Jvb3QgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG4gIHNldCBzaXplKHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fc2l6ZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgekluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl96SW5kZXg7XG4gIH1cbiAgc2V0IHpJbmRleCh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuX3pJbmRleCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgY2xvc2VPbk91dHNpZGVDbGljaygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvc2VPbk91dHNpZGVDbGljaztcbiAgfVxuICBzZXQgY2xvc2VPbk91dHNpZGVDbGljayh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jbG9zZU9uT3V0c2lkZUNsaWNrID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbCk7XG4gIH1cblxuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgZ2V0IGNzc0NsYXNzZXMoKTogc3RyaW5nIHtcbiAgICBsZXQgY2x6ID0gYG5neC1kcmF3ZXIgJHt0aGlzLmNzc0NsYXNzfWA7XG4gICAgaWYgKHRoaXMuaXNMZWZ0KSBjbHogKz0gJyBsZWZ0LWRyYXdlcic7XG4gICAgaWYgKHRoaXMuaXNCb3R0b20pIGNseiArPSAnIGJvdHRvbS1kcmF3ZXInO1xuICAgIHJldHVybiBjbHo7XG4gIH1cblxuICB3aWR0aFNpemU6IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0U2l6ZTogc3RyaW5nIHwgbnVtYmVyO1xuICBwb3NpdGlvbjogRHJhd2VyUG9zaXRpb24gPSBEcmF3ZXJQb3NpdGlvbi5maXhlZDtcblxuICBwcml2YXRlIGdldCBpc0xlZnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09PSBEcmF3ZXJEaXJlY3Rpb24uTGVmdDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGlzQm90dG9tKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbiA9PT0gRHJhd2VyRGlyZWN0aW9uLkJvdHRvbTtcbiAgfVxuXG4gIHByaXZhdGUgX3NpemU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfekluZGV4OiBudW1iZXI7XG4gIHByaXZhdGUgX2Nsb3NlT25PdXRzaWRlQ2xpY2s6IGJvb2xlYW47XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMuaXNSb290ID8gRHJhd2VyUG9zaXRpb24uZml4ZWQgOiBEcmF3ZXJQb3NpdGlvbi5hYnNvbHV0ZTtcbiAgICB0aGlzLnNldERpbWVuc2lvbnModGhpcy5zaXplKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2xvc2UuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIHNldERpbWVuc2lvbnMoc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5oZWlnaHRTaXplID0gYCR7dGhpcy5pc0JvdHRvbSAmJiBzaXplID8gc2l6ZSA6IDEwMH0lYDtcbiAgICB0aGlzLndpZHRoU2l6ZSA9IGAke3RoaXMuaXNMZWZ0ICYmIHNpemUgPyBzaXplIDogMTAwfSVgO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAuZXNjJylcbiAgb25Fc2NhcGVLZXkoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZS5lbWl0KHRydWUpO1xuICB9XG59XG4iXX0=