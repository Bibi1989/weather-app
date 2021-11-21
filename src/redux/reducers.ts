import { combineReducers } from "@reduxjs/toolkit";

import weatherSlice from "./slices/weathers/weatherSlice";

const rootReducer = combineReducers({
  weather: weatherSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
