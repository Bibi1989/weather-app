import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "redux/reducers";
import { InitialState } from "typescript/redux.types";
import { SlicePayloadInterface } from "typescript/weather.types";
import {
  getPresentDayWeather,
  getDateWeatherForcast,
} from "utils/getPresentDateWeather";
import { getWeathers, getWeathersFromYourLocation } from "./weatherActions";

export const initialState: InitialState = {
  loading: false,
  weathers: [],
  weatherLength: 0,
  error: null,
  barChartData: [],
  city: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherToBarChartsData: (
      state: InitialState,
      { payload: { weather, weathers } }: PayloadAction<SlicePayloadInterface>
    ) => {
      state.barChartData = getDateWeatherForcast(weathers, weather?.dt_txt);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getWeathers.pending, (state: InitialState) => {
        state.loading = true;
      })
      .addCase(getWeathers.fulfilled, (state: InitialState, action) => {
        const { weathers, city } = action.payload;
        state.loading = false;
        state.weathers = weathers;
        state.city = city;
        state.weatherLength = getPresentDayWeather(weathers).length;
        state.barChartData = getDateWeatherForcast(
          weathers,
          weathers[0]?.dt_txt
        );
      })
      .addCase(getWeathers.rejected, (state: InitialState) => {
        state.loading = false;
        state.error = "something went wrong";
      })
      .addCase(getWeathersFromYourLocation.pending, (state: InitialState) => {
        state.loading = true;
      })
      .addCase(
        getWeathersFromYourLocation.fulfilled,
        (state: InitialState, action) => {
          const { weathers, city } = action.payload;
          state.loading = false;
          state.weathers = weathers;
          state.city = city;
          state.weatherLength = getPresentDayWeather(weathers).length;
          state.barChartData = getDateWeatherForcast(
            weathers,
            weathers[0]?.dt_txt
          );
        }
      )
      .addCase(getWeathersFromYourLocation.rejected, (state: InitialState) => {
        state.loading = false;
        state.error = "something went wrong";
      });
  },
});

export default weatherSlice.reducer;

export const { setWeatherToBarChartsData } = weatherSlice.actions;

export const weatherSelector = (state: RootState) => state.weather;
