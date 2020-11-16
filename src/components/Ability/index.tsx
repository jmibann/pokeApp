import React, { useState, useEffect } from 'react';

import ItemSpecs from '../ItemSpecs'

import { getAbility } from '../../services/API';
import { Details } from '../../services/API/type';

type AbilityProps = {
  name: string;
  url: string;
};

const Ability: React.FC<AbilityProps> = ({ name, url }) => {
  const [ability, setAbility] = useState<Details>();

  useEffect(() => {
    const fetchAbilities = async () => await getAbility(name).then(ability => setAbility(ability));

    fetchAbilities();
  }, []);

  const  getText = (selectedLang: string) => {
    return ability?.flavor_text_entries.find( ({language}) => language.name === selectedLang)?.flavor_text as string; 
  };


  return (
    <div className="flex flex-row w-full my-2 rounded border border-gray-300 shadow">
      {
        ability
          ? (<ItemSpecs name={ability.name} descriptionLang1={getText('es')} descriptionLang2={getText('fr')}/>)
          : (<span key={name} > Loading ability...</span>)
      }
    </div>
  )
};

export default Ability;
