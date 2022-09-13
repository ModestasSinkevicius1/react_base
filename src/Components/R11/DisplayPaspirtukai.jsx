import { useContext } from "react";
import DataContext from "../../Contexts/DataContext";

function DisplayPaspirtukai(){

    const { paspirtukai, setDelCard, setModalEdit } = useContext(DataContext);
    
    const deleteCard = (p) =>{
        setDelCard(p);
    }

    const editCard = (p) =>{
        setModalEdit(p);
    }

    return(
        <div className="display-paspirtukai">
            {paspirtukai?.map(p =>
                <div className="card" key={p.id}>
                    <span>Registration code: {p.registrationCode}</span>
                    <span>Last use time: {p.lastUseTime}</span>
                    <span>Total ride kilometres: {p.totalRideKilometres}</span>
                    <span>Busy: {p.isBusy ? 'yes' : 'no'}</span>
                    <div className='input-edit-container'>
                        <button className="input-new-btn" onClick={() => editCard(p)}>Edit</button>
                        <button className="input-new-btn" onClick={() => deleteCard(p)}>Delete</button>
                    </div>
                </div>
            )}     
        </div>
    )
}

export default DisplayPaspirtukai;