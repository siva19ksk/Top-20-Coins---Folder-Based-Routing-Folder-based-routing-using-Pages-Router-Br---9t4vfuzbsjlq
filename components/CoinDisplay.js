import React, { useState, useEffect } from "react";
import CoinCard from "./CoinCard";

function CoinDisplay({ coin }) {
  const [coins, setCoins] = useState([]);
  useEffect(()=>{
    const fetchData=async ()=>{
      const res=await fetch("https://api.coinlore.net/api/tickers/");
      const json=await res.json();
      const finalData=json.data.slice(0,20);
      setCoins(finalData);
    }
    fetchData();
  },[])

  return (
    <div className="home">
      <h1>Top 20 Cryptos</h1>
      <div className="coins-container">
        {coins.map((coin) => (
          <CoinCard coin={coin}/>
        ))}
      </div>
    </div>
  );
}

export default CoinDisplay;
