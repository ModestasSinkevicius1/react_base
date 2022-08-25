import { useState } from 'react';
import { useEffect } from 'react';
import '../../Tasks/App-for-fun.css';
import randColor from '../../Utilities/random_color.js'
import rand from '../../Utilities/random.js'

//Task Main
function Loader() {
  const [trigger, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(trigger => trigger ? 0 : 1);
    }, 10000);
    return () => clearInterval(interval);
  });

  const color1 = randColor();
  const color2 = randColor();

  const color3 = randColor();
  const color4 = randColor();

  return (
    <div className="App">
      <header className="App-header" style={{opacity: trigger ? 1 : 0, backgroundImage: `linear-gradient(${rand(0, 360)}deg, ${color1}, ${color2})`}}>
      </header>
      <div className="Hidden-header" style={{opacity: trigger ? 0 : 1 ,backgroundImage: `linear-gradient(${rand(0, 360)}deg, ${color3}, ${color4})`}}>
      </div>
      <h1 style={{color: randColor()}}>Please wait</h1> 
      <div className='rect'></div>   
    </div>
  );
}

export default Loader;
