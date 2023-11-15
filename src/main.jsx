import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import("preline");
import { ClerkProvider } from "@clerk/clerk-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey="pk_test_Z29vZC13b21iYXQtNDguY2xlcmsuYWNjb3VudHMuZGV2JA">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
