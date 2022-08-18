import './App.css';
import Animal from './Components/R1/Animal.jsx';
import Black from './Components/R1/Black';
import Labas from './Components/R1/Labas.jsx';
import Text from './Components/R1/Text1.jsx';
import Text2 from './Components/R1/Text2.jsx';
import Text3 from './Components/R1/Text3';
import White from './Components/R1/White';
import rand from './Utilities/random.js';


const list = [
  { name: 'Pilkis', color: 'green' },
  { name: 'Kengura', color: 'red' },
  { name: 'Dangus', color: 'blue' },
];

//Task Main
function App() {
  return (   
    <div className="App">
      <header className="App-header" style={{backgroundImage: 'linear-gradient(red, yellow)'}}>
        <Labas />
        <Text value={'Dave'} />
        <Animal value={2} />
        <Text2 text1='Labas' text2='Jonai' />
        <Text3 text1='Aš' text2='pipiras' color='green' />
        {rand(0, 1) ? <Black /> : <White />}
        <div className='romb-container'>
          {
            list.map((item, i)=>
              <div key={i} className={`romb romb-${i}`} style={{backgroundColor: item.color}}>
                <h1>{item.name}</h1>
              </div>)
          }
        </div>       
      </header>
    </div>
  );
}

export default App;
