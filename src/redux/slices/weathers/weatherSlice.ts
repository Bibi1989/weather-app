import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "redux/reducers";
import {
  FormatedWeatherInterface,
  SlicePayloadInterface,
} from "typescript/weather.types";
import {
  getPresentDayWeather,
  getDateWeatherForcast,
} from "utils/getPresentDateWeather";
import { getWeathers } from "./weatherActions";

export type InitialState = {
  weathers: FormatedWeatherInterface[];
  loading: boolean;
  error: string | null;
  weatherLength: number;
  barChartData: FormatedWeatherInterface[];
};

export const initialState: InitialState = {
  loading: false,
  weathers: [],
  weatherLength: 0,
  error: null,
  barChartData: [],
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
        state.loading = false;
        state.weathers = action.payload;
        state.weatherLength = getPresentDayWeather(action.payload).length;
        state.barChartData = getDateWeatherForcast(
          action.payload,
          action.payload[0]?.dt_txt
        );
      })
      .addCase(getWeathers.rejected, (state: InitialState) => {
        state.loading = false;
        state.error = "something went wrong";
      });
  },
});

export default weatherSlice.reducer;

export const { setWeatherToBarChartsData } = weatherSlice.actions;

export const weatherSelector = (state: RootState) => state.weather;
