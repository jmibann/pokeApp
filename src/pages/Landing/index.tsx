import React from 'react';

import Card from '../../components/Card';
import Button from '../../components/Button';

import { PokemonsList } from '../../services/API/type';

type LandingProps = {
  increment: () => void;
  decrement: () => void;
  paginationInfo: PokemonsList | undefined;
};

const Landing: React.FC<LandingProps> = ({ paginationInfo, increment, decrement }) => {


  return (
    <div className="flex flex-col items-center">

      <span className="text-2xl font-bold py-4">Welcome to PokeApp!</span>

      <div className="flex flex-row items-center flex-wrap my-8 w-full">
        {
          paginationInfo?.results.map(pokemon => <Card key={pokemon.url} {...pokemon} />)
        }
      </div>

      <div className="flex flex-row w-1/3 justify-between ">
        <Button handler={decrement} title="Prev" />
        <Button handler={increment} title="Next" />
      </div>

    </div >
  );
};

export default Landing;
