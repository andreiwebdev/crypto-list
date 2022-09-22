import axios from "axios";
import { useState, useEffect } from "react";

const client = axios.create({
  baseURL: "https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR",
});

function App() {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    async function getCrypto() {
      const resp = await client.get();
      setCrypto(resp.data.coins);
    }
    getCrypto();
  }, []);

  return (
    <div>
      <pre>
        {crypto.map((item, key) => (
          <div key={key}>
            <h1>{item.name}</h1>
          </div>
        ))}
      </pre>
    </div>
  );
}

export default App;
