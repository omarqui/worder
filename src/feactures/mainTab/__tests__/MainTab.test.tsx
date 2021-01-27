import React from "react";
import { render, screen, waitFor, fireEvent } from "../../../utils/tests_utils/customRenderWithState";
import { MainTab } from "../MainTab";
import { changeTabSelected } from "../actions";
import firebaseMocker from "../../../utils/tests_utils/firebaseMock";
import moment from "moment";

describe("MainTab component", () => {
    it("should render with expected data", async () => {
        const expectedWord = {
            id: "",
            meanings: [],
            phonetics: [],
            word: "soy una palabra",
            date: new Date("2017-12-19")
        };
    
        const documentMocked = [{
            ...expectedWord,
            date: { toDate: () => expectedWord.date }
        }];

        const { firestoreMock } = firebaseMocker(documentMocked);
        
        render(<MainTab />)
        
        await waitFor(()=>expect(firestoreMock.get).toHaveBeenCalled())
        
        expect(screen.getByTestId("2")).toBeInTheDocument()
        expect(screen.getByText(new RegExp(expectedWord.word,"i"))).toBeInTheDocument()
        expect(screen.getByText(moment(expectedWord.date).format("YYYY-MM-DD hh:mm A"))).toBeInTheDocument()
    })

    it("should dispatch CHANGE_TAB_SELECTED when click history tab", async () => {
        const expectedWord = {
            id: "",
            meanings: [],
            phonetics: [],
            word: "soy una palabra",
            date: new Date("2017-12-19")
        };
    
        const documentMocked = [{
            ...expectedWord,
            date: { toDate: () => expectedWord.date }
        }];
        
        const firstMock = firebaseMocker(documentMocked);
        
        const { store } = render(<MainTab />)

        expect(firstMock.firestoreMock.get).toHaveBeenCalled()
        const historyTab = screen.getByText("History");        
        const secondMock = firebaseMocker(documentMocked);
        
        fireEvent.click(historyTab)
        await waitFor(()=>expect(secondMock.firestoreMock.get).toHaveBeenCalled())

        expect(store.dispatch).toHaveBeenCalledWith(changeTabSelected(1))
        expect(secondMock.firestoreMock.get).toHaveBeenCalled()
        expect(historyTab).toBeInTheDocument()
        expect(await screen.findByTestId("1")).toBeInTheDocument()
        expect(await screen.findByText(new RegExp(expectedWord.word,"i"))).toBeInTheDocument()
        expect(await screen.findByText(moment(expectedWord.date).format("YYYY-MM-DD hh:mm A"))).toBeInTheDocument()
    })
})