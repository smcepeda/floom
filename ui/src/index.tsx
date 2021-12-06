import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { setupConfig } from "@ionic/core";

setupConfig({
  rippleEffect: false,
  mode: "ios",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
