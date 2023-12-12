/**
 * Throttle a function
 *
 * @param func    function to execute
 * @param wait    duration to wait
 * @param options options
 * @returns anything
 */
export function throttle(func, wait, options) {
    options = options || {};
    let context;
    let args;
    let result;
    let timeout = null;
    let previous = 0;
    const later = () => {
        previous = options.leading === false ? 0 : +new Date();
        timeout = null;
        result = func.apply(context, args);
    };
    return function () {
        const now = +new Date();
        if (!previous && options.leading === false) {
            previous = now;
        }
        const remaining = wait - (now - previous);
        // eslint-disable-next-line consistent-this
        context = this;
        // eslint-disable-next-line prefer-rest-params
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyb3R0bGUudXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL3V0aWxzL3Rocm90dGxlL3Rocm90dGxlLnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7Ozs7Ozs7R0FPRztBQUNILE1BQU0sVUFBVSxRQUFRLENBQUMsSUFBZ0IsRUFBRSxJQUFZLEVBQUUsT0FBeUI7SUFDaEYsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFFeEIsSUFBSSxPQUFZLENBQUM7SUFDakIsSUFBSSxJQUFnQixDQUFDO0lBQ3JCLElBQUksTUFBVyxDQUFDO0lBQ2hCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztJQUNuQixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFFakIsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFO1FBQ2pCLFFBQVEsR0FBRyxPQUFPLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdkQsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNmLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUM7SUFFRixPQUFPO1FBQ0wsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7WUFDMUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztTQUNoQjtRQUVELE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUMxQywyQ0FBMkM7UUFDM0MsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNmLDhDQUE4QztRQUM5QyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBRWpCLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRTtZQUNsQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEIsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNmLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDZixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDcEM7YUFBTSxJQUFJLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUFFO1lBQ2pELE9BQU8sR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRocm90dGxlT3B0aW9ucyB9IGZyb20gJy4vdGhyb3R0bGUtb3B0aW9ucy5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRocm90dGxlIGEgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0gZnVuYyAgICBmdW5jdGlvbiB0byBleGVjdXRlXG4gKiBAcGFyYW0gd2FpdCAgICBkdXJhdGlvbiB0byB3YWl0XG4gKiBAcGFyYW0gb3B0aW9ucyBvcHRpb25zXG4gKiBAcmV0dXJucyBhbnl0aGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGUoZnVuYzogKCkgPT4gdm9pZCwgd2FpdDogbnVtYmVyLCBvcHRpb25zPzogVGhyb3R0bGVPcHRpb25zKTogYW55IHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgbGV0IGNvbnRleHQ6IGFueTtcbiAgbGV0IGFyZ3M6IElBcmd1bWVudHM7XG4gIGxldCByZXN1bHQ6IGFueTtcbiAgbGV0IHRpbWVvdXQgPSBudWxsO1xuICBsZXQgcHJldmlvdXMgPSAwO1xuXG4gIGNvbnN0IGxhdGVyID0gKCkgPT4ge1xuICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiArbmV3IERhdGUoKTtcbiAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgbm93ID0gK25ldyBEYXRlKCk7XG5cbiAgICBpZiAoIXByZXZpb3VzICYmIG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UpIHtcbiAgICAgIHByZXZpb3VzID0gbm93O1xuICAgIH1cblxuICAgIGNvbnN0IHJlbWFpbmluZyA9IHdhaXQgLSAobm93IC0gcHJldmlvdXMpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXRoaXNcbiAgICBjb250ZXh0ID0gdGhpcztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIGlmIChyZW1haW5pbmcgPD0gMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBwcmV2aW91cyA9IG5vdztcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cbiJdfQ==