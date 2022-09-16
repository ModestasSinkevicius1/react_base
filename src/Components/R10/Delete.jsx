import { useContext, useEffect } from 'react';
import DataContext from '../../Contexts/DataContext.jsx';

function Delete(){

    const { modalDelete, setModalDelete, setDeleteData, refEl, setDim } = useContext(DataContext);

    useEffect(()=>{
        if (null === modalDelete) {
            setDim(0);         
            return;
        }
    },[modalDelete, setDim])


    if (null === modalDelete) {
        return null;
    }

    const deleteRecord = () =>{
        setTimeout(() => {
            setDeleteData(modalDelete);
        }, 400);
        const el = refEl.current.querySelector("#i_" + modalDelete.id);
        
        el.style.animation = 'shrinkDown 0.3s ease forwards'; 
        setModalDelete(null);
    }

    return(
        <div className="edit">
            <div className='edit-header-container'>
                <h3 className="edit-header">Delete record?</h3>
                <button className='exit-btn' onClick={() => setModalDelete(null) }>Exit</button>
            </div>
            
            <div className="edit-buttons">
                <button className="btn btn-edit" onClick={() => setModalDelete(null)}>No</button>
                <button className="btn btn-edit" onClick={deleteRecord}>Yes</button>
            </div>        
        </div>
    );
    
}

export default Delete;