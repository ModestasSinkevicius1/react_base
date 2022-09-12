import { useContext, useState } from "react";
import DataContext from "../../Contexts/DataContext";
import randomLetters from "../../Utilities/random_letters";
import DisplayPaspirtukai from "./DisplayPaspirtukai";

function Paspirtukai(){

    const dateNow = new Date(Date.now());

    const month = (dateNow.getMonth()+1).toString();

    const formatDate = `${dateNow.getFullYear()}-${month.padStart(month.length+1, '0')}-${dateNow.getDate()}`;

    const { setData } = useContext(DataContext);

    const [date, setDate] = useState(formatDate);
    const [kilometres, setKilometres] = useState(0);

    const saveData = () =>{
        setData(
            {
                registrationCode: randomLetters(true),
                isBusy: false,
                lastUseTime: date,
                totalRideKilometres: kilometres,
            }
        );
    }

    return(
        <div className="paspirtukai">
            <h1>Kolt paspirtukų nuoma</h1>
            <div className="kolt-header">
                <h2>New record</h2>
                <div className="input-new-container">
                    <input type='date' className="input-new-text" value={date} onChange={(e) => setDate(e.target.value)}></input>
                    <input type='text' className="input-new-text" value={kilometres} onChange={(e) => setKilometres(e.target.value)}></input>
                    <button onClick={saveData} className='input-new-btn'>Press me</button>
                </div>
            </div>
            <DisplayPaspirtukai />
        </div>
    );
}

export default Paspirtukai;