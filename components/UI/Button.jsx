import React from "react";

const Button = ({ text, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="bg-accent hover:bg-accent/60 disabled:bg-accent/40 text-secondary w-full cursor-pointer rounded-lg px-[10px] py-2 transition-colors duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
