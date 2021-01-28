import React from "react";
import { fireEvent, render, screen } from "../../../utils/tests_utils/customRenderWithState";
import SavedWordPanel from "../SavedWordPanel";
import * as db from '../../../dataServices/WordSaved';
import { IDictonaryData } from "../../../types";
import moment from "moment";
import { setCurrentDefinition } from "../../search/actions";

const expectedDate = new Date("2017-12-19")
const expectedWord = {
    meanings: [],
    phonetics: [],
    word: "soy una palabra",
    date: expectedDate
};
const expectedSavedWord: Array<IDictonaryData> = [expectedWord];

function spyGetSavedWords() {
    const spyGetSavedWords = jest.spyOn(db, "getSavedWords");
    spyGetSavedWords.mockResolvedValue(expectedSavedWord);
}

describe("SavedWordPanel component", () => {

    it("should render SavedWordPanel component with info", async () => {
        spyGetSavedWords();
        const dateFormmated = moment(expectedDate).format("YYYY-MM-DD hh:mm A")
        render(<SavedWordPanel />)
        const wordElement = await screen.findByText(new RegExp(expectedWord.word))
        const dateElement = await screen.findByText(new RegExp(dateFormmated))

        expect(wordElement).toBeInTheDocument();
        expect(dateElement).toBeInTheDocument();
    })

    it("should dispatch SET_CURRENT_DEFINITION action when click word element", async () => {
        spyGetSavedWords()

        const { store } = render(<SavedWordPanel />)
        const wordElement = await screen.findByText(new RegExp(expectedWord.word))
        fireEvent.click(wordElement);
        expect(store.dispatch).toHaveBeenCalled();
        expect(store.dispatch).toHaveBeenLastCalledWith(setCurrentDefinition(expectedWord))
    })
})