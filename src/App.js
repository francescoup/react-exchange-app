import { useState } from "react";
import { Reorder } from "framer-motion";
import ExchangeForm from "./Components/ExchangeForm";
import Chart from "./Components/Chart";
import useChartsData from "./CustomHook/useChartsData";
import { lineData } from "./Data/chartsData";
import { lineConfiguration } from "./Data/chartsConfiguration";
import { date } from "./Utils/formatDate";
import useFetch from "./CustomHook/useFetch";
import { dataStep, dateFixed } from "./Utils/getTime";
import Cards from "./Components/Cards";
import useFetchForm from "./CustomHook/useFetchForm";
import useFetchGraps from "./CustomHook/useFetchGraps";
import useCardData from "./CustomHook/useCardData";

function App() {
  const endCurrentDate = date();
  const datastep = dateFixed();
  const [amount, setAmount] = useState(1);
  const [startDate, setStartDate] = useState(datastep);
  const [endDate, setEndDate] = useState(endCurrentDate);
  const [active, setActive] = useState(0);
  const { data, options, toValue, fromValue, setFromValue, setToValue } =
    useFetch("https://api.frankfurter.app/currencies");
  const { card, setCard } = useCardData(
    "https://api.frankfurter.app/latest?from=EUR&to=USD,GBP,JPY"
  );
  const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${fromValue}&to=${toValue}`;
  const urlChart = `https://api.frankfurter.app/${startDate}..${endDate}?amount=1&from=${fromValue}&to=${toValue}`;
  const { rates } = useFetchForm(url, toValue);
  const { dataCharts, isLoading } = useFetchGraps(urlChart, toValue, fromValue);
  const finalDataChart = useChartsData(dataCharts);
  const dataChart = lineData(finalDataChart, toValue);

  function onChangeFromValue(e) {
    const regex = /^[0-9\b]+$/;
    if (
      e.target.value === "" ||
      e.target.value.startsWith(0) ||
      regex.test(e.target.value)
    ) {
      setAmount(e.target.value);
    }
  }

  function changeStartDate(time, i) {
    setStartDate(dataStep(time, i));
    setActive(i);
  }

  return (
    <>
      <main className="min-h-screen bg-zinc-950 max-w-[1680px] grid-cols-1 grid md:grid-cols-3 gap-x-8 gap-y-8 md:p-12 p-3">
        <section className="mb-12 grid gap-8 col-span-2 md:col-span-1 lg:order-1 order-2">
          <ExchangeForm
            selectedFromValue={fromValue}
            selectedToValue={toValue}
            valueIn={amount}
            valueOut={rates}
            currency={options}
            onChangeTo={(e) => setToValue(e.target.value)}
            onChangeFrom={(e) => setFromValue(e.target.value)}
            onChangeValue={onChangeFromValue}
          />

          <Reorder.Group axis="y" values={card} onReorder={setCard}>
            {card &&
              card.map((cards) => {
                return <Cards key={cards.id} value={cards} />;
              })}
          </Reorder.Group>
        </section>
        <section className="col-span-2 lg:order-2 order-1 ">
          {dataChart && (
            <Chart
              data={dataChart}
              configuration={lineConfiguration}
              changedate={changeStartDate}
              active={active}
              Currency={finalDataChart}
              loading={isLoading}
            />
          )}
        </section>
      </main>
    </>
  );
}

export default App;
