import { configureStore } from "@reduxjs/toolkit";

import changeDisplayReducer from "../features/collapsableMenu/collapsable-menu-slice";
import searchBarDisplayReducer from "../features/searchBarDisplay/search-bar-display.slice";
import socialMediaOptionsReducer from "../features/socialMediaOptions/social-media-options-slice";
export const store = configureStore({
  reducer: {
    menuDisplay: changeDisplayReducer,
    searchBarDisplay: searchBarDisplayReducer,
    socialMediaOptionsDisplay: socialMediaOptionsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
