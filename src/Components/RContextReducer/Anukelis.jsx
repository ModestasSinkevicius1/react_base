import { useContext } from "react";
import DataContext from "./DataContext";

function Anukelis(){

    const {star, plus} = useContext(DataContext);

    return(
        <div className="red-square">
            <h2>{star} {plus}</h2>
        </div>
    );
}

export default Anukelis;