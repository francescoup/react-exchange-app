import React from "react";

const useChartsData = (data) => {
  const { amount, base, end_date, rates } = data;
  const currencyInteval = rates && Object.values(rates);
  const currency = rates && Object.values(currencyInteval);
  const value = currencyInteval?.flatMap((el) => {
    return Object.values(el);
  });
  const key = currency?.flatMap((el) => {
    return Object.keys(el);
  });

  return [amount, base, end_date, rates, key, value];
};

export default useChartsData;
