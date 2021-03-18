import React from "react";
import { Switch, Route } from "react-router-dom";
import Users from "pages/Users";

interface IRouter {
  children?: React.ReactNode;
}
export default function Router(props: IRouter) {
  const prefix = process.env.NODE_ENV === "production" ? "admin" : "";

  return (
    <Switch>
      <Route path={`${prefix}/`} exact={true} component={Users} />
    </Switch>
  );
}
