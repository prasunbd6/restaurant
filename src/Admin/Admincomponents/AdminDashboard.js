import React from "react";
import Operation from "./Navlink";
import { useNavigate } from "react-router-dom";
import userLogOut from "../../auth/adminUserLogout";

const Admindashboard = () => {
  const navigate = useNavigate();
  const { error, logOut } = userLogOut();

  const handleLogOut = async () => {
    await logOut();
    if (!error) {
      navigate("/adminauthentication");
    }
  };

  return (
    <>
      <div className="container-fluid">
        {/* Admin Icons*/}

        {/* <div className="row">
          <div class="d-flex justify-content-end">
            <span className="fs-3 text-secondary ">
              <i className="m-2">
                <FcBusinessman />
              </i>
              <i className="m-2">
                <FaPowerOff />
              </i>
            </span>
          </div>
        </div>*/}

        {/* Admin Operation Panel*/}
        <div className="row">
          <div className="col-md-2">
            <Operation />
          </div>
          <div className="col-md text-center">
            <h1 className="text-primary mb-5">Admin (Account) Panel</h1>
            <div className="text-center">
              <h4>User Email:</h4>
              <p>{}</p>
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
