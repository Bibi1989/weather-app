import { createAsyncThunk } from "@reduxjs/toolkit";

import { getApi } from "constants/api";
import { DEFAULT_LAT, DEFAULT_LONG } from "constants/static";
import { WeatherActionPayload } from "typescript/redux.types";
import { formatWeatherReturn } from "utils/formatWeatherReturn";

const BASE_URL = process.env.REACT_APP_WEATHER_API;
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getWeathers = createAsyncThunk(
  "GET_WEATHERS",
  async (payload?: WeatherActionPayload) => {
    const newUnit = payload?.units ? payload.units : "metric";

    const { list, city } = await getApi(
      `${BASE_URL}/forecast?APPID=${API_KEY}&cnt=40&units=${newUnit}&lon=${DEFAULT_LONG}&lat=${DEFAULT_LAT}`
    );
    const formatReturn = formatWeatherReturn(list, newUnit);
    const weathers = formatReturn;
    return { weathers, city };
  }
);

export const getWeathersFromYourLocation = createAsyncThunk(
  "CURRENT_WEATHERS",
  async (payload: WeatherActionPayload) => {
    const newUnit = payload?.units ? payload.units : "metric";

    const long = payload?.coord?.long ? payload?.coord?.long : DEFAULT_LONG;
    const lat = payload?.coord?.lat ? payload?.coord?.lat : DEFAULT_LAT;

    const { list, city } = await getApi(
      `${BASE_URL}/forecast?APPID=${API_KEY}&cnt=40&units=${newUnit}&lon=${long}&lat=${lat}`
    );
    const formatReturn = formatWeatherReturn(list, newUnit);
    const weathers = formatReturn;
    return { weathers, city };
  }
);
