import { EventEmitter, TemplateRef } from '@angular/core';
import { NotificationStyleType } from './notification-style-type.enum';
import * as ɵngcc0 from '@angular/core';
export declare class NotificationComponent {
    cssClass: string;
    title: string;
    body: string;
    template: TemplateRef<any>;
    styleType: NotificationStyleType;
    icon: string;
    timeout: false | number;
    get showClose(): boolean;
    set showClose(showClose: boolean);
    get pauseOnHover(): boolean;
    set pauseOnHover(pauseOnHover: boolean);
    get timestamp(): number;
    set timestamp(timestamp: number);
    close: EventEmitter<void>;
    pause: EventEmitter<void>;
    resume: EventEmitter<void>;
    get cssClasses(): string;
    get animationDuration(): string;
    readonly NotificationStyleType: typeof NotificationStyleType;
    timer: any;
    private _showClose?;
    private _pauseOnHover?;
    private _timestamp?;
    onMouseEnter(): void;
    onMouseLeave(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NotificationComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NotificationComponent, "ngx-notification", ["ngxNotification"], { "cssClass": "cssClass"; "showClose": "showClose"; "pauseOnHover": "pauseOnHover"; "timestamp": "timestamp"; "title": "title"; "body": "body"; "template": "template"; "styleType": "styleType"; "icon": "icon"; "timeout": "timeout"; }, { "close": "close"; "pause": "pause"; "resume": "resume"; }, never, never>;
}

//# sourceMappingURL=notification.component.d.ts.map