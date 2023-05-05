import React from "react";

import Navigationlink from "./Navlink";


const Adminhome = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Navigationlink />
          </div>

          <div className="col-md-1"></div>
          <div className="col-md-6 text-center">
          <h1 className="text-info">Welcome</h1>
          <h1 className="text-dark">To</h1>
           <h1 className="text-primary">Admin Panel</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adminhome;
