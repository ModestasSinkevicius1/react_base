import Dog from '../Components/RState/FuncDog.jsx';
import '../Tasks/App-state.css'

//Task Main
function App() {
  return (   
    <div className="App">
      <header className="App-header" style={{backgroundImage: 'linear-gradient(red, yellow)'}}>
        <h1>STATE</h1>
        <Dog color='crimson'/>
      </header>
    </div>
  );
}

export default App;
