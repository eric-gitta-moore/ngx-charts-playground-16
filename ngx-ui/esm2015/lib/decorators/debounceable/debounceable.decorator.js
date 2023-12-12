import { debounce } from '../../utils/debounce/debounce.util';
/**
 * Debounce decorator
 *
 *  class MyClass {
 *    debounceable(10)
 *    myFn() { ... }
 *  }
 */
export function debounceable(duration, immediate) {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    return (_, key, descriptor) => {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: function getter() {
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: descriptor.enumerable,
                    value: debounce(descriptor.value, duration, immediate)
                });
                // eslint-disable-next-line security/detect-object-injection
                return this[key];
            }
        };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVib3VuY2VhYmxlLmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2RlY29yYXRvcnMvZGVib3VuY2VhYmxlL2RlYm91bmNlYWJsZS5kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTlEOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFVBQVUsWUFBWSxDQUFDLFFBQWdCLEVBQUUsU0FBbUI7SUFDaEUsNkVBQTZFO0lBQzdFLE9BQU8sQ0FBQyxDQUFNLEVBQUUsR0FBVyxFQUFFLFVBQWUsRUFBTyxFQUFFO1FBQ25ELE9BQU87WUFDTCxZQUFZLEVBQUUsSUFBSTtZQUNsQixVQUFVLEVBQUUsVUFBVSxDQUFDLFVBQVU7WUFDakMsR0FBRyxFQUFFLFNBQVMsTUFBTTtnQkFDbEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO29CQUMvQixZQUFZLEVBQUUsSUFBSTtvQkFDbEIsVUFBVSxFQUFFLFVBQVUsQ0FBQyxVQUFVO29CQUNqQyxLQUFLLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQztpQkFDdkQsQ0FBQyxDQUFDO2dCQUVILDREQUE0RDtnQkFDNUQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsQ0FBQztTQUNGLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICcuLi8uLi91dGlscy9kZWJvdW5jZS9kZWJvdW5jZS51dGlsJztcblxuLyoqXG4gKiBEZWJvdW5jZSBkZWNvcmF0b3JcbiAqXG4gKiAgY2xhc3MgTXlDbGFzcyB7XG4gKiAgICBkZWJvdW5jZWFibGUoMTApXG4gKiAgICBteUZuKCkgeyAuLi4gfVxuICogIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlYWJsZShkdXJhdGlvbjogbnVtYmVyLCBpbW1lZGlhdGU/OiBib29sZWFuKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXG4gIHJldHVybiAoXzogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogYW55KTogYW55ID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZGVzY3JpcHRvci5lbnVtZXJhYmxlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXR0ZXIoKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgZW51bWVyYWJsZTogZGVzY3JpcHRvci5lbnVtZXJhYmxlLFxuICAgICAgICAgIHZhbHVlOiBkZWJvdW5jZShkZXNjcmlwdG9yLnZhbHVlLCBkdXJhdGlvbiwgaW1tZWRpYXRlKVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2VjdXJpdHkvZGV0ZWN0LW9iamVjdC1pbmplY3Rpb25cbiAgICAgICAgcmV0dXJuIHRoaXNba2V5XTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufVxuIl19