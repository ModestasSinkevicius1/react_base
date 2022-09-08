import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DataContext from '../../Contexts/DataContext.jsx';
import animals from '../../Data/animals.js';

function Edit(){

    const [weight, setWeight] = useState('0');
    const [animal, setAnimal] = useState('0');

    const { setModalEdit, modalEdit, setBlur, setEditData } = useContext(DataContext);

    useEffect(()=>{
        if (null === modalEdit) {
            return;
        }
        setAnimal(modalEdit.title);
        setWeight(modalEdit.weight);
    },[modalEdit])


    if (null === modalEdit) {
        setBlur(0);
        return null;
    }

    const addWeight = (e) => {
        const value = e.target.value;

        if(!isNaN(value) && value.length < 7)
            setWeight(value);
    }

    const saveRecord = () => {
        setEditData({title: animal, weight: weight, id: modalEdit.id});
    }

    return(
        <div className="edit">
            <div className='edit-header-container'>
                <h3 className="edit-header">Edit animal</h3>
                <button className='exit-btn' onClick={() => setModalEdit(null) }>Exit</button>
            </div>
            <div className="edit-inputs">
                <select name="edit-select" id="edit-select" className="select input select-edit" value={animal} onChange={e => setAnimal(e.target.value)}>
                    <option value='0' disabled>Choose animal</option>
                    {animals.map(a => <option value={a.id} key={a.id}>{a.type}</option>)}        
                </select>
                <input type='text' value={weight} onChange={addWeight} className='text-box input text-box-edit' />
            </div>
            <div className="edit-buttons">
                <button className="btn btn-edit" onClick={() => setModalEdit(null)}>Cancel</button>
                <button className="btn btn-edit" onClick={saveRecord}>Confirm</button>
            </div>        
        </div>
    );
    
}

export default Edit;