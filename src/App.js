import React from "react";
import Navbar from "./Layout/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Service from "./Components/Service";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Layout/Footer";
import Order from "./Components/Order";


const App = () => {
  
  return (
    <>
      
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/service" element={<Service/>}></Route>
      <Route path="/order/:id" element={<Order/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
