import {
    ISearchActions,
    ISearchState,
    SET_CURRENT_DEFINITION,
    SET_SEARCHED_WORD,
    CLEAR_CURRENT_DEFINITION,
    TOGGLE_SAVED
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
                searchedWord: "",
                dictionaryDefinition: action.definition,
            };
        case CLEAR_CURRENT_DEFINITION:
            return {
                ...state,
                dictionaryDefinition: initialState.dictionaryDefinition
            }
        case TOGGLE_SAVED:
            const isSaved = !(state.dictionaryDefinition.isSaved || false)
            
            return {
                ...state,
                dictionaryDefinition: {
                    ...state.dictionaryDefinition,
                    isSaved
                }
            }
        default:
            return state;
    }
}