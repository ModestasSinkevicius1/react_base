import { useReducer, useState } from 'react';
import { add, addSome, minus, minuSome } from './Actions';
import './App.css';
import DataContext from './Components/RContextReducer/DataContext';
import countReducer from './Reducers/countReducer';
import Tevelis from './Components/RContextReducer/Tevelis';

//Task Main
function App() {

  const [star, setStar] = useState('');
  const [plus, setPlus] = useState('');

  const [count, countDispatch] = useReducer(countReducer, 10);
  const [number, setNumber] = useState(0);

  return (   
    <div className="App">
      <DataContext.Provider value={
        {
          star: star, plus,
        }
      }>
      <header className="App-header" style={{backgroundImage: 'linear-gradient(red, yellow)'}}>
        <h1>CONTEXT + REDUCER {count}</h1>
        <button class='btn' onClick={() => setStar(s => s + '*')}>Make Star</button>
        <button class='btn' onClick={() => setPlus(s => s + '+')}>Make Plus</button>
        <Tevelis />
        <button onClick={() => countDispatch(add())}>Add</button>
        <button onClick={() => countDispatch(minus())}>Minus</button>
        <input type='number' value={number} onChange={(e) => setNumber(e.target.value)}/>
        <button onClick={() => countDispatch(addSome(number))}>Add</button>
        <button onClick={() => countDispatch(minuSome(number))}>Minus</button>
      </header>
      </DataContext.Provider>
    </div>
  );
}

export default App;
