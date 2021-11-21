export interface MainInterface {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface InnerWeatherInterface {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface CloudInterface {
  all: number;
}

export interface WindInterface {
  speed: number;
  deg: number;
  gust: number;
}

export interface SysInterface {
  pod: string;
}

export interface WeatherInterface {
  dt: number;
  main: MainInterface;
  weather: InnerWeatherInterface[];
  clouds: CloudInterface;
  wind: WindInterface;
  visibility: number;
  pop: number;
  sys: SysInterface;
  dt_txt: string;
}

export interface FormatedWeatherInterface {
  description: string;
  dt: number;
  dt_txt: string;
  icon: string;
  main: string;
  temperature: number;
  time: string;
  units: string;
}

export interface SlicePayloadInterface {
  weather: FormatedWeatherInterface;
  weathers: FormatedWeatherInterface[];
}
