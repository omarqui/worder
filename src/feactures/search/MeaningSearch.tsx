import React from 'react';
import "../../App.css";
import { IDictonaryData } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import * as actions from "./actions";

interface IMeaningSearchProps {
    setDictionaryDefinition: Function
}

const MeaningSearch = ({setDictionaryDefinition} : IMeaningSearchProps)=>{
    const searchedWord = useSelector((state:IRootState)=>
        state.search.searchedWord
    );

    const dispatch = useDispatch();

    const setSearchedWord = (word: string)=>{
        dispatch(actions.setSearchedWord(word));
    }

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
                <span className="searchInputTitle">
                    Word
                </span>
                <input 
                    type="text" 
                    className="searchInput"
                    value={searchedWord} 
                    onChange={(e)=>{setSearchedWord(e.target.value)}}
                    onKeyDown={(e)=>{ 
                        if(e.key === "Enter") makeSearch(); 
                    }}/>

                {searchedWord && 
                    <button 
                        className="clearBotton btn btn-outline-danger" 
                        onClick={()=>{
                            setSearchedWord("");
                            makeSearch();
                        }}>
                        <i className="bi bi-x-circle-fill"></i>
                    </button>
                }
            </div>
        </div>
    )
}

export default MeaningSearch;