import React, { createContext, useReducer } from "react";
import axios from "axios";
import { WeatherReducer } from "./WeatherReducer";
import { getWeathersAction, loadingAction } from "./WeatherActions";
import { getPresentDayWeather } from "../utils/getPresentDateWeather";
import { formatWeatherReturn } from "../utils/formatWeatherReturn";

const BASE_URL = process.env.REACT_APP_WEATHER_API;
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const initialState = {
  weathers: [],
  loading: false,
};

export type InitialState = typeof initialState;

export const WeatherContext = createContext({
  weathers: [],
  loading: false,
  getAllWeathers: () => {},
});

const WeatherProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  const getAllWeathers = async () => {
    try {
      dispatch(loadingAction(true));
      const response = await axios.get(
        `${BASE_URL}/forecast?q=Munich,de&APPID=${API_KEY}&cnt=40`
      );
      const formatReturn = formatWeatherReturn(response.data.list, "metric");
      const weathers = getPresentDayWeather(formatReturn);
      dispatch(loadingAction(false));
      dispatch(getWeathersAction(weathers));
    } catch (error) {
      dispatch(loadingAction(false));
      console.log(error);
    }
  };
  return (
    <WeatherContext.Provider
      value={{
        ...state,
        getAllWeathers,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
