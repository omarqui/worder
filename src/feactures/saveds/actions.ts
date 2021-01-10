import {
    ISavedActions,
    SET_SAVED
} from "./types";
import { IDictonaryData } from "../../types";
import * as db from '../../dataServices/WordSaved';
import { AppThunk } from "../../redux/appThunk";

export function fetchSaved(): AppThunk {
    return dispatch => {
        db.getSavedWords()
            .then(snapshot => {
                const savedList = snapshot.docs.map(d => {
                    const { meanings, phonetics, word } = d.data();

                    return {
                        meanings,
                        phonetics,
                        word
                    }

                });
                dispatch(setSaved(savedList));
            })
    }
}

function setSaved(savedList: IDictonaryData[]): ISavedActions {
    return {
        type: SET_SAVED,
        savedList: savedList
    }
}