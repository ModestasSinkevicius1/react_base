import { useState } from "react";

function Select(){

    const [text,setText] = useState('');
    const [s1, setS1] = useState('white');
    const [s2, setS2] = useState('large');
    const [s3, setS3] = useState('arial');

    return(
        <div className="select">
            <input type='text' className='input-text' id='text-4' value={text} onChange={e => setText(e.target.value)}></input>
            <div className="selects">
                <select name="select-1" value={s1} onChange={e => setS1(e.target.value)} id="select-1">
                    <option value="skyblue">Skyblue</option>
                    <option value="crimson">Crimson</option>
                    <option value="orange">Orange</option>
                    <option value="white">White</option>
                </select>
                <select name="select-2" value={s2} onChange={e => setS2(e.target.value)} id="select-2">
                    <option value="18px">18px</option>
                    <option value="22px">22px</option>
                    <option value="26px">26px</option>
                    <option value="32px">32px</option>
                </select>
                <select name="select-3" value={s3} onChange={e => setS3(e.target.value)} id="select-3">
                    <option value="times new roman">Times New Roman</option>
                    <option value="arial">Arial</option>
                    <option value="system-ui">Gill-sans</option>
                    <option value="cambria">Cambria</option>
                </select>
            </div>
            <h1 style={{color: `${s1}`, fontSize: s2, fontFamily: s3}}>{text}</h1>
        </div>
    );
}

export default Select;