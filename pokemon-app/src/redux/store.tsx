import { configureStore } from "@reduxjs/toolkit";
import type { Theme } from "./slices/themeSlice";
import themeSlice, { changeTheme } from "./slices/themeSlice";

const store = configureStore({
  reducer: themeSlice.reducer,
});
export { changeTheme };
export type { Theme };
export default store;
