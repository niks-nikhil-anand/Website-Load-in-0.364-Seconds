import React from "react";

const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button className=" bg-white gradient_blue-purple  font-bold py-[1.3rem] px-[5rem] rounded hover:bg-blue-300 heading4">
      {children}
    </button>
  );
};

export default Button;
