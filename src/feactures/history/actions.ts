import {
    IHistoryActions,
    SET_HISTORY
} from "./types";
import { IDictonaryData } from "../../types";
import * as db from '../../dataServices/SearchHistory';
import { AppThunk } from "../../redux/appThunk";

export function fetchHistory(): AppThunk {
    return async (dispatch) => {
        const logs = await db.getHistory();
        
        dispatch(setHistory(logs));
    }
}

export function setHistory(logs: IDictonaryData[]): IHistoryActions {
    return {
        type: SET_HISTORY,
        logs: logs
    }
}