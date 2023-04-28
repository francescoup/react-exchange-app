import React, { useEffect, useRef } from "react";
import { HiCurrencyEuro } from "react-icons/hi";

const ExchangeForm = ({
  currency,
  onChangeTo,
  onChangeFrom,
  valueIn,
  valueOut,
  onChangeValue,
  selectedFromValue,
  selectedToValue,
}) => {
  const fromRef = useRef(null);
  const toRef = useRef(null);

  useEffect(() => {
    const to = toRef.current.value;
    const from = fromRef.current.childNodes;
    from.forEach((element) => {
      if (to === element.getAttribute("value")) {
        element.setAttribute("disabled", "disabled");
      } else {
        element.removeAttribute("disabled");
      }
    });
    const toIn = toRef.current.childNodes;
    const fromOf = fromRef.current.value;
    toIn.forEach((element) => {
      if (fromOf === element.getAttribute("value")) {
        element.setAttribute("disabled", "disabled");
      } else {
        element.removeAttribute("disabled");
      }
    });
  }, [selectedFromValue, selectedToValue]);

  return (
    <>
      <div className="grid grid-cols-1  bg-[#e8e653]   rounded-xl p-8 gap-y-4 ">
        <div className="flex justify-start items-center gap-x-4">
          <div>
            <HiCurrencyEuro className="text-4xl" />
          </div>
          <div>
            <h1 className="text-xl text-gray-900">React Currency Exchange</h1>
          </div>
        </div>

        <div className="box-border w-full ">
          <h2 className="text-sm mb-4">You Have</h2>
          <div className="border rounded-lg border-gray-400 w-full p-4 flex justify-between">
            <input
              className="focus:outline-none text-left bg-transparent w-full   box-border border-0 "
              type="text"
              value={valueIn}
              onChange={onChangeValue}
            />
            <select
              className="bg-transparent"
              ref={toRef}
              value={selectedFromValue}
              onChange={onChangeFrom}
            >
              {currency.map((options) => {
                return (
                  <option key={options} value={options}>
                    {options}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-left text-sm mb-4">You Reveive</h2>
          <div className="flex justify-between w-full border border-gray-400 rounded-lg p-4">
            <p className=" text-left">{valueOut}</p>
            <select
              className="bg-transparent"
              ref={fromRef}
              value={selectedToValue}
              onChange={onChangeTo}
            >
              {currency.map((options) => {
                return (
                  <option key={options} value={options}>
                    {options}
                  </option>
                );
              })}
            </select>
          </div>
          <h5 className="text-sm text-gray-900 mt-4">
            Developed by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://francescoup.github.io/start2impact-project/"
            >
              Francesco Mangione
            </a>
          </h5>
        </div>
      </div>
    </>
  );
};

export default ExchangeForm;
