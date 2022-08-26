import { useState } from "react";
import { useEffect } from "react";
import PokemonsResult from "./Pokemons";

function PokemonsFetch(){

    const [pokemons, setPokemons] = useState(null);

    useEffect(() =>{
        fetch('https://pokeapi.co/api/v2/pokemon').then(res => res.json()).then((result)=>{
            setPokemons(result);
        },
        //catch
        (_) => {
            setPokemons('error');
        })
    }, [])

    if(pokemons)
        return(
           <PokemonsResult pokemons={pokemons} />
        );
    else
        return(
            <h1 className="fetch-stage">Please wait</h1>
        );
}

export default PokemonsFetch;