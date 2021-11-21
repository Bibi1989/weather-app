import React, { useCallback } from "react";
import styled from "styled-components";
import { FormatedWeatherInterface } from "typescript/weather.types";
import { formatDate } from "../../utils/getPresentDateWeather";

type Props = {
  weather: FormatedWeatherInterface;
  onClick: (payload: FormatedWeatherInterface) => void;
};

const Card: React.FC<Props> = ({ weather, onClick }) => {
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
    <WeatherCard onClick={() => onClick(weather)}>
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

const WeatherCard = styled.div`
  padding: 10px 20px;
  margin: 0 5px;
  background-color: violet;
  color: white;
  border-radius: 4px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

const TempName = styled.div`
  text-align: center;
  font-size: 18px;
`;
const WeatherForcast = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  p {
    font-size: 13px;
  }
`;
const TempDate = styled.div``;

export default Card;
