import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../Tasks/App-fetch.jsx';
import Books from '../Components/RFetch/Books';

//Task Main
function App() {

  const [books, setBooks] = useState(null);

  useEffect(() => {
    axios.get('https://in3.dev/knygos/').then(res => setBooks(res.data)).catch(_ => setBooks('error'))
  }, []);

  return (   
    <div className="App">
      <header className="App-header" style={{backgroundImage: 'linear-gradient(red, yellow)'}}>
        <Books books = {books} />
      </header>
    </div>
  );
}

export default App;
