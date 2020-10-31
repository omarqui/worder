import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import MeaningSearch from "./MeaningSearch";
import { DefinitionsSection } from "./DefinitionsSection";
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

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {/* <div class="col-sm">
            One of three columns
          </div> */}
          <div className="col-sm">
            <h2>Meaning Search</h2>
            <MeaningSearch setDictionaryDefinition={(dictionary: IDictonaryData) => {
              setDictionaryDefinition(dictionary)
            }} />
            <DefinitionsSection dictionary={dictionaryDefinition} />
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
