import { useEffect } from "react";
import { useState } from "react";
import rand from "../../Utilities/random.js";

function Ganykla() {
  const [animals, setAnimals] = useState(null);

    useEffect(()=>{
        if(animals)
            sessionStorage.setItem('animal', JSON.stringify(animals));
    }, [animals]);

    useEffect(()=>{
        const aniObj = sessionStorage.getItem('animal');
        if(aniObj){
            setAnimals(JSON.parse(aniObj));
        }
    }, []);

  const createIdentificator = (specie) => {
    return (
      (specie === "avis" ? "A" : "K") + ('' + rand(0, 9999999)).padStart(7, 0));
  };

  const addAnimal = () => {
    setAnimals((a) => [...a ?? [], ...[...Array(rand(5, 20))].map(() => ({side: 'left', number: createIdentificator(), animal: 'avis'}))]);
    
    setAnimals((k) => [...k ?? [], ...[...Array(rand(5, 20))].map(() => ({side: 'right', number: createIdentificator(), animal: 'karve'}))]);   
  }
  const moveAnimal = (id) => {
    setAnimals((a) =>
      a.map((an) =>
        an.number === id
          ? { ...an, side: an.side === "right" ? "left" : "right" }
          : { ...an }
      ).sort((b, c) => {
        if(b.number === id)
            return 1;
        if(c.number === id)
            return -1;
        return 0;
      })
    );
  };

  return (
    <div className="ganykla">
      <div className="ganykla-field">
        <div className="avies-puse">
          <h1>Avis</h1>
          <div className="animal-area">
            {animals?.map((a) =>
              a.side === "left" ? (
                <div
                  className={a.animal}
                  key={a.number}
                  onClick={() => moveAnimal(a.number)}
                >
                  <span>{a.number}</span>
                </div>
              ) : null
            )}
          </div>
        </div>
        <div className="karves-puse">
          <h1>Karve</h1>
          <div className="animal-area">
            {animals?.map((k) =>
              k.side === "right" ? (
                <div
                  className={k.animal}
                  key={k.number}
                  onClick={() => moveAnimal(k.number)}
                >
                  <span>{k.number}</span>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
      <button className="btn-ganykla" onClick={addAnimal}>
        Į ganykla
      </button>
    </div>
  );
}

export default Ganykla;
