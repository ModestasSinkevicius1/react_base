import '../Tasks/App-5.css';
import Addition from '../Components/R4/Addition';
import Block from '../Components/R4/Block';
import Block2 from '../Components/R4/Block2';
import Change from '../Components/R4/Change.jsx';
import rand from '../Utilities/random.js'
import Multiply from '../Components/R4/Multiply.jsx';

//Task Main
function App() {
  return (   
    <div className="App">
      <header className="App-header" style={{backgroundImage: 'linear-gradient(red, yellow)'}}>
        <Change number={rand(5, 25)}/>
        <Addition />
        <Block />
        <Block2 />
        <Multiply />
      </header>
    </div>
  );
}

export default App;
