import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (CUSTOM_URL = "https://dummyjson.com/recipes") => {
  const [finalData, setFinalData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { status, data } = await axios.get(CUSTOM_URL);
      if (status == 200) {
        console.log(data, "datadata");
        setFinalData(data);
        setLoading(false);
      }
    } catch (err) {
      setError("Bad request server down ");
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return [finalData, error, loading];
};

export default useAxios;
