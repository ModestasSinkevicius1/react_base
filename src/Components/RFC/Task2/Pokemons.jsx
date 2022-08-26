import Pokemon from "./Pokemon";

const Pokemons = (props) => {
  if (props.pokemons === "error") {
    return (
      <div className="pokemon-container">
        <h1 className="msg-pokemon">Something went wrong</h1>
      </div>
    );
  }

  return (
    <div className="pokemon-container">
      <h1 className="msg-pokemon">Pokemons list</h1>
      <div className="pokemon-result">
        <ul>
          {props.pokemons.results.map((a, i) => (
            <Pokemon name={a.name} key={i} url={a.url} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pokemons;
