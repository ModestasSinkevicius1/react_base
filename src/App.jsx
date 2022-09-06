import './App.css';
import MiniCrud from './Components/R10/MiniCrud';

//Task Main
function App() {
  return (   
    <div className="App">
      <header className="App-header" style={{backgroundImage: 'linear-gradient(red, yellow)'}}>
        <MiniCrud />
      </header>
    </div>
  );
}

export default App;
