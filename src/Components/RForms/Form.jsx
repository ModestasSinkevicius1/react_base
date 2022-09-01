import { useState } from "react";
import rand from '../../Utilities/random.js'

function Form(){

    const [cubes, setCubes] = useState([]);
    const [count, setCount] = useState(0);

    const addCubes = (count) =>{
        setCubes(c => [...c, ...[...Array(count)].map(() => ({number: rand(100, 200)}))]);
    }

    const updateText = (e) =>{
        setCount(e.target.value);
    }

    return (
        <div className="form">
            <h1>Forms</h1>
            
                <div className="input-1">
                    <label htmlFor='text_1' className='input-label'>Text:</label>
                    <input type='text' id='text_1' className='text-box' value={count} onChange={updateText}></input>
                    <button className="btn" onClick={() => addCubes(count)}>Press</button>
                </div>
                <div className="cubesShow">
                    {cubes.map((c, i) => <div key={i} className="cube">{c.number}</div>)}
                </div>     
            
        </div>
    );
}

export default Form;