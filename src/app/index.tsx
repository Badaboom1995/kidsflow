import React from "react";
import { GlobalStyle } from "../global-styles";
import Router from "./router";
import Layout from "features/Layout";
import { Provider } from "react-redux";
import { configureAppStore } from "config/store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "pages/Auth";

const store = configureAppStore();
// TODO. make router right way
function App() {
  const isLoggedIn = true;
  const Private = (
    <Layout>
      <Router />
    </Layout>
  );
  const prefix = process.env.NODE_ENV === "production" ? "admin" : "";
  return (
    <Provider store={store}>
      <BrowserRouter>
        {isLoggedIn ? (
          Private
        ) : (
          <Switch>
            <Route path={`${prefix}/auth`} exact={true} component={Auth} />
          </Switch>
        )}
      </BrowserRouter>
      <GlobalStyle />
    </Provider>
  );
}

export type RootState = ReturnType<typeof store.getState>;
export default App;
