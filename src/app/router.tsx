import React from "react";
import { Switch, Route } from "react-router-dom";
import Users from "pages/Users";
import AddUser from "pages/AddUser";

interface IRouter {
  children?: React.ReactNode;
}
export default function Router(props: IRouter) {
  const prefix = process.env.NODE_ENV === "production" ? "admin" : "";

  return (
    <Switch>
      <Route path={`${prefix}/user`} exact={true} component={Users} />
      <Route path={`${prefix}/add-user`} exact={true} component={AddUser} />
    </Switch>
  );
}
