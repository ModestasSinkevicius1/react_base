import { useContext, useState } from "react";
import DataContext from "../../Contexts/DataContext";
import animals from '../../Data/animals.js';

function MiniCrud(){

    const [weight, setWeight] = useState('0');
    const [animal, setAnimal] = useState('0');

    const { records, setData, setBlur, setModalEdit, setModalDelete } = useContext(DataContext);
    
    const addWeight = (e) => {
        const value = e.target.value;

        if(!isNaN(value) && value.length < 7)
            setWeight(value);
    }

    const saveRecord = () => {
        if(records.length < 78 && animal !== '0')
            setData({title: animal, weight: weight});
    }

    const openModalEdit = (animalList) => {
        setBlur(5);
        setModalEdit(animalList);
    }

    const openModalDelete = (animalList) => {
        setBlur(5);
        setModalDelete(animalList);
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
            <h1 className="list-title">Ganykla</h1>
            <div className="list">     
                {
                    records?.map
                    (r => 
                        <div className="record" key={r.id}>
                            <div className="record-title">{animals.find(a => a.id === parseInt(r.title))?.type}</div>
                            <div className="record-weight">{r.weight}kg</div>
                            <button className="record-btn-delete" onClick={() => openModalDelete(r)}>Delete</button>
                            <button className="record-btn-edit" onClick={() => openModalEdit(r)}>Edit</button>
                        </div> 
                    )
                }         
            </div>
        </div>
    );
}

export default MiniCrud;