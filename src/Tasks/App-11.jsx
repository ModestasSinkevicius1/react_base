import { useEffect } from 'react';
import { useState } from 'react';
import '../Tasks/App-11.css';
import EditPaspirtukas from '../Components/R11/EditPaspirtukas';
import Paspirtukai from '../Components/R11/Paspirtukai.jsx';
import DataContext from '../Contexts/DataContext';
import { createKolt, readKolt, erase, update } from '../Functions/koltLS';
import Statistics from '../Components/R11/Statistics';

const key = 'paspirtukai';

function App(){

  const [data, setData] = useState(null);
  const [paspirtukai, setPaspirtukai] = useState(null);
  const [delCard, setDelCard] = useState(null);

  const [editCard, setEditCard] = useState(null);
  const [modalEdit, setModalEdit] = useState(null);

  const [lastUpdate, setLastUpdate] = useState(Date.now());

  useEffect(()=>{
    if(data !== null){
      createKolt(key, data);
      setLastUpdate(Date.now());
    }
  }, [data])

  useEffect(()=>{
    setPaspirtukai(readKolt(key));
  }, [lastUpdate])

  useEffect(()=>{
    if(delCard !== null){
      erase(key, delCard.id);
      setLastUpdate(Date.now());
    }
  }, [delCard])

  useEffect(()=>{
    if(editCard !== null){
      update(key, editCard, editCard.id);
      setModalEdit(null);
      setLastUpdate(Date.now());
    }
  }, [editCard])

  return (
      <div className="App">
        <DataContext.Provider value={{
          setData,
          paspirtukai,
          setDelCard,
          modalEdit,
          setModalEdit,
          setEditCard,
          setPaspirtukai,
        }}>
          <header className="App-header" style={{backgroundImage: 'linear-gradient(red, yellow)'}}>
            <Paspirtukai />
            <EditPaspirtukas />
            <Statistics />
          </header>    
        </DataContext.Provider>
      </div>
  );

}

export default App;
