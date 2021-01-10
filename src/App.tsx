import logo from './logo.svg';
import React from 'react';
import './App.css';
import MeaningSearch from "./feactures/search/MeaningSearch";
import { DefinitionsSection } from "./feactures/definition/DefinitionsSection";
import { MainTab } from "./feactures/mainTab/MainTab";
import { useSelector, useDispatch} from "react-redux";
import { IRootState } from "./redux/store";
import { clearCurrentDefinition } from "./feactures/search/actions";

function App() {
  let dictionaryDefinition = useSelector((state:IRootState)=>state.search.dictionaryDefinition);
  
  const dispatch = useDispatch();

  return (
    <div className="App container">
      <div className="mainContainer col-xs-12 col-sm-10 col-md-8 col-lg-6">
        <div className="row">
          <div className="col-sm">
            <h2 
              className="title mt-5 mb-4"
              onClick={()=>{
                dispatch(clearCurrentDefinition())
              }}>
                Meaning Search
            </h2>
            <MeaningSearch />
            {
              (dictionaryDefinition.word &&
                <DefinitionsSection 
                    dictionary={dictionaryDefinition} />
              )
            }
          </div>
        </div>
        
        {!dictionaryDefinition.word &&
          <MainTab />
        }
      </div>

    </div>
  );
}

export default App;
