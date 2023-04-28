import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  HiCurrencyDollar,
  HiCurrencyPound,
  HiCurrencyYen,
} from "react-icons/hi";

const useCardData = (url) => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(url);
        setCard([
          {
            value: data.data.rates.GBP,
            id: 1,
            currency: "GBP",
            icon: <HiCurrencyPound />,
            lastUpdate: data.data.date,
          },
          {
            value: data.data.rates.USD,
            id: 2,
            currency: "USD",
            icon: <HiCurrencyDollar />,
            lastUpdate: data.data.date,
          },
          {
            value: data.data.rates.JPY,
            id: 3,
            currency: "JPY",
            icon: <HiCurrencyYen />,
            lastUpdate: data.data.date,
          },
        ]);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [url]);
  return { card, setCard };
};

export default useCardData;
