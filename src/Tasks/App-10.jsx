import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import '../Tasks/App-10.css';
import Delete from '../Components/R10/Delete';
import Edit from '../Components/R10/Edit.jsx';
import MiniCrud from '../Components/R10/MiniCrud';
import DataContext from '../Contexts/DataContext';
import { create, erase, read, update } from '../Functions/localStorage'

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

  const [dim, setDim] = useState(0);

  const [recordAnimation, setRecordAnimation] = useState('popout 0.3s ease');

  const refEl = useRef();


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
      setDim,
      setModalEdit,
      modalEdit,
      setEditData,
      setModalDelete,
      modalDelete,
      recordAnimation,
      setRecordAnimation,
      refEl,
    }}>   
      <div className="App">
        <header className="App-header" style={{backgroundImage: 'linear-gradient(red, yellow)',
                                               filter: `grayscale(${dim}%)`}}>
          <MiniCrud />
        </header>
        <Edit />
        <Delete />
      </div>
    </DataContext.Provider>
  );
}

export default App;
