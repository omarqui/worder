import { SavedReducer, initialState } from "../reducers";
import { setSaved } from "../actions";
import { ISavedActions } from "../types";
import { IDictonaryData } from "../../../types";

describe("saved`s reducers", () => {
    it("should return the initial state", () => {
        const emptyAction = <ISavedActions><unknown>{ type: "", savedList: [] };
        expect(SavedReducer(undefined, emptyAction)).toEqual(initialState);
    });

    it("should handle SET_SAVED when state is empty", () => {
        const saved: Array<IDictonaryData> = [{ meanings: [], phonetics: [], word: "hola" }];
        const expectedState = {
            savedList: saved
        }
        expect(SavedReducer(undefined, setSaved(saved))).toEqual(expectedState)
    });

    it("should handle SET_SAVED when state is no empty", () => {
        const history : Array<IDictonaryData> = [{ meanings: [], phonetics: [], word: "hola" }];
        const previusState = {
            savedList: history
        }
        const newHistory: Array<IDictonaryData> = [];
        const expectedState = {
            savedList: newHistory
        }

        expect(SavedReducer(previusState, setSaved(newHistory))).toEqual(expectedState);
    })
})

