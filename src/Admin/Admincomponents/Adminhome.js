import React from "react";
import { FcBusinessman } from "react-icons/fc";
import { FaPowerOff } from "react-icons/fa";
import Operation from "./Navlink";
// Signout
import useAuth from "../../Hooks/useAuth";


const Adminhome = () => {
  const { signOutUser } = useAuth();

  const handleSignOut = () => {
    signOutUser();
  };
  
  return (
    <>
      <div className="container-fluid">
      {/* Admin Icons*/}
      <div className="row">
        <div class="d-flex justify-content-end">
          <span className="fs-3 text-secondary ">
            <i className="m-2"><FcBusinessman /></i>
            <i className="m-2" onClick={handleSignOut}><FaPowerOff /></i>
          </span>
        </div>
      </div>
      {/* Admin Operation Panel*/}
      <div className="row">
        <div className="col-md-2">
          <Operation/>
        </div>
        <div className="col-md text-center">
          <h1 className="text-info">Welcome</h1>
          <h1 className="text-dark">To</h1>
          <h1 className="text-primary mb-5">Admin Panel</h1>
        </div>
      </div>
    </div>
    </>
  );
};

export default Adminhome;
