import randColor from "../../../Utilities/random_color.js";

function Buttons({setShowText, startFrom}) {
  return (
    <div className="buttons">
      
      {[...Array(50)].map((_, i) => (
        <button
          style={{ backgroundColor: randColor(0) }}
          className="btn"
          key={i}
          onClick={() => setShowText(s => s + (i + (startFrom + 1)))}
        >
          {i + (startFrom + 1)}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
