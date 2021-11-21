import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { getWeathers } from "redux/slices/weathers/weatherActions";
import store from "redux/store";
import { FormatedWeatherInterface } from "typescript/weather.types";
import Card from "../Card";
import { formatWeatherReturn } from "utils/formatWeatherReturn";
import { mockWeatherData } from "utils/test-data/mockWeatherData";

type Props = {
  weather: FormatedWeatherInterface;
  onClick: (payload: FormatedWeatherInterface) => void;
};

const renderWeatherCard = (props: Partial<Props> = {}) => {
  const defaultProps: Props = {
    weather: {
      description: "clear sky",
      dt: 1637485200,
      dt_txt: "2021-11-21 09:00:00",
      icon: "01d",
      main: "Clear",
      temperature: 1.29,
      time: "09:00:00",
      units: "metric",
    },
    onClick: () => {},
  };

  return render(
    <Provider store={store}>
      <Card {...defaultProps} {...props} />
    </Provider>
  );
};

it("Weather card should be in the document", async () => {
  const onClick = jest.fn();
  const { getByTestId } = renderWeatherCard({ onClick });

  const weatherCard = getByTestId("weatherCard");

  fireEvent.click(weatherCard);
  // await act(async () => {
  // });

  expect(onClick).toHaveBeenCalledTimes(1);
});
