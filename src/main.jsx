import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <UserAuthContextProvider>
          <App />
        </UserAuthContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
