import { combineReducers } from "@reduxjs/toolkit";
import layoutSlice from "./slices/layoutSlice/layoutSlice";
import weatherSlice from "./slices/weathers/weatherSlice";

const rootReducer = combineReducers({
  weather: weatherSlice,
  layout: layoutSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
