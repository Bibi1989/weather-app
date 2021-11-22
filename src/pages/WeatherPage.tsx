import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getWeathers } from "redux/slices/weathers/weatherActions";
import {
  setWeatherToBarChartsData,
  weatherSelector,
} from "redux/slices/weathers/weatherSlice";
import WeatherActions from "components/WeatherActions";
import WeatherComponent from "components/Weather";
import BarChart from "components/BarChart";
import { Container } from "./styles";

const WeatherPage = () => {
  const dispatch = useDispatch();

  const { weathers, weatherLength, loading, barChartData } =
    useSelector(weatherSelector);

  const [units, setUnits] = useState("metric");

  useEffect(() => {
    dispatch(getWeathers());
    dispatch(setWeatherToBarChartsData({ weather: weathers[0], weathers }));

    // eslint-disable-next-line
  }, []);

  const refreshData = () => {
    dispatch(getWeathers(units));
  };

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUnits(value);
    dispatch(getWeathers(value));
  };

  const RenderBarChart = useCallback(
    () => <BarChart weathers={weathers} barChartData={barChartData} />,
    [barChartData, weathers]
  );

  return (
    <Container>
      <WeatherActions
        refreshData={refreshData}
        onChange={handleChange}
        units={units}
      />
      <WeatherComponent
        weathers={weathers}
        weatherLength={weatherLength}
        loading={loading}
      />
      <RenderBarChart />
    </Container>
  );
};

export default WeatherPage;
