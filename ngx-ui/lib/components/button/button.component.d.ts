import { OnInit, OnChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ButtonState } from './button-state.enum';
import * as ɵngcc0 from '@angular/core';
export declare class ButtonComponent implements OnInit, OnChanges {
    promise?: Promise<any>;
    get disabled(): boolean;
    set disabled(v: boolean);
    get state(): ButtonState;
    set state(v: ButtonState);
    get timeout(): number;
    set timeout(v: number);
    readonly inProgress$: BehaviorSubject<boolean>;
    readonly active$: BehaviorSubject<boolean>;
    readonly success$: BehaviorSubject<boolean>;
    readonly fail$: BehaviorSubject<boolean>;
    private _state;
    private _disabled;
    private _timer;
    private _timeout;
    ngOnInit(): void;
    ngOnChanges(): void;
    updatePromise(): Promise<void>;
    updateState(): void;
    onClick(event: Event): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<ButtonComponent, "ngx-button", ["ngxButton"], { "disabled": "disabled"; "state": "state"; "timeout": "timeout"; "promise": "promise"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=button.component.d.ts.map