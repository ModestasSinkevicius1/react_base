//Task 1
function Bala(props){
    return (
        <div className="bala">
            {props.array.map(x =><h1 key={x.id}>{x.id} {x.type} {x.name} {x.color}</h1>)}
        </div>
    );
}

export default Bala;