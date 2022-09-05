import { useRef } from "react";

function Circles(){

    const dom = useRef([
      ...Array(3)].map((_, i) => (
        <div className="circle" key={i} style={{ backgroundColor: "white" }}></div>
      )),);
    
    const changeColor = () =>{
        for(const el of dom.current){
            console.log(el.props.style.backgroundColor);
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