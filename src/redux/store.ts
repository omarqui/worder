import { createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer)

export type IRootState = ReturnType<typeof rootReducer>;
export default  store;