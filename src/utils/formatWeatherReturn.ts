import { WeatherInterface } from "typescript/weather.types";

export const formatWeatherReturn = (
  weathers: WeatherInterface[],
  units: string
) => {
  return weathers?.map((weather: WeatherInterface) => ({
    temperature: weather?.main?.temp,
    dt_txt: weather?.dt_txt,
    time: weather?.dt_txt.split(" ")[1],
    dt: weather?.dt,
    icon: weather?.weather[0]?.icon,
    description: weather?.weather[0]?.description,
    main: weather?.weather[0]?.main,
    units,
  }));
};
