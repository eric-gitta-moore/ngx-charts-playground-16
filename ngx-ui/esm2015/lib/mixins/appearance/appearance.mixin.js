import { Input, Directive } from '@angular/core';
import { Appearance } from './appearance.enum';
// eslint-disable-next-line @typescript-eslint/naming-convention
export function appearanceMixin(Base) {
    class AppearanceBase extends Base {
        constructor() {
            super(...arguments);
            this.appearance = Appearance.Legacy;
        }
    }
    AppearanceBase.decorators = [
        { type: Directive }
    ];
    AppearanceBase.propDecorators = {
        appearance: [{ type: Input }]
    };
    return AppearanceBase;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwZWFyYW5jZS5taXhpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL21peGlucy9hcHBlYXJhbmNlL2FwcGVhcmFuY2UubWl4aW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLGdFQUFnRTtBQUNoRSxNQUFNLFVBQVUsZUFBZSxDQUE2QixJQUFPO0lBQ2pFLE1BRU0sY0FBZSxTQUFRLElBQUk7UUFGakM7O1lBR1csZUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDMUMsQ0FBQzs7O2dCQUpBLFNBQVM7Ozs2QkFHUCxLQUFLOztJQUdSLE9BQU8sY0FBYyxDQUFDO0FBQ3hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSAnLi4vY29uc3RydWN0b3IudHlwZSc7XG5pbXBvcnQgeyBBcHBlYXJhbmNlIH0gZnJvbSAnLi9hcHBlYXJhbmNlLmVudW0nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG5leHBvcnQgZnVuY3Rpb24gYXBwZWFyYW5jZU1peGluPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcjxhbnk+PihCYXNlOiBUKTogYW55IHtcbiAgQERpcmVjdGl2ZSgpXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxuICBjbGFzcyBBcHBlYXJhbmNlQmFzZSBleHRlbmRzIEJhc2Uge1xuICAgIEBJbnB1dCgpIGFwcGVhcmFuY2UgPSBBcHBlYXJhbmNlLkxlZ2FjeTtcbiAgfVxuXG4gIHJldHVybiBBcHBlYXJhbmNlQmFzZTtcbn1cbiJdfQ==