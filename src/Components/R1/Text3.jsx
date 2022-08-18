//Task 5
function Text3(props) {
    return (
    <div className="Text3">
        <h1 style={{color: props.color}}>{props.text1}</h1>
        <h2 style={{color: props.color}}>{props.text2}</h2>
    </div>
    );
}

export default Text3;