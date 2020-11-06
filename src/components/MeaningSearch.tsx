import React, { useState, FunctionComponent }  from 'react';
import "../App.css";
import { IDictonaryData } from "../types";

interface IMeaningSearchProps {
    setDictionaryDefinition: Function
}

const MeaningSearch = ({setDictionaryDefinition} : IMeaningSearchProps)=>{
    const [searchedWord, setSearchedWord] = useState("hello");
    
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
                    className="search"
                    value={searchedWord} 
                    onChange={(e)=>{setSearchedWord(e.target.value)}}
                    onKeyDown={(e)=>{ 
                        if(e.key === "Enter") makeSearch(); 
                    }}/>

                {searchedWord && <button 
                    className="clearBotton" 
                    onClick={()=>{
                        setSearchedWord("");
                        makeSearch();
                    }}>Clear</button>}
            </div>
        </div>
    )
}

export default MeaningSearch;