import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import store from "./redux/store";
import { Provider } from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import { fetchAdmin } from "./redux/adminSlice";

//initial user setup

if (localStorage.admin_token) {
  setAuthToken(localStorage.admin_token);
  store.dispatch(fetchAdmin());
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
