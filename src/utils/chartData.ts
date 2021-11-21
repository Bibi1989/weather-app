import _ from "lodash";
import { FormatedWeatherInterface } from "typescript/weather.types";

export const returnChartDataAndLabel = (
  charts: FormatedWeatherInterface[]
) => ({
  data: _.map(charts, (chart) => chart.temperature),
  label: _.map(charts, (chart) => chart.time),
});
