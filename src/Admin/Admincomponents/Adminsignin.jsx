// Adminsignin.jsx
import { ToastContainer, toast } from 'react-toastify';

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// Firebase
import {
  getAuth,
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from "firebase/auth"; //from Library
import { app } from "../../firebaseConfig"; //from Firebase Configuration

const Adminlogin = () => {
  const auth = getAuth(app);
  const [entry, setEntry] = useState({ email: "", password: "" });
  // eslint-disable-next-line
  const [err, setErr] = useState("");

  const navigate = useNavigate();
  const handelInput = (e) => {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const signinUser = () => {
    signInWithEmailAndPassword(auth, entry.email, entry.password)
      .then((values) => {
        // Redirect to Signed in
        navigate("/admin");
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  const validateEmail = (email) => {
    // Use Firebase's fetchSignInMethodsForEmail to check if the email exists
    fetchSignInMethodsForEmail(auth, email)
      .then((signInMethods) => {
        if (signInMethods.length === 0) {
          // Email does not exist
          toast.error("Email does not exist.");
        } else {
          // Email exists
          toast.success("Welcome");
          signinUser();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!entry.email) {
      toast.warning ("Please type your email address");
    } else if (entry.password.length < 8) {
      toast.warning ("Please type at least 8 characters for the password");
    } else {
      // Call the email validation function
      validateEmail(entry.email);
    }
  };

  return (
    <>
      <h1>Admin Login</h1>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-3">
            {/* Login Input Start */}
            <form onSubmit={handelSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  onChange={handelInput}
                  value={entry.email}
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="type Email Address"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  onChange={handelInput}
                  value={entry.password}
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="**********"
                />
              </div>

              <div className="mb-3">
              {err && toast.error(err)} {/* Display toast error */}
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
            {/*Login Input Close */}
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000}/>
    </>
  );
};

export default Adminlogin;
