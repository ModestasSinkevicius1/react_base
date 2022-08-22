//Task 3
function Valtis(props){
    return(
        <div className="valtis">
            {props.array.map(x => <h1 key={x.id}> {x.id} {x.type} {x.name} {x.color}</h1>)}
        </div>
    );
}

export default Valtis;