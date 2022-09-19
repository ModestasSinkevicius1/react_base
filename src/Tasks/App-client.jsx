import { useEffect } from 'react';
import { useState } from 'react';
import '../Tasks/App-db.css';
import axios from 'axios';
import TreeProvider from "../Contexts/TreeProvider";
import List from '../Components/RClient/List.jsx';
import Create from '../Components/RClient/Create.jsx';
import Edit from '../Components/RClient/Edit';

const types = [
  {id: 1, type: 'Lapuotis'},
  {id: 2, type: 'Spygliuotis'},
  {id: 3, type: 'Palmė'},
]

function App(){

  const [trees, setTrees] = useState([]);
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData , setEditData] = useState(null);

  const [date, setDate] = useState(Date.now());
  

  useEffect(()=>{
    axios.get('http://localhost:3005/trees/').then(res =>{
      setTrees(res.data);
    })
  },[date])

  useEffect(() => {
    if(null === createData){
      return;
    }
    axios.post('http://localhost:3005/trees/', createData)
    .then(res => console.log('Data sent!'));
    setDate(Date.now());
  }, [createData]);

  useEffect(() => {
    if(null === deleteData){
      return;
    }
    axios.delete('http://localhost:3005/trees/' + deleteData.id)
    .then(res => console.log('Data deleted!'));
    setDate(Date.now());
  }, [deleteData]);

  useEffect(() => {
    if(null === editData){
      return;
    }
    axios.put('http://localhost:3005/trees/' + editData.id, editData)
    .then(res => console.log('Data changed!'));
    setDate(Date.now());
  }, [editData]);

  return (
      <TreeProvider.Provider value={{
        trees,
        types,
        setCreateData,
        setDeleteData,
        setModalData,
        modalData,
        setEditData,
      }}>
      <div className="App">
        <header className='App-header'>
            <Create />
            <List />
        </header>
      </div>
      <Edit />
      </TreeProvider.Provider>
  );

}

export default App;
