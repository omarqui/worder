import { combineReducers } from "redux";
import { mainTabReducer } from "../feactures/mainTab/reducers";

const rootReducer = combineReducers({
    mainTab: mainTabReducer
});

export default rootReducer;