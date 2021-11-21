import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "redux/reducers";

export type InitialState = {
  isMobile: boolean;
};

export const initialState: InitialState = {
  isMobile: false,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setMobileLayout: (
      state: InitialState,
      { payload }: PayloadAction<boolean>
    ) => {
      state.isMobile = payload;
    },
  },
});

export default layoutSlice.reducer;

export const { setMobileLayout } = layoutSlice.actions;

export const layoutSelector = (state: RootState) => state.layout;
