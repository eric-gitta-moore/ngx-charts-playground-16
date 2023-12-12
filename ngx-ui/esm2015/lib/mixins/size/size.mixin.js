import { Input, Directive } from '@angular/core';
import { Size } from './size.enum';
// eslint-disable-next-line @typescript-eslint/naming-convention
export function sizeMixin(Base) {
    class SizeBase extends Base {
        constructor() {
            super(...arguments);
            this.size = Size.Small;
        }
    }
    SizeBase.decorators = [
        { type: Directive }
    ];
    SizeBase.propDecorators = {
        size: [{ type: Input }]
    };
    return SizeBase;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l6ZS5taXhpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL21peGlucy9zaXplL3NpemUubWl4aW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHakQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVuQyxnRUFBZ0U7QUFDaEUsTUFBTSxVQUFVLFNBQVMsQ0FBNkIsSUFBTztJQUMzRCxNQUVNLFFBQVMsU0FBUSxJQUFJO1FBRjNCOztZQUdXLFNBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLENBQUM7OztnQkFKQSxTQUFTOzs7dUJBR1AsS0FBSzs7SUFHUixPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4uL2NvbnN0cnVjdG9yLnR5cGUnO1xuaW1wb3J0IHsgU2l6ZSB9IGZyb20gJy4vc2l6ZS5lbnVtJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxuZXhwb3J0IGZ1bmN0aW9uIHNpemVNaXhpbjxUIGV4dGVuZHMgQ29uc3RydWN0b3I8YW55Pj4oQmFzZTogVCk6IGFueSB7XG4gIEBEaXJlY3RpdmUoKVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcbiAgY2xhc3MgU2l6ZUJhc2UgZXh0ZW5kcyBCYXNlIHtcbiAgICBASW5wdXQoKSBzaXplID0gU2l6ZS5TbWFsbDtcbiAgfVxuXG4gIHJldHVybiBTaXplQmFzZTtcbn1cbiJdfQ==