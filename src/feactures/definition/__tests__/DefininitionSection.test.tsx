import React from "react";
import { render, screen, fireEvent, store } from "../../../utils/tests_utils/customRenderWithState";
import { DefinitionsSection } from "../DefinitionsSection";
import { TOGGLE_SAVED } from "../../search/types";
import * as db from '../../../dataServices/WordSaved';
import mockStore from "../../../redux/modkStore";
import { setCurrentDefinition } from "../../search/actions";
describe("Definition section component", () => {
    const expectedWord = {
        meanings: [],
        phonetics: [],
        word: "soy una palabra",
        date: new Date("2017-12-19")
    };

    describe("general state", () => {
        beforeEach(() => {
            render(<DefinitionsSection dictionary={expectedWord} />)
        })
        it("should render with word", async () => {

            const title = await screen.findByText(new RegExp(expectedWord.word))
            expect(title).toBeInTheDocument()
        })

        it("should fire saveWordToFavorite dataservice", async () => {
            store.dispatch(setCurrentDefinition(expectedWord))
            const spySaveToFavorite = jest.spyOn(db, "saveWordToFavorite");
            spySaveToFavorite.mockResolvedValue(true);

            const button = await screen.findByRole("button")
            fireEvent.click(button)
            
            expect(spySaveToFavorite).toHaveBeenCalledWith(expectedWord)
        })
    })

    describe("when isSave is undefine", () => {
        beforeEach(() => {
            render(
                <DefinitionsSection dictionary={expectedWord} />
            )
        })

        testIsSaveUndefineOrFalse();
    })

    describe("when isSave is false", () => {
        beforeEach(() => {
            render(
                <DefinitionsSection dictionary={{
                    ...expectedWord,
                    isSaved: false
                }} />
            )
        })

        testIsSaveUndefineOrFalse()
    })

    describe("when isSave is true", () => {
        beforeEach(() => {
            render(
                <DefinitionsSection dictionary={{
                    ...expectedWord,
                    isSaved: true
                }} />
            )
        })

        it("button should render with btn-warning class", async () => {
            const button = await screen.findByRole("button")
            expect(button.className).toContain("btn-warning")
        })
    })
})

function testIsSaveUndefineOrFalse() {
    it("button should render with btn-outline-secundary class", async () => {
        const button = await screen.findByRole("button");
        expect(button.className).toContain("btn-outline-secundary");
    });
}
