import './App.css';
import Addition from './Components/R4/Addition';
import Block from './Components/R4/Block';
import Block2 from './Components/R4/Block2';
import Change from './Components/R4/Change.jsx';
import rand from './Utilities/random.js'

//Task Main
function App() {
  return (   
    <div className="App">
      <header className="App-header" style={{backgroundImage: 'linear-gradient(red, yellow)'}}>
        <Change number={rand(5, 25)}/>
        <Addition />
        <Block />
        <Block2 />
      </header>
    </div>
  );
}

export default App;
