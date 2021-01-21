import { setHistory, fetchHistory } from "./actions";
import { SET_HISTORY, IHistoryActions } from "./types";
import { IDictonaryData } from "../../types";
import * as db from '../../dataServices/SearchHistory';
import mockStore from "../../redux/modkStore";

const expectedHistory: Array<IDictonaryData> = [{ meanings: [], phonetics: [], word: "hola" }];

describe('history`s plain actions', () => {
    it("should create an action to set history", () => {
        const expectedAction: IHistoryActions = {
            type: SET_HISTORY,
            logs: expectedHistory
        }
        expect(setHistory(expectedHistory)).toEqual(expectedAction);
    });
})

describe('history`s fetch actions', () => {
    const spyGetHistory = jest.spyOn(db, "getHistory")

    afterEach(()=>{
        spyGetHistory.mockRestore()
    });

    it("creates SET_HISTORY when fetch history is succefull", async () => {
        const expectedAction: IHistoryActions = {
            type: SET_HISTORY,
            logs: expectedHistory
        }

        spyGetHistory.mockResolvedValue(expectedHistory)
        const store = mockStore()

        await store.dispatch(fetchHistory())
        expect(store.getActions()[0]).toEqual(expectedAction);
        expect(spyGetHistory).toHaveBeenCalled();
    })
})