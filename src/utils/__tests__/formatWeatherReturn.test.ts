import { formatWeatherReturn } from "../formatWeatherReturn";
import { mockWeatherData } from "../test-data/mockWeatherData";

describe("Format Weather Return", () => {
  test("units property should be defined", async () => {
    // ???
    const lists = mockWeatherData.list;
    const units = "metric";
    const results = formatWeatherReturn(lists, units);
    expect(results[0].units).toBeDefined();
  });
  test("units passed to (formatWeatherReturn) should have that value", async () => {
    // ???
    const lists = mockWeatherData.list;
    const units = "metric";
    const results = formatWeatherReturn(lists, units);
    expect(results[0].units).toEqual(units);
  });
});
