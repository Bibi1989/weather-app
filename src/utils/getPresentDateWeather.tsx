import _ from "lodash";
import moment from "moment";

import { FormatedWeatherInterface } from "typescript/weather.types";

export const getDateWeatherForcast = (
  weathers: FormatedWeatherInterface[],
  date: string
) => {
  const now = date;
  return _.filter(
    weathers,
    (weather: FormatedWeatherInterface) =>
      getJustDate(weather?.dt_txt) === getJustDate(now)
  );
};

export const getPresentDayWeather = (weathers: FormatedWeatherInterface[]) => {
  return _.uniqBy(
    _.map(weathers, (weather: FormatedWeatherInterface) => ({
      ...weather,
      date: getJustDate(weather?.dt_txt),
    })),
    "date"
  );
};

export const formatDate = (date: string): string => {
  const dateString = moment(date).format("D MMM YYYY");
  return dateString;
};

export const getJustDate = (date: string): string => {
  return date.split(" ")[0];
};

export const getDay = (date: string): string => {
  const dateString = new Date(date).toDateString();
  const day = dateString.split(" ")[2];
  return day;
};
