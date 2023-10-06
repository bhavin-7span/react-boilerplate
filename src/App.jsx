import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./lib/MuiTheme";
import { ToastContainer } from "react-toastify";
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
          <ToastContainer autoClose={2000} />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
