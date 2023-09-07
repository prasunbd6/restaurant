import React, { useEffect} from "react";
import { BsCart4 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Header = () => {

  // get all api data of Cart_list
  const apiData = () => {
    axios
      .get("https://prasunbd6.github.io/restaurentApi/cart_list.json")
      .then((response) => {
       
      })
      .catch((err) => console.log(err));
  };

 

  // Call-Back Function
  useEffect(() => apiData());

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <NavLink to="/cartlist" className="fs-1 float-end">
              <BsCart4 />
              <sup className="text-danger"></sup>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
