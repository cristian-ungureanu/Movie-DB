import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";

import { GlobalProvider } from "./Context/GlobalState";
import AppWrapper from "./AppWrapper";
import "../scss/style.scss";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <AppWrapper />
      </Router>
    </GlobalProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
