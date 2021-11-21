import React from "react";
import { Bar } from "react-chartjs-2";

import { returnChartDataAndLabel } from "utils/chartData";
import { FormatedWeatherInterface } from "typescript/weather.types";

type Props = {
  weathers: FormatedWeatherInterface[];
  barChartData: FormatedWeatherInterface[];
};

const BarChart: React.FC<Props> = ({ weathers, barChartData }) => {
  const charts = returnChartDataAndLabel(barChartData);

  const data = {
    labels: weathers.length > 0 ? charts.label : [],
    datasets: [
      {
        label: "# of Votes",
        data: weathers.length > 0 ? charts.data : [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: any = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <Bar
      data={data}
      // options={options}
      data-testid={barChartData.length > 0 ? "barchart" : null}
    />
  );
};

export default BarChart;
