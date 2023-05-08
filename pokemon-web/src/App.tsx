import { Slider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { store } from "@redux/store";
import { lightTheme } from "@root/theme/theme";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import Box from "@mui/material/Box";

function AppWithoutRedux() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div
        style={{
          alignSelf: "stretch",
          //background: "green",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <p
          className="read-the-docs"
          style={{
            padding: 0,
            margin: 0,
          }}
        >
          Hey
        </p>

        <Slider
          defaultValue={30}
          sx={{
            width: 300,
            color: "success.main",
            "& .MuiSlider-thumb": {
              borderRadius: "2px",
            },
          }}
        />

        <Slider
          defaultValue={30}
          sx={{
            width: 300,
            color: "success.main",
          }}
        />

        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
}

const App = () => {
  return (
    <ReduxProvider store={store}>
      <AppWithoutRedux />
    </ReduxProvider>
  );
};

export default App;

type A = {
  a: string;
  b: string;
  c: string;
};

type B = Omit<A, "b" | "c">;

type C = Omit<A, "b" | "c"> & { b: number; c: number };
