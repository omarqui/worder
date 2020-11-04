import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import MeaningSearch from "./components/MeaningSearch";
import { DefinitionsSection } from "./components/DefinitionsSection";
import * as db from './dataServices/SearchHistory';
import SearchHistory from "./components/SearchHistory";

function App() {
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

  const [dictionaryDefinition, setDictionaryDefinition] = useState<IDictonaryData>(
    {
      word: "",
      meanings: [],
      phonetics: []
    },
  );

  const setDictionaryDefinitionProxy = (dictionary:IDictonaryData) => {
    db.saveSearchHistory(dictionary);
    setDictionaryDefinition(dictionary)
  };

  useEffect(()=>{
    db.getSearchHistory().then(snapshot=>{
      snapshot.forEach(doc=>console.log(doc.data()));
    })
  })

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
              ) || <SearchHistory />
            }
          </div>
          {/* <div class="col-sm">
            One of three columns
          </div> */}
        </div>
      </div>

    </div>
  );
}

export default App;
