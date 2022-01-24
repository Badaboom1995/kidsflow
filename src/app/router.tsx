import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Users from 'pages/Users';
import AddUser from 'pages/AddUser';
import Orgs from 'pages/Orgs';
import AddOrg from 'pages/AddOrgPage';
import SupportPage from 'pages/SupportPage';
import Catalog from 'pages/Catalog';
import CatalogAdd from 'pages/CatalogAdd';
import Events from 'pages/Events';
import EventsAdd from 'pages/EventsAdd';
import CompilationsAddPage from 'pages/CompilationsAddPage';

interface IRouter {
  children?: React.ReactNode;
}
export default function Router(props: IRouter) {
  return (
    <Switch>
      <Route path={`/users`} exact={true} component={Users} />
      <Route path={`/users/add-user`} component={AddUser} />
      <Route path={`/orgs`} exact={true} component={Orgs} />
      <Route path={`/orgs/add-org/:id?`} component={AddOrg} />
      <Route path={`/support`} component={SupportPage} />
      <Route path={`/catalog`} exact={true} component={Catalog} />
      <Route path={`/catalog/add`} component={CatalogAdd} />
      <Route path={`/events`} exact={true} component={Events} />
      <Route path={`/events/add/:id?`} component={EventsAdd} />
      <Route path={`/compilations`} component={CompilationsAddPage} />
    </Switch>
  );
}
