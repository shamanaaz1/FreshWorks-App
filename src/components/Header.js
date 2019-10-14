import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-white navbar-light shadow-sm">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink activeClassName="active" exact className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" className="nav-link" to="/reports">
            Reports
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
