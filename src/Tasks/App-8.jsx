import '../Tasks/App-8.css';
import Form from '../Components/R7/Form.jsx';
import Katinukai from '../Components/R7/Katinukai.jsx';
import Lygi2 from '../Components/R7/Lygi2.jsx';
import Select from '../Components/R7/Select.jsx';
import CustomSquare from '../Components/R7/CustomSquare.jsx';

//Task Main
function App() {
  return (   
    <div className="App">
      <header className="App-header" style={{backgroundImage: 'linear-gradient(red, yellow)'}}>
        <div className='form-container'>
          <h1>Forms</h1>
          <Form />
          <Katinukai />
          <Lygi2 />
          <Select />
          <CustomSquare />
        </div>
      </header>
    </div>
  );
}

export default App;
