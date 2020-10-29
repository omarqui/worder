import React, { useState, FunctionComponent }  from 'react';
import "./App.css";



function capitalize(word:String){
    return word[0].toUpperCase()+word.substr(1);
}

const MeaningSearch:FunctionComponent = ()=>{
    interface IDataDictonary{
        partOfSpeech: String,
        definitions: { definition: string, example: string}[],
    }

    const [searchedWord, setSearchedWord] = useState("hola");   
    const [definitions, setDefinitions] = useState([
        {
            part:"noun", 
            definition: "This is a definition",
            example: "This is a example"
        },
        {
            part:"verb", 
            definition: "Another def",
            example: "This is another a example"
        }
    ]);
    
    function makeSearch(){
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`)
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
                const defs = data[0].meanings.map((def:IDataDictonary)=>{
                    
                    const defi = (def?.definitions.length > 0 ? def?.definitions[0]?.definition : '');
                    return {
                        part: def.partOfSpeech,
                        definition: defi,
                        example: def?.definitions[0]?.example
                    }
                });
                setDefinitions(defs);
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
                <h3>Definitions</h3>
                {
                    definitions.map(def=>(
                        <div className="definition" key={def.part}>
                            <div>
                                <span className="enfasis">{capitalize(def.part)}:</span>
                                <span>{def.definition}</span>
                            </div>

                            <div>
                                <span className="enfasis">Example:</span>
                                <span className="example">"{def.example}"</span>
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