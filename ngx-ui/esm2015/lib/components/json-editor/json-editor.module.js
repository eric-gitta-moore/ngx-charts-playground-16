import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PipesModule } from '../../pipes/pipes.module';
import { InputModule } from '../input/input.module';
import { ButtonModule } from '../button/button.module';
import { TooltipModule } from '../tooltip/tooltip.module';
import { DropdownModule } from '../dropdown/dropdown.module';
import { CodeEditorModule } from '../code-editor/code-editor.module';
import { IconModule } from '../icon/icon.module';
import { TabsModule } from '../tabs/tabs.module';
import { ToggleModule } from '../toggle/toggle.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { SelectModule } from '../select/select.module';
import { JsonEditorComponent } from './json-editor/json-editor.component';
import { JsonEditorNodeComponent } from './json-editor/json-editor-node/json-editor-node.component';
import { ObjectNodeComponent } from './json-editor/json-editor-node/node-types/object-node/object-node.component';
import { ArrayNodeComponent } from './json-editor/json-editor-node/node-types/array-node/array-node.component';
import { JsonEditorFlatComponent } from './json-editor-flat/json-editor-flat.component';
import { JsonEditorNodeFlatComponent } from './json-editor-flat/json-editor-node-flat/json-editor-node-flat.component';
import { ArrayNodeFlatComponent } from './json-editor-flat/json-editor-node-flat/node-types/array-node-flat/array-node-flat.component';
import { ObjectNodeFlatComponent } from './json-editor-flat/json-editor-node-flat/node-types/object-node-flat/object-node-flat.component';
import { PropertyConfigComponent } from './json-editor-flat/json-editor-node-flat/node-types/property-config/property-config.component';
import { OrderableInputsListComponent } from './json-editor-flat/orderable-inputs-list/orderable-inputs-list.component';
import { ObjectValuesPipe } from './object-values.pipe';
import { JsonEditorNodeInfoComponent } from './json-editor-flat/json-editor-node-flat/node-types/node-info/node-info.component';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../dropdown/dropdown.component';
import * as ɵngcc3 from '../dropdown/dropdown-toggle.directive';
import * as ɵngcc4 from '../icon/icon.component';
import * as ɵngcc5 from '../dropdown/dropdown-menu.directive';
import * as ɵngcc6 from '@angular/forms';
import * as ɵngcc7 from '../tooltip/tooltip.directive';
import * as ɵngcc8 from '@angular/cdk/drag-drop';
export class JsonEditorModule {
}
JsonEditorModule.ɵfac = function JsonEditorModule_Factory(t) { return new (t || JsonEditorModule)(); };
JsonEditorModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: JsonEditorModule });
JsonEditorModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[
            CheckboxModule,
            CommonModule,
            DragDropModule,
            FormsModule,
            PipesModule,
            InputModule,
            ButtonModule,
            CodeEditorModule,
            TooltipModule,
            DropdownModule,
            IconModule,
            ToggleModule,
            SelectModule,
            TabsModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(JsonEditorModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    JsonEditorComponent,
                    JsonEditorNodeComponent,
                    ObjectNodeComponent,
                    ArrayNodeComponent,
                    JsonEditorFlatComponent,
                    JsonEditorNodeFlatComponent,
                    JsonEditorNodeInfoComponent,
                    ArrayNodeFlatComponent,
                    ObjectNodeFlatComponent,
                    PropertyConfigComponent,
                    OrderableInputsListComponent,
                    ObjectValuesPipe
                ],
                exports: [
                    JsonEditorComponent,
                    JsonEditorNodeComponent,
                    ObjectNodeComponent,
                    ArrayNodeComponent,
                    JsonEditorFlatComponent,
                    JsonEditorNodeFlatComponent,
                    JsonEditorNodeInfoComponent,
                    ArrayNodeFlatComponent,
                    ObjectNodeFlatComponent,
                    PropertyConfigComponent
                ],
                imports: [
                    CheckboxModule,
                    CommonModule,
                    DragDropModule,
                    FormsModule,
                    PipesModule,
                    InputModule,
                    ButtonModule,
                    CodeEditorModule,
                    TooltipModule,
                    DropdownModule,
                    IconModule,
                    ToggleModule,
                    SelectModule,
                    TabsModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(JsonEditorModule, { declarations: function () { return [JsonEditorComponent,
        JsonEditorNodeComponent,
        ObjectNodeComponent,
        ArrayNodeComponent,
        JsonEditorFlatComponent,
        JsonEditorNodeFlatComponent,
        JsonEditorNodeInfoComponent,
        ArrayNodeFlatComponent,
        ObjectNodeFlatComponent,
        PropertyConfigComponent,
        OrderableInputsListComponent,
        ObjectValuesPipe]; }, imports: function () { return [CheckboxModule,
        CommonModule,
        DragDropModule,
        FormsModule,
        PipesModule,
        InputModule,
        ButtonModule,
        CodeEditorModule,
        TooltipModule,
        DropdownModule,
        IconModule,
        ToggleModule,
        SelectModule,
        TabsModule]; }, exports: function () { return [JsonEditorComponent,
        JsonEditorNodeComponent,
        ObjectNodeComponent,
        ArrayNodeComponent,
        JsonEditorFlatComponent,
        JsonEditorNodeFlatComponent,
        JsonEditorNodeInfoComponent,
        ArrayNodeFlatComponent,
        ObjectNodeFlatComponent,
        PropertyConfigComponent]; } }); })();
ɵngcc0.ɵɵsetComponentScope(ObjectNodeComponent, [ɵngcc1.NgForOf, ɵngcc2.DropdownComponent, ɵngcc3.DropdownToggleDirective, ɵngcc4.IconComponent, ɵngcc5.DropdownMenuDirective, ɵngcc1.NgIf, ɵngcc6.DefaultValueAccessor, ɵngcc6.NgControlStatus, ɵngcc6.NgModel, ɵngcc7.TooltipDirective, JsonEditorNodeComponent], [ObjectValuesPipe, ɵngcc1.KeyValuePipe]);
ɵngcc0.ɵɵsetComponentScope(ArrayNodeComponent, [ɵngcc1.NgForOf, ɵngcc2.DropdownComponent, ɵngcc3.DropdownToggleDirective, ɵngcc4.IconComponent, ɵngcc5.DropdownMenuDirective, ɵngcc1.NgIf, JsonEditorNodeComponent], []);
ɵngcc0.ɵɵsetComponentScope(ArrayNodeFlatComponent, [ɵngcc1.NgForOf, JsonEditorNodeFlatComponent, ɵngcc1.NgIf, ɵngcc2.DropdownComponent, ɵngcc3.DropdownToggleDirective, ɵngcc5.DropdownMenuDirective, PropertyConfigComponent], []);
ɵngcc0.ɵɵsetComponentScope(ObjectNodeFlatComponent, [ɵngcc8.CdkDropList, ɵngcc1.NgForOf, ɵngcc8.CdkDrag, JsonEditorNodeFlatComponent, ɵngcc1.NgIf, ɵngcc2.DropdownComponent, ɵngcc3.DropdownToggleDirective, ɵngcc5.DropdownMenuDirective, ɵngcc8.CdkDragHandle, ɵngcc8.CdkDragPlaceholder, ɵngcc1.NgStyle, JsonEditorNodeInfoComponent,
    PropertyConfigComponent], [ObjectValuesPipe, ɵngcc1.KeyValuePipe, ɵngcc1.TitleCasePipe]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1lZGl0b3IubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2pzb24tZWRpdG9yL2pzb24tZWRpdG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXhELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUUvRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUN2SCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrRkFBK0YsQ0FBQztBQUN2SSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpR0FBaUcsQ0FBQztBQUMxSSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrRkFBK0YsQ0FBQztBQUN4SSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUN4SCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtRkFBbUYsQ0FBQzs7Ozs7Ozs7OztBQThDaEksTUFBTSxPQUFPLGdCQUFnQjtBQUFHOzRDQTVDL0IsUUFBUSxTQUFDLGtCQUNSLFlBQVksRUFBRTtXQUNaLG1CQUFtQixzQkFDbkIsdUJBQXVCO01BQ3ZCLG1CQUFtQixzQkFDbkIsa0JBQWtCO1dBQ2xCO01BQXVCO0VBQ3ZCO0NBQTJCLHNCQUMzQjs7QUFBMkIsc0JBQzNCO21CQUFzQjtlQUN0QjtRQUF1QjtHQUN2Qix1QkFBdUI7b0JBQ3ZCO3dCQUE0QjtvQkFDNUI7VUFBZ0I7S0FDakI7UUFDRCxPQUFPLEVBQUUsc0JBQ1AsbUJBQW1CLHNCQUNuQix1QkFBdUI7YUFDdkI7UUFBbUI7YUFDbkIsa0JBQWtCO3FCQUNsQjtHQUF1QixzQkFDdkI7T0FBMkIsc0JBQzNCO2VBQTJCLHNCQUMzQjttQkFBc0Isc0JBQ3RCO21CQUF1QixzQkFDdkI7ZUFBdUIsa0JBQ3hCO0VBQ0QsT0FBTyxFQUFFLHNCQUNQO0dBQWMsc0JBQ2QsWUFBWTtjQUNaLGNBQWM7S0FDZCxXQUFXLHNCQUNYLFdBQVc7cUJBQ1gsV0FBVztpQkFDWDtVQUFZO0tBQ1osZ0JBQWdCO0VBQ2hCLGFBQWEsc0JBQ2I7TUFBYyxzQkFDZCxVQUFVO21CQUNWLFlBQVk7YUFDWixZQUFZO0VBQ1osVUFBVSxrQkFDWCxjQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2RkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERyYWdEcm9wTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5cbmltcG9ydCB7IFBpcGVzTW9kdWxlIH0gZnJvbSAnLi4vLi4vcGlwZXMvcGlwZXMubW9kdWxlJztcbmltcG9ydCB7IElucHV0TW9kdWxlIH0gZnJvbSAnLi4vaW5wdXQvaW5wdXQubW9kdWxlJztcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9idXR0b24ubW9kdWxlJztcbmltcG9ydCB7IFRvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi90b29sdGlwL3Rvb2x0aXAubW9kdWxlJztcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAnLi4vZHJvcGRvd24vZHJvcGRvd24ubW9kdWxlJztcbmltcG9ydCB7IENvZGVFZGl0b3JNb2R1bGUgfSBmcm9tICcuLi9jb2RlLWVkaXRvci9jb2RlLWVkaXRvci5tb2R1bGUnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgVGFic01vZHVsZSB9IGZyb20gJy4uL3RhYnMvdGFicy5tb2R1bGUnO1xuaW1wb3J0IHsgVG9nZ2xlTW9kdWxlIH0gZnJvbSAnLi4vdG9nZ2xlL3RvZ2dsZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hlY2tib3hNb2R1bGUgfSBmcm9tICcuLi9jaGVja2JveC9jaGVja2JveC5tb2R1bGUnO1xuaW1wb3J0IHsgU2VsZWN0TW9kdWxlIH0gZnJvbSAnLi4vc2VsZWN0L3NlbGVjdC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBKc29uRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9qc29uLWVkaXRvci9qc29uLWVkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSnNvbkVkaXRvck5vZGVDb21wb25lbnQgfSBmcm9tICcuL2pzb24tZWRpdG9yL2pzb24tZWRpdG9yLW5vZGUvanNvbi1lZGl0b3Itbm9kZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT2JqZWN0Tm9kZUNvbXBvbmVudCB9IGZyb20gJy4vanNvbi1lZGl0b3IvanNvbi1lZGl0b3Itbm9kZS9ub2RlLXR5cGVzL29iamVjdC1ub2RlL29iamVjdC1ub2RlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcnJheU5vZGVDb21wb25lbnQgfSBmcm9tICcuL2pzb24tZWRpdG9yL2pzb24tZWRpdG9yLW5vZGUvbm9kZS10eXBlcy9hcnJheS1ub2RlL2FycmF5LW5vZGUuY29tcG9uZW50JztcblxuaW1wb3J0IHsgSnNvbkVkaXRvckZsYXRDb21wb25lbnQgfSBmcm9tICcuL2pzb24tZWRpdG9yLWZsYXQvanNvbi1lZGl0b3ItZmxhdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSnNvbkVkaXRvck5vZGVGbGF0Q29tcG9uZW50IH0gZnJvbSAnLi9qc29uLWVkaXRvci1mbGF0L2pzb24tZWRpdG9yLW5vZGUtZmxhdC9qc29uLWVkaXRvci1ub2RlLWZsYXQuY29tcG9uZW50JztcbmltcG9ydCB7IEFycmF5Tm9kZUZsYXRDb21wb25lbnQgfSBmcm9tICcuL2pzb24tZWRpdG9yLWZsYXQvanNvbi1lZGl0b3Itbm9kZS1mbGF0L25vZGUtdHlwZXMvYXJyYXktbm9kZS1mbGF0L2FycmF5LW5vZGUtZmxhdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgT2JqZWN0Tm9kZUZsYXRDb21wb25lbnQgfSBmcm9tICcuL2pzb24tZWRpdG9yLWZsYXQvanNvbi1lZGl0b3Itbm9kZS1mbGF0L25vZGUtdHlwZXMvb2JqZWN0LW5vZGUtZmxhdC9vYmplY3Qtbm9kZS1mbGF0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9wZXJ0eUNvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vanNvbi1lZGl0b3ItZmxhdC9qc29uLWVkaXRvci1ub2RlLWZsYXQvbm9kZS10eXBlcy9wcm9wZXJ0eS1jb25maWcvcHJvcGVydHktY29uZmlnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlcmFibGVJbnB1dHNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9qc29uLWVkaXRvci1mbGF0L29yZGVyYWJsZS1pbnB1dHMtbGlzdC9vcmRlcmFibGUtaW5wdXRzLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IE9iamVjdFZhbHVlc1BpcGUgfSBmcm9tICcuL29iamVjdC12YWx1ZXMucGlwZSc7XG5pbXBvcnQgeyBKc29uRWRpdG9yTm9kZUluZm9Db21wb25lbnQgfSBmcm9tICcuL2pzb24tZWRpdG9yLWZsYXQvanNvbi1lZGl0b3Itbm9kZS1mbGF0L25vZGUtdHlwZXMvbm9kZS1pbmZvL25vZGUtaW5mby5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBKc29uRWRpdG9yQ29tcG9uZW50LFxuICAgIEpzb25FZGl0b3JOb2RlQ29tcG9uZW50LFxuICAgIE9iamVjdE5vZGVDb21wb25lbnQsXG4gICAgQXJyYXlOb2RlQ29tcG9uZW50LFxuICAgIEpzb25FZGl0b3JGbGF0Q29tcG9uZW50LFxuICAgIEpzb25FZGl0b3JOb2RlRmxhdENvbXBvbmVudCxcbiAgICBKc29uRWRpdG9yTm9kZUluZm9Db21wb25lbnQsXG4gICAgQXJyYXlOb2RlRmxhdENvbXBvbmVudCxcbiAgICBPYmplY3ROb2RlRmxhdENvbXBvbmVudCxcbiAgICBQcm9wZXJ0eUNvbmZpZ0NvbXBvbmVudCxcbiAgICBPcmRlcmFibGVJbnB1dHNMaXN0Q29tcG9uZW50LFxuICAgIE9iamVjdFZhbHVlc1BpcGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEpzb25FZGl0b3JDb21wb25lbnQsXG4gICAgSnNvbkVkaXRvck5vZGVDb21wb25lbnQsXG4gICAgT2JqZWN0Tm9kZUNvbXBvbmVudCxcbiAgICBBcnJheU5vZGVDb21wb25lbnQsXG4gICAgSnNvbkVkaXRvckZsYXRDb21wb25lbnQsXG4gICAgSnNvbkVkaXRvck5vZGVGbGF0Q29tcG9uZW50LFxuICAgIEpzb25FZGl0b3JOb2RlSW5mb0NvbXBvbmVudCxcbiAgICBBcnJheU5vZGVGbGF0Q29tcG9uZW50LFxuICAgIE9iamVjdE5vZGVGbGF0Q29tcG9uZW50LFxuICAgIFByb3BlcnR5Q29uZmlnQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDaGVja2JveE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRHJhZ0Ryb3BNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUGlwZXNNb2R1bGUsXG4gICAgSW5wdXRNb2R1bGUsXG4gICAgQnV0dG9uTW9kdWxlLFxuICAgIENvZGVFZGl0b3JNb2R1bGUsXG4gICAgVG9vbHRpcE1vZHVsZSxcbiAgICBEcm9wZG93bk1vZHVsZSxcbiAgICBJY29uTW9kdWxlLFxuICAgIFRvZ2dsZU1vZHVsZSxcbiAgICBTZWxlY3RNb2R1bGUsXG4gICAgVGFic01vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEpzb25FZGl0b3JNb2R1bGUge31cbiJdfQ==