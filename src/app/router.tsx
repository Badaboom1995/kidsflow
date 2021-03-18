import React from "react";
import { Switch, Route } from "react-router-dom";
import Promo from "pages/Promo";
import Questions from "pages/Questions";
import News from "pages/News";
import Search from "pages/Search";

interface IRouter {
  children?: React.ReactNode;
}
export default function Router(props: IRouter) {
  const prefix = process.env.NODE_ENV === "production" ? "web" : "";
  return (
    <Switch>
      <Route path={`${prefix}/`} exact={true} component={Promo} />
      <Route path={`${prefix}/faq`} exact={true} component={Questions} />
      <Route path={`${prefix}/news`} exact={true} component={News} />
      <Route path={`${prefix}/search`} exact={true} component={Search} />
    </Switch>
  );
}
