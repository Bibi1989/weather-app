import { createAsyncThunk } from "@reduxjs/toolkit";

import { getApi } from "constants/api";
import { formatWeatherReturn } from "utils/formatWeatherReturn";

const BASE_URL = process.env.REACT_APP_WEATHER_API;
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getWeathers = createAsyncThunk(
  "GET_WEATHERS",
  async (unit: string | undefined) => {
    const newUnit = unit ? unit : "metric";
    const { list } = await getApi(
      `${BASE_URL}/forecast?q=Munich,de&APPID=${API_KEY}&cnt=40&units=${newUnit}`
    );
    const formatReturn = formatWeatherReturn(list, newUnit);
    const weathers = formatReturn;
    return weathers;
  }
);
