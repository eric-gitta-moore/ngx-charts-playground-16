import { style, animate, transition } from '@angular/animations';
export function slideRightAnimation(ms = 500) {
    return [
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateX(100%)'
            }),
            animate(ms, style({
                transform: 'translateX(0)',
                opacity: 1
            }))
        ]),
        transition(':leave', [
            animate(ms, style({
                transform: 'translateX(100%)',
                opacity: 0
            }))
        ])
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtcmlnaHQuYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvYW5pbWF0aW9ucy9zbGlkZS1yaWdodC5hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFakUsTUFBTSxVQUFVLG1CQUFtQixDQUFDLEVBQUUsR0FBRyxHQUFHO0lBQzFDLE9BQU87UUFDTCxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQ25CLEtBQUssQ0FBQztnQkFDSixPQUFPLEVBQUUsQ0FBQztnQkFDVixTQUFTLEVBQUUsa0JBQWtCO2FBQzlCLENBQUM7WUFDRixPQUFPLENBQ0wsRUFBRSxFQUNGLEtBQUssQ0FBQztnQkFDSixTQUFTLEVBQUUsZUFBZTtnQkFDMUIsT0FBTyxFQUFFLENBQUM7YUFDWCxDQUFDLENBQ0g7U0FDRixDQUFDO1FBQ0YsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUNuQixPQUFPLENBQ0wsRUFBRSxFQUNGLEtBQUssQ0FBQztnQkFDSixTQUFTLEVBQUUsa0JBQWtCO2dCQUM3QixPQUFPLEVBQUUsQ0FBQzthQUNYLENBQUMsQ0FDSDtTQUNGLENBQUM7S0FDSCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzbGlkZVJpZ2h0QW5pbWF0aW9uKG1zID0gNTAwKSB7XG4gIHJldHVybiBbXG4gICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJ1xuICAgICAgfSksXG4gICAgICBhbmltYXRlKFxuICAgICAgICBtcyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG4gICAgICBhbmltYXRlKFxuICAgICAgICBtcyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknLFxuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICBdKVxuICBdO1xufVxuIl19