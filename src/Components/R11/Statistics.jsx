import { useContext } from "react";
import DataContext from "../../Contexts/DataContext";

function Statistics(){

    const { paspirtukai } = useContext(DataContext);

    return(
        <div className="statistics">
            <h2>Statistics</h2>
            <div className="stat-container">
                <span>Total kilometres: {paspirtukai?.reduce((a, b)=>
                    a + parseInt(b.totalRideKilometres), 0)}</span>
                <span>Total scooters: {paspirtukai?.length}</span>
            </div>
        </div>
    )
}

export default Statistics;