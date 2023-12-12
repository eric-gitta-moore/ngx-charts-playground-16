import { animate, style, transition } from '@angular/animations';
export function slideDownFadeOutAnimation(ms = 250) {
    return [
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateY(-10px)'
            }),
            animate(ms, style({
                opacity: 1,
                transform: 'translateY(0px)'
            }))
        ]),
        transition(':leave', [
            animate(ms, style({
                opacity: 0
            }))
        ])
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtZG93bi1mYWRlLW91dC5hbmltYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9hbmltYXRpb25zL3NsaWRlLWRvd24tZmFkZS1vdXQuYW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpFLE1BQU0sVUFBVSx5QkFBeUIsQ0FBQyxFQUFFLEdBQUcsR0FBRztJQUNoRCxPQUFPO1FBQ0wsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUNuQixLQUFLLENBQUM7Z0JBQ0osT0FBTyxFQUFFLENBQUM7Z0JBQ1YsU0FBUyxFQUFFLG1CQUFtQjthQUMvQixDQUFDO1lBQ0YsT0FBTyxDQUNMLEVBQUUsRUFDRixLQUFLLENBQUM7Z0JBQ0osT0FBTyxFQUFFLENBQUM7Z0JBQ1YsU0FBUyxFQUFFLGlCQUFpQjthQUM3QixDQUFDLENBQ0g7U0FDRixDQUFDO1FBQ0YsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUNuQixPQUFPLENBQ0wsRUFBRSxFQUNGLEtBQUssQ0FBQztnQkFDSixPQUFPLEVBQUUsQ0FBQzthQUNYLENBQUMsQ0FDSDtTQUNGLENBQUM7S0FDSCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzbGlkZURvd25GYWRlT3V0QW5pbWF0aW9uKG1zID0gMjUwKSB7XG4gIHJldHVybiBbXG4gICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMHB4KSdcbiAgICAgIH0pLFxuICAgICAgYW5pbWF0ZShcbiAgICAgICAgbXMsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMHB4KSdcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICBdKSxcbiAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXG4gICAgICBhbmltYXRlKFxuICAgICAgICBtcyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICBdKVxuICBdO1xufVxuIl19