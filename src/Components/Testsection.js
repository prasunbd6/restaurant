import React from "react";
//import Home from "../Section/Home";
//import About from "../Section/About";
//import Contact from "../Section/Contact";
//import Faq from "../Section/Faq";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

const Testsection = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="row g-2">
          <div class="col-xxl-1 col-xl-2 col-lg-3 col-md-4">
            <ul class="list-group">
              <li class="list-group-item"><a href="#home">Home</a></li>
              <li class="list-group-item"><a href="#about">About</a></li>
              <li class="list-group-item"><a href="#contact">Contact</a></li>
              <li class="list-group-item"><a href="#faq">Faq</a></li>
            </ul>
          </div>
          <div class="col-xxl-11 col-xl-10 col-lg-9 col-md-8">
            <div className="section-overflow ">
            <div class="container">
                <div class="row justify-content-center align-items-center g-2">
                    <div class="col">
                        <section id="home"><Home/></section>
                        <section id="about"><About/></section>
                        <section id="contact"><Contact/></section>
                        <section id="faq"></section>
                    </div>
                    
                </div>
            </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testsection;
