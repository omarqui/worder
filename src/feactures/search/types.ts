import { IDictonaryData } from "../../types";

export const SET_SEARCHED_WORD = "SET_SEARCHED_WORD";
export const SET_CURRENT_DEFINITION = "SET_CURRENT_DEFINITION";
export const CLEAR_CURRENT_DEFINITION = "CLEAR_CURRENT_DEFINITION";

export interface ISearchState {
    searchedWord: string,
    dictionaryDefinition: IDictonaryData
}

interface ISetSearchWordAction{
    type: typeof SET_SEARCHED_WORD,
    word: string
}

interface ISetCurrentDefinition{
    type: typeof SET_CURRENT_DEFINITION,
    definition: IDictonaryData
}

interface IClearCurrentDefinition{
    type: typeof CLEAR_CURRENT_DEFINITION
}

export type ISearchActions = ISetCurrentDefinition | 
                             ISetSearchWordAction | 
                             IClearCurrentDefinition;