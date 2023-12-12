import { ThrottleOptions } from '../../utils/throttle/throttle-options.interface';
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 */
export declare function throttleable(duration: number, options?: ThrottleOptions): (_: any, key: string, descriptor: any) => any;
