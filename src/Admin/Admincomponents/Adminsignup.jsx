// Adminsignup.jsx
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// Firebase Signup User (Authentication)
import { app } from "../../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Adminsignup = () => {
  // Firebase Authentication
  const auth = getAuth(app);

  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [entry, setEntry] = useState({ email: "", password: "" });

  const handelInput = (e) => {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!entry.email) {
      setErr("type user Email address");
    } else if (entry.password.length < 7) {
      setErr("type atlease 8 character");
    } else {
      createUserWithEmailAndPassword(auth, entry.email, entry.password)
        .then((values) => {
          // Redirect to Signed in
          navigate("/adminsignin");
          // ...
        })
        .catch((error) => {
          console.log(error.code);
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
                  required
                />
              </div>

              <div className="mb-3"><p>{err}</p></div>

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
    </>
  );
};

export default Adminsignup;
