// Adminsignup.jsx
import React, { useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";
// React Toast
import { ToastContainer, toast } from "react-toastify";
import { useUserAuthContext } from "../../Context/AdminAuthContext";

const Adminsignup = (props) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { Register } = useUserAuthContext();
const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("type email address");
    }
    if (!password) {
      toast.error("type password");
    }
    if (password.length <= 5) {
      toast.error("password must be atleast 6 character");
    } else {
      Register(email, password)
        .then(() => {
          toast.success("success")
          navigate("/admindashboard")
        }) 
        
        .catch((err) => toast.error(`${err.message}`))
        .finally(()=>setEmail(""),setPassword(""))
       
    }
  };

  return (
    <>
      <h1 className="text-center"> Admin Sign Up</h1>

      <div className="container-fluid mt-3">
        <div className="row justify-content-center">
          <div className="col-md-3">
            {/* Login Input Start */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="type Email Address"
                  
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="type password"
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
                  You wanna Sign In your Account?
                </h6>
                <NavLink
                onClick={props.toggleForm}
                  className="text-center text-info-emphasis text-decoration-none"
                >
                  <b>Sign In</b>
                </NavLink>
              </div>
            
            {/*Login Input Close */}
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

export default Adminsignup;
