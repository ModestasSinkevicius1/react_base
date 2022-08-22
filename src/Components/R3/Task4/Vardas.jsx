function Vardas(props){
    return(
        <div className="vardas">
            <h1>Vardas</h1>
            {props.array.map((x, i) => <h1 key={i}>{x}</h1>)}
        </div>
    )
}

export default Vardas;