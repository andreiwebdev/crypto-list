import { useState, useEffect } from "react";
import axios from "axios";

const client = axios.create({
  baseURL: "https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR",
});

const useFetch = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getCrypto() {
      const resp = await client.get();
      setData(resp.data.coins);
    }
    getCrypto();
  }, []);
  return { data };
};
export default useFetch;
