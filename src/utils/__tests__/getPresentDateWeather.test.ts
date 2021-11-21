import { formatWeatherReturn } from "utils/formatWeatherReturn";
import {
  formatDate,
  getDateWeatherForcast,
  getDay,
} from "utils/getPresentDateWeather";
import { mockWeatherData } from "utils/test-data/mockWeatherData";

describe("Get Present Date Weathers", () => {
  test("returned date weather should be greater than 1", async () => {
    const lists = formatWeatherReturn(mockWeatherData.list, "metric");
    const dt_txt = "2021-11-20 03:00:00";
    const results = getDateWeatherForcast(lists, dt_txt);
    expect(results.length).toBeGreaterThan(1);
  });
  test("date should be formated properly", async () => {
    const dt_txt = "2021-11-20 03:00:00";
    const results = formatDate(dt_txt);
    expect(results).toEqual("20 Nov 2021");
  });
  test("should not get the day of a date", async () => {
    const dt_txt = "2021-11-20 03:00:00";
    const results = getDay(dt_txt);
    expect(results).not.toEqual("21");
  });
  test("should get the day of a date", async () => {
    const dt_txt = "2021-11-20 03:00:00";
    const results = getDay(dt_txt);
    expect(results).toEqual("20");
  });
});
