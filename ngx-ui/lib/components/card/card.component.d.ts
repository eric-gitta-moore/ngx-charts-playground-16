import { EventEmitter } from '@angular/core';
import { CardStatus } from './card-status.enum';
import { CardOrientation } from './card-orientation.enum';
import { CardAppearance } from './card-appearance.enum';
import * as ɵngcc0 from '@angular/core';
export declare class CardComponent {
    get horizontal(): boolean;
    get vertical(): boolean;
    get flat(): boolean;
    disabled: boolean;
    orientation: CardOrientation;
    status: CardStatus;
    statusTooltip: string;
    selectable: boolean;
    selected: boolean;
    error: boolean;
    outlineText: string;
    appearance: CardAppearance;
    hideAccent: boolean;
    select: EventEmitter<boolean>;
    outlineClick: EventEmitter<void>;
    onOutlineClick($event: any): void;
    onSelect($event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<CardComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<CardComponent, "ngx-card", ["ngxCard"], { "disabled": "disabled"; "orientation": "orientation"; "selectable": "selectable"; "selected": "selected"; "appearance": "appearance"; "hideAccent": "hideAccent"; "status": "status"; "statusTooltip": "statusTooltip"; "error": "error"; "outlineText": "outlineText"; }, { "select": "select"; "outlineClick": "outlineClick"; }, never, ["*"]>;
}

//# sourceMappingURL=card.component.d.ts.map