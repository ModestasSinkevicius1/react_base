import './App.css';
import Animals from './Components/RFC/Animals.jsx';
import PokemonsFetch from './Components/RFC/Task2/PokemonsFetch';
import BooksFetch from './Components/RFC/Task3/BooksFetch';

//Task Main
function App() {
  return (   
    <div className="App">
      <header className="App-header" style={{backgroundImage: 'linear-gradient(red, yellow)'}}>
        <Animals />
        <PokemonsFetch />
        <BooksFetch />
      </header>
    </div>
  );
}

export default App;
