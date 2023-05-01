import React from "react";
import Navbar from "./Layout/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Service from "./Components/Service";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Layout/Footer";
import Order from "./Components/Order";
import Cartlist from "./Components/Cartlist";
import Header from "./Components/Header";
//import AdminAddCategory from "../src/Admincomponents/Addcatagory";
import Adminhome from "./Admincomponents/Adminhome";

const App = () => {
  return (
    <>
    <Header />
      <Navbar />
      <Routes>
  {/*Client Panel*/}
        <Route path="/" element={<Home />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/order/:id" element={<Order />}></Route>
        <Route path="/cartlist" element={<Cartlist />}></Route>
        {/*Admin Panel*/}
        <Route path="/admin" element={<Adminhome />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
