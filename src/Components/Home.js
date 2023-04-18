import React, { useState } from "react";
import logo from "../images/logo.jpg";

const Home = () => {
    const [activeCategory, setActiveCategory]=useState([]);
    const []=useState("");
  return (
    <>
      {/* Logo */}
      <div className="container-fluid mt-5">
        <div className="row justify-content-md-center">
          <div className="col-md-4">
            <img src={logo} alt="" height="100px" width="500px" className="" />
          </div>
        </div>
      </div>

      {/* Food Menu */}
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <nav class="navbar bg-body-tertiary">
              <div class="container-fluid">
                <a class="navbar-brand"> Cat-1 </a>
                <a class="navbar-brand"> Cat-2 </a>
                <a class="navbar-brand"> Cat-3 </a>
                <a class="navbar-brand"> Cat-4 </a>
                <a class="navbar-brand"> Cat-5 </a>
                <a class="navbar-brand"> Cat-6 </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
