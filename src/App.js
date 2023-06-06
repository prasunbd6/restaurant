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
//For admin authentication  Route
import AdminPrivateRoute from "./PrivateRoute/AdminPrivateRoute";
import AdminAuthentication from "./Admin/Admincomponents/AdminAuthentication";
import AdminDashboard from "./Admin/Admincomponents/AdminDashboard";

const App = () => {

  return (
    <>  
        <Header />
        <Navbar />
        <Routes>
          {/* Client Section */}
          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/customersignin" element={<Customersignin />} />
          <Route path="/testfetch" element={<Testfetch />} />
          <Route path="/order/:id" element={<Order />} />
          <Route path="/cartlist" element={<Cartlist />} />
          
          {/* Public Section */}
          <Route path="/" element={<Home />} />
          <Route path="/adminauthentication" element={<AdminAuthentication/>}/>
          <Route path="/adminhome" element={<Adminhome/>} />
          <Route path="/*" element={<Errorpage />} />

          {/* Admin Section Protected Route Start*/}     
          <Route element={<AdminPrivateRoute/>}>
          <Route path="/admindashboard" element={<AdminDashboard/>} />
          <Route path="/addcategory" element={<Addcategory />} />
            <Route path="/editcategory/:id" element={<Editcategory />} />
            <Route path="/additem" element={<Additem />} />
            <Route path="/edititem/:id" element={<Edititem />} /> 
          </Route>               
        </Routes>
        
        <Footer />
    </>
  );
};

export default App;