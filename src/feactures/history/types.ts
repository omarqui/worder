import { IDictonaryData } from "../../types";

export const SET_HISTORY = "SET_HISTORY";

export interface IHistoryState{
    logs: IDictonaryData[]
}

interface ISetHistoryAction{
    type: typeof SET_HISTORY,
    logs: IDictonaryData[]
}

export type IHistoryActions = ISetHistoryAction;