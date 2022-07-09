import React from "react";
import { Link } from "react-router-dom";
import pages from "../pages";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1>Axense's Team</h1>
      <div className="pages-container">
        {pages.map((page) => {
          const { id, title, url } = page;
          return (
            <Link to={url} key={id} className="page-link">
              {title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
