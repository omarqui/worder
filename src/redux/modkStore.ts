import configureMockStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { IRootState } from "./store";

const midlewares = [thunk]
type DispatchExts = ThunkDispatch<IRootState, undefined, Action<String>>;
const mockStore = configureMockStore<IRootState, DispatchExts>(midlewares);

export default mockStore;