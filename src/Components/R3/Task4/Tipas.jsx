function Tipas(props){
    return(
        <div className="tipas">
            <h1>Tipas</h1>
            {props.array.map((x, i) => <h1 key={i}>{x}</h1>)}
        </div>
    );
}

export default Tipas;