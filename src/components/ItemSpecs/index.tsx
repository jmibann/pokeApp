import React from 'react';

type ItemSpecsProps = {
  name: string;
  descriptionLang1: string;
  descriptionLang2: string;
};

const ItemSpecs: React.FC<ItemSpecsProps> = ({name, descriptionLang1, descriptionLang2}) => {
    return (
      <div className="flex flex-col w-full px-2" key={name}>
      <div className="flex flex-col w-full">
        <span className="uppercase font-semibold pr-2">{name}:</span> 
        <span>{descriptionLang1}</span>
        <span>{descriptionLang2}</span>
      </div>
  </div>
    );
};

export default ItemSpecs;
