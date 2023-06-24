import React from "react";
import { FaCrown } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Operation = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-2">
          <h4>
            ADMINISTRATION
            <NavLink to="/adminsignin" className="fs-1 text-primary m-3">
              <FaCrown />
            </NavLink>
          </h4>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-2">
          <h4>
            CLIENT{" "}
            <NavLink to="#" className="fs-1 text-primary m-3">
              <TbUsers />
            </NavLink>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Operation;
