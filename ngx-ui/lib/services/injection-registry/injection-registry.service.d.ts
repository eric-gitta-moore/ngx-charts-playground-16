import { ViewContainerRef } from '@angular/core';
import { ComponentRef, Type } from '@angular/core';
import { InjectionService } from '../injection/injection.service';
import { PartialBindings } from './partial-bindings.interface';
export declare abstract class InjectionRegistryService<T = any> {
    protected readonly injectionService: InjectionService;
    protected defaults: PartialBindings;
    protected components: Map<any, ComponentRef<T>[]>;
    protected abstract type: Type<T>;
    constructor(injectionService: InjectionService);
    getByType(type?: Type<T>): ComponentRef<T>[];
    create(bindings: PartialBindings): ComponentRef<T>;
    createByType(type: Type<T>, bindings: PartialBindings): ComponentRef<T>;
    destroy(instance: ComponentRef<T>): void;
    destroyAll(): void;
    destroyByType(type: Type<T>): void;
    protected injectComponent(type: Type<T>, bindings: PartialBindings, location?: ComponentRef<any> | ViewContainerRef): ComponentRef<T>;
    protected assignDefaults(bindings: Record<string, any>): PartialBindings;
    protected register(type: Type<T>, component: ComponentRef<T>): void;
}
