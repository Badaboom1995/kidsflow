import React from "react";
import { GlobalStyle } from "../global-styles";
import Router from "./router";
import Layout from "features/Layout";
import { Provider } from "react-redux";
import { configureAppStore } from "config/store";
import { BrowserRouter } from "react-router-dom";

const store = configureAppStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Router />
          <GlobalStyle />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export type RootState = ReturnType<typeof store.getState>;
export default App;
