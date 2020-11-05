import React, { useEffect, useState } from "react";
import '../App.css';
import * as db from '../dataServices/SearchHistory';
import { IDictonaryData } from "../types";

interface ISearchHistoryProps {
  setDictionaryDefinition: Function
}

const SearchHistory = ({setDictionaryDefinition}:ISearchHistoryProps)=>{
    const [ history, setHistory ] = useState<IDictonaryData[]>();

    useEffect(()=>{
        db.getSearchHistory()
        .then(snapshot=>{
            setHistory(snapshot.docs.map(d=>{
              const { meanings, phonetics, word } = d.data();

              return {
                meanings,
                phonetics,
                word
              }

            }));
        })
    },[])

    return (
        <div>
            SearchHistory
            {
              history?.map((h,position)=>{
                if (!h.word) return;

                return (
                  <div onClick={()=>setDictionaryDefinition(h)}>
                    {position+1}-{h.word}
                  </div>
                )
            })}
        </div>
    );
}

export default SearchHistory;