import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from "react-redux";
import { configureAppStore } from "config/store";
import { BrowserRouter } from "react-router-dom";

// css
import "rc-time-picker/assets/index.css";

const store = configureAppStore();

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <BrowserRouter basename="/admin">
        <App />
      </BrowserRouter>
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);

export type RootState = ReturnType<typeof store.getState>;
