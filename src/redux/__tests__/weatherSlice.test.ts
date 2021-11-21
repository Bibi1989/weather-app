import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { formatWeatherReturn } from "utils/formatWeatherReturn";
import { mockWeatherData } from "utils/test-data/mockWeatherData";

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

describe("weather slice", () => {
  const weathersList = formatWeatherReturn(mockWeatherData.list, "metric");

  const type = "GET_WEATHERS";

  test("weathers array state in redux should be empty when getWeathers action is not dispatch", async () => {
    const store: any = mockStore({
      weathers: [],
    });
    let weathers = store.getState().weathers;
    expect(weathers.length).not.toBeGreaterThan(0);
  });

  test("weathers array state in redux should not be empty when action is dispatch", async () => {
    const store: any = mockStore({
      weathers: weathersList,
    });

    let weathers = store.getState().weathers;

    store.dispatch({ type, payload: weathersList });

    expect(weathers.length).toBeGreaterThan(0);
  });

  test("should contain type when dispatch", async () => {
    const store: any = mockStore({
      weathers: weathersList,
    });

    store.dispatch({ type });

    expect(store.getActions()).toContainEqual({ type });
  });

  test("should contain type and a payload when dispatch", async () => {
    const store: any = mockStore({
      weathers: weathersList,
    });

    store.dispatch({ type, payload: weathersList });

    expect(store.getActions()).toContainEqual({ type, payload: weathersList });
  });
});
