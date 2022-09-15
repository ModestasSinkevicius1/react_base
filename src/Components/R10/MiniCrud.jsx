import { useContext, useState } from "react";
import DataContext from "../../Contexts/DataContext";
import animals from '../../Data/animals.js';

function MiniCrud(){

    const [weight, setWeight] = useState('0');
    const [animal, setAnimal] = useState('0');

    const { records, setData, setDim, setModalEdit, setModalDelete, recordAnimation, refEl } = useContext(DataContext);
    
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
        setDim(80);
        setModalEdit(animalList);
    }

    const openModalDelete = (animalList) => {
        setDim(80);
        setModalDelete(animalList);
    }

    return (
        <div className="mini-crud">
            <div className="text-box-container">  
                <label className="un-label" htmlFor="un-select">Animal:</label>       
                <select name="un-select" id="un-select" className="select input new-select" value={animal} onChange={e => setAnimal(e.target.value)}>
                    <option value='0' disabled>Choose animal</option>
                    {animals.map(a => <option value={a.id} key={a.id}>{a.type}</option>)}        
                </select>
                <label className="un-label" htmlFor="un-text">Weight:</label>
                <input type='text' id='un-text' value={weight} onChange={addWeight} className='text-box input' />
                <button className="btn input" onClick={saveRecord}>Save</button>
            </div>
            <h1 className="list-title">Ganykla</h1>
            <div className="list" ref={refEl}>     
                {
                    records?.map
                    (r => 
                        <div className="record" key={r.id} id={'i_' + r.id} style={{animation: recordAnimation}}>
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