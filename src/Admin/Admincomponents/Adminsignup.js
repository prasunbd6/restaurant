// Adminsignup.jsx
import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
// React Toast
import { ToastContainer } from "react-toastify";

import userSignUp from "../../auth/adminUserSignup";

const Adminsignup = (props) => {
  const [entry, setEntry] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/admindashboard";

  const { error, signUp } = userSignUp();

  const handelInput = (e) => {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    await signUp(entry.email, entry.password);
    if (!error) {
      navigate(from, { replace: true });
      entry.email("");
      entry.password("");
      return;
    } else {
      setErrorMsg(error);
    }
  };

  return (
    <>
      <h1 className="text-center"> Admin Sign Up</h1>
      <div className="container-fluid mt-3">
        <div className="row justify-content-center">
          <div className="col-md-3">
            {/* Login Input Start */}
            <form onSubmit={handleCreateUser}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  onChange={handelInput}
                  value={entry.email}
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="type Email Address"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  onChange={handelInput}
                  value={entry.password}
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="type password"
                />
              </div>
              {error && <p>{errorMsg}</p>}
              <div className="d-grid mt-4">
                <button type="submit" className="btn btn-sm btn-danger">
                  Submit
                </button>
              </div>

              <div className="d-grid mt-2">
                <h6 className="text-secondary text-center">
                  You wanna Sign In your Account?
                </h6>
                <NavLink
                  onClick={props.toggleFrom}
                  className="text-center text-info-emphasis text-decoration-none"
                >
                  <b>Sign In</b>
                </NavLink>
              </div>
            </form>
            {/*Login Input Close */}
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

export default Adminsignup;
