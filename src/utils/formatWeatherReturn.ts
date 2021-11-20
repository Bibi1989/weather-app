export const formatWeatherReturn = (weathers: any, units: string) => {
  return weathers?.map((weather: any) => ({
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
