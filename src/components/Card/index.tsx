import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { getPokemon } from '../../services/API';
import { PokemonInfo } from '../../services/API/type';

import loadingImg from './loader.gif';
import notFound from './notFound.jpg';

type CardProps = {
  name: string;
  url: string;
};

const Card: React.FC<CardProps> = ({ name, url }) => {
  const [pokemon, setPokemon] = useState<PokemonInfo>();
  const [errorLoadingImg, setErrorLoadingImg] = useState(false);

  const history = useHistory();

  useEffect(() => {
    let isMounted = true;

    const fetchPokemonInfo = async () => await getPokemon(url).then(pokemon => isMounted ? setPokemon(pokemon) : null);

    fetchPokemonInfo();

    return () => {
      isMounted = false;
      return;
    };
  }, [url]);

  const setOnErrorImage = () => setErrorLoadingImg(true);

  return (
    <div className="flex flex-col w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 justify-center items-center p-4">
      <div
        className="flex flex-col items-center w-full pt-4 bg-gray-200 border shadow-xl rounded-xl hover:border hover:border-gray-500 hover:bg-gray-300 cursor-pointer"
        onClick={() => history.push({ pathname: '/pokemon', state: { ...pokemon } })}
      >
        <div className="w-4/5" >

          {pokemon?.id
            ? <img
              src={errorLoadingImg ? notFound : `https://pokeres.bastionbot.org/images/pokemon/${pokemon?.id}.png`}
              onError={setOnErrorImage}
              alt={name}
            />
            : <img src={loadingImg} alt="loading..." width={200} />
          }
        </div>

        <span className="text-xl font-semibold py-4" >{name}</span>
      </div>
    </div>
  );
};

export default Card;

