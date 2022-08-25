import React from "react";
import { useState } from "react";

function Multiply(){

    const [num, setNum] = useState(3);

    const multiply = () =>{
        setNum(s => s * 5);
    }

    const reset = () =>{
        setNum(3);
    }

    return(    
        <div className="change">
            <span>{num}</span>
            <div className="btn container">
                <button className='btn-change' onClick={multiply}>Mulitply</button>
                <button className='btn-random' onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default Multiply;