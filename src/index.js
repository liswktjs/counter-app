import React from "react";
import { createStore } from "redux";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import reducer from "./reducer";
import { ReactReduxContext } from "./hooks";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(reducer);

root.render(
  <ReactReduxContext.Provider value={store}>
    <App />
  </ReactReduxContext.Provider>,
  document.getElementById("root")
);

// );
//
// // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
