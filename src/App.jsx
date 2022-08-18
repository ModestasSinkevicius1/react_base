import './App.css';
import Animal from './Components/R1/Animal.jsx';
import Labas from './Components/R1/Labas.jsx';
import Text from './Components/R1/Text1.jsx';
import Text2 from './Components/R1/Text2.jsx';
import Text3 from './Components/R1/Text3';

//Task Main
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Labas />
        <Text value={'Dave'} />
        <Animal value={2} />
        <Text2 text1='Labas' text2='Jonai' />
        <Text3 text1='Aš' text2='pipiras' color='green' />
      </header>
    </div>
  );
}

export default App;
