import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and update the state
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? "transparent" : ""}>
      <div className="container">
        <ul className="nav-links">
          <li>
            <Link to="/">Browse</Link>
          </li>
          <li>
            <Link to="/watchlist">Watch List</Link>
          </li>
        </ul>
      </div>
    </header>
    // <div className={`top-bar ${isScrolled ? "transparent" : ""}`}>
    //   <div className="container">
    //     <Search />
    //   </div>
    // </div>
  );
};
export default Header;
