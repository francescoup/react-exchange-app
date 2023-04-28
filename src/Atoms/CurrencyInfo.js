import React from "react";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
const CurrencyInfo = ({ data }) => {
  const [amount, currency, date, rates, key, value] = data;

  const valueCurrent = value.at(-1);
  const CurrencyCurrent = key.at(1);
  const initialValue = value.at(0);
  const icon =
    valueCurrent > initialValue ? <FiArrowUpRight /> : <FiArrowDownLeft />;
  const ratesPercentage = (
    ((valueCurrent - initialValue) / initialValue) *
    100
  ).toFixed(2);

  return (
    <div>
      <h2 className="text-slate-200 text-4xl">
        {valueCurrent}
        <span className="text-sm ml-4">{CurrencyCurrent}</span>
      </h2>
      <div className="flex items-center">
        <span className="text-3xl text-yellow-200">{icon}</span>
        <h3 className="text-slate-100">{ratesPercentage}%</h3>
      </div>
    </div>
  );
};

export default CurrencyInfo;
