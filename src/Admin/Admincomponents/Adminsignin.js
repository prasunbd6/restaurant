import {toast } from "react-toastify";
import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { useUserAuthContext } from "../../Context/AdminAuthContext";


const Adminlogin = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate()
  const { Login } = useUserAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("type all fields");
    }
    if (password.length <= 5) {
      toast.error("password must be atleast 6 character");
    } else {
      Login(email,password)
        .then(() => {
          navigate("/admindashboard");
        })
        .catch((err) => toast.error(`${err.message}`));
    }
  };


  return (
    <>
      <h1 className="text-center">Admin Login</h1>
      <div className="container-fluid mt-3">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="Type Email Address"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Password
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="**********"
                />
              </div>

              <div className="d-grid mt-4">
                <button type="submit" className="btn btn-sm btn-danger">
                  Submit
                </button>
              </div>
              </form>
              <div className="d-grid mt-2">
                <h6 className="text-secondary text-center">
                  Don't you have any Account?
                </h6>
                <NavLink
                  onClick={props.toggleForm}
                  className="text-center text-info-emphasis text-decoration-none"
                >
                  <b>Sign Up</b>
                </NavLink>
              </div>
            
          </div>
        </div>
      </div>

    </>
  );
};

export default Adminlogin;
