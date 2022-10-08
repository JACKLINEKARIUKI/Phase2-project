import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import FilmsProvider from "./Context/Films";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FilmsProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </FilmsProvider>
  </React.StrictMode>
);
