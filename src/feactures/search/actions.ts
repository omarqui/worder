import { 
    ISearchActions, 
    SET_CURRENT_DEFINITION, 
    SET_SEARCHED_WORD } from "./types";
import { IDictonaryData } from "../../types";

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

