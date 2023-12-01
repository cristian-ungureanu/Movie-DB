import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { FaFilter } from "react-icons/fa";
import classNames from "classnames";

const Filters = () => {
  const options = [
    { value: 28, label: "Action" },
    { value: 12, label: "Adventure" },
    { value: 16, label: "Animation" },
    { value: 35, label: "Comedy" },
    { value: 80, label: "Crime" },
    { value: 99, label: "Documentary" },
    { value: 18, label: "Drama" },
    { value: 10751, label: "Family" },
    { value: 14, label: "Fantasy" },
    { value: 36, label: "History" },
    { value: 27, label: "Horror" },
    { value: 10402, label: "Music" },
    { value: 9648, label: "Mystery" },
    { value: 10749, label: "Romance" },
    { value: 878, label: "Science Fiction" },
    { value: 10770, label: "TV Movie" },
    { value: 53, label: "Thriller" },
    { value: 10752, label: "War" },
    { value: 37, label: "Western" },
  ];

  const {
    categories,
    setCategories,
    showCategories,
    setShowCategories,
    query,
  } = useContext(GlobalContext);

  const handleCategoriesChange = (selectedOption) => {
    if (categories.includes(selectedOption.value)) {
      setCategories(
        categories.filter((category) => category !== selectedOption.value),
      );
    } else {
      setCategories([...categories, selectedOption.value]);
    }
  };

  return (
    <div className="filters">
      <button
        className={classNames("btn", { active: showCategories })}
        onClick={() => setShowCategories(!showCategories)}
      >
        <FaFilter />
      </button>
      {showCategories && (
        <div className="tabs category-tabs">
          {options.map((option) => (
            <button
              key={option.value}
              className={
                categories.includes(option.value)
                  ? "tab-item active"
                  : "tab-item"
              }
              onClick={() => handleCategoriesChange(option)}
              disabled={query !== ""}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filters;
