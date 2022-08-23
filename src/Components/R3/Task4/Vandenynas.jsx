import Spalva from "./Spalva.jsx";
import Tipas from "./Tipas.jsx";
import Vardas from "./Vardas.jsx";

function getItem(array, filterName){
    const newArray = [];

    for(const item of array){
        newArray.push({[filterName]: item[filterName], color: item['color']});
    }
    return newArray;
}

function Vandenynas(props){
    return (
        <div className="vandenynas">
            <Tipas array={getItem(props.array, 'type')} />
            <Vardas array={getItem(props.array, 'name')} />
            <Spalva array={getItem(props.array, 'color')} />
        </div>
    );
}

export default Vandenynas;