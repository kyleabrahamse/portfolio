import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div>
      <button className="bg-green-600 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded" >
        {text}
      </button>
    </div>
  );
};

export default Button;
