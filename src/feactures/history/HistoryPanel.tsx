import React, { useEffect, useState } from "react";
import '../../App.css';
import * as db from '../../dataServices/SearchHistory';
import { IDictonaryData } from "../../types";
import PanelBase from "../shared/PanelBase";

const HistoryPanel = ()=>{
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
          words={history} />
    );
}

export default HistoryPanel;