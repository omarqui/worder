import { 
    SET_SAVED, 
    ISavedActions, 
    ISavedState 
} from "./types";

export const initialState:ISavedState = {
    savedList: []
}

export function SavedReducer(
    state: ISavedState = initialState, 
    action: ISavedActions 
): ISavedState{
    switch (action.type) {
        case SET_SAVED:
            return {
                ...state,
                savedList: action.savedList
            }
        default:
            return state;
    }
}