import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Addition3(){
    
    const value = sessionStorage.getItem('num') || 0;

    const [number, setNumber] = useState(value);

    useEffect(()=>{
        //sessionStorage.clear();
        
        if(!sessionStorage.getItem('num'))
            setNumber(0);
        else
            setNumber(sessionStorage.getItem('num'));
    },[]);

    const addNumber = () =>{
        setNumber(n => parseInt(n) + 1);
        sessionStorage.setItem('num',number);
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