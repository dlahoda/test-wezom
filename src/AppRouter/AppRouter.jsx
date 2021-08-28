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
    <div>
      <div className={classes.offset}></div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contacts">
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
