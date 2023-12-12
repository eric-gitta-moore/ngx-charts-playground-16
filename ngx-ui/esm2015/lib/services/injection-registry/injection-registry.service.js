/* istanbul ignore next */
export class InjectionRegistryService {
    constructor(injectionService) {
        this.injectionService = injectionService;
        this.defaults = {};
        this.components = new Map();
    }
    getByType(type = this.type) {
        return this.components.get(type);
    }
    create(bindings) {
        return this.createByType(this.type, bindings);
    }
    createByType(type, bindings) {
        const location = bindings.parentContainer;
        bindings = this.assignDefaults(bindings);
        const component = this.injectComponent(type, bindings, location);
        this.register(type, component);
        return component;
    }
    destroy(instance) {
        const compsByType = this.components.get(instance.componentType);
        if (compsByType && compsByType.length) {
            const idx = compsByType.indexOf(instance);
            if (idx > -1) {
                const component = compsByType[idx];
                component.destroy();
                compsByType.splice(idx, 1);
            }
        }
    }
    destroyAll() {
        this.destroyByType(this.type);
    }
    destroyByType(type) {
        const comps = this.components.get(type);
        if (comps && comps.length) {
            let i = comps.length - 1;
            while (i >= 0) {
                this.destroy(comps[i--]);
            }
        }
    }
    injectComponent(type, bindings, location) {
        return this.injectionService.appendComponent(type, bindings, location);
    }
    assignDefaults(bindings) {
        const inputs = Object.assign({}, this.defaults.inputs);
        const outputs = Object.assign({}, this.defaults.outputs);
        if (!bindings.inputs && !bindings.outputs) {
            bindings = { inputs: bindings };
        }
        if (inputs) {
            bindings.inputs = Object.assign(Object.assign({}, inputs), bindings.inputs);
        }
        if (outputs) {
            bindings.outputs = Object.assign(Object.assign({}, outputs), bindings.outputs);
        }
        return bindings;
    }
    register(type, component) {
        if (!this.components.has(type)) {
            this.components.set(type, []);
        }
        const types = this.components.get(type);
        types.push(component);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0aW9uLXJlZ2lzdHJ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9zZXJ2aWNlcy9pbmplY3Rpb24tcmVnaXN0cnkvaW5qZWN0aW9uLXJlZ2lzdHJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0EsMEJBQTBCO0FBQzFCLE1BQU0sT0FBZ0Isd0JBQXdCO0lBTTVDLFlBQStCLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBTHZELGFBQVEsR0FBb0IsRUFBRSxDQUFDO1FBQy9CLGVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBK0IsQ0FBQztJQUlNLENBQUM7SUFFckUsU0FBUyxDQUFDLE9BQWdCLElBQUksQ0FBQyxJQUFJO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUF5QjtRQUM5QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQWEsRUFBRSxRQUF5QjtRQUNuRCxNQUFNLFFBQVEsR0FBSSxRQUFnQixDQUFDLGVBQWUsQ0FBQztRQUNuRCxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV6QyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFL0IsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELE9BQU8sQ0FBQyxRQUF5QjtRQUMvQixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFaEUsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUNyQyxNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNaLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNwQixXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM1QjtTQUNGO0lBQ0gsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsYUFBYSxDQUFDLElBQWE7UUFDekIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzFCO1NBQ0Y7SUFDSCxDQUFDO0lBRVMsZUFBZSxDQUN2QixJQUFhLEVBQ2IsUUFBeUIsRUFDekIsUUFBK0M7UUFFL0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVTLGNBQWMsQ0FBQyxRQUE2QjtRQUNwRCxNQUFNLE1BQU0scUJBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUUsQ0FBQztRQUMzQyxNQUFNLE9BQU8scUJBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUUsQ0FBQztRQUU3QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDekMsUUFBUSxHQUFHLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxNQUFNLEVBQUU7WUFDVixRQUFRLENBQUMsTUFBTSxtQ0FBUSxNQUFNLEdBQUssUUFBUSxDQUFDLE1BQU0sQ0FBRSxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxPQUFPLEVBQUU7WUFDWCxRQUFRLENBQUMsT0FBTyxtQ0FBUSxPQUFPLEdBQUssUUFBUSxDQUFDLE9BQU8sQ0FBRSxDQUFDO1NBQ3hEO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVTLFFBQVEsQ0FBQyxJQUFhLEVBQUUsU0FBMEI7UUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztTQUMvQjtRQUVELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgc2VjdXJpdHkvZGV0ZWN0LW9iamVjdC1pbmplY3Rpb24gKi9cbmltcG9ydCB7IFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudFJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbmplY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vaW5qZWN0aW9uL2luamVjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBhcnRpYWxCaW5kaW5ncyB9IGZyb20gJy4vcGFydGlhbC1iaW5kaW5ncy5pbnRlcmZhY2UnO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEluamVjdGlvblJlZ2lzdHJ5U2VydmljZTxUID0gYW55PiB7XG4gIHByb3RlY3RlZCBkZWZhdWx0czogUGFydGlhbEJpbmRpbmdzID0ge307XG4gIHByb3RlY3RlZCBjb21wb25lbnRzID0gbmV3IE1hcDxhbnksIEFycmF5PENvbXBvbmVudFJlZjxUPj4+KCk7XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHR5cGU6IFR5cGU8VD47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IGluamVjdGlvblNlcnZpY2U6IEluamVjdGlvblNlcnZpY2UpIHt9XG5cbiAgZ2V0QnlUeXBlKHR5cGU6IFR5cGU8VD4gPSB0aGlzLnR5cGUpOiBDb21wb25lbnRSZWY8VD5bXSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50cy5nZXQodHlwZSk7XG4gIH1cblxuICBjcmVhdGUoYmluZGluZ3M6IFBhcnRpYWxCaW5kaW5ncyk6IENvbXBvbmVudFJlZjxUPiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlQnlUeXBlKHRoaXMudHlwZSwgYmluZGluZ3MpO1xuICB9XG5cbiAgY3JlYXRlQnlUeXBlKHR5cGU6IFR5cGU8VD4sIGJpbmRpbmdzOiBQYXJ0aWFsQmluZGluZ3MpOiBDb21wb25lbnRSZWY8VD4ge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gKGJpbmRpbmdzIGFzIGFueSkucGFyZW50Q29udGFpbmVyO1xuICAgIGJpbmRpbmdzID0gdGhpcy5hc3NpZ25EZWZhdWx0cyhiaW5kaW5ncyk7XG5cbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmluamVjdENvbXBvbmVudCh0eXBlLCBiaW5kaW5ncywgbG9jYXRpb24pO1xuICAgIHRoaXMucmVnaXN0ZXIodHlwZSwgY29tcG9uZW50KTtcblxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH1cblxuICBkZXN0cm95KGluc3RhbmNlOiBDb21wb25lbnRSZWY8VD4pOiB2b2lkIHtcbiAgICBjb25zdCBjb21wc0J5VHlwZSA9IHRoaXMuY29tcG9uZW50cy5nZXQoaW5zdGFuY2UuY29tcG9uZW50VHlwZSk7XG5cbiAgICBpZiAoY29tcHNCeVR5cGUgJiYgY29tcHNCeVR5cGUubGVuZ3RoKSB7XG4gICAgICBjb25zdCBpZHggPSBjb21wc0J5VHlwZS5pbmRleE9mKGluc3RhbmNlKTtcblxuICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBzQnlUeXBlW2lkeF07XG4gICAgICAgIGNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgIGNvbXBzQnlUeXBlLnNwbGljZShpZHgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3lBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95QnlUeXBlKHRoaXMudHlwZSk7XG4gIH1cblxuICBkZXN0cm95QnlUeXBlKHR5cGU6IFR5cGU8VD4pOiB2b2lkIHtcbiAgICBjb25zdCBjb21wcyA9IHRoaXMuY29tcG9uZW50cy5nZXQodHlwZSk7XG5cbiAgICBpZiAoY29tcHMgJiYgY29tcHMubGVuZ3RoKSB7XG4gICAgICBsZXQgaSA9IGNvbXBzLmxlbmd0aCAtIDE7XG4gICAgICB3aGlsZSAoaSA+PSAwKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveShjb21wc1tpLS1dKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgaW5qZWN0Q29tcG9uZW50KFxuICAgIHR5cGU6IFR5cGU8VD4sXG4gICAgYmluZGluZ3M6IFBhcnRpYWxCaW5kaW5ncyxcbiAgICBsb2NhdGlvbj86IENvbXBvbmVudFJlZjxhbnk+IHwgVmlld0NvbnRhaW5lclJlZlxuICApOiBDb21wb25lbnRSZWY8VD4ge1xuICAgIHJldHVybiB0aGlzLmluamVjdGlvblNlcnZpY2UuYXBwZW5kQ29tcG9uZW50KHR5cGUsIGJpbmRpbmdzLCBsb2NhdGlvbik7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXNzaWduRGVmYXVsdHMoYmluZGluZ3M6IFJlY29yZDxzdHJpbmcsIGFueT4pOiBQYXJ0aWFsQmluZGluZ3Mge1xuICAgIGNvbnN0IGlucHV0cyA9IHsgLi4udGhpcy5kZWZhdWx0cy5pbnB1dHMgfTtcbiAgICBjb25zdCBvdXRwdXRzID0geyAuLi50aGlzLmRlZmF1bHRzLm91dHB1dHMgfTtcblxuICAgIGlmICghYmluZGluZ3MuaW5wdXRzICYmICFiaW5kaW5ncy5vdXRwdXRzKSB7XG4gICAgICBiaW5kaW5ncyA9IHsgaW5wdXRzOiBiaW5kaW5ncyB9O1xuICAgIH1cblxuICAgIGlmIChpbnB1dHMpIHtcbiAgICAgIGJpbmRpbmdzLmlucHV0cyA9IHsgLi4uaW5wdXRzLCAuLi5iaW5kaW5ncy5pbnB1dHMgfTtcbiAgICB9XG5cbiAgICBpZiAob3V0cHV0cykge1xuICAgICAgYmluZGluZ3Mub3V0cHV0cyA9IHsgLi4ub3V0cHV0cywgLi4uYmluZGluZ3Mub3V0cHV0cyB9O1xuICAgIH1cblxuICAgIHJldHVybiBiaW5kaW5ncztcbiAgfVxuXG4gIHByb3RlY3RlZCByZWdpc3Rlcih0eXBlOiBUeXBlPFQ+LCBjb21wb25lbnQ6IENvbXBvbmVudFJlZjxUPik6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb21wb25lbnRzLmhhcyh0eXBlKSkge1xuICAgICAgdGhpcy5jb21wb25lbnRzLnNldCh0eXBlLCBbXSk7XG4gICAgfVxuXG4gICAgY29uc3QgdHlwZXMgPSB0aGlzLmNvbXBvbmVudHMuZ2V0KHR5cGUpO1xuICAgIHR5cGVzLnB1c2goY29tcG9uZW50KTtcbiAgfVxufVxuIl19