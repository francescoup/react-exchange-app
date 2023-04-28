import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetchForm = (url, toValue) => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    if (toValue != null) {
      (async () => {
        try {
          const data = await axios.get(url);
          setRates(data.data.rates[toValue]);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [url]);

  return { rates };
};

export default useFetchForm;
