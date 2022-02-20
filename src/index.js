import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "rc-slider/assets/index.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import { Provider } from "react-redux";

import store from "./store";

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
