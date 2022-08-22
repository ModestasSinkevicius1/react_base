function Akvariumas(props){
    return(
        <div className="akvariumas">
            {props.array.map(x => <h1 key={x.id}> {props.showIndex ? x.id : ''} {x.type} {x.name} {x.color}</h1>)}
        </div>
    );
}

export default Akvariumas;