import { FormatedWeatherInterface } from "./weather.types";

export type InitialState = {
  weathers: FormatedWeatherInterface[];
  loading: boolean;
  error: string | null;
  weatherLength: number;
  barChartData: FormatedWeatherInterface[];
};
