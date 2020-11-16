import React, { useEffect, useState } from "react";
import '../App.css';
import * as db from '../dataServices/SearchHistory';
import { IDictonaryData } from "../types";
import PanelBase from "./PanelBase";

interface IHistoryPanel {
  setDictionaryDefinition: Function
}

const HistoryPanel = ({setDictionaryDefinition}:IHistoryPanel)=>{
    const [ history, setHistory ] = useState<IDictonaryData[]>([]);

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
        <PanelBase
          title="History"
          words={history}
          setDictionaryDefinition={setDictionaryDefinition}/>
    );
}

export default HistoryPanel;