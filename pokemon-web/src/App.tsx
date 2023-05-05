import { ThemeProvider } from "@mui/material";
import { Provider as ReduxProvider } from "react-redux";
import RealApp from "./src/App";
import { store } from "./src/redux/store";
import { lightTheme } from "./src/theme/theme";

// TODO: implement project name

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <RealApp />
    </ThemeProvider>
  );
};

const AppWithRedux = () => {
  return (
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  );
};

export default AppWithRedux;
