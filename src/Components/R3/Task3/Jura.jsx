import Laivas from "./Laivas.jsx";
import Sala from "./Sala.jsx";
import Valtis from "./Valtis.jsx";

//Task 3
function Jura(props){
    return (
        <div className="jura">
            <Laivas array = {props.array.filter(a => a.type === 'car')} />
            <Valtis array = {props.array.filter(a => a.type === 'man')} />
            <Sala array = {props.array.filter(a => a.type === 'animal')} />
            {props.array.filter(a => a.type === 'fish').map(x => <h1 key={x.id}>{x.id} {x.type} {x.name} {x.color}</h1>)}
        </div>
    );
}

export default Jura;