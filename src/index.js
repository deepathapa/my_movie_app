import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AppProvider } from "./context";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     <React.StrictMode>
          <AppProvider>
               <Router>
                    <App />
               </Router>
          </AppProvider>
     </React.StrictMode>
);

reportWebVitals();
