import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);
  const [fromValue, setFromValue] = useState();
  const [toValue, setToValue] = useState();

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(url);
        setData(data);
        setOptions(Object.keys(data.data));
        setFromValue("EUR");
        setToValue("GBP");
      } catch (err) {
        console.log(err);
      }
    })();
  }, [url]);

  return { data, options, toValue, fromValue, setFromValue, setToValue };
};

export default useFetch;
