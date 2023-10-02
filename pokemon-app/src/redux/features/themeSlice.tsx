import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@redux";

export type Theme = "light" | "dark";
const defaultTheme: {
  value: Theme;
} = {
  value: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: defaultTheme,
  reducers: {
    changeTheme: (state, action: PayloadAction<Theme>) => {
      state.value = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice;

export const themeSelector = (state: RootState) => state.theme.value;
