import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getWeathers,
  getWeathersFromYourLocation,
} from "redux/slices/weathers/weatherActions";
import {
  setWeatherToBarChartsData,
  weatherSelector,
} from "redux/slices/weathers/weatherSlice";
import WeatherActions from "components/WeatherActions";
import WeatherComponent from "components/Weather";
import BarChart from "components/BarChart";
import { Container } from "./styles";
import { useLocation } from "utils/useLocation";
import { dispatchActions } from "utils/dispatchAction";

const WeatherPage = () => {
  const dispatch = useDispatch();

  const { weathers, weatherLength, loading, barChartData, city } =
    useSelector(weatherSelector);

  const [units, setUnits] = useState("metric");
  const [isCurrentLocation, setIsCurrentLocation] = useState(false);

  const result = useLocation();

  const coord = { long: result[0], lat: result[1] };

  useEffect(() => {
    dispatch(getWeathers());
    dispatch(setWeatherToBarChartsData({ weather: weathers[0], weathers }));
    setIsCurrentLocation(false);

    // eslint-disable-next-line
  }, []);

  const refreshData = () => {
    dispatchActions(dispatch, units, coord, isCurrentLocation);
  };

  const selectCurrentLocationWeatherForcast = () => {
    if (result[0] && result[1] && !isCurrentLocation) {
      setIsCurrentLocation(true);
      dispatch(
        getWeathersFromYourLocation({
          units,
          coord,
        })
      );
    }
  };

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUnits(value);
    dispatchActions(dispatch, value, coord, isCurrentLocation);
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
        city={city}
        currentLocation={selectCurrentLocationWeatherForcast}
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
