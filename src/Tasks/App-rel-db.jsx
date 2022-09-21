import '../Tasks/App-rel-db.css';
import CrossJoin from '../Components/RDBJoin/CrossJoin';
import InnerJoin from '../Components/RDBJoin/InnerJoin';
import LeftJoin from '../Components/RDBJoin/LeftJoin';
import RightJoin from '../Components/RDBJoin/RightJoin';

function App(){
  return (
      <div className="App">
        <header className='App-header'>
          <h1>JOIN</h1>
          <InnerJoin />
          <LeftJoin />
          <RightJoin />
          <CrossJoin />
        </header>
      </div>
  );

}

export default App;
