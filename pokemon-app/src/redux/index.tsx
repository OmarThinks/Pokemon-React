import { configureStore } from "@reduxjs/toolkit";
import type { Theme } from "./features/themeSlice";
import themeSlice, { changeTheme } from "./features/themeSlice";
import ReduxProvider from "./provider";

const store = configureStore({
  reducer: themeSlice.reducer,
});

export { changeTheme, ReduxProvider };
export type { Theme };
export default store;
