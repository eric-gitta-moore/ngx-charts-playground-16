/**
 * Debounce a function
 *
 * @param func      function to executoe
 * @param wait      wait duration
 * @param immediate wait or immediate executue
 */
export declare const debounce: (func: () => void, wait: number, immediate?: boolean) => (() => any);
