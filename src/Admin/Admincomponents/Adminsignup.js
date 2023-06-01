// Adminsignup.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// React Toast
import { ToastContainer, toast } from 'react-toastify';

// Firebase Signup User (Authentication)
import { app } from "../../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Adminsignup = () => {
  // Firebase Authentication
  const auth = getAuth(app);
  
  const [entry, setEntry] = useState({ email: "", password: "" });

  const handelInput = (e) => {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!entry.email) {
      toast.error("type user Email address");
    } else if (entry.password.length < 1) {
      toast.error(`password can't be empty!`);
    } 
    else if (entry.password.length < 7) {
      toast.error(`type atlease 8 character`);
    } 
    else {
      createUserWithEmailAndPassword(auth, entry.email, entry.password)
        .then(() => {
          // Redirect to Signed in
          toast.success(`Success!!!`);
          setEntry({ email: "", password: "" });
  //navigate("/adminsignin");
          // ...
        })
        .catch((error) => {
          toast.error(`${console.log(error.code)}`);
          
        });
    }
  };

  return (
    <>
      <h1> Admin Sign Up</h1>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-3">
            {/* Login Input Start */}
            <form onSubmit={handelSubmit}>
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
                  placeholder="type price"
                />
              </div>


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
                  className="text-center text-info-emphasis text-decoration-none"
                  to="/adminsignin"
                >
                  <b>Sign In</b>
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

export default Adminsignup;
