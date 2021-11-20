import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { NUMBER_TO_SHOW } from "constants/static";
import { setWeatherToBarChartsData } from "redux/slices/weathers/weatherSlice";
import { getPresentDayWeather } from "utils/getPresentDateWeather";
import LoaderComponent from "components/Loader/LoaderComponent";
import NextBtn from "components/UI/NextBtn";
import PrevBtn from "components/UI/PrevBtn";
import Card from "./Card";

type Props = {
  weathers: any[];
  weatherLength: number;
  loading: boolean;
};

const WeatherComponent: React.FC<Props> = ({
  weathers,
  weatherLength,
  loading,
}) => {
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev: number) => (prev += 1));
  const prev = () => setIndex((prev: number) => (prev -= 1));

  const disableNextBtn = index + NUMBER_TO_SHOW === weatherLength;
  const disablePrevBtn = !index;

  const getTodayWeather = (payload: any) => {
    dispatch(setWeatherToBarChartsData({ weather: payload, weathers }));
  };

  return (
    <>
      {loading && <LoaderComponent />}
      <WeatherGrid>
        <PrevBtn onClick={prev} disabled={disablePrevBtn} />
        {getPresentDayWeather(weathers)
          ?.slice(index, index + NUMBER_TO_SHOW)
          .map((weather: any) => (
            <Card
              weather={weather}
              key={weather?.dt}
              onClick={getTodayWeather}
            />
          ))}
        <NextBtn onClick={next} disabled={disableNextBtn} />
      </WeatherGrid>
    </>
  );
};

const WeatherGrid = styled.div`
  display: flex;
  position: relative;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export default WeatherComponent;
