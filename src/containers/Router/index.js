import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import FireStore from "../FireStorePage";
import WaterStore from "../WaterStore";

export const routes = {
  home: "/",
  waterStore: "/waterStore"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.home} component={FireStore} />
        <Route exact path={routes.waterStore} component={WaterStore}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
