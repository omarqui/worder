import { combineReducers } from "redux";
import { mainTabReducer } from "../feactures/mainTab/MainTab.reducer";

const rootReducer = combineReducers({
    mainTab: mainTabReducer
});

export default rootReducer;