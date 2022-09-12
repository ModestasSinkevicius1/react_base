function EditPaspirtukas(){
    return(
        <div className="edit-paspirtukas">
            <div className='edit-header-container'>
                <h3 className="edit-header">Edit scooter</h3>
                <button className='exit-btn'>Exit</button>
            </div>
            <div className="edit-inputs">
                <label htmlFor="edit-text-form">Registration code</label>
                <input type='text' id='edit-text-form' className='text-box input text-box-edit' />
            </div>
            <div className="edit-inputs">
                <label htmlFor="edit-text-form">Busy</label>
                <input type='checkbox' id='edit-text-form' className='text-box input text-box-edit' />
            </div>
            <div className="edit-inputs">
                <label htmlFor="edit-text-form">Last used date</label>
                <input type='date' id='edit-text-form' className='text-box input text-box-edit' />
            </div>
            <div className="edit-inputs">
                <label htmlFor="edit-text-form">New used date</label>
                <input type='date' id='edit-text-form' className='text-box input text-box-edit' />
            </div>
            <div className="edit-inputs">
                <label htmlFor="edit-text-form">Total ride kilometres</label>
                <input type='text' id='edit-text-form' className='text-box input text-box-edit' />
            </div>
            <div className="edit-inputs">
                <label htmlFor="edit-text-form">New riden kilometres</label>
                <input type='text' id='edit-text-form' className='text-box input text-box-edit' />
            </div>
            <div className="edit-buttons">
                <button className="btn btn-edit input-new-btn">Cancel</button>
                <button className="btn btn-edit input-new-btn">Confirm</button>
            </div>        
        </div>
    )
}

export default EditPaspirtukas;