import React from 'react';
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { convertEURtoUSD, convertUSDtoEUR, selectEur, selectUsd } from "../../store/currencySlice";
import './CurrencyConverter.css';

const CurrencyConverter = () => {
  const dispatch = useAppDispatch();
  const currencyUsd = useAppSelector(selectUsd);
  const currencyEur = useAppSelector(selectEur);

  const onCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    if (/^[0-9]*$/.test(value)) {
      if (name === 'usd') {
        dispatch(convertUSDtoEUR(value));
      } else {
        dispatch(convertEURtoUSD(value));
      }
    }
  };

  return (
      <div className="wrapper">
        <div className="col">
          <label htmlFor="usd">USD</label>
          <input
              className="field"
              onChange={onCurrencyChange}
              type="text"
              id="usd"
              name="usd"
              value={currencyUsd}
          />
        </div>
        <div className="col">
          <label htmlFor="eur">EUR</label>
          <input
              className="field"
              onChange={onCurrencyChange}
              type="text"
              id="eur"
              name="eur"
              value={currencyEur}
          />
        </div>
      </div>
  );
};

export default CurrencyConverter;