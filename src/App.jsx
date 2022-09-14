import './App.css';
//import Square from './Components/RTotalRecall/T1/Square';
import randColor from './Utilities/random_color.js'

function App(){

  return (
      <div className="App">
        <header className='App-header'>
          <h1>Total Recall 1</h1>
          {/* <Square rect='red' /> */}
          <button onClick={() => console.log('%c Būūū', `color: ${randColor()}`)} className='btn'>Būūū</button>
        </header>
      </div>
  );

}

export default App;
