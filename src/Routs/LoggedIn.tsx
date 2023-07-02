
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { useContext } from "react";

const  NotLoggedInRoutes=() =>{
  const { user } = useContext(AuthContext)

  return user ? <Navigate to="/" /> : <Outlet />;
}
export default NotLoggedInRoutes