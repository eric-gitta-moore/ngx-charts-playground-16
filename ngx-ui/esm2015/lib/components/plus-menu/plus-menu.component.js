import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, Output, EventEmitter, HostBinding, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { PlusMenuPosition } from './plus-menu-position.enum';
import { id } from '../../utils/id/id.util';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../tooltip/tooltip.directive';
import * as ɵngcc2 from '../icon/icon.component';
import * as ɵngcc3 from '@angular/common';

function PlusMenuComponent_div_85_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 63);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r1.subtitle);
} }
function PlusMenuComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 60);
    ɵngcc0.ɵɵlistener("click", function PlusMenuComponent_div_85_Template_div_click_0_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r6); const i_r2 = restoredCtx.index; const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.onClickItem(i_r2); });
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵtemplate(3, PlusMenuComponent_div_85_div_3_Template, 2, 1, "div", 61);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "div");
    ɵngcc0.ɵɵelement(5, "ngx-icon", 62);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap("ngx-plus-menu--item ngx-plus-menu--item-" + i_r2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r1.title, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r1.subtitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleMapInterpolate1("--itemColor: ", item_r1.color, "");
    ɵngcc0.ɵɵclassMap("ngx-plus-menu--icon ngx-plus-menu--icon-" + i_r2);
    ɵngcc0.ɵɵclassProp("custom-color", item_r1.color);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("fontIcon", item_r1.icon);
} }
export class PlusMenuComponent {
    constructor(elementRef, renderer, cdr) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.items = [];
        this.position = PlusMenuPosition.Right;
        this.menuTitle = '';
        this.closeOnClickOutside = true;
        this.menuColor = '#9fce36';
        this.clickItem = new EventEmitter();
        this.toggleMenu = new EventEmitter();
        this.open = false;
        this.uid = '';
        this.PlusMenuPosition = PlusMenuPosition;
    }
    get itemColor0() {
        return this.items[0].color || this.menuColor;
    }
    get itemColor1() {
        return this.items[1].color || this.menuColor;
    }
    get itemColor2() {
        var _a;
        return ((_a = this.items[2]) === null || _a === void 0 ? void 0 : _a.color) || this.menuColor;
    }
    get p() {
        return 'ngx-plus-menu position-' + this.position;
    }
    get hasThree() {
        return this.items.length > 2;
    }
    ngOnInit() {
        this.uid = id(); // for svg linear gradient ids
    }
    ngOnDestroy() {
        if (this.documentClickEvent)
            this.documentClickEvent();
    }
    onClickOpenClose() {
        return this.open ? this.closeMenu() : this.openMenu();
    }
    onClickItem(index) {
        this.closeMenu();
        this.clickItem.emit(index);
    }
    openMenu() {
        this.open = true;
        this.toggleMenu.emit(true);
        this.cdr.markForCheck();
        if (this.closeOnClickOutside) {
            this.documentClickEvent = this.renderer.listen(document, 'click', event => {
                const parentContains = this.elementRef.nativeElement.contains(event.target);
                if (!parentContains && this.open) {
                    this.closeMenu();
                }
            });
        }
    }
    closeMenu() {
        this.open = false;
        this.toggleMenu.emit(false);
        this.cdr.markForCheck();
        if (this.documentClickEvent)
            this.documentClickEvent();
    }
}
PlusMenuComponent.ɵfac = function PlusMenuComponent_Factory(t) { return new (t || PlusMenuComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
PlusMenuComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: PlusMenuComponent, selectors: [["ngx-plus-menu"]], hostVars: 6, hostBindings: function PlusMenuComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.p);
        ɵngcc0.ɵɵclassProp("open", ctx.open)("has-three", ctx.hasThree);
    } }, inputs: { items: "items", position: "position", menuTitle: "menuTitle", closeOnClickOutside: "closeOnClickOutside", menuColor: "menuColor", hasThree: "hasThree" }, outputs: { clickItem: "clickItem", toggleMenu: "toggleMenu" }, decls: 86, vars: 33, consts: [["ngx-tooltip", "", "tooltipPlacement", "left", 1, "ngx-plus-menu--circle-container", 3, "tooltipDisabled", "tooltipTitle", "click"], ["fontIcon", "add-circle-medium", 1, "ngx-plus-menu--circle"], [1, "ngx-plus-menu--menu-title"], [1, "ngx-plus-menu--content-container"], ["width", "880", "height", "836", "viewBox", "0 0 880 836", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["transform", "translate(0, 0)", 1, "right", "two"], [3, "id"], ["offset", "28%", 1, "stop", "stop--color-0"], ["offset", "50%", 1, "stop", "stop--color-1"], ["d", "M633.883 119C654.069 163.463 689.972 199.275 734.5 219.343", "stroke-width", "2", 1, "arc"], ["d", "M653.8 141.5C651 144.5 651.971 148.918 653.441 151.174L651.739 152.175C650.873 150.829 647.5 147.5 641.5 148L653.8 141.5Z", 1, "arrow", "arrow--color-0"], ["d", "M711.863 199.563C708.863 202.363 704.445 201.392 702.189 199.922L701.188 201.624C702.534 202.49 705.863 205.863 705.363 211.863L711.863 199.563Z", 1, "arrow", "arrow--color-1"], ["transform", "translate(519, -25)", 1, "right", "three"], ["offset", "0%", 1, "stop", "stop--color-0"], ["offset", "5%", 1, "stop", "stop--color-0"], ["offset", "20%", 1, "stop", "stop--color-1"], ["offset", "60%", 1, "stop", "stop--color-1"], ["offset", "70%", 1, "stop", "stop--color-2"], ["offset", "100%", 1, "stop", "stop--color-2"], ["d", "M260 259.219C180.273 243.543 117.457 180.727 101.781 101", "stroke-width", "2", 1, "arc"], ["d", "M117 127C113.5 129 112.5 134.5 113.5 137L111.652 137.642C111.066 136.153 108 131.5 102 131L117 127Z", 1, "arrow", "arrow--color-0"], ["d", "M184 217C181.5 221.5 183.629 225.48 185.876 226.964L184.711 228.563C183.38 227.674 178 226 173.5 229L184 217Z", 1, "arrow", "arrow--color-1"], ["d", "M144 177C139.5 179.5 135.52 177.371 134.036 175.124L132.437 176.289C133.326 177.62 135 183 132 187.5L144 177Z", 1, "arrow", "arrow--color-1"], ["d", "M234 244C232 247.5 226.5 248.5 224 247.5L223.359 249.348C224.847 249.934 229.5 253 230 259L234 244Z", 1, "arrow", "arrow--color-2"], ["transform", "translate(210, 600)", 1, "bottom", "two"], ["offset", "50%", 1, "stop", "stop--color-0"], ["offset", "30%", 1, "stop", "stop--color-0"], ["offset", "90%", 1, "stop", "stop--color-1"], ["d", "M350 138C350 117.565 296.498 101 230.5 101C164.502 101 111 117.565 111 138", "stroke-width", "2", 1, "arc"], ["d", "M311.029 117.617C311 113 307.5 110.72 305.5 110.22L306 108.3C307.266 108.601 312.5 109 314 106L311.029 117.617Z", 1, "arrow", "arrow--color-1"], ["d", "M149.971 117.617C150 113 153.5 110.72 155.5 110.22L155 108.3C153.734 108.601 148.5 109 147 106L149.971 117.617Z", 1, "arrow", "arrow--color-0"], ["d", "M237.093 97.4119C238.5 99.5 240 100 241.945 100.18L241.917 102.15C240.335 102.15 238.5 102.5 236.956 105.254L237.093 97.4119Z", 1, "arrow", "arrow--color-1"], ["cx", "230", "cy", "101", "r", "7", "stroke-width", "2", 1, "dot"], ["d", "M223.513 97.4119C222.106 99.5 220.606 100 218.662 100.18L218.689 102.15C220.271 102.15 222.106 102.5 223.65 105.254L223.513 97.4119Z", 1, "arrow", "arrow--color-0"], ["transform", "translate(190, 580)", 1, "bottom", "three"], ["offset", "70%", 1, "stop", "stop--color-1"], ["offset", "30%", 1, "stop", "stop--color-1"], ["offset", "80%", 1, "stop", "stop--color-2"], ["d", "M100.5 136.194C140.708 115.721 187.856 103.158 238.5 101.253", "stroke-width", "2", 1, "arc"], ["d", "M403.5 136.194C363.292 115.721 316.144 103.158 265.5 101.253", "stroke-width", "2", 1, "arc"], ["d", "M131.858 128.317C132.878 124.348 136.05 122.041 137.509 121.384L136.687 119.561C135.228 120.218 131.399 121.066 127.75 119.2L131.858 128.317Z", 1, "arrow", "arrow--color-0"], ["d", "M372.192 128.317C371.173 124.348 368 122.041 366.541 121.384L367.363 119.561C368.822 120.218 372.651 121.066 376.3 119.2L372.192 128.317Z", 1, "arrow", "arrow--color-2"], ["d", "M222.5 107.5C221.5 105.5 220 103.5 216.117 103.805L216.117 101.802C219 101.5 221.5 99.5 222.5 96.5L222.5 107.5Z", 1, "arrow", "arrow--color-1"], ["d", "M281.5 107.5C282.5 105.5 284 103.5 287.883 103.805L287.883 101.802C285 101.5 282.5 99.5 281.5 96.5L281.5 107.5Z", 1, "arrow", "arrow--color-1"], ["transform", "translate(210, -60)", 1, "top", "two"], ["d", "M350 100C350 120.435 296.498 137 230.5 137C164.502 137 111 120.435 111 100", "stroke-width", "2", 1, "arc"], ["d", "M311.029 120.383C311 125 307.5 127.28 305.5 127.78L306 129.7C307.266 129.399 312.5 129 314 132L311.029 120.383Z", 1, "arrow", "arrow--color-1"], ["d", "M149.971 120.383C150 125 153.5 127.28 155.5 127.78L155 129.7C153.734 129.399 148.5 129 147 132L149.971 120.383Z", 1, "arrow", "arrow--color-0"], ["d", "M237.093 140.588C238.5 138.5 240 138 241.944 137.82L241.917 135.85C240.335 135.85 238.5 135.5 236.956 132.746L237.093 140.588Z", 1, "arrow", "arrow--color-1"], ["cx", "230", "cy", "137", "r", "7", "stroke-width", "2", 1, "dot"], ["d", "M223.513 140.588C222.106 138.5 220.606 138 218.662 137.82L218.689 135.85C220.271 135.85 222.106 135.5 223.65 132.746L223.513 140.588Z", 1, "arrow", "arrow--color-0"], ["transform", "translate(188, -55)", 1, "top", "three"], ["d", "M403.5 101.806C363.292 122.279 316.144 134.842 265.5 136.747", "stroke-width", "2", 1, "arc"], ["d", "M100.5 101.806C140.708 122.279 187.856 134.842 238.5 136.747", "stroke-width", "2", 1, "arc"], ["d", "M131.858 109.683C132.878 113.652 136.05 115.959 137.509 116.616L136.687 118.439C135.228 117.782 131.399 116.934 127.75 118.8L131.858 109.683Z", 1, "arrow", "arrow--color-0"], ["d", "M372.192 109.683C371.173 113.652 368 115.959 366.541 116.616L367.363 118.439C368.822 117.782 372.651 116.934 376.3 118.8L372.192 109.683Z", 1, "arrow", "arrow--color-2"], ["d", "M222.5 130.5C221.5 132.5 220 134.5 216.117 134.195L216.117 136.198C219 136.5 221.5 138.5 222.5 141.5L222.5 130.5Z", 1, "arrow", "arrow--color-1"], ["d", "M281.5 130.5C282.5 132.5 284 134.5 287.883 134.195L287.883 136.198C285 136.5 282.5 138.5 281.5 141.5L281.5 130.5Z", 1, "arrow", "arrow--color-1"], [1, "ngx-plus-menu--items-container"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["class", "subtitle", 4, "ngIf"], [3, "fontIcon"], [1, "subtitle"]], template: function PlusMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function PlusMenuComponent_Template_div_click_0_listener() { return ctx.onClickOpenClose(); });
        ɵngcc0.ɵɵelement(1, "ngx-icon", 1);
        ɵngcc0.ɵɵelementStart(2, "span", 2);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(5, "svg", 4);
        ɵngcc0.ɵɵelementStart(6, "g", 5);
        ɵngcc0.ɵɵelementStart(7, "defs");
        ɵngcc0.ɵɵelementStart(8, "linearGradient", 6);
        ɵngcc0.ɵɵelement(9, "stop", 7);
        ɵngcc0.ɵɵelement(10, "stop", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(11, "path", 9);
        ɵngcc0.ɵɵelement(12, "path", 10);
        ɵngcc0.ɵɵelement(13, "path", 11);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "g", 12);
        ɵngcc0.ɵɵelementStart(15, "defs");
        ɵngcc0.ɵɵelementStart(16, "linearGradient", 6);
        ɵngcc0.ɵɵelement(17, "stop", 13);
        ɵngcc0.ɵɵelement(18, "stop", 14);
        ɵngcc0.ɵɵelement(19, "stop", 15);
        ɵngcc0.ɵɵelement(20, "stop", 16);
        ɵngcc0.ɵɵelement(21, "stop", 17);
        ɵngcc0.ɵɵelement(22, "stop", 18);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(23, "path", 19);
        ɵngcc0.ɵɵelement(24, "path", 20);
        ɵngcc0.ɵɵelement(25, "path", 21);
        ɵngcc0.ɵɵelement(26, "path", 22);
        ɵngcc0.ɵɵelement(27, "path", 23);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(28, "g", 24);
        ɵngcc0.ɵɵelementStart(29, "defs");
        ɵngcc0.ɵɵelementStart(30, "linearGradient", 6);
        ɵngcc0.ɵɵelement(31, "stop", 25);
        ɵngcc0.ɵɵelement(32, "stop", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(33, "linearGradient", 6);
        ɵngcc0.ɵɵelement(34, "stop", 26);
        ɵngcc0.ɵɵelement(35, "stop", 27);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(36, "path", 28);
        ɵngcc0.ɵɵelement(37, "path", 29);
        ɵngcc0.ɵɵelement(38, "path", 30);
        ɵngcc0.ɵɵelement(39, "path", 31);
        ɵngcc0.ɵɵelement(40, "circle", 32);
        ɵngcc0.ɵɵelement(41, "path", 33);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(42, "g", 34);
        ɵngcc0.ɵɵelementStart(43, "defs");
        ɵngcc0.ɵɵelementStart(44, "linearGradient", 6);
        ɵngcc0.ɵɵelement(45, "stop", 26);
        ɵngcc0.ɵɵelement(46, "stop", 35);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(47, "linearGradient", 6);
        ɵngcc0.ɵɵelement(48, "stop", 36);
        ɵngcc0.ɵɵelement(49, "stop", 37);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(50, "path", 38);
        ɵngcc0.ɵɵelement(51, "path", 39);
        ɵngcc0.ɵɵelement(52, "path", 40);
        ɵngcc0.ɵɵelement(53, "path", 41);
        ɵngcc0.ɵɵelement(54, "path", 42);
        ɵngcc0.ɵɵelement(55, "path", 43);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(56, "g", 44);
        ɵngcc0.ɵɵelementStart(57, "defs");
        ɵngcc0.ɵɵelementStart(58, "linearGradient", 6);
        ɵngcc0.ɵɵelement(59, "stop", 25);
        ɵngcc0.ɵɵelement(60, "stop", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(61, "linearGradient", 6);
        ɵngcc0.ɵɵelement(62, "stop", 26);
        ɵngcc0.ɵɵelement(63, "stop", 27);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(64, "path", 45);
        ɵngcc0.ɵɵelement(65, "path", 46);
        ɵngcc0.ɵɵelement(66, "path", 47);
        ɵngcc0.ɵɵelement(67, "path", 48);
        ɵngcc0.ɵɵelement(68, "circle", 49);
        ɵngcc0.ɵɵelement(69, "path", 50);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(70, "g", 51);
        ɵngcc0.ɵɵelementStart(71, "defs");
        ɵngcc0.ɵɵelementStart(72, "linearGradient", 6);
        ɵngcc0.ɵɵelement(73, "stop", 26);
        ɵngcc0.ɵɵelement(74, "stop", 35);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(75, "linearGradient", 6);
        ɵngcc0.ɵɵelement(76, "stop", 36);
        ɵngcc0.ɵɵelement(77, "stop", 37);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(78, "path", 52);
        ɵngcc0.ɵɵelement(79, "path", 53);
        ɵngcc0.ɵɵelement(80, "path", 54);
        ɵngcc0.ɵɵelement(81, "path", 55);
        ɵngcc0.ɵɵelement(82, "path", 56);
        ɵngcc0.ɵɵelement(83, "path", 57);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵnamespaceHTML();
        ɵngcc0.ɵɵelementStart(84, "div", 58);
        ɵngcc0.ɵɵtemplate(85, PlusMenuComponent_div_85_Template, 6, 12, "div", 59);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleMapInterpolate1("--menu-color: ", ctx.menuColor, "");
        ɵngcc0.ɵɵproperty("tooltipDisabled", !ctx.menuTitle || ctx.position !== ctx.PlusMenuPosition.Right)("tooltipTitle", ctx.menuTitle);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.menuTitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵstyleMapInterpolate4("--item-0-color: ", ctx.itemColor0, "; --item-1-color: ", ctx.itemColor1, "; --item-2-color: ", ctx.itemColor2, "; --menu-color: ", ctx.menuColor, "");
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("id", "right-two-grad--" + ctx.uid);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵattribute("stroke", "url(#right-two-grad--" + ctx.uid + ")");
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("id", "right-three-grad--" + ctx.uid);
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵattribute("stroke", "url(#right-three-grad--" + ctx.uid + ")");
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵproperty("id", "bottom-two-grad--" + ctx.uid);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("id", "bottom-two-circle-grad--" + ctx.uid);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵattribute("stroke", "url(#bottom-two-grad--" + ctx.uid + ")");
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵattribute("stroke", "url(#bottom-two-circle-grad--" + ctx.uid + ")");
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("id", "bottom-three-left-grad--" + ctx.uid);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("id", "bottom-three-right-grad--" + ctx.uid);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵattribute("stroke", "url(#bottom-three-left-grad--" + ctx.uid + ")");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("stroke", "url(#bottom-three-right-grad--" + ctx.uid + ")");
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵproperty("id", "top-two-grad--" + ctx.uid);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("id", "top-two-circle-grad--" + ctx.uid);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵattribute("stroke", "url(#top-two-grad--" + ctx.uid + ")");
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵattribute("stroke", "url(#top-two-circle-grad--" + ctx.uid + ")");
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("id", "top-three-left-grad--" + ctx.uid);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("id", "top-three-right-grad--" + ctx.uid);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵattribute("stroke", "url(#top-three-right-grad--" + ctx.uid + ")");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("stroke", "url(#top-three-left-grad--" + ctx.uid + ")");
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.items);
    } }, directives: [ɵngcc1.TooltipDirective, ɵngcc2.IconComponent, ɵngcc3.NgForOf, ɵngcc3.NgIf], styles: [".ngx-plus-menu{--menu-color:#9fce36;--background-color:7,8,11;--background-opacity:0.7;--size:300px;--radial-size:500px;--radial-radius:250px;--button-size:30px;--button-radius:15px;--icon-size:60px;--icon-background:linear-gradient(180deg,#12141a,#262c38);--shadow-blur:50px;--animation-duration:500ms;width:var(--button-size);height:var(--button-size);transition-property:height width background box-shadow border-radius translate;transition-duration:var(--animation-duration);background:rgba(var(--background-color),0);box-shadow:0 0 var(--shadow-blur) var(--shadow-blur) rgba(var(--background-color),0);border-radius:var(--button-radius);overflow:hidden;z-index:10}.ngx-plus-menu--circle i{transform:rotate(0deg);transition:transform var(--animation-duration)}.ngx-plus-menu.open{z-index:100}.ngx-plus-menu.open .ngx-plus-menu--circle i{transform:rotate(135deg)}.ngx-plus-menu--circle-container{color:var(--menu-color);cursor:pointer;font-size:29px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ngx-plus-menu--menu-title{display:none;vertical-align:top;font-size:18px;color:#fff;margin-left:5px;line-height:var(--button-size)}.ngx-plus-menu--content-container>svg{position:absolute;pointer-events:none}.ngx-plus-menu--content-container>svg>g{display:none}.ngx-plus-menu--content-container>svg .dot{fill:rgba(var(--background-color))}.ngx-plus-menu--items-container{position:absolute;top:var(--button-size);right:var(--button-size);height:var(--radial-size);width:var(--radial-size);color:#fff}.ngx-plus-menu--items-container .ngx-plus-menu--item{position:absolute;width:90px;height:auto;text-align:right;font-size:18px;line-height:19px;font-weight:600;cursor:pointer}.ngx-plus-menu--items-container .ngx-plus-menu--item .subtitle{font-style:normal;font-weight:600;font-size:13px;line-height:30px;color:#afb7c8}.ngx-plus-menu--items-container .ngx-plus-menu--icon{position:absolute;text-align:center;font-size:25px;font-weight:700;border-radius:50%;background:var(--icon-background);border:2px solid var(--menu-color);color:var(--menu-color);box-shadow:0 0 10px 0 var(--menu-color)}.ngx-plus-menu--items-container .ngx-plus-menu--icon.custom-color{color:var(--itemColor);border-color:var(--itemColor);box-shadow:0 0 10px 0 var(--itemColor)}.ngx-plus-menu--items-container .ngx-plus-menu--icon{width:var(--icon-size);height:var(--icon-size);line-height:65px;cursor:pointer}.ngx-plus-menu.position-right .ngx-plus-menu--circle-container{position:absolute;top:0;right:0}.ngx-plus-menu.position-right.open{width:var(--radial-size);height:var(--radial-size);background:rgba(var(--background-color),var(--background-opacity));box-shadow:0 0 var(--shadow-blur) var(--shadow-blur) rgba(var(--background-color),var(--background-opacity));border-radius:var(--button-radius) var(--button-radius) var(--button-radius) var(--radial-size)}.ngx-plus-menu.position-right .ngx-plus-menu--content-container>svg{position:absolute;top:-21px;right:-48px}.ngx-plus-menu.position-right .ngx-plus-menu--content-container>svg .right.two{display:unset}.ngx-plus-menu.position-right .ngx-plus-menu--items-container{position:absolute;top:var(--button-size);right:var(--button-size)}.ngx-plus-menu.position-right .ngx-plus-menu--item-0{top:57px;right:222px}.ngx-plus-menu.position-right .ngx-plus-menu--item-1{top:217px;right:38px}.ngx-plus-menu.position-right .ngx-plus-menu--icon-0{top:38px;right:138px}.ngx-plus-menu.position-right .ngx-plus-menu--icon-1{top:138px;right:38px}.ngx-plus-menu.position-right.has-three .ngx-plus-menu--content-container>svg{top:-23px;right:-48px}.ngx-plus-menu.position-right.has-three .ngx-plus-menu--content-container>svg .right.three{display:unset}.ngx-plus-menu.position-right.has-three .ngx-plus-menu--content-container>svg .right.two{display:none}.ngx-plus-menu.position-right.has-three .ngx-plus-menu--item-0{top:16px;right:236px}.ngx-plus-menu.position-right.has-three .ngx-plus-menu--item-1{top:150px;right:166px}.ngx-plus-menu.position-right.has-three .ngx-plus-menu--item-2{top:235px;right:-2px}.ngx-plus-menu.position-right.has-three .ngx-plus-menu--icon-0{top:-6px;right:152px}.ngx-plus-menu.position-right.has-three .ngx-plus-menu--icon-1{top:97px;right:97px}.ngx-plus-menu.position-right.has-three .ngx-plus-menu--icon-2{top:152px;right:-6px}.ngx-plus-menu.position-bottom{width:var(--size);height:var(--button-size);border-radius:var(--button-radius)}.ngx-plus-menu.position-bottom .ngx-plus-menu--content-container{display:flex;justify-content:center;position:absolute;width:100%;height:200px;text-align:center;bottom:40px}.ngx-plus-menu.position-bottom .ngx-plus-menu--content-container>svg{left:auto;right:auto;bottom:0}.ngx-plus-menu.position-bottom .ngx-plus-menu--content-container>svg .bottom.two{display:unset}.ngx-plus-menu.position-bottom .ngx-plus-menu--content-container>svg .bottom.three{display:none}.ngx-plus-menu.position-bottom .ngx-plus-menu--circle-container{position:absolute;width:100%;text-align:center;bottom:-10px;left:0;right:0}.ngx-plus-menu.position-bottom .ngx-plus-menu--items-container{position:absolute;height:var(--size);width:var(--radial-size);bottom:0;right:unset;top:unset}.ngx-plus-menu.position-bottom .ngx-plus-menu--items-container .ngx-plus-menu--item{text-align:center;height:50px}.ngx-plus-menu.position-bottom .ngx-plus-menu--menu-title{display:unset}.ngx-plus-menu.position-bottom.open{width:var(--radial-size);height:var(--size);background:rgba(var(--background-color),var(--background-opacity));box-shadow:0 0 var(--shadow-blur) var(--shadow-blur) rgba(var(--background-color),var(--background-opacity));border-radius:var(--radial-radius) var(--radial-radius) var(--button-radius) var(--button-radius)}.ngx-plus-menu.position-bottom .ngx-plus-menu--item-0{top:unset;bottom:8px;left:92px}.ngx-plus-menu.position-bottom .ngx-plus-menu--item-1{top:unset;bottom:8px;right:96px}.ngx-plus-menu.position-bottom .ngx-plus-menu--icon-0{top:unset;bottom:90px;right:329px}.ngx-plus-menu.position-bottom .ngx-plus-menu--icon-1{top:unset;bottom:90px;right:110px}.ngx-plus-menu.position-bottom.has-three .ngx-plus-menu--content-container>svg .bottom.two{display:none}.ngx-plus-menu.position-bottom.has-three .ngx-plus-menu--content-container>svg .bottom.three{display:unset}.ngx-plus-menu.position-bottom.has-three .ngx-plus-menu--item-0{top:unset;bottom:8px;left:56px}.ngx-plus-menu.position-bottom.has-three .ngx-plus-menu--item-1{top:unset;bottom:8px;right:206px}.ngx-plus-menu.position-bottom.has-three .ngx-plus-menu--item-2{top:unset;bottom:8px;right:56px}.ngx-plus-menu.position-bottom.has-three .ngx-plus-menu--icon-0{top:unset;bottom:90px;right:366px}.ngx-plus-menu.position-bottom.has-three .ngx-plus-menu--icon-1{top:unset;bottom:124px;right:218px}.ngx-plus-menu.position-bottom.has-three .ngx-plus-menu--icon-2{top:unset;bottom:90px;right:70px}.ngx-plus-menu.position-top{width:var(--size);height:var(--button-size);border-radius:var(--button-radius)}.ngx-plus-menu.position-top .ngx-plus-menu--content-container{display:flex;justify-content:center;position:absolute;width:100%;height:var(--size);text-align:center;top:40px}.ngx-plus-menu.position-top .ngx-plus-menu--content-container>svg .top.two{display:unset}.ngx-plus-menu.position-top .ngx-plus-menu--content-container>svg .top.three{display:none}.ngx-plus-menu.position-top .ngx-plus-menu--circle-container{position:absolute;width:100%;text-align:center;top:0;left:0;right:0}.ngx-plus-menu.position-top .ngx-plus-menu--menu-title{display:unset}.ngx-plus-menu.position-top .ngx-plus-menu--items-container{position:absolute;height:var(--size);width:var(--radial-size);bottom:0;right:unset;top:unset}.ngx-plus-menu.position-top .ngx-plus-menu--items-container .ngx-plus-menu--item{text-align:center;height:50px}.ngx-plus-menu.position-top.open{height:var(--size);width:var(--radial-size);background:rgba(var(--background-color),var(--background-opacity));box-shadow:0 0 var(--shadow-blur) var(--shadow-blur) rgba(var(--background-color),var(--background-opacity));border-radius:var(--button-radius) var(--button-radius) var(--radial-radius) var(--radial-radius)}.ngx-plus-menu.position-top .ngx-plus-menu--item-0{top:111px;left:95px}.ngx-plus-menu.position-top .ngx-plus-menu--item-1{top:111px;right:96px}.ngx-plus-menu.position-top .ngx-plus-menu--icon-0{top:29px;right:329px}.ngx-plus-menu.position-top .ngx-plus-menu--icon-1{top:29px;right:110px}.ngx-plus-menu.position-top.has-three .ngx-plus-menu--content-container>svg .top.two{display:none}.ngx-plus-menu.position-top.has-three .ngx-plus-menu--content-container>svg .top.three{display:unset}.ngx-plus-menu.position-top.has-three .ngx-plus-menu--item-0{top:99px;left:55px}.ngx-plus-menu.position-top.has-three .ngx-plus-menu--item-1{top:133px;right:206px}.ngx-plus-menu.position-top.has-three .ngx-plus-menu--item-2{top:99px;right:59px}.ngx-plus-menu.position-top.has-three .ngx-plus-menu--icon-0{top:17px;right:368px}.ngx-plus-menu.position-top.has-three .ngx-plus-menu--icon-1{top:50px;right:220px}.ngx-plus-menu.position-top.has-three .ngx-plus-menu--icon-2{top:17px;right:72px}.ngx-plus-menu .arrow{fill:var(--menu-color)}.ngx-plus-menu .arrow--color-0{fill:#9fce36;fill:var(--item-0-color,var(--menu-color,#9fce36))}.ngx-plus-menu .arrow--color-1{fill:#9fce36;fill:var(--item-1-color,var(--menu-color,#9fce36))}.ngx-plus-menu .arrow--color-2{fill:#9fce36;fill:var(--item-2-color,var(--menu-color,#9fce36))}.ngx-plus-menu .stop--color-0{stop-color:#9fce36;stop-color:var(--item-0-color,var(--menu-color,#9fce36))}.ngx-plus-menu .stop--color-1{stop-color:#9fce36;stop-color:var(--item-1-color,var(--menu-color,#9fce36))}.ngx-plus-menu .stop--color-2{stop-color:#9fce36;stop-color:var(--item-2-color,var(--menu-color,#9fce36))}"], encapsulation: 2, changeDetection: 0 });
PlusMenuComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
PlusMenuComponent.propDecorators = {
    items: [{ type: Input }],
    position: [{ type: Input }],
    menuTitle: [{ type: Input }],
    closeOnClickOutside: [{ type: Input }],
    menuColor: [{ type: Input }],
    clickItem: [{ type: Output }],
    toggleMenu: [{ type: Output }],
    p: [{ type: HostBinding, args: ['class',] }],
    open: [{ type: HostBinding, args: ['class.open',] }],
    hasThree: [{ type: HostBinding, args: ['class.has-three',] }, { type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PlusMenuComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-plus-menu',
                template: "<div \n  class=\"ngx-plus-menu--circle-container\" \n  (click)=\"onClickOpenClose()\" \n  ngx-tooltip [tooltipDisabled]=\"!menuTitle || position !== PlusMenuPosition.Right\" \n  [tooltipTitle]=\"menuTitle\" \n  tooltipPlacement=\"left\"\n  style=\"--menu-color: {{menuColor}}\"\n>\n  <ngx-icon class=\"ngx-plus-menu--circle\" fontIcon=\"add-circle-medium\"></ngx-icon>\n  <span class=\"ngx-plus-menu--menu-title\">{{ menuTitle }}</span>\n</div>\n\n<div \n  class=\"ngx-plus-menu--content-container\"\n  style=\"--item-0-color: {{itemColor0}}; --item-1-color: {{itemColor1}}; --item-2-color: {{itemColor2}}; --menu-color: {{menuColor}}\"\n>\n  <svg\n    width=\"880\"\n    height=\"836\"\n    viewBox=\"0 0 880 836\"\n    fill=\"none\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n\n    <g class=\"right two\" transform=\"translate(0, 0)\">\n      <defs>\n        <linearGradient [id]=\"'right-two-grad--' + uid\">\n          <stop class=\"stop stop--color-0\" offset=\"28%\" />\n          <stop class=\"stop stop--color-1\" offset=\"50%\" />\n        </linearGradient>\n      </defs>\n      <path class=\"arc\" [attr.stroke]=\"'url(#right-two-grad--' + uid + ')'\" d=\"M633.883 119C654.069 163.463 689.972 199.275 734.5 219.343\" stroke-width=\"2\" />\n      <path class=\"arrow arrow--color-0\" d=\"M653.8 141.5C651 144.5 651.971 148.918 653.441 151.174L651.739 152.175C650.873 150.829 647.5 147.5 641.5 148L653.8 141.5Z\" />\n      <path class=\"arrow arrow--color-1\" d=\"M711.863 199.563C708.863 202.363 704.445 201.392 702.189 199.922L701.188 201.624C702.534 202.49 705.863 205.863 705.363 211.863L711.863 199.563Z\" />\n    </g>\n\n    <g class=\"right three\" transform=\"translate(519, -25)\">\n      <defs>\n        <linearGradient [id]=\"'right-three-grad--' + uid\">\n          <stop class=\"stop stop--color-0\" offset=\"0%\" />\n          <stop class=\"stop stop--color-0\" offset=\"5%\" />\n          <stop class=\"stop stop--color-1\" offset=\"20%\" />\n          <stop class=\"stop stop--color-1\" offset=\"60%\" />\n          <stop class=\"stop stop--color-2\" offset=\"70%\" />\n          <stop class=\"stop stop--color-2\" offset=\"100%\" />\n        </linearGradient>\n      </defs>\n\n      <path class=\"arc\" [attr.stroke]=\"'url(#right-three-grad--' + uid + ')'\" d=\"M260 259.219C180.273 243.543 117.457 180.727 101.781 101\" stroke-width=\"2\"/>\n      <path class=\"arrow arrow--color-0\" d=\"M117 127C113.5 129 112.5 134.5 113.5 137L111.652 137.642C111.066 136.153 108 131.5 102 131L117 127Z\" />\n      <path class=\"arrow arrow--color-1\" d=\"M184 217C181.5 221.5 183.629 225.48 185.876 226.964L184.711 228.563C183.38 227.674 178 226 173.5 229L184 217Z\" />\n      <path class=\"arrow arrow--color-1\" d=\"M144 177C139.5 179.5 135.52 177.371 134.036 175.124L132.437 176.289C133.326 177.62 135 183 132 187.5L144 177Z\" />\n      <path class=\"arrow arrow--color-2\" d=\"M234 244C232 247.5 226.5 248.5 224 247.5L223.359 249.348C224.847 249.934 229.5 253 230 259L234 244Z\" />\n    </g>\n\n    <g class=\"bottom two\" transform=\"translate(210, 600)\">\n      <defs>\n        <linearGradient [id]=\"'bottom-two-grad--' + uid\">\n          <stop class=\"stop stop--color-0\" offset=\"50%\"/>\n          <stop class=\"stop stop--color-1\" offset=\"50%\" />\n        </linearGradient>\n        <linearGradient [id]=\"'bottom-two-circle-grad--' + uid\">\n          <stop class=\"stop stop--color-0\" offset=\"30%\"/>\n          <stop class=\"stop stop--color-1\" offset=\"90%\" />\n        </linearGradient>\n      </defs>\n      <path class=\"arc\" [attr.stroke]=\"'url(#bottom-two-grad--' + uid + ')'\" d=\"M350 138C350 117.565 296.498 101 230.5 101C164.502 101 111 117.565 111 138\" stroke-width=\"2\"/>\n      <path class=\"arrow arrow--color-1\" d=\"M311.029 117.617C311 113 307.5 110.72 305.5 110.22L306 108.3C307.266 108.601 312.5 109 314 106L311.029 117.617Z\"/>\n      <path class=\"arrow arrow--color-0\" d=\"M149.971 117.617C150 113 153.5 110.72 155.5 110.22L155 108.3C153.734 108.601 148.5 109 147 106L149.971 117.617Z\"/>\n      <path class=\"arrow arrow--color-1\" d=\"M237.093 97.4119C238.5 99.5 240 100 241.945 100.18L241.917 102.15C240.335 102.15 238.5 102.5 236.956 105.254L237.093 97.4119Z\"/>\n      <circle class=\"dot\" [attr.stroke]=\"'url(#bottom-two-circle-grad--' + uid + ')'\" cx=\"230\" cy=\"101\" r=\"7\" stroke-width=\"2\"></circle>\n      <path class=\"arrow arrow--color-0\" d=\"M223.513 97.4119C222.106 99.5 220.606 100 218.662 100.18L218.689 102.15C220.271 102.15 222.106 102.5 223.65 105.254L223.513 97.4119Z\"/>\n    </g>\n\n    <g class=\"bottom three\" transform=\"translate(190, 580)\">\n      <defs>\n        <linearGradient [id]=\"'bottom-three-left-grad--' + uid\">\n          <stop class=\"stop stop--color-0\" offset=\"30%\" />\n          <stop class=\"stop stop--color-1\" offset=\"70%\" />\n        </linearGradient>\n        <linearGradient [id]=\"'bottom-three-right-grad--' + uid\">\n          <stop class=\"stop stop--color-1\" offset=\"30%\" />\n          <stop class=\"stop stop--color-2\" offset=\"80%\" />\n        </linearGradient>\n      </defs>\n      <path class=\"arc\" [attr.stroke]=\"'url(#bottom-three-left-grad--' + uid + ')'\" d=\"M100.5 136.194C140.708 115.721 187.856 103.158 238.5 101.253\" stroke-width=\"2\"/>\n      <path class=\"arc\" [attr.stroke]=\"'url(#bottom-three-right-grad--' + uid + ')'\" d=\"M403.5 136.194C363.292 115.721 316.144 103.158 265.5 101.253\" stroke-width=\"2\"/>\n      <path class=\"arrow arrow--color-0\" d=\"M131.858 128.317C132.878 124.348 136.05 122.041 137.509 121.384L136.687 119.561C135.228 120.218 131.399 121.066 127.75 119.2L131.858 128.317Z\"/>\n      <path class=\"arrow arrow--color-2\" d=\"M372.192 128.317C371.173 124.348 368 122.041 366.541 121.384L367.363 119.561C368.822 120.218 372.651 121.066 376.3 119.2L372.192 128.317Z\"/>\n      <path class=\"arrow arrow--color-1\" d=\"M222.5 107.5C221.5 105.5 220 103.5 216.117 103.805L216.117 101.802C219 101.5 221.5 99.5 222.5 96.5L222.5 107.5Z\"/>\n      <path class=\"arrow arrow--color-1\" d=\"M281.5 107.5C282.5 105.5 284 103.5 287.883 103.805L287.883 101.802C285 101.5 282.5 99.5 281.5 96.5L281.5 107.5Z\"/>\n    </g>\n\n    <g class=\"top two\" transform=\"translate(210, -60)\">\n      <defs>\n        <linearGradient [id]=\"'top-two-grad--' + uid\">\n          <stop class=\"stop stop--color-0\" offset=\"50%\"/>\n          <stop class=\"stop stop--color-1\" offset=\"50%\" />\n        </linearGradient>\n        <linearGradient [id]=\"'top-two-circle-grad--' + uid\">\n          <stop class=\"stop stop--color-0\" offset=\"30%\"/>\n          <stop class=\"stop stop--color-1\" offset=\"90%\" />\n        </linearGradient>\n      </defs>\n      <path class=\"arc\" [attr.stroke]=\"'url(#top-two-grad--' + uid + ')'\"  d=\"M350 100C350 120.435 296.498 137 230.5 137C164.502 137 111 120.435 111 100\" stroke-width=\"2\"/>\n      <path class=\"arrow arrow--color-1\" d=\"M311.029 120.383C311 125 307.5 127.28 305.5 127.78L306 129.7C307.266 129.399 312.5 129 314 132L311.029 120.383Z\"/>\n      <path class=\"arrow arrow--color-0\" d=\"M149.971 120.383C150 125 153.5 127.28 155.5 127.78L155 129.7C153.734 129.399 148.5 129 147 132L149.971 120.383Z\"/>\n      <path class=\"arrow arrow--color-1\" d=\"M237.093 140.588C238.5 138.5 240 138 241.944 137.82L241.917 135.85C240.335 135.85 238.5 135.5 236.956 132.746L237.093 140.588Z\"/>\n      <circle class=\"dot\" [attr.stroke]=\"'url(#top-two-circle-grad--' + uid + ')'\" cx=\"230\" cy=\"137\" r=\"7\" stroke-width=\"2\"></circle>\n      <path class=\"arrow arrow--color-0\" d=\"M223.513 140.588C222.106 138.5 220.606 138 218.662 137.82L218.689 135.85C220.271 135.85 222.106 135.5 223.65 132.746L223.513 140.588Z\"/>\n    </g>\n\n    <g class=\"top three\" transform=\"translate(188, -55)\">\n      <defs>\n        <linearGradient [id]=\"'top-three-left-grad--' + uid\">\n          <stop class=\"stop stop--color-0\" offset=\"30%\" />\n          <stop class=\"stop stop--color-1\" offset=\"70%\" />\n        </linearGradient>\n        <linearGradient [id]=\"'top-three-right-grad--' + uid\">\n          <stop class=\"stop stop--color-1\" offset=\"30%\" />\n          <stop class=\"stop stop--color-2\" offset=\"80%\" />\n        </linearGradient>\n      </defs>\n      <path class=\"arc\" [attr.stroke]=\"'url(#top-three-right-grad--' + uid + ')'\"  d=\"M403.5 101.806C363.292 122.279 316.144 134.842 265.5 136.747\" stroke-width=\"2\"/>\n      <path class=\"arc\" [attr.stroke]=\"'url(#top-three-left-grad--' + uid + ')'\"  d=\"M100.5 101.806C140.708 122.279 187.856 134.842 238.5 136.747\" stroke-width=\"2\"/>\n      <path class=\"arrow arrow--color-0\" d=\"M131.858 109.683C132.878 113.652 136.05 115.959 137.509 116.616L136.687 118.439C135.228 117.782 131.399 116.934 127.75 118.8L131.858 109.683Z\"/>\n      <path class=\"arrow arrow--color-2\" d=\"M372.192 109.683C371.173 113.652 368 115.959 366.541 116.616L367.363 118.439C368.822 117.782 372.651 116.934 376.3 118.8L372.192 109.683Z\"/>\n      <path class=\"arrow arrow--color-1\" d=\"M222.5 130.5C221.5 132.5 220 134.5 216.117 134.195L216.117 136.198C219 136.5 221.5 138.5 222.5 141.5L222.5 130.5Z\"/>\n      <path class=\"arrow arrow--color-1\" d=\"M281.5 130.5C282.5 132.5 284 134.5 287.883 134.195L287.883 136.198C285 136.5 282.5 138.5 281.5 141.5L281.5 130.5Z\"/>\n    </g>\n  </svg>\n\n  <div class=\"ngx-plus-menu--items-container\">\n    <div *ngFor=\"let item of items; index as i\" (click)=\"onClickItem(i)\">\n      <div [class]=\"'ngx-plus-menu--item ngx-plus-menu--item-' + i\">\n        {{item.title}}\n        <div class=\"subtitle\" *ngIf=\"item.subtitle\">{{item.subtitle}}</div>      \n      </div>\n      <div [class]=\"'ngx-plus-menu--icon ngx-plus-menu--icon-' + i\" [class.custom-color]=\"item.color\" style=\"--itemColor: {{item.color}}\">\n        <ngx-icon [fontIcon]=\"item.icon\"></ngx-icon>\n      </div>\n    </div>\n  </div>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".ngx-plus-menu{--menu-color:#9fce36;--background-color:7,8,11;--background-opacity:0.7;--size:300px;--radial-size:500px;--radial-radius:250px;--button-size:30px;--button-radius:15px;--icon-size:60px;--icon-background:linear-gradient(180deg,#12141a,#262c38);--shadow-blur:50px;--animation-duration:500ms;width:var(--button-size);height:var(--button-size);transition-property:height width background box-shadow border-radius translate;transition-duration:var(--animation-duration);background:rgba(var(--background-color),0);box-shadow:0 0 var(--shadow-blur) var(--shadow-blur) rgba(var(--background-color),0);border-radius:var(--button-radius);overflow:hidden;z-index:10}.ngx-plus-menu--circle i{transform:rotate(0deg);transition:transform var(--animation-duration)}.ngx-plus-menu.open{z-index:100}.ngx-plus-menu.open .ngx-plus-menu--circle i{transform:rotate(135deg)}.ngx-plus-menu--circle-container{color:var(--menu-color);cursor:pointer;font-size:29px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ngx-plus-menu--menu-title{display:none;vertical-align:top;font-size:18px;color:#fff;margin-left:5px;line-height:var(--button-size)}.ngx-plus-menu--content-container>svg{position:absolute;pointer-events:none}.ngx-plus-menu--content-container>svg>g{display:none}.ngx-plus-menu--content-container>svg .dot{fill:rgba(var(--background-color))}.ngx-plus-menu--items-container{position:absolute;top:var(--button-size);right:var(--button-size);height:var(--radial-size);width:var(--radial-size);color:#fff}.ngx-plus-menu--items-container .ngx-plus-menu--item{position:absolute;width:90px;height:auto;text-align:right;font-size:18px;line-height:19px;font-weight:600;cursor:pointer}.ngx-plus-menu--items-container .ngx-plus-menu--item .subtitle{font-style:normal;font-weight:600;font-size:13px;line-height:30px;color:#afb7c8}.ngx-plus-menu--items-container .ngx-plus-menu--icon{position:absolute;text-align:center;font-size:25px;font-weight:700;border-radius:50%;background:var(--icon-background);border:2px solid var(--menu-color);color:var(--menu-color);box-shadow:0 0 10px 0 var(--menu-color)}.ngx-plus-menu--items-container .ngx-plus-menu--icon.custom-color{color:var(--itemColor);border-color:var(--itemColor);box-shadow:0 0 10px 0 var(--itemColor)}.ngx-plus-menu--items-container .ngx-plus-menu--icon{width:var(--icon-size);height:var(--icon-size);line-height:65px;cursor:pointer}.ngx-plus-menu.position-right .ngx-plus-menu--circle-container{position:absolute;top:0;right:0}.ngx-plus-menu.position-right.open{width:var(--radial-size);height:var(--radial-size);background:rgba(var(--background-color),var(--background-opacity));box-shadow:0 0 var(--shadow-blur) var(--shadow-blur) rgba(var(--background-color),var(--background-opacity));border-radius:var(--button-radius) var(--button-radius) var(--button-radius) var(--radial-size)}.ngx-plus-menu.position-right .ngx-plus-menu--content-container>svg{position:absolute;top:-21px;right:-48px}.ngx-plus-menu.position-right .ngx-plus-menu--content-container>svg .right.two{display:unset}.ngx-plus-menu.position-right .ngx-plus-menu--items-container{position:absolute;top:var(--button-size);right:var(--button-size)}.ngx-plus-menu.position-right .ngx-plus-menu--item-0{top:57px;right:222px}.ngx-plus-menu.position-right .ngx-plus-menu--item-1{top:217px;right:38px}.ngx-plus-menu.position-right .ngx-plus-menu--icon-0{top:38px;right:138px}.ngx-plus-menu.position-right .ngx-plus-menu--icon-1{top:138px;right:38px}.ngx-plus-menu.position-right.has-three .ngx-plus-menu--content-container>svg{top:-23px;right:-48px}.ngx-plus-menu.position-right.has-three .ngx-plus-menu--content-container>svg .right.three{display:unset}.ngx-plus-menu.position-right.has-three .ngx-plus-menu--content-container>svg .right.two{display:none}.ngx-plus-menu.position-right.has-three .ngx-plus-menu--item-0{top:16px;right:236px}.ngx-plus-menu.position-right.has-three .ngx-plus-menu--item-1{top:150px;right:166px}.ngx-plus-menu.position-right.has-three .ngx-plus-menu--item-2{top:235px;right:-2px}.ngx-plus-menu.position-right.has-three .ngx-plus-menu--icon-0{top:-6px;right:152px}.ngx-plus-menu.position-right.has-three .ngx-plus-menu--icon-1{top:97px;right:97px}.ngx-plus-menu.position-right.has-three .ngx-plus-menu--icon-2{top:152px;right:-6px}.ngx-plus-menu.position-bottom{width:var(--size);height:var(--button-size);border-radius:var(--button-radius)}.ngx-plus-menu.position-bottom .ngx-plus-menu--content-container{display:flex;justify-content:center;position:absolute;width:100%;height:200px;text-align:center;bottom:40px}.ngx-plus-menu.position-bottom .ngx-plus-menu--content-container>svg{left:auto;right:auto;bottom:0}.ngx-plus-menu.position-bottom .ngx-plus-menu--content-container>svg .bottom.two{display:unset}.ngx-plus-menu.position-bottom .ngx-plus-menu--content-container>svg .bottom.three{display:none}.ngx-plus-menu.position-bottom .ngx-plus-menu--circle-container{position:absolute;width:100%;text-align:center;bottom:-10px;left:0;right:0}.ngx-plus-menu.position-bottom .ngx-plus-menu--items-container{position:absolute;height:var(--size);width:var(--radial-size);bottom:0;right:unset;top:unset}.ngx-plus-menu.position-bottom .ngx-plus-menu--items-container .ngx-plus-menu--item{text-align:center;height:50px}.ngx-plus-menu.position-bottom .ngx-plus-menu--menu-title{display:unset}.ngx-plus-menu.position-bottom.open{width:var(--radial-size);height:var(--size);background:rgba(var(--background-color),var(--background-opacity));box-shadow:0 0 var(--shadow-blur) var(--shadow-blur) rgba(var(--background-color),var(--background-opacity));border-radius:var(--radial-radius) var(--radial-radius) var(--button-radius) var(--button-radius)}.ngx-plus-menu.position-bottom .ngx-plus-menu--item-0{top:unset;bottom:8px;left:92px}.ngx-plus-menu.position-bottom .ngx-plus-menu--item-1{top:unset;bottom:8px;right:96px}.ngx-plus-menu.position-bottom .ngx-plus-menu--icon-0{top:unset;bottom:90px;right:329px}.ngx-plus-menu.position-bottom .ngx-plus-menu--icon-1{top:unset;bottom:90px;right:110px}.ngx-plus-menu.position-bottom.has-three .ngx-plus-menu--content-container>svg .bottom.two{display:none}.ngx-plus-menu.position-bottom.has-three .ngx-plus-menu--content-container>svg .bottom.three{display:unset}.ngx-plus-menu.position-bottom.has-three .ngx-plus-menu--item-0{top:unset;bottom:8px;left:56px}.ngx-plus-menu.position-bottom.has-three .ngx-plus-menu--item-1{top:unset;bottom:8px;right:206px}.ngx-plus-menu.position-bottom.has-three .ngx-plus-menu--item-2{top:unset;bottom:8px;right:56px}.ngx-plus-menu.position-bottom.has-three .ngx-plus-menu--icon-0{top:unset;bottom:90px;right:366px}.ngx-plus-menu.position-bottom.has-three .ngx-plus-menu--icon-1{top:unset;bottom:124px;right:218px}.ngx-plus-menu.position-bottom.has-three .ngx-plus-menu--icon-2{top:unset;bottom:90px;right:70px}.ngx-plus-menu.position-top{width:var(--size);height:var(--button-size);border-radius:var(--button-radius)}.ngx-plus-menu.position-top .ngx-plus-menu--content-container{display:flex;justify-content:center;position:absolute;width:100%;height:var(--size);text-align:center;top:40px}.ngx-plus-menu.position-top .ngx-plus-menu--content-container>svg .top.two{display:unset}.ngx-plus-menu.position-top .ngx-plus-menu--content-container>svg .top.three{display:none}.ngx-plus-menu.position-top .ngx-plus-menu--circle-container{position:absolute;width:100%;text-align:center;top:0;left:0;right:0}.ngx-plus-menu.position-top .ngx-plus-menu--menu-title{display:unset}.ngx-plus-menu.position-top .ngx-plus-menu--items-container{position:absolute;height:var(--size);width:var(--radial-size);bottom:0;right:unset;top:unset}.ngx-plus-menu.position-top .ngx-plus-menu--items-container .ngx-plus-menu--item{text-align:center;height:50px}.ngx-plus-menu.position-top.open{height:var(--size);width:var(--radial-size);background:rgba(var(--background-color),var(--background-opacity));box-shadow:0 0 var(--shadow-blur) var(--shadow-blur) rgba(var(--background-color),var(--background-opacity));border-radius:var(--button-radius) var(--button-radius) var(--radial-radius) var(--radial-radius)}.ngx-plus-menu.position-top .ngx-plus-menu--item-0{top:111px;left:95px}.ngx-plus-menu.position-top .ngx-plus-menu--item-1{top:111px;right:96px}.ngx-plus-menu.position-top .ngx-plus-menu--icon-0{top:29px;right:329px}.ngx-plus-menu.position-top .ngx-plus-menu--icon-1{top:29px;right:110px}.ngx-plus-menu.position-top.has-three .ngx-plus-menu--content-container>svg .top.two{display:none}.ngx-plus-menu.position-top.has-three .ngx-plus-menu--content-container>svg .top.three{display:unset}.ngx-plus-menu.position-top.has-three .ngx-plus-menu--item-0{top:99px;left:55px}.ngx-plus-menu.position-top.has-three .ngx-plus-menu--item-1{top:133px;right:206px}.ngx-plus-menu.position-top.has-three .ngx-plus-menu--item-2{top:99px;right:59px}.ngx-plus-menu.position-top.has-three .ngx-plus-menu--icon-0{top:17px;right:368px}.ngx-plus-menu.position-top.has-three .ngx-plus-menu--icon-1{top:50px;right:220px}.ngx-plus-menu.position-top.has-three .ngx-plus-menu--icon-2{top:17px;right:72px}.ngx-plus-menu .arrow{fill:var(--menu-color)}.ngx-plus-menu .arrow--color-0{fill:#9fce36;fill:var(--item-0-color,var(--menu-color,#9fce36))}.ngx-plus-menu .arrow--color-1{fill:#9fce36;fill:var(--item-1-color,var(--menu-color,#9fce36))}.ngx-plus-menu .arrow--color-2{fill:#9fce36;fill:var(--item-2-color,var(--menu-color,#9fce36))}.ngx-plus-menu .stop--color-0{stop-color:#9fce36;stop-color:var(--item-0-color,var(--menu-color,#9fce36))}.ngx-plus-menu .stop--color-1{stop-color:#9fce36;stop-color:var(--item-1-color,var(--menu-color,#9fce36))}.ngx-plus-menu .stop--color-2{stop-color:#9fce36;stop-color:var(--item-2-color,var(--menu-color,#9fce36))}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ChangeDetectorRef }]; }, { items: [{
            type: Input
        }], position: [{
            type: Input
        }], menuTitle: [{
            type: Input
        }], closeOnClickOutside: [{
            type: Input
        }], menuColor: [{
            type: Input
        }], clickItem: [{
            type: Output
        }], toggleMenu: [{
            type: Output
        }], open: [{
            type: HostBinding,
            args: ['class.open']
        }], p: [{
            type: HostBinding,
            args: ['class']
        }], hasThree: [{
            type: HostBinding,
            args: ['class.has-three']
        }, {
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1cy1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9wbHVzLW1lbnUvcGx1cy1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixFQUN2QixLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixZQUFZLEVBQ1osV0FBVyxFQUNYLFVBQVUsRUFDVixTQUFTLEVBQ1QsaUJBQWlCLEVBR2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCNUMsTUFBTSxPQUFPLGlCQUFpQjtBQUFHLElBd0MvQixZQUNtQixVQUFzQixFQUN0QixRQUFtQixFQUNuQixHQUFzQjtBQUN4QyxRQUhrQixlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztBQUFDLFFBQ3BCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQzNDLFFBM0NXLFVBQUssR0FBbUIsRUFBRSxDQUFDO0FBQ3RDLFFBQVcsYUFBUSxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQztBQUM3QyxRQUFXLGNBQVMsR0FBRyxFQUFFLENBQUM7QUFDMUIsUUFBVyx3QkFBbUIsR0FBRyxJQUFJLENBQUM7QUFDdEMsUUFBVyxjQUFTLEdBQUcsU0FBUyxDQUFDO0FBQ2pDLFFBQ1ksY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7QUFDM0MsUUFBWSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztBQUNyRCxRQW1CRSxTQUFJLEdBQUcsS0FBSyxDQUFD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Q0FBQyxrQkFBa0I7QUFBRSxZQUFBLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQzNELElBQUUsQ0FBQztBQUNIOzZDQTVGQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGVBQWUsa0JBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQXlDLGtCQUV6QyxlQUFlO0NBQUUsdUJBQXVCLENBQUMsTUFBTTtNQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cTFLQUN0QyxrMElBQ0k7QUFBQztBQUEyQyxZQXZCL0MsVUFBVTtBQUNWLFlBQUEsU0FBUztBQUNULFlBQUEsaUJBQWlCO0FBQ2xCO0FBQUc7QUFFZSxvQkFtQmhCLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUssd0JBQ1YsS0FBSztBQUFLLGtDQUNWLEtBQUs7QUFBSyx3QkFDVixLQUFLO0FBQUssd0JBRVYsTUFBTTtBQUFLLHlCQUNYLE1BQU07QUFBSyxnQkFjWCxXQUFXLFNBQUMsT0FBTztBQUNqQixtQkFJRixXQUFXLFNBQUMsWUFBWTtBQUN0Qix1QkFFRixXQUFXLFNBQUMsaUJBQWlCLGNBQzdCLEtBQUs7QUFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIElucHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdXNNZW51UG9zaXRpb24gfSBmcm9tICcuL3BsdXMtbWVudS1wb3NpdGlvbi5lbnVtJztcbmltcG9ydCB7IGlkIH0gZnJvbSAnLi4vLi4vdXRpbHMvaWQvaWQudXRpbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGx1c01lbnVJdGVtIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgc3VidGl0bGU/OiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbiAgY29sb3I/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1wbHVzLW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGx1cy1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGx1cy1tZW51LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFBsdXNNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBpdGVtczogUGx1c01lbnVJdGVtW10gPSBbXTtcbiAgQElucHV0KCkgcG9zaXRpb24gPSBQbHVzTWVudVBvc2l0aW9uLlJpZ2h0O1xuICBASW5wdXQoKSBtZW51VGl0bGUgPSAnJztcbiAgQElucHV0KCkgY2xvc2VPbkNsaWNrT3V0c2lkZSA9IHRydWU7XG4gIEBJbnB1dCgpIG1lbnVDb2xvciA9ICcjOWZjZTM2JztcblxuICBAT3V0cHV0KCkgY2xpY2tJdGVtID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdG9nZ2xlTWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBnZXQgaXRlbUNvbG9yMCgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtc1swXS5jb2xvciB8fCB0aGlzLm1lbnVDb2xvcjtcbiAgfVxuXG4gIGdldCBpdGVtQ29sb3IxKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zWzFdLmNvbG9yIHx8IHRoaXMubWVudUNvbG9yO1xuICB9XG5cbiAgZ2V0IGl0ZW1Db2xvcjIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXNbMl0/LmNvbG9yIHx8IHRoaXMubWVudUNvbG9yO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBwKCkge1xuICAgIHJldHVybiAnbmd4LXBsdXMtbWVudSBwb3NpdGlvbi0nICsgdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3Mub3BlbicpXG4gIG9wZW4gPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhhcy10aHJlZScpXG4gIEBJbnB1dCgpXG4gIGdldCBoYXNUaHJlZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGggPiAyO1xuICB9XG5cbiAgdWlkID0gJyc7XG4gIHJlYWRvbmx5IFBsdXNNZW51UG9zaXRpb24gPSBQbHVzTWVudVBvc2l0aW9uO1xuICBwcml2YXRlIGRvY3VtZW50Q2xpY2tFdmVudDogKCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51aWQgPSBpZCgpOyAvLyBmb3Igc3ZnIGxpbmVhciBncmFkaWVudCBpZHNcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRvY3VtZW50Q2xpY2tFdmVudCkgdGhpcy5kb2N1bWVudENsaWNrRXZlbnQoKTtcbiAgfVxuXG4gIG9uQ2xpY2tPcGVuQ2xvc2UoKTogdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMub3BlbiA/IHRoaXMuY2xvc2VNZW51KCkgOiB0aGlzLm9wZW5NZW51KCk7XG4gIH1cblxuICBvbkNsaWNrSXRlbShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZU1lbnUoKTtcbiAgICB0aGlzLmNsaWNrSXRlbS5lbWl0KGluZGV4KTtcbiAgfVxuXG4gIHByaXZhdGUgb3Blbk1lbnUoKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICB0aGlzLnRvZ2dsZU1lbnUuZW1pdCh0cnVlKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcblxuICAgIGlmICh0aGlzLmNsb3NlT25DbGlja091dHNpZGUpIHtcbiAgICAgIHRoaXMuZG9jdW1lbnRDbGlja0V2ZW50ID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oZG9jdW1lbnQsICdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50Q29udGFpbnMgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpO1xuICAgICAgICBpZiAoIXBhcmVudENvbnRhaW5zICYmIHRoaXMub3Blbikge1xuICAgICAgICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xvc2VNZW51KCk6IHZvaWQge1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMudG9nZ2xlTWVudS5lbWl0KGZhbHNlKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcblxuICAgIGlmICh0aGlzLmRvY3VtZW50Q2xpY2tFdmVudCkgdGhpcy5kb2N1bWVudENsaWNrRXZlbnQoKTtcbiAgfVxufVxuIl19