// App.jsx
import React from "react";
import Navbar from "./Layout/Navbar";
import { Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Customersignin from "./Components/Customersignin";
import Footer from "./Layout/Footer";
import Order from "./Components/Order";
import Cartlist from "./Components/Cartlist";
import Header from "./Components/Header";
import Errorpage from "./Components/Errorpage";
import Addcategory from "./Admin/Admincomponents/Addcategory";
import Additem from "./Admin/Admincomponents/Additem";
import Editcategory from "./Admin/Admincomponents/Editcategory";
import Edititem from "./Admin/Admincomponents/Edititem";
import Testfetch from "./Components/Testfetch";
import Adminhome from "./Admin/Admincomponents/Adminhome";
import Adminsignin from "./Admin/Admincomponents/Adminsignin";
import Adminsignup from "./Admin/Admincomponents/Adminsignup";
//For admin authentication  Route
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const App = () => {

  return (
    <>
        <Header />
        <Navbar />
        <Routes>
          {/* Client Section */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/customersignin" element={<Customersignin />} />
          <Route path="/testfetch" element={<Testfetch />} />
          <Route path="/order/:id" element={<Order />} />
          <Route path="/cartlist" element={<Cartlist />} />
          <Route path="/*" element={<Errorpage />} />

          {/* Public Section */}
          <Route path="/adminsignin" element={<Adminsignin />} />
          <Route path="/adminsignup" element={<Adminsignup />} />

          {/* Admin Section Protected Route Start*/}
          
            <Route path="/adminhome" element={<PrivateRoute><Adminhome/></PrivateRoute>} />
            <Route path="/addcategory" element={<PrivateRoute><Addcategory /></PrivateRoute>} />
            <Route path="/editcategory/:id" element={<PrivateRoute><Editcategory /></PrivateRoute>} />
            <Route path="/additem" element={<PrivateRoute><Additem /></PrivateRoute>} />
            <Route path="/edititem/:id" element={<PrivateRoute><Edititem /></PrivateRoute>} />
          
        </Routes>
        <Footer />

    </>
  );
};

export default App;
