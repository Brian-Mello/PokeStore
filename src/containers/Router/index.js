import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import FireStore from "../FireStorePage";
import WaterStore from "../WaterStore";
import PokeStorePage from "../PokeStorePage";

export const routes = {
  home: "/",
  fireStore: "/fireStore",
  waterStore: "/waterStore",
  ghostStore: "/ghostStore",
  grassStore: "/grassStore"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.home} component={PokeStorePage} />
        <Route exact path={routes.fireStore} component={FireStore}/>
        <Route exact path={routes.waterStore} component={WaterStore}/>
        <Route exact path={routes.ghostStore} component={WaterStore}/>
        <Route exact path={routes.grassStore} component={WaterStore}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
