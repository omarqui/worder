import React from 'react';
import "../../App.css";
import { MeaningCard } from "./MeaningCard";
import { IDictonaryData } from "../../types";
import { toggleSaved } from "../search/actions";
import { useDispatch } from "react-redux";

type DefinitionsSectionProps = {
    dictionary: IDictonaryData
}

export const DefinitionsSection = ({ dictionary }: DefinitionsSectionProps) => {
    const dispatch = useDispatch();
    const btnClass = `bntSave btn btn-${dictionary.isSaved ? "warning" : "outline-secundary"}`;

    return (
        <div >
            <div className="definitionSectionTitle">
                <h3 >Definitions for "{dictionary.word}"</h3>
                <button
                    className={btnClass}
                    onClick={() => { dispatch(toggleSaved()) }}>
                    <i className="bi bi-star-fill" ></i>
                </button>
            </div>
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