import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "./Context/GlobalState";
import { Routes, Route } from "react-router-dom"; // Use Routes instead of BrowserRouter
import { Browse } from "./Components/Browse";
import { Favorites } from "./Components/Favorites";
import Hero from "./Components/Hero";
import Controls from "./Components/Controls";

const AppWrapper = () => {
  const location = useLocation();
  const { setQuery, setPage } = useContext(GlobalContext);
  useEffect(() => {
    setPage(1);
    setQuery("");
  }, [location]);

  return (
    <>
      <Hero />
      <div className="container">
        <div className="inner-content">
          <Controls />
          <Routes>
            <Route path="/" element={<Browse />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default AppWrapper;
