// src/firebase/PublicRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const PublicRoute = () => {
  return isAuthenticated() ? <Navigate to="/dashboard/sales" /> : <Outlet />;
};

export default PublicRoute;
