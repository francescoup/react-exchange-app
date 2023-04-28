import React from "react";
import { Reorder, useMotionValue } from "framer-motion";

const Cards = ({ value }) => {
  const y = useMotionValue(0);
  return (
    <>
      <Reorder.Item
        id={value}
        value={value}
        style={{ y }}
        className="p-3 flex font-sans justify-between items-center bg-black rounded-xl w-full mb-8 "
      >
        <div className="flex items-center">
          <span className="text-5xl text-[#e8e653] mr-2 lg:mr-8">
            {value.icon}
          </span>
          <div className="text-sm lg:text-base">
            <h3 className="text-slate-400">
              {value.currency} {value.value}
            </h3>
            <h4 className="text-slate-400">Last Update: {value.lastUpdate}</h4>
          </div>
        </div>
      </Reorder.Item>
    </>
  );
};

export default Cards;
