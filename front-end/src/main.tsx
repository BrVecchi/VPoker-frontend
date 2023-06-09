import "./assets/styles/reset.css";
import "./assets/styles/style.css";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
