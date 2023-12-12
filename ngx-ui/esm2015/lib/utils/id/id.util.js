/* eslint-disable security/detect-object-injection */
const cache = {};
/**
 * Generates a short id.
 *
 * Description:
 * 	A 5-character alphanumeric sequence (364 = 1.6 million)
 * 	This should only be used for JavaScript specific models.
 * 	http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
 *
 * 	Example: `aebgf`
 */
export const id = () => {
    // eslint-disable-next-line no-bitwise
    let newId = ('0000' + ((Math.random() * Math.pow(36, 4)) << 0).toString(36)).slice(-4);
    // append a 'a' because neo gets mad
    newId = `a${newId}`;
    // ensure not already used
    /* istanbul ignore else */
    if (!cache[newId]) {
        cache[newId] = true;
        return newId;
    }
    /* istanbul ignore next */
    return id();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWQudXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL3V0aWxzL2lkL2lkLnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscURBQXFEO0FBQ3JELE1BQU0sS0FBSyxHQUEwQyxFQUFFLENBQUM7QUFFeEQ7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQVcsRUFBRTtJQUM3QixzQ0FBc0M7SUFDdEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXZGLG9DQUFvQztJQUNwQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUVwQiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDakIsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNwQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsMEJBQTBCO0lBQzFCLE9BQU8sRUFBRSxFQUFFLENBQUM7QUFDZCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBzZWN1cml0eS9kZXRlY3Qtb2JqZWN0LWluamVjdGlvbiAqL1xuY29uc3QgY2FjaGU6IHsgW2lkOiBzdHJpbmddOiBib29sZWFuIHwgdW5kZWZpbmVkIH0gPSB7fTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBzaG9ydCBpZC5cbiAqXG4gKiBEZXNjcmlwdGlvbjpcbiAqIFx0QSA1LWNoYXJhY3RlciBhbHBoYW51bWVyaWMgc2VxdWVuY2UgKDM2NCA9IDEuNiBtaWxsaW9uKVxuICogXHRUaGlzIHNob3VsZCBvbmx5IGJlIHVzZWQgZm9yIEphdmFTY3JpcHQgc3BlY2lmaWMgbW9kZWxzLlxuICogXHRodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYyNDg2NjYvaG93LXRvLWdlbmVyYXRlLXNob3J0LXVpZC1saWtlLWF4NGo5ei1pbi1qc1xuICpcbiAqIFx0RXhhbXBsZTogYGFlYmdmYFxuICovXG5leHBvcnQgY29uc3QgaWQgPSAoKTogc3RyaW5nID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgbGV0IG5ld0lkID0gKCcwMDAwJyArICgoTWF0aC5yYW5kb20oKSAqIE1hdGgucG93KDM2LCA0KSkgPDwgMCkudG9TdHJpbmcoMzYpKS5zbGljZSgtNCk7XG5cbiAgLy8gYXBwZW5kIGEgJ2EnIGJlY2F1c2UgbmVvIGdldHMgbWFkXG4gIG5ld0lkID0gYGEke25ld0lkfWA7XG5cbiAgLy8gZW5zdXJlIG5vdCBhbHJlYWR5IHVzZWRcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKCFjYWNoZVtuZXdJZF0pIHtcbiAgICBjYWNoZVtuZXdJZF0gPSB0cnVlO1xuICAgIHJldHVybiBuZXdJZDtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiBpZCgpO1xufTtcbiJdfQ==