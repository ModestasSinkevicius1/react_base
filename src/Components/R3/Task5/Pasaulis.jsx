import Akvariumas from "./Akvariumas";
import Garazas from "./Garazas";
import Namas from "./Namas";
import Narvas from "./Narvas";

function Pasaulis(props){
    return (
        <div className="pasaulis">
            <div className="pasaulis-item">
                <Namas array = {props.array.filter(a => a.type === 'man')} showIndex = {true} />
                <Garazas array = {props.array.filter(a => a.type === 'car')} showIndex = {true} />
                <Narvas array = {props.array.filter(a => a.type === 'animal')} showIndex = {true} />
                <Akvariumas array = {props.array.filter(a => a.type === 'fish')} showIndex = {true} />
            </div>
            <div className="pasaulis-item">
                <Namas array = {props.array.filter(a => a.type === 'man')} showIndex = {false} />
                <Garazas array = {props.array.filter(a => a.type === 'car')} showIndex = {false} />
                <Narvas array = {props.array.filter(a => a.type === 'animal')} showIndex = {false} />
                <Akvariumas array = {props.array.filter(a => a.type === 'fish')} showIndex = {false} />
            </div>
        </div>
    );
}

export default Pasaulis;