import React from 'react';
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import * as actions from "./actions";

const MeaningSearch = ()=>{
    const searchedWord = useSelector((state:IRootState)=>
        state.search.searchedWord
    );

    const dispatch = useDispatch();

    const setSearchedWord = (word: string)=>{
        dispatch(actions.setSearchedWord(word));
    }

    function dispatchMakeSearch(word:string){
        dispatch(actions.makeSearchThunk(word));
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
                        if(e.key === "Enter") dispatchMakeSearch(searchedWord); 
                    }}/>

                {searchedWord && 
                    <button 
                        className="clearBotton btn btn-outline-danger" 
                        onClick={()=>{
                            setSearchedWord("");
                        }}>
                        <i className="bi bi-x-circle-fill"></i>
                    </button>
                }
            </div>
        </div>
    )
}

export default MeaningSearch;