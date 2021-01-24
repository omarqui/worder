import {
    ISavedActions,
    SET_SAVED
} from "./types";
import { IDictonaryData } from "../../types";
import * as db from '../../dataServices/WordSaved';
import { AppThunk } from "../../redux/appThunk";

export function fetchSaved (): AppThunk {
    return async dispatch => {
        const savedList = await db.getSavedWords()
        dispatch(setSaved(savedList));
    }
}

function setSaved(savedList: IDictonaryData[]): ISavedActions {
    return {
        type: SET_SAVED,
        savedList: savedList
    }
}