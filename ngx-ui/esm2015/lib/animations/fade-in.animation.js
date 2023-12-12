import { animate, style, transition } from '@angular/animations';
export function fadeInAnimation(ms = 250) {
    return [
        transition(':enter', [
            style({
                opacity: 0
            }),
            animate(ms, style({
                opacity: 1
            }))
        ])
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFkZS1pbi5hbmltYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9hbmltYXRpb25zL2ZhZGUtaW4uYW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpFLE1BQU0sVUFBVSxlQUFlLENBQUMsRUFBRSxHQUFHLEdBQUc7SUFDdEMsT0FBTztRQUNMLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDbkIsS0FBSyxDQUFDO2dCQUNKLE9BQU8sRUFBRSxDQUFDO2FBQ1gsQ0FBQztZQUNGLE9BQU8sQ0FDTCxFQUFFLEVBQ0YsS0FBSyxDQUFDO2dCQUNKLE9BQU8sRUFBRSxDQUFDO2FBQ1gsQ0FBQyxDQUNIO1NBQ0YsQ0FBQztLQUNILENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZhZGVJbkFuaW1hdGlvbihtcyA9IDI1MCkge1xuICByZXR1cm4gW1xuICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSksXG4gICAgICBhbmltYXRlKFxuICAgICAgICBtcyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICBdKVxuICBdO1xufVxuIl19