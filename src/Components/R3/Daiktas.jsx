//Task 2
function Daiktas(props){
    return(
        <div className="daiktas">
            {props.array2.map(x =><h1 key={x.id}>{props.showIndex ? x.id : ''} {x.type} {x.name} {x.color}</h1>)}
        </div>
    );
}

export default Daiktas;