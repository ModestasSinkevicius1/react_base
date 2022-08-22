import randColor from "../../Utilities/random_color.js";

function Square(props){
    const color = randColor();

    if(!props.show){
        return null;
    }
    return(
        <div className="square" style={{
            backgroundColor: props.color, 
            width: `${props.size}px`, 
            height: `${props.size}px`,
            color: 'green',
            }}>
            <span>{props.name}</span>
        </div>
    );
}

export default Square;