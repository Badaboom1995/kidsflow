import React, { useEffect } from 'react';
import { GlobalStyle } from '../global-styles';
import Router from './router';
import Layout from 'features/Layout';
import { Switch, Route, useHistory } from 'react-router-dom';
import Auth from 'pages/Auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { selectUserData } from 'ducks/user/selectors';

// TODO. make router right way
function App() {
  console.log(process.env, process.env.REACT_APP_SHOW_DEV);
  const history = useHistory();
  const user = useSelector(selectUserData);
  const isLoggedIn = localStorage.getItem('vzletaemAdminToken');
  const Private = (
    <Layout>
      <Router />
    </Layout>
  );

  useEffect(() => {
    !isLoggedIn && history.push(`/auth`);
  }, [user]);

  return (
    <>
      {isLoggedIn ? (
        Private
      ) : (
        <Switch>
          <Route path={`/auth`} exact={true} component={Auth} />
        </Switch>
      )}
      <ToastContainer />
      <GlobalStyle />
    </>
  );
}

export default App;
