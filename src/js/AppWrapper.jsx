import React, { useContext, useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";

import { GlobalContext } from "./Context/GlobalState";
import { Browse } from "./Components/Browse";
import { Favorites } from "./Components/Favorites";
import Hero from "./Components/Hero";
import Controls from "./Components/Controls";
import Pagination from "./Components/Pagination";
import Filters from "./Components/Filters";

const AppWrapper = () => {
  const location = useLocation();
  const { setQuery, setErrorMessage } = useContext(GlobalContext);
  useEffect(() => {
    setErrorMessage("");
    setQuery("");
  }, [location]);

  return (
    <>
      <Hero />
      <div className="container">
        <div className="inner-content">
          <Controls />
          <Filters />
          <Routes>
            <Route path="/" element={<Browse />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
          <div className="footer">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrapper;
