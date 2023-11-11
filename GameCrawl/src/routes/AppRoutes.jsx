import { Routes, Route, Navigate } from "react-router-dom";
import Store from "../components/Store/Store";
import Login from "../components/Login/Login";
import MyCollections from "../components/Collection/MyCollections";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/login"></Navigate>}></Route>
      <Route
        path="/store"
        element={
          <ProtectedRoute>
            <Store></Store>
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login></Login>} />
      <Route
        path="/collections"
        element={
          <ProtectedRoute>
            <MyCollections></MyCollections>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
