import { __decorate, __metadata } from "tslib";
import { Input, Output, EventEmitter, ChangeDetectorRef, Directive } from '@angular/core';
import { SchemaValidatorService } from './schema-validator.service';
import { debounceable } from '../../decorators/debounceable/debounceable.decorator';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './schema-validator.service';
export class JsonEditor {
    constructor(schemaValidatorService, cdr) {
        this.schemaValidatorService = schemaValidatorService;
        this.cdr = cdr;
        this.showKnownProperties = false;
        this.modelChange = new EventEmitter();
        this.schemaUpdate = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.schema) {
            this.schema = JSON.parse(JSON.stringify(this.schema));
        }
        if (!this.schema) {
            this.schema = {
                type: 'object'
            };
        }
        if (!this.schema.type) {
            this.schema.type = 'object';
        }
    }
    /**
     * Model change callback. Validates the model and emits a change event
     *
     * @param model
     */
    modelChangedCallback(model) {
        this.validate(this.schema, model);
        this.modelChange.emit(model);
    }
    /**
     * Validates the model based on the schema
     *
     * @param schema
     * @param model
     */
    validate(schema, model) {
        this.errors = this.schemaValidator
            ? this.schemaValidator(schema, model)
            : this.schemaValidatorService.validate(schema, model);
        this.cdr.markForCheck();
        return this.errors && this.errors.length > 0;
    }
}
JsonEditor.ɵfac = function JsonEditor_Factory(t) { return new (t || JsonEditor)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.SchemaValidatorService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
JsonEditor.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: JsonEditor, inputs: { showKnownProperties: "showKnownProperties", schema: "schema", model: "model", label: "label", typeCheckOverrides: "typeCheckOverrides", schemaValidator: "schemaValidator" }, outputs: { modelChange: "modelChange", schemaUpdate: "schemaUpdate" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
JsonEditor.ctorParameters = () => [
    { type: SchemaValidatorService },
    { type: ChangeDetectorRef }
];
JsonEditor.propDecorators = {
    model: [{ type: Input }],
    schema: [{ type: Input }],
    label: [{ type: Input }],
    typeCheckOverrides: [{ type: Input }],
    schemaValidator: [{ type: Input }],
    showKnownProperties: [{ type: Input }],
    modelChange: [{ type: Output }],
    schemaUpdate: [{ type: Output }]
};
__decorate([
    debounceable(120),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Boolean)
], JsonEditor.prototype, "validate", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(JsonEditor, [{
        type: Directive
    }], function () { return [{ type: ɵngcc1.SchemaValidatorService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { showKnownProperties: [{
            type: Input
        }], modelChange: [{
            type: Output
        }], schemaUpdate: [{
            type: Output
        }], schema: [{
            type: Input
        }], model: [{
            type: Input
        }], label: [{
            type: Input
        }], typeCheckOverrides: [{
            type: Input
        }], schemaValidator: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1lZGl0b3IuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvanNvbi1lZGl0b3IvanNvbi1lZGl0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNEIsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXBFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7O0FBR3BGLE1BQU0sT0FBTyxVQUFVO0FBQUcsSUFtQnhCLFlBQXNCLHNCQUE4QyxFQUFZLEdBQXNCO0FBQUksUUFBcEYsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtBQUFDLFFBQVcsUUFBRyxHQUFILEdBQUcsQ0FBbUI7QUFBQyxRQVI5Rix3QkFBbUIsR0FBRyxLQUFLLENBQUM7QUFDdkMsUUFDWSxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ2hFLFFBQ1ksaUJBQVksR0FBbUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM5RSxJQUcyRyxDQUFDO0FBQzVHLElBQ0UsV0FBVyxDQUFDLE9BQXNCO0FBQ3BDLFFBQUksSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO0FBQ3hCLFlBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDNUQsU0FBSztBQUNMLFFBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDdEIsWUFBTSxJQUFJLENBQUMsTUFBTSxHQUFHO0FBQ3BCLGdCQUFRLElBQUksRUFBRSxRQUFRO0FBQ3RCLGFBQU8sQ0FBQztBQUNSLFNBQUs7QUFDTCxRQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtBQUMzQixZQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztBQUNsQyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRTtBQUNGO0FBQ0U7QUFDRTtBQUVKLE9BREs7QUFDTCxJQUFFLG9CQUFvQixDQUFDLEtBQVU7QUFDakMsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdEMsUUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqQyxJQUFFLENBQUM7QUFDSCxJQUNFO0FBQ0Y7QUFDRTtBQUNFO0FBQ0U7QUFFSixPQURHO0FBQ0wsSUFDRSxRQUFRLENBQUMsTUFBVyxFQUFFLEtBQVU7QUFBSSxRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlO0FBQ3RDLFlBQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztBQUMzQyxZQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM1RCxRQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDNUIsUUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2pELElBQUUsQ0FBQztBQUNIO3NDQTlEQyxTQUFTO3VYQUNSO0FBQUM7QUFBb0MsWUFMOUIsc0JBQXNCO0FBQUksWUFENkIsaUJBQWlCO0FBQUc7QUFBRztBQUN2RixvQkFNRyxLQUFLO0FBQUsscUJBRVYsS0FBSztBQUFLLG9CQUVWLEtBQUs7QUFBSyxpQ0FFVixLQUFLO0FBQUssOEJBRVYsS0FBSztBQUFLLGtDQUVWLEtBQUs7QUFBSywwQkFFVixNQUFNO0FBQUssMkJBRVgsTUFBTTtBQUFJO0FBc0NYO0FBQWEsSUFEWixZQUFZLENBQUMsR0FBRyxDQUFDO0FBQ25CO0FBQXlDO0FBRS9CO0FBQ0MsMENBSVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0g7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY2hlbWFWYWxpZGF0b3JTZXJ2aWNlIH0gZnJvbSAnLi9zY2hlbWEtdmFsaWRhdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgSlNPTkVkaXRvclNjaGVtYSB9IGZyb20gJy4vanNvbi1lZGl0b3IuaGVscGVyJztcbmltcG9ydCB7IGRlYm91bmNlYWJsZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcnMvZGVib3VuY2VhYmxlL2RlYm91bmNlYWJsZS5kZWNvcmF0b3InO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBjbGFzcyBKc29uRWRpdG9yIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbW9kZWw6IGFueTtcblxuICBASW5wdXQoKSBzY2hlbWE6IEpTT05FZGl0b3JTY2hlbWE7XG5cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICBASW5wdXQoKSB0eXBlQ2hlY2tPdmVycmlkZXM/OiBhbnk7XG5cbiAgQElucHV0KCkgc2NoZW1hVmFsaWRhdG9yPzogKHNjaGVtYTogYW55LCAuLi5hcmdzOiBhbnlbXSkgPT4gYW55W107XG5cbiAgQElucHV0KCkgc2hvd0tub3duUHJvcGVydGllcyA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBtb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpIHNjaGVtYVVwZGF0ZTogRXZlbnRFbWl0dGVyPEpTT05FZGl0b3JTY2hlbWE+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGVycm9yczogYW55W107XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNjaGVtYVZhbGlkYXRvclNlcnZpY2U6IFNjaGVtYVZhbGlkYXRvclNlcnZpY2UsIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5zY2hlbWEpIHtcbiAgICAgIHRoaXMuc2NoZW1hID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNjaGVtYSkpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5zY2hlbWEpIHtcbiAgICAgIHRoaXMuc2NoZW1hID0ge1xuICAgICAgICB0eXBlOiAnb2JqZWN0J1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnNjaGVtYS50eXBlKSB7XG4gICAgICB0aGlzLnNjaGVtYS50eXBlID0gJ29iamVjdCc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1vZGVsIGNoYW5nZSBjYWxsYmFjay4gVmFsaWRhdGVzIHRoZSBtb2RlbCBhbmQgZW1pdHMgYSBjaGFuZ2UgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIG1vZGVsXG4gICAqL1xuICBtb2RlbENoYW5nZWRDYWxsYmFjayhtb2RlbDogYW55KSB7XG4gICAgdGhpcy52YWxpZGF0ZSh0aGlzLnNjaGVtYSwgbW9kZWwpO1xuICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdChtb2RlbCk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIHRoZSBtb2RlbCBiYXNlZCBvbiB0aGUgc2NoZW1hXG4gICAqXG4gICAqIEBwYXJhbSBzY2hlbWFcbiAgICogQHBhcmFtIG1vZGVsXG4gICAqL1xuICBAZGVib3VuY2VhYmxlKDEyMClcbiAgdmFsaWRhdGUoc2NoZW1hOiBhbnksIG1vZGVsOiBhbnkpOiBib29sZWFuIHtcbiAgICB0aGlzLmVycm9ycyA9IHRoaXMuc2NoZW1hVmFsaWRhdG9yXG4gICAgICA/IHRoaXMuc2NoZW1hVmFsaWRhdG9yKHNjaGVtYSwgbW9kZWwpXG4gICAgICA6IHRoaXMuc2NoZW1hVmFsaWRhdG9yU2VydmljZS52YWxpZGF0ZShzY2hlbWEsIG1vZGVsKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcblxuICAgIHJldHVybiB0aGlzLmVycm9ycyAmJiB0aGlzLmVycm9ycy5sZW5ndGggPiAwO1xuICB9XG59XG4iXX0=