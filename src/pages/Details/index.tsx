import React from 'react';
import { useLocation, useHistory } from "react-router-dom";

import Ability from '../../components/Ability';
import Move from '../../components/Move';
import Button from '../../components/Button';

import { PokemonInfo } from '../../services/API/type';

const Details: React.FC<{}> = () => {
  const history = useHistory();
  const { state } = useLocation<PokemonInfo>();
  const { name, id, abilities, moves } = state;

  return (
    <section className="flex flex-col w-full items-center py-8">

      <Button title="Go Back" handler={history.goBack} />

      <span className="text-3xl py-8 font-bold">{name}</span>

      <div className="w-1/3">
        <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt={name} />
      </div>

      <div className="flex flex-col w-4/5">
        <div className="flex flex-row w-full justify-center mt-6" >
          <span className="text-xl font-bold uppercase"> Abilities:</span>
        </div>

        {abilities.map(({ ability }) => <Ability key={ability.name} {...ability} />)}

      </div>

      <span className="text-xl font-bold uppercase">Moves: </span>

      <div className="flex flex-col w-4/5 justify-start pt-8" >
        {moves.map(({ move }) => <Move key={move.url} {...move} />)}
      </div>

    </section>
  );
};

export default Details;
