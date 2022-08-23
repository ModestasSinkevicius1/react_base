import '../Tasks/App-state.css'
import Dog from '../Components/RState/Dog.jsx';

//Task Main
function App() {
  return (   
    <div className="App">
      <header className="App-header" style={{backgroundImage: 'linear-gradient(red, yellow)'}}>
        <h1>STATE</h1>
        <Dog color='crimson' />
      </header>
    </div>
  );
}

export default App;
