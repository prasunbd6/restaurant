// App.jsx
import React from "react";
import Navbar from "./Layout/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Customersignin from "./Components/Customersignin";
import Footer from "./Layout/Footer";
import Order from "./Components/Order";
import Cartlist from "./Components/Cartlist";
import Header from "./Components/Header";
import Error from "./Components/Errorpage";
import Addcategory from "./Admin/Admincomponents/Addcategory";
import Additem from "./Admin/Admincomponents/Additem";
import Editcategory from "./Admin/Admincomponents/Editcategory";
import Edititem from "./Admin/Admincomponents/Edititem";
import Testfetch from "./Components/Testfetch";
//For admin authentication  Route
import AdminPrivateRoute from "./PrivateRoute/AdminPrivateRoute";
import Adminauthentication from "./Admin/Admincomponents/Adminauthentication";

import AdminDashboard from "./Admin/Admincomponents/AdminDashboard";
import { useUserAuthContext } from "./Context/AdminAuthContext";
const App = () => {
  const { user } = useUserAuthContext();

  const renderLoginRegisterRoutes = () => {
    if (!user) {
      return (
        <>
        <Route path="/adminauthentication" element={<Adminauthentication />} />
        </>
      )
    } 
  };

  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        
        {/* Public Section */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/customersignin" element={<Customersignin />} />
        
      

        {/* Admin Section Protected Route Start*/}
        {renderLoginRegisterRoutes()}
        <Route element={<AdminPrivateRoute />}>
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/addcategory" element={<Addcategory />} />
          <Route path="/editcategory/:id" element={<Editcategory />} />
          <Route path="/additem" element={<Additem />} />
          <Route path="/edititem/:id" element={<Edititem />} />
          <Route path="*" element={<Error />} />
        </Route>

        {/* Client Section */}
        <Route path="/testfetch" element={<Testfetch />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/cartlist" element={<Cartlist />} />

      </Routes>

      <Footer />
    </>
  );
};

export default App;
