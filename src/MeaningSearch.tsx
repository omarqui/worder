import React, { useState, FunctionComponent }  from 'react';
import "./App.css";

function capitalize(word:String){
    return word[0].toUpperCase()+word.substr(1);
}

const MeaningSearch:FunctionComponent = ()=>{
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
    const [dictionaryDefinition, setDictionaryDefinition] = useState<IDictonaryData>(
        {
           word: "",
           meanings: [],
           phonetics: []
        },
    );
    
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
            <h2>Meaning Search</h2>
            <div className = "MeaningSearch">
                <span>Word</span>
                <input 
                    type="text" 
                    value={searchedWord} 
                    onChange={(e)=>{setSearchedWord(e.target.value)}}
                    onKeyDown={(e)=>{ 
                        if(e.key === "Enter") makeSearch(); 
                    }}/>
                <div>
                <h3>Definitions for "{dictionaryDefinition.word}"</h3>
                {
                    dictionaryDefinition.meanings.map(meaning=>(
                        <div className="definitionWrapper card m-2" key={meaning.partOfSpeech}>
                            <div className="card-body">
                                <h5 className="card-title">{capitalize(meaning.partOfSpeech)}</h5>
                                
                                {meaning.definitions.map((def,position)=>(
                                <div className="definition">
                                    <div>
                                        <span>{position+1}</span>
                                        <span>
                                            <div>
                                                <span>{def.definition}</span>
                                            </div>

                                            <div>
                                                <span className="enfasis">Example:</span>
                                                <span className="example">"{def.example}"</span>
                                            </div>
                                        </span>
                                    </div>
                                    
                                </div>
                                ))}
                            </div>
                        </div>

                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default MeaningSearch;