// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import Character from "./components/Character";

import { worker } from "./mocks/browser";
worker.start();

ReactDOM.render(
  <>
    <App />
    <Character />
  </>,

  document.getElementById("root")
);
