import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import createMockStore from "redux-mock-store";

import WeatherComponent from "..";
import { FormatedWeatherInterface } from "typescript/weather.types";
import { Provider } from "react-redux";
import { getWeathers } from "redux/slices/weathers/weatherActions";
import { formatWeatherReturn } from "utils/formatWeatherReturn";
import { mockWeatherData } from "utils/test-data/mockWeatherData";

const mockStore = createMockStore([]);

type Props = {
  weathers: FormatedWeatherInterface[];
  weatherLength: number;
  loading: boolean;
};

const renderWeatherComponent = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    weathers: [],
    weatherLength: 5,
    loading: false,
  };

  const store = mockStore(props.weathers);

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

  it("Weather card should be in the document", async () => {
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
  //   it("should have the list weathers not greater than 1", async () => {
  //     let { weathers, weatherLength, loading } = store.getState().weather;

  //     const { queryByTestId } = renderWeatherComponent({
  //       weathers,
  //       weatherLength,
  //       loading,
  //     });

  //     await act(async () => {
  //       await store.dispatch<any>(getWeathers());
  //     });

  //     const weatherCard = queryByTestId("weatherCard");
  //     const prev = queryByTestId("next");

  //     console.log(prev);

  //     expect(weatherCard).not.toBeInTheDocument();
  //   });
  //   it("Weather card should be in the document", async () => {
  //     await act(async () => {
  //       await store.dispatch<any>(getWeathers());
  //     });

  //     let { weathers } = store.getState().weather;

  //     const { queryByTestId } = renderWeatherComponent({ weathers });

  //     const weatherCard = queryByTestId("weatherCard");

  //     expect(weatherCard).toBeInTheDocument();
  //   });
});
