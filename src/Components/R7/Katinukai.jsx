import { useEffect } from "react";
import { useState } from "react";

function Katinukai(){

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    const [records, setRecords] = useState([]);
    const [bendras, setBendras] = useState(null);
    const [answ, setAnsw] = useState(0);

    useEffect(()=>{
        setBendras(records?.map((a) => ({svoris: a.svoris})));
    },[records])

    useEffect(()=>{
        setAnsw(bendras?.reduce((a, b)=> a + b.svoris, 0));
    }, [bendras])

    /*useEffect(()=>{
        if(sessionStorage.getItem('record'))
            setRecords(JSON.parse(sessionStorage.getItem('records')));
        sessionStorage.setItem('record', JSON.stringify(records));
    }, [])
    */

    const saveRecord = () => {
        setRecords(r => [...r ?? [], {vardas: text1, svoris: +text2}].sort((a, b)=>b.svoris - a.svoris));
    }

    return (
        <div className="katinukai-container">
            <div className="katinukai">
                <div className="katinukai-sub">
                    <label htmlFor="text-2">Katinukas:</label>
                    <input type='text' id='text-2' className="input-text" value={text1} 
                    onChange={e => setText1(e.target.value)}></input>
                </div>
                <div className="katinukai-sub">
                    <label htmlFor="text-2-2">Svoris:</label>
                    <input type='text' id='text-2-2' className="input-text" value={text2}
                    onChange={e => setText2(e.target.value)}></input>
                </div>
                <button className="btn" onClick={saveRecord}>Save</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Kate</th>
                        <th>Svoris</th>
                    </tr>
                </thead>
                <tbody>
                    {records?.map((r, i) => 
                        <tr key={i}>
                            <td>{r.vardas}</td>
                            <td>{r.svoris}</td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th>Kate (kiekis)</th>
                        <th>Svoris (bendras)</th>
                    </tr>
                </thead>
                <tbody>               
                        <tr>
                            <td>{records?.length}</td>
                            <td>{answ}</td>
                        </tr>                 
                </tbody>
            </table>
        </div>
    );
}

export default Katinukai;