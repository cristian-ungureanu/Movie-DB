import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";

const Controls = () => {
  const { page, setPage, totalPages } = useContext(GlobalContext);
  const location = useLocation();
  const pages = ["/", "/favorites"];

  return (
    <div className="controls">
      <div className="tabs">
        {pages.map((page) => (
          <Link
            key={page}
            className={
              location.pathname === page ? "tab-item active" : "tab-item"
            }
            to={page}
          >
            {page === "/" ? "Browse" : "Favorites"}
          </Link>
        ))}
      </div>
      <div className="navigation">
        <button
          className="previous"
          disabled={page === 1}
          onClick={() => setPage(1)}
          title="First Page"
        >
          <FiChevronsLeft />
        </button>
        <button
          className="previous"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          <FiChevronRight />
        </button>
        <button
          className="next"
          disabled={page === totalPages}
          onClick={() => setPage(totalPages)}
        >
          <FiChevronsRight />
        </button>
      </div>
    </div>
  );
};

export default Controls;
