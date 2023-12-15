// src/root.js
import React from "react";
import { Provider } from "./slices";
import App from "./app";

const Root = () => (
  <Provider>
    <App />
  </Provider>
);

export default Root;
