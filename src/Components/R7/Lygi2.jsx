import { useState } from "react";

function Lygi2(){

    const [value1, setValue1] = useState(100);
    const [value2, setValue2] = useState(50);

    const updateValue1 = (e) =>{
        setValue1(e.target.value);
        setValue2(e.target.value / 2);
    }

    const updateValue2 = (e) =>{
        setValue2(e.target.value);
        setValue1(e.target.value / 2);
    }

    return (
        <div className="lygi2">
            <div className="lygi2-sub">
                <div className="text-sub-3">
                    <label htmlFor="text-3">Value 1:</label>
                    <input type='text' id='text-3' className="input-text" value={value1} onChange={updateValue1}></input>
                </div>
                <div className="text-sub-3">
                    <label htmlFor="text-3-2">Value 2:</label>
                    <input type='text' id='text-3-2' className="input-text" value={value2} onChange={updateValue2}></input>
                </div>
            </div>
            <div className="text-sub-3">
                <span>{Math.max(value1, value2)} / {Math.min(value2, value1)} = 2</span>
            </div>
        </div>
    );
}

export default Lygi2;