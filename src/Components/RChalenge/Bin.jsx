import Star from "./Star.jsx";

function Bin(props){
    return (
        <div className="bin">
            <Star color={props.color} size={props.size}/>
        </div>
    );
}

export default Bin;