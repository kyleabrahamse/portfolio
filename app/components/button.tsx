import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div>
      <button className="hover:bg-green-500 bg-teal-600 text-white font-bold py-2 px-4 rounded transform transition-all hover:scale-105"> 
        {text}
      </button>
    </div>
  );
};

export default Button;
