import {
    IHistoryActions,
    SET_HISTORY
} from "./types";
import { IDictonaryData } from "../../types";
import * as db from '../../dataServices/SearchHistory';
import { AppThunk } from "../../redux/appThunk";

export function fetchHistory(): AppThunk {
    return dispatch => {
        db.getHistory()
            .then(snapshot => {
                const logs = snapshot.docs.map(d => {
                    const { meanings, phonetics, word } = d.data();

                    return {
                        id: d.id,
                        meanings,
                        phonetics,
                        word
                    }

                });

                dispatch(setHistory(logs));
            });
    }
}

function setHistory(logs: IDictonaryData[]): IHistoryActions {
    return {
        type: SET_HISTORY,
        logs: logs
    }
}