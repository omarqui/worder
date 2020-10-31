import React, { useState, FunctionComponent }  from 'react';
import "./App.css";

interface IMeaningSearchProps {
    setDictionaryDefinition: Function
}

const MeaningSearch = ({setDictionaryDefinition} : IMeaningSearchProps)=>{
    interface IDictonaryData{
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

    const [searchedWord, setSearchedWord] = useState("hola");
    
    function makeSearch(){
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`)
            .then(res=> res.json())
            .then((data:IDictonaryData[])=>{
                const dictionaryData: IDictonaryData = data.length > 0 ? data[0] : {
                    meanings: [],
                    phonetics: [],
                    word: ""
                };
                
                setDictionaryDefinition(dictionaryData);
            });
    }

    return (
        <div>
            <div className = "MeaningSearch">
                <span>Word</span>
                <input 
                    type="text" 
                    value={searchedWord} 
                    onChange={(e)=>{setSearchedWord(e.target.value)}}
                    onKeyDown={(e)=>{ 
                        if(e.key === "Enter") makeSearch(); 
                    }}/>
            </div>
        </div>
    )
}

export default MeaningSearch;