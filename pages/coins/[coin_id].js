import {useRouter} from "next/router";
import { useState, useEffect } from "react";

function CoinDetail() {
  const [coin, setCoin] = useState(null);
  const router=useRouter();
  const {coin_id}=router.query;

  useEffect(()=>{
    const fetchData=async ()=>{
      const res=await fetch(`https://api.coinlore.net/api/tickers/?id=${coin_id}`);
      const json=await res.json();
      setCoin(json(0));
    }
    fetchData();
  },[coin_id])

  if(!coin){
    return (<h1>Loading...</h1>)
  }
  return (
    <div className="coin-detail">
      <div className="name-symbol">
        <h1 className="name">{coin.name}</h1>
        <h2 className="symbol">({coin.symbol})</h2>
      </div>
      <div className="market-description">
        <p className="coin-rank">Rank: {coin.rank}</p>
        <p className="coin-price">Price: ${coin.price_url}</p>
        <p className="coin-market-cap">Market Cap: ${coin.market_cap_usd}</p>
        <p className="coin-total-supply">Total Supply: {coin.tsupply}</p>
        <p className="coin-max-supply">Max Supply: {coin.msupply}</p>
      </div>
    </div>
  );
}

export default CoinDetail;
