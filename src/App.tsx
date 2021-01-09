import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import MeaningSearch from "./feactures/search/MeaningSearch";
import { DefinitionsSection } from "./feactures/definition/DefinitionsSection";
import * as db from './dataServices/SearchHistory';
import { IDictonaryData } from "./types";
import { MainTab } from "./feactures/mainTab/MainTab";

function App() {
  const defaultDictionaryDefinition = {
    word: "",
    meanings: [],
    phonetics: []
  };

  const [dictionaryDefinition, setDictionaryDefinition] = useState<IDictonaryData>(
    defaultDictionaryDefinition,
  );

  const setDictionaryDefinitionProxy = (dictionary:IDictonaryData) => {
    if (dictionary.word)
      db.saveSearchHistory(dictionary);

    setDictionaryDefinition(dictionary)
  };

  return (
    <div className="App container">
      <div className="mainContainer col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
        <div className="row">
          <div className="col-sm">
            <h2 
              className="title mt-5 mb-4"
              onClick={()=>{
                setDictionaryDefinition(defaultDictionaryDefinition)
              }}>
                Meaning Search
            </h2>
            <MeaningSearch setDictionaryDefinition={(dictionary: IDictonaryData) => {
              setDictionaryDefinitionProxy(dictionary)
            }} />
            {
              (dictionaryDefinition.word &&
                <DefinitionsSection 
                dictionary={dictionaryDefinition} />
              )
            }
          </div>
        </div>
        
        {!dictionaryDefinition.word &&
          <MainTab setDictionaryDefinition={(data:IDictonaryData)=>setDictionaryDefinition(data)} />
        }
      </div>

    </div>
  );
}

export default App;
