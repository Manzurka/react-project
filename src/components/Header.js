import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

function Header() {
  return (
    <header>
      <Nav>
        <NavItem>
          <NavLink>
            <Link to="/table">Table</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/news">Recent News</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/add">Add a student</Link>
          </NavLink>
        </NavItem>
      </Nav>
    </header>
  );
}

export default Header;
