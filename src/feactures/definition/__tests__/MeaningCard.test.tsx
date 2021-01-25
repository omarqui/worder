import React from 'react'
import { render, screen } from "@testing-library/react";
import { MeaningCard } from "../MeaningCard";
import { IMeaning } from "../../../types";

describe("Meaning card component", () => {
    const expectedMeaning: IMeaning = {
        partOfSpeech: "adjective",
        definitions: [{
            definition: "(of an object) having an edge or point that is able to cut or pierce something.",
            example: "cut the cake with a very sharp knife"
        }, {
            definition: "Producing a sudden, piercing physical sensation or effect.",
            example: "I suddenly felt a sharp pain in my back"
        }, {
            definition: "Distinct in outline or detail; clearly defined.",
            example: "the job was a sharp contrast from her past life"
        }]
    }

    it("shoud render Meaning info", async () => {
        render(<MeaningCard meaning={expectedMeaning} />)

        const partOfSpeechTitle = screen.getByRole('heading', {
            name: new RegExp(expectedMeaning.partOfSpeech, "i")
        })
        expect(partOfSpeechTitle).toBeInTheDocument()
        expectedMeaning.definitions.forEach((definition, index) => {
            const definitionElement = screen.getByText(definition?.definition)
            const exampleElement = screen.getByText(new RegExp(definition?.example,"i"))
            const positionElement = screen.getByText(String(index+1))

            expect(definitionElement).toBeInTheDocument()
            expect(exampleElement).toBeInTheDocument()
            expect(positionElement).toBeInTheDocument()
        })
    })

    it("should render last Definition with special class", () => {
        const { container } = render(<MeaningCard meaning={expectedMeaning} />)

        const lastDefinition = container.querySelector('div > div > div ')
        expect(lastDefinition?.lastChild).toHaveClass("lastDefinition")
        expect(lastDefinition?.lastChild?.firstChild?.lastChild).toHaveClass("lastDefinitionWrapper")
    })
})
