import random from '../../Utilities/random.js'

//Task 1
function Labas() {
    return (
      <div className="Labas">
        <h1 style={{color: random(0, 1) ? 'pink' : 'black'}}>Labas, zuiki</h1>
      </div>
    );
}

export default Labas;