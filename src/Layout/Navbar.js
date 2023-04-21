import React from "react";
import { NavLink } from "react-router-dom";
//import logo from "../images/logo.jpg"
import logo from "../images/pngegg.png"

const Navbar = () => {
  return (
    <>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
    
    <div className="container-fluid">
      <h1 className="navbar-brand"><img src={logo} alt="" height="200px" className="image-fluid img-animation"/></h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
    <div className="collapse navbar-collapse " id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end kaushan-font fs-2">
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
        </ul>
      </div>
  </nav>

      
    </>
  );
};

export default Navbar;
