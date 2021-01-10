import {
    ISearchActions,
    ISearchState,
    SET_CURRENT_DEFINITION,
    SET_SEARCHED_WORD
} from "./types";

const initialState: ISearchState = {
    searchedWord: "Adios",
    dictionaryDefinition: {
        word: "",
        meanings: [],
        phonetics: []
    }
}

export function SearchReducer(
    state: ISearchState = initialState,
    action: ISearchActions
): ISearchState {
    switch (action.type) {
        case SET_SEARCHED_WORD:
            return {
                ...state,
                searchedWord: action.word
            };
        case SET_CURRENT_DEFINITION:
            return {
                ...state,
                dictionaryDefinition: action.definition
            };
        default:
            return state;
    }
}