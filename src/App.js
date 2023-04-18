import React from "react";
import Header from "./Layout/Header";
import Navbar from "./Layout/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Service from "./Components/Service";
import About from "./Components/About";


const App = () => {
  
  return (
    <>
      <Header/>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/service" element={<Service/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      </Routes>
    </>
  );
};

export default App;
