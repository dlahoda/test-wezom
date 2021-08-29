import React from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";

import "./styles/styles.scss";
import AppRouter from "./AppRouter/AppRouter";
import { NavBar } from "./Containers";
import theme from "./MaterialTheme/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <BrowserRouter>
          <CssBaseline />
          <NavBar />
          <AppRouter />
        </BrowserRouter>
      </StylesProvider>
    </ThemeProvider>
  );
};

export default App;
