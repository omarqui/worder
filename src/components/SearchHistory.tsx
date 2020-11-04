import React, { useEffect, useState } from "react";
import '../App.css';
import * as db from '../dataServices/SearchHistory';

interface IDictonaryData {
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

const SearchHistory = ()=>{
    const [ history, setHistory ] = useState<IDictonaryData[]>();
    useEffect(()=>{
        db.getSearchHistory()
        .then(snapshot=>{
            setHistory(snapshot.docs.map(d=>d.data));
        })
    })

    return (
        <div>
            SearchHistory
        </div>
    );
}

export default SearchHistory;