import logo from './logo.svg';
import './App.css';
import MeaningSearch from "./MeaningSearch.tsx";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="row">
          {/* <div class="col-sm">
            One of three columns
          </div> */}
          <div class="col-sm">
            <MeaningSearch />
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
