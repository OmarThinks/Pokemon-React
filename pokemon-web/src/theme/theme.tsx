import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
import { Theme, ThemeOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const lightTheme = createTheme({
  status: {
    danger: orange[500],
  },
});

const darkTheme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    mode: "dark",
  },
});

export { darkTheme, lightTheme };
