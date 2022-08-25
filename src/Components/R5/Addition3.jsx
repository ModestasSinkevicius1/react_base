import React from "react";
import { useState } from "react";

function Addition3(){
    
    const [number, setNumber] = useState(!sessionStorage.getItem('num') ? 0 : sessionStorage.getItem('num'));

    const addNumber = () =>{
        setNumber(s => s + 1);
        if(!sessionStorage.getItem('num'))
            sessionStorage.setItem('num', number);
        else
            sessionStorage['num'] = number;
        // sessionStorage.clear();
    }

    return(
        <div className="addition3">
            <div className="block-container">
                <div className="block-addition">
                    <span>{sessionStorage.getItem('num') ? sessionStorage.getItem('num') : number}</span>
                    <button className="btn-plus" onClick={addNumber}>+</button>
                </div>        
            </div>
        </div>
    );
}

export default Addition3;