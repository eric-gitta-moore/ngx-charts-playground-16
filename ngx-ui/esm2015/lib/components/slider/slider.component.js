import { Component, Input, Output, EventEmitter, HostListener, forwardRef, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/forms';

function SliderComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 8);
} if (rf & 2) {
    const s_r4 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("ngStyle", s_r4);
} }
function SliderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵtemplate(1, SliderComponent_div_1_div_1_Template, 1, 1, "div", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0._ticks);
} }
function SliderComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 9);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r1._fill);
} }
function SliderComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "input", 10);
    ɵngcc0.ɵɵlistener("ngModelChange", function SliderComponent_ng_container_5_Template_input_ngModelChange_1_listener($event) { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r9); const i_r6 = restoredCtx.index; const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.setValue($event, i_r6); })("input", function SliderComponent_ng_container_5_Template_input_input_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.onChange($event); })("change", function SliderComponent_ng_container_5_Template_input_change_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.onChange($event); })("mouseenter", function SliderComponent_ng_container_5_Template_input_mouseenter_1_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r9); const i_r6 = restoredCtx.index; const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.setActive(i_r6, true); })("mouseleave", function SliderComponent_ng_container_5_Template_input_mouseleave_1_listener() { const restoredCtx = ɵngcc0.ɵɵrestoreView(_r9); const i_r6 = restoredCtx.index; const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.setActive(i_r6, false); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(2, "div", 11);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const value_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const odd_r7 = ctx.odd;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("odd", odd_r7)("active", ctx_r2._active[i_r6]);
    ɵngcc0.ɵɵproperty("id", ctx_r2.id + "-" + i_r6)("ngModel", value_r5)("min", ctx_r2.min)("max", ctx_r2.max)("step", ctx_r2.step)("disabled", ctx_r2.disabled);
    ɵngcc0.ɵɵattribute("list", ctx_r2.id + "-list")("orientation", ctx_r2.orientation);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("active", ctx_r2._active[i_r6]);
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r2._thumbs[i_r6]);
} }
let nextId = 0;
const SLIDER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SliderComponent),
    multi: true
};
const edge = window.navigator.userAgent.indexOf('Edge') > -1;
export class SliderComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.id = `range-${++nextId}`;
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.orientation = 'horizontal';
        this.filled = false;
        this.multiple = false;
        this.disabled = false;
        this.showTicks = false;
        this.change = new EventEmitter();
        this._values = [0];
        this._percents = [0];
        this._thumbs = [];
        this._ticks = [];
        this._active = [];
        this.onChangeCallback = () => {
            // placeholder
        };
        this.onTouchedCallback = () => {
            // placeholder
        };
    }
    get value() {
        if (!this._values)
            return 0;
        if (this.multiple)
            return [...this._values].sort((a, b) => a - b).join(',');
        return this._values[0];
    }
    set value(val) {
        val = ('' + val).split(',');
        if (String(val) !== String(this._values)) {
            this.setValues(val);
            this.onChangeCallback(this._values);
            this.change.emit({
                value: this._values,
                percent: this.percent
            });
            this.cdr.markForCheck();
        }
    }
    get percent() {
        const pct = this._percents;
        if (this.multiple)
            return pct.join(',');
        return '' + pct[0];
    }
    get isHorizontal() {
        return this.orientation === 'horizontal';
    }
    get isVertical() {
        return this.orientation === 'vertical';
    }
    ngOnInit() {
        if (this.showTicks) {
            this._ticks = this.getTicks();
        }
        this.setValues([0]);
    }
    setValues(values) {
        this._values = values;
        this._percents = values
            .map(v => Math.max(this.min, Math.min(this.max, v)))
            .map(v => Math.round((100 * (v - this.min)) / (this.max - this.min)));
        this._thumbs = this._percents.map(p => {
            return {
                left: `calc(${p}% - ${p / 100}em)`
            };
        });
        if (this.filled) {
            this._fill = this.getFill();
        }
        if (this.showTicks) {
            this._ticks = this.getTicks();
        }
    }
    setActive(index, active) {
        this._active[index] = active;
    }
    setValue(val, index) {
        if (this._values[index] !== val) {
            this._values[index] = val;
            this.setValues(this._values);
            this.onChangeCallback(this.value);
            this.change.emit({
                value: this.value,
                percent: this.percent
            });
        }
    }
    getCount() {
        const idxs = [];
        const step = this.tickStep || this.step;
        let i = this.min;
        while (i <= this.max) {
            idxs.push(i);
            i += step;
        }
        return idxs;
    }
    getTicks() {
        return this.getCount().map(p => {
            return {
                left: `calc(${p}% - ${p / 100 - 0.5}em)`
            };
        });
    }
    getFill() {
        if (this.filled) {
            const percentMin = this.multiple ? Math.min(...this._percents) : 0;
            const percentMax = this.multiple ? Math.max(...this._percents) : this._percents[0];
            const width = percentMax - percentMin;
            if (edge && this.multiple) {
                return {
                    left: `calc(${percentMin}% - ${percentMin / 100 - 0.5}em)`,
                    'background-size': `calc(${width}% - ${width / 100}em) 100%`
                };
            }
            return {
                left: `${percentMin}%`,
                'background-size': `${width}% 100%`
            };
        }
    }
    onMouseDown(event) {
        event.stopPropagation();
        this.active = true;
    }
    onMouseUp(event) {
        event.stopPropagation();
        this.active = false;
    }
    onChange(event) {
        event.stopPropagation();
        this.change.emit({
            value: this.value,
            percent: this.percent
        });
    }
    writeValue(val) {
        val = val ? String(val).split(',') : ['0'];
        if (String(val) !== String(this._values)) {
            this.setValues(val.map(v => +v));
            this.cdr.markForCheck();
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    trackIndex(index) {
        return index;
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
SliderComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: SliderComponent, selectors: [["ngx-slider"]], hostAttrs: [1, "ngx-slider"], hostVars: 12, hostBindings: function SliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("mousedown", function SliderComponent_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); })("mouseup", function SliderComponent_mouseup_HostBindingHandler($event) { return ctx.onMouseUp($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassProp("filled", ctx.filled)("multiple", ctx.multiple)("disabled", ctx.disabled)("active", ctx.active)("vertical", ctx.isVertical)("horizontal", ctx.isHorizontal);
    } }, inputs: { id: "id", min: "min", max: "max", step: "step", orientation: "orientation", filled: "filled", multiple: "multiple", disabled: "disabled", showTicks: "showTicks", tickStep: "tickStep" }, outputs: { change: "change" }, exportAs: ["ngxSlider"], features: [ɵngcc0.ɵɵProvidersFeature([SLIDER_VALUE_ACCESSOR])], decls: 6, vars: 4, consts: [[1, "slider-inner"], ["class", "ticks-container", 4, "ngIf"], [1, "inputs"], [1, "slider-track"], ["class", "fill-bar", 3, "ngStyle", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ticks-container"], ["class", "tick", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "tick", 3, "ngStyle"], [1, "fill-bar", 3, "ngStyle"], ["type", "range", 3, "id", "ngModel", "min", "max", "step", "disabled", "ngModelChange", "input", "change", "mouseenter", "mouseleave"], [1, "slider-thumb", 3, "ngStyle"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, SliderComponent_div_1_Template, 2, 1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelement(3, "div", 3);
        ɵngcc0.ɵɵtemplate(4, SliderComponent_span_4_Template, 1, 1, "span", 4);
        ɵngcc0.ɵɵtemplate(5, SliderComponent_ng_container_5_Template, 3, 15, "ng-container", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showTicks);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.filled);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx._values)("ngForTrackBy", ctx.trackIndex);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc1.NgStyle, ɵngcc2.RangeValueAccessor, ɵngcc2.DefaultValueAccessor, ɵngcc2.NgControlStatus, ɵngcc2.NgModel], styles: [".ngx-slider .slider-inner{margin:1em auto;position:relative;display:inline-block}.ngx-slider .inputs{position:releative;min-width:12.5em;height:1em}.ngx-slider .inputs input[type=range]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:1;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent}.ngx-slider .inputs input[type=range]::-webkit-slider-runnable-track{cursor:pointer;color:transparent;background:transparent;border-color:transparent;-webkit-appearance:none;appearance:none}.ngx-slider .inputs input[type=range]::-moz-range-track{cursor:pointer;color:transparent;background:transparent;border-color:transparent;-moz-appearance:none;appearance:none}.ngx-slider .inputs input[type=range]::-ms-track{color:transparent;background:transparent;border-color:transparent;appearance:none;cursor:pointer}.ngx-slider .inputs input[type=range]::-webkit-slider-thumb{width:1em;height:1em;-webkit-appearance:none;appearance:none;position:relative;background:transparent;border:transparent;cursor:pointer;z-index:100;color:transparent;z-index:301}.ngx-slider .inputs input[type=range]::-moz-range-thumb{width:1em;height:1em;-moz-appearance:none;appearance:none;position:relative;background:transparent;border:transparent;cursor:pointer;z-index:100;transform:scale(1);z-index:302}.ngx-slider .inputs input[type=range]::-ms-thumb{width:1em;height:1em;appearance:none;position:relative;background:transparent;border:transparent;cursor:pointer;z-index:100;transform:scale(1);z-index:302}.ngx-slider .inputs input[type=range]:focus{outline:none}.ngx-slider .inputs .slider-track{position:absolute;background-color:#479eff;width:100%;height:2px;top:calc(.5em - 1px);pointer-events:none;opacity:.3}.ngx-slider .inputs .slider-thumb{position:absolute;background-color:#479eff;height:1em;width:1em;border-radius:.5em;pointer-events:none;z-index:100;box-shadow:0 0 0 0 rgba(71,158,255,.3);transition:box-shadow .3s ease-in-out}.ngx-slider .inputs .slider-thumb.active{box-shadow:0 0 0 5px rgba(71,158,255,.3)}.ngx-slider .ticks-container{position:absolute;display:block;top:0;width:100%;height:3px;opacity:.3}.ngx-slider .ticks-container .tick{position:absolute;border:none;height:100%;width:2px;background-color:#479eff}.ngx-slider.filled .fill-bar{background-repeat:no-repeat;background-image:linear-gradient(#479eff,#479eff);position:absolute;border-radius:0;z-index:99;pointer-events:none;height:4px;left:0;top:calc(50% - 2px);width:100%}.ngx-slider.vertical{display:inline-block;height:auto;min-height:12.5em;width:1em}.ngx-slider.vertical .slider-inner{transform:translateY(-100%) rotate(-90deg) translate(-100%);transform-origin:top left}@supports (-ms-ime-align:auto){.ngx-slider.multiple .inputs input[type=range]{position:relative;display:block;-webkit-appearance:slider-vertical;-moz-appearance:slider-vertical;appearance:slider-vertical}.ngx-slider.multiple .inputs input[type=range]::-webkit-slider-runnable-track{-webkit-animation:none 0s ease 0s 1 normal none running;animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:none;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-fill:balance;grid-column-gap:normal;column-gap:normal;column-rule:medium none currentColor;column-span:1;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;-webkit-hyphens:none;hyphens:none;left:auto;letter-spacing:normal;list-style:disc none outside;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;-webkit-transition:none 0s ease 0s;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;-webkit-appearance:initial;appearance:auto}.ngx-slider.multiple .inputs input[type=range]::-ms-track{animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-fill:balance;grid-column-gap:normal;column-gap:normal;column-rule:medium none currentColor;column-span:1;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc none outside;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;-ms-transition:none 0s ease 0s;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;appearance:auto;color:transparent;background-color:transparentl;border:none;opacity:0;height:2px}.ngx-slider.multiple .inputs input[type=range]::-webkit-slider-thumb{-webkit-animation:none 0s ease 0s 1 normal none running;animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:none;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-fill:balance;grid-column-gap:normal;column-gap:normal;column-rule:medium none currentColor;column-span:1;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;-webkit-hyphens:none;hyphens:none;left:auto;letter-spacing:normal;list-style:disc none outside;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;-webkit-transition:none 0s ease 0s;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;-webkit-appearance:initial;appearance:auto}.ngx-slider.multiple .inputs input[type=range]::-ms-thumb{animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border-collapse:separate;border-image:none;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-fill:balance;grid-column-gap:normal;column-gap:normal;column-rule:medium none currentColor;column-span:1;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc none outside;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;-ms-transition:none 0s ease 0s;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;color:transparent;background-color:transparent;appearance:auto;border-radius:0;height:1px;width:1px;border:.5em solid transparent;border-top-color:#479eff}.ngx-slider.multiple .inputs input[type=range].odd::-ms-thumb{border:.5em solid transparent;border-bottom-color:#479eff}.ngx-slider.multiple .slider-track{height:100%;left:.5em;width:calc(100% - 1em)}.ngx-slider.multiple .slider-thumb{display:none}.ngx-slider.multiple .fill-bar{height:100%;margin-top:1px;opacity:.6}}"], encapsulation: 2, changeDetection: 0 });
SliderComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
SliderComponent.propDecorators = {
    id: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    step: [{ type: Input }],
    orientation: [{ type: Input }],
    filled: [{ type: Input }],
    multiple: [{ type: Input }],
    disabled: [{ type: Input }],
    showTicks: [{ type: Input }],
    tickStep: [{ type: Input }],
    change: [{ type: Output }],
    onMouseDown: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
    onMouseUp: [{ type: HostListener, args: ['mouseup', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SliderComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-slider',
                exportAs: 'ngxSlider',
                template: "<div class=\"slider-inner\">\n  <div class=\"ticks-container\" *ngIf=\"showTicks\">\n    <div class=\"tick\" *ngFor=\"let s of _ticks\" [ngStyle]=\"s\"></div>\n  </div>\n  <div class=\"inputs\">\n    <div class=\"slider-track\"></div>\n    <span *ngIf=\"filled\" [ngStyle]=\"_fill\" class=\"fill-bar\"> </span>\n    <ng-container *ngFor=\"let value of _values; let i = index; let odd = odd; trackBy: trackIndex\">\n      <input\n        type=\"range\"\n        [id]=\"id + '-' + i\"\n        [attr.list]=\"id + '-list'\"\n        [attr.orientation]=\"orientation\"\n        [class.odd]=\"odd\"\n        [class.active]=\"_active[i]\"\n        [ngModel]=\"value\"\n        (ngModelChange)=\"setValue($event, i)\"\n        [min]=\"min\"\n        [max]=\"max\"\n        [step]=\"step\"\n        [disabled]=\"disabled\"\n        (input)=\"onChange($event)\"\n        (change)=\"onChange($event)\"\n        (mouseenter)=\"setActive(i, true)\"\n        (mouseleave)=\"setActive(i, false)\"\n      />\n      <div class=\"slider-thumb\" [class.active]=\"_active[i]\" [ngStyle]=\"_thumbs[i]\"></div>\n    </ng-container>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [SLIDER_VALUE_ACCESSOR],
                host: {
                    class: 'ngx-slider',
                    '[class.filled]': 'filled',
                    '[class.multiple]': 'multiple',
                    '[class.disabled]': 'disabled',
                    '[class.active]': 'active',
                    '[class.vertical]': 'isVertical',
                    '[class.horizontal]': 'isHorizontal'
                },
                styles: [".ngx-slider .slider-inner{margin:1em auto;position:relative;display:inline-block}.ngx-slider .inputs{position:releative;min-width:12.5em;height:1em}.ngx-slider .inputs input[type=range]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:1;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent}.ngx-slider .inputs input[type=range]::-webkit-slider-runnable-track{cursor:pointer;color:transparent;background:transparent;border-color:transparent;-webkit-appearance:none;appearance:none}.ngx-slider .inputs input[type=range]::-moz-range-track{cursor:pointer;color:transparent;background:transparent;border-color:transparent;-moz-appearance:none;appearance:none}.ngx-slider .inputs input[type=range]::-ms-track{color:transparent;background:transparent;border-color:transparent;appearance:none;cursor:pointer}.ngx-slider .inputs input[type=range]::-webkit-slider-thumb{width:1em;height:1em;-webkit-appearance:none;appearance:none;position:relative;background:transparent;border:transparent;cursor:pointer;z-index:100;color:transparent;z-index:301}.ngx-slider .inputs input[type=range]::-moz-range-thumb{width:1em;height:1em;-moz-appearance:none;appearance:none;position:relative;background:transparent;border:transparent;cursor:pointer;z-index:100;transform:scale(1);z-index:302}.ngx-slider .inputs input[type=range]::-ms-thumb{width:1em;height:1em;appearance:none;position:relative;background:transparent;border:transparent;cursor:pointer;z-index:100;transform:scale(1);z-index:302}.ngx-slider .inputs input[type=range]:focus{outline:none}.ngx-slider .inputs .slider-track{position:absolute;background-color:#479eff;width:100%;height:2px;top:calc(.5em - 1px);pointer-events:none;opacity:.3}.ngx-slider .inputs .slider-thumb{position:absolute;background-color:#479eff;height:1em;width:1em;border-radius:.5em;pointer-events:none;z-index:100;box-shadow:0 0 0 0 rgba(71,158,255,.3);transition:box-shadow .3s ease-in-out}.ngx-slider .inputs .slider-thumb.active{box-shadow:0 0 0 5px rgba(71,158,255,.3)}.ngx-slider .ticks-container{position:absolute;display:block;top:0;width:100%;height:3px;opacity:.3}.ngx-slider .ticks-container .tick{position:absolute;border:none;height:100%;width:2px;background-color:#479eff}.ngx-slider.filled .fill-bar{background-repeat:no-repeat;background-image:linear-gradient(#479eff,#479eff);position:absolute;border-radius:0;z-index:99;pointer-events:none;height:4px;left:0;top:calc(50% - 2px);width:100%}.ngx-slider.vertical{display:inline-block;height:auto;min-height:12.5em;width:1em}.ngx-slider.vertical .slider-inner{transform:translateY(-100%) rotate(-90deg) translate(-100%);transform-origin:top left}@supports (-ms-ime-align:auto){.ngx-slider.multiple .inputs input[type=range]{position:relative;display:block;-webkit-appearance:slider-vertical;-moz-appearance:slider-vertical;appearance:slider-vertical}.ngx-slider.multiple .inputs input[type=range]::-webkit-slider-runnable-track{-webkit-animation:none 0s ease 0s 1 normal none running;animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:none;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-fill:balance;grid-column-gap:normal;column-gap:normal;column-rule:medium none currentColor;column-span:1;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;-webkit-hyphens:none;hyphens:none;left:auto;letter-spacing:normal;list-style:disc none outside;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;-webkit-transition:none 0s ease 0s;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;-webkit-appearance:initial;appearance:auto}.ngx-slider.multiple .inputs input[type=range]::-ms-track{animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-fill:balance;grid-column-gap:normal;column-gap:normal;column-rule:medium none currentColor;column-span:1;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc none outside;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;-ms-transition:none 0s ease 0s;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;appearance:auto;color:transparent;background-color:transparentl;border:none;opacity:0;height:2px}.ngx-slider.multiple .inputs input[type=range]::-webkit-slider-thumb{-webkit-animation:none 0s ease 0s 1 normal none running;animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:none;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-fill:balance;grid-column-gap:normal;column-gap:normal;column-rule:medium none currentColor;column-span:1;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;-webkit-hyphens:none;hyphens:none;left:auto;letter-spacing:normal;list-style:disc none outside;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;-webkit-transition:none 0s ease 0s;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;-webkit-appearance:initial;appearance:auto}.ngx-slider.multiple .inputs input[type=range]::-ms-thumb{animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border-collapse:separate;border-image:none;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-fill:balance;grid-column-gap:normal;column-gap:normal;column-rule:medium none currentColor;column-span:1;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;list-style:disc none outside;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;-ms-transition:none 0s ease 0s;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;color:transparent;background-color:transparent;appearance:auto;border-radius:0;height:1px;width:1px;border:.5em solid transparent;border-top-color:#479eff}.ngx-slider.multiple .inputs input[type=range].odd::-ms-thumb{border:.5em solid transparent;border-bottom-color:#479eff}.ngx-slider.multiple .slider-track{height:100%;left:.5em;width:calc(100% - 1em)}.ngx-slider.multiple .slider-thumb{display:none}.ngx-slider.multiple .fill-bar{height:100%;margin-top:1px;opacity:.6}}"]
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { id: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], step: [{
            type: Input
        }], orientation: [{
            type: Input
        }], filled: [{
            type: Input
        }], multiple: [{
            type: Input
        }], disabled: [{
            type: Input
        }], showTicks: [{
            type: Input
        }], change: [{
            type: Output
        }], onMouseDown: [{
            type: HostListener,
            args: ['mousedown', ['$event']]
        }], onMouseUp: [{
            type: HostListener,
            args: ['mouseup', ['$event']]
        }], tickStep: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUVaLFlBQVksRUFDWixVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFFZixNQUFNLHFCQUFxQixHQUFRO0FBQ25DLElBQUUsT0FBTyxFQUFFLGlCQUFpQjtBQUM1QixJQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDO0FBQ2hELElBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixDQUFDLENBQUM7QUFFRixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFvQjdELE1BQU0sT0FBTyxlQUFlO0FBQUcsSUF3RDdCLFlBQW9CLEdBQXNCO0FBQUksUUFBMUIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7QUFBQyxRQXZEbEMsT0FBRSxHQUFHLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQztBQUNwQyxRQUFXLFFBQUcsR0FBRyxDQUFDLENBQUM7QUFDbkIsUUFBVyxRQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3JCLFFBQVcsU0FBSSxHQUFHLENBQUMsQ0FBQztBQUNwQixRQUFXLGdCQUFXLEdBQUcs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UUFBUSxDQUFDO0FBQ2pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25Jbml0LFxuICBIb3N0TGlzdGVuZXIsXG4gIGZvcndhcmRSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmxldCBuZXh0SWQgPSAwO1xuXG5jb25zdCBTTElERVJfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNsaWRlckNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5jb25zdCBlZGdlID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRWRnZScpID4gLTE7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1zbGlkZXInLFxuICBleHBvcnRBczogJ25neFNsaWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbGlkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3R5bGVVcmxzOiBbJy4vc2xpZGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1NMSURFUl9WQUxVRV9BQ0NFU1NPUl0sXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ25neC1zbGlkZXInLFxuICAgICdbY2xhc3MuZmlsbGVkXSc6ICdmaWxsZWQnLFxuICAgICdbY2xhc3MubXVsdGlwbGVdJzogJ211bHRpcGxlJyxcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2FjdGl2ZScsXG4gICAgJ1tjbGFzcy52ZXJ0aWNhbF0nOiAnaXNWZXJ0aWNhbCcsXG4gICAgJ1tjbGFzcy5ob3Jpem9udGFsXSc6ICdpc0hvcml6b250YWwnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGlkID0gYHJhbmdlLSR7KytuZXh0SWR9YDtcbiAgQElucHV0KCkgbWluID0gMDtcbiAgQElucHV0KCkgbWF4ID0gMTAwO1xuICBASW5wdXQoKSBzdGVwID0gMTtcbiAgQElucHV0KCkgb3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gIEBJbnB1dCgpIGZpbGxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBtdWx0aXBsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93VGlja3MgPSBmYWxzZTtcbiAgQElucHV0KCkgdGlja1N0ZXA6IG51bWJlcjtcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBfdmFsdWVzID0gWzBdO1xuICBfcGVyY2VudHMgPSBbMF07XG4gIF90aHVtYnM6IGFueVtdID0gW107XG4gIF9maWxsOiBhbnk7XG4gIF90aWNrcyA9IFtdO1xuICBfYWN0aXZlID0gW107XG4gIGFjdGl2ZTogYm9vbGVhbjtcblxuICBnZXQgdmFsdWUoKSB7XG4gICAgaWYgKCF0aGlzLl92YWx1ZXMpIHJldHVybiAwO1xuICAgIGlmICh0aGlzLm11bHRpcGxlKSByZXR1cm4gWy4uLnRoaXMuX3ZhbHVlc10uc29ydCgoYSwgYikgPT4gYSAtIGIpLmpvaW4oJywnKTtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWVzWzBdO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbDogYW55KSB7XG4gICAgdmFsID0gKCcnICsgdmFsKS5zcGxpdCgnLCcpO1xuICAgIGlmIChTdHJpbmcodmFsKSAhPT0gU3RyaW5nKHRoaXMuX3ZhbHVlcykpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWVzKHZhbCk7XG4gICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5fdmFsdWVzKTtcblxuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7XG4gICAgICAgIHZhbHVlOiB0aGlzLl92YWx1ZXMsXG4gICAgICAgIHBlcmNlbnQ6IHRoaXMucGVyY2VudFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBwZXJjZW50KCk6IHN0cmluZyB7XG4gICAgY29uc3QgcGN0ID0gdGhpcy5fcGVyY2VudHM7XG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHJldHVybiBwY3Quam9pbignLCcpO1xuICAgIHJldHVybiAnJyArIHBjdFswXTtcbiAgfVxuXG4gIGdldCBpc0hvcml6b250YWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJztcbiAgfVxuXG4gIGdldCBpc1ZlcnRpY2FsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3dUaWNrcykge1xuICAgICAgdGhpcy5fdGlja3MgPSB0aGlzLmdldFRpY2tzKCk7XG4gICAgfVxuICAgIHRoaXMuc2V0VmFsdWVzKFswXSk7XG4gIH1cblxuICBzZXRWYWx1ZXModmFsdWVzOiBudW1iZXJbXSkge1xuICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlcztcbiAgICB0aGlzLl9wZXJjZW50cyA9IHZhbHVlc1xuICAgICAgLm1hcCh2ID0+IE1hdGgubWF4KHRoaXMubWluLCBNYXRoLm1pbih0aGlzLm1heCwgdikpKVxuICAgICAgLm1hcCh2ID0+IE1hdGgucm91bmQoKDEwMCAqICh2IC0gdGhpcy5taW4pKSAvICh0aGlzLm1heCAtIHRoaXMubWluKSkpO1xuXG4gICAgdGhpcy5fdGh1bWJzID0gdGhpcy5fcGVyY2VudHMubWFwKHAgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogYGNhbGMoJHtwfSUgLSAke3AgLyAxMDB9ZW0pYFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmZpbGxlZCkge1xuICAgICAgdGhpcy5fZmlsbCA9IHRoaXMuZ2V0RmlsbCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3dUaWNrcykge1xuICAgICAgdGhpcy5fdGlja3MgPSB0aGlzLmdldFRpY2tzKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0QWN0aXZlKGluZGV4OiBudW1iZXIsIGFjdGl2ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FjdGl2ZVtpbmRleF0gPSBhY3RpdmU7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWw6IG51bWJlciwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl92YWx1ZXNbaW5kZXhdICE9PSB2YWwpIHtcbiAgICAgIHRoaXMuX3ZhbHVlc1tpbmRleF0gPSB2YWw7XG4gICAgICB0aGlzLnNldFZhbHVlcyh0aGlzLl92YWx1ZXMpO1xuICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMudmFsdWUpO1xuXG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHtcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgIHBlcmNlbnQ6IHRoaXMucGVyY2VudFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q291bnQoKTogYW55IHtcbiAgICBjb25zdCBpZHhzID0gW107XG4gICAgY29uc3Qgc3RlcCA9IHRoaXMudGlja1N0ZXAgfHwgdGhpcy5zdGVwO1xuXG4gICAgbGV0IGkgPSB0aGlzLm1pbjtcbiAgICB3aGlsZSAoaSA8PSB0aGlzLm1heCkge1xuICAgICAgaWR4cy5wdXNoKGkpO1xuICAgICAgaSArPSBzdGVwO1xuICAgIH1cblxuICAgIHJldHVybiBpZHhzO1xuICB9XG5cbiAgZ2V0VGlja3MoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpLm1hcChwID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IGBjYWxjKCR7cH0lIC0gJHtwIC8gMTAwIC0gMC41fWVtKWBcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBnZXRGaWxsKCk6IGFueSB7XG4gICAgaWYgKHRoaXMuZmlsbGVkKSB7XG4gICAgICBjb25zdCBwZXJjZW50TWluID0gdGhpcy5tdWx0aXBsZSA/IE1hdGgubWluKC4uLnRoaXMuX3BlcmNlbnRzKSA6IDA7XG4gICAgICBjb25zdCBwZXJjZW50TWF4ID0gdGhpcy5tdWx0aXBsZSA/IE1hdGgubWF4KC4uLnRoaXMuX3BlcmNlbnRzKSA6IHRoaXMuX3BlcmNlbnRzWzBdO1xuICAgICAgY29uc3Qgd2lkdGggPSBwZXJjZW50TWF4IC0gcGVyY2VudE1pbjtcblxuICAgICAgaWYgKGVkZ2UgJiYgdGhpcy5tdWx0aXBsZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxlZnQ6IGBjYWxjKCR7cGVyY2VudE1pbn0lIC0gJHtwZXJjZW50TWluIC8gMTAwIC0gMC41fWVtKWAsXG4gICAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6IGBjYWxjKCR7d2lkdGh9JSAtICR7d2lkdGggLyAxMDB9ZW0pIDEwMCVgXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiBgJHtwZXJjZW50TWlufSVgLFxuICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogYCR7d2lkdGh9JSAxMDAlYFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxuICBvbk1vdXNlRG93bihldmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNldXAnLCBbJyRldmVudCddKVxuICBvbk1vdXNlVXAoZXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgb25DaGFuZ2UoZXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBwZXJjZW50OiB0aGlzLnBlcmNlbnRcbiAgICB9KTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsKTogdm9pZCB7XG4gICAgdmFsID0gdmFsID8gU3RyaW5nKHZhbCkuc3BsaXQoJywnKSA6IFsnMCddO1xuICAgIGlmIChTdHJpbmcodmFsKSAhPT0gU3RyaW5nKHRoaXMuX3ZhbHVlcykpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWVzKHZhbC5tYXAodiA9PiArdikpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgdHJhY2tJbmRleChpbmRleCkge1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7XG4gICAgLy8gcGxhY2Vob2xkZXJcbiAgfTtcblxuICBvblRvdWNoZWRDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9ICgpID0+IHtcbiAgICAvLyBwbGFjZWhvbGRlclxuICB9O1xufVxuIl19