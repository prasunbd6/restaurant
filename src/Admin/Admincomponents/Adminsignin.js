import { ToastContainer} from "react-toastify";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import adminUserLogin from "../../auth/adminUserLogin";

const Adminlogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  //const handleInput = (e) => {
    //setEntry({ ...entry, [e.target.name]: e.target.value });
  //};

  const handleLogin = async (e) => {
    e.preventDefault();
      await login(email, password);
      if (!error) {
        navigate(from, { replace: true });
        email("");
        password("");
        return;
      } else {
        setErrorMessage(error);
      }
    }

    const from = location.state?.from?.pathname || "/admindashboard";
    const { error, login } = adminUserLogin();

    return (
      <>
        <h1 className="text-center">Admin Login</h1>
        <div className="container-fluid mt-3">
          <div className="row justify-content-center">
            <div className="col-md-3">
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    
                  onChange={(e)=>{setEmail(e.target.value)}}
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
                  
                  onChange={(e)=>{setPassword(e.target.value)}}
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="**********"
                  />
                </div>
                {error && <p>{errorMessage}</p>}
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
                    onClick={props.toggleFrom}
                    className="text-center text-info-emphasis text-decoration-none"
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
