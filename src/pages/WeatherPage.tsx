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
import { Container, CityTag } from "./styles";
import { useLocation } from "utils/useLocation";

const WeatherPage = () => {
  const dispatch = useDispatch();

  const { weathers, weatherLength, loading, barChartData, city } =
    useSelector(weatherSelector);

  const [units, setUnits] = useState("metric");
  const [localLoading, setLocalLoading] = useState(true);

  const result = useLocation();

  useEffect(() => {
    if (result[0] && result[1]) {
      dispatch(getWeathers({ coord: { long: result[0], lat: result[1] } }));
      dispatch(setWeatherToBarChartsData({ weather: weathers[0], weathers }));
      setLocalLoading(false);
    }

    // eslint-disable-next-line
  }, [result[0], result[1], localLoading]);

  const refreshData = () => {
    dispatch(
      getWeathers({ units, coord: { long: result[0], lat: result[1] } })
    );
  };

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUnits(value);
    dispatch(
      getWeathers({ units: value, coord: { long: result[0], lat: result[1] } })
    );
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
      <CityTag>{city?.name}</CityTag>
      <WeatherComponent
        weathers={weathers}
        weatherLength={weatherLength}
        loading={loading || localLoading}
      />
      <RenderBarChart />
    </Container>
  );
};

export default WeatherPage;
