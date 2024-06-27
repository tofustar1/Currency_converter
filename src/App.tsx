import React from 'react';
import { useAppDispatch, useAppSelector } from "./app/hook";
import { convertEURtoUSD, convertUSDtoEUR, selectEur, selectUsd } from "./store/currencySlice";
import './App.css';

const App = () => {
  const dispatch = useAppDispatch();
  const currencyUsd = useAppSelector(selectUsd);
  const currencyEur = useAppSelector(selectEur);

  const onCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    if (name === 'usd') {
      dispatch(convertUSDtoEUR(value));
    } else {
      dispatch(convertEURtoUSD(value));
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
                value={currencyUsd}
            />
          </div>
          <div className="col">
            <label htmlFor="EUR">EUR</label>
            <input
                onChange={onCurrencyChange}
                type="number"
                id="eur"
                name="eur"
                value={currencyEur}
            />
          </div>
        </div>
      </div>
  )
};

export default App;
