import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import "./index.css";
import App from "./App";
import store from "./js/store";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
