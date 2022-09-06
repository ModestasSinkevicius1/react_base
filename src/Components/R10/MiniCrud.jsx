import { useState } from "react";

function MiniCrud(){

    const [weight, setWeight] = useState(0);
    const [animals, setAnimals] = useState('antis');

    const [records, setRecords] = useState([]);
    
    const addWeight = (e) => {
        const value = e.target.value;

        if(!isNaN(value) && value.length < 7)
            setWeight(value);
    }

    const saveRecord = () => {
        if(records.length < 78)
            setRecords(r => [...r, {name: animals, weight: weight}]);
    }

    return (
        <div className="mini-crud">
            <div className="text-box-container">
                <select name="un-select" id="un-select" className="select input" value={animals} onChange={e => setAnimals(e.target.value)}>
                    <option value='avis'>Avis</option>
                    <option value='antis'>Antis</option>
                    <option value='antilope'>Antilope</option>        
                </select>
                <input type='text' value={weight} onChange={addWeight} className='text-box input' />
                <button className="btn input" onClick={saveRecord}>Save</button>
            </div>
            <div className="list">
                {records?.map((r, i) => <div className="record" key={i}>{r.name} {r.weight}</div>)}
            </div>
        </div>
    );
}

export default MiniCrud;