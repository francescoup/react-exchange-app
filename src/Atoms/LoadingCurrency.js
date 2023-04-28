import React from "react";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";

const LoadingCurrency = () => {
  return (
    <div>
      <h2 className="text-slate-200 text-4xl">
        0.00000
        <span className="text-sm ml-4">eur</span>
      </h2>
      <div className="flex items-center">
        <span className="text-3xl text-yellow-200">
          <FiArrowUpRight />
        </span>
        <h3 className="text-slate-100">0.00%</h3>
      </div>
    </div>
  );
};

export default LoadingCurrency;
