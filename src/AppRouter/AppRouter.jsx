import React from "react";
import { Switch, Route } from "react-router-dom";
import { Contacts, Home, NotFound } from "../Containers";

const AppRouter = () => {
  return (
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
  );
};

export default AppRouter;
