import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import MiniCrud from './Components/R10/MiniCrud';
import DataContext from './Contexts/DataContext';
import { create, read } from './Functions/localStorage'

const key = 'animals';

//Task Main
function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [records, setRecords] = useState(null);
  const [data, setData] = useState(null);


  useEffect(()=>{
    setRecords(read(key));
  }, [lastUpdate])

  useEffect(()=>{
    if(data === null){
      return;
    }
    
    create(key, data);
    
    setLastUpdate(Date.now());
  }, [data]);

  return (
    <DataContext.Provider value={{
      setData,
      records,
      key,
    }}>   
      <div className="App">
        <header className="App-header" style={{backgroundImage: 'linear-gradient(red, yellow)'}}>
          <MiniCrud />
        </header>
      </div>
    </DataContext.Provider>
  );
}

export default App;
