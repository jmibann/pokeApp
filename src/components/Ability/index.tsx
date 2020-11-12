import React, { useState, useEffect } from 'react';

import { getAbility } from '../../services/API';
import { AbilityDetails } from '../../services/API/type';

type AbilityProps = {
  name: string;
  url: string;
};

const Ability: React.FC<AbilityProps> = ({ name, url }) => {
  const [ability, setAbility] = useState<AbilityDetails>();

  useEffect(() => {
    const fetchAbilities = async () => await getAbility(name).then(ability => setAbility(ability));

    fetchAbilities();
  }, []);

  console.log("--------> ", ability);

  return (
    <>
      {
        ability?.effect_entries
          ? (<span key={name + ability.effect_entries[1].short_effect}>{name} : {ability.effect_entries[1].short_effect}</span>)
          : (<span key={name} > { name} : </span>)
      }
    </>
  )
};

export default Ability;
