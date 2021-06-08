import React, { useEffect } from "react";
import { GlobalStyle } from "../global-styles";
import Router from "./router";
import Layout from "features/Layout";
import { Switch, Route, useHistory } from "react-router-dom";
import Auth from "pages/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { selectUserData } from "ducks/user/selectors";

// TODO. make router right way
function App() {
  const history = useHistory();
  const user = useSelector(selectUserData);
  const isLoggedIn = localStorage.getItem("vzletaemAdminToken");
  const Private = (
    <Layout>
      <Router />
    </Layout>
  );
  const prefix = process.env.NODE_ENV === "production" ? "/admin" : "";

  useEffect(() => {
    isLoggedIn
      ? history.push(`${prefix}/catalog`)
      : history.push(`${prefix}/auth`);
  }, [user]);
  return (
    <>
      {isLoggedIn ? (
        Private
      ) : (
        <Switch>
          <Route path={`${prefix}/auth`} exact={true} component={Auth} />
        </Switch>
      )}
      <ToastContainer />
      <GlobalStyle />
    </>
  );
}

export default App;
