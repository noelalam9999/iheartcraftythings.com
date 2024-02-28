import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface BurgerMenu {
  display: boolean;
}

const initialState: BurgerMenu = {
  display: false,
};

const burgerMenuSlice = createSlice({
  name: "menuDisplay",
  initialState,
  reducers: {
    changeDisplayState(state) {
      state.display = !state.display;
    },
  },
});

export const { changeDisplayState } = burgerMenuSlice.actions;
export default burgerMenuSlice.reducer;
