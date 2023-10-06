import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./lib/MuiTheme";
// import "./lib/fontAwesome";
import AppRouter from "./router";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
