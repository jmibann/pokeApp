import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { getPokemon } from '../../services/API';
import { PokemonInfo } from '../../services/API/type';

type CardProps = {
  name: string;
  url: string;
};

const Card: React.FC<CardProps> = ({ name, url }) => {
  const [pokemon, setPokemon] = useState<PokemonInfo>();
  const history = useHistory();

  useEffect(() => {
    const fetchPokemonInfo = async () => await getPokemon(url).then(pokemon => setPokemon(pokemon));

    fetchPokemonInfo();
  }, [url]);

  return (
    <div className="flex flex-col w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 justify-center items-center p-4">
      <div
        className="flex flex-col items-center w-full pt-4 bg-gray-200 border shadow-xl rounded-xl hover:border hover:border-gray-500 hover:bg-gray-300 cursor-pointer"
        onClick={() => history.push({ pathname: '/pokemon', state: { ...pokemon } })}
      >
        <div className="w-4/5" >
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon?.id}.png`} alt={name} />
        </div>

        <span className="text-xl font-semibold py-4" >{name}</span>
      </div>
    </div>
  );
};

export default Card;

