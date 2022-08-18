//Task 4
function Text2(props) {
    console.log(props);
    return (
      <div className="Text2">
        <h1>{props.text1}</h1>
        <h2>{props.text2}</h2>
      </div>
    );
}

export default Text2;