import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App(){

  const [trees, setTrees] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3005/trees/by/1/?sort=title').then(res =>{
      setTrees(res.data);
    })
  },[])

  return (
      <div className="App">
        <header className='App-header'>
          <h1>Server</h1>
          <ul>
          {
            trees.map(t => <li key={t.id}>{t.title} <i>{t.height}m</i></li>)
          }
          </ul>
        </header>
      </div>
  );

}

export default App;
