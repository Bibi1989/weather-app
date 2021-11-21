import { act } from "@testing-library/react";
import { getWeathers } from "redux/slices/weathers/weatherActions";
import store from "redux/store";

describe("weather slice", () => {
  test("weathers array state in redux should be empty when getWeathers action is not dispatch", async () => {
    // let state = store.getState().weather;

    // await act(async () => {
    //   await store.dispatch<any>(getWeathers());
    // });

    // const weathers = state.weathers;
    // expect(weathers.length).not.toBeGreaterThan(0);
  });
//   test("weathers array state in redux should be empty when getWeathers action is not dispatch", async () => {
//     let state = store.getState().weather;

//     await act(async () => {
//       await store.dispatch<any>(getWeathers());
//     });

//     const weathers = state.weathers;
//     expect(weathers.length).not.toBeGreaterThan(0);
//   });
//   test("weathers array state in redux should not be empty when getWeathers action is not dispatch", async () => {
//     await act(async () => {
//       await store.dispatch<any>(getWeathers());
//     });

//     let state = store.getState().weather;

//     const weathers = state.weathers;
//     expect(weathers.length).toBeGreaterThan(0);
//   });
//   test("units value should be metric by default when no argument is pass to getWeathers action", async () => {
//     await act(async () => {
//       await store.dispatch<any>(getWeathers());
//     });

//     let state = store.getState().weather;

//     const units = "metric";

//     const weathers = state.weathers;
//     expect(weathers[0].units).toEqual(units);
//   });
//   test("units value should not be metric when (imperial) argument is pass to getWeathers action", async () => {
//     await act(async () => {
//       await store.dispatch<any>(getWeathers("imperial"));
//     });

//     let state = store.getState().weather;

//     const units = "metric";

//     const weathers = state.weathers;
//     expect(weathers[0].units).not.toEqual(units);
//   });
//   test("units value should be imperial when (imperial) argument is pass to getWeathers action", async () => {
//     await act(async () => {
//       await store.dispatch<any>(getWeathers("imperial"));
//     });

//     let state = store.getState().weather;

//     const units = "imperial";

//     const weathers = state.weathers;
//     expect(weathers[0].units).toEqual(units);
//   });
});
