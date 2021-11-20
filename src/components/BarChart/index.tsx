import React from "react";
import { useSelector } from "react-redux";
import { weatherSelector } from "redux/slices/weathers/weatherSlice";
import _ from "lodash";
import { Bar } from "react-chartjs-2";
import { returnChartDataAndLabel } from "utils/chartData";

const BarChart = () => {
  const { barChartData } = useSelector(weatherSelector);
  const charts = returnChartDataAndLabel(barChartData);

  const data = {
    labels: charts.label,
    datasets: [
      {
        label: "# of Votes",
        data: charts.data,
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

  return <Bar data={data} options={options} />;
};

export default BarChart;
