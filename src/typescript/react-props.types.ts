import { FormatedWeatherInterface } from "./weather.types";

export type BarChartProps = {
  weathers: FormatedWeatherInterface[];
  barChartData: FormatedWeatherInterface[];
};

export type CustomBtnProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

export type NextBtnProps = {
  onClick: () => void;
  disabled: boolean;
  isMobile: boolean;
};

export type PrevBtnProps = {
  onClick: () => void;
  disabled: boolean;
  isMobile: boolean;
};

export type RadioGroupProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  units: string;
};

export type WeatherComponentProps = {
  weathers: FormatedWeatherInterface[];
  weatherLength: number;
  loading: boolean;
};

export type CardProps = {
  weather: FormatedWeatherInterface;
  onClick: (payload: FormatedWeatherInterface) => void;
};

export type WeatherActionProps = {
    refreshData: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    units: string;
  };
