import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div>
            <NavLink to="/" className="navbar-brand">
              Navbar
            </NavLink>
          </div>
          <div>
            <div className="d-flex justify-content-between align-items-center">
              
              <NavLink to="/" className="nav-item nav-link active">
                <span
                  className="text-white px-1"
                  style={{ textDecoration: "none" }}
                >
                  Products
                </span>
              </NavLink>
              <NavLink to="/addProducts" className="nav-item nav-link active">
                <span
                  className="text-white px-1"
                  style={{ textDecoration: "none" }}
                >
                  Add Products
                </span>
              </NavLink>
              <NavLink to="/cart" className="nav-item nav-link active">
                <span
                  className="text-white px-1"
                  style={{ textDecoration: "none" }}
                >
                  Cart
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
