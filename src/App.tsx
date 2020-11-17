import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import MeaningSearch from "./feactures/search/MeaningSearch";
import { DefinitionsSection } from "./feactures/definition/DefinitionsSection";
import * as db from './dataServices/SearchHistory';
import HistoryPanel from "./feactures/history/HistoryPanel";
import { IDictonaryData } from "./types";
import SavedWordPanel from './feactures/saveds/SavedWordPanel';

function App() {
  const [dictionaryDefinition, setDictionaryDefinition] = useState<IDictonaryData>(
    {
      word: "",
      meanings: [],
      phonetics: []
    },
  );

  const setDictionaryDefinitionProxy = (dictionary:IDictonaryData) => {
    if (dictionary.word)
      db.saveSearchHistory(dictionary);

    setDictionaryDefinition(dictionary)
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {/* <div class="col-sm">
            One of three columns
          </div> */}
          <div className="col-sm">
            <h2 className="title">Meaning Search</h2>
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
        <div className="row">
          <div className="col-sm">
            {!dictionaryDefinition.word &&
              <HistoryPanel setDictionaryDefinition={(data:IDictonaryData)=>setDictionaryDefinition(data)} />
            }
          </div>
          <div className="col-sm">
            {!dictionaryDefinition.word &&
              <SavedWordPanel setDictionaryDefinition={(data:IDictonaryData)=>setDictionaryDefinition(data)} />
            }
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
