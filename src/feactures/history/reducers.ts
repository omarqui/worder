import { 
    SET_HISTORY, 
    IHistoryActions, 
    IHistoryState 
} from "./types";

const initialState:IHistoryState = {
    logs: []
}

export function HistoryReducer(
    state: IHistoryState = initialState, 
    action: IHistoryActions 
): IHistoryState{
    switch (action.type) {
        case SET_HISTORY:
            return {
                ...state,
                logs: action.logs
            }
        default:
            return state;
    }
}