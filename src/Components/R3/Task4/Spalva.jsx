function Spalva(props){
    return(
        <div className="spalva">
            <h1>Spalva</h1>
            {props.array.map((x, i) => <h1 key={i} style={{color: x.color}}>{x.color}</h1>)}
        </div>
    )
}

export default Spalva;