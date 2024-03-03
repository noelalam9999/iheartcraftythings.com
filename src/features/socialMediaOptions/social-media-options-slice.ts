import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface SocialMediaOptionsDisplay {
  display: boolean;
}

const initialState: SocialMediaOptionsDisplay = {
  display: false,
};

const socialMediaOptionsDisplaySlice = createSlice({
  name: "socialMediaOptionsDisplay",
  initialState,
  reducers: {
    changeSocialMediaOptionsDisplayState(
      state,
      action: PayloadAction<boolean>
    ) {
      state.display = action.payload;
    },
  },
});

export const { changeSocialMediaOptionsDisplayState } =
  socialMediaOptionsDisplaySlice.actions;
export default socialMediaOptionsDisplaySlice.reducer;
