import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const authCtx = useContext(UserContext);
  const { isLoggedIn } = authCtx;
  return isLoggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
