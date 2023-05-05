import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/pngegg.png"

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <img src={logo} alt="" height="150px" className="image-fluid img-animation"/> 
    </div>
    <div className="collapse navbar-collapse " id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end kaushan-font fs-3">
          <li className="nav-item m-2">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item m-2">
            <NavLink to="/service" className="nav-link">Service</NavLink>
          </li>
          <li className="nav-item  m-2">
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item  m-2">
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </li>
          <li className="nav-item  m-2">
            <NavLink to="/admin" className="nav-link">Administration</NavLink>
          </li>
        </ul>
      </div>
  </nav>

      
    </>
  );
};

export default Navbar;
