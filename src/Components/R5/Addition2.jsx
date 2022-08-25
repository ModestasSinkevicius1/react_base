import React from "react";
import { useState } from "react";

function Addition2(){
    
    const [blocks, setBlock] = useState([]);

    const addBlock = () =>{
        setBlock(s => [...s, {number: 0, row: s.length}])
    }

    const addNumber = (row) =>{
        setBlock(s => s.map(a => a.row === row ? ({...a, number: a.number + 1 }):({...a})));
    }

    return(
        <div className="addition2">
            <div className="block-container">
                {blocks.map((a, i) => 
                    <div key={i} className="block-addition">
                        <span>{a.number}</span>
                        <button className="btn-plus" onClick={() => addNumber(a.row)}>+</button>
                    </div>
                )}
            </div>
            <button className='btn-add' onClick={addBlock}>Pridėti</button>
        </div>
    );
}

export default Addition2;