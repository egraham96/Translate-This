import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
