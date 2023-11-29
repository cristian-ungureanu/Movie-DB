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
  const { page, setPage, totalPages, errorMessage } = useContext(GlobalContext);
  const location = useLocation();
  const pages = ["/", "/favorites"];

  const updatePage = (page) => {
    setPage(page);
    //update url page param
    const url = new URL(window.location.href);
    url.searchParams.set("page", page);
    window.history.pushState({}, "", url);
  };

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
            {page === "/" ? "Browse" : "Favorites"}
          </Link>
        ))}
      </div>
      <div className="navigation">
        <button
          className="previous"
          disabled={errorMessage || page === 1}
          onClick={() => updatePage(1)}
          title="First Page"
        >
          <FiChevronsLeft />
        </button>
        <button
          className="previous"
          disabled={errorMessage || page === 1}
          onClick={() => updatePage(page - 1)}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          disabled={errorMessage || page === totalPages}
          onClick={() => updatePage(page + 1)}
        >
          <FiChevronRight />
        </button>
        <button
          className="next"
          disabled={errorMessage || page === totalPages}
          onClick={() => updatePage(totalPages)}
        >
          <FiChevronsRight />
        </button>
      </div>
    </div>
  );
};

export default Controls;
