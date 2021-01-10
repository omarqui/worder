import { CHANGE_TAB_SELECTED, IMainTabState, IMainTabActions } from "./types";

const initialState: IMainTabState = {
    tabSelected : 2
}

export function mainTabReducer(
                    state: IMainTabState = initialState, 
                    action: IMainTabActions): IMainTabState{
    switch (action.type) {
        case CHANGE_TAB_SELECTED:
            return {
                ...state,
                tabSelected : action.newTabIndex
            }
        default:
            return state;
    }
}