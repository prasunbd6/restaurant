import React from "react";
import Operation from "./Navlink";
import { useNavigate } from "react-router-dom";
import {useUserAuthContext} from "../../Context/AdminAuthContext"
import { toast } from "react-toastify";

const Admindashboard = () => {
  const { user, Logout } = useUserAuthContext();

  const nevigate = useNavigate();

  const handleLogOut = () => {
    Logout()
      .then(() => {
        nevigate("/");
      })
      .catch((err)=>{
        toast.error(`${err.message}`)
      });
  };

  return (
    <>
      <div className="container-fluid">
        {/* Admin Operation Panel*/}
        <div className="row">
          <div className="col-md-2">
            <Operation />
          </div>
          <div className="col-md text-center">
            <h1 className="text-primary mb-5">Admin (Account) Panel</h1>
            <div className="text-center">
              <h4>User Email: {user && user.email}</h4>
              <p></p>
              <button className="btn btn-lg btn-danger" onClick={handleLogOut}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admindashboard;
