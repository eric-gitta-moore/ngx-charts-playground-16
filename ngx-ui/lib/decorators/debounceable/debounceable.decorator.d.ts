/**
 * Debounce decorator
 *
 *  class MyClass {
 *    debounceable(10)
 *    myFn() { ... }
 *  }
 */
export declare function debounceable(duration: number, immediate?: boolean): (_: any, key: string, descriptor: any) => any;
