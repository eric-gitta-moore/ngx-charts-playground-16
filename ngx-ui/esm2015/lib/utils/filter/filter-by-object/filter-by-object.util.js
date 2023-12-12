/* eslint-disable guard-for-in */
/* eslint-disable security/detect-object-injection */
import { filterByString } from '../filter-by-string/filter-by-string.util';
import { filterDefault } from '../filter-default/filter-default.util';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const filterByObject = (filter) => {
    return (value) => {
        for (const key in filter) {
            // eslint-disable-next-line no-prototype-builtins
            if (!value.hasOwnProperty(key)) {
                return false;
            }
            let isMatching;
            if (typeof value[key] === 'string') {
                isMatching = filterByString(filter[key])(value[key]);
            }
            else if (typeof value[key] === 'object') {
                isMatching = filterByObject(filter[key])(value[key]);
            }
            else {
                isMatching = filterDefault(filter[key])(value[key]);
            }
            if (!isMatching) {
                return false;
            }
        }
        return true;
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWJ5LW9iamVjdC51dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvdXRpbHMvZmlsdGVyL2ZpbHRlci1ieS1vYmplY3QvZmlsdGVyLWJ5LW9iamVjdC51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFpQztBQUNqQyxxREFBcUQ7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV0RSw2RUFBNkU7QUFDN0UsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLENBQUMsTUFBVyxFQUFFLEVBQUU7SUFDNUMsT0FBTyxDQUFDLEtBQWMsRUFBVyxFQUFFO1FBQ2pDLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO1lBQ3hCLGlEQUFpRDtZQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDOUIsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUVELElBQUksVUFBbUIsQ0FBQztZQUV4QixJQUFJLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDbEMsVUFBVSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN0RDtpQkFBTSxJQUFJLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDekMsVUFBVSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN0RDtpQkFBTTtnQkFDTCxVQUFVLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3JEO1lBRUQsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDZixPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGd1YXJkLWZvci1pbiAqL1xuLyogZXNsaW50LWRpc2FibGUgc2VjdXJpdHkvZGV0ZWN0LW9iamVjdC1pbmplY3Rpb24gKi9cbmltcG9ydCB7IGZpbHRlckJ5U3RyaW5nIH0gZnJvbSAnLi4vZmlsdGVyLWJ5LXN0cmluZy9maWx0ZXItYnktc3RyaW5nLnV0aWwnO1xuaW1wb3J0IHsgZmlsdGVyRGVmYXVsdCB9IGZyb20gJy4uL2ZpbHRlci1kZWZhdWx0L2ZpbHRlci1kZWZhdWx0LnV0aWwnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xuZXhwb3J0IGNvbnN0IGZpbHRlckJ5T2JqZWN0ID0gKGZpbHRlcjogYW55KSA9PiB7XG4gIHJldHVybiAodmFsdWU6IHVua25vd24pOiBib29sZWFuID0+IHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmaWx0ZXIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgIGlmICghdmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGxldCBpc01hdGNoaW5nOiBib29sZWFuO1xuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlzTWF0Y2hpbmcgPSBmaWx0ZXJCeVN0cmluZyhmaWx0ZXJba2V5XSkodmFsdWVba2V5XSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZVtrZXldID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpc01hdGNoaW5nID0gZmlsdGVyQnlPYmplY3QoZmlsdGVyW2tleV0pKHZhbHVlW2tleV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNNYXRjaGluZyA9IGZpbHRlckRlZmF1bHQoZmlsdGVyW2tleV0pKHZhbHVlW2tleV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTWF0Y2hpbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufTtcbiJdfQ==