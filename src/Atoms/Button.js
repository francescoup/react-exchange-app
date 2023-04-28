import React from "react";

const Button = ({ title, number, time, onclick, active, i }) => {
  return (
    <button
      onClick={() => onclick(time, i)}
      className={`${
        active === i && " bg-green-300 "
      } hover:scale-105  transition-all p-2 flex font-sans justify-between items-center bg-[#e8e653] rounded-3xl w-full"`}
    >
      <h3 className="text-slate-200 text-xs flex justify-center items-center bg-black rounded-full w-8 h-8">
        {number}
      </h3>

      <h4 className="m-2 text-xs">{title}</h4>
    </button>
  );
};

export default Button;
