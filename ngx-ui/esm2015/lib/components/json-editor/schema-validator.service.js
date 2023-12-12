import Ajv from 'ajv';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as ɵngcc0 from '@angular/core';
export class SchemaValidatorService {
    constructor() {
        this.ajv = new Ajv({
            allErrors: true
        });
        this.ajv.addFormat('password', '.*');
        this.ajv.addFormat('code', '.*');
    }
    /**
     * Validates schemas of a specified type
     */
    validate(schema, model) {
        const valid = this.ajv.validate(schema, model);
        if (!valid) {
            return this.ajv.errors;
        }
        else
            return [];
    }
}
SchemaValidatorService.ɵfac = function SchemaValidatorService_Factory(t) { return new (t || SchemaValidatorService)(); };
SchemaValidatorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SchemaValidatorService_Factory() { return new SchemaValidatorService(); }, token: SchemaValidatorService, providedIn: "root" });
SchemaValidatorService.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SchemaValidatorService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXZhbGlkYXRvci5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2pzb24tZWRpdG9yL3NjaGVtYS12YWxpZGF0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFDdEIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQzs7QUFJQSxNQUFNLE9BQU8sc0JBQXNCO0FBQ25DLElBRUU7QUFDRixRQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUM7QUFDdkIsWUFBTSxTQUFTLEVBQUUsSUFBSTtBQUNyQixTQUFLLENBQUMsQ0FBQztBQUNQLFFBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3pDLFFBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3JDLElBQUUsQ0FBQztBQUNILElBQ0U7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFFLFFBQVEsQ0FBQyxNQUFXLEVBQUUsS0FBVTtBQUFJLFFBQ2xDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNuRCxRQUNJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDaEIsWUFBTSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO0FBQzdCLFNBQUs7QUFBQztBQUFhLFlBQVIsT0FBTyxFQUFFLENBQUM7QUFDckIsSUFBRSxDQUFDO0FBQ0g7eUhBQUM7QUFDRCx5TUF0Qks7QUFBQztBQUhMLFVBQVUsU0FBQyxrQkFDVixVQUFVLEVBQUUsTUFBTSxjQUNuQjs7Ozs7Z0RBSUQ7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBanYgZnJvbSAnYWp2JztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2NoZW1hVmFsaWRhdG9yU2VydmljZSB7XG4gIGFqdjogQWp2LkFqdjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFqdiA9IG5ldyBBanYoe1xuICAgICAgYWxsRXJyb3JzOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5hanYuYWRkRm9ybWF0KCdwYXNzd29yZCcsICcuKicpO1xuICAgIHRoaXMuYWp2LmFkZEZvcm1hdCgnY29kZScsICcuKicpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyBzY2hlbWFzIG9mIGEgc3BlY2lmaWVkIHR5cGVcbiAgICovXG4gIHZhbGlkYXRlKHNjaGVtYTogYW55LCBtb2RlbDogYW55KTogYW55W10ge1xuICAgIGNvbnN0IHZhbGlkID0gdGhpcy5hanYudmFsaWRhdGUoc2NoZW1hLCBtb2RlbCk7XG5cbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICByZXR1cm4gdGhpcy5hanYuZXJyb3JzO1xuICAgIH0gZWxzZSByZXR1cm4gW107XG4gIH1cbn1cbiJdfQ==