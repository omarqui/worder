import React, { useEffect, useState } from "react";
import '../App.css';
import * as db from '../dataServices/WordSaved';
import { IDictonaryData } from "../types";
import PanelBase from "./PanelBase";

interface ISavedWordPanel {
  setDictionaryDefinition: Function
}

const SavedWordPanel = ({setDictionaryDefinition}:ISavedWordPanel)=>{
    const [ saveds, setSaveds ] = useState<IDictonaryData[]>([]);

    useEffect(()=>{
        db.getSavedWords()
        .then(snapshot=>{
            setSaveds(snapshot.docs.map(d=>{
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
          title="Saveds"
          words={saveds}
          setDictionaryDefinition={setDictionaryDefinition}/>
    );
}

export default SavedWordPanel;