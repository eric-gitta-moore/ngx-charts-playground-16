import { style, animate, transition } from '@angular/animations';
export function slideLeftAnimation(ms = 500) {
    return [
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            animate(ms, style({
                transform: 'translateX(0)',
                opacity: 1
            }))
        ]),
        transition(':leave', [
            animate(ms, style({
                transform: 'translateX(-100%)',
                opacity: 0
            }))
        ])
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtbGVmdC5hbmltYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9hbmltYXRpb25zL3NsaWRlLWxlZnQuYW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpFLE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsR0FBRztJQUN6QyxPQUFPO1FBQ0wsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUNuQixLQUFLLENBQUM7Z0JBQ0osT0FBTyxFQUFFLENBQUM7Z0JBQ1YsU0FBUyxFQUFFLG1CQUFtQjthQUMvQixDQUFDO1lBQ0YsT0FBTyxDQUNMLEVBQUUsRUFDRixLQUFLLENBQUM7Z0JBQ0osU0FBUyxFQUFFLGVBQWU7Z0JBQzFCLE9BQU8sRUFBRSxDQUFDO2FBQ1gsQ0FBQyxDQUNIO1NBQ0YsQ0FBQztRQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDbkIsT0FBTyxDQUNMLEVBQUUsRUFDRixLQUFLLENBQUM7Z0JBQ0osU0FBUyxFQUFFLG1CQUFtQjtnQkFDOUIsT0FBTyxFQUFFLENBQUM7YUFDWCxDQUFDLENBQ0g7U0FDRixDQUFDO0tBQ0gsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2xpZGVMZWZ0QW5pbWF0aW9uKG1zID0gNTAwKSB7XG4gIHJldHVybiBbXG4gICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKSdcbiAgICAgIH0pLFxuICAgICAgYW5pbWF0ZShcbiAgICAgICAgbXMsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyxcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgICAgYW5pbWF0ZShcbiAgICAgICAgbXMsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0xMDAlKScsXG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KVxuICAgICAgKVxuICAgIF0pXG4gIF07XG59XG4iXX0=