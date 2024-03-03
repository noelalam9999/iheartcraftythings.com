import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface SearchBarDisplay {
  display: boolean;
}

const initialState: SearchBarDisplay = {
  display: false,
};

const searchBarDisplaySlice = createSlice({
  name: "searchBarDisplay",
  initialState,
  reducers: {
    changeSearchDisplayState(state, action: PayloadAction<boolean>) {
      state.display = action.payload;
    },
  },
});

export const { changeSearchDisplayState } = searchBarDisplaySlice.actions;
export default searchBarDisplaySlice.reducer;
