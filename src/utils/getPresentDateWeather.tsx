import _ from "lodash";

const getDate = (date: string) => new Date(date).getDay();

export const getTodayWeatherForcast = (weathers: any, date: string) => {
  const now = getDate(date);
  return _.filter(weathers, (weather: any) => getDate(weather?.dt_txt) === now);
};

export const getPresentDayWeather = (weathers: any) => {
  return _.uniqBy(
    _.map(weathers, (weather: any) => ({
      ...weather,
      date: formatNewDate(weather?.dt_txt),
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

export const formatNewDate = (date: string): string => {
  const dateString = new Date(date).toDateString();
  const day = dateString.split(" ")[2];
  return day;
};
