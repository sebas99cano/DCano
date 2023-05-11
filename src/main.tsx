import React from "react";
import ReactDOM from "react-dom/client";
import Home from "@pages/home/Home";
import "./assets/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
