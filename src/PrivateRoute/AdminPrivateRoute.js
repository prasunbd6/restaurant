//PrivateRoute.js
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { auth } from "../firebaseConfig";

//import Adminlogin from "../Admin/Admincomponents/Adminsignin"

const AdminPrivateRoute = () => {
  const location = useLocation();

  return auth.currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/adminauthentication" state={{ from: location }} replace />
  );
};

export default AdminPrivateRoute;
