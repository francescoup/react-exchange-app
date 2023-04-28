export const lineData = (data, toValue) => {
  const [amount, currency, date, rates] = data;

  const currencyInteval = rates && Object.values(rates);
  const value = currencyInteval?.map((el) => {
    return Object.values(el);
  });

  const dateInterval = rates && Object.keys(rates);
  const LineData = {
    labels: dateInterval?.map((el) => el),
    datasets: [
      {
        data: value?.flatMap((el) => {
          return el;
        }),
        label: "Variazione",
        borderColor: "#e8e653",
        backgroundColor: "#F3EF5260",
        fill: true,
        lineTension: 0,
      },
    ],
  };
  return LineData;
};
