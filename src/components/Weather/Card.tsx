import React, { useCallback } from "react";

import { CardProps } from "typescript/react-props.types";
import { formatDate } from "../../utils/getPresentDateWeather";
import { TempDate, TempName, WeatherCard, WeatherForcast } from "./styles";

const Card: React.FC<CardProps> = ({ weather, onClick }) => {
  const imageSrc = `http://openweathermap.org/img/wn/${weather.icon}.png`;
  const WeatherIcon = useCallback(
    () => (
      <>
        {weather.units === "metric" ? (
          <span>&#8451;</span>
        ) : (
          <span>&#8457;</span>
        )}
      </>
    ),
    [weather]
  );

  return (
    <WeatherCard onClick={() => onClick(weather)} data-testid="weatherCard">
      <TempName>Temperature</TempName>
      <WeatherForcast>
        <p>
          {weather.temperature} <WeatherIcon />
        </p>
        <img src={imageSrc} alt="icon" />
      </WeatherForcast>
      <TempDate>{formatDate(weather?.dt_txt)}</TempDate>
    </WeatherCard>
  );
};

export default Card;
