import { useContext } from "react";
import DataContext from "../../Contexts/DataContext";

function DisplayPaspirtukai(){

    const { paspirtukai, setDelCard } = useContext(DataContext);
    
    const deleteCard = (p) =>{
        setDelCard(p);
    }


    return(
        <div className="display-paspirtukai">
            {paspirtukai?.map(p =>
                <div className="card" key={p.id}>
                    <span>Registration code: {p.registrationCode}</span>
                    <span>Busy: {p.isBusy ? 'yes' : 'no'}</span>
                    <span>Last use time: {p.lastUseTime}</span>
                    <span>Total ride kilometres: {p.totalRideKilometres}</span>
                    <div className='input-edit-container'>
                        <button className="input-new-btn">Edit</button>
                        <button className="input-new-btn" onClick={() => deleteCard(p)}>Delete</button>
                    </div>
                </div>
            )}     
        </div>
    )
}

export default DisplayPaspirtukai;