// src/bootstrap.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "shared_state";
import Root from "./root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider>
      <Root />
    </Provider>
  </React.StrictMode>
);
