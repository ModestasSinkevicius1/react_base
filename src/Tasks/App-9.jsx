import '../Tasks/App-9.css';
import Circles from '../Components/R8/Circles';
import Undo from '../Components/R8/Undo';

//Task Main
function App() {

  return (   
    <div className="App">
      <header className="App-header" style={{backgroundImage: 'linear-gradient(red, yellow)'}}>
        <Undo />
        <Circles />
      </header>
    </div>
  );
}

export default App;
