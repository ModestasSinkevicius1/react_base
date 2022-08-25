import React from "react";
import { useState } from "react";

function Tree(){

    const [a, setA] = useState([]);
    const [b, setB] = useState([]);
    const [u, setU] = useState([]);

    const addAzuolas = () =>{
       setA(s => [...s, {row: s.length}]);
    }

    const addBerzas = () =>{
        setB(s => [...s, {row: s.length}]);
    }

    const addUosis = () =>{
        setU(s => [...s, {row: s.length}]);
    }

    return(
        <div className="tree">
            <div className="wood">
                <div className="branch">
                    {a.map( (_, i) =><div className="leaf"><h1 key={i}>Ažuolas</h1></div>)}           
                </div>
                <button className='btn-branch' onClick={addAzuolas}>Ąžuolas</button>
            </div>
            <div className="wood">
                <div className="branch">
                    {b.map( (_, i) =><div className="leaf"><h1 key={i}>Beržas</h1></div>)}         
                </div>
                <button className='btn-branch' onClick={addBerzas}>Beržas</button>
            </div>
            <div className="wood">
                <div className="branch">
                    {u.map( (_, i) =><div className="leaf"><h1 key={i}>Uosis</h1></div>)}              
                </div>
                <button className='btn-branch' onClick={addUosis}>Uosis</button>
            </div>
        </div>
    );
}

export default Tree;