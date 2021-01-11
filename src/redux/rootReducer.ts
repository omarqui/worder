import { combineReducers } from "redux";
import { mainTabReducer } from "../feactures/mainTab/reducers";
import { SearchReducer } from "../feactures/search/reducers";
import { HistoryReducer } from "../feactures/history/reducers";
import { SavedReducer } from "../feactures/saveds/reducers";

const rootReducer = combineReducers({
    mainTab: mainTabReducer,
    search: SearchReducer,
    history: HistoryReducer,
    saved: SavedReducer
});

export default rootReducer;