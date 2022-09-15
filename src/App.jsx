import { useEffect, useState } from 'react';
import './App.css';
import Buttons from './Components/RTotalRecall/T3/Buttons';
import Square from './Components/RTotalRecall/T1/Square';
import randColor from './Utilities/random_color.js'

function App(){

  const [showText, setShowText] = useState(0);
  const [clr, setClr] = useState(randColor());

  useEffect(()=>{
    setClr(randColor());
  }, [showText]);

  return (
      <div className="App">
        <header className='App-header'>
          <h1>Total Recall 1</h1>
          <Square rect='red' />
          <button onClick={() => console.log('%c Būūū', `color: ${randColor()}`)} className='btn'>Būūū</button>
          {showText !== 0 ? <h2 style={{color: clr}}>{showText}</h2> : null}
          <Buttons setShowText={setShowText} startFrom={0} />
          <hr></hr>
          <Buttons setShowText={setShowText} startFrom={50}/>
          <hr></hr>
          <Buttons setShowText={setShowText} startFrom={100}/>
        </header>
      </div>
  );

}

export default App;
