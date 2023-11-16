import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import { Browse } from "./Components/Browse";
import { Favorites } from "./Components/Favorites";
import { createRoot } from "react-dom/client";

import { GlobalProvider } from "./Context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
