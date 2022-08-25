import '../Tasks/App-challenge.css';
import Bin from '../Components/RChalenge/Bin.jsx';
//import Square from './Components/RChalenge/Square.jsx';

/*
const squares = [
  {color: 'black', name:'Valio', size: 88, show: true},
  {color: 'white', name:'Hello', size: 144, show: true},
  {color: 'crimson', name:'Geras', size: 201, show: true},
  {color: 'skyblue', name:'Neblogas', size: 333, show: true},
];
*/

//Task Main
function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <Bin color='crimson' size='164px' />
        <Bin color='crimson' size='124px' />
        <Bin color='crimson' size='64px' />
      </header>    
    </div>
  );
}

export default App;
