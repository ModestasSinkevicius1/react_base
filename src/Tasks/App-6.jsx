import '../Tasks/App-6.css';
import Addition2 from '../Components/R5/Addition2';
import Addition3 from '../Components/R5/Addition3';
import Tree from '../Components/R5/Tree.jsx';

//Task Main
function App() {
  return (   
    <div className="App">
      <header className="App-header" style={{backgroundImage: 'linear-gradient(red, yellow)'}}>
        <Tree />
        <Addition2 />
        <Addition3 />
      </header>
    </div>
  );
}

export default App;
