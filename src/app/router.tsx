import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
// import Auth from "features/Auth";
import Promo from "pages/Promo";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Promo} />
        {/* <Route path="/auth" exact={true} component={Auth} /> */}
      </Switch>
    </BrowserRouter>
  );
}
