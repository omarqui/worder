import { IDictonaryData } from "../../types";

export const SET_SAVED = "SET_SAVED";

export interface ISavedState{
    savedList: IDictonaryData[]
}

interface ISetSavedAction{
    type: typeof SET_SAVED,
    savedList: IDictonaryData[]
}

export type ISavedActions = ISetSavedAction;