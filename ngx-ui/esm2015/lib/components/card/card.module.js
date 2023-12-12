import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconModule } from '../icon/icon.module';
import { TooltipModule } from '../tooltip/tooltip.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './card-header.component';
import { CardBodyDirective, CardTagDirective, CardTitleDirective, CardSubtitleDirective, CardSectionDirective } from './card';
import { CardAvatarComponent } from './card-avatar/card-avatar.component';
import { CardPlaceholderComponent } from './card-placeholder/card-placeholder.component';
import { CardFooterComponent } from './card-footer.component';
import * as ɵngcc0 from '@angular/core';
export class CardModule {
}
CardModule.ɵfac = function CardModule_Factory(t) { return new (t || CardModule)(); };
CardModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: CardModule });
CardModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[CommonModule, FormsModule, IconModule, TooltipModule, CheckboxModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(CardModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    CardComponent,
                    CardHeaderComponent,
                    CardBodyDirective,
                    CardTagDirective,
                    CardTitleDirective,
                    CardSubtitleDirective,
                    CardSectionDirective,
                    CardAvatarComponent,
                    CardFooterComponent,
                    CardPlaceholderComponent
                ],
                exports: [
                    CardComponent,
                    CardHeaderComponent,
                    CardBodyDirective,
                    CardTagDirective,
                    CardTitleDirective,
                    CardSubtitleDirective,
                    CardSectionDirective,
                    CardAvatarComponent,
                    CardFooterComponent,
                    CardPlaceholderComponent
                ],
                imports: [CommonModule, FormsModule, IconModule, TooltipModule, CheckboxModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(CardModule, { declarations: function () { return [CardComponent,
        CardHeaderComponent,
        CardBodyDirective,
        CardTagDirective,
        CardTitleDirective,
        CardSubtitleDirective,
        CardSectionDirective,
        CardAvatarComponent,
        CardFooterComponent,
        CardPlaceholderComponent]; }, imports: function () { return [CommonModule, FormsModule, IconModule, TooltipModule, CheckboxModule]; }, exports: function () { return [CardComponent,
        CardHeaderComponent,
        CardBodyDirective,
        CardTagDirective,
        CardTitleDirective,
        CardSubtitleDirective,
        CardSectionDirective,
        CardAvatarComponent,
        CardFooterComponent,
        CardPlaceholderComponent]; } }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL2NvbXBvbmVudHMvY2FyZC9jYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3JCLE1BQU0sUUFBUSxDQUFDO0FBQ2hCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQTRCOUQsTUFBTSxPQUFPLFVBQVU7QUFBRztzQ0EzQnpCLFFBQVEsU0FBQyxrQkFDUixZQUFZO0NBQUUsc0JBQ1osYUFBYSxzQkFDYixtQkFBbUI7b0JBQ25CLGlCQUFpQixzQkFDakIsZ0JBQWdCLHNCQUNoQixrQkFBa0Isc0JBQ2xCO2NBQXFCLHNCQUNyQixvQkFBb0Isc0JBQ3BCLG1CQUFtQjthQUNuQjtRQUFtQjthQUNuQjtLQUF3QixrQkFDekI7TUFDRCxPQUFPLEVBQUUsc0JBQ1A7U0FBYSxzQkFDYjtXQUFtQixzQkFDbkI7WUFBaUIsc0JBQ2pCO1VBQWdCLHNCQUNoQjtPQUFrQixzQkFDbEI7UUFBcUIsc0JBQ3JCO1NBQW9CLHNCQUNwQjtTQUFtQixzQkFDbkI7S0FBbUI7UUFDbkI7S0FBd0Isa0JBQ3pCO01BQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFO0FBQVcsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFO0lBQWMsQ0FBQyxjQUNoRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vdG9vbHRpcC90b29sdGlwLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja2JveE1vZHVsZSB9IGZyb20gJy4uL2NoZWNrYm94L2NoZWNrYm94Lm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgQ2FyZEJvZHlEaXJlY3RpdmUsXG4gIENhcmRUYWdEaXJlY3RpdmUsXG4gIENhcmRUaXRsZURpcmVjdGl2ZSxcbiAgQ2FyZFN1YnRpdGxlRGlyZWN0aXZlLFxuICBDYXJkU2VjdGlvbkRpcmVjdGl2ZVxufSBmcm9tICcuL2NhcmQnO1xuaW1wb3J0IHsgQ2FyZEF2YXRhckNvbXBvbmVudCB9IGZyb20gJy4vY2FyZC1hdmF0YXIvY2FyZC1hdmF0YXIuY29tcG9uZW50JztcbmltcG9ydCB7IENhcmRQbGFjZWhvbGRlckNvbXBvbmVudCB9IGZyb20gJy4vY2FyZC1wbGFjZWhvbGRlci9jYXJkLXBsYWNlaG9sZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkLWZvb3Rlci5jb21wb25lbnQnO1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2FyZENvbXBvbmVudCxcbiAgICBDYXJkSGVhZGVyQ29tcG9uZW50LFxuICAgIENhcmRCb2R5RGlyZWN0aXZlLFxuICAgIENhcmRUYWdEaXJlY3RpdmUsXG4gICAgQ2FyZFRpdGxlRGlyZWN0aXZlLFxuICAgIENhcmRTdWJ0aXRsZURpcmVjdGl2ZSxcbiAgICBDYXJkU2VjdGlvbkRpcmVjdGl2ZSxcbiAgICBDYXJkQXZhdGFyQ29tcG9uZW50LFxuICAgIENhcmRGb290ZXJDb21wb25lbnQsXG4gICAgQ2FyZFBsYWNlaG9sZGVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDYXJkQ29tcG9uZW50LFxuICAgIENhcmRIZWFkZXJDb21wb25lbnQsXG4gICAgQ2FyZEJvZHlEaXJlY3RpdmUsXG4gICAgQ2FyZFRhZ0RpcmVjdGl2ZSxcbiAgICBDYXJkVGl0bGVEaXJlY3RpdmUsXG4gICAgQ2FyZFN1YnRpdGxlRGlyZWN0aXZlLFxuICAgIENhcmRTZWN0aW9uRGlyZWN0aXZlLFxuICAgIENhcmRBdmF0YXJDb21wb25lbnQsXG4gICAgQ2FyZEZvb3RlckNvbXBvbmVudCxcbiAgICBDYXJkUGxhY2Vob2xkZXJDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEljb25Nb2R1bGUsIFRvb2x0aXBNb2R1bGUsIENoZWNrYm94TW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkTW9kdWxlIHt9XG4iXX0=