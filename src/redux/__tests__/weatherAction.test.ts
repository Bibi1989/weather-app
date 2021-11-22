import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { getWeathers } from "redux/slices/weathers/weatherActions";
import store from "redux/store";

import { formatWeatherReturn } from "utils/formatWeatherReturn";
import { mockWeatherData } from "utils/test-data/mockWeatherData";

const BASE_URL = process.env.REACT_APP_WEATHER_API;
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

describe("weather slice", () => {
  const newUnit = "metric";

  test("weathers array state in redux should be empty when getWeathers action is not dispatch", async () => {
    const postSpy = jest
      .spyOn(axios, "get")
      .mockResolvedValueOnce({ data: mockWeatherData });

    await store.dispatch<any>(getWeathers());

    console.log(postSpy);

    expect(postSpy).toBeCalledWith(
      `${BASE_URL}/forecast?q=Munich,de&APPID=${API_KEY}&cnt=40&units=${newUnit}`,
    );
  });
});
