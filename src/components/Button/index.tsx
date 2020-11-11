import React from 'react';

type ButtonProps = {
  title: string;
  handler: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, handler }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handler}>
      {title}
    </button>
  );
};

export default Button;

