// what are actions

/// describe something that happened in the app
/// action contains identifier the identifier is string in a property called type
/// action can contain additional info with event called payload
/// action is a class that implements interface Action

import {Action} from '@ngrx/store';

export class AppActionTypes {
    static SET_NAME = '[App] - SET_NAME';
}


export class SetName implements Action {
    type = AppActionTypes.SET_NAME
    constructor(public payload: string) {}
}
