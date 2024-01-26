// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Assuming you have an element with id 'root' in your index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
