import { ThemeProvider } from "@mui/material/styles";
import { store } from "@redux/store";
import { lightTheme } from "@root/theme/theme";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";

function AppWithoutRedux() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div
        style={{
          alignSelf: "stretch",
          background: "green",
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
          onMouseEnter={() => {}}
        >
          Hey
        </p>
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
