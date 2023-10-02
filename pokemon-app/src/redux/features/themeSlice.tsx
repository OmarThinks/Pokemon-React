import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Theme = "light" | "dark";
const defaultTheme: {
  value: Theme;
} = {
  value: "light",
};

const themeSlice = createSlice({
  name: "counter",
  initialState: defaultTheme,
  reducers: {
    changeTheme: (state, action: PayloadAction<Theme>) => {
      state.value = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice;
