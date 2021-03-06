import React from "react";
import { render } from "@testing-library/react";
import createMockStore from "redux-mock-store";

import WeatherComponent from "..";
import { FormatedWeatherInterface } from "typescript/weather.types";
import { Provider } from "react-redux";
import { formatWeatherReturn } from "utils/formatWeatherReturn";
import { mockWeatherData } from "utils/test-data/mockWeatherData";
import { WeatherComponentProps } from "typescript/react-props.types";

const mockStore = createMockStore([]);

const renderWeatherComponent = (props: Partial<WeatherComponentProps> = {}) => {
  const defaultProps: WeatherComponentProps = {
    weathers: [],
    weatherLength: 5,
    loading: false,
  };

  const store = mockStore(props.weathers ?? []);

  return render(
    <Provider store={store}>
      <WeatherComponent {...defaultProps} {...props} />
    </Provider>
  );
};

describe("Weather component", () => {
  it("Weather component snapshot", () => {
    const { container } = renderWeatherComponent();

    expect(container).toMatchSnapshot();
  });

  it("should have the list weathers not greater than 1", async () => {
    let weatherLength = formatWeatherReturn(
      mockWeatherData.list,
      "metric"
    ).length;

    const { queryByTestId } = renderWeatherComponent({
      weatherLength,
      loading: false,
    });

    const weatherCard = queryByTestId("weatherCard");

    expect(weatherCard).not.toBeInTheDocument();
  });

  it("Weather component should be in the document", async () => {
    let weathers = formatWeatherReturn(mockWeatherData.list, "metric");
    let weatherLength = formatWeatherReturn(
      mockWeatherData.list,
      "metric"
    ).length;

    const { queryByTestId } = renderWeatherComponent({
      weathers,
      weatherLength,
      loading: false,
    });

    const weatherCard = queryByTestId("weatherCard");

    expect(weatherCard).toBeInTheDocument();
  });

  it("Weather component should not be in the document", async () => {
    let weathers: FormatedWeatherInterface[] = [];
    let weatherLength = formatWeatherReturn(
      mockWeatherData.list,
      "metric"
    ).length;

    const { queryByTestId } = renderWeatherComponent({
      weathers,
      weatherLength,
      loading: false,
    });

    const weatherCard = queryByTestId("weatherCard");

    expect(weatherCard).not.toBeInTheDocument();
  });

  it("should render an empty component when weathers list is empty", async () => {
    let weathers: FormatedWeatherInterface[] = [];
    let weatherLength = weathers.length;

    const { getByTestId } = renderWeatherComponent({
      weathers,
      weatherLength,
      loading: false,
    });

    const emptyComponent = getByTestId("empty");

    expect(emptyComponent).toBeInTheDocument();
  });
});
