import { configureStore } from "@reduxjs/toolkit";

import changeDisplayReducer from "../features/collapsableMenu/collapsable-menu-slice";

export const store = configureStore({
  reducer: {
    menuDisplay: changeDisplayReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
