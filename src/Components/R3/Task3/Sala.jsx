//Task 3
function Sala(props){
    return(
        <div className="sala">
            {props.array.map(x => <h1 key={x.id}> {x.id} {x.type} {x.name} {x.color}</h1>)}
        </div>
    );
}

export default Sala;