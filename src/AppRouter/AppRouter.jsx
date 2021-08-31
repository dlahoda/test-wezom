import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";
import { Contacts, Home, NotFound } from "../Containers";

const useStyles = makeStyles((theme) => {
  return {
    offset: theme.mixins.toolbar,
  };
});

const AppRouter = () => {
  const classes = useStyles();
  return (
    <div
      className="bg-cover bg-no-repeat bg-center min-h-screen"
      style={{
        backgroundImage: `url(/media/images/backdrop-min.jpg)`,
      }}
    >
      <div className={classes.offset}></div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default AppRouter;
