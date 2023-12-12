import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from './directives/directives.module';
import { InjectionService } from './services/injection/injection.service';
import { PipesModule } from './pipes/pipes.module';
import { ButtonModule } from './components/button/button.module';
import { CalendarModule } from './components/calendar/calendar.module';
import { CardModule } from './components/card/card.module';
import { CheckboxModule } from './components/checkbox/checkbox.module';
import { CodeEditorModule } from './components/code-editor/code-editor.module';
import { DateTimeModule } from './components/date-time/date-time.module';
import { DialogModule } from './components/dialog/dialog.module';
import { DrawerModule } from './components/drawer/drawer.module';
import { DropdownModule } from './components/dropdown/dropdown.module';
import { DropzoneModule } from './components/dropzone/dropzone.module';
import { HotkeysModule } from './components/hotkeys/hotkeys.module';
import { IconModule } from './components/icon/icon.module';
import { InputModule } from './components/input/input.module';
import { JsonEditorModule } from './components/json-editor/json-editor.module';
import { LoadingModule } from './components/loading/loading.module';
import { LongPressButtonModule } from './components/long-press/long-press-button.module';
import { NagModule } from './components/nag/nag.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { NavMenuModule } from './components/nav-menu/nav-menu.module';
import { NotificationModule } from './components/notification/notification.module';
import { OverlayModule } from './components/overlay/overlay.module';
import { PlusMenuModule } from './components/plus-menu/plus-menu.module';
import { ProgressSpinnerModule } from './components/progress-spinner/progress-spinner.module';
import { RadioButtonModule } from './components/radiobutton/radiobutton.module';
import { SectionModule } from './components/section/section.module';
import { SelectModule } from './components/select/select.module';
import { SliderModule } from './components/slider/slider.module';
import { SplitModule } from './components/split/split.module';
import { StepperModule } from './components/stepper/stepper.module';
import { TabsModule } from './components/tabs/tabs.module';
import { TipModule } from './components/tip/tip.module';
import { ToggleModule } from './components/toggle/toggle.module';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { TooltipModule } from './components/tooltip/tooltip.module';
import { TreeModule } from './components/tree/tree.module';
/**
 * Exported Modules
 */
import * as ɵngcc0 from '@angular/core';
const modules = [
    ButtonModule,
    CalendarModule,
    CardModule,
    CheckboxModule,
    CodeEditorModule,
    CommonModule,
    DateTimeModule,
    DialogModule,
    DirectivesModule,
    DrawerModule,
    DropdownModule,
    DropzoneModule,
    FormsModule,
    HotkeysModule,
    IconModule,
    InputModule,
    JsonEditorModule,
    LoadingModule,
    LongPressButtonModule,
    NagModule,
    NavbarModule,
    NavMenuModule,
    NotificationModule,
    OverlayModule,
    PipesModule,
    PlusMenuModule,
    ProgressSpinnerModule,
    RadioButtonModule,
    SectionModule,
    SelectModule,
    SliderModule,
    SplitModule,
    StepperModule,
    TabsModule,
    TipModule,
    ToggleModule,
    ToolbarModule,
    TooltipModule,
    TreeModule
];
const services = [InjectionService];
export class NgxUIModule {
}
NgxUIModule.ɵfac = function NgxUIModule_Factory(t) { return new (t || NgxUIModule)(); };
NgxUIModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgxUIModule });
NgxUIModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ providers: [...services], imports: [[...modules], ButtonModule,
        CalendarModule,
        CardModule,
        CheckboxModule,
        CodeEditorModule,
        CommonModule,
        DateTimeModule,
        DialogModule,
        DirectivesModule,
        DrawerModule,
        DropdownModule,
        DropzoneModule,
        FormsModule,
        HotkeysModule,
        IconModule,
        InputModule,
        JsonEditorModule,
        LoadingModule,
        LongPressButtonModule,
        NagModule,
        NavbarModule,
        NavMenuModule,
        NotificationModule,
        OverlayModule,
        PipesModule,
        PlusMenuModule,
        ProgressSpinnerModule,
        RadioButtonModule,
        SectionModule,
        SelectModule,
        SliderModule,
        SplitModule,
        StepperModule,
        TabsModule,
        TipModule,
        ToggleModule,
        ToolbarModule,
        TooltipModule,
        TreeModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxUIModule, [{
        type: NgModule,
        args: [{
                providers: [...services],
                exports: [...modules],
                imports: [...modules]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxUIModule, { imports: [ButtonModule,
        CalendarModule,
        CardModule,
        CheckboxModule,
        CodeEditorModule,
        CommonModule,
        DateTimeModule,
        DialogModule,
        DirectivesModule,
        DrawerModule,
        DropdownModule,
        DropzoneModule,
        FormsModule,
        HotkeysModule,
        IconModule,
        InputModule,
        JsonEditorModule,
        LoadingModule,
        LongPressButtonModule,
        NagModule,
        NavbarModule,
        NavMenuModule,
        NotificationModule,
        OverlayModule,
        PipesModule,
        PlusMenuModule,
        ProgressSpinnerModule,
        RadioButtonModule,
        SectionModule,
        SelectModule,
        SliderModule,
        SplitModule,
        StepperModule,
        TabsModule,
        TipModule,
        ToggleModule,
        ToolbarModule,
        TooltipModule,
        TreeModule], exports: [ButtonModule,
        CalendarModule,
        CardModule,
        CheckboxModule,
        CodeEditorModule,
        CommonModule,
        DateTimeModule,
        DialogModule,
        DirectivesModule,
        DrawerModule,
        DropdownModule,
        DropzoneModule,
        FormsModule,
        HotkeysModule,
        IconModule,
        InputModule,
        JsonEditorModule,
        LoadingModule,
        LongPressButtonModule,
        NagModule,
        NavbarModule,
        NavMenuModule,
        NotificationModule,
        OverlayModule,
        PipesModule,
        PlusMenuModule,
        ProgressSpinnerModule,
        RadioButtonModule,
        SectionModule,
        SelectModule,
        SliderModule,
        SplitModule,
        StepperModule,
        TabsModule,
        TipModule,
        ToggleModule,
        ToolbarModule,
        TooltipModule,
        TreeModule] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXVpLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LXVpL3NyYy9saWIvbmd4LXVpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsVUFBVSxFQUFF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QVEsQ0FBQyxrQkFDeEIsT0FBTyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsa0JBQ3JCLE9BQU8sRUFBRSxDQUFDLEdBQUc7S0FBTyxDQUFDLGNBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IERpcmVjdGl2ZXNNb2R1bGUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZGlyZWN0aXZlcy5tb2R1bGUnO1xuaW1wb3J0IHsgSW5qZWN0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaW5qZWN0aW9uL2luamVjdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBpcGVzTW9kdWxlIH0gZnJvbSAnLi9waXBlcy9waXBlcy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIubW9kdWxlJztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9jYXJkLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja2JveE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5tb2R1bGUnO1xuaW1wb3J0IHsgQ29kZUVkaXRvck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jb2RlLWVkaXRvci9jb2RlLWVkaXRvci5tb2R1bGUnO1xuaW1wb3J0IHsgRGF0ZVRpbWVNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0ZS10aW1lL2RhdGUtdGltZS5tb2R1bGUnO1xuaW1wb3J0IHsgRGlhbG9nTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cubW9kdWxlJztcbmltcG9ydCB7IERyYXdlck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9kcmF3ZXIvZHJhd2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUnO1xuaW1wb3J0IHsgRHJvcHpvbmVNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvZHJvcHpvbmUvZHJvcHpvbmUubW9kdWxlJztcbmltcG9ydCB7IEhvdGtleXNNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvaG90a2V5cy9ob3RrZXlzLm1vZHVsZSc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgSW5wdXRNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQubW9kdWxlJztcbmltcG9ydCB7IEpzb25FZGl0b3JNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvanNvbi1lZGl0b3IvanNvbi1lZGl0b3IubW9kdWxlJztcbmltcG9ydCB7IExvYWRpbmdNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBMb25nUHJlc3NCdXR0b25Nb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9uZy1wcmVzcy9sb25nLXByZXNzLWJ1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTmFnTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL25hZy9uYWcubW9kdWxlJztcbmltcG9ydCB7IE5hdmJhck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLm1vZHVsZSc7XG5pbXBvcnQgeyBOYXZNZW51TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL25hdi1tZW51L25hdi1tZW51Lm1vZHVsZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25Nb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9vdmVybGF5L292ZXJsYXkubW9kdWxlJztcbmltcG9ydCB7IFBsdXNNZW51TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3BsdXMtbWVudS9wbHVzLW1lbnUubW9kdWxlJztcbmltcG9ydCB7IFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9ncmVzcy1zcGlubmVyL3Byb2dyZXNzLXNwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IFJhZGlvQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3JhZGlvYnV0dG9uL3JhZGlvYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBTZWN0aW9uTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NlY3Rpb24vc2VjdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgU2VsZWN0TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QubW9kdWxlJztcbmltcG9ydCB7IFNsaWRlck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBTcGxpdE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zcGxpdC9zcGxpdC5tb2R1bGUnO1xuaW1wb3J0IHsgU3RlcHBlck1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9zdGVwcGVyL3N0ZXBwZXIubW9kdWxlJztcbmltcG9ydCB7IFRhYnNNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFicy90YWJzLm1vZHVsZSc7XG5pbXBvcnQgeyBUaXBNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvdGlwL3RpcC5tb2R1bGUnO1xuaW1wb3J0IHsgVG9nZ2xlTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RvZ2dsZS90b2dnbGUubW9kdWxlJztcbmltcG9ydCB7IFRvb2xiYXJNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLm1vZHVsZSc7XG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUnO1xuaW1wb3J0IHsgVHJlZU1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy90cmVlL3RyZWUubW9kdWxlJztcblxuLyoqXG4gKiBFeHBvcnRlZCBNb2R1bGVzXG4gKi9cbmNvbnN0IG1vZHVsZXMgPSBbXG4gIEJ1dHRvbk1vZHVsZSxcbiAgQ2FsZW5kYXJNb2R1bGUsXG4gIENhcmRNb2R1bGUsXG4gIENoZWNrYm94TW9kdWxlLFxuICBDb2RlRWRpdG9yTW9kdWxlLFxuICBDb21tb25Nb2R1bGUsXG4gIERhdGVUaW1lTW9kdWxlLFxuICBEaWFsb2dNb2R1bGUsXG4gIERpcmVjdGl2ZXNNb2R1bGUsXG4gIERyYXdlck1vZHVsZSxcbiAgRHJvcGRvd25Nb2R1bGUsXG4gIERyb3B6b25lTW9kdWxlLFxuICBGb3Jtc01vZHVsZSxcbiAgSG90a2V5c01vZHVsZSxcbiAgSWNvbk1vZHVsZSxcbiAgSW5wdXRNb2R1bGUsXG4gIEpzb25FZGl0b3JNb2R1bGUsXG4gIExvYWRpbmdNb2R1bGUsXG4gIExvbmdQcmVzc0J1dHRvbk1vZHVsZSxcbiAgTmFnTW9kdWxlLFxuICBOYXZiYXJNb2R1bGUsXG4gIE5hdk1lbnVNb2R1bGUsXG4gIE5vdGlmaWNhdGlvbk1vZHVsZSxcbiAgT3ZlcmxheU1vZHVsZSxcbiAgUGlwZXNNb2R1bGUsXG4gIFBsdXNNZW51TW9kdWxlLFxuICBQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gIFJhZGlvQnV0dG9uTW9kdWxlLFxuICBTZWN0aW9uTW9kdWxlLFxuICBTZWxlY3RNb2R1bGUsXG4gIFNsaWRlck1vZHVsZSxcbiAgU3BsaXRNb2R1bGUsXG4gIFN0ZXBwZXJNb2R1bGUsXG4gIFRhYnNNb2R1bGUsXG4gIFRpcE1vZHVsZSxcbiAgVG9nZ2xlTW9kdWxlLFxuICBUb29sYmFyTW9kdWxlLFxuICBUb29sdGlwTW9kdWxlLFxuICBUcmVlTW9kdWxlXG5dO1xuXG5jb25zdCBzZXJ2aWNlcyA9IFtJbmplY3Rpb25TZXJ2aWNlXTtcblxuQE5nTW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbLi4uc2VydmljZXNdLFxuICBleHBvcnRzOiBbLi4ubW9kdWxlc10sXG4gIGltcG9ydHM6IFsuLi5tb2R1bGVzXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hVSU1vZHVsZSB7fVxuIl19