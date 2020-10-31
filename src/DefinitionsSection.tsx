import React, { useState, FunctionComponent } from 'react';
import "./App.css";
import { MeaningCard } from "./MeaningCard";

type IDictonaryData = {
    word: string,
    phonetics: {
        text: string,
        audio: string
    }[],
    meanings: {
        partOfSpeech: string,
        definitions: {
            definition: string, example: string
        }[],
    }[],
}

type DefinitionsSectionProps = {
    dictionary: IDictonaryData
}

export const DefinitionsSection = ({dictionary} : DefinitionsSectionProps ) => {
    return (
        <div>
            <h3>Definitions for "{dictionary.word}"</h3>
            {
                dictionary.meanings.map(meaning => (
                    <MeaningCard
                        key={meaning.partOfSpeech}
                        meaning={meaning} />
                ))
            }
        </div>
    )
}