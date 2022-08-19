import Laivas from "./Laivas.jsx";
import Sala from "./Sala.jsx";
import Valtis from "./Valtis.jsx";

//Task 3
function Jura(props){
    return (
        <div className="jura">
            <Laivas />
            <Valtis />
            <Sala />
        </div>
    );
}

export default Jura;