// Adminsignin.jsx
import { ToastContainer, toast } from "react-toastify";
import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Adminlogin = () => {
  const [entry, setEntry] = useState({ email: "", password: "" });
  const { loginUser } = useAuth();

  const handleInput = (e) => {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!entry.email) {
      toast.warning("Please type your email address");
    } else if (entry.password.length < 1) {
      toast.warning("Field couldn't be empty!!!");
    } else if (entry.password.length < 8) {
      toast.warning("Please type at least 8 characters for the password");
    } else {
        // Sign in with email and password
        loginUser(entry.email, entry.password)
    }
  };

  return (
    <>
      <h1>Admin Login</h1>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  onChange={handleInput}
                  value={entry.email}
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="Type Email Address"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  onChange={handleInput}
                  value={entry.password}
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

              <div className="d-grid mt-2">
                <h6 className="text-secondary text-center">
                  Don't you have any Account?
                </h6>
                <NavLink
                  className="text-center text-info-emphasis text-decoration-none"
                  to="/adminsignup"
                >
                  <b>Sign Up</b>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

export default Adminlogin;
