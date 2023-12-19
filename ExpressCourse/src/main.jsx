import React from "react";
import ReactDOM from "react-dom/client";
import "/src/assets/global.css";
// import Home from './components/screens/home/home.jsx'
import { Router } from "./components/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
