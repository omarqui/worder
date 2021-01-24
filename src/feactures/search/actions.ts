import {
    ISearchActions,
    SET_CURRENT_DEFINITION,
    SET_SEARCHED_WORD,
    CLEAR_CURRENT_DEFINITION,
    TOGGLE_SAVED,
} from "./types";
import { IDictonaryData } from "../../types";
import { AppThunk } from '../../redux/appThunk';
import * as db from '../../dataServices/SearchHistory';
import { saveWordToFavorite } from '../../dataServices/WordSaved';
import { makeSearch } from "../../dataServices/SearchWord";

export function setCurrentDefinition(definition: IDictonaryData): ISearchActions {
    return {
        type: SET_CURRENT_DEFINITION,
        definition
    }
}

export function clearCurrentDefinition() {
    return {
        type: CLEAR_CURRENT_DEFINITION
    }
}

export function setSearchedWord(word: string): ISearchActions {
    return {
        type: SET_SEARCHED_WORD,
        word
    }
}

export function searchDefinition(word: string): AppThunk {
    return async (dispatch) => {
        const dictionaryData = await makeSearch(word);

        if (dictionaryData.word)
            db.saveWordToHistory(dictionaryData);

        dispatch(setCurrentDefinition(dictionaryData));
    }
}

function updateSaved(isSaved: boolean): ISearchActions {
    return {
        type: TOGGLE_SAVED,
        isSaved
    }
}

export function toggleSaved(): AppThunk {
    return async (dispach, getState) => {
        const currentWord = getState().search.dictionaryDefinition;
        const newSavedStated = await saveWordToFavorite(currentWord)
        
        dispach(updateSaved(newSavedStated));
        alert(newSavedStated ? "Guardado" : "Eliminado")
    }
}