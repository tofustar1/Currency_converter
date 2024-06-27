import React, { useState } from 'react';
import { EUR_TO_USD, USD_TO_EUR } from "./constants";
import './App.css';

interface currenciesState {
  usd: string;
  eur: string;
}

const App = () => {
  const [currencies, setCurrencies] = useState<currenciesState>({
    usd: '',
    eur: '',
  });

  const onCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    const parsedValue = parseFloat(value);

    if (isNaN(parsedValue)) {
      setCurrencies({
        usd : '',
        eur: ''
      });
      return;
    }

    if (name === 'usd') {
      setCurrencies({
        usd: value,
        eur: (parsedValue * USD_TO_EUR).toString()
      });
    } else {
      setCurrencies({
        usd: (parsedValue * EUR_TO_USD).toString(),
        eur: value
      });
    }
  };

  return (
      <div className="container">
        <div className="wrapper">
          <div className="col">
            <label htmlFor="usd">USD</label>
            <input
                onChange={onCurrencyChange}
                type="number"
                id="usd"
                name="usd"
                value={currencies.usd}
            />
          </div>
          <div className="col">
            <label htmlFor="EUR">EUR</label>
            <input
                onChange={onCurrencyChange}
                type="number"
                id="eur"
                name="eur"
                value={currencies.eur}
            />
          </div>
        </div>
      </div>
  )
};

export default App;
