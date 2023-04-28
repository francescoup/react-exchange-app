import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetchGraps = (url, toValue, fromValue) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataCharts, setDataCharts] = useState([]);

  useEffect(() => {
    if (toValue != null && fromValue != null) {
      (async () => {
        setIsLoading(true);
        try {
          const data = await axios.get(url);
          setDataCharts(data.data);
        } catch (err) {
          console.log(err);
          setIsLoading(false);
        }
        setIsLoading(false);
      })();
    }
  }, [url]);

  return { dataCharts, isLoading };
};

export default useFetchGraps;
