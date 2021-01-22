import { HistoryReducer, initialState } from "./reducers";
import { setHistory } from "./actions";
import { IHistoryActions } from "./types";
import { IDictonaryData } from "../../types";

describe("history`s reducers", () => {
    it("should return the initial state", () => {
        const emptyAction = <IHistoryActions><unknown>{ type: "", logs: [] };
        expect(HistoryReducer(undefined, emptyAction)).toEqual(initialState);
    });

    it("should handle SET_HISTORY when state is empty", () => {
        const history: Array<IDictonaryData> = [{ meanings: [], phonetics: [], word: "hola" }];
        const expectedState = {
            logs: history
        }
        expect(HistoryReducer(undefined, setHistory(history))).toEqual(expectedState)
    });

    it("should handle SET_HISTORY when state is no empty", () => {
        const history : Array<IDictonaryData> = [{ meanings: [], phonetics: [], word: "hola" }];
        const previusState = {
            logs: history
        }
        const newHistory: Array<IDictonaryData> = [];
        const expectedState = {
            logs: newHistory
        }

        expect(HistoryReducer(previusState, setHistory(newHistory))).toEqual(expectedState);
    })
})

