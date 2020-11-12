import React, { useEffect, useState } from 'react';

import { getMove } from '../../services/API';
import { MoveDetails } from '../../services/API/type';

type MoveProps = {
  name: string;
  url: string;
};

const Move: React.FC<MoveProps> = ({ name, url }) => {
  const [move, setMove] = useState<MoveDetails>();

  useEffect(() => {
    const fetchMoves = async () => await getMove(name).then(move => setMove(move));

    fetchMoves();

    return () => setMove(undefined);
  }, []);

  return (
    <>
      {
        move?.effect_entries
          ? (<span key={name + move.effect_entries[0].short_effect}>{name} : {move.effect_entries[0].short_effect}</span>)
          : (<span key={name} > { name} : </span>)
      }
    </>
  )
};

export default Move;
