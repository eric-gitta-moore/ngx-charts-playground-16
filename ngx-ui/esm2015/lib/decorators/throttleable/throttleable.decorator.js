import { throttle } from '../../utils/throttle/throttle.util';
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 */
export function throttleable(duration, options) {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    return (_, key, descriptor) => {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: function getter() {
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: descriptor.enumerable,
                    value: throttle(descriptor.value, duration, options)
                });
                // eslint-disable-next-line security/detect-object-injection
                return this[key];
            }
        };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyb3R0bGVhYmxlLmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2RlY29yYXRvcnMvdGhyb3R0bGVhYmxlL3Rocm90dGxlYWJsZS5kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRzlEOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFVBQVUsWUFBWSxDQUFDLFFBQWdCLEVBQUUsT0FBeUI7SUFDdEUsNkVBQTZFO0lBQzdFLE9BQU8sQ0FBQyxDQUFNLEVBQUUsR0FBVyxFQUFFLFVBQWUsRUFBTyxFQUFFO1FBQ25ELE9BQU87WUFDTCxZQUFZLEVBQUUsSUFBSTtZQUNsQixVQUFVLEVBQUUsVUFBVSxDQUFDLFVBQVU7WUFDakMsR0FBRyxFQUFFLFNBQVMsTUFBTTtnQkFDbEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO29CQUMvQixZQUFZLEVBQUUsSUFBSTtvQkFDbEIsVUFBVSxFQUFFLFVBQVUsQ0FBQyxVQUFVO29CQUNqQyxLQUFLLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQztpQkFDckQsQ0FBQyxDQUFDO2dCQUVILDREQUE0RDtnQkFDNUQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsQ0FBQztTQUNGLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGhyb3R0bGUgfSBmcm9tICcuLi8uLi91dGlscy90aHJvdHRsZS90aHJvdHRsZS51dGlsJztcbmltcG9ydCB7IFRocm90dGxlT3B0aW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL3Rocm90dGxlL3Rocm90dGxlLW9wdGlvbnMuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBUaHJvdHRsZSBkZWNvcmF0b3JcbiAqXG4gKiAgY2xhc3MgTXlDbGFzcyB7XG4gKiAgICB0aHJvdHRsZWFibGUoMTApXG4gKiAgICBteUZuKCkgeyAuLi4gfVxuICogIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlYWJsZShkdXJhdGlvbjogbnVtYmVyLCBvcHRpb25zPzogVGhyb3R0bGVPcHRpb25zKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXG4gIHJldHVybiAoXzogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogYW55KTogYW55ID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZGVzY3JpcHRvci5lbnVtZXJhYmxlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXR0ZXIoKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgZW51bWVyYWJsZTogZGVzY3JpcHRvci5lbnVtZXJhYmxlLFxuICAgICAgICAgIHZhbHVlOiB0aHJvdHRsZShkZXNjcmlwdG9yLnZhbHVlLCBkdXJhdGlvbiwgb3B0aW9ucylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHNlY3VyaXR5L2RldGVjdC1vYmplY3QtaW5qZWN0aW9uXG4gICAgICAgIHJldHVybiB0aGlzW2tleV07XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn1cbiJdfQ==