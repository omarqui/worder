import { setHistory, fetchHistory } from "./actions";
import { SET_HISTORY, IHistoryActions } from "./types";
import { IDictonaryData } from "../../types";
import configureMockStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import * as db from '../../dataServices/SearchHistory';
import { Action } from "redux";
import { IRootState } from "../../redux/store";

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
    const midlewares = [thunk]
    type DispatchExts = ThunkDispatch<IRootState, undefined, Action<String>>;
    const mockStore = configureMockStore<IRootState, DispatchExts>(midlewares);

    it("creates SET_HISTORY when fetch history is succefull", async () => {
        const expectedAction: IHistoryActions = {
            type: SET_HISTORY,
            logs: expectedHistory
        }

        const spy = jest.spyOn(db, "getHistory")
        spy.mockResolvedValue(expectedHistory)
        const store = mockStore()

        await store.dispatch(fetchHistory())
        expect(store.getActions()[0]).toEqual(expectedAction);
        expect(spy).toHaveBeenCalled();
    })
})