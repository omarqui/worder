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
import { saveWord } from '../../dataServices/WordSaved';

export function setCurrentDefinition (definition : IDictonaryData) : ISearchActions {
    return {
        type: SET_CURRENT_DEFINITION,
        definition
    }
}

export function clearCurrentDefinition (){
    return {
        type: CLEAR_CURRENT_DEFINITION
    }
}

export function setSearchedWord (word: string) : ISearchActions{
    return {
        type: SET_SEARCHED_WORD,
        word
    }
}

export function searchDefinition(word: string) : AppThunk {
    return async (dispatch) =>{
        const dictionaryData = await makeSearch(word);
        
        if (dictionaryData.word)
            db.saveSearchHistory(dictionaryData);

        dispatch(setCurrentDefinition(dictionaryData));
    }
}

function updateSaved(isSaved:boolean): ISearchActions{
    return {
        type: TOGGLE_SAVED,
        isSaved
    }
}

export function toggleSaved(): AppThunk{
    return (dispach,getState)=>{
        const currentWord = getState().search.dictionaryDefinition;
        const isSaved = !(currentWord.isSaved || false);

        dispach(updateSaved(isSaved));

        const newCurrentWord = getState().search.dictionaryDefinition;
        saveWord(newCurrentWord).then(()=>{
            alert(isSaved ? "Guardado" : "Eliminado")
        });
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


