import React, { useState, useEffect } from 'react';
import './CoinList.css';

const CoinList = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch('https://iili.io/JnDI9Kx.th.png');
        const coinsData = await response.json();
        setCoins(coinsData);
      } catch (error) {
        console.error('Error fetching coins:', error.message);
      }
    };

    fetchCoins();
  }, []);

  const handleCoinClick = (coin) => {
    console.log('Coin clicked:', coin);
  };

  return (
    <div className="coin-list-container">
      <h2>Top 10 Verified Coins</h2>
      <ul className="coin-list">
        {coins.slice(0, 10).map((coin) => (
          <li key={coin.id} onClick={() => handleCoinClick(coin)}>
            <div className="coin-item">
              <img src={coin.image} alt={coin.name} />
              <div className="coin-info">
                <h3>{coin.name}</h3>
                <p>Symbol: {coin.symbol}</p>
                <p>Price: ${coin.price}</p>
                <p>Market Cap: ${coin.marketCap}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoinList;
