import React from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";

import "./styles/styles.scss";
import AppRouter from "./AppRouter/AppRouter";
import { NavBar } from "./Containers";
import theme from "./MaterialTheme/theme";
import { store } from "Redux";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <BrowserRouter>
            <CssBaseline />
            <NavBar />
            <AppRouter />
          </BrowserRouter>
        </StylesProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
