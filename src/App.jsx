// App.jsx
import React from "react";
import Navbar from "./Layout/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Layout/Footer";
import Order from "./Components/Order";
import Cartlist from "./Components/Cartlist";
import Header from "./Components/Header";
import Admin from "./Admin/Admincomponents/Adminhome";
import Errorpage from "./Components/Errorpage";
import Addcategory from "./Admin/Admincomponents/Addcategory";
import Additem from "./Admin/Admincomponents/Additem";
import Editcategory from "./Admin/Admincomponents/Editcategory";
import Edititem from "./Admin/Admincomponents/Edititem";
import Testfetch from "./Components/Testfetch";
import Adminsignin from "./Admin/Admincomponents/Adminsignin";
import Adminsignup from "./Admin/Admincomponents/Adminsignup";
//For admin authentication  Route


const App = () => {

  
  return (
    <>
    
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        {/* Client Section */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/testfetch" element={<Testfetch />}></Route>
        <Route path="/order/:id" element={<Order />}></Route>
        <Route path="/cartlist" element={<Cartlist />}></Route>
        <Route path="/*" element={<Errorpage />}></Route>

        {/* Public Section */}
        <Route path="/adminsignin" element={<Adminsignin />}></Route>
        <Route path="/adminsignup" element={<Adminsignup />}></Route>
       

        
        {/* Admin Section */}
       
        <Route path="/admin" element={<Admin />}/>
        <Route path="/addcategory" element={<Addcategory />}/>
        <Route path="/editcategory/:id" element={<Editcategory />}/>
        <Route path="/additem" element={<Additem />}/>
        <Route path="/edititem/:id" element={<Edititem />}/>
    
      </Routes>
      <Footer />
      </BrowserRouter>
    
    </>
  );
};

export default App;
