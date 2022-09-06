import { useRef } from "react";
import randColor from '../../Utilities/random_color.js'

function Circles(){

    const dom = useRef([
      ...Array(3)].map((_, i) => (
        <div className="circle" key={i} style={{ backgroundColor: randColor() }}></div>
      )),);
    
    const changeColor = () =>{
        const els = document.querySelectorAll('.circle');

        for(const el of els){
            el.style.backgroundColor = randColor();
        }
    }

    return(
        <div className="circles">
            <div className="circle-container">
                {dom.current.map((d, i) => d)}
            </div>
            <button className="btn-un" onClick={changeColor}>Change</button>
        </div>
    )
}

export default Circles;