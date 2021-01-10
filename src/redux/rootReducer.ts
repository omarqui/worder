import { combineReducers } from "redux";
import { mainTabReducer } from "../feactures/mainTab/reducers";
import { SearchReducer } from "../feactures/search/reducers";
const rootReducer = combineReducers({
    mainTab: mainTabReducer,
    search: SearchReducer
});

export default rootReducer;