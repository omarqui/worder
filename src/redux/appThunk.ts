import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { IRootState } from "./store";

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    IRootState,
    unknown,
    Action<string>
>