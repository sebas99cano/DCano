import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/index.css";
import Login from "./pages/login/components/Login.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
