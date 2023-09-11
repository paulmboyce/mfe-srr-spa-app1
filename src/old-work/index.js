import React from "react";
import ReactDOM from "react-dom";
import App from "../server/App.jsx"; // Import your main React component

// Render your React app inside the root element defined in your HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
