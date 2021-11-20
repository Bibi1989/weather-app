import _ from "lodash";

export const returnChartDataAndLabel = (charts: any) => ({
  data: _.map(charts, (chart) => chart.temperature),
  label: _.map(charts, (chart) => chart.time),
});
