import RealApp from "./src/App";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./src/redux/store";

const App = () => {
  return (
    <ReduxProvider store={store}>
      <RealApp />
    </ReduxProvider>
  );
};

export default App;
