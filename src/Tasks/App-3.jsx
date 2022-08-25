import '../Tasks/App-3.css';
import Bala from '../Components/R3/Task1/Bala.jsx';
import Tvenkinys from '../Components/R3/Task2/Tvenkinys.jsx';
import Jura from '../Components/R3/Task3/Jura.jsx';
import Vandenynas from '../Components/R3/Task4/Vandenynas.jsx';
import Pasaulis from '../Components/R3/Task5/Pasaulis.jsx';

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
        <Bala array = { seaPlaners } />
        <Tvenkinys array = { seaPlaners } />
        <Jura array={seaPlaners} />
        <Vandenynas array={seaPlaners} />
        <Pasaulis array={seaPlaners} />
      </header>    
    </div>
  );
}

export default App;
