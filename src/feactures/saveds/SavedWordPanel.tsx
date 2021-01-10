import React, { useEffect, useState } from "react";
import '../../App.css';
import * as db from '../../dataServices/WordSaved';
import { IDictonaryData } from "../../types";
import PanelBase from "../shared/PanelBase";

const SavedWordPanel = ()=>{
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
          words={saveds} />
    );
}

export default SavedWordPanel;