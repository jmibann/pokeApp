import React, { useEffect, useState } from 'react';

import ItemSpecs from '../ItemSpecs';

import { getMove } from '../../services/API';
import { Details } from '../../services/API/type';

type MoveProps = {
  name: string;
  url: string;
};

const Move: React.FC<MoveProps> = ({ name, url }) => {
  const [move, setMove] = useState<Details>();

  useEffect(() => {
    const fetchMoves = async () => await getMove(name).then(move => setMove(move));

    fetchMoves();

    return () => setMove(undefined);
  }, []);


  const  getText = (selectedLang: string) => {
    return move?.flavor_text_entries.find( ({language}) => language.name === selectedLang)?.flavor_text as string; 
  };

  return (
    <div className="flex flex-row w-full my-2 rounded border border-gray-300 shadow">
      {
        move
          ? (
            <ItemSpecs name={move.name} descriptionLang1={getText('es')} descriptionLang2={getText('fr')}/>
          )
          : (<span key={name} >  Loading move... </span>)
      }
    </div>
  )
};

export default Move;
