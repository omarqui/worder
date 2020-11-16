import React from "react";
import '../App.css';
import { IDictonaryData } from "../types";

interface IPanelBase {
  setDictionaryDefinition: Function,
  title: String,
  words: IDictonaryData[]
}

const PanelBase = ({setDictionaryDefinition, title, words}:IPanelBase)=>{
    return (
        <div>
            <h4>
              {title}
            </h4>
            <div>
            {
              words.map((h,position)=>{
                if (!h.word) return;

                return (
                  <div 
                    className="panelItem" 
                    onClick={()=>setDictionaryDefinition(h)}>
                    {position+1}. {h.word}
                  </div>
                )
            })}
            </div>
        </div>
    );
}

export default PanelBase;