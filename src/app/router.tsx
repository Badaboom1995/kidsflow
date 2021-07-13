import React from "react";
import { Switch, Route } from "react-router-dom";
import Users from "pages/Users";
import AddUser from "pages/AddUser";
import Orgs from "pages/Orgs";
import AddOrg from "pages/AddOrgPage";
import SupportPage from "pages/SupportPage";
import Catalog from "pages/Catalog";
import CatalogAdd from "pages/CatalogAdd";
import Events from "pages/Events";
import EventsAdd from "pages/EventsAdd";

interface IRouter {
  children?: React.ReactNode;
}
export default function Router(props: IRouter) {
  const prefix = "";

  return (
    <Switch>
      <Route path={`${prefix}/users`} exact={true} component={Users} />
      <Route path={`${prefix}/users/add-user`} component={AddUser} />
      <Route path={`${prefix}/orgs`} exact={true} component={Orgs} />
      <Route path={`${prefix}/orgs/add-org/:id?`} component={AddOrg} />
      <Route path={`${prefix}/support`} component={SupportPage} />
      <Route path={`${prefix}/catalog`} exact={true} component={Catalog} />
      <Route path={`${prefix}/catalog/add`} component={CatalogAdd} />
      <Route path={`${prefix}/events`} exact={true} component={Events} />
      <Route path={`${prefix}/events`} component={EventsAdd} />
    </Switch>
  );
}
