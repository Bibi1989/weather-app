import _ from "lodash";
import { FormatedWeatherInterface } from "typescript/weather.types";

const getDate = (date: string) => new Date(date).getDay();

export const getDateWeatherForcast = (
  weathers: FormatedWeatherInterface[],
  date: string
) => {
  const now = getDate(date);
  return _.filter(
    weathers,
    (weather: FormatedWeatherInterface) => getDate(weather?.dt_txt) === now
  );
};

export const getPresentDayWeather = (weathers: FormatedWeatherInterface[]) => {
  return _.uniqBy(
    _.map(weathers, (weather: FormatedWeatherInterface) => ({
      ...weather,
      date: getDay(weather?.dt_txt),
    })),
    "date"
  );
};

export const formatDate = (date: string): string => {
  const dateString = new Date(date).toDateString();
  const day = dateString.split(" ")[2];
  const month = dateString.split(" ")[1];
  const year = dateString.split(" ")[3];
  return `${day} ${month} ${year}`;
};

export const getDay = (date: string): string => {
  const dateString = new Date(date).toDateString();
  const day = dateString.split(" ")[2];
  return day;
};
