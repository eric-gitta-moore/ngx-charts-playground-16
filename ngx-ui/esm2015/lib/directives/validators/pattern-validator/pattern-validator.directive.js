import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { patternValidator } from './pattern.validator';
import * as ɵngcc0 from '@angular/core';
export class PatternValidatorDirective {
    validate(control) {
        return this.pattern ? patternValidator(this.pattern)(control) : null;
    }
}
PatternValidatorDirective.ɵfac = function PatternValidatorDirective_Factory(t) { return new (t || PatternValidatorDirective)(); };
PatternValidatorDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: PatternValidatorDirective, selectors: [["", "pattern", ""]], inputs: { pattern: "pattern" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALIDATORS,
                useExisting: PatternValidatorDirective,
                multi: true
            }
        ])] });
PatternValidatorDirective.propDecorators = {
    pattern: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PatternValidatorDirective, [{
        type: Directive,
        args: [{
                selector: '[pattern]',
                providers: [
                    {
                        provide: NG_VALIDATORS,
                        useExisting: PatternValidatorDirective,
                        multi: true
                    }
                ]
            }]
    }], null, { pattern: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0dGVybi12YWxpZGF0b3IuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9kaXJlY3RpdmVzL3ZhbGlkYXRvcnMvcGF0dGVybi12YWxpZGF0b3IvcGF0dGVybi12YWxpZGF0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBbUIsYUFBYSxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBWXZELE1BQU0sT0FBTyx5QkFBeUI7QUFBRyxJQUd2QyxRQUFRLENBQUMsT0FBd0I7QUFBSSxRQUNuQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ3pFLElBQUUsQ0FBQztBQUNIO3FEQWhCQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLFdBQVcsa0JBQ3JCO01BQVMsRUFBRSxzQkFDVCwwQkFDRSxPQUFPLEVBQUUsYUFBYSwwQkFDdEIsV0FBVyxFQUFFLHlCQUF5QiwwQkFDdEMsS0FBSyxFQUFFLElBQUksc0JBQ1o7T0FDRjtPQUNGOzs7O2VBQ0k7QUFBQztBQUE2QyxzQkFDaEQsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBwYXR0ZXJuVmFsaWRhdG9yIH0gZnJvbSAnLi9wYXR0ZXJuLnZhbGlkYXRvcic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twYXR0ZXJuXScsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VFeGlzdGluZzogUGF0dGVyblZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBhdHRlcm5WYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICBASW5wdXQoKSBwYXR0ZXJuOiBzdHJpbmc7XG5cbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHRoaXMucGF0dGVybiA/IHBhdHRlcm5WYWxpZGF0b3IodGhpcy5wYXR0ZXJuKShjb250cm9sKSA6IG51bGw7XG4gIH1cbn1cbiJdfQ==