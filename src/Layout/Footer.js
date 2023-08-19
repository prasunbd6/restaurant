import React from "react";
import logo from "../images/pngegg.png";
import { FaHome } from "react-icons/fa";
import { HiOfficeBuilding} from "react-icons/hi";
import { BsFillTelephoneFill} from "react-icons/bs";
import { MdOutlineMarkEmailUnread} from "react-icons/md";
import {MdFacebook} from "react-icons/md";
import {BsTwitter} from "react-icons/bs";
import {FaInstagramSquare} from "react-icons/fa"
import {IoLogoWhatsapp} from "react-icons/io"


const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-light mt-5 mb-1">
        <div className="row justify-content-center">
          {/* Logo */}
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-xxs-12">
          <div className="text-center">
          <img src={logo} alt="" height="200px"/>
          </div>    
          
          </div>
          {/* Address */}
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-xxs-12">
            <div className="mt-3 fs-4">
            <span className="fs-1 text-secondary"><FaHome/> </span>
              <b>Address : </b> <p className="Smooch-font text-dark fs-3"> FT # B2, 423 / B Ashraf Ali Road, Patharghata, Kotowali, Chattogram - 4000. </p>
              <span className="fs-1 text-secondary"><HiOfficeBuilding/> </span>  
              <b>Office : </b> <p className="Smooch-font text-dark fs-3"> 13B, Dost Building , New Market Circle, Kotowali, Chattogram </p>
            </div>
          </div>
        {/* Order */}
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-xxs-12">
          
          {/* Order Information */}
          <div className="mt-3 ms-5 fs-4">
          <b className="text-info text-decoration-underline">Order By : </b> 
          <p className="Smooch-font text-dark fs-3 mt-2">
          <span className="mt-2 fs-3"><BsFillTelephoneFill/> </span> 
          +880 1711-194288 </p>
          
          <p className="Smooch-font text-dark fs-3">  
          <span className="fs-3"><MdOutlineMarkEmailUnread/> </span>
          prasunbd6@gmail.com </p>
          </div>

          {/* Our Social Link */}
          <div className="mt-5 ms-5 fs-4">
          <b className="text-info text-decoration-underline">Social Links : </b>
          <p className="Smooch-font text-dark mt-3 fs-3">
          
          <span className="h1"><MdFacebook/></span>
          <span className="h1 ms-4"><BsTwitter/></span>
          <span className="h1 ms-4"><FaInstagramSquare/></span>
          <span className="h1 ms-4"><IoLogoWhatsapp/></span>
          
          </p>
          
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
