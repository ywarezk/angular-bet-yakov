import { AppActionTypes } from "./actions";

// reducer

/// helps the store to decide how to change the state
/// reducer is a simple function
/// reducer is a function with switch statment on type of action
/// reducer gets in argument: the current state, action
/// reducer need to return in function the new state
/// state is immutable


const initialState = {
    name: 'yariv'
}

export function appReducer(state=initialState, action) {
    switch(action.type) {
        case AppActionTypes.SET_NAME:
            return {
                ...state,
                name: action.payload
            }
        default:
            return state;
    }
}