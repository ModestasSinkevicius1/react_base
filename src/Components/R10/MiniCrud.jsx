import { useContext, useState } from "react";
import DataContext from "../../Contexts/DataContext";
import animals from '../../Data/animals.js';
import { erase } from "../../Functions/localStorage";

function MiniCrud(){

    const [weight, setWeight] = useState('0');
    const [animal, setAnimal] = useState('0');

    const dataContent = useContext(DataContext);
    
    const addWeight = (e) => {
        const value = e.target.value;

        if(!isNaN(value) && value.length < 7)
            setWeight(value);
    }

    const saveRecord = () => {
        if(dataContent.records.length < 78)
            dataContent.setData({title: animal, weight: weight});
    }

    const deleteRecord = (target) => {
        dataContent.setData(erase(dataContent.key, target));
    }
    return (
        <div className="mini-crud">
            <div className="text-box-container">         
                <select name="un-select" id="un-select" className="select input" value={animal} onChange={e => setAnimal(e.target.value)}>
                    <option value='0' disabled>Choose animal</option>
                    {animals.map(a => <option value={a.id} key={a.id}>{a.type}</option>)}        
                </select>
                <input type='text' value={weight} onChange={addWeight} className='text-box input' />
                <button className="btn input" onClick={saveRecord}>Save</button>
            </div>
            <div className="list">     
                {
                    dataContent.records?.map
                    (r => 
                        <div className="record" key={r.id}>
                            <div className="record-title">{animals.find(a => a.id === parseInt(r.title))?.type}</div>
                            <div className="record-weight">{r.weight}kg</div>
                            <button className="record-btn-delete" onClick={() => deleteRecord(r.id)}>Delete</button>
                        </div> 
                    )
                }         
            </div>
        </div>
    );
}

export default MiniCrud;