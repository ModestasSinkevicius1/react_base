//Task 3
const colorRed = {
    color: 'red',
};
  
const colorBlue = {
  color: 'blue',
};

function Animal(props) {
  return (
  <div className="Animal">
    <h1 style={props.value === 1 ? colorBlue : colorRed}>Zebrai ir Bebrai {props.value === 1 ? 'blue' : 'red'}</h1>
  </div>);
}

export default Animal;