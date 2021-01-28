import { fetchSaved, setSaved } from "../actions";
import { SET_SAVED, ISavedActions } from "../types";
import { IDictonaryData } from "../../../types";
import * as db from '../../../dataServices/WordSaved';
import mockStore from "../../../redux/modkStore";

const expectedSaved: Array<IDictonaryData> = [{ meanings: [], phonetics: [], word: "hola" }];

describe('Saved`s plain actions', () => {
    it("should create an action to set saved", () => {
        const expectedAction: ISavedActions = {
            type: SET_SAVED,
            savedList: expectedSaved
        }
        expect(setSaved(expectedSaved)).toEqual(expectedAction);
    });
})

describe('saved`s fetch actions', () => {
    const spyGetSaved = jest.spyOn(db, "getSavedWords")

    afterEach(()=>{
        spyGetSaved.mockRestore()
    });

    it("creates SET_SAVED when fetch history is succefull", async () => {
        const expectedAction: ISavedActions = {
            type: SET_SAVED,
            savedList: expectedSaved
        }

        spyGetSaved.mockResolvedValue(expectedSaved)
        const store = mockStore()

        await store.dispatch(fetchSaved())
        expect(store.getActions()[0]).toEqual(expectedAction);
        expect(spyGetSaved).toHaveBeenCalled();
    })
})