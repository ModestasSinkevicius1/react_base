import { useContext, useState } from "react";
import DataContext from "../../Contexts/DataContext";
import randomLetters from "../../Utilities/random_letters";
import DisplayPaspirtukai from "./DisplayPaspirtukai";

function Paspirtukai(){

    const dateNow = new Date(Date.now());

    const month = (dateNow.getMonth()+1).toString();

    const formatDate = `${dateNow.getFullYear()}-${month.padStart(month.length+1, '0')}-${dateNow.getDate()}`;

    const { setData, setPaspirtukai, paspirtukai } = useContext(DataContext);

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

    const sortByKm = () =>{
        console.log(paspirtukai);
        setPaspirtukai(s => [...s.sort((a,b)=>b.totalRideKilometres-a.totalRideKilometres)]);
    }
    
    const sortByDate = () =>{
        console.log(paspirtukai);
        setPaspirtukai(s => [...s.sort((a,b)=> 
            new Date(b.lastUseTime) - new Date(a.lastUseTime))]);
    }

    return(
        <div className="paspirtukai">
            <h1>Kolt paspirtuk┼│ nuoma</h1>
            <div className="kolt-header">
                <h2>New record</h2>
                <div className="input-new-container">
                    <div className="input-date-container">
                        <label htmlFor="input-date" className="input-label">New date:</label>
                        <input type='date' id='input-date' className="input-new-text" value={date} onChange={(e) => setDate(e.target.value)}></input>
                    </div>
                    <div className="input-km-container">
                        <label htmlFor="input-date" className="input-label">New kilometres:</label>
                        <input type='text' id='input-km' className="input-new-text" value={kilometres} onChange={(e) => setKilometres(e.target.value)}></input>
                    </div>
                    <button onClick={saveData} className='input-new-btn'>Press me</button>
                </div>
                <button onClick={sortByKm} className='input-new-btn'>Sort by kilometres</button>
                <button onClick={sortByDate} className='input-new-btn'>Sort by date</button>
            </div>
            <DisplayPaspirtukai />
        </div>
    );
}

export default Paspirtukai;