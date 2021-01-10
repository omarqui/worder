import { 
    ISearchActions, 
    SET_CURRENT_DEFINITION, 
    SET_SEARCHED_WORD } from "./types";
import { IDictonaryData } from "../../types";
import { AppThunk } from '../../redux/appThunk';
import * as db from '../../dataServices/SearchHistory';

export function setCurrentDefinition (definition : IDictonaryData) : ISearchActions {
    return {
        type: SET_CURRENT_DEFINITION,
        definition
    }
}

export function setSearchedWord (word: string) : ISearchActions{
    return {
        type: SET_SEARCHED_WORD,
        word
    }
}

export function makeSearchThunk(word: string) : AppThunk {
    return async (dispatch) =>{
        const dictionaryData = await makeSearch(word);
        
        if (dictionaryData.word)
            db.saveSearchHistory(dictionaryData);

        dispatch(setCurrentDefinition(dictionaryData));
    }
}

async function makeSearch(word: string): Promise<IDictonaryData>{
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data:IDictonaryData[] = await res.json();
    
    const dictionaryData: IDictonaryData = data.length > 0 ? data[0] : {
        meanings: [],
        phonetics: [],
        word: ""
    };
    
    return dictionaryData;
}

