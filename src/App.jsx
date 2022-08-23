import './App.css';

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

//Task Main
function App() {
  return (   
    <div className="App">
      <header className="App-header" style={{backgroundImage: 'linear-gradient(red, yellow)'}}>
        <div className='line'>
          {
            dogs.sort((a, b)=>b.length - a.length).map((dog, i)=>
              <div key={i} className='dog-rect'>
                <h1>{dog}</h1>
                <h2>{i+1}</h2>
              </div>
          )     
          }
        </div>
        <div className='line'>
          {
            dogs.map((dog, i)=>
              <div key={i} className='dog-circl'>
                <h1>{dog}</h1>
              </div>
          )
          }
        </div>
        <div className='line'>
          {
            dogs.filter(a=>a[0].toUpperCase() !== a[0]).map((dog, i)=>
              <div key={i} className='dog-circl'>
                <h1>{dog}</h1>
              </div>
          )
          }
        </div>
        <div className='line'>
          {
            dogs.map((dog, i)=>
              <div key={i} className='dog-circl' style={dog.length > 6 ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>
                <h1>{dog.length}</h1>
              </div>
          )
          }
        </div>  
      </header>
    </div>
  );
}

export default App;
