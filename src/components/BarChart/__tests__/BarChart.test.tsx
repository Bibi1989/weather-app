import React from "react";
import { render } from "@testing-library/react";
import createMockStore from "redux-mock-store";

import { FormatedWeatherInterface } from "typescript/weather.types";
import { Provider } from "react-redux";
import { formatWeatherReturn } from "utils/formatWeatherReturn";
import { getDateWeatherForcast } from "utils/getPresentDateWeather";
import { mockWeatherData } from "utils/test-data/mockWeatherData";
import BarChart from "..";

const mockStore = createMockStore([]);

type Props = {
  weathers: FormatedWeatherInterface[];
  barChartData: FormatedWeatherInterface[];
};

const renderWeatherComponent = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    weathers: [],
    barChartData: [],
  };

  const store = mockStore(props.weathers ?? []);

  return render(
    <Provider store={store}>
      <BarChart {...defaultProps} {...props} />
    </Provider>
  );
};

describe("Bar Chart component", () => {
  let weathers = formatWeatherReturn(mockWeatherData.list, "metric");
  let barChartData = getDateWeatherForcast(
    formatWeatherReturn(mockWeatherData.list, ""),
    formatWeatherReturn(mockWeatherData.list, "")[0]?.dt_txt
  );
  it("Bar Chart component snapshot", () => {
    const { container } = renderWeatherComponent();

    expect(container).toMatchSnapshot();
  });

  it("Weather card should be in the document", async () => {
    const { queryByTestId } = renderWeatherComponent({
      weathers,
      barChartData,
    });

    const barChart = queryByTestId("barchart");

    expect(barChart).toBeInTheDocument();
  });
});
