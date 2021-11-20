import { createAsyncThunk } from "@reduxjs/toolkit";

import { getApi } from "constants/api";
import { formatWeatherReturn } from "utils/formatWeatherReturn";

const BASE_URL = process.env.REACT_APP_WEATHER_API;
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getWeathers = createAsyncThunk(
  "weathers/getWeathers",
  async (unit: string | undefined) => {
    const newUnit = unit ? unit : "metric";
    const response = await getApi(
      `${BASE_URL}/forecast?q=Munich,de&APPID=${API_KEY}&cnt=40&units=${newUnit}`
    );
    const formatReturn = formatWeatherReturn(response.list, newUnit);
    const weathers = formatReturn;
    return weathers;
  }
);
