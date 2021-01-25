import React from 'react';
import "../../App.css";

import { ExampleText } from "./ExampleText";
import { DefinitionText } from "./DefinitionText";
import { IMeaning } from "../../types";
import { capitalizeWord } from '../../utils/HelperFuctions';

type MeaningProps = {
    meaning: IMeaning
}

export const MeaningCard = ({ meaning }: MeaningProps) => {
    return (
        <div className="card mt-2 mb-2">
            <div className="card-body">
                <h5 className="card-title">{capitalizeWord(meaning.partOfSpeech)}</h5>

                {meaning.definitions.map((def, position) => {
                    const isLastDefinition = (meaning.definitions.length === position + 1);
                    
                    return (
                        <div className={
                            isLastDefinition ? 
                                "lastDefinition" :
                                "definition"}>
                            <div className="definitionLayout">
                                <div className="definitionPosition">{position + 1}</div>
                                <div 
                                    className={ 
                                        isLastDefinition ? 
                                            "lastDefinitionWrapper" : 
                                            "definitionWrapper"
                                    }>
                                    <DefinitionText value={def.definition} />
                                    <ExampleText value={def.example} />
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}