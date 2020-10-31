import React, { useState, FunctionComponent } from 'react';
import "./App.css";

import { ExampleText } from "./ExampleText";
import { DefinitionText } from "./DefinitionText";

function capitalize(word:String){
    return word[0].toUpperCase()+word.substr(1);
}

type MeaningProps = {
    meaning: {
        partOfSpeech: string,
        definitions: { 
            definition: string, example: string
        }[],
    }
}

export const MeaningCard = ({ meaning }: MeaningProps) => {
    return (
        <div className="definitionWrapper card m-2">
            <div className="card-body">
                <h5 className="card-title">{capitalize(meaning.partOfSpeech)}</h5>

                {meaning.definitions.map((def, position) => (
                    <div className="definition">
                        <div className="definitionLayout">
                            <div className="definitionPosition">{position + 1}</div>
                            <div >
                                <DefinitionText value={def.definition} />
                                <ExampleText value={def.example} />
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}