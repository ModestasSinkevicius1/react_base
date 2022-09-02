import { useState } from "react";

function CustomSquare(){

    const [color, setColor] = useState('#000000');
    const [size, setSize] = useState(32);

    const [eCube, setEcube] = useState(null);
    const [sCubes, setScubes] = useState([]);

    const changeSize = (e) =>{
        setSize(e.target.value);
        setEcube(ec => ({...ec, size: e.target.value}));
    }

    const changeColor = (e) =>{
        setColor(e.target.value);
        setEcube(ec => ({...ec, color: e.target.value}));
    }

    const addCube = () =>{
        setEcube({size: '100', color: 'white'});
    }

    const saveCube = () =>{
        setScubes(sc=>[...sc, eCube]);
    }

    return(
        <div className="custom-square">
            <div className="custom-settings">
                <label htmlFor='size'>Size</label>
                <input type="range" id="size" name="size" min="10" max="200" value={size} onChange={changeSize}/>

                <label htmlFor="clr">Color</label>
                <input type="color" id="clr" name="clr" value={color} onChange={changeColor}/>
                <button className="btn" onClick={addCube}>Sukurti</button>
                <button className="btn" onClick={saveCube}>Išsaugoti</button>
            </div>
            <div className="custom-output">
                {eCube ? <div className="cube" style={{width: eCube.size + 'px', height: eCube.size + 'px', backgroundColor: eCube.color}}></div> : null}
                {sCubes.map((sc, i) => 
                    <div className="cube" key={i} style={{width: sc.size + 'px', height: sc.size + 'px', backgroundColor: sc.color}}></div>
                )}
            </div>
        </div>
    );
}

export default CustomSquare;