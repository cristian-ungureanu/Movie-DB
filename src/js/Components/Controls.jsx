import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";

import Pagination from "./Pagination";

const Controls = () => {
  const { setPage } = useContext(GlobalContext);
  const location = useLocation();
  const pages = ["/", "/favorites"];

  return (
    <div className="controls">
      <div className="tabs">
        {pages.map((currentPage) => (
          <Link
            key={currentPage}
            className={
              location.pathname === currentPage ? "tab-item active" : "tab-item"
            }
            to={currentPage}
            onClick={() => setPage(1)}
          >
            {currentPage === "/" ? "Browse" : "Favorites"}
          </Link>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Controls;
