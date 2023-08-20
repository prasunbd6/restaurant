//Navbar.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/pngegg.png";

import { useUserAuthContext } from "../Context/AdminAuthContext";

const Navbar = () => {
  const { user } = useUserAuthContext();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h1 className="navbar-brand">
            <img
              src={logo}
              alt=""
              height="50px"
              className="image-fluid img-animation"
            />
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"/>
          </button>
        </div>
        <div className="collapse navbar-collapse " id="navbarText">
          <ul className="text-center navbar-nav me-auto mb-2 mb-lg-0 justify-content-end kaushan-font fs-3">
            <li className="nav-item p-2">
              <NavLink to="/" className="nav-link  ">
                Home
              </NavLink>
            </li>

            <li className="nav-item p-2">
              <NavLink to="/about" className="nav-link ">
                About
              </NavLink>
            </li>

            <li className="nav-item  p-2">
              <NavLink to="/contact" className="nav-link ">
                Contact
              </NavLink>
            </li>

            <li className="nav-item  p-2">
              <NavLink to="/Testsection" className="nav-link ">
                Test Section
              </NavLink>
            </li>
{/* 
            <li className="nav-item  p-2">
              <NavLink to="/test" className="nav-link ">
                Test
              </NavLink>
            </li>
*/}
            {!user && (
              <>
                <li className="nav-item  p-2">
                  <NavLink to="/adminauthentication" className="nav-link ">
                    Authentication
                  </NavLink>
                </li>
              </>
            )}

            {user && (
              <>
                <li className="nav-item  p-2">
                  <NavLink to="/admindashboard" className="nav-link ">
                    Profile
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      {/* 
      <hr className="border border-secondary border-1 opacity-25" />
      <hr className="border border-light border-5 opacity-75" />*/}
    </>
  );
};

export default Navbar;
