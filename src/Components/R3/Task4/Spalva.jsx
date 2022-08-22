function Spalva(props){
    return(
        <div className="spalva">
            <h1>Spalva</h1>
            {props.array.map((x, i) => <h1 key={i}>{x}</h1>)}
        </div>
    )
}

export default Spalva;