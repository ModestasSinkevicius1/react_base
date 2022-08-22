import './App.css';
import Bin from './Components/RChalenge/Bin.jsx';
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

//<Bala array = { seaPlaners } />
//<Tvenkinys array = { seaPlaners } />
//<Jura array={seaPlaners.type} />
//{[...squares].sort((a, b) => b.size - a.size).filter(c => c.size < 200).map((x, i) => <Square key={i} color={x.color} name={x.name} size={x.size} show={x.show} />)}

export default App;
