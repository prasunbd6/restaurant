//PrivateRoute.js
import { Navigate, Outlet } from "react-router-dom";
import { useUserAuthContext } from "../Context/AdminAuthContext";

const AdminPrivateRoute = () => {

  const {user}=useUserAuthContext();
  //const Authentication = localStorage.getItem("token");

  return user ? <Outlet /> : <Navigate to="/adminauthentication" />;
};

export default AdminPrivateRoute;
