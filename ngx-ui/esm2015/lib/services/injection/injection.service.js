/* eslint-disable security/detect-object-injection */
/* eslint-disable @typescript-eslint/member-ordering */
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { DomPortalOutlet, ComponentPortal } from '@angular/cdk/portal';
import * as ɵngcc0 from '@angular/core';
const isViewContainerRef = (x) => {
    return x.element;
};
const ɵ0 = isViewContainerRef;
/**
 * Injection service is a helper to append components
 * dynamically to a known location in the DOM, most
 * noteably for dialogs/tooltips appending to body.
 *
 * @export
 */
export class InjectionService {
    constructor(applicationRef, componentFactoryResolver, injector) {
        this.applicationRef = applicationRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
    }
    /**
     * Sets a default global root view container. This is useful for
     * things like ngUpgrade that doesn't have a ApplicationRef root.
     *
     * @param container
     */
    static setGlobalRootViewContainer(container) {
        InjectionService.globalRootViewContainer = container;
    }
    /**
     * Gets the root view container to inject the component to.
     *
     * @memberOf InjectionService
     */
    getRootViewContainer() {
        if (this._container)
            return this._container;
        if (InjectionService.globalRootViewContainer)
            return InjectionService.globalRootViewContainer;
        if (this.applicationRef.components.length)
            return this.applicationRef.components[0];
        throw new Error('View Container not found! ngUpgrade needs to manually set this via setRootViewContainer or setGlobalRootViewContainer.');
    }
    /**
     * Overrides the default root view container. This is useful for
     * things like ngUpgrade that doesn't have a ApplicationRef root.
     *
     * @param container
     *
     * @memberOf InjectionService
     */
    setRootViewContainer(container) {
        this._container = container;
    }
    /**
     * Gets the html element for a component ref.
     *
     * @param componentRef
     *
     * @memberOf InjectionService
     */
    getComponentRootNode(component) {
        if (isViewContainerRef(component)) {
            return component.element.nativeElement;
        }
        if (component.hostView && component.hostView.rootNodes.length > 0) {
            return component.hostView.rootNodes[0];
        }
        // the top most component root node has no `hostView`
        return component.location.nativeElement;
    }
    /**
     * Gets the root component container html element.
     *
     * @memberOf InjectionService
     */
    getRootViewContainerNode(component) {
        return this.getComponentRootNode(component);
    }
    /**
     * Projects the bindings onto the component
     *
     * @param component
     * @param options
     *
     * @memberOf InjectionService
     */
    projectComponentBindings(component, bindings) {
        if (bindings) {
            if (bindings.inputs !== undefined) {
                const bindingKeys = Object.getOwnPropertyNames(bindings.inputs);
                for (const bindingName of bindingKeys) {
                    component.instance[bindingName] = bindings.inputs[bindingName];
                }
            }
            if (bindings.outputs !== undefined) {
                const eventKeys = Object.getOwnPropertyNames(bindings.outputs);
                for (const eventName of eventKeys) {
                    component.instance[eventName] = bindings.outputs[eventName];
                }
            }
        }
        return component;
    }
    /**
     * Appends a component to an adjacent location
     *
     * @param componentClass
     * @param [options={}]
     * @param [location]
     *
     * @memberOf InjectionService
     */
    appendComponent(componentClass, bindings = {}, location) {
        if (!location)
            location = this.getRootViewContainer();
        const appendLocation = bindings.inputs && bindings.inputs.isRoot === false ? location : this.getComponentRootNode(location);
        const portalHost = new DomPortalOutlet(appendLocation, this.componentFactoryResolver, this.applicationRef, this.injector);
        const portal = new ComponentPortal(componentClass);
        const componentRef = portalHost.attach(portal);
        this.projectComponentBindings(componentRef, bindings);
        return componentRef;
    }
}
InjectionService.ɵfac = function InjectionService_Factory(t) { return new (t || InjectionService)(ɵngcc0.ɵɵinject(ɵngcc0.ApplicationRef), ɵngcc0.ɵɵinject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵinject(ɵngcc0.Injector)); };
InjectionService.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: InjectionService, factory: InjectionService.ɵfac });
InjectionService.globalRootViewContainer = null;
InjectionService.ctorParameters = () => [
    { type: ApplicationRef },
    { type: ComponentFactoryResolver },
    { type: Injector }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(InjectionService, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc0.ApplicationRef }, { type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.Injector }]; }, null); })();
export { ɵ0 };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL3NlcnZpY2VzL2luamVjdGlvbi9pbmplY3Rpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxREFBcUQ7QUFDckQsdURBQXVEO0FBQ3ZELE9BQU8sRUFDTCxjQUFjLEVBQ2Qsd0JBQXdCLEVBRXhCLFVBQVUsRUFDVixRQUFRLEVBSVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFdkUsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLENBQU0sRUFBeUIsRUFBRTtBQUM3RCxJQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNuQixDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxNQUFNLE9BQU8sZ0JBQWdCO0FBQzdCLElBY0UsWUFDVSxjQUE4QixFQUM5Qix3QkFBa0QsRUFDbEQsUUFBa0I7QUFDM0IsUUFIUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7QUFBQyxRQUMvQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0FBQUMsUUFDbkQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtBQUM5QixJQUFLLENBQUM7QUFDTixJQWZFO0FBQ0Y7QUFDRTtBQUNFO0FBQ0U7QUFFSixPQURHO0FBQ0wsSUFBRSxNQUFNLENBQUMsMEJBQTBCLENBQUMsU0FBMkI7QUFBSSxRQUMvRCxnQkFBZ0IsQ0FBQyx1QkFBdUIsR0FBRyxTQUFTLENBQUM7QUFDekQsSUFBRSxDQUFDO0FBQ0gsSUFPRTtBQUNGO0FBQ0U7QUFDRTtBQUVKLE9BREs7QUFDTCxJQUFFLG9CQUFvQjtBQUFLLFFBQ3ZCLElBQUksSUFBSSxDQUFDLFVBQVU7QUFBRSxZQUFBLE9BQU8sSUFBSSxDQUFD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QyxvQkFBb0IsRUFBRSxDQUFDO0FBQzFELFFBQ0ksTUFBTSxjQUFjLEdBQ2xCLFFBQVEsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzRyxRQUNJLE1BQU0sVUFBVSxHQUFHLElBQUksZUFBZSxDQUNwQyxjQUF5QixFQUN6QixJQUFJLENBQUMsd0JBQXdCLEVBQzdCLElBQUksQ0FBQyxjQUFjLEVBQ25CLElBQUksQ0FBQyxRQUFRLENBQ2QsQ0FBQztBQUNOLFFBQ0ksTUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDdkQsUUFDSSxNQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25ELFFBQUksSUFBSSxDQUFDLHdCQUF3QixDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMxRCxRQUFJLE9BQU8sWUFBWSxDQUFDO0FBQ3hCLElBQUUsQ0FBQztBQUNIOzs4SEFBQztBQXpJUSx3Q0FBdUIsR0FBcUIsSUFBSSxDQUFDLEFBRHhEO0FBQUM7RUFERixVQUFVLFpBRUUsWUF4QlgsY0FBYztBQUNkLFlBQUEsd0JBQXdCO0FBQ3hCLFlBRUEsUUFBUTtBQUNUOzs7cUpBQUU7QUFBQztBQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgc2VjdXJpdHkvZGV0ZWN0LW9iamVjdC1pbmplY3Rpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmcgKi9cbmltcG9ydCB7XG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0b3IsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgVHlwZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVBvcnRhbE91dGxldCwgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5cbmNvbnN0IGlzVmlld0NvbnRhaW5lclJlZiA9ICh4OiBhbnkpOiB4IGlzIFZpZXdDb250YWluZXJSZWYgPT4ge1xuICByZXR1cm4geC5lbGVtZW50O1xufTtcblxuLyoqXG4gKiBJbmplY3Rpb24gc2VydmljZSBpcyBhIGhlbHBlciB0byBhcHBlbmQgY29tcG9uZW50c1xuICogZHluYW1pY2FsbHkgdG8gYSBrbm93biBsb2NhdGlvbiBpbiB0aGUgRE9NLCBtb3N0XG4gKiBub3RlYWJseSBmb3IgZGlhbG9ncy90b29sdGlwcyBhcHBlbmRpbmcgdG8gYm9keS5cbiAqXG4gKiBAZXhwb3J0XG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbmplY3Rpb25TZXJ2aWNlIHtcbiAgc3RhdGljIGdsb2JhbFJvb3RWaWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmID0gbnVsbDtcblxuICBwcml2YXRlIF9jb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgLyoqXG4gICAqIFNldHMgYSBkZWZhdWx0IGdsb2JhbCByb290IHZpZXcgY29udGFpbmVyLiBUaGlzIGlzIHVzZWZ1bCBmb3JcbiAgICogdGhpbmdzIGxpa2UgbmdVcGdyYWRlIHRoYXQgZG9lc24ndCBoYXZlIGEgQXBwbGljYXRpb25SZWYgcm9vdC5cbiAgICpcbiAgICogQHBhcmFtIGNvbnRhaW5lclxuICAgKi9cbiAgc3RhdGljIHNldEdsb2JhbFJvb3RWaWV3Q29udGFpbmVyKGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZik6IHZvaWQge1xuICAgIEluamVjdGlvblNlcnZpY2UuZ2xvYmFsUm9vdFZpZXdDb250YWluZXIgPSBjb250YWluZXI7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge31cblxuICAvKipcbiAgICogR2V0cyB0aGUgcm9vdCB2aWV3IGNvbnRhaW5lciB0byBpbmplY3QgdGhlIGNvbXBvbmVudCB0by5cbiAgICpcbiAgICogQG1lbWJlck9mIEluamVjdGlvblNlcnZpY2VcbiAgICovXG4gIGdldFJvb3RWaWV3Q29udGFpbmVyKCk6IFZpZXdDb250YWluZXJSZWYgfCBDb21wb25lbnRSZWY8YW55PiB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcbiAgICBpZiAoSW5qZWN0aW9uU2VydmljZS5nbG9iYWxSb290Vmlld0NvbnRhaW5lcikgcmV0dXJuIEluamVjdGlvblNlcnZpY2UuZ2xvYmFsUm9vdFZpZXdDb250YWluZXI7XG5cbiAgICBpZiAodGhpcy5hcHBsaWNhdGlvblJlZi5jb21wb25lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuYXBwbGljYXRpb25SZWYuY29tcG9uZW50c1swXTtcblxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdWaWV3IENvbnRhaW5lciBub3QgZm91bmQhIG5nVXBncmFkZSBuZWVkcyB0byBtYW51YWxseSBzZXQgdGhpcyB2aWEgc2V0Um9vdFZpZXdDb250YWluZXIgb3Igc2V0R2xvYmFsUm9vdFZpZXdDb250YWluZXIuJ1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogT3ZlcnJpZGVzIHRoZSBkZWZhdWx0IHJvb3QgdmlldyBjb250YWluZXIuIFRoaXMgaXMgdXNlZnVsIGZvclxuICAgKiB0aGluZ3MgbGlrZSBuZ1VwZ3JhZGUgdGhhdCBkb2Vzbid0IGhhdmUgYSBBcHBsaWNhdGlvblJlZiByb290LlxuICAgKlxuICAgKiBAcGFyYW0gY29udGFpbmVyXG4gICAqXG4gICAqIEBtZW1iZXJPZiBJbmplY3Rpb25TZXJ2aWNlXG4gICAqL1xuICBzZXRSb290Vmlld0NvbnRhaW5lcihjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpOiB2b2lkIHtcbiAgICB0aGlzLl9jb250YWluZXIgPSBjb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgaHRtbCBlbGVtZW50IGZvciBhIGNvbXBvbmVudCByZWYuXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnRSZWZcbiAgICpcbiAgICogQG1lbWJlck9mIEluamVjdGlvblNlcnZpY2VcbiAgICovXG4gIGdldENvbXBvbmVudFJvb3ROb2RlKGNvbXBvbmVudDogVmlld0NvbnRhaW5lclJlZiB8IENvbXBvbmVudFJlZjxhbnk+KTogSFRNTEVsZW1lbnQge1xuICAgIGlmIChpc1ZpZXdDb250YWluZXJSZWYoY29tcG9uZW50KSkge1xuICAgICAgcmV0dXJuIGNvbXBvbmVudC5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBvbmVudC5ob3N0VmlldyAmJiAoY29tcG9uZW50Lmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIChjb21wb25lbnQuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcbiAgICB9XG5cbiAgICAvLyB0aGUgdG9wIG1vc3QgY29tcG9uZW50IHJvb3Qgbm9kZSBoYXMgbm8gYGhvc3RWaWV3YFxuICAgIHJldHVybiBjb21wb25lbnQubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSByb290IGNvbXBvbmVudCBjb250YWluZXIgaHRtbCBlbGVtZW50LlxuICAgKlxuICAgKiBAbWVtYmVyT2YgSW5qZWN0aW9uU2VydmljZVxuICAgKi9cbiAgZ2V0Um9vdFZpZXdDb250YWluZXJOb2RlKGNvbXBvbmVudDogVmlld0NvbnRhaW5lclJlZiB8IENvbXBvbmVudFJlZjxhbnk+KTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmdldENvbXBvbmVudFJvb3ROb2RlKGNvbXBvbmVudCk7XG4gIH1cblxuICAvKipcbiAgICogUHJvamVjdHMgdGhlIGJpbmRpbmdzIG9udG8gdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcGFyYW0gY29tcG9uZW50XG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqXG4gICAqIEBtZW1iZXJPZiBJbmplY3Rpb25TZXJ2aWNlXG4gICAqL1xuICBwcm9qZWN0Q29tcG9uZW50QmluZGluZ3MoY29tcG9uZW50OiBDb21wb25lbnRSZWY8YW55PiwgYmluZGluZ3M6IFJlY29yZDxzdHJpbmcsIGFueT4pOiBDb21wb25lbnRSZWY8YW55PiB7XG4gICAgaWYgKGJpbmRpbmdzKSB7XG4gICAgICBpZiAoYmluZGluZ3MuaW5wdXRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgYmluZGluZ0tleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiaW5kaW5ncy5pbnB1dHMpO1xuICAgICAgICBmb3IgKGNvbnN0IGJpbmRpbmdOYW1lIG9mIGJpbmRpbmdLZXlzKSB7XG4gICAgICAgICAgY29tcG9uZW50Lmluc3RhbmNlW2JpbmRpbmdOYW1lXSA9IGJpbmRpbmdzLmlucHV0c1tiaW5kaW5nTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGJpbmRpbmdzLm91dHB1dHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBldmVudEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiaW5kaW5ncy5vdXRwdXRzKTtcbiAgICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgb2YgZXZlbnRLZXlzKSB7XG4gICAgICAgICAgY29tcG9uZW50Lmluc3RhbmNlW2V2ZW50TmFtZV0gPSBiaW5kaW5ncy5vdXRwdXRzW2V2ZW50TmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgYSBjb21wb25lbnQgdG8gYW4gYWRqYWNlbnQgbG9jYXRpb25cbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudENsYXNzXG4gICAqIEBwYXJhbSBbb3B0aW9ucz17fV1cbiAgICogQHBhcmFtIFtsb2NhdGlvbl1cbiAgICpcbiAgICogQG1lbWJlck9mIEluamVjdGlvblNlcnZpY2VcbiAgICovXG4gIGFwcGVuZENvbXBvbmVudDxUPihcbiAgICBjb21wb25lbnRDbGFzczogVHlwZTxUPixcbiAgICBiaW5kaW5nczogYW55ID0ge30sXG4gICAgbG9jYXRpb24/OiBDb21wb25lbnRSZWY8YW55PiB8IFZpZXdDb250YWluZXJSZWZcbiAgKTogQ29tcG9uZW50UmVmPGFueT4ge1xuICAgIGlmICghbG9jYXRpb24pIGxvY2F0aW9uID0gdGhpcy5nZXRSb290Vmlld0NvbnRhaW5lcigpO1xuXG4gICAgY29uc3QgYXBwZW5kTG9jYXRpb24gPVxuICAgICAgYmluZGluZ3MuaW5wdXRzICYmIGJpbmRpbmdzLmlucHV0cy5pc1Jvb3QgPT09IGZhbHNlID8gbG9jYXRpb24gOiB0aGlzLmdldENvbXBvbmVudFJvb3ROb2RlKGxvY2F0aW9uKTtcblxuICAgIGNvbnN0IHBvcnRhbEhvc3QgPSBuZXcgRG9tUG9ydGFsT3V0bGV0KFxuICAgICAgYXBwZW5kTG9jYXRpb24gYXMgRWxlbWVudCxcbiAgICAgIHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgdGhpcy5hcHBsaWNhdGlvblJlZixcbiAgICAgIHRoaXMuaW5qZWN0b3JcbiAgICApO1xuXG4gICAgY29uc3QgcG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChjb21wb25lbnRDbGFzcyk7XG5cbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSBwb3J0YWxIb3N0LmF0dGFjaChwb3J0YWwpO1xuICAgIHRoaXMucHJvamVjdENvbXBvbmVudEJpbmRpbmdzKGNvbXBvbmVudFJlZiwgYmluZGluZ3MpO1xuICAgIHJldHVybiBjb21wb25lbnRSZWY7XG4gIH1cbn1cbiJdfQ==