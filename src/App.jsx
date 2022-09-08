import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Delete from './Components/R10/Delete';
import Edit from './Components/R10/Edit.jsx';
import MiniCrud from './Components/R10/MiniCrud';
import DataContext from './Contexts/DataContext';
import { create, erase, read, update } from './Functions/localStorage'

const key = 'animals';

//Task Main
function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [records, setRecords] = useState(null);
  const [data, setData] = useState(null);

  const [modalDelete, setModalDelete] = useState(null);
  const [deleteData, setDeleteData] = useState(null);

  const [modalEdit, setModalEdit] = useState(null);
  const [editData, setEditData] = useState(null);

  const [blur, setBlur] = useState(0);


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

  //DELETE
  useEffect(()=>{
    if(deleteData === null){
      return;
    }
    
    erase(key, deleteData.id);
    
    setLastUpdate(Date.now());
  }, [deleteData]);

  //EDIT
  useEffect(()=>{
    if(editData === null){
      return;
    }
    
    update(key, editData, editData.id);
    setModalEdit(null);
    setLastUpdate(Date.now());
  }, [editData]);

  return (
    <DataContext.Provider value={{
      setData,
      records,
      key,
      setDeleteData,
      setBlur,
      setModalEdit,
      modalEdit,
      setEditData,
      setModalDelete,
      modalDelete,
    }}>   
      <div className="App">
        <header className="App-header" style={{backgroundImage: 'linear-gradient(red, yellow)',
                                               filter: `blur(${blur}px)`}}>
          <MiniCrud />
        </header>
        <Edit />
        <Delete />
      </div>
    </DataContext.Provider>
  );
}

export default App;
