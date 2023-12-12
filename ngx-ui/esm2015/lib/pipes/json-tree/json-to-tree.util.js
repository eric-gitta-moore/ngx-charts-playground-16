/* eslint-disable security/detect-object-injection */
import { getType } from '../../utils/get-type/get-type.util';
export const jsonToTree = (value, label) => {
    const type = getType(value);
    let children;
    let expandable = false;
    if (typeof label === 'undefined') {
        label = label || type;
    }
    switch (type) {
        case 'object':
            children = Object.keys(value).map(key => jsonToTree(value[key], key));
            expandable = children.length > 0;
            return {
                label,
                expandable,
                expanded: true,
                model: { type, value },
                children
            };
        case 'array':
            children = value.map(jsonToTree);
            expandable = children.length > 0;
            return {
                label,
                expandable,
                expanded: true,
                model: { type, value },
                children
            };
        default:
            return {
                label,
                expandable,
                model: { type, value }
            };
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi10by10cmVlLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9waXBlcy9qc29uLXRyZWUvanNvbi10by10cmVlLnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscURBQXFEO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUk3RCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFVLEVBQUUsS0FBYyxFQUFZLEVBQUU7SUFDakUsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTVCLElBQUksUUFBZSxDQUFDO0lBQ3BCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztJQUV2QixJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsRUFBRTtRQUNoQyxLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQztLQUN2QjtJQUVELFFBQVEsSUFBSSxFQUFFO1FBQ1osS0FBSyxRQUFRO1lBQ1gsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUVqQyxPQUFPO2dCQUNMLEtBQUs7Z0JBQ0wsVUFBVTtnQkFDVixRQUFRLEVBQUUsSUFBSTtnQkFDZCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO2dCQUN0QixRQUFRO2FBQ1QsQ0FBQztRQUNKLEtBQUssT0FBTztZQUNWLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pDLFVBQVUsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUVqQyxPQUFPO2dCQUNMLEtBQUs7Z0JBQ0wsVUFBVTtnQkFDVixRQUFRLEVBQUUsSUFBSTtnQkFDZCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO2dCQUN0QixRQUFRO2FBQ1QsQ0FBQztRQUNKO1lBQ0UsT0FBTztnQkFDTCxLQUFLO2dCQUNMLFVBQVU7Z0JBQ1YsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTthQUN2QixDQUFDO0tBQ0w7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBzZWN1cml0eS9kZXRlY3Qtb2JqZWN0LWluamVjdGlvbiAqL1xuaW1wb3J0IHsgZ2V0VHlwZSB9IGZyb20gJy4uLy4uL3V0aWxzL2dldC10eXBlL2dldC10eXBlLnV0aWwnO1xuXG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdHJlZS90cmVlLW5vZGUubW9kZWwnO1xuXG5leHBvcnQgY29uc3QganNvblRvVHJlZSA9ICh2YWx1ZTogYW55LCBsYWJlbD86IHN0cmluZyk6IFRyZWVOb2RlID0+IHtcbiAgY29uc3QgdHlwZSA9IGdldFR5cGUodmFsdWUpO1xuXG4gIGxldCBjaGlsZHJlbjogYW55W107XG4gIGxldCBleHBhbmRhYmxlID0gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBsYWJlbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsYWJlbCA9IGxhYmVsIHx8IHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgY2hpbGRyZW4gPSBPYmplY3Qua2V5cyh2YWx1ZSkubWFwKGtleSA9PiBqc29uVG9UcmVlKHZhbHVlW2tleV0sIGtleSkpO1xuICAgICAgZXhwYW5kYWJsZSA9IGNoaWxkcmVuLmxlbmd0aCA+IDA7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhYmVsLFxuICAgICAgICBleHBhbmRhYmxlLFxuICAgICAgICBleHBhbmRlZDogdHJ1ZSxcbiAgICAgICAgbW9kZWw6IHsgdHlwZSwgdmFsdWUgfSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgIH07XG4gICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2hpbGRyZW4gPSB2YWx1ZS5tYXAoanNvblRvVHJlZSk7XG4gICAgICBleHBhbmRhYmxlID0gY2hpbGRyZW4ubGVuZ3RoID4gMDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIGV4cGFuZGFibGUsXG4gICAgICAgIGV4cGFuZGVkOiB0cnVlLFxuICAgICAgICBtb2RlbDogeyB0eXBlLCB2YWx1ZSB9LFxuICAgICAgICBjaGlsZHJlblxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIGV4cGFuZGFibGUsXG4gICAgICAgIG1vZGVsOiB7IHR5cGUsIHZhbHVlIH1cbiAgICAgIH07XG4gIH1cbn07XG4iXX0=