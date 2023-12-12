import { style, animate, transition } from '@angular/animations';
export function slideTopAnimation(ms = 500) {
    return [
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateY(-100%)'
            }),
            animate(ms, style({
                transform: 'translateY(0)',
                opacity: 1
            }))
        ]),
        transition(':leave', [
            animate(ms, style({
                transform: 'translateY(-100%)',
                opacity: 0
            }))
        ])
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9wLmFuaW1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2FuaW1hdGlvbnMvc2xpZGUtdG9wLmFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVqRSxNQUFNLFVBQVUsaUJBQWlCLENBQUMsRUFBRSxHQUFHLEdBQUc7SUFDeEMsT0FBTztRQUNMLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDbkIsS0FBSyxDQUFDO2dCQUNKLE9BQU8sRUFBRSxDQUFDO2dCQUNWLFNBQVMsRUFBRSxtQkFBbUI7YUFDL0IsQ0FBQztZQUNGLE9BQU8sQ0FDTCxFQUFFLEVBQ0YsS0FBSyxDQUFDO2dCQUNKLFNBQVMsRUFBRSxlQUFlO2dCQUMxQixPQUFPLEVBQUUsQ0FBQzthQUNYLENBQUMsQ0FDSDtTQUNGLENBQUM7UUFDRixVQUFVLENBQUMsUUFBUSxFQUFFO1lBQ25CLE9BQU8sQ0FDTCxFQUFFLEVBQ0YsS0FBSyxDQUFDO2dCQUNKLFNBQVMsRUFBRSxtQkFBbUI7Z0JBQzlCLE9BQU8sRUFBRSxDQUFDO2FBQ1gsQ0FBQyxDQUNIO1NBQ0YsQ0FBQztLQUNILENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGUsIGFuaW1hdGUsIHRyYW5zaXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNsaWRlVG9wQW5pbWF0aW9uKG1zID0gNTAwKSB7XG4gIHJldHVybiBbXG4gICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMDAlKSdcbiAgICAgIH0pLFxuICAgICAgYW5pbWF0ZShcbiAgICAgICAgbXMsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyxcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgXSksXG4gICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgICAgYW5pbWF0ZShcbiAgICAgICAgbXMsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMDAlKScsXG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KVxuICAgICAgKVxuICAgIF0pXG4gIF07XG59XG4iXX0=