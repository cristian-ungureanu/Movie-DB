import React, { useContext } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";
import { GlobalContext } from "../Context/GlobalState";

const Pagination = () => {
  const { page, setPage, totalPages, errorMessage } = useContext(GlobalContext);

  const updatePage = (page) => {
    setPage(page);
    //update url page param
    const url = new URL(window.location.href);
    url.searchParams.set("page", page);
    window.history.pushState({}, "", url);
  };

  return (
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
      <div className="page-number">
        <input
          type="number"
          min="1"
          max={totalPages}
          value={page}
          onChange={(e) => {
            const currentPage = parseInt(e.target.value, 10);
            if (currentPage > totalPages) {
              updatePage(totalPages);
            } else if (currentPage < 1) {
              updatePage(1);
            } else {
              updatePage(currentPage);
            }
          }}
        />
      </div>
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
  );
};

export default Pagination;
