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
import { useWindowSize } from "utils/useWindowSize";
import { FormatedWeatherInterface } from "typescript/weather.types";
import EmptyComponent from "components/UI/EmptyComponent";

type Props = {
  weathers: FormatedWeatherInterface[];
  weatherLength: number;
  loading: boolean;
};

const WeatherComponent: React.FC<Props> = ({
  weathers,
  weatherLength,
  loading,
}) => {
  const dispatch = useDispatch();

  const [width] = useWindowSize();

  const isMobile = width < 768;

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev: number) => (prev += 1));
  const prev = () => setIndex((prev: number) => (prev -= 1));

  const count = isMobile ? 1 : NUMBER_TO_SHOW;

  const disableNextBtn =
    weathers.length <= 0 || index + count === weatherLength;
  const disablePrevBtn = !index;

  const getTodayWeather = (payload: FormatedWeatherInterface) => {
    dispatch(setWeatherToBarChartsData({ weather: payload, weathers }));
  };

  return (
    <>
      {loading && <LoaderComponent />}
      <WeatherGrid isMobile={isMobile || weathers.length <= 0}>
        <PrevBtn
          onClick={prev}
          disabled={disablePrevBtn}
          isMobile={isMobile}
          data-testid="prev"
        />
        {weathers.length <= 0 ? (
          <EmptyComponent />
        ) : (
          !loading &&
          getPresentDayWeather(weathers)
            ?.slice(index, index + count)
            .map((weather: FormatedWeatherInterface) => (
              <Card
                weather={weather}
                key={weather?.dt}
                onClick={getTodayWeather}
              />
            ))
        )}
        <NextBtn
          onClick={next}
          disabled={disableNextBtn}
          isMobile={isMobile}
          data-testid="next"
        />
      </WeatherGrid>
    </>
  );
};

const WeatherGrid = styled.div<{ isMobile: boolean }>`
  display: grid;
  grid-template-columns: ${({ isMobile }) =>
    isMobile ? "1fr" : "1fr 1fr 1fr"};
  gap: 5px;
  justify-content: center;
  position: relative;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export default WeatherComponent;
