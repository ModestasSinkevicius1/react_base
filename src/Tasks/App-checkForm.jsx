import { useState } from 'react';
import '../Tasks/App-checkForm.css';
import Form from '../Components/RChalenge/Form.jsx';

//Task Main
function App() {

  const [cb2, setCb2] = useState(false);

  return (   
    <div className="App">
      <header className="App-header" style={{backgroundImage: 'linear-gradient(red, yellow)'}}>
        <div className='cb-main-1-container' style={{backgroundColor: cb2 ? 'crimson' : 'black'}}>
          
        </div>
        <Form setCb2={setCb2}/>
      </header>
    </div>
  );
}

export default App;
