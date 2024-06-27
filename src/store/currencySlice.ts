import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EUR_TO_USD, USD_TO_EUR } from "../constants";
import { RootState } from "../app/store";

interface ICurrency {
  usd: string;
  eur: string;
}

const initialState: ICurrency = {
  usd: '',
  eur: ''
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    convertUSDtoEUR: (state, action : PayloadAction<string>) => {
      if (!action.payload) {
        state.usd = '';
        state.eur = '';
        return;
      }
      state.usd = action.payload;
      state.eur = (parseFloat(action.payload) * USD_TO_EUR).toString();
    },
    convertEURtoUSD: (state, action : PayloadAction<string>) => {
      if(!action.payload) {
        state.usd = '';
        state.eur = '';
        return;
      }
      state.eur = action.payload;
      state.usd = (parseFloat(action.payload) * EUR_TO_USD).toString();
    }
  }
});


export const selectUsd = (state: RootState) => state.currency.usd;
export const selectEur = (state: RootState) => state.currency.eur;
export const {convertUSDtoEUR, convertEURtoUSD} = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;