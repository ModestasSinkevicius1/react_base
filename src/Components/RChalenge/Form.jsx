import { useState } from "react";

function Form({setCb2}){

    const [cb, setCb] = useState(false);
    
    const changeCb = () =>{
        setCb(c => !c);
    }

    const click = () =>{
        setCb2(cb);
    }

    return(
        <div className="form">
            <div className="cb-container-1">
                <input type='checkbox' checked={cb} id='cb_1' onChange={changeCb}></input>
                <label htmlFor="cb_1">Check me</label>
            </div>
            <button className="btn-1" onClick={click}>Click</button>
        </div>
    );
}

export default Form;