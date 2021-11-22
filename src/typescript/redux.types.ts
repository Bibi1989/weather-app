import { FormatedWeatherInterface } from "./weather.types";

export type City = {
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
};

export type InitialState = {
  weathers: FormatedWeatherInterface[];
  loading: boolean;
  error: string | null;
  weatherLength: number;
  barChartData: FormatedWeatherInterface[];
  city: City | null;
};

export type WeatherActionPayload = {
  coord?: any | undefined;
  units?: string | undefined;
};
