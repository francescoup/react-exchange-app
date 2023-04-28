import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { BsFillPieChartFill } from "react-icons/bs";
import { timeData } from "../Data/timeData";
import Button from "../Atoms/Button";
import CurrencyInfo from "../Atoms/CurrencyInfo";
import LoadingCurrency from "../Atoms/LoadingCurrency";

const Chart = ({
  data,
  configuration,
  changedate,
  Currency,
  loading,
  active,
}) => {
  return (
    <>
      <div className="bg-black grid gap-8  p-8 rounded-xl">
        <div className="flex justify-start items-center gap-x-4">
          <div>
            <BsFillPieChartFill className="text-2xl text-orange-400" />
          </div>
          <div>
            <h2 className="text-xl text-slate-100">Currency Historical</h2>
          </div>
        </div>
        {loading ? <LoadingCurrency /> : <CurrencyInfo data={Currency} />}

        <div className="h-80 relative overflow-hidden">
          <Line data={data} options={configuration} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {timeData.map((btn, i) => {
            return (
              <Button
                key={i}
                {...btn}
                onclick={changedate}
                active={active}
                i={i}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Chart;
