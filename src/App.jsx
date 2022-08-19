import './App.css';
import Jura from './Components/R3/Jura.jsx';
//import Bala from './Components/R3/Bala.jsx';
//import Tvenkinys from './Components/R3/Tvenkinys';
//import rand from './Utilities/random.js'

const seaPlaners = [
  {id: 1, type: 'man', name: 'Lina', color: 'blue'},
  {id: 2, type: 'car', name: 'Opel', color: 'red'},
  {id: 3, type: 'animal', name: 'Vilkas', color: 'green'},
  {id: 4, type: 'fish', name: 'Ungurys', color: 'yellow'},
  {id: 5, type: 'man', name: 'Tomas', color: 'green'},
  {id: 6, type: 'animal', name: 'Bebras', color: 'red'},
  {id: 7, type: 'animal', name: 'Barsukas', color: 'green'},
  {id: 8, type: 'car', name: 'MB', color: 'blue'},
  {id: 9, type: 'car', name: 'ZIL', color: 'red'},
  {id: 10, type: 'man', name: 'Teta Toma', color: 'yellow'},
];

//Task Main
function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <Jura array={seaPlaners.type} />
      </header>    
    </div>
  );
}

//<Bala array = { seaPlaners } />
//<Tvenkinys array = { seaPlaners } />

export default App;
