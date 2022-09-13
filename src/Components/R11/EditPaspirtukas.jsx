import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import DataContext from "../../Contexts/DataContext";

function EditPaspirtukas(){

    const { modalEdit, setModalEdit, setEditCard } = useContext(DataContext);

    const [newDate, setNewDate] = useState('2000-01-01');
    const [busy, setBusy] = useState(false)
    const [newKM, setNewKM] = useState(0);

    useEffect(()=>{
        if(modalEdit !== null){
            setNewDate(modalEdit.lastUseTime);
            setBusy(modalEdit.isBusy);
        }
    }, [modalEdit])

    if(modalEdit === null){
        return;
    }

    const saveData = () =>{
        setEditCard(
            {
                registrationCode: modalEdit.registrationCode,
                isBusy: busy,
                lastUseTime: newDate,
                totalRideKilometres: parseInt(newKM) + parseInt(modalEdit.totalRideKilometres),
                id: modalEdit.id,
            }
        );
    }

    return(
        <div className="edit-paspirtukas">
            <div className='edit-header-container'>
                <h3 className="edit-header">Edit scooter</h3>
                <button className='exit-btn' onClick={() => setModalEdit(null)}>Exit</button>
            </div>
            <div className="edit-inputs">
                <label htmlFor="edit-text-form">Registration code</label>
                <input readOnly disabled type='text' id='edit-text-form' value={modalEdit.registrationCode} className='text-box input text-box-edit' />
            </div>
            <div className="edit-inputs">
                <label htmlFor="edit-text-form">Last used date</label>
                <input readOnly disabled type='date' id='edit-text-form' className='text-box input text-box-edit' value={modalEdit.lastUseTime} />
            </div>
            <div className="edit-inputs">
                <label htmlFor="edit-text-form">New used date</label>
                <input type='date' id='edit-text-form' className='text-box input text-box-edit' value={newDate} onChange={(e)=>setNewDate(e.target.value)} />
            </div>
            <div className="edit-inputs">
                <label htmlFor="edit-text-form">Total ride kilometres</label>
                <input readOnly disabled type='text' id='edit-text-form' className='text-box input text-box-edit' value={modalEdit.totalRideKilometres} />
            </div>
            <div className="edit-inputs">
                <label htmlFor="edit-text-form">New riden kilometres</label>
                <input type='text' id='edit-text-form' className='text-box input text-box-edit' value={newKM} onChange={(e) => setNewKM(e.target.value)} />
            </div>
            <div className="edit-inputs">
                <label htmlFor="edit-text-form">Busy</label>
                <input type='checkbox' id='edit-text-form' checked={busy} onChange={()=>setBusy(b => !b)} className='text-box input text-box-edit' />
            </div>
            <div className="edit-buttons">
                <button className="btn btn-edit input-new-btn" onClick={() => setModalEdit(null)}>Cancel</button>
                <button className="btn btn-edit input-new-btn" onClick={saveData}>Confirm</button>
            </div>        
        </div>
    )
}

export default EditPaspirtukas;