import React from "react";
import { fireEvent, render, screen, store } from "../../../utils/tests_utils/customRenderWithState";
import HistoryPanel from "../HistoryPanel";
import * as db from '../../../dataServices/SearchHistory';
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
const expectedHistory: Array<IDictonaryData> = [expectedWord];

function spyHistory() {
    const spyGetHistory = jest.spyOn(db, "getHistory");
    spyGetHistory.mockResolvedValue(expectedHistory);
}
it("should render HistoryPanel component with info", async () => {
    spyHistory();
    const dateFormmated = moment(expectedDate).format("YYYY-MM-DD hh:mm A")
    render(<HistoryPanel />)
    const wordElement = await screen.findByText(new RegExp(expectedWord.word))
    const dateElement = await screen.findByText(new RegExp(dateFormmated))

    expect(wordElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
})

it("should dispatch SET_CURRENT_DEFINITION action when click word element", async () => {
    const spyStoreDispatch = jest.spyOn(store, "dispatch")
    spyHistory()

    render(<HistoryPanel />)
    const wordElement = await screen.findByText(new RegExp(expectedWord.word))
    fireEvent.click(wordElement);
    expect(spyStoreDispatch).toHaveBeenCalled();
    expect(spyStoreDispatch).toHaveBeenLastCalledWith(setCurrentDefinition(expectedWord))
})