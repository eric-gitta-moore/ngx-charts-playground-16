import { ThrottleOptions } from './throttle-options.interface';
/**
 * Throttle a function
 *
 * @param func    function to execute
 * @param wait    duration to wait
 * @param options options
 * @returns anything
 */
export declare function throttle(func: () => void, wait: number, options?: ThrottleOptions): any;
