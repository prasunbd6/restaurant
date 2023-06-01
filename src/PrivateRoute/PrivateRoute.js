//PrivateRoute.js
import { Navigate } from 'react-router-dom';
import useAuth from "../Hooks/useAuth"

const PrivateRoute = ({children}) => {
  const auth=useAuth();

  return auth ? children : <Navigate to="/adminsignin" /> 
}

export default PrivateRoute;
