//Task 3
function Laivas(props){
    return(
        <div className="laivas">
            {props.array.map(x => <h1 key={x.id}> {x.id} {x.type} {x.name} {x.color}</h1>)}
        </div>
    );
}

export default Laivas;