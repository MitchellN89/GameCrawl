import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserProvider";

function ProtectedRoute({ children }) {
  const [user] = useUserContext();

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children ? children : <Outlet />;
}
export default ProtectedRoute;
