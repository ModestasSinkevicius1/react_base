function Star(props){
    return (
        <div className="star">
            <h1 style={{ color:props.color, fontSize: props.size }}>*</h1>
        </div>
    );
}

export default Star;