import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

import { getAbility, getMove } from '../../services/API';
import { PokemonInfo } from '../../services/API/type';

const Details: React.FC<{}> = () => {
  const { state } = useLocation<PokemonInfo>();
  const [abilitiesDetails, setAbilitiesDetails] = useState<any[]>([]);
  const [movesDetails, setMovesDetails] = useState<any[]>([]);
  const { name, id, abilities, moves } = state;

  useEffect(() => {
    let fetchPromises: Promise<any>[] = [];
    let fetchMovePromises: Promise<any>[] = [];

    const fetchAbilities = async () => {
      abilities.forEach(ability => fetchPromises = [...fetchPromises, getAbility(ability.ability.name)])
      return await Promise.all(fetchPromises).then(res => setAbilitiesDetails(res));
    }

    const fetchMoves = async () => {
      moves.forEach(move => fetchMovePromises = [...fetchMovePromises, getMove(move.move.name)])
      return await Promise.all(fetchMovePromises).then(res => setMovesDetails(res));
    }

    fetchAbilities();
    fetchMoves();
  }, []);

  // console.log("__________ STATE : ", state);
  // console.log("???????????? abilitiesDetails : ", abilitiesDetails);
  // console.log(">>>>>>>>>>>> movesDetails : ", movesDetails);

  return (
    <section className="flex flex-col w-full items-center pt-8">
      <span className="text-3xl py-8 font-bold">{name}</span>
      <div className="w-1/3" >
        <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt={name} />
      </div>

      <div className="flex flex-col w-4/5">
        <div className="flex flex-row w-full justify-center" >
          <span className="text-xl font-bold uppercase"> Abilities:</span>
        </div>

        {abilities.map(ability => <span key={ability.ability.name}>{ability.ability.name}</span>)}

      </div>

      <span className="text-xl font-bold uppercase">Moves: </span>
      {/* {moves.map(move => <span key={move.move.name}>{move.move.name}</span>)} */}
      <div className="flex flex-col w-4/5 justify-start pt-8" >
        {movesDetails.map(move => <span key={move.name + move.effect_entries[0].short_effect}>{move.name} : {move.effect_entries[0].short_effect}</span>)}
      </div>

    </section>
  );
};

export default Details;
