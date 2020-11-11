import React, { useState, useEffect, Suspense } from 'react';

import { Img } from 'react-image';

import { getPokemon } from '../../services/API';
import { PokemonInfo } from '../../services/API/type';

type CardProps = {
  name: string;
  url: string;
};


const Card: React.FC<CardProps> = ({ name, url }) => {
  const [pokemon, setPokemon] = useState<PokemonInfo>();

  useEffect(() => {
    const fetchPokemonInfo = async () => await getPokemon(url).then(pokemon => setPokemon(pokemon));

    fetchPokemonInfo();
  }, [url]);

  return (
    <div className="flex flex-col w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 justify-center items-center p-4">
      <div
        className="flex flex-col items-center w-full bg-gray-100 border shadow-xl rounded-xl hover:border hover:border-gray-500 hover:bg-gray-300"
        onClick={() => console.log('=========> CLICK! ')}
      >
        <div className="w-4/5  bg-red-500" >
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon?.id}.png`} />
        </div>

        <span className="text-xl font-semibold py-4" >{name}</span>
      </div>
    </div>
  );
};

export default Card;

